import { GatsbySeo } from 'gatsby-plugin-next-seo'

import 'src/styles/pages/404.scss'

function Page() {

  return (
    <>
      <GatsbySeo noindex nofollow />

      <div className="message__error message__error-notFound">
        <div>OOPS!</div>
        <div>
          <strong>Nenhum produto foi encontrado</strong>
          <p>O que eu faço?</p>
          <ul>
            <li>Verifique os termos digitados.</li>
            <li>Tente utilizar uma única palavra.</li>
            <li>Utilize termos genéricos na busca.</li>
            <li>Procure utilizar sinônimos ao termo desejado</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Page
