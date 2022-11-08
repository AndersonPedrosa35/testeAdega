import { useEffect } from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import storeConfig from '../../store.config'

function Page() {
  useEffect(() => {
    window.location.href = storeConfig.accountUrl
  }, [])

  return (
    <>
      <GatsbySeo 
        noindex 
        nofollow 
        title="Sua Conta"  
        description="Sua Conta"
        titleTemplate="Sua Conta"
      />

      <div>loading...</div>
    </>
  )
}

export default Page
