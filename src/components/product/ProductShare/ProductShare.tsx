import IconFacebook from 'src/components/ui/Icons/IconFacebook'
import IconWhatsapp from 'src/components/ui/Icons/IconWhatsapp'
import { isBrowser } from 'src/helpers/isBrowser'
import './product-share.scss'

const ProductShare = () => {
  const url = isBrowser() && window.location.href

  if(!url) {
    return null
  }

  return (
    <div className="productShare">
      <h3 className="productShare__title">Compartilhe</h3>
      <div className="productShare__list">
        <a
          className="productShare__list--item"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          <IconFacebook />
        </a>
        <a
          className="productShare__list--item"
          href={`https://wa.me/?text=${url}`}
          target="_blank"
          rel="noreferrer"
        >
          <IconWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default ProductShare
