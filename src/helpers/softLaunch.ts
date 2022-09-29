export default function scriptValidateSoftLaunch() {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      const cookies = document.cookie
  
      if (cookies.indexOf('softLaunchAdega=true') > 0) {
        return true
      }
  
      if (url.includes('softlaunch=true')) {
        const today = new Date()
        const todayMidnight = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate()
        )
  
        const tomorrow = new Date(
          todayMidnight.setDate(todayMidnight.getDate() + 1)
        )
  
        document.cookie = `softLaunchAdega=true; expires=${tomorrow.toUTCString()};`
  
        return true
      }
  
      window.location.href = 'https://www.marche.com.br/'
    }
  
    return null
  }