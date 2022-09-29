interface RangePriceFilter {
    label: string;
    quantity: number;
    selected: boolean;
    value: string;
}

const organizeFacetsRange = (filtersPrice: RangePriceFilter[]) => {
    const allValuesFilter: number[] = [];

    filtersPrice.forEach((filterPrice: RangePriceFilter) => {
      const valuesFilter = filterPrice.value.split("-to-");
      allValuesFilter.push(Number(valuesFilter[0]), Number(valuesFilter[1]));
    });

    return [
      {
        min: Math.round(Math.min(...allValuesFilter)),
        max: Math.round(Math.max(...allValuesFilter)),
      },
    ];
}

export default organizeFacetsRange
  