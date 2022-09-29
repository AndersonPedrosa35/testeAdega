import React from 'react'
import { getDataWishlist } from 'src/helpers/wishlist'

interface IGlobalContext {
  itemsWishlist: string[]
  updateItemsWishlist: (item: string, type: string) => void
}

const GlobalContext = React.createContext<IGlobalContext>({} as IGlobalContext)

const GlobalProvider = ({ children } : any) => {
  const [itemsWishlist, setItemsWishlist] = React.useState<string[]>(
    JSON.parse(getDataWishlist())
  )

  const updateItemsWishlist = (item: string, type: string) => {
    if (type === 'add') {
      setItemsWishlist(() => [...itemsWishlist, item])
    } else if (type === 'remove') {
      const newItems = itemsWishlist.filter((itemId) => itemId !== item)

      setItemsWishlist(() => newItems)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        itemsWishlist,
        updateItemsWishlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  const context = React.useContext(GlobalContext)

  return context
}

export { GlobalProvider, useGlobalContext }
