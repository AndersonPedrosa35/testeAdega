import { SearchProvider } from "@faststore/sdk";
import { useSession } from 'src/sdk/session'
import { mark } from 'src/sdk/tests/mark'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { applySearchState } from 'src/sdk/search/state'
import ProductGallery from "src/components/sections/ProductGallery";
import type { SearchState } from "@faststore/sdk";
import { convertSearchParamsPage } from "src/helpers/convertSearchParams";

export type Props = any

function Page(props: Props) {
  const {
    pageContext,
    location: { pathname, host },
  } = props;

  const { locale } = useSession();
  const collection =  pageContext?.collectionId

  if(!collection){
    return null
  }

  const siteUrl = `https://${host}${pathname}`;
  
  const newSearchParams: SearchState = convertSearchParamsPage({
    sortCms: "score_desc",
    maxQuantityProducts: 12,
    hideUnavailableItems: false,
    collection: Number(collection),
    type: 'PAGE'
  });

  return (
    <>
      <GatsbySeo
        title={"Coleção"}
        description={"Coleção"}
        titleTemplate={"Coleção"}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: "website",
          url: siteUrl,
          title:  "Coleção",
          description: "Coleção",
        }}
      />
      <SearchProvider
        onChange={applySearchState}
        itemsPerPage={12}
        {...newSearchParams}
      >
        <ProductGallery title={""} />
      </SearchProvider>
    </>
  )
}


Page.displayName = 'Page'
export default mark(Page)
