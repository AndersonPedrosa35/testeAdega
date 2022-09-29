import React from 'react'
import ProductShelf from 'src/components/sections/ProductShelf'
import { Link } from 'gatsby'
import { useGlobalContext } from 'src/hooks/useGlobalContext'

function Page() {
  const { itemsWishlist } = useGlobalContext()

  React.useEffect(() => {}, [itemsWishlist])

  if (!itemsWishlist?.length) {
    return (
      <div className="wishlist__message">
        Não há produtos na wishlist ainda :(
        <Link to="/" title="Adicionar items na wishlist">
          Adicionar items na wishlist
        </Link>
      </div>
    )
  }

  return (
    <section className="wishlist__products">
      <ProductShelf
        customClass="horizontal-line"
        data={{
          title: 'Wishlist',
          searchParams: {
            sort: 'score_desc',
            maxQuantityProducts: 8,
            hideUnavailableItems: true,
            term: `sku:${itemsWishlist?.join(';')}`,
          },
        }}
      />
    </section>
  )
}

export default Page
