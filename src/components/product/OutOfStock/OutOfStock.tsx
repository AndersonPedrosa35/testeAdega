import { useSession } from 'src/sdk/session'
import {
  OutOfStock as UIOutOfStock,
  OutOfStockTitle as UIOutOfStockTitle,
  OutOfStockMessage as UIOutOfStockMessage,
} from '@faststore/ui'
import { useState } from 'react'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import InputText from 'src/components/ui/InputText'
import type { ReactElement, FormEvent } from 'react'

export interface OutOfStockProps {
  /**
   * ID to find this component in testing tools (e.g.: cypress,
   * testing-library, and jest).
   */
  testId?: string
  /**
   * The Out of Stock Section's title.
   */
  title?: string
  /**
   * The button text.
   */
  buttonText?: string
  /**
   * Icon displayed inside the button.
   * @default <Icon name="BellRinging" />
   */
  buttonIcon?: ReactElement
  /**
   * Message describing when the user will be notified.
   */
  notificationMsg?: string
  /**
   * Icon displayed inside the message.
   * @default <Icon name="BellRinging" />
   */
  notificationMsgIcon?: ReactElement
  /**
   *
   */
  onSubmit: (value: string) => void
}

function OutOfStock(props: OutOfStockProps) {
  const { postalCode } = useSession()

  const defaultButtonText = 'Notify me'
  const defaultIconName = 'BellRinging'

  const [btnText, setBtnText] = useState(defaultButtonText)
  const [buttonIconName, setButtonIconName] = useState(defaultIconName)
  const [disabled, setDisabled] = useState(false)
  const [email, setEmail] = useState('')

  const {
    title = postalCode ? 'Unavailable in Your Location' : 'Out of Stock',
    notificationMsg = 'Notify me when available',
    buttonText = btnText,
    buttonIcon = <Icon name={buttonIconName} width={16} height={16} />,
    notificationMsgIcon = (
      <Icon name={defaultIconName} width={16} height={16} />
    ),
    onSubmit,
  } = props

  const reset = () => {
    setButtonIconName(defaultIconName)
    setBtnText(defaultButtonText)
    setDisabled(false)

    setEmail('')
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setDisabled(true)
    setButtonIconName('Ellipsis')

    try {
      onSubmit(email)
      setButtonIconName('Checked')
      setBtnText('Subscribed successfully')
    } catch (err) {
      // TODO: Display error below Input component when Input is ready for that
      console.error(err.message)
    } finally {
      // Return to original state after 2s
      setTimeout(reset, 2000)
    }
  }

  return (
    <UIOutOfStock onSubmit={handleSubmit}>
      <UIOutOfStockTitle>{title}</UIOutOfStockTitle>
      <UIOutOfStockMessage>
        {notificationMsgIcon} {notificationMsg}
      </UIOutOfStockMessage>
      <InputText
        id="out-of-stock-email"
        value={email}
        label="Email"
        aria-label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        data-store-out-of-stock-button
        type="submit"
        disabled={disabled}
        variant="primary"
        icon={buttonIcon}
        iconPosition="left"
      >
        {buttonText}
      </Button>
    </UIOutOfStock>
  )
}

export default OutOfStock
