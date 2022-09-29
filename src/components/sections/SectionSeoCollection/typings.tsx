import { BreadCrumbItemElement } from 'src/components/sections/Breadcrumb/typings'

export interface ISectionSeoCollection { 
    breadcrumb: BreadCrumbItemElement[]
    seo?: SeoText
    banners?: Banner[]
}

interface SeoText{
    title: string
    text: string
}

interface Banner {
    desktopImage: string
    mobileImage?: string
    link?: string
    alt?: string
}