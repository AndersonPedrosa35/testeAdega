
import { Modal } from "@faststore/ui"
import './popup-about-subscription.scss'
import IconClose from "src/components/ui/Icons/IconClose"

const PopupAboutSubscript = ({ isOpen, handleClose }: any) => {

    return (
        <Modal isOpen={isOpen} onDismiss={handleClose} className='subscription__popup'>
            <div className="subscription__popup-howWorkSubscription">
                <button onClick={handleClose} className="subscription__popup-howWorkSubscription-close">
                    <IconClose />
                </button>
                <div className="subscription__popup-howWorkSubscription-content">
                    <div className="subscription__popup-howWorkSubscription-text">
                        <h2>Como funciona a compra recorrente?</h2>
                        <div>
                            <p>Compra Recorrente é para quem deseja receber um ou mais produtos com frequência. É válida para qualquer bebida e qualquer quantidade que você escolher.</p>
                            <p>Ao fazer uma compra recorrente, você realiza o pedido apenas uma vez e o recebe na sua casa, por exemplo, todo mês.</p>
                            <p>O valor da compra é cobrado de forma automática no mesmo período em que o produto é enviado para você.</p>
                            <p>Você não paga um valor a mais pela compra recorrente, apenas o frete de cada entrega.</p>
                            <p>Você pode cancelar quando quiser, entrando em Minha Conta.</p>
                        </div>
                    </div>

                    <div className="subscription__popup-howWorkSubscription-image" />
                </div>
            </div>
        </Modal>
    )
}

export default PopupAboutSubscript