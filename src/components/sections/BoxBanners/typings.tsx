export interface IBoxBanners {
  data: BoxBanner[];
  type?: string;
}

export interface BoxBanner {
  image: string;
  alt?: string;
  link?: string;
  title?: string;
  target?: boolean
}
