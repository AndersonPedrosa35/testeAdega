import TopBar from "src/components/common/Topbar";
import NavLinks from "src/components/common/NavLinks";
import HeaderContent from "./HeaderContent";
import HeaderContentMobile from "./HeaderContentMobile";
import IsMobile from "src/helpers/isMobile";
import "./header.scss";

function Header() {

  return (
    <>
      <header className="header">
        <TopBar />
        {IsMobile() ? <HeaderContentMobile /> : <HeaderContent />}
      </header>
      {!IsMobile() ? <NavLinks /> : null }
    </>
  );
}

export default Header;
