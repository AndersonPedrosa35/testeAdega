import { useEffect } from "react";
import { Link } from "gatsby";
import { sessionStore, useSession, validateSession } from 'src/sdk/session'

const MenuUser = () => {
  const { isValidating, ...session  } = useSession()

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
    <div className="header__navbar-sectionLogin">
      <h3>
        Olá! {` `} {session?.person?.givenName ? session?.person?.givenName : session?.person?.email}
        <span role="img" aria-label="Hand">
          👋 
        </span>
      </h3>
      <ul>
        <li>
          <a href={session?.person?.id.length ? "/account" : "/login"}>
            {session?.person?.id.length ? 'Minha conta' : 'Entrar ou Criar Conta'}
          </a>
        </li>
        <li>
          <a href={session?.person?.id.length ? "/account/#orders" : "/login"}>
            Meus pedidos
          </a>
        </li>
        <li>
          <Link to={session?.person?.id.length ? "/wishlist" : "/login"}>
            Meus favoritos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuUser;
