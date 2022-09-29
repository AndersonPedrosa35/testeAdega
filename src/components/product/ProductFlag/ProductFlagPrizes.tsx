import { useState } from "react";

import { flagImageHelper } from "src/helpers/flagImageHelper";
import { IPropsPrizes, ISpecifications } from "./typings";
import './product-flag.scss'

const ProductFlagPrizes = ({ specifications , className }: IPropsPrizes) => {
  const prizes = specifications.filter((prize) => prize.name === 'Prêmios')

  const [open, setOpen] = useState<boolean>(false);

  if (!prizes.length) {
    return null;
  }

  return (
    <div className={`flag__prizes ${className}`}>
      <div
        className={`flag__prizes--list ${
          open ? "flag__prizes--list-open" : ""
        }`}
      >
        {prizes.map((prize: ISpecifications) => (
          <img
            className="flag__prizes--image"
            key={prize.name}
            alt="Imagem de Prêmio do Produto"
            src={flagImageHelper(prize.value)}
          />
        ))}
      </div>
      {!open && prizes.length > 1 ? (
        <button
          onClick={() => setOpen(!open)}
          className="flag__prizes--showMore"
        >{`+${prizes.length - 2}`}</button>
      ) : null}
    </div>
  );
};

export default ProductFlagPrizes;
