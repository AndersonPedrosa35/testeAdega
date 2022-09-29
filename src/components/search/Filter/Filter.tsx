import { graphql } from 'gatsby'
import type { Filter_FacetsFragment } from '@generated/graphql'
import Facets from './Facets'
import { useFilter } from './useFilter'
import { setFacet, toggleFacet, useSearch } from '@faststore/sdk'

interface Props {
  facets: Filter_FacetsFragment[]
}

function Filter({
  facets: allFacets
}: Props) {
  const filter = useFilter(allFacets)
  const { facets } = filter
  const { resetInfiniteScroll, state, setState } = useSearch()

  return (
    <Facets
      facets={facets}
      onFacetChange={(facet, type) => {
        setState({
          ...state,
          selectedFacets:
            type === 'BOOLEAN'
              ? toggleFacet(state.selectedFacets, facet)
              : setFacet(state.selectedFacets, facet, true),
          page: 0,
        })
        resetInfiniteScroll(0)
      }}
    />
  )
}

export const fragment = graphql`
  fragment Filter_facets on StoreFacet {
    ... on StoreFacetRange {
      key
      label

      min {
        selected
        absolute
      }

      max {
        selected
        absolute
      }

      __typename
    }

    ... on StoreFacetBoolean {
      key
      label
      values {
        label
        value
        selected
        quantity
      }

      __typename
    }
  }
`

export default Filter
