import { typeDefsContato } from './contato'
import { typeDefsInfosRodape } from './infosRodape'
import { typeDefsInfosMenu} from './menu'
import { typeDefsPagamentosDisponiveis } from './pagamentosDisponiveis'
import { typeDefsSelos } from './selos'

export const typeDefsFooter = `
    ${typeDefsContato}
    ${typeDefsInfosRodape}
    ${typeDefsInfosMenu}
    ${typeDefsPagamentosDisponiveis}
    ${typeDefsSelos}
`