
import Submenu from "../Submenu";
import { Link } from "gatsby";
import { Overlay } from "@faststore/ui";

const ListLinks = ({ menu }: any) => {

  if (!menu.length) {
    return null;
  }

  return (
    <ul className="navItems__list">
      {menu?.map(({ item }: any, idx: number) => {
        const submenu = item?.submenu;

        return (
          <li
            key={`${item.title}-${idx}`}
            className={`
                navItems__list-item 
                ${!submenu.length ? "notSubmenu" : ""}
                `}
          >
            {submenu.length ? <Overlay data-modal-overlay /> : null }

            <Link to={item.link ? item.link : "/"} title={item.title} className="navItems__list-link">
              {item.title}
            </Link>

            {submenu ? (
              <Submenu
                submenuLinks={item?.submenu}
                submenuBanner={item?.submenuImage}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ListLinks;
