export interface IPaymentImage {
  image: string
  alt?: string
}

export interface ICertificateImage {
  image: string
  alt?: string
  link: string
  target: boolean
}

export interface FooterMenu {
  title: string
  links: IFooterMenuLinks[]
}

export interface IFooterMenuLinks {
  title: string
  link: string
  target: boolean
}

export interface ISocialMedia {
  image: string
  link: string
  alt?: string
  target: boolean
}