import { Card, CardActions, CardContent, CardImage } from "@faststore/ui";
import Button from "src/components/ui/Button";
import { Image } from "src/components/ui/Image";
import Price from "src/components/ui/Price";
import { QuantitySelector } from "src/components/product/BuyButton";
import { useRemoveButton } from "src/sdk/cart/useRemoveButton";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import type { CartItem as ICartItem } from "src/sdk/cart";
import IconTrash from "src/components/ui/Icons/IconTrash";

interface Props {
  item: ICartItem;
}

function CartItem({ item }: Props) {
  const btnProps = useRemoveButton(item);

  return (
    <Card
      className="cart-item"
      data-testid="cart-item"
      data-sku={item.itemOffered.sku}
      data-seller={item.seller.identifier}
    >
      <CardImage>
        <Image
          src={item.itemOffered.image[0].url}
          alt={item.itemOffered.image[0].alternateName}
          width={72}
          height={72}
        />
      </CardImage>
      <CardContent>
        <div data-cart-item-summary>
          <p className="text__body" data-cart-item-title>
            {item.itemOffered.isVariantOf.name}
          </p>
          <p data-cart-item-brand>
            <strong>{item.itemOffered.brand.name}</strong>
          </p>
          <span data-cart-item-prices>
            <Price
              value={item.price}
              formatter={useFormattedPrice}
              testId="price"
              data-value={item.price}
              variant="spot"
              classes="text__title-subsection"
              SRText="Preço:"
            />
          </span>
        </div>
        <CardActions>
          <QuantitySelector item={[item]} />
          <Button
            variant="tertiary"
            icon={<IconTrash />}
            iconPosition="left"
            {...btnProps}
            className="icon__close"
          />
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CartItem;
