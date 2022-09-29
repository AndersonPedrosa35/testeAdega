import { memo } from "react";
import { graphql, Link } from "gatsby";
import { useProductLink } from "src/sdk/product/useProductLink";
import { DiscountBadge } from "src/components/ui/Badge";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import Price from "src/components/ui/Price";
import BuyButton from "../BuyButton/BuyButton";
import { ProductFlagCollection, ProductFlagCountry, ProductFlagPrizes } from "../ProductFlag";
import ButtonWishlist from "src/components/wishlist/ButtonWishlist";

import {
  ProductCardContent as UIProductCardContent,
  ProductCardImage as UIProductCardImage,
} from "@faststore/ui";
import { Image } from "src/components/ui/Image";
import { ProductCardProps } from "./typings";
import "./product-card.scss";

const CardProduct = ({ product, index, aspectRatio = 1 }: ProductCardProps) => {
  const {
    id,
    isVariantOf: { name, productGroupID, additionalProperty: specifications},
    image: [img],
    offers: {
      lowPrice: spotPrice,
      offers: [{ listPrice, availability }],
    },
  } = product;

  const linkProps = useProductLink({ product, selectedOffer: 0, index });
  const outOfStock = availability === "https://schema.org/OutOfStock";

  return (
    <article className={`productCard__item`}>
      <Link to={linkProps.href} title={name}> 
        <UIProductCardImage>
          {!outOfStock ? (
            <DiscountBadge listPrice={listPrice} spotPrice={spotPrice} />
          ) : null}
          <ProductFlagPrizes
            specifications={specifications}
            className="productCard__flag-prizes"
          />
          <ProductFlagCountry
            specifications={specifications}
            className="productCard__flag-country"
          />
          <ButtonWishlist id={id}/>
          <Image
            src={img.url}
            alt={img.alternateName}
            width={360}
            height={360 / aspectRatio}
            sizes="(max-width: 768px) 25vw, 30vw"
            loading="lazy"
          />
        </UIProductCardImage>

        <UIProductCardContent data-fs-product-card-content>
          <div data-fs-product-card-heading>
            <ProductFlagCollection
              className="productCard__flag productCard__flag-collection"
              idProduct={productGroupID}
            />
            <h3 className="productCard__name" data-fs-product-card-title>
              {name}
            </h3>
            <div data-fs-product-card-prices>
              {!outOfStock ?  (
                <>
                  <span data-fs-product-card-listprice>
                    {listPrice !== spotPrice ? (
                      <>
                        de {` `}
                        <Price
                          value={listPrice}
                          formatter={useFormattedPrice}
                          testId="list-price"
                          data-value={listPrice}
                          variant="listing"
                          classes="text__legend"
                          SRText="De:"
                        />
                      </>
                    ) : null}
                  </span>
                  <span data-fs-product-card-price>
                    por {` `}
                    <Price
                      value={spotPrice}
                      formatter={useFormattedPrice}
                      testId="price"
                      data-value={spotPrice}
                      variant="spot"
                      classes="text__body"
                      SRText="Por:"
                    />
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </UIProductCardContent>

        <BuyButton {...product} />
      </Link>
    </article>
  );
};

export const fragment = graphql`
  fragment ProductSummary_product on StoreProduct {
    id: productID
    slug
    sku
    brand {
      brandName: name
    }
    name
    gtin

    isVariantOf {
      productGroupID
      name
      additionalProperty {
        name
        value
      }
    }

    image {
      url
      alternateName
    }

    brand {
      name
    }

    offers {
      lowPrice
      offers {
        availability
        price
        listPrice
        quantity
        seller {
          identifier
        }
      }
    }

    additionalProperty {
      propertyID
      name
      value
      valueReference
    }
  }
`;

export default memo(CardProduct);
