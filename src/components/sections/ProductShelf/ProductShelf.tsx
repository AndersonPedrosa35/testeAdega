import Slider from 'react-slick'
import Title from 'src/components/sections/Title'
import ProductCard from 'src/components/product/ProductCard'

import { convertSearchParamsQuery } from 'src/helpers/convertSearchParams'
import { isInViewport } from 'src/helpers/isInViewPort'
import { IShelfProps } from './typings'
import { useProductsQuery } from 'src/sdk/product/useProductsQuery'
import { sendAnalyticsEvent } from '@faststore/sdk'
import type { CurrencyCode, ViewItemListEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'
import { useSession } from 'src/sdk/session'

import './shelf.scss'

const ProductShelf = ({
    data, 
    slide,
    customClass,
    id,
}: IShelfProps) => {
  const {
    currency: { code },
  } = useSession()

  const settingsSlide = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: slide?.slideToShowMobile ?? 2,
          slidesToScroll: 1,
          dots: true,
          arrows: slide?.arrowsMobile ?? false,
        },
      },
    ],
  }
  const searchParams = convertSearchParamsQuery(data.searchParams)
  const productsShelf = useProductsQuery(searchParams)
  const products = productsShelf?.edges

  if(!products) {
    return null
  }

  const sendAnalyticsData = () => {
    const element = document.querySelector(`#${id}`) as HTMLElement | null;

    if(isInViewport(element)){

      sendAnalyticsEvent<ViewItemListEvent<AnalyticsItem>>({
        name: 'view_item_list',
        params: {
          item_list_name: id,
          item_list_id: id,
          items: products.map(({ node: product }) => ({
            item_id: product.isVariantOf.productGroupID,
            item_name: product.isVariantOf.name,
            item_brand: product.brand.name,
            item_variant: product.sku,
            price: product.offers.offers[0].price,
            discount:
              product.offers.offers[0].listPrice - product.offers.offers[0].price,
            currency: code as CurrencyCode,
            item_variant_name: product.name,
            product_reference_id: product.gtin,
          })),
        },
      })
    
      window.removeEventListener('scroll', sendAnalyticsData, true)
    }
  }

  if (typeof window !== undefined){
    window.addEventListener('scroll', sendAnalyticsData, true)
  }

  return (
    <div className={`shelf ${customClass ?? ''}`}>
      {data.title && <Title text={data.title} />}

      <Slider {...settingsSlide}>
        {products?.map((product, idx) => (
          <div key={`${product.node.name}-${idx}`}>
            <ProductCard product={product.node} index={idx + 1} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductShelf
