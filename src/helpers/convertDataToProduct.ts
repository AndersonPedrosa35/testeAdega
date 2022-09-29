export const convertDataToProduct = (product: any) => {
    const itemMain = product.items.filter((item: any) => item.itemId === product.productId)[0]
    
    return [{
        slug: `${product.linkText}-${itemMain.itemId}`,
        sku: itemMain.itemId,
        name: product.productName,
        gtin: itemMain.referenceId[0].Value,
        id: product.productId,
        brand: convertBrand(product.brand),
        isVariantOf: {
            additionalProperty:[],
            name: product.productName,
            productGroupID: product.productId,
        },
        image: convertImage(itemMain.images),   
        offers: convertOffers(itemMain.sellers),
        additionalProperty: []
    }]
}

export const convertBrand = (brand: string) => {
    return {
        name: brand
    }
}

export const convertImage = (images: string[]) => {
    return images.map((img: any) => {
        return {
            url: img?.imageUrl?.replace('vteximg.com.br', 'vtexassets.com'),
            alternateName: img?.imageLabel
        }
    })
}


export const convertOffers = (sellers: any) => {
    const sellerDefault = sellers.filter((seller: any) => seller.sellerDefault === true)[0]

    return {
        lowPrice: sellerDefault.commertialOffer.Price,
        offers: [{
            availability: sellerDefault.commertialOffer.IsAvailable ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            price: sellerDefault.commertialOffer.Price,
            listPrice: sellerDefault.commertialOffer.ListPrice,
            quantity: 1,
            seller: { 
                identifier: sellerDefault.sellerId,
            },
        }]
    }
}
