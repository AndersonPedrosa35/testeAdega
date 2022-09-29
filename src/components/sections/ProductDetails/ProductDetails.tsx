import { sendAnalyticsEvent } from '@faststore/sdk'
import { useSession } from 'src/sdk/session'
import { graphql } from 'gatsby'
import { useEffect  } from 'react'
import { useProduct } from 'src/sdk/product/useProduct'
import type { ProductDetailsFragment_ProductFragment } from '@generated/graphql'
import type { CurrencyCode, ViewItemEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'
import ProductGallery from 'src/components/product/ProductGallery'
import BuyBox from 'src/components/product/BuyBox'
import ProductShare from 'src/components/product/ProductShare'
import ProductShippingCalculator from 'src/components/product/ProductShippingCalculator'

interface Props {
  product: ProductDetailsFragment_ProductFragment
}

function ProductDetails({ product: staleProduct }: Props) {
  const { currency } = useSession()

  const { data } = useProduct(staleProduct.id, {
    product: staleProduct,
  })

  if (!data) {
    throw new Error('NotFound')
  }

  const {
    product: {
      id,
      sku,
      gtin,
      name: variantName,
      brand,
      isVariantOf: { productGroupID, name,  additionalProperty },
      image: productImages,
      offers: {
        offers: [{ availability, price, listPrice, seller }],
      },
    },
  } = data

  const outOfStock = availability === 'https://schema.org/OutOfStock'

  useEffect(() => {
    sendAnalyticsEvent<ViewItemEvent<AnalyticsItem>>({
      name: 'view_item',
      params: {
        currency: currency.code as CurrencyCode,
        value: price,
        items: [
          {
            item_id: productGroupID,
            item_name: name,
            item_brand: brand.name,
            item_variant: sku,
            price,
            discount: listPrice - price,
            currency: currency.code as CurrencyCode,
            item_variant_name: variantName,
            product_reference_id: gtin,
          },
        ],
      },
    })
  }, [
    productGroupID,
    name,
    brand.name,
    sku,
    price,
    listPrice,
    currency.code,
    variantName,
    gtin,
  ])

  return (
    <div className="product">
      <div className="product__container container">
        <section className="product__main">
          <ProductGallery productImages={productImages} specifications={additionalProperty} id={id}/> 

          <div className="product__details">
            <BuyBox product={data.product} />
            {!outOfStock ? <ProductShippingCalculator id={sku} seller={seller} /> : null}
            <ProductShare /> 
          </div>
        </section>
      </div>
  </div>
  )
}

export const fragment = graphql`
  fragment ProductDetailsFragment_product on StoreProduct {
    id: productID
    sku
    name
    gtin
    description

    isVariantOf {
      productGroupID
      name

      additionalProperty {
        name
        value
      }
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        seller {
          identifier
        }
      }
    }

    breadcrumbList {
      itemListElement {
        item
        name
        position
      }
    }

    additionalProperty {
      propertyID
      name
      value
      valueReference
    }
  }
`

export default ProductDetails
