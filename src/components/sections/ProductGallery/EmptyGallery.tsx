import EmptyState from 'src/components/ui/EmptyState'
import 'src/styles/pages/404.scss'

function EmptyGallery() {
  return (
    <EmptyState>
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
    </EmptyState>
  )
}

export default EmptyGallery
