import { useState, useEffect } from "react"

import IconMessage from "src/components/ui/Icons/IconMessage"
import IconNewsletter from "src/components/ui/Icons/IconNewsletter"

import { validateEmail } from "src/helpers/validateEmail"
import './newsletter.scss'

const Newsletter = () => {
  const [emailNewsletter, setEmailNewsletter] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleNewsletterSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setSuccess(false)


    if (validateEmail(emailNewsletter)) {
      setError('')
      const data = { email: emailNewsletter }
      setLoading(true)

        fetch(`https://testemiddleware--adegamarche.myvtex.com/_v/newsletter`, {
          method: 'POST',
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response?.Id || response?.message) {
              setSuccess(true)
            } else {
              setError('Erro ao enviar o e-mail... Tente novamente mais tarde.')
            }
          })
          .catch(() => {
            setError('Erro ao enviar o e-mail')
        }).finally(() => {
          setLoading(false)
        })

    } else {
      setError('E-mail inválido')
    }
  }

  useEffect(() => {
    console.log(`loading`, loading)
  }, [loading])

  return (
    <section className="newsletter">
      <div className="newsletter__inner container">
        <IconNewsletter />
        <h4 className="newsletter__title">
          Assine para receber nossas novidades!
        </h4>
        <div className="newsletter__input-wrapper">
          {!success ? (
            <form
              className="newsletter__form"
              onSubmit={(e) => handleNewsletterSubmit(e)}
            >
              <p>
                <IconMessage />
                <input
                  placeholder="example@email.com"
                  className="newsletter__input h-12 pl-16 rounded w-full"
                  type="email"
                  value={emailNewsletter}
                  onChange={(e) => setEmailNewsletter(e.target.value)}
                  required
                />
                {error.length > 0 && (
                  <span className="newsletter__form-error">{error}</span>
                )}
              </p>
               <button className={`newsletter__submit ${loading ? `loading` : ``}`}>
                Enviar
              </button>
            </form>
          ) : (
            <p className="newsletter__message-success">
              E-mail cadastrado com sucesso!
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter
