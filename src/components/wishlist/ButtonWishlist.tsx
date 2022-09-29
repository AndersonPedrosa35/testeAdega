import { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import IconWishlist from 'src/components/ui/Icons/IconWishlist'
import {
  filterItemWishlist,
  removeItemWishlist,
  setItemWishlist,
} from 'src/helpers/wishlist'
import { useSession } from 'src/sdk/session'
import { useUI } from 'src/sdk/ui/Provider'
import { useGlobalContext } from 'src/hooks/useGlobalContext'

interface IWishlistProps {
  id: string
}

const ButtonWishlist = ({ id }: IWishlistProps) => {
  const { updateItemsWishlist } = useGlobalContext()
  const { pushToast } = useUI()
  const { person } = useSession()
  const [hasWishlist, setHasWhishlist] = useState(false)

  const handleUpdateItemWishlist = () => {
    if (person?.id) {
      if (filterItemWishlist(id)) {
        removeItemWishlist(person.id, id)
        setHasWhishlist(false)
        updateItemsWishlist(id, 'remove')
      } else {
        setItemWishlist(person.id, id)
        setHasWhishlist(true)
        updateItemsWishlist(id, 'add')
      }
    } else {
      pushToast({
        message:
          'Você precisa estar logado para adicionar um item na wishlist!',
        status: 'ERROR',
      })

      navigate('/login')
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      if (id && filterItemWishlist(id)) {
        setHasWhishlist(true)
      }
    }
  }, [id])

  return (
    <button
      className={`wishlist__button-${
        hasWishlist ? 'remove' : 'add'
      } wishlist__button`}
      onClick={(e) => {
        e.preventDefault()
        handleUpdateItemWishlist()
      }}
    >
      <IconWishlist />
    </button>
  )
}

export default ButtonWishlist
