export function setCookie(name: string, val: string, time = true) {
  const date = new Date()
  const value = val

  const validFor = time ? 30 : 1

  date.setTime(date.getTime() + validFor * 24 * 60 * 60 * 1000)
  window.document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

export function getCookie(name: string) {
  const value = `; ${window.document.cookie}`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parts: any = value.split(`; ${name}=`)

  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }

  return null
}

export function deleteCookie(name: string) {
  const date = new Date()

  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)
  window.document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`
}
