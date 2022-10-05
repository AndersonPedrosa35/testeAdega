import { api } from '../../store.config'

export function setItemWishlist(userId: string, itemID: string) {
  const items =
    JSON.parse(getDataWishlist()).length > 0
      ? JSON.parse(getDataWishlist())
      : []

  items.push(itemID)
  updateWishlist(userId, JSON.stringify(items))
}

export function removeItemWishlist(userId: string, itemId: string) {
  const items =
    JSON.parse(getDataWishlist()).length > 0
      ? JSON.parse(getDataWishlist())
      : []

  const newItems = items.filter((id: string) => id !== itemId)

  updateWishlist(userId, JSON.stringify(newItems))
}

export function filterItemWishlist(itemId: string) {
  const items = JSON.parse(getDataWishlist())

  if (items.length > 0 && items?.some((id: string) => id === itemId)) {
    return true
  }

  return false
}

export function getDataWishlist(): string {
  const items = localStorage.getItem(`wishlist_${api.storeId}`)

  if (items) return items

  return '[]'
}

export function updateWishlist(userId: string, items: string) {
  const data = {
    userId,
    items,
  }

  fetch(`https://testemiddleware--adegamarchehlg.myvtex.com/_v/createWishlist`, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response?.Id || response?.message) {
        localStorage.setItem(`wishlist_${api.storeId}`, items)

        return true
      }

      return false
    })
    .catch(() => {
      return false
    })
}

export async function setDataInitialWishlistLocal(userId: string) {
  if (JSON.parse(getDataWishlist()).length === 0) {
    const data = await fetch(
      `https://testemiddleware--adegamarchehlg.myvtex.com/_v/wishlist/${userId}`
    )

    const dataJson = await data.json()

    if (dataJson?.items) {
      localStorage.setItem(`wishlist_${api.storeId}`, dataJson.items)
    } else {
      localStorage.setItem(`wishlist_${api.storeId}`, JSON.stringify([]))
    }

    return true
  }

  return false
}

export function removeLocalStorageWishlist() {
  if (JSON.parse(getDataWishlist())) {
    localStorage.removeItem(`wishlist_${api.storeId}`)
  }
}
