
// import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";

import { flagImageHelper } from 'src/helpers/flagImageHelper'
import './product-flag.scss'

interface IProductFlagCountry{
    specifications: {
        value: string
        name: string
    }[]
    className?: string
}

const ProductFlagCountry = ({ specifications, className } : IProductFlagCountry) => {
    const [loadImage, setLoadImage] = useState(false)
    const [country] = specifications.filter(prop => prop.name === 'País')

    if (!country) {
        return null 
    }

    return (
        <>
            {country &&  (
                
                <img
                    className={`flag__country ${className} ${loadImage ? 'loaded' : ''}`}
                    alt={`Flag vinho do país ${country.value}`}
                    src={flagImageHelper(country.value)}
                    width={24}
                    height={24}
                    onLoad={() => {
                        setLoadImage(true) 
                    }}
                />
            )}
        </>
    )
}

export default ProductFlagCountry