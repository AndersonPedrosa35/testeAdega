

export interface IBanners {
    banners: IBanner[]
}
  
export interface IBanner {
    desktopImage?: string
    mobileImage?: string
    link?: string
    alt?: string
    target?: boolean 
}

export interface ISizesImages {
    mobile: Sizes
    desktop: Sizes
}

export interface Sizes {
    width: number
    height: number
}
  