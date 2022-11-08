import { Link } from 'gatsby'
import IsMobile from 'src/helpers/isMobile'
import { ImageResponsive } from 'src/components/ui/Image'
import { IBannerProps } from './typings'
import { isInViewport } from 'src/helpers/isInViewPort'
import { sendAnalyticsEvent } from '@faststore/sdk'
import type { ViewPromotionEvent, PromotionItem} from '@faststore/sdk'

import { useThumborImageData } from '@vtex/gatsby-plugin-thumbor'

export function splitStringSizeinWidthAndHeight(size: string | undefined) {
    if (size) {
      const arraySize = size.split('x');
      return { width: parseFloat(arraySize[0]), height: parseFloat(arraySize[1]) }
    }
    return undefined
  }

const Banner = ({ banner }: IBannerProps) => {
    if (!banner){
        return null
    }
    const imageMobileSize = splitStringSizeinWidthAndHeight(banner.mobileImageSize)
    
    let thumborImage: any
    const imageDesktopSize = splitStringSizeinWidthAndHeight(banner.desktopImageSize)
    if (!IsMobile()) {
        thumborImage = useThumborImageData({
            baseUrl: banner.desktopImage ?? '',
            height: imageDesktopSize?.height ?? 1000,
            width: imageDesktopSize?.width ?? 1440,
        })
    } else {        
        thumborImage = useThumborImageData({
            baseUrl: banner.mobileImage ?? '',
            height: imageMobileSize?.height ?? 600,
            width: imageMobileSize?.width ?? 660,
        })
    }

    const sendAnalyticsBannerData = () => {
        const element = document.querySelector(`img[alt="${banner.alt}"]`) as HTMLElement | null;

        if(isInViewport(element)){
    
          sendAnalyticsEvent<ViewPromotionEvent<PromotionItem>>({
            name: 'view_promotion',
            params: {
                promotion_id: `${banner.alt}`,
                promotion_name: `banner: ${banner.alt}`
            },
          })
        
          window.removeEventListener('scroll', sendAnalyticsBannerData, true)
        }
    }

    if (typeof window !== undefined){
        window.addEventListener('scroll', sendAnalyticsBannerData, true)
    }

    const Image = () => {
        if(!IsMobile()){
            return <img
                src={thumborImage?.images?.fallback?.src}
                alt={banner.alt || ''}
                width={'100%'} 
                height={imageDesktopSize?.height}
            />
        } else if(IsMobile()){
            return <img 
                src={thumborImage?.images?.fallback?.src}
                alt={banner.alt || ''}
                width={'100%'} 
                height={imageMobileSize?.height}
            />
        }
        return (
            <ImageResponsive 
                src={thumborImage?.images?.fallback?.src || '/'}  
                srcMobile={thumborImage?.images?.fallback?.src || '/'} 
                alt={banner.alt || ''}
            /> 
        )
    }

    if (banner?.link && banner?.link?.length > 0) {
        
        return (
            <Link to={banner.link} title={banner.alt || ''} target={banner.target ? '_blank' : '_self'}>
                <Image /> 
            </Link>
        )
    }

    return <Image />
}

export default Banner