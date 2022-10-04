
import { useSession } from 'src/sdk/session'
import { graphql } from 'gatsby'
import { mark } from 'src/sdk/tests/mark'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import draftToHtml from 'draftjs-to-html'
import { Image } from 'src/components/ui/Image'

import type { PageProps } from 'gatsby'
import type { 
  InstitutionalAboutUsQuery, 
  InstitutionalAboutUsQueryVariables
} from '@generated/graphql'

import 'src/styles/pages/institutional-page.scss'

export type Props = PageProps<
  InstitutionalAboutUsQuery,
  InstitutionalAboutUsQueryVariables
> & { id: string }

function Page(props: Props) {
  const { 
    data, 
    location: { pathname, host }
  } = props
  const { locale } = useSession()
  const siteUrl = `https://${host}${pathname}`

  const dataInstitutional = data?.cmsInstitutionalPage?.sections?.filter(section => section.name === 'Sobre')
  const seo = data.cmsInstitutionalPage?.seo?.siteMetadataWithSlug

  const [
    {
      data: { title, titleText, textOne, textTwo, textThree, youtube, banner},
    },
  ]: any = dataInstitutional

  return (
    <>
      <GatsbySeo
        title={seo?.title ?? 'Institutional'}
        description={seo?.description ?? ''}
        titleTemplate={seo?.title ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: seo?.title ?? '',
          description: seo?.description ?? '',
        }}
      />
      <div className="institutional">
        <div className="institutional__container container">
          <h1 className="institutional__title">{ title ?? 'Institucional'}</h1>
          <div className="institutional__box institutional__box--custom">
            <h2 className="institutional__subtitle">{titleText}</h2>
            {textOne && (
              <div
                className="institutional__text"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(JSON.parse(textOne)),
                }}
              />
            )}
            {youtube && (
              <div className="institutional__video">
                <iframe
                  width="100%"
                  height="100%"
                  src={youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {textTwo && (
              <div
                className="institutional__text"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(JSON.parse(textTwo)),
                }}
              />
            )}
          </div>
          <div className="institutional__box">
            <Image
              src={banner.desktopImage ?? '/'}
              alt={banner.alt ?? 'Image - Sobre Nós'}
              width={1086}
              height={360}
              srcSet={`${banner.mobileImage} 330w, ${banner.desktopImage} 1086w` }
              sizes="(max-width: 600px) 330px,
              1086px"
            />
            {textThree <= 8 && (
              <div
                className="institutional__text"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(JSON.parse(textThree)),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const querySSG = graphql`
  query InstitutionalAboutUs($id: String) {
    cmsInstitutionalPage(id: { eq: $id }) {
      seo {
        siteMetadataWithSlug {
          description
          title
          slug
        }
      }

      sections {
        data
        name
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
