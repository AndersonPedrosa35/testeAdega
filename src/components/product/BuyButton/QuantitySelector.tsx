import { useMemo, useEffect, useState } from 'react'
import { sendAnalyticsEvent } from '@faststore/sdk'
import type { RemoveFromCartEvent, CurrencyCode, AddToCartEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'

import { IUpdateProps } from './typings'

import { useUI } from 'src/sdk/ui/Provider'
import { useCart, cartStore } from 'src/sdk/cart'
import { useSession } from './../../../sdk/session'

import IconMinus from 'src/components/ui/Icons/IconMinus'
import IconPlus from 'src/components/ui/Icons/IconPlus'

const QuantitySelector = ({ item }: IUpdateProps) => {

  const { updateItemQuantity, removeItem } = cartStore
  const { gifts, messages } = useCart()
  const { pushToast } = useUI()
  const {
    currency: { code },
  } = useSession()

  const quantity = useMemo(() => {
    const itemGift = gifts?.filter(gift => gift.itemOffered.sku === item[0].itemOffered.sku)

    if (itemGift.length) {
      return Number(itemGift[0]?.quantity) + Number(item[0]?.quantity)
    }

    if (item.length) {
      return Number(item[0].quantity)
    }

    return 0
  }, [gifts, item])

  const [quantityRight, setQuantityRight] = useState(quantity)

  useEffect(() => {
    messages?.map((message) => {
      if (message.text.includes('A quantidade desejada para o')) {
        return pushToast({
          message: message.text,
          status: 'INFO',
        })
      }

      return null
    })
  }, [messages, pushToast])

  useEffect(() => {
    setQuantityRight(quantity)
  }, [quantity])

  function handleClick (type: string) {
    switch (type) {
      case 'minus':
        if (quantity > 1) {
          const newQuantity = Number(item[0].quantity) - 1
          updateItemQuantity(item[0].id, newQuantity)

          pushToast({
            message: 'Item removido da sacola',
            status: 'INFO',
          })
        }

        if (quantity === 1) {
          removeItem(item[0].id)

          sendAnalyticsEvent<RemoveFromCartEvent<AnalyticsItem>>({
            name: 'remove_from_cart',
            params: {
              currency: code as CurrencyCode,
              value: item[0].price * item[0].quantity,
              items: [
                {
                  item_id: item[0].itemOffered.isVariantOf.productGroupID,
                  item_name: item[0].itemOffered.isVariantOf.name,
                  item_brand: item[0].itemOffered.brand.name,
                  item_variant: item[0].itemOffered.sku,
                  quantity: item[0].quantity,
                  price: item[0].price,
                  discount: item[0].listPrice - item[0].price,
                  currency: code as CurrencyCode,
                  item_variant_name: item[0].itemOffered.name,
                  product_reference_id: item[0].itemOffered.gtin,
                },
              ],
            },
          })

          pushToast({
            message: 'Item removido da sacola',
            status: 'INFO',
          })
        }
        break
      case 'plus':
        if (quantity >= 1) {
          const newQuantity = Number(item[0].quantity) + 1

          sendAnalyticsEvent<AddToCartEvent<AnalyticsItem>>({
            name: 'add_to_cart',
            params: {
              currency: code as CurrencyCode,
              // TODO: In the future, we can explore more robust ways of
              // calculating the value (gift items, discounts, etc.).
              value: item[0].price * newQuantity,
              items: [
                {
                  item_id: item[0].itemOffered.isVariantOf.productGroupID,
                  item_name: item[0].itemOffered.isVariantOf.name,
                  item_brand: item[0].itemOffered.brand.name,
                  item_variant: item[0].itemOffered.sku,
                  quantity: newQuantity,
                  price: item[0].price,
                  discount: item[0].listPrice - item[0].price,
                  currency: code as CurrencyCode,
                  item_variant_name: item[0].itemOffered.name,
                  product_reference_id: item[0].itemOffered.gtin,
                },
              ],
            },
          })

          updateItemQuantity(item[0].id, newQuantity)
          

          pushToast({
            message: 'Itens adicionados à sacola',
            status: 'INFO',
          })
        }
        break
      default:
        break
    }
  }

  return (
    <div className="button button__quantity shelf__button shelf__button-quantity" data-fs-unavailable-quantity-selector>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleClick('minus')
        }}
      >
        <IconMinus />
      </button>
      <span> {quantityRight} </span>
      <button
        onClick={(e) => {
          e.preventDefault()
          handleClick('plus')
        }}
      >
        <IconPlus />
      </button>
    </div>
  )
}

export default QuantitySelector
