import {
  parseSearchState,
  SearchProvider,
  formatSearchState,
} from "@faststore/sdk";
import { useSession } from 'src/sdk/session'
import { gql } from "@vtex/graphql-utils";
import { graphql } from "gatsby";
import { BreadcrumbJsonLd, GatsbySeo } from "gatsby-plugin-next-seo";
import { useMemo } from "react";
import ProductGallery from "src/components/sections/ProductGallery";
import { ITEMS_PER_PAGE } from "src/constants";
import { applySearchState } from "src/sdk/search/state";
import { mark } from "src/sdk/tests/mark";
import type {
  CollectionPageQueryQuery,
  ServerCollectionPageQueryQuery,
  CollectionPageQueryQueryVariables,
} from "@generated/graphql";
import type { PageProps } from "gatsby";
import type { SearchState } from "@faststore/sdk";
import SectionSeoCollection from "src/components/sections/SectionSeoCollection";

import "src/styles/pages/plp.scss";

type Props = PageProps<
  CollectionPageQueryQuery,
  CollectionPageQueryQueryVariables,
  unknown,
  ServerCollectionPageQueryQuery
> & { slug: string };


const useSearchParams = (props: Props): SearchState => {
  const {
    location: { href, pathname },
    serverData,
  } = props;

  const selectedFacets = serverData?.collection?.meta.selectedFacets;

  const hrefState = useMemo(() => {
    const newState = parseSearchState(
      new URL(href ?? pathname, "http://localhost")
    );

    // In case we are in an incomplete url
    if (newState.selectedFacets.length === 0) {
      newState.selectedFacets = selectedFacets ?? [];
    }

    return formatSearchState(newState).href;
  }, [href, pathname, selectedFacets]);

  return useMemo(() => parseSearchState(new URL(hrefState)), [hrefState]);
};

function Page(props: Props) {
  const {
    data: { site },
    serverData: { collection },
    location: { host },
    slug,
  } = props;

  const { locale } = useSession();
  const searchParams = useSearchParams(props);
  // const seoSection = cmsCategory?.sections.filter(
  //   ({ name }) => name === "Banners & Texto Seo Categoria"
  // )[0].data;

  const { page } = searchParams;
  const title = collection?.seo.title ?? site?.siteMetadata?.title ?? "";
  const pageQuery = page !== 0 ? `?page=${page}` : "";
  const canonical =
    host !== undefined
      ? `https://${host}/${slug}/${pageQuery}`
      : `/${slug}/${pageQuery}`;

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      {/* SEO */}
      <GatsbySeo
        title={title}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ""}
        description={site?.siteMetadata?.description ?? ""}
        canonical={canonical}
        language={locale}
        openGraph={{
          type: "website",
          title,
          description: site?.siteMetadata?.description ?? "",
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={collection?.breadcrumbList.itemListElement ?? []}
      />

      <SectionSeoCollection
        breadcrumb={collection.breadcrumbList.itemListElement ?? []}
      />

      <ProductGallery title={title} />
    </SearchProvider>
  );
}

export const querySSG = graphql`
  query CollectionPageQuery($slug: String) {
    site {
      siteMetadata {
        titleTemplate
        title
        description
      }
    }

    cmsCategory(infoPage: {siteMetadataWithSlug: {seo: {slug: {eq: $slug}}}}) {
      sections {
        data
        name
      }
      infoPage {
        siteMetadataWithSlug {
          seo {
            slug
          }
        }
      }
    }
  }
`;

export const querySSR = gql`
  query ServerCollectionPageQuery($slug: String!) {
    collection(slug: $slug) {
      slug
      seo {
        title
        description
      }
      breadcrumbList {
        itemListElement {
          item
          name
          position
        }
      }
      meta {
        selectedFacets {
          key
          value
        }
      }
    }
  }
`;

export const getServerData = async ({
  params: { slug },
}: {
  params: Record<string, string>;
}) => {
  const ONE_YEAR_CACHE = `s-maxage=31536000, stale-while-revalidate`;
  const { isNotFoundError } = await import("@faststore/api");
  const { execute } = await import("src/server/index");
  const { data, errors = [] } = await execute({
    operationName: querySSR,
    variables: { slug },
  });

  const notFound = errors.find(isNotFoundError);

  if (notFound) {
    const params = new URLSearchParams({
      from: encodeURIComponent(`/${slug}`),
    });

    return {
      status: 301,
      props: null,
      headers: {
        "cache-control": ONE_YEAR_CACHE,
        location: `/404/?${params.toString()}}`,
      },
    };
  }

  if (errors.length > 0) {
    throw errors[0];
  }

  return {
    status: 200,
    props: data,
    headers: {
      "cache-control": ONE_YEAR_CACHE,
    },
  };
};

Page.displayName = "Page";
export default mark(Page);
