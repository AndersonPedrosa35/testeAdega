import Newsletter from "src/components/common/Newsletter";
import FooterMiddle from "src/components/common/Footer/FooterMiddle";
import FooterLower from "./FooterLower";

import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Newsletter />
      <FooterMiddle />
      <FooterLower />
    </footer>
  );
}

export default Footer;
