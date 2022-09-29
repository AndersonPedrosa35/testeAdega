import type { StoreSort } from "@generated/graphql";

export interface IShelfProps {
  data: IDataShelf;
  slide?: ISlideProps;
  customClass?: string;
  id?: string
}

export interface ISlideProps {
  slideToShowMobile?: number;
  arrowsMobile?: boolean;
}

export interface IDataShelf {
  title?: string;
  searchParams: ISearchParams;
}

export interface ISearchParams {
  sort?: StoreSort;
  maxQuantityProducts: number;
  hideUnavailableItems: boolean;
  collection?: number;
  term?: string;
  crossSelling?: {
    type: string,
    idProduct: string
  }
}