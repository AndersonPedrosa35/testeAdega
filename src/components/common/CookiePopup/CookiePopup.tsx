import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'src/helpers/cookieHelper'
import './cookie-popup.scss'

const CookiePopup = () => {
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    const cookie = getCookie('agreement')

    if (Number(cookie)) {
      return setShouldShow(false)
    }
  }, [])

  useEffect(() => {
    if (!shouldShow) {
      setCookie('agreement', '1')
    }
  }, [shouldShow])

  return shouldShow ? (
    <div className="cookiePopup">
      <div className="cookiePopup__container">
        <p className="cookiePopup__text">
          Nosso site usa cookies e outros serviços para melhorar sua experiência
          de compra.
          <br />
          Ao continuar navegando nele, entendemos que está ciente e de acordo
          com seu uso e com nossa{' '}
          <a className="cookiePopup__link" href="/politica-de-privacidade">
            Política de Privacidade
          </a>
        </p>
        <button
          onClick={() => setShouldShow(false)}
          className="cookiePopup__agree"
        >
          Concordar e Fechar
        </button>
      </div>
    </div>
  ) : null
}

export default CookiePopup
