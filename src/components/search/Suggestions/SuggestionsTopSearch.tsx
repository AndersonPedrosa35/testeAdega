import { List as UIList } from '@faststore/ui'
import { forwardRef } from 'react'
import { Badge } from 'src/components/ui/Badge'
import Link from 'src/components/ui/Link'
import { navigate } from 'gatsby'
import type { HTMLAttributes } from 'react'
import type { StoreSuggestionTerm } from '@generated/graphql'
import { formatSearchPath } from 'src/sdk/search/useSearchInput'
import useTopSearch from 'src/sdk/search/useTopSearch'
import { useUI } from 'src/sdk/ui/Provider'

export interface SuggestionsTopSearchProps
  extends HTMLAttributes<HTMLDivElement> {

  testId?: string
  topTerms?: StoreSuggestionTerm[]
}

const SuggestionsTopSearch = forwardRef<
  HTMLDivElement,
  SuggestionsTopSearchProps
>(function SuggestionsTopSearch(
  { testId = 'top-search', topTerms, ...otherProps },
  ref
) {
  const { terms } = useTopSearch(topTerms)
  const { closeSearchInput } = useUI()

  return (
    <section
      ref={ref}
      data-testid={testId}
      data-fs-search-suggestion-section
      {...otherProps}
    >
      <div data-fs-search-suggestion-header>
        <p data-fs-search-suggestion-title>Termos mais buscados</p>
      </div>
      <UIList variant="ordered">
        {terms?.map((term, index) => (
          <li key={term.value} data-fs-search-suggestion-item>
            <Link 
                variant="display" 
                to={formatSearchPath(term.value)}
                onClick={(e: any) => {
                  e.preventDefault()

                  closeSearchInput()
                  navigate(formatSearchPath(term.value))
                }}
                >
              <Badge variant="info">{index + 1}</Badge>
              {term.value}
            </Link>
          </li>
        ))}
      </UIList>
    </section>
  )
})

export default SuggestionsTopSearch
