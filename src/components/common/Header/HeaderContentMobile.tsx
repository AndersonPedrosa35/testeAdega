import { Link } from "gatsby";
import Logo from "src/components/ui/Logo";
import MenuMobile from "../MenuMobile";
import IconWishlist from "src/components/ui/Icons/IconWishlist";
import IconSearch from "src/components/ui/Icons/IconSearch";
import CartToggle from "src/components/cart/CartToggle";
import IconMenu from "src/components/ui/Icons/IconMenu";
import SearchInput from "../SearchInput";
import IconClose from "src/components/ui/Icons/IconClose";
import { Overlay } from "@faststore/ui";
import { useUI } from 'src/sdk/ui/Provider'

const HeaderContentMobile = () => {
  const { 
    openNavbar, 
    navbar: displayNavbar,  
    openSearchInput, 
    closeSearchInput,
    searchInput: displaySearchInput
  } = useUI()

  return (
    <>
      <div className="container">
        <div>
          <button
            className="button-menu"
            onClick={openNavbar}
          >
            <IconMenu />
          </button>

          <Link to="/" className="logo" title="Logo Adega Marche">
            <Logo />
          </Link>

          <button className="button-search" onClick={() => { displaySearchInput ? closeSearchInput() : openSearchInput() }}>
            { displaySearchInput ? <><IconClose stroke="#fff"  /> <Overlay /></> : <IconSearch /> }
          </button>

          <Link to="/wishlist" className="button-wishlist">
            <IconWishlist stroke="#fff" />
          </Link>

          <CartToggle />
        </div>
      </div>
      
      {displayNavbar &&  <MenuMobile />}
      {displaySearchInput ? <SearchInput /> : null}
    </>
  );
};

export default HeaderContentMobile;
