import SectionInfoProduct from 'src/components/sections/SectionInfoProduct'
import { ImageHelper } from 'src/helpers/imageHelper'
import { IProductSpecifications } from './typings'
import './product-prizes.scss'

const ProductPrizes = ( { specifications } : IProductSpecifications) => {

    const prizes =
    specifications?.filter((prize) => prize.name === 'Prêmios') ?? []

    if(!prizes.length) {
        return null
    }

    return (
        <SectionInfoProduct title="Premiação" className="prize__cards">
            {prizes.map((prize, index) => {
              const prizeDescription = specifications?.find(
                (item) => item.name === prize.value
              )

              return (
                <div
                  className="prize__card"
                  key={`${prize.name}--${index}`}
                >
                  <img
                    alt={`Imagem do Prêmio ${prize.value}`}
                    src={ImageHelper(prize.value)}
                    className="prize__card-image"
                  />
                  <div className="prize__card-content">
                    <span className="prize__card-title">
                      {prize.value}
                    </span>
                    {prizeDescription && (
                      <p className="prize__card-description">
                        {prizeDescription.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
        </SectionInfoProduct>
    )
}

export default ProductPrizes
