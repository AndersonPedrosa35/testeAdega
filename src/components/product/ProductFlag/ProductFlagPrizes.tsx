// import { useState } from "react";

// import { flagImagePrizeHelper } from "src/helpers/flagImageHelper";
// import { IPropsPrizes } from "./typings";
// import './product-flag.scss'

// const ProductFlagPrizes = ({ specifications , className }: IPropsPrizes) => {
//   const [loadImage, setLoadImage] = useState(false)
//   const [open, setOpen] = useState(false)
//   const prizes = specifications.find((prize) => prize.name === 'Prêmios')

//   if (!prizes?.value ) {
//     return null;
//   }
  
//   const prizeUrlsLinksImg = prizes.value.split('|')

//   return (
//     <div className={`flag__prizes ${className} `}>
//       <div
//         className={`flag__prizes--list ${
//           open ? "flag__prizes--list-open" : ""
//         }`}
//       >       
//         {prizeUrlsLinksImg.map((imgLink, index) => (
//           <img
//             key={imgLink.trim()}
//             className={`flag__prizes--image flag__award flag__award${index} ${loadImage ? 'loaded' : ''}`}
//             alt={`Prêmio do Produto`}
//             src={flagImagePrizeHelper(imgLink.trim())}
//             width={40}
//             height={40}
//             onLoad={() => {
//                 setLoadImage(true)
//             }}
//           />
//         ))}        
//       </div>
//       {!open && prizeUrlsLinksImg.length > 1 ? (
//         <button
//           onClick={() => setOpen(!open)}
//           className="flag__prizes--showMore"
//         >
//           { `+${prizeUrlsLinksImg.length - 2}` }
//         </button>
//       ) : null}
//     </div>
//   );
// };

// export default ProductFlagPrizes;
