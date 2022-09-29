
import { ITotalCount } from './typings'

function TotalCount({ totalCount }: ITotalCount) {

    if(!totalCount) {
        return null
    }

    return (
        <span
            className="product-gallery__filters-totalProducts"
            data-testid="total-product-count"
            data-count={totalCount}
        >
            {totalCount > 1 ? <span>{totalCount} produtos encontrados </span> : <span>{totalCount} produto encontrado</span>} 
        </span>
    )
}

export default TotalCount