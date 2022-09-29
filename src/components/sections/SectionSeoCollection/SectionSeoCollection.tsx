
import Breadcrumb from 'src/components/sections/Breadcrumb'
import { ISectionSeoCollection } from './typings'
import FullBanner from 'src/components/sections/FullBanner'
import TextSeo from 'src/components/sections/TextSeo'
import draftToHtml from 'draftjs-to-html'
import './seo-collection.scss'

const SectionSeoCollection = ({ breadcrumb, banners, seo } : ISectionSeoCollection) => {

  return (
    <section className="collection__seo">
        <section className="collection__seo-breadcrumb"> 
            <Breadcrumb breadcrumbList={breadcrumb ?? []} />
        </section>

        <div className='container'>
            {
                banners && banners?.length ? (
                    <div className="collection__seo-banner">
                        {/* <FullBanner banners={banners}/> */}
                    </div>
                ) : null
            }

            {seo?.title ? (
                <div className="collection__seo-text">
                    <TextSeo title={seo?.title}>
                        { seo?.text?.length > 0 ? (
                            <div
                            className='collection__seo-text--content'
                            dangerouslySetInnerHTML={{
                            __html: draftToHtml(JSON.parse(seo?.text)),
                            }}
                        />
                        ) : null }
                    </TextSeo>
                </div>
            ) : null}
        
        </div>
    </section>
  )
}

export default SectionSeoCollection
