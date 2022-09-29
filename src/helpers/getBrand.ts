interface IBrand {
    brandName?: string,
    name?: string
}

const getBrand = (brand: IBrand) => {
    if (brand.brandName?.length) {
      return brand.brandName
    }

    if (brand.name?.length) {
      return brand.name
    }

    return ''
}

export default getBrand