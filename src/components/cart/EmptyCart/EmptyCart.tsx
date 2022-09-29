import EmptyState from 'src/components/ui/EmptyState'
import IconBag from 'src/components/ui/Icons/IconBag'

function EmptyCart() {
  return (
    <EmptyState>
      <IconBag />
      <p>
        Você não possuí nenhum produto no seu carrinho ainda =(
      </p>
      <span>
        Volte e explore para adicionar produtos no seu carrinho de
        compras.
      </span>
    </EmptyState>
  )
}

export default EmptyCart
