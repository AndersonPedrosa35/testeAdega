import { Link } from "gatsby";
import { useProductLink } from "src/sdk/product/useProductLink";
import Price from "src/components/ui/Price";
import { useFormattedPrice } from "src/sdk/product/useFormattedPrice";

const CardBuyTogether = ({product}: any) => {
    const linkProps = useProductLink({ product , selectedOffer: 0, index: 1 });

    if(!product){
      return null
    }

    const {
      name,
      offers: {
        lowPrice: spotPrice,
      },
    } = product;
  
    return (
        <article className="buyTogether__product">
        <Link to={linkProps.href} title={name}>
          <img
            src={product.image[0].url}
            alt={name}
            className="shelf__photo"
          />
          <div className="buyTogether__product-infos">
            <h3>{name}</h3>
            <Price
              value={spotPrice}
              formatter={useFormattedPrice}
              testId="price"
              data-value={spotPrice}
              variant="spot"
              classes="text__body"
              SRText="Por:"
            />
          </div>
        </Link> 
      </article>
    );
  };
  
  export default CardBuyTogether;
  