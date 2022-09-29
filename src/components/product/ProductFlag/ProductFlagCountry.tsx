
import { ImageHelper } from 'src/helpers/imageHelper'
import './product-flag.scss'

interface IProductFlagCountry{
    specifications: {
        value: string
        name: string
    }[]
    className?: string
}

const ProductFlagCountry = ({ specifications, className } : IProductFlagCountry) => {
    const [country] = specifications.filter(prop => prop.name === 'País')

    if (!country) {
        return null 
    }

    return(
        <>
            {country && (
                <img
                    className={`flag__country ${className}`}
                    alt={`Flag vinho do país ${country.value}`}
                    src={ImageHelper(country.value)}
                />
            )}
        </>
    )
}

export default ProductFlagCountry