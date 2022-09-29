import { Link } from 'gatsby'
import IsMobile from 'src/helpers/isMobile'
import { ImageResponsive } from 'src/components/ui/Image'
import { IBannerProps } from './typings'
import { isInViewport } from 'src/helpers/isInViewPort'
import { sendAnalyticsEvent } from '@faststore/sdk'
import type { ViewPromotionEvent, PromotionItem} from '@faststore/sdk'

const Banner = ({ banner }: IBannerProps) => {

    if (!banner){
        return null
    }

    const sendAnalyticsBannerData = () => {
        let element = document.querySelector(`img[alt="${banner.alt}"]`) as HTMLElement | null;

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

        if(!banner.desktopImage || !banner.mobileImage){

            if(IsMobile() && banner.mobileImage){
                return <img src={banner.mobileImage} alt={banner.alt || ''} />
            } 

            if(!IsMobile() && banner.desktopImage){
                return <img src={banner.desktopImage} alt={banner.alt || ''} />
            }

            return null
        }

        return (
            <ImageResponsive 
                src={banner.desktopImage || '/'}  
                srcMobile={banner.mobileImage || '/'} 
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