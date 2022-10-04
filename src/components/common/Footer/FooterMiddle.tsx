import { useStaticQuery, graphql } from 'gatsby'
import { Image } from 'src/components/ui/Image'
import NavFooter from './NavFooter'
import FooterContact from './FooterContact'
import { IPaymentImage, ICertificateImage } from './typings'

function FooterMiddle() {
  const data = useStaticQuery(
    graphql`
      query FooterPayment {
        cmsFooter {
          pagamentosDisponiveis {
            payments {
              listPayment {
                alt
                image
              }
            }
          }
          selos {
            certificates {
              listCertificates {
                alt
                image
                link
                target
              }
            }
          }
        }
      }
    `
  )

  const payments =
    data?.cmsFooter?.pagamentosDisponiveis?.payments

  const selos = data?.cmsFooter?.selos?.certificates

  if (!payments) {
    return null
  }

  return (
    <div className="footer__middle">
      <div className="container">
        <div className="footer__middle-firstColumn">
          <NavFooter />
          <FooterContact /> 
        </div>

        <div className="footer__middle-secondColumn">
          <div className="footer__payment">
            <ul>
              {payments?.listPayment?.map(
                ({ alt, image }: IPaymentImage, idx: number) => {
                  return (
                    <li key={idx}>
                        <Image
                          preload
                          loading="eager"
                          src={image}
                          alt={alt ?? "Pagamento"}
                          width={34}
                          height={24}
                        />
                    </li>
                  )
                }
              )}
            </ul>
          </div>

          <div className="footer__certificates">
            <ul>
              {selos && (
                <>
                  {selos?.listCertificates.map(({alt, image, link, target}: ICertificateImage, idx: number) => {
                    return (
                      <li key={`${idx}-${image}`}>
                        <a href={link ?? '/'} target={target ? "_blank" : "_self"}>
                          <Image
                            preload
                            loading="eager"
                            src={image}
                            alt={alt ?? "Certificado"}
                            width={129}
                            height={21}
                          />
                        </a>
                      </li>
                    )
                  })}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterMiddle
