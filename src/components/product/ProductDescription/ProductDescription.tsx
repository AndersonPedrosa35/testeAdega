import SectionInfoProduct from 'src/components/sections/SectionInfoProduct'
import { IProductDescription } from './typings'

const ProductDescription = ({ description } : IProductDescription) => {

    if (!description.length){
        return null
    }

    return (
        <SectionInfoProduct title="Descrição do Produto" className="description">
            {description}
        </SectionInfoProduct>
    )
}

export default ProductDescription
