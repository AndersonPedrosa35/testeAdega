import { Card, CardContent, CardImage } from '@faststore/ui'
import type { ProductSummary_ProductFragment } from '@generated/graphql'
import Link from 'src/components/ui/Link'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import { useProductLink } from 'src/sdk/product/useProductLink'
import { BuyButton } from 'src/components/product/BuyButton'
import { useUI } from 'src/sdk/ui/Provider'
import { navigate } from 'gatsby'

type SuggestionProductCardProps = {
  product: ProductSummary_ProductFragment
  index: number
}

function SuggestionProductCard({ product, index }: SuggestionProductCardProps) {
  const { onClick, href, ...linkProps } = useProductLink({
    product,
    selectedOffer: 0,
    index,
  })

  const {
    isVariantOf: { name },
    image: [img],
    offers: {
      lowPrice: spotPrice,
      offers: [{ listPrice, availability }],
    },
  } = product

  const outOfStock = availability === "https://schema.org/OutOfStock";
  const { closeSearchInput } = useUI()

  return (
    <Card data-fs-suggestion-product-card data-testid="suggestion-product-card">
        <CardContent>
          <Link to={href} 
            title={name} 
            variant="display" 
            {...linkProps} 
            onClick={(e: any) => {
              e.preventDefault()
              closeSearchInput()
              navigate(href)
            }}
          >
            <CardImage>
              <Image
                src={img.url}
                alt={img.alternateName}
                width={56}
                height={56}
              />
            </CardImage>
            <div data-fs-suggestion-product-card-summary>
              <p
                className="text__title-mini"
                data-fs-suggestion-product-card-title
              >
                {name}
              </p>
              <span data-fs-suggestion-product-card-prices>
              {!outOfStock ? (
                <>
                  {listPrice !== spotPrice ? (
                    <Price
                      value={listPrice}
                      formatter={useFormattedPrice}
                      testId="list-price"
                      data-value={listPrice}
                      variant="listing"
                      classes="text__legend"
                      SRText="De:"
                    />
                  ) : null}
                  <Price
                    value={spotPrice}
                    formatter={useFormattedPrice}
                    testId="price"
                    data-value={spotPrice}
                    variant="spot"
                    classes="text__title-mini"
                    SRText="Price:"
                  />
                </>
              ) : null}
              </span>
            </div>
          </Link>
          <BuyButton {...product}/>
        </CardContent>
    </Card>
  )
}

export default SuggestionProductCard
