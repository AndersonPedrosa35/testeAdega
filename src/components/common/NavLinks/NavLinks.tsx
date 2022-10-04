// import { useStaticQuery, graphql } from "gatsby";
// import IsMobile from "src/helpers/isMobile";
// import './nav-links.scss'
// import ListLinksMobile from "./ListLinksMobile";
// import ListLinks from "./ListLinks";

// const Navlinks = () => {

//   const {
//     cmsHeader: {
//       menu: {
//         menuItems: { menu },
//       },
//     },
//   } = useStaticQuery(
//     graphql`
//       query MenuHeader {
//         cmsHeader {
//           menu {
//             menuItems {
//               menu {
//                 item {
//                   submenu {
//                     links {
//                       title
//                       link
//                       linkHighlight
//                       target
//                     }
//                     title
//                   }
//                   submenuImage
//                   title
//                   link
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   if (!menu.length) {
//     return null;
//   }

//   return (
//     <>
//       <nav className="navItems">
//         <div className="container">
//           {IsMobile() ? (
//             <ListLinksMobile menu={menu} />
//           ) : (
//             <ListLinks menu={menu} />
//           )}
//         </div>
//       </nav>
//     </>
//   )
// };

// export default Navlinks;
