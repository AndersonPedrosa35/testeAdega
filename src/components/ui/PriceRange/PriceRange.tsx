import { PriceRange as UIPriceRange } from '@faststore/ui'
import { usePriceFormatter } from 'src/sdk/product/useFormattedPrice'
import type { PriceRangeProps } from '@faststore/ui'
import './price-range.scss'

type Props = Omit<PriceRangeProps, 'formatter'>

function PriceRange(props: Props) {
  const formatter = usePriceFormatter()

  return (
    <UIPriceRange
      data-fs-price-range
      className="fs-price-range"
      formatter={formatter}
      {...props}
    />
  )
}

export default PriceRange
