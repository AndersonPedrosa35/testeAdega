import ProductGridSkeleton from 'src/components/skeletons/ProductGridSkeleton'
import type { ProductSummary_ProductFragment } from '@generated/graphql'

import ProductCard from '../ProductCard'
import styles from './product-grid.module.scss'

interface Props {
  products: Array<{ node: ProductSummary_ProductFragment }>
  page: number
  pageSize: number
}

function ProductGrid({ products, page, pageSize }: Props) {

  return (
    <ProductGridSkeleton loading={products.length === 0}>
      <ul data-fs-product-grid className={styles.fsProductGrid}>
        {products.map(({ node: product }, idx) => (
          <li key={`${product.id}`}>
            <ProductCard
              product={product}
              index={pageSize * page + idx + 1}
              bordered
            />
          </li>
        ))}
      </ul>
    </ProductGridSkeleton>
  )
}

export default ProductGrid
