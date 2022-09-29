import { useSearch } from "@faststore/sdk";
import { useState, Suspense, lazy } from "react";
import { mark } from "src/sdk/tests/mark";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import ProductGridSkeleton from "src/components/skeletons/ProductGridSkeleton";
import FilterSkeleton from "src/components/skeletons/FilterSkeleton";
import Section from "../Section";
import { useDelayedFacets } from "./useDelayedFacets";
import { useDelayedPagination } from "./useDelayedPagination";
import { useGalleryQuery } from './useGalleryQuery';
import { useProductsPrefetch } from "./usePageProducts";
import { ButtonLink } from "src/components/ui/Button";
import "./product-gallery.scss";
import { Filter, FilterMobile } from "src/components/search/Filter";
import TotalCount from "src/components/search/TotalCount";
import IsMobile from "src/helpers/isMobile";
import Button from "src/components/ui/Button";
import { SortMobile, Sort } from "src/components/search/Sort";
import IconFilter from "src/components/ui/Icons/IconFilter";
import EmptyGallery from "./EmptyGallery";
import { useUI } from 'src/sdk/ui/Provider'

const GalleryPage = lazy(() => import("./ProductGalleryPage"));
const GalleryPageSkeleton = <ProductGridSkeleton loading />;

interface Props {
  title: string;
  searchTerm?: string;
}

function ProductGallery({ title }: Props) {
  const { openFilter, openFilterOrderby, filter: displayFilter, filterOrderby: displayFilterOrderby} = useUI()
  const { pages, addNextPage } = useSearch();

  const { data } = useGalleryQuery();

  const facets = useDelayedFacets(data);
  const newFacetsWithoutProductClusterId = facets.filter((facet) => facet.label !== 'ProductClusterIds')

  const totalCount = data?.search.products.pageInfo.totalCount ?? 0;
  const { next, prev } = useDelayedPagination(totalCount);

  useProductsPrefetch(prev ? prev.cursor : null);
  useProductsPrefetch(next ? next.cursor : null);

  if (data && totalCount === 0) {
    return (
      <Section
        data-testid="product-gallery"
        className={`fs-product-listing layout__content`}
        data-fs-product-listing
      >
        <EmptyGallery />
      </Section>
    )
  }

  return (
    <Section
      data-testid="product-gallery"
      className={`layout__content-full`}
      data-fs-product-listing
    >
      <section className="product-gallery__filters">
        <div className="container">
          {IsMobile() ? (
            <>
              <Button
                variant="tertiary"
                data-testid="open-filter-button"
                iconPosition="left"
                aria-label="Open Orderby"
                onClick={openFilterOrderby}
              >
                Ordernar Por
              </Button>
              <Button
                variant="tertiary"
                data-testid="open-filter-button"
                icon={<IconFilter />}
                iconPosition="left"
                aria-label="Open Filters"
                onClick={openFilter}
              >
                Filtrar
              </Button>
            </>
          ) : (
            <>
              <TotalCount totalCount={totalCount} />
              <Sort />
            </>
          )}
        </div>
      </section>

      <section
        data-fs-product-listing-content-grid
        className="product-gallery__main"
      >
        <div className="container">
          <div className="product-gallery__main-content">
            {IsMobile() ? <TotalCount totalCount={totalCount} /> : null}

            <div className="product-listing__filters">
              {IsMobile() ? (
                <>
                  {displayFilterOrderby && <SortMobile /> }
                  {displayFilter && <FilterMobile facets={newFacetsWithoutProductClusterId} /> }
                </>
              ) : (
                <FilterSkeleton loading={facets?.length === 0}>
                  <Filter facets={newFacetsWithoutProductClusterId} />
                </FilterSkeleton>
              )}
            </div>
            <div className="product-gallery__products">
              {data ? (
                <Suspense fallback={GalleryPageSkeleton}>
                  {pages.map((page) => (
                    <GalleryPage
                      key={`gallery-page-${page}`}
                      showSponsoredProducts={false}
                      page={page}
                      title={title}
                    />
                  ))}
                </Suspense>
              ) : (
                GalleryPageSkeleton
              )}

              {next !== false && (
                <div data-fs-product-listing-pagination="bottom">
                  <GatsbySeo
                    defer
                    linkTags={[{ rel: "next", href: next.link }]}
                  />
                  <ButtonLink
                    data-testid="show-more"
                    onClick={(e) => {
                      e.currentTarget.blur();
                      e.preventDefault();
                      addNextPage();
                    }}
                    to={next.link}
                    rel="next"
                    variant="secondary"
                    className="product-gallery__button-showMore"
                  >
                    Carregar Mais
                  </ButtonLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}

ProductGallery.displayName = "ProductGallery";
export default mark(ProductGallery);
