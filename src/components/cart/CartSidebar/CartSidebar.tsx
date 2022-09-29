import { List } from '@faststore/ui'
import Button, { ButtonIcon } from 'src/components/ui/Button'
import SlideOver from 'src/components/ui/SlideOver'
import { useCart } from 'src/sdk/cart/'
import { useCheckoutButton } from 'src/sdk/cart/useCheckoutButton'
import { useUI } from 'src/sdk/ui/Provider'
import IconClose from 'src/components/ui/Icons/IconClose'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import CartItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import OrderSummary from '../OrderSummary'

function CartSidebar() {
  const btnProps = useCheckoutButton()
  const cart = useCart()
  const { cart: displayCart, closeCart } = useUI()
  const { fade, fadeOut } = useFadeEffect()

  const { items, totalItems, isValidating, subTotal, total } = cart

  const isEmpty = items.length === 0

  return (
    <SlideOver
      fade={fade}
      isOpen={displayCart}
      onDismiss={fadeOut}
      size="partial"
      direction="rightSide"
      className="cart-sidebar"
      onTransitionEnd={() => fade === 'out' && closeCart()}
    >
      <header data-testid="cart-sidebar">
        <ButtonIcon
          data-testid="cart-sidebar-button-close"
          aria-label="Fechar Sacola"
          icon={<IconClose />}
          onClick={fadeOut}
        />
        <div className="cart-sidebar__title">
          <p className="text__lead">Minha Sacola</p>
        </div>
      </header>
    
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <List>
            {items.map((item) => (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            ))}
          </List>

          <footer>
            <OrderSummary
              subTotal={subTotal}
              total={total}
              numberOfItems={totalItems}
              checkoutButton={
                <Button
                  variant="primary"
                  {...btnProps}
                >
                  {isValidating ? 'Loading...' : 'Finalizar Compra'}
                </Button>
              }
            />
          </footer>
        </>
      )}
    </SlideOver>
  )
}

export default CartSidebar
