import { useState } from "react"
import IconClose from "src/components/ui/Icons/IconClose"
import { Modal, Radio, Label } from "@faststore/ui"
import './popup-subscription.scss'

const PopupSubscription = ({ isOpen, handleClose }: any) => {
    const [optionSubscription, setOptionSubscription] = useState('');

    return (
        <Modal isOpen={isOpen} onDismiss={handleClose} className='subscription__popup'>
            <div className="subscription__popup-subscription">
                <button onClick={handleClose} className="subscription__popup-subscription-close">
                    <IconClose />
                </button>
                <div className="subscription__popup-subscription-content">
                    <h2>Compra Recorrente</h2>
                    <p>Quero receber esse produto a cada:</p>
                    
                    <ul className="subscription__popup-subscription-listButtons">
                        <li>
                            <Radio name="optionSubscription" id="optionSubscription" value="7d" onChange={({ target }) => setOptionSubscription(target.value)} />
                            <label htmlFor="optionSubscription">
                                7 dias
                            </label>
                        </li>
                        <li>
                            <Radio name="optionSubscription" id="optionSubscription2" value="15d"  onChange={({ target }) => setOptionSubscription(target.value)}/>
                            <Label htmlFor="optionSubscription2">
                                15 dias
                            </Label>
                        </li>
                        <li>
                            <Radio name="optionSubscription" id="optionSubscription3" value="30d"  onChange={({ target }) => setOptionSubscription(target.value)} />
                            <label htmlFor="optionSubscription3">
                                30 dias
                            </label>
                        </li>
                        <li>
                            <Radio name="optionSubscription" id="optionSubscription4" value="60d" onChange={({ target }) => setOptionSubscription(target.value)}/>
                            <label htmlFor="optionSubscription4">
                                60 dias
                            </label>
                        </li>
                    </ul>

                    <button className="subscription__popup-subscription-applySubscription">Fazer compra recorrente</button>
                </div>
            </div>
        </Modal>
    )
}

export default PopupSubscription