import { useEffect } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import storeConfig from '../../store.config'

function Page() {
  useEffect(() => {
    window.location.href = storeConfig.checkoutUrl
  }, [])

  return (
    <>
      <GatsbySeo 
        noindex 
        nofollow 
        title="Checkout"  
        description="Checkout"
        titleTemplate="Checkout"
      />

      <div>loading...</div>
    </>
  )
}

export default Page
