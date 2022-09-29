import getBrand from "./getBrand"
import convertToIdProductCart from "./convertToIdProductCart"

export const convertProductToSendCart = (products: any) => {

    return products?.map((product: any) => {
        return{
            id: convertToIdProductCart(product.id, product.offers.offers[0].seller.identifier, product.offers.lowPrice),
            price: product.offers.lowPrice,
            listPrice: product.offers.offers[0].listPrice,
            seller: product.offers.offers[0].seller,
            quantity: 1,
            itemOffered: {
                sku: product.sku,
                name: product.name,
                gtin: product.gtin,
                image: product.image,
                brand: { name: getBrand(product.brand) },
                isVariantOf: product.isVariantOf,
                additionalProperty: product.additionalProperty,
            },
        }
    })
}