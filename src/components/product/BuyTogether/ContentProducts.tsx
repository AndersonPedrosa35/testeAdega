import CardBuyTogether from "./CardBuyTogether";
import IconCirclePlus from 'src/components/ui/Icons/IconCirclePlus'

const ContentProducts = ({ products }: any) => {

  if(!products.length || products.length < 2 ){
    return null
  }

  return (
    <div className="buyTogether__content-products">
      <CardBuyTogether product={products[0]} />
      <IconCirclePlus />
      <CardBuyTogether product={products[1]} /> 
    </div>
  );
};

export default ContentProducts;
