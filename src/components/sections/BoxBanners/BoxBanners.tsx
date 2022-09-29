import Slider from 'react-slick'
import { Link } from 'gatsby'

import { IBoxBanners } from './typings'
import { Image } from 'src/components/ui/Image'
import './boxBanners.scss'

function BoxBanners({ data }: IBoxBanners) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  }

  if (!data) return null

  return (
    <div className="carousel-box">
        <Slider {...settings}>
            {data?.map(({ link, title, image, alt, target }, idx) => {
                return (
                  <div key={`${title ?? alt ?? image}-${idx}`} className="carousel-box__item">
                    <Link
                      to={link ?? '/'}
                      title={title}
                      className="carousel-box__link"
                      target={target ? '_blank' : '_self'}
                    >
                      <Image src={image} width={64} height={64} alt={alt ?? ''} />
                      {title && <span className="carousel-box__text">{title}</span>}
                    </Link>
                  </div>
                )
            })}
        </Slider>
    </div>
  )
}

export default BoxBanners
