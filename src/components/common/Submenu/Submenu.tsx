import { Link, navigate } from "gatsby";
import type { ISubmenuProps } from "./typings";
import IsMobile from "src/helpers/isMobile";

import { Image } from "src/components/ui/Image";
import { useUI } from 'src/sdk/ui/Provider'

const Submenu = ({ submenuLinks, submenuBanner }: ISubmenuProps) => {
  const { closeNavbar } = useUI()
  if (!submenuLinks?.length && !submenuBanner?.length) {
    return null;
  }

  return (
    <div className="navItems__subItems">
      <div className="container">
        <div className="navItems__subItems-content">
          <div className="navItems__subItems-columns">
            {submenuLinks?.map((item,idx) => {
              return (
                <div
                  className="navItems__subItems-column"
                  key={`${idx}-${item.title}`}
                >
                  <h3>{item.title}</h3>
                  <ul>
                    {item?.links.map((itemLink, id) => {
                      return (
                        <li key={`${item.title}-${id}`}>
                          {
                            IsMobile() ? (
                              <button
                                onClick={() => {
                                  closeNavbar()
                                  navigate(itemLink.link)
                                }}
                                className={`${
                                  itemLink.linkHighlight
                                    ? "navItems__subItems-linkSeeAll"
                                    : ""
                                }`}
                              >
                                {itemLink.title}
                              </button>
                            ) : (
                              <Link
                                to={itemLink.link}
                                title={itemLink.title}
                                target={itemLink.target ? '_blank' : '_self'}
                                className={`${
                                  itemLink.linkHighlight
                                    ? "navItems__subItems-linkSeeAll"
                                    : ""
                                }`}
                              >
                                {itemLink.title}
                              </Link>
                            )
                          }
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          {submenuBanner && (
            <div className="navItems__subItems-banner">
              <Image src={submenuBanner} alt="" width={286} height={320} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
