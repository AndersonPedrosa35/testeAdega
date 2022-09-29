import Slider from 'react-slick'
import Banner from 'src/components/sections/Banner'
import { ListBanners } from './typings'

function ListBannerItems({ banners }: ListBanners) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
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

    if (!banners) {
        return null 
    }

    if(banners.length > 4){
        return(
            <Slider {...settings}>
                {banners?.map(
                    (banner, idx) => {
                        return(
                            <div className="listBanners--list-item" key={idx}>
                                <Banner 
                                    banner={banner}
                                />
                            </div>
                        )
                    }
                )}
            </Slider>
        )
    }

    return (
        <>
            {banners?.map(
                (banner, idx) => {
                    return(
                        <div className="listBanners--list-item" key={idx}>
                            <Banner 
                                banner={banner}
                            />
                        </div>
                    )
                }
            )}
        </>
 
    )
}

export default ListBannerItems