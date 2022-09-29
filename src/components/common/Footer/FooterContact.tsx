import { graphql, useStaticQuery } from "gatsby";
import { Image } from "src/components/ui/Image";
import IconMessageWhite from "src/components/ui/Icons/IconMessageWhite";
import { ISocialMedia } from "./typings";

function FooterContact() {
  const data = useStaticQuery(
    graphql`
      query FooterContact {
        cmsFooter {
          contatoFooter {
            contacts {
              buttonContact {
                link
                textButton
              }
              infoAtendimento {
                text
              }
              socialMedia {
                listSocialMedia {
                  alt
                  image
                  link
                  target
                }
              }
            }
          }
        }
      }
    `
  );

  const contacts = data?.cmsFooter?.contatoFooter?.contacts;

  if (!contacts) {
    return null;
  }

  return (
    <div className="footer__contact">
      <div className="footer__contact-infos">
        <h3>Atendimento</h3>
        <a
          href={contacts?.buttonContact?.link}
          className="footer__contact-infos--button"
        >
          <IconMessageWhite />
          {contacts?.buttonContact?.textButton}
        </a>
        <span>{contacts?.infoAtendimento?.text}</span>
      </div>
      <div className="footer__contact-socialMedia">
        <p>Siga Adega Marche nas Redes Sociais</p>
        <ul>
          {contacts?.socialMedia?.listSocialMedia?.map(
            ({ alt, image, link, target }: ISocialMedia, idx: number) => {
              return (
                <li key={`${idx}-${link}`}>
                  <a href={link} title={alt} target={target ? "_blank" : "_self"}>
                    <Image
                      preload
                      loading="eager"
                      src={image}
                      alt={alt ?? "Social Media"}
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

export default FooterContact;
