import TextSeo from 'src/components/sections/TextSeo'
import { ISeoCollection } from './typings'

const SeoTextCategory = ({ title }: ISeoCollection) => {

  return (
    <section className="search__infos">
      <div className="search__textSeo">
        <div className="container">
          <TextSeo title={title} />
        </div>
      </div>
    </section>
  )
}

export default SeoTextCategory
