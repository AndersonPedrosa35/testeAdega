export const typeDefsMenuLateral = `
    type CmsPoliticsPageMenuLateral @derivedTypes {
        menuLateral: CmsPoliticsPageMenuLateralMenuLateral
    }
    
    type CmsPoliticsPageMenuLateralMenuLateral {
        title: String
    }
`