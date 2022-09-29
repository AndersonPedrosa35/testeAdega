import { useState } from 'react'
import { IInfosProduct } from './typings'

import './section-info-product.scss'

const SectionInfoProduct = ({ title, children, className }: IInfosProduct) => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <section className={`product__infos ${className} container`}>
      <div className={`product__infos-container ${open ? 'active' : ''}`}>
        <button
          className="product__infos-header"
          onClick={() => setOpen(!open)}
        >
          <h3>{title}</h3>
        </button>

        <div className="product__infos-content">{children}</div>
      </div>
    </section>
  )
}

export default SectionInfoProduct
