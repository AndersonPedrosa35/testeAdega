import type { ProductSummary_ProductFragment } from '@generated/graphql'

type Variant = 'wide' | 'default'

export interface ProductCardProps {
    product: ProductSummary_ProductFragment
    index: number
    bordered?: boolean
    variant?: Variant
    aspectRatio?: number
}