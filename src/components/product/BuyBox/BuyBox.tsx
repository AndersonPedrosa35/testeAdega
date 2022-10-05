import { useState, useEffect } from "react";
import Price from "src/components/ui/Price";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import type { ProductDetailsFragment_ProductFragment } from "@generated/graphql";
import { ProductFlagCollection } from "../ProductFlag";
import { DiscountBadge } from "src/components/ui/Badge";
import "./buy-box.scss";
import { BuyButton } from "../BuyButton";
// import { ProductButtonSubscription } from 'src/components/subscription'

interface Props {
  product: ProductDetailsFragment_ProductFragment;
}

const BuyBox = ({ product }: Props) => {
  const { name, brand, id, offers } = product;
  const [shortDescription, setShortDescription] = useState("");

  const outOfStock =
    offers.offers[0].availability === "https://schema.org/OutOfStock";

  const shortDescriptionDefination = async () => {
    const data = await fetch(
      `https://testemiddleware--adegamarchehlg.myvtex.com/_v/flagCollection/${id}`
    ).then((response) => response.json());

    const shortDescriptionResponse = await data.complementName;

    setShortDescription(shortDescriptionResponse);
  };

  useEffect(() => {
    shortDescriptionDefination();
  }, []);

  return (
    <div className="buyBox">
      <h1 className="buyBox__name">{name}</h1>
      <div className="buyBox__reviewBrand">
        <span className="buyBox__brand">{brand.name}</span>
      </div>
      <div className="buyBox__description">
        {shortDescription && (
          <p className="buyBox__description--text">{shortDescription}</p>
        )}
      </div>

      <div className="buyBox__box"> 
        {!outOfStock ? (
          <div className="buyBox__box--wrapper">
            <div className="buyBox__box--prices">
              {offers.offers[0].listPrice !== offers.lowPrice ? (
                <Price
                  value={offers.offers[0].listPrice}
                  formatter={useFormattedPrice}
                  testId="list-price"
                  data-value={offers.offers[0].listPrice}
                  variant="listing"
                  classes="text__legend"
                  SRText="Original price:"
                />
              ) : null}
              <Price
                value={offers.lowPrice}
                formatter={useFormattedPrice}
                testId="price"
                data-value={offers.lowPrice}
                variant="spot"
                classes="text__lead"
                SRText="Sale Price:"
              />
            </div>
            <ProductFlagCollection
              idProduct={product.isVariantOf.productGroupID}
              className="buyBox__flag-collection buyBox__flag"
            />
            <DiscountBadge
              listPrice={offers.offers[0].listPrice}
              spotPrice={offers.lowPrice}
            />
          </div>
        ) : null}
        <BuyButton {...product} />

        {/* <ProductButtonSubscription /> */}
      </div>
    </div>
  );
};

export default BuyBox;
