import { Carousel } from '@faststore/ui'
import type { IBanners } from './typings'
import Banner from 'src/components/sections/Banner'

const FullBanner = ({ banners }: IBanners) => {

    if(!banners?.length) return null

    if (banners?.length > 1) {
      return (
        <Carousel>
          {banners.map((banner: any, idx: number) => {
            return (
              <Banner banner={banner} key={idx} />
            )
          })}
        </Carousel>
      )
    }

    return (
     <Banner banner={banners[0]} />
    )
}

export default FullBanner