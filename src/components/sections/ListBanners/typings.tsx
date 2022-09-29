export interface IListBannersData {
  data: ListBanners;
}

export interface ListBanners {
  title?: string;
  banners: IBanner[];
}

export interface IBanner {
  desktopImage: string;
  mobileImage: string;
  link?: string;
  alt?: string;
}
