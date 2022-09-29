import ProductImages from 'src/components/product/ProductImages'
import { ProductFlagPrizes, ProductFlagCountry } from 'src/components/product/ProductFlag'
import ButtonWishlist from "src/components/wishlist/ButtonWishlist";

interface Props {
    productImages: any
    specifications: {
        name: string
        value: string
    }[]
    id: string
}

const ProductGallery = ({ productImages, specifications, id}: Props) => {
    
    return (
        <div className="product__main-image">
            <ButtonWishlist id={id}/>
            <ProductFlagCountry specifications={specifications} className='product__flag-country' />
            <ProductFlagPrizes specifications={specifications} /> 
            <ProductImages images={productImages} />
         </div>
    )
}

export default ProductGallery
