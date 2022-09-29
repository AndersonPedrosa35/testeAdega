export const typeDefsSeo = `
    type CmsInstitutionalPageSeo implements Node {
        siteMetadataWithSlug: CmsInstitutionalPageSeoSiteMetadataWithSlug
    }
    
    type CmsInstitutionalPageSeoSiteMetadataWithSlug implements Node {
        title: String
        description: String
        slug: String
        titleTemplate: String
    }
`