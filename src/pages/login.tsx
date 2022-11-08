import { useEffect } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import storeConfig from '../../store.config'

function Page() {
  useEffect(() => {
    window.location.href = storeConfig.loginUrl
  }, [])

  return (
    <>
      <GatsbySeo 
        noindex 
        nofollow 
        title="login"  
        description="login"
        titleTemplate="login"
      />

      <div>loading...</div>
    </>
  )
}

export default Page
