import type { SearchEvent } from '@faststore/sdk'
import {
  sendAnalyticsEvent,
} from '@faststore/sdk'
import type {
  SearchInputProps as UISearchInputProps,
  SearchInputRef,
} from '@faststore/ui'
import {
  formatSearchPath,
  SearchInputProvider,
} from 'src/sdk/search/useSearchInput'
import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import { forwardRef, lazy, Suspense, useRef, useState } from 'react'
import Icon from 'src/components/ui/Icon'
import useOnClickOutside from 'src/sdk/ui/useOnClickOutside'
import { Overlay } from '@faststore/ui'
import IsMobile from 'src/helpers/isMobile'
import type { SearchInputContextValue } from 'src/sdk/search/useSearchInput'
import { useUI } from 'src/sdk/ui/Provider'

const Suggestions = lazy(() => import('src/components/search/Suggestions'))

declare type SearchInputProps = {
  onSearchClick?: () => void
  buttonTestId?: string
} & Omit<UISearchInputProps, 'onSubmit'>

const sendAnalytics = async (term: string) => {
  sendAnalyticsEvent<SearchEvent>({
    name: 'search',
    params: { search_term: term },
  })
}

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(
  function SearchInput(
    { onSearchClick, buttonTestId = 'store-search-button', ...props },
    ref
  ) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const searchRef = useRef<HTMLDivElement>(null)
    const { openSearchInput, closeSearchInput, searchInput: displaySearchInput } = useUI()

    useOnClickOutside(searchRef, () =>  closeSearchInput())

    const onSearchInputSelection: SearchInputContextValue['onSearchInputSelection'] = (term) => {
      sendAnalytics(term)
      closeSearchInput()
      setSearchQuery(term)
    }

    return (
      <div
        ref={searchRef}
        data-store-search-input-wrapper
        data-store-search-input-dropdown-open={displaySearchInput}
      >
        <SearchInputProvider onSearchInputSelection={onSearchInputSelection}>
          <UISearchInput
            ref={ref}
            icon={
              <Icon
                name="MagnifyingGlass"
                onClick={onSearchClick}
                data-testid={buttonTestId}
              />
            }
            placeholder="Encontre sua bebida aqui..."
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={(term) => {
              const path = formatSearchPath(term)

              onSearchInputSelection(term, path)
              navigate(path)
            }}
            onFocus={() => openSearchInput()}
            value={searchQuery}
            {...props}
          />
          {displaySearchInput && (
            <>
              <Suspense fallback={null}>
                <div data-store-search-input-dropdown-wrapper>
                  <Suggestions term={searchQuery} />
                </div>
              </Suspense>
              {!IsMobile() ? <Overlay
                data-modal-overlay
                onClick={() => closeSearchInput()}
              /> : null}
            </>
          )}
        </SearchInputProvider>
      </div>
    )
  }
)

export default SearchInput
