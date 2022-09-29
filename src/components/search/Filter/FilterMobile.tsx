import { useSearch } from "@faststore/sdk";
import { graphql } from "gatsby";
import Button, { ButtonIcon } from "src/components/ui/Button";
import IconClose from "src/components/ui/Icons/IconClose";
import SlideOver from "src/components/ui/SlideOver";
import type { Filter_FacetsFragment } from "@generated/graphql";
import Facets from "./Facets";
import { useFilter } from "./useFilter";
import { useUI } from 'src/sdk/ui/Provider'
import { useFadeEffect } from 'src/sdk/ui/useFadeEffect'

interface Props {
  facets: Filter_FacetsFragment[];
  testId?: string;
}

function FilterMobile({ facets: allFacets }: Props) {
  const { closeFilter } = useUI()
  const { fade, fadeOut } = useFadeEffect()
  const { state, setState } = useSearch();
  const { facets, selected, dispatch } = useFilter(allFacets);

  return (
    <SlideOver
      isOpen
      fade={fade}
      onDismiss={fadeOut}
      size="partial"
      direction="rightSide"
      className="filter-modal__filters--content"
      onTransitionEnd={() => fade === 'out' && closeFilter()}
    >
      <div className="filter-modal__filters--body">
        <header className="filter-modal__filters--header">
          <ButtonIcon
            className="filter-modal-button-close"
            data-testid="filter-modal-button-close"
            aria-label="Close Filters"
            icon={<IconClose />}
            onClick={() => {
              dispatch({
                type: "selectFacets",
                payload: state.selectedFacets,
              });

              fadeOut()
            }}
          />
          <h2 className="text__lead">Filtros</h2>
        </header>
        <Facets
          facets={facets}
          onFacetChange={(facet, type) =>
            type === "BOOLEAN"
              ? dispatch({ type: "toggleFacet", payload: facet })
              : dispatch({ type: "setFacet", payload: { facet, unique: true } })
          }
        />
      </div>
      <footer className="filter-modal__filters--footer">
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "selectFacets", payload: [] })}
        >
          Limpar
        </Button>
        <Button
          variant="primary"
          data-testid="filter-modal-button-apply"
          onClick={() => {
            setState({
              ...state,
              selectedFacets: selected,
              page: 0,
            });

            fadeOut()
          }}
        >
          Aplicar
        </Button>
      </footer>
    </SlideOver>
  );
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
`;

export default FilterMobile;
