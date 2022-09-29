import SectionInfoProduct from "src/components/sections/SectionInfoProduct";
import { IProductSpecifications } from './typings'

const ProductSpecifications = ( { specifications } : IProductSpecifications) => {
  if (!specifications.length){
    return null
  }

  const notShowSpecifications = [
    'Prêmios'
  ]

  return (
    <SectionInfoProduct title="Especificações" className="specification">
      <table>
        <tbody>
          {specifications.map(
            ({name, value}, idx) => {
              if (!notShowSpecifications.includes(name)) {
                return (
                  <tr key={`${idx}-${name}`}>
                    <td>{name}</td>
                    <td>{value}</td>
                  </tr>
                );
              }

              return null;
            }
          )}
        </tbody>
      </table>
    </SectionInfoProduct>
  );
};

export default ProductSpecifications;
