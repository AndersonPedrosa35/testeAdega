import { useMemo } from 'react'
import { useBuyButton } from 'src/sdk/cart/useBuyButton'
import { useCart } from 'src/sdk/cart'

import convertToIdProductCart from 'src/helpers/convertToIdProductCart'
import getBrand from 'src/helpers/getBrand'

import Button from 'src/components/ui/Button'
import QuantitySelector from './QuantitySelector'

import { IProduct } from './typings'
import './buy-button.scss'

const BuyButton = (props: IProduct) => {
  const {
    id,
    sku,
    gtin,
    name: variantName,
    brand,
    isVariantOf,
    image: [img],
    offers: { lowPrice: spotPrice, offers },
    additionalProperty,
  } = props
  
  const outOfStock = offers[0].availability === 'https://schema.org/OutOfStock'
  const idCart = convertToIdProductCart(id , offers[0].seller.identifier, spotPrice)
  const { items } = useCart()

  const isItemInCart = useMemo(() => {
    return items.filter((prod) => {
      return prod.itemOffered.sku === sku
    })
  }, [items, sku])

  const buyProps = useBuyButton({
    id: idCart,
    price: spotPrice,
    listPrice: offers[0].listPrice,
    seller: offers[0].seller,
    quantity: 1,
    itemOffered: {
      sku,
      name: variantName,
      gtin,
      image: [img],
      brand: { name: getBrand(brand) },
      isVariantOf,
      additionalProperty,
    },
  })

  if (outOfStock) {
    return <span className="box--unavailable" data-fs-unavailable-product>indisponível</span>
  }

  if (isItemInCart.length > 0 && isItemInCart[0].quantity > 0) {
    return <QuantitySelector item={isItemInCart}/>
  }

  return (
    <Button
        {...buyProps}
        className="button button__add-to-cart shelf__button shelf__button-add-to-cart"
    >
        Adicionar
    </Button>
  )
}

export default BuyButton
