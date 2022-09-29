import { ButtonIcon } from 'src/components/ui/Button'
import IconCart from 'src/components/ui/Icons/IconCart'
import { useCartToggleButton } from 'src/sdk/cart/useCartToggleButton'

function CartToggle() {
  const btnProps = useCartToggleButton()

  return (
    <ButtonIcon
      data-fs-button-cart="true"
      aria-label={`Minicart com ${btnProps['data-items']} itens`}
      icon={<IconCart />}
      className="cart__toggle mx-3 button-cart"
      {...btnProps}
    />
  )
}

export default CartToggle
