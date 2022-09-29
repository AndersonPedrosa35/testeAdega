import { useEffect, useState } from 'react'
import LogoVertical from 'src/components/ui/LogoVertical'

import './age-gate.scss'

const AgeGate = () => {
  const [show, setShow] = useState<boolean>(false)
  const [hasAge, setHasAge] = useState<boolean>(true)

  useEffect(() => {
    const cookie = localStorage.getItem('ageCookie')

    blockUserScroll()
    if (cookie === undefined || cookie === null) {
      return setShow(true)
    }

    if (Number(cookie)) {
      setShow(false)
      UnblockUserScroll()

      return
    } 

    setShow(true)
    setHasAge(false)
  }, [show])

  const blockUserScroll = () => {
    document.body.style.overflow = 'hidden'
    document.body.classList.add("hide-cookie-popup")
  }

  const UnblockUserScroll = () => {
    document.body.style.overflow = 'hidden auto'
    document.body.classList.remove("hide-cookie-popup")
  }

  const handleSelection = (option: number) => {
    if (option) {
      localStorage.setItem('ageCookie', '1')
      UnblockUserScroll()

      return setShow(false)
    }

    localStorage.setItem('ageCookie', '0')
    setHasAge(false)
  }

  return show ? (
    <div
      className={`ageGate ${
        !hasAge && 'ageGate__block'
      }`}
    >
      <div className="ageGate__container">
        <LogoVertical />
        {hasAge ? (
          <div className="ageGate__selection">
            <h4 className="ageGate__title">Você é maior de 18 anos?</h4>
            <button
              className="ageGate__button primary"
              onClick={() => handleSelection(1)}
            >
              Sim
            </button>
            <button
              className="ageGate__button secondary"
              onClick={() => handleSelection(0)}
            >
              Não
            </button>
          </div>
        ) : (
          <p className="ageGate__text">
            Desculpe, você não possui idade legal para navegar em nosso
            e-commerce.
          </p>
        )}
      </div>
    </div>
  ) : null
}

export default AgeGate
