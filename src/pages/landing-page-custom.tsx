
import { useSession } from 'src/sdk/session'
import { graphql } from 'gatsby'
import { mark } from 'src/sdk/tests/mark'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import type { PageProps } from 'gatsby'
import type { 
  LandingPageCustomQuery, 
  LandingPageCustomQueryVariables
} from '@generated/graphql'

import 'src/styles/pages/institutional-page.scss'

export type Props = PageProps<
    LandingPageCustomQuery,
    LandingPageCustomQueryVariables
> & { id: string }

function Page(props: Props) {
  const { 
    data, 
    location: { pathname, host }
  } = props
  const { locale } = useSession()
  const siteUrl = `https://${host}${pathname}`


  const dataLanding = data?.cmsLandingPageCustom?.sections?.filter(section => section.name === "HTML")

  if (!dataLanding?.length) {
    return null
  }

  const seo = data.cmsLandingPageCustom?.seo?.siteMetadataWithSlug
  const html = dataLanding[0].data.html.html

  return (
    <>
      <GatsbySeo
        title={seo?.title ?? 'Landing Page Custom'}
        description={seo?.description ?? 'Landing Page Custom'}
        titleTemplate={seo?.title ?? 'Landing Page Custom'}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: seo?.title ?? 'Landing Page Custom',
          description: seo?.description ?? 'Landing Page Custom',
        }}
      />

      <div
        className="landing"
        dangerouslySetInnerHTML={{
            __html: html,
        }}
      />
    </>
  )
}

export const querySSG = graphql`
  query LandingPageCustom($id: String) {
    cmsLandingPageCustom(id: {eq: $id}) {
        id
        sections {
          data
          name
        }
        seo {
          siteMetadataWithSlug {
            description
            slug
            title
          }
        }
      }
  }
`

Page.displayName = 'Page'
export default mark(Page)
