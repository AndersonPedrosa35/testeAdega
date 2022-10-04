import { useSession } from 'src/sdk/session'
import { graphql, Link } from 'gatsby'
import type { PageProps } from 'gatsby'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import draftToHtml from 'draftjs-to-html'
import isMobile from 'src/helpers/isMobile'
import Breadcrumb from 'src/components/sections/Breadcrumb'

import type {
    InstitutionalPoliticsQuery,
    InstitutionalPoliticsQueryVariables,
  } from '@generated/graphql/index'

export type Props = PageProps<
  InstitutionalPoliticsQuery,
  InstitutionalPoliticsQueryVariables
>

import 'src/styles/pages/institutional-politics-page.scss'

function Page({ data, location: { pathname, host }} : Props) {
  const { allCmsPoliticsPage, cmsPoliticsPage } = data
  const { locale } = useSession()
  const siteUrl = `https://${host}${pathname}`

  const seo = cmsPoliticsPage?.seo?.siteMetadataWithSlug
  const breadcrumb = [
    {
      item: cmsPoliticsPage?.menuLateral?.menuLateral?.title ?? 'Institutional',
      name: cmsPoliticsPage?.menuLateral?.menuLateral?.title ?? 'Institutional', 
      position: 1
    }
  ]

  return(
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
      {isMobile() ? <Breadcrumb breadcrumbList={breadcrumb}/> : null}

      <div className="politica">
        <div className="politica__container grid">
          <div className="politica__menu flex flex-col">
            <h1 className="politica__title mb-8">
              {cmsPoliticsPage?.sections[0].data.title ?? 'Institucional'}
            </h1>
            <hr className="politica__hr mb-16" />
            <h3 className="politica__moreInfo mb-8">
              {cmsPoliticsPage?.menuLateral?.menuLateral?.title ??
                'Mais informações'}
            </h3>
            <nav className="politica__nav">
              <ol className="politica__nav--list">
                {allCmsPoliticsPage && (
                  <>
                    {allCmsPoliticsPage.nodes.map((node, idx) => {
                      const { seo, sections } = node

                      if (
                        seo?.siteMetadataWithSlug?.slug !==
                        cmsPoliticsPage?.seo?.siteMetadataWithSlug?.slug
                      ) {
                        return (
                          <li key={idx} className="politica__nav--item">
                            <Link to={seo?.siteMetadataWithSlug?.slug ?? '/'}>
                              {sections[0].data.title}
                            </Link>
                          </li>
                        )
                      }

                      return null
                    })}
                  </>
                )}
              </ol>
            </nav>
          </div>
          <div className="politica__content">
            {isMobile() && (
              <h1 className="politica__content--head">
                {cmsPoliticsPage?.sections[0].data.title ?? 'Institucional'}
              </h1>
            )}
            {cmsPoliticsPage?.sections[0].data.text && (
              <div
                className="politica__content--text"
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(
                    JSON.parse(cmsPoliticsPage.sections[0].data.text)
                  ),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

// export const query = graphql`
//   query InstitutionalPolitics($slug: String) {
//     allCmsPoliticsPage {
//       nodes {
//         seo {
//           siteMetadataWithSlug {
//             slug
//           }
//         }
//         sections {
//           data
//         }
//       }
//     }

//     cmsPoliticsPage(seo: { siteMetadataWithSlug: { slug: { eq: $slug } } }) {
//       menuLateral {
//         menuLateral {
//           title
//         }
//       }
//       sections {
//         data
//       }
//       seo {
//         siteMetadataWithSlug {
//           title
//           description
//           slug
//         }
//       }
//     }
//   }
// `

export default Page