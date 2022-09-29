import { IRenderComponents } from "./typings";
import FullBanner from "src/components/sections/FullBanner";
import Tipbar from "src/components/sections/Tipbar";
import ProductShelf from "src/components/sections/ProductShelf";
import Title from "src/components/sections/Title";
import BoxBanners from "src/components/sections/BoxBanners";
import ListCardsBlog from "src/components/sections/ListCardsBlog";
import ListBanners from "src/components/sections/ListBanners";

const RenderComponents = ({ data: sections }: IRenderComponents) => {

  if (!sections) {
    return null
  }

  return <>
    {
      sections?.map(({ name, data }: any, idx) => {
        switch (name) {
          case "Banner FullWidth":
            return (
              <section className="home__section home__section-fullbanner fullbanner" key={`${idx}-${name}`}>
                <div className="container">
                  <FullBanner banners={data.banners} />
                </div>
              </section>
            );
          case "Tipbar":
            return (
              <section className="home__section home__section-tipbar tipbar" key={`${idx}-${name}`}>
                <div className="container">
                  <Tipbar tipbar={data?.tipbar} />
                </div>
              </section>
            );
          case "Prateleira":
            return (
              <section className="home__section home__section-shelf shelf" key={`${idx}-${name}`} id={`home__section-shelf-${idx}`}>
                <div className="container">
                  <ProductShelf data={data} id={`home__section-shelf-${idx}`}/>
                </div>
              </section>
            );
          case "Seção Produtores":
            return (
              <section className="home__section home__section-box-banners" key={`${idx}-${name}`}>
                <div className="container">
                  <section className="home__section-brands">
                    <Title text={data?.title} />
                    <FullBanner banners={data?.banners} />
                    <BoxBanners data={data?.carroselImages} />
                    <ProductShelf data={{ searchParams: data?.searchParams }} id={`home__section-shelf-${idx}`}/>
                  </section>
                </div>
              </section>
            );
          case "Seção Países":
            return (
              <section className="home__section home__section-box-banners" key={`${idx}-${name}`}>
                <div className="container">
                  <section className="home__section-countries">
                    <Title text={data?.title} />
                    <FullBanner banners={data?.banners} />
                    <BoxBanners data={data?.carroselImages} />
                  </section>
                </div>
              </section>
            );
          case "Lista de Banners":
            return (
              <section className="home__section home__section-shelf shelf one" key={`${idx}-${name}`}>
                <div className="container">
                  <ListBanners data={data} />
                </div>
              </section>
            );
          case "Blog":
            return (
              <section className="home__section home__section-blog blog" key={`${idx}-${name}`}>
                <div className="container">
                  <ListCardsBlog title={data?.title} cards={data?.cards} />
                </div>
              </section>
            );
          default:
            return null
        }
      })
    }
  </> 

};

export default RenderComponents;