import { List } from '@faststore/ui'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { ReactNode } from 'react'

interface OrderSummaryProps {
  subTotal: number
  total: number
  numberOfItems: number
  checkoutButton?: ReactNode
}

function OrderSummary({
  subTotal,
  total,
  checkoutButton,
}: OrderSummaryProps) {

  return (
    <List className="order-summary" data-order-summary>
      <li className="text__title-subtotal">
        <span>Subtotal</span>
        <span>{useFormattedPrice(subTotal)}</span>
      </li>
      <li className="text__title-total">
        <span>Total</span>
        <span>{useFormattedPrice(total)}</span>
      </li>
      {checkoutButton}
    </List>
  )
}

export default OrderSummary
