import { useSearch } from '@faststore/sdk'
import SlideOver from 'src/components/ui/SlideOver'
import { ButtonIcon } from 'src/components/ui/Button'
import IconClose from 'src/components/ui/Icons/IconClose'
import { OptionsMapSort } from 'src/helpers/optionsMapSort'
import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

import './sort.scss'

const keys = Object.keys(OptionsMapSort) as Array<keyof typeof OptionsMapSort>

function SortMobile() {
  const { closeFilterOrderby } = useUI()
  const { fade, fadeOut } = useFadeEffect()
  const { state, setState } = useSearch()
  
  return (
    <SlideOver
      isOpen
      fade={fade}
      onDismiss={fadeOut}
      size="partial"
      direction="leftSide"
      className="filter-modal__orderby--content orderby"
      onTransitionEnd={() => fade === 'out' && closeFilterOrderby()}
    >
      <div className="filter-modal__orderby--body">
        <header className="fil  ter-modal__header">
          <ButtonIcon
            data-testid="filter-modal-button-close"
            className="filter-modal-button-close"
            aria-label="Close Filters"
            icon={<IconClose />}
            onClick={() => {
              fadeOut()
            }}
          />
          <h2 className="text__lead">Ordenar</h2>
        </header>
        <main className="filter-modal__orderby--main">
          <ul className="filter-modal__orderby--list">
            {keys.map((key) => (
              <li key={key}>
                <button onClick={() => {
                  const sort = key

                  setState({
                    ...state,
                    sort,
                    page: 0,
                  })

                  fadeOut()
                }}>
                  {OptionsMapSort[key]}
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </SlideOver>
  ) 
}

export default SortMobile
