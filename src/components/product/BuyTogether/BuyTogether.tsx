import { useEffect, useState } from "react";
import IconEqual from "src/components/ui/Icons/IconEqual";
import Summary from "./Summary";
import ContentProducts from "./ContentProducts";
import { convertDataToProduct } from 'src/helpers/convertDataToProduct'

import { IBuyTogether } from "./typings";

import "./buy-together.scss";

const BuyTogether = ({ product }: IBuyTogether) => {
  const [discount, setDiscount] = useState<number>(0)
  const [productBuyTogether, setProductBuyTogether] = useState<any[]>([])

  async function getBuyTogether() {
    try {
      const data = await fetch(
        "https://testemiddleware--adegamarche.myvtex.com/_v/buyTogether",
        {
          method: "POST",
          body: JSON.stringify({
            items: [
              {
                id: product.id,
                quantity: 1,
                seller: product.offers.offers[0].seller.identifier,
              },
            ],
          }),
        }
      ).then((res) => res.json());

      if(data.length >= 2){
        setProductBuyTogether(convertDataToProduct(data.filter((item: any) => item.benefitProduct.productId !== product.id)[0].benefitProduct))
        setDiscount(Number(data[0].discount) + Number(data[1].discount))
      }
  
    } catch (err) {
        throw err
    }
  }

  useEffect(() => {
    getBuyTogether()
  }, [product])

  if(!product || !productBuyTogether[0]){
    return null
  }

  return (
    <section className="buyTogether">
      <div className="container">
        <h2>Compre Junto</h2>

        <div className="buyTogether__content"> 
          <ContentProducts products={[product, productBuyTogether[0]]} />
          <IconEqual />
          <Summary discount={discount} products={[product, productBuyTogether[0]]} />
        </div>
      </div>
    </section>
  );
};

export default BuyTogether;
