
import { useState } from 'react'
import Accordion, { AccordionItem } from 'src/components/ui/Accordion'
import Submenu from '../Submenu'
import { Link } from 'gatsby'

const ListLinksMobile = ({menu} : any) => {
    const [indicesExpanded, setIndicesExpanded] = useState<Set<number>>(
        new Set([])
      )
    
    const onChange = (index: number) => {
        if (indicesExpanded.has(index)) {
          indicesExpanded.delete(index)
          setIndicesExpanded(new Set(indicesExpanded))
        } else {
          setIndicesExpanded(new Set(indicesExpanded.add(index)))
        }
    } 

    const ListSubmenu = ({ submenu }: any) => {
      return(
        <li>
          {
            submenu ? (
              <Submenu
                submenuLinks={submenu}
              />
            ) : null
          }
        </li>
      )
    }

    if(!menu.length){
      return null
    }

    return(
      <Accordion expandedIndices={indicesExpanded} onChange={onChange}>
        {menu?.map(({ item }: any, idx :number) => {
          const submenu = item?.submenu;
          const isExpanded = indicesExpanded.has(idx)

          if(submenu.length){
            return (
              <AccordionItem
                key={item.title}
                isExpanded={isExpanded}
                buttonLabel={item.title}
              >
                <ul className="navItems__list">
                  <ListSubmenu submenu={submenu} />
                </ul>
              </AccordionItem>
            )
          }

          return <Link to={item.link ?? '/'} title={item.title}> {item.title} </Link>
        })}
      </Accordion>
    )
}

export default ListLinksMobile