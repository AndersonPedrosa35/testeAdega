// import { graphql, useStaticQuery } from "gatsby";
// import { FooterMenu, IFooterMenuLinks } from "./typings";

// function NavFooter() {
//   const data = useStaticQuery(
//     graphql`
//       query FooterMenu {
//         cmsFooter {
//           menuFooter {
//             menu {
//               columns {
//                 links {
//                   link
//                   title
//                   target
//                 }
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   const columns = data?.cmsFooter?.menuFooter?.menu?.columns;

//   if (!columns.length) {
//     return null;
//   }

//   return (
//     <nav className="footer__nav">
//       {columns?.map(({ links, title }: FooterMenu, idx: number) => {
//         return (
//           <div key={`${idx}-${title}`} className="footer__nav-column">
//             <h3>{title}</h3>
//             <ul>
//               {links.map((item: IFooterMenuLinks, id: number) => {
//                 return (
//                   <li key={`${id}-${item.title}`} >
//                     <a href={item.link} title={item.title} target={item.target ? "_blank" : "_self"}>
//                       {item.title}
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         );
//       })}
//     </nav>
//   );
// }

// export default NavFooter;
