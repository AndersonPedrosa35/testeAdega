import { graphql, useStaticQuery } from "gatsby";

import IconVtex from "src/components/ui/Icons/IconVtex";
import IconB8one from "src/components/ui/Icons/IconB8one";

const FooterLower = () => {
  const data = useStaticQuery(
    graphql`
      query FooterRodape {
        cmsFooter {
          infosRodape {
            informations {
              copyright
              infoBusiness
            }
          }
        }
      }
    `
  );

  const informations = data?.cmsFooter?.infosRodape?.informations;

  if (!informations) {
    return null;
  }

  return (
    <div className="footer__lower">
      <div className="container">
        <span className="footer__rights">{informations?.copyright}</span>
        <span className="footer__cnpj">{informations?.infoBusiness}</span>
        <div className="footer__powered">
          <span className="footer__made">
            Made with
            <a href="https://vtex.com/" title="vtex" target="__blank">
              <IconVtex />
            </a>
          </span>
          <span className="footer__build">
            Built by
            <a href="https://www.b8one.com/" title="B8one" target="__blank">
              <IconB8one />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterLower;
