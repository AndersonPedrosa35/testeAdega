const convertToIdProductCart = (
    id: string, 
    seller: string, 
    spotPrice: number 
) => {
    const idReplace = id.includes('StoreProduct') ? id.replace(':StoreProduct', '') : id

    return `${idReplace}:${seller}:${spotPrice}`
}

export default convertToIdProductCart