
import { useState, } from 'react'
import Slider from 'react-slick'
import ReactImageZoom from 'react-image-zoom';
import './product-images.scss'
import IsMobile from "src/helpers/isMobile";

interface Props {
  images: Image[]
}

interface Image {
  url: string
  alternateName: string
}

const ProductImages = ({ images }: Props) => {
  const [slider1, setSlider1] = useState<any>()
  const [slider2, setSlider2] = useState<any>()

  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: images.length > 1 ? 3 : 1,
    slidesToScroll: 1,
    vertical: true,
  }

  const settings2 = {
    dots: !!IsMobile(),
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  if(!images.length){
    return null
  }

  return (
    <div className="productImages">
      <div className="productImages__side">
        <Slider
          {...settings1}
          asNavFor={slider1}
          ref={(nav2) => {
            setSlider2(nav2)
          }}
        >
          {
            images?.map(({url, alternateName}, idx) => {
              return (
                <div
                  key={`${url}-${idx}`}
                  onClick={() => slider2.slickGoTo(idx)}
                >
                  <img className="productImages__side--image" src={url} alt={alternateName} />
                </div>
              )
            })
          }
        </Slider>
      </div>

      <div className="productImages__main">
        <Slider
          {...settings2}
          asNavFor={slider2}
          ref={(nav1) => {
            if (nav1 != null) {
              setSlider1(nav1)
            }
          }}
        >
          {images?.map(({url, alternateName}, index) => {
            return (
              <div key={`${alternateName}--${index}`}>
                {IsMobile() ? ( 
                  <img
                    className="productImages__main--image"
                    alt={alternateName}
                    src={url}
                  /> 
                ) : (
                  <ReactImageZoom zoomPosition="original" width="500" height="500" img={url} />
                )}
              </div>
            )
          })}
        </Slider>
        <span className="productImages__main--zoom">
          Role o mouse na imagem para aproximar
        </span>
      </div>
    </div>
  )
}

export default ProductImages
