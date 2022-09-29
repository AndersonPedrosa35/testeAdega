import React from 'react'
import Button from 'src/components/ui/Button'
import './text-seo.scss'

interface Props {
  children?: React.ReactNode
  title: string
}

const TextSeo = ({ children, title }: Props) => {
  const [showText, setShowText] = React.useState(false)

  return (
    <>
      <div className="textseo__content">
        <h2 className="textseo__content-title"> {title} </h2>
        {children && (
          <>
            <div className={`textseo__content-text ${showText ? 'active' : ''}`}>
              {children}
            </div>
            <Button
              className={`textseo__content-button ${showText ? 'active' : ''}`}
              onClick={() => setShowText(!showText)}
            >
              <span>
                <i></i>
                {showText ? 'Leia menos' : 'Leia mais'}
              </span>
            </Button>
          </>
        )}
      </div>
    </>
  )
}

export default TextSeo
