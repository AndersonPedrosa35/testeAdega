import Title from 'src/components/sections/Title'
import ListBannerItems from './ListBannerItems'
import { IListBannersData } from './typings'
import './list-banners.scss'

function ListBanners({ data }: IListBannersData) {

  if (!data) {
    return null
  }

  return (
    <section className="listBanners">
      {data?.title && <Title text={data?.title} />}

      <div
        className={`listBanners--list ${data?.banners?.length <= 4 && 'listBanners--list-grid' }`}
      >
        <ListBannerItems
          banners={data.banners}
        /> 
      </div>
    </section>
  )
}

export default ListBanners
