export const typeDefsMenu = `
    type CmsHeaderMenuMenuItemsMenuItem implements Node {
        submenuImage: String
        link: String
        title: String
    }

    type CmsHeaderMenuMenuItemsMenuItemSubmenu implements Node {
        title: String
    }

    type CmsHeaderMenuMenuItemsMenuItemSubmenuLinks implements Node {
        linkHighlight: Boolean
        title: String
        link: String
        target: Boolean
    }
`;
