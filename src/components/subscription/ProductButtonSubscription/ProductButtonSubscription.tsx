import { useState } from 'react'
import IconQuestionMark from "src/components/ui/Icons/IconQuestionMark"
import PopupAboutSubscript from '../PopupHowWorkSubscription/PopupAboutSubscription'
import PopupSubscription from '../PopupSubscription'
import './product-button-subscription.scss'

const ProductButtonSubscription = () => {
    const [isOpenModalHowAboutSubscription, setIsOpenModalHowAboutSubscription] = useState(false)
    const [isOpenModalSubscription, setIsOpenModalSubscription] = useState(false)
    
    return (
        <>
            <div className="subscription__buttons">
                <button className="subscription__buttons-popupSubscribe" onClick={() => setIsOpenModalSubscription(true)} >Fazer Compra Recorrente</button>

                <button className="subscription__buttons-popupAboutSubscription" onClick={() => setIsOpenModalHowAboutSubscription(true)}>
                    <IconQuestionMark />
                    Como funciona a compra recorrente?
                </button>
            </div>

            <PopupAboutSubscript isOpen={isOpenModalHowAboutSubscription} handleClose={() => setIsOpenModalHowAboutSubscription(false)} />
            <PopupSubscription isOpen={isOpenModalSubscription} handleClose={() => setIsOpenModalSubscription(false)} />
        </>
    )
}

export default ProductButtonSubscription