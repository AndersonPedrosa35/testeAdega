import SectionInfoProduct from 'src/components/sections/SectionInfoProduct'
// import { ImageHelper } from 'src/helpers/imageHelper'
import { IProductSpecifications } from './typings'
import './product-prizes.scss'
import { useEffect, useState } from 'react'
import getAwardsProduct, { serealizeAwardsProduct } from 'src/helpers/getAwardsProduct'

interface awardsProductProps {
  DescriptionAward: string
  ImageAward: string
  TitleAward: string
}

const ProductPrizes = ( { id } : IProductSpecifications) => {
    const [awardsProduct, setAwardsProduct] = useState<any>([])

    useEffect(() => {
      getAwardsProduct(id)
      .then((res) => {
        setAwardsProduct(res)
      }).catch((err) => console.error(err))
    }, [])

    return awardsProduct.length ? (
        <SectionInfoProduct title="Premiação" className="prize__cards">
            {awardsProduct.map((award: awardsProductProps, index: number) => {
              const { description, image, title } = serealizeAwardsProduct(award)
              return (
                <div
                  className="prize__card"
                  key={`${title}--${index}`}
                >
                  <img
                    alt={`Imagem do Prêmio ${title}`}
                    src={image}
                    className="prize__card-image"
                  />
                  <div className="prize__card-content">
                    <span className="prize__card-title">
                      {title}
                    </span>
                    {description && (
                      <p className="prize__card-description">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
        </SectionInfoProduct>
      ): null
}

export default ProductPrizes
