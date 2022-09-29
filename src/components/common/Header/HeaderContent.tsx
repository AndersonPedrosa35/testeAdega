import { Link } from "gatsby";
import Logo from "src/components/ui/Logo";
import SearchInput from "../SearchInput";
import IconUser from "src/components/ui/Icons/IconUser";
import IconWishlist from "src/components/ui/Icons/IconWishlist";
import CartToggle from "src/components/cart/CartToggle";
import { sessionStore, useSession, validateSession } from 'src/sdk/session'
import { useEffect } from "react";

const HeaderContent = () => {
  const { isValidating, ...session } = useSession()

  const createNewSession = async () => {
    const newSession = await validateSession({
      ...session,
    })

    if (newSession) {
      sessionStore.set(newSession)
    }

  }

  useEffect(() => {
    createNewSession()
  }, [])

  return (
    <div className="container">
      <Link to="/" className="logo" title="Logo Adega Marche">
        <Logo />
      </Link>

      <SearchInput />

      <Link
        to={session?.person?.id?.length ? "/account" : "/login"}
        className="button-login button-icon"
        title="Login ou Cadastro"
      >
        <span className="header__icon header__icon-user icon-user">
          <IconUser />
          {session?.person?.id?.length ? <>Olá, {session?.person?.givenName ? session?.person?.givenName : session?.person?.email}  :) <br /> Minha Conta </> :  <>Bem-vindo :) <br /> Entre ou cadastre-se</>}
        </span>
      </Link>

      <Link
        to={session?.person?.id?.length ? "/wishlist" : "/login"}
        className="button-wishlist button-icon"
        title="Wishlist"
      >
        <span className="header__icon header__icon-wishlist icon-wishlist">
          <IconWishlist stroke="#fff"/>
          Meus <br /> Favoritos
        </span>
      </Link>

      <CartToggle />
    </div>
  );
};

export default HeaderContent;
