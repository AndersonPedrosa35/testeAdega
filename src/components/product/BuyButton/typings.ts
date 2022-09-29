import type { CartItem } from 'src/sdk/cart'

export interface IProduct {
  id: string
  sku: string
  gtin: string
  name: string
  image: Array<{ url: string; alternateName: string }>
  isVariantOf: {
    name: string
    productGroupID: string
  }
  offers: {
    lowPrice: number
    offers: Array<{
      price: number
      listPrice: number
      seller: { identifier: string }
      availability: string
    }>
  }
  brand: {
    brandName?: string
    name?: string
  }
  additionalProperty: {
    propertyID: string;
    name: string;
    value: any;
    valueReference: string;
  }[]
}

export interface IUpdateProps {
  item: CartItem[]
}