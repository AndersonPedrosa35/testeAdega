export const typeDefsSeo = `
    type CmsLandingPageCustomSeo implements Node {
        siteMetadataWithSlug: CmsLandingPageCustomSeoSiteMetadataWithSlug
    }
  
    type CmsLandingPageCustomSeoSiteMetadataWithSlug implements Node {
        title: String
        description: String
        slug: String
    }
`;
