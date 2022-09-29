import { useState } from "react";
import Button from "src/components/ui/Button";
import Checkbox from "src/components/ui/Checkbox";
import type {
  IStoreSelectedFacet,
  Filter_FacetsFragment,
} from "@generated/graphql";
import PriceRange from "src/components/ui/PriceRange";

const formatRange = (min: number, max: number) =>
  `${min.toFixed(2)}-to-${max.toFixed(2)}`;

type OnFacetChange = (
  item: IStoreSelectedFacet,
  type: "BOOLEAN" | "RANGE"
) => void;

interface Props {
  facets: Filter_FacetsFragment[];
  onFacetChange: OnFacetChange;
}

function Facets({ facets, onFacetChange }: Props) {
  const [showItems, setShowItems] = useState<string[]>([]);
  const [showMoreOptions, setShowMoreOptions] = useState<string[]>([]);
  const handleAccordion = (title: string, type: string) => {
    if (
      type === "typeShowItems"
        ? showItems.includes(title)
        : showMoreOptions.includes(title)
    ) {
      let newItems;

      if (type === "typeShowItems") {
        newItems = showItems.filter((item) => item !== title);
        setShowItems(newItems);
      } else {
        newItems = showMoreOptions.filter((item) => item !== title);
        setShowMoreOptions(newItems);
      }
    } else {
      type === "typeShowItems"
        ? setShowItems([...showItems, title])
        : setShowMoreOptions([...showMoreOptions, title]);
    }
  };

  return (
    <div className="filters__main" data-store-filter>
      {facets.map((facet, index) => {
        const { __typename: type, label, key } = facet;

        return (
          <div
            key={`${label}-${index}`}
            className={`filters__main-item ${
              showItems.includes(label) ? "" : "active"
            } ${key}`}
          >
            <Button
              className={`filters__main-item--title ${
                showItems.includes(label) && "active"
              }`}
              onClick={() => handleAccordion(label, "typeShowItems")}
            >
              {label}
            </Button>

            <ul
              data-category="label"
              className={`filters__main-item--content ${
                showMoreOptions.includes(label) && "active"
              }`}
            >
              {type === "StoreFacetRange" ? (
                <li>
                  <PriceRange
                    min={facet.min}
                    max={facet.max}
                    onEnd={(v) =>
                      onFacetChange(
                        {
                          key: facet.key,
                          value: formatRange(v.min, v.max),
                        },
                        "RANGE"
                      )
                    }
                  />
                </li>
              ) : (
                <>
                  {facet?.values?.map((item) => {
                    const id = `${facet.label}-${item.label}`;

                    return (
                      <li key={id}>
                        <Checkbox
                          id={id}
                          checked={item.selected}
                          onChange={() =>
                            onFacetChange(
                              { key: facet.key, value: item.value },
                              "BOOLEAN"
                            )
                          }
                          data-testid="facet-filter-checkbox"
                          data-value={item.value}
                          data-quantity={item.quantity}
                        />
                        <label htmlFor={id}>
                          {item.label} {` `} ({item.quantity})
                        </label>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>

            {/* {values.length > 5 && isMobile() && (
              <Button
                className="filters__main-item--seeMore"
                onClick={() => handleAccordion(label, "typeShowMoreItems")}
              >
                {showMoreOptions.includes(label) ? "Ver Menos" : "Ver mais"}
              </Button>
            )} */}
          </div>
        );
      })}
    </div>
  );
}

export default Facets;
