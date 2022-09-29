import type { StoreSort } from "@generated/graphql";

interface ISearchParamsCMS {
  sort?: StoreSort;
  maxQuantityProducts: number;
  hideUnavailableItems: boolean;
  collection?: number | null;
  term?: string;
  sortCms?: string;
  rangePrice?: string | null;
  categories?: string | null
  brand?: string | null
  type?: 'PAGE' | null
  crossSelling?: {
    type: string,
    idProduct: string
  }
}

interface IFacets {
  key: string;
  value: string;
}

const transformParams = (params: ISearchParamsCMS) => {
  var filters: IFacets[] = [];

  const maxQuantityProducts = params.maxQuantityProducts ?? 8;
  
  const orderby =
    !params?.sort && params?.sort?.includes("_") ? params?.sort : "score_desc";
  const term = params?.term || '';

  const collection = params?.collection
    ? { key: "productClusterIds", value: params?.collection.toString() }
    : null;

  const rangePrice = params?.rangePrice
    ? { key: "price", value: params?.rangePrice?.replace(":", "-to-") }
    : null;

  const brand = params?.brand ? { key: "brand", value: params?.brand }
  : null;

  const crossSelling = params?.crossSelling ? { key: params?.crossSelling.type, value: params?.crossSelling.idProduct}
  : null;

  function setCategories() {
    if(params?.categories){
      const paramsSplit = params?.categories?.split('/')
  
      paramsSplit?.forEach((param, idx) => {
        setFilters({key: `category-${idx + 1}`, value: param});
      })
    }
  }

  function setFilters(facet: IFacets | null) {
    if (facet != null) {
      filters.push(facet);
    }
  }

  setFilters(collection);
  setFilters(rangePrice);
  setFilters(brand);
  setFilters(crossSelling);
  setCategories();

  return {
    sort: orderby,
    term: term,
    filters: filters,
    maxQuantityProducts,
  }
}

export const convertSearchParamsPage = (params: ISearchParamsCMS) => {
  const {sort, term, filters}  = transformParams(params)

  return {
    base: "/s/",
    page: 0,
    selectedFacets: filters,
    sort,
    term: term,
  };

};

export const convertSearchParamsQuery = (params: ISearchParamsCMS) => {
  const {sort, term, filters, maxQuantityProducts}  = transformParams(params)

  return {
    first: maxQuantityProducts,
    after: (maxQuantityProducts * 0).toString(),
    sort: sort,
    term: term,
    selectedFacets: filters,
  }
}