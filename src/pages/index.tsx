import { useSession } from 'src/sdk/session'
import { graphql } from "gatsby";
import { GatsbySeo, JsonLd } from "gatsby-plugin-next-seo";
import { mark } from "src/sdk/tests/mark";
import type { PageProps } from "gatsby";
import type { HomePageQueryQuery } from "@generated/graphql";
import RenderComponents from "src/components/common/RenderComponents";

import "src/styles/pages/homepage.scss";

export type Props = PageProps<HomePageQueryQuery>;

function Page(props: Props) {
  const {
    data: { site, cmsHome },
    location: { pathname, host },
  } = props;

  const { locale } = useSession();
  const title = site?.siteMetadata?.title ?? "";
  const siteUrl = `https://${host}${pathname}`;

  return (
    <>
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ""}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: "website",
          url: siteUrl,
          title: title ?? "",
          description: site?.siteMetadata?.description ?? "",
        }}
      />
      <JsonLd
        json={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          url: siteUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/s/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <RenderComponents data={cmsHome?.sections} />
    </>
  );
}

export const querySSG = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }

    cmsHome {
      sections {
        name
        data
      }
    }
  }
`;

Page.displayName = "Page";
export default mark(Page);