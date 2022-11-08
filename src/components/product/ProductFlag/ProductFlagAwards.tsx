
import { useState } from "react";
import { ImageHelper } from "src/helpers/imageHelper";

import './product-flag.scss'

interface IProductFlagAward {
    specifications: {
        value: string
        name: string
    }[]
    className?: string
}

const ProductFlagAward = ({ specifications } : IProductFlagAward) => {
    const [loadImage, setLoadImage] = useState(false)
    const [open, setOpen] = useState<boolean>(false)
    const awards = specifications.find(prop => prop.name.includes('Prêmio'))
    if (!awards?.value.length) {
        return null
    }
    const awardUrlsLinksImg = awards.value.split('|')
    const renderImageLimited = awardUrlsLinksImg.splice(0, 2)

    return (
        <div className="container_flag_awards">
                { open ? [...renderImageLimited, ...awardUrlsLinksImg].map((imgLink, index) => (
                    <img
                    className={`flag__award flag__award${index} ${loadImage ? 'loaded' : ''}`}
                    alt={`selo premiado`}
                    src={ImageHelper(imgLink.trim())}
                    width={40}
                    height={40}
                    onLoad={() => {
                        setLoadImage(true)
                    }}
                    />
                )) : (
                    <>
                   { renderImageLimited.map((imgLink, index) => (
                      <img
                        className={`flag__award flag__award${index} ${loadImage ? 'loaded' : ''}`}
                        alt={`selo premiado`}
                        src={ImageHelper(imgLink.trim())}
                        width={40}
                        height={40}
                        onLoad={() => {
                            setLoadImage(true)
                        }}
                      />
                    ))}
                     {awardUrlsLinksImg.length ? (
                        <div
                            className="flag__award__rest"
                            onClick={() => setOpen(true)}
                        >
                            { `+${awardUrlsLinksImg.length}` }
                        </div>
                    ) : null}
                    </>
                )}
        </div>
    )
}

export default ProductFlagAward