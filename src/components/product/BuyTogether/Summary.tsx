import Price from "src/components/ui/Price";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";
import { useCart, cartStore } from 'src/sdk/cart'
import { convertProductToSendCart }from 'src/helpers/convertProductToSendCart'
import { useUI } from 'src/sdk/ui/Provider'

const Summary = ({ discount, products }: any) => {
  const { set } = cartStore
  const { id: cartId, items: itemsCart } = useCart()
  const { pushToast } = useUI()

  if (!discount || !products) {
    return null;
  }

  const total =
    Number(products[0]?.offers?.lowPrice) +
    Number(products[1]?.offers?.lowPrice);

  const totalWithDiscount = total - Number(discount);

  const handleAddItemsToCart = () => {
    const productsToCart = convertProductToSendCart(products)

    set({
      id: cartId,
      items: [...itemsCart, ...productsToCart],
    })

    pushToast({
      message: 'Itens adicionados à sacola',
      status: 'INFO',
    })
  }

  return (
    <div className="buyTogether__summary">
      <h3>Total comprando junto</h3>
      <p className="total">
        <Price
          value={totalWithDiscount}
          formatter={useFormattedPrice}
          testId="price"
          data-value={totalWithDiscount}
          variant="spot"
          classes="text__body"
          SRText="Por:"
        />
      </p>
      <p className="discount">
        Você economiza
        {`  `}
        <span>
          <Price
            value={discount}
            formatter={useFormattedPrice}
            testId="price"
            data-value={discount}
            variant="spot"
            classes="text__body"
            SRText="Por:"
          />
        </span>
      </p>
      <button
        onClick={() => {
          handleAddItemsToCart();
        }}
      >
        Compre junto
      </button>
    </div>
  );
};

export default Summary;
