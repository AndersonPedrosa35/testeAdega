import { List as UIList } from '@faststore/ui'
import SuggestionProductCard from 'src/components/search/SuggestionProductCard'
import Button from 'src/components/ui/Button'
import type { ProductSummary_ProductFragment } from '@generated/graphql'
import type { HTMLAttributes } from 'react'
import IsMobile from 'src/helpers/isMobile'
import useSearchInput, { formatSearchPath } from 'src/sdk/search/useSearchInput'
import { navigate } from 'gatsby'
import { useUI } from 'src/sdk/ui/Provider'

function formatSearchTerm(
  indexSubstring: number,
  searchTerm: string,
  suggestion: string,
) {

  if (indexSubstring === 0) {
    return searchTerm
      .split('')
      .map((char, idx) =>
        idx === 0 && suggestion.indexOf(char.toUpperCase()) === 0
          ? char.toUpperCase()
          : char.toLowerCase()
      )
      .join('')
  }

  return searchTerm.toLowerCase()
}

function handleSuggestions(suggestion: string, searchTerm: string) {
  const suggestionSubstring = suggestion
    .toLowerCase()
    .split(searchTerm.toLowerCase())

  return (
    <strong>
      {suggestionSubstring.map((substring, indexSubstring) => (
        <>
          {substring.length > 0 && (
            <>
              {indexSubstring === 0
                ? substring.charAt(0).toUpperCase() + substring.slice(1)
                : substring}
            </>
          )}
          {indexSubstring !== suggestionSubstring.length - 1 &&
            formatSearchTerm(indexSubstring, searchTerm, suggestion)}
        </>
      ))}
    </strong>
  )
}

export interface SuggestionsProps extends HTMLAttributes<HTMLDivElement> {
  testId?: string
  term?: string
  terms?: Array<{ value: string }>
  products?: ProductSummary_ProductFragment[]
}

function Suggestions({
  testId = 'suggestions',
  term = '',
  terms = [],
  products = [],
  ...otherProps
}: SuggestionsProps) {
  const { onSearchInputSelection } = useSearchInput()
  const { closeSearchInput } = useUI()

  return (
    <section data-testid={testId} data-fs-search-suggestions {...otherProps}>
      {IsMobile() && term ?  <p data-fs-search-suggestion-term> Resultado para <strong>{term}</strong> </p> : <p data-fs-search-suggestion-term> Buscando por <strong>{term}</strong> </p>} 
      
      {terms.length > 0 && !IsMobile() && (
        <UIList data-fs-search-suggestion-section data-fs-search-suggestion-section-list>
          {terms?.map(({ value: suggestion }) => (
            <li key={suggestion} data-fs-search-suggestion-item>
              <Button onClick={() => {
                  onSearchInputSelection?.(
                    suggestion,
                    formatSearchPath(suggestion)
                  )
                }} className="term" >
                <strong> {term} </strong> <span> em </span> {handleSuggestions(suggestion, term)}
              </Button>
            </li>
          ))}
        </UIList>
      )}

      {products.length > 0 && (
        <div data-fs-search-suggestion-section>
          <UIList>
            {products.map((product, index) => (
              <li key={product.id} data-fs-search-suggestion-item>
                <SuggestionProductCard product={product} index={index} />
              </li>
            ))}
          </UIList>
        </div>
      )}

      <button data-fs-search-suggestion-see-all onClick={() => {
        const path = formatSearchPath(term)
        closeSearchInput()
        navigate(path)
      }}> Ver todos os produtos</button>
    </section>
  )
}

export default Suggestions
