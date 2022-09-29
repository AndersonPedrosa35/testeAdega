export const typeDefsInfoPage = `
    type CmsCollectionInfoPageSiteMetadataWithSlugSeo implements Node {
        title: String
        description: String
        slug: String
    }

    type CmsCollectionInfoPageSiteMetadataWithSlugConfigCollection implements Node {
        sort: String
        hideUnavailableItems: Boolean
        maxQuantityProducts: Int
        collection: String
        rangePrice: String
        term: String
    }
`;
