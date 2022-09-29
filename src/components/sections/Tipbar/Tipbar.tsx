import Slider from 'react-slick'

import { ITipbar, ITipbarIcon } from './typings'
import { Image } from 'src/components/ui/Image'

import './tipbar.scss'

function Tipbar(tipbar: ITipbar) {
  const settingsSlider = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 959,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  }

  if (!tipbar) return null

  return (
    <div className="tipbar__inner">
        <Slider {...settingsSlider}>
          {tipbar?.tipbar?.map(({ icon }: ITipbarIcon, idx) => {
            return (
              <div key={`${icon.alt ?? icon.image}-${idx}`} className="tipbar__item">
                <Image  
                    src={icon.image}
                    alt={icon.alt}
                    width={160}
                    height={104}
                    className="tipbar__image"
                />
              </div>
            )
          })}
        </Slider>
    </div> 
  )
}

export default Tipbar
