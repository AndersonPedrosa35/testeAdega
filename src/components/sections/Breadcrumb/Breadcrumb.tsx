import { Link } from "gatsby";
import IconArrowNext from "src/components/ui/Icons/IconArrowNext";
import { BreadcrumbProps } from "./typings";
import "./breadcrumb.scss";

const Breadcrumb = ({ breadcrumbList }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__container container">
        <ul className="breadcrumb__list">
          <li className="breadcrumb__item">
            <Link
              className="breadcrumb__item--link"
              to="/"
              title="Adega Marche"
            >
              Home
            </Link>
            <IconArrowNext />
          </li>

          {breadcrumbList.map((bread, index) => {
            return (
              <li key={`${bread.name}-${index}`} className="breadcrumb__item">
                <Link
                  className="breadcrumb__item--link"
                  to={bread.item}
                  title={bread.name}
                >
                  {bread.name}
                </Link>

                {index < breadcrumbList.length - 1 && <IconArrowNext />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
