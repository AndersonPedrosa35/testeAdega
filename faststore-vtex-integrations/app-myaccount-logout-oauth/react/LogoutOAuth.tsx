import React, { useEffect, useState } from 'react'
import styles from './styles/styles.css'

function LogoutOAuth() {
  const [showModal, setShowModal] = useState(false)

  const addNewLogout = () => {
    console.log(`new logout`)
    if(!document.querySelector('.custom-logout')){
      const isMobile = window.outerWidth < 959
      const buttonLogout = document.createElement('button')
            buttonLogout.classList.add('custom-logout')
            buttonLogout.textContent = "Sair"
            buttonLogout.setAttribute("style", `font-size: 1rem; color: #40464D; padding: 0.375rem 1rem; margin: 0 0 1.75rem; font-family: Arial,'Helvetica',sans-serif; font-weight: normal; border: 0; background: none; cursor: pointer; border-left: .25rem solid transparent; ${isMobile ? 'padding: 0;' : 'margin-left: -1.5rem;'}`)

      if(document.querySelector('.vtex-my-account-1-x-menuLinks')){
        document.querySelector('.vtex-my-account-1-x-menuLinks')?.append(buttonLogout)
      }

      document.querySelector('.custom-logout')?.addEventListener('click', function(e){
        e.preventDefault();
        setShowModal(true)
      })
    }
  }

  const logoutOAuth = () => {
    const adjustmentLoggout = setInterval(() => {
      if(document.querySelector('.vtex-my-account-1-x-menuLinks > div.vtex-my-account-1-x-menuLink')){
        clearInterval(adjustmentLoggout)
        addNewLogout()
      }
    }, 200)
  }

  useEffect(() => {
    logoutOAuth()
  }, [])

  if(showModal){
    return (
      <div className={styles.customModalLogout}>
        <span className={styles.customModalLogoutOverlay} onClick={() => setShowModal(false)} />
        <div className={styles.customModalLogoutContent}>
          <i className={styles.customModalLogoutIconClose} onClick={() => setShowModal(false)}>
            <svg className="vtex__icon-close" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g fill="currentColor">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </g>
            </svg>
          </i>
          <span className={styles.customModalLogoutIconTitle}>Deseja mesmo sair?</span>
          <div className={styles.customModalLogoutButtons}>
            <button className={styles.customModalLogoutButtonCancel} onClick={() => setShowModal(false)}>Cancelar</button>
            <button className={styles.customModalLogoutButtonLogout} onClick={(e: any) => {
              e.preventDefault()

              fetch('/api/vtexid/pub/logout?scope=adegamarche').then((response) => {
                response.json()
              }).then((response) => {
                console.log(`response`, response)
                window.location.href = 'https://marche.fusionauth.io/oauth2/logout?client_id=391bc33d-21ab-4b22-b5d1-6ea0f6808c27&post_logout_redirect_uri=/index?client_id=391bc33d-21ab-4b22-b5d1-6ea0f6808c27'
              })

            }}>Sair</button>
          </div>
        </div>
      </div>
    )
  }
  return <div></div>
}

export default LogoutOAuth
