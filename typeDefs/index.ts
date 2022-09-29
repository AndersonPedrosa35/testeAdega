import { typeDefsCategoria } from "./Categoria" 
import { typeDefsCollection } from './Collection'
import { typeDefsFooter } from "./Footer"
import { typeDefsHeader } from './Header'
import { typeDefsInstitutionalPage } from './InstitutionalPage'
import { typeDefsInstitutionalPoliticas } from './InstitutionalPoliticas'
import { typeDefsLandingPageCustom } from './LandingPageCustomizada'

export const typeDefs = `
    ${typeDefsCategoria}
    ${typeDefsCollection}
    ${typeDefsFooter}
    ${typeDefsHeader}
    ${typeDefsInstitutionalPage}
    ${typeDefsInstitutionalPoliticas}
    ${typeDefsLandingPageCustom}
`