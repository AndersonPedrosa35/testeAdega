import ProductImages from 'src/components/product/ProductImages'
import { ProductFlagCountry } from 'src/components/product/ProductFlag'
import ButtonWishlist from "src/components/wishlist/ButtonWishlist";
import ProductFlagAward from '../ProductFlag/ProductFlagAwards';

interface Props {
    productImages: any
    specifications: {
        name: string
        value: string
    }[]
    id: string
}

const ProductGallery = (props: Props) => {
    const { productImages, specifications, id} = props
    
    return (
        <div className="product__main-image">
            <ButtonWishlist id={id}/>
            <ProductFlagCountry specifications={specifications} className='product__flag-country' />
            <ProductFlagAward specifications={specifications} />
            <ProductImages images={productImages} />
         </div>
    )
}

export default ProductGallery
