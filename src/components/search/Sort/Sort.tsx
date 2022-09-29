import { useSearch } from '@faststore/sdk'
import Select from 'src/components/ui/Select'
import { OptionsMapSort } from 'src/helpers/optionsMapSort'

const keys = Object.keys(OptionsMapSort) as Array<keyof typeof OptionsMapSort>

function Sort() {
  const {
    setState,
    state,
  } = useSearch()

  return (
    <Select
      id="sort-select"
      className="product-gallery__filters-orderby"
      label="Ordenar Por"
      options={OptionsMapSort}
      onChange={(e) => {
        const sort = keys[e.target.selectedIndex]

        setState({
          ...state,
          sort,
          page: 0,
        })
      }}
      value={state.sort}
      testId="search-sort"
    />
  ) 
}

export default Sort
