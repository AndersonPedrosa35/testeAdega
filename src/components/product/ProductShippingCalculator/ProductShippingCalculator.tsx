import React, { useState } from 'react'
import type { ChangeEvent, MouseEvent } from 'react'
import IconArrowDown from 'src/components/ui/Icons/IconArrowDown'
import { estimateFormat } from 'src/helpers/estimateFormat'
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice"
import Price from "src/components/ui/Price";
import type { SimulateObject, Sla } from './typings'
import './product-shipping.scss'

interface Props {
  id: string
  seller: { identifier: string }
}

const ProductShippingCalculator = ({ id, seller }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [slas, setSlas] = useState<SimulateObject>()
  const [zip, setZip] = useState<string>('')
  const [loading, setLoading] = React.useState(false)

  const handleZipSubmit = async (evt: MouseEvent) => {
    evt.preventDefault()

    try {
      setLoading(true)
      if (zip?.length > 0) {
        const data = await fetch(
          'https://testemiddleware--adegamarchehlg.myvtex.com/_v/simulate',
          {
            method: 'POST',
            body: JSON.stringify({
              items: [
                {
                  id: id,
                  quantity: 1,
                  seller: seller.identifier,
                },
              ],
              country: 'BRA',
              postalCode: zip,
            }),
          }
        ).then((res: any) => res.json())

        setSlas(data?.logisticsInfo[0])
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault()

    const { value } = evt.target

    if (value.length < zip.length) {
      return setZip(value)
    }

    if (!value.match(/-/g) && value.length === 5) {
      return setZip(`${value.slice(0, 5)}-${value.slice(5, 9)}`)
    }

    return setZip(value)
  }

  return (
    <div className="shippingCalculator">
      <div className="shippingCalculator__inner">
        <button
          onClick={() => setOpen(!open)}
          className="shippingCalculator__trigger"
        >
          Consultar frete
          <div className="shippingCalculator__icon--wrapper">
            <IconArrowDown state={open} className="shippingCalculator__icon" />
          </div>
        </button>
        <div
          className={`shippingCalculator__collapsible ${
            open ? 'shippingCalculator__collapsible--open' : ''
          }`}
        >
          <form className="shippingCalculator__form">
            <input
              className="shippingCalculator__input"
              value={zip}
              onChange={(evt) => handleChange(evt)}
              type="text"
              placeholder="Digite seu CEP"
              maxLength={9}
            />
            <button
              onClick={(evt) => handleZipSubmit(evt)}
              type="submit"
              className="shippingCalculator__submit"
            >
              Ok
            </button>
          </form>
          <a
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="_blank"
            rel="noreferrer"
            className="shippingCalculator__link"
          >
            {' '}
            Não sei meu CEP
          </a>
        </div>
        <ul className="shippingCalculator__list">
          {loading && <li id="loading" />}
          
          {slas?.slas.length && !loading ?
            slas.slas.map(
              ({ name, shippingEstimate, price }: Sla, index: number) => {
                return (
                  <li
                    key={`${name}-${index}`}
                    className="shippingCalculator__list--item"
                  >
                     <span className="shippingCalculator__list--name">
                       {name}
                     </span>
                     <span className="shippingCalculator__list--eta">
                       {estimateFormat(shippingEstimate)}
                     </span>
                     <span className="shippingCalculator__list--price">
                      <Price
                        value={price / 100}
                        formatter={useFormattedPrice}
                        testId="price"
                        data-value={price / 100}
                        variant="spot"
                        classes="text__title-subsection"
                        SRText="Preço:"
                      />
                     </span>
                   </li>
                )
              }
            ) 
          : 
            null
          }
          {error && !loading && (
            <p className="error">
              Algo deu errado. Confirme seu cep e tente novamente.
            </p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProductShippingCalculator
