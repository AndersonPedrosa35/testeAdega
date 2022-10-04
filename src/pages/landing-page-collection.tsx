import { SearchProvider } from "@faststore/sdk";
import { useSession } from 'src/sdk/session'
import { graphql } from "gatsby";
import { mark } from "src/sdk/tests/mark";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import type { PageProps } from "gatsby";
import type {
  LandingCmsCollectionQuery,
  LandingCmsCollectionQueryVariables,
} from "@generated/graphql";
import "src/styles/pages/institutional-page.scss";
import { convertSearchParamsPage }from "src/helpers/convertSearchParams";
import "src/styles/pages/collection.scss";
import "src/styles/pages/plp.scss";
import SectionSeoCollection from "src/components/sections/SectionSeoCollection";
import type { SearchState } from "@faststore/sdk";
import { applySearchState } from 'src/sdk/search/state'
import ProductGallery from "src/components/sections/ProductGallery";

export type Props = PageProps<
  LandingCmsCollectionQuery,
  LandingCmsCollectionQueryVariables
> & { slug: string };

function Page(props: Props) {
  const {
    data,
    location: { pathname, host },
  } = props;

  const { locale } = useSession();

  const siteUrl = `https://${host}${pathname}`;

  const seo = data?.cmsCollection?.infoPage?.siteMetadataWithSlug?.seo;
  const searchParams =
    data?.cmsCollection?.infoPage?.siteMetadataWithSlug?.configCollection;
  const seoSection = data?.cmsCollection?.sections.filter(({name}) => name === "Banners & Texto Seo Categoria")[0]?.data

  const newSearchParams: SearchState = convertSearchParamsPage({
    sortCms: searchParams?.sort ?? "score_desc",
    maxQuantityProducts: searchParams?.maxQuantityProducts ?? 8,
    hideUnavailableItems: searchParams?.hideUnavailableItems ?? false,
    collection: Number(searchParams?.collection) ?? null,
    rangePrice: searchParams?.rangePrice ?? null,
    type: 'PAGE'
  });

  return (
    <>
      <GatsbySeo
        title={seo?.title ?? "Landing Page Collection"}
        description={seo?.description ?? "Landing Page Collection"}
        titleTemplate={seo?.title ?? "Landing Page Collection"}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: "website",
          url: siteUrl,
          title: seo?.title ?? "Landing Page Collection",
          description: seo?.description ?? "Landing Page Collection",
        }}
      />

      <SectionSeoCollection
        seo={seoSection?.textSeo ?? null}
        banners={seoSection?.banners ?? null}
        breadcrumb={[{
          item: seo?.slug ?? '/',
          name: seo?.title ?? 'Página de Coleção', 
          position: 1
        }]}
      />  

      <SearchProvider
          onChange={applySearchState}
          itemsPerPage={12}
          {...newSearchParams}
      >
        <ProductGallery title={seoSection?.textSeo} />
      </SearchProvider>
    </>
  );
}

// export const querySSG = graphql`
//   query LandingCmsCollection($slug: String) {
//     cmsCollection(
//       infoPage: { siteMetadataWithSlug: { seo: { slug: { eq: $slug } } } }
//     ) {
//       infoPage {
//         siteMetadataWithSlug {
//           configCollection {
//             collection
//             hideUnavailableItems
//             maxQuantityProducts
//             sort
//             rangePrice
//           }
//           seo {
//             description
//             slug
//             title
//           }
//         }
//       }

//       sections {
//         data
//         name
//       }
//     }
//   }
// `;

Page.displayName = "Page";
export default mark(Page);
