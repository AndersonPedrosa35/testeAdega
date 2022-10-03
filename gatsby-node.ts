import type { GatsbyNode } from "gatsby";

import path from "path";
import { apiSchema } from "./src/server";
import { typeDefs } from './typeDefs'

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions: { setWebpackConfig },
  stage,
}) => {
  const isProfilingEnabled = process.env.GATSBY_STORE_PROFILING === "true";

  if (stage === "build-javascript") {
    if (isProfilingEnabled) {
      setWebpackConfig({
        optimization: {
          minimize: false,
          moduleIds: "named",
          chunkIds: "named",
          concatenateModules: false,
        },
      });
    } else {
      setWebpackConfig({
        optimization: {
          runtimeChunk: {
            name: `webpack-runtime`,
          },
          splitChunks: {
            name: false,
            cacheGroups: {
              styles: {
                name: `styles`,
                test: /\.(css|scss)$/,
                chunks: `initial`,
                enforce: true,
              },
            },
          },
        },
      });
    }
  }
};

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: `@vtex/graphql-utils/babel`,
    options: {},
  });
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async (gatsbyApi) => {
    const { actions } = gatsbyApi;

    const schema = await apiSchema;

    actions.addThirdPartySchema({ schema });

    const { createTypes } = actions

    createTypes(typeDefs)
  };

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage, createRedirect } = actions;

  const result: any = await graphql(`
    query {
      allCmsInstitutionalPage {
        nodes {
          id
          seo {
            siteMetadataWithSlug {
              slug
            }
          }
        }
      }

      allCmsPoliticsPage {
        nodes {
          id
          seo {
            siteMetadataWithSlug {
              slug
            }
          }
        }
      }

      allCmsLandingPageCustom {
        nodes {
          id
          seo {
            siteMetadataWithSlug {
              slug
            }
          }
        }
      }

      allCmsCollection {
        nodes {
          infoPage {
            siteMetadataWithSlug {
              seo {
                slug
              }
            }
          }
        }
      }

      allCmsHome {
        nodes {
          sections {
            data
            name
          }
        }
      }
    }
  `);

  result?.data?.allCmsInstitutionalPage?.nodes?.forEach(({ seo, id }: any) => {
    const { slug } = seo.siteMetadataWithSlug;

    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/pages/institutional/about-us.tsx`),
      context: {
        id,
        slug,
      },
    });
  });

  result?.data?.allCmsPoliticsPage?.nodes?.forEach(({ seo, id }: any) => {
    const { slug } = seo.siteMetadataWithSlug;

    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/pages/institutional/politics.tsx`),
      context: {
        id,
        slug,
      },
    });
  });

  result?.data?.allCmsLandingPageCustom?.nodes?.forEach(({ seo, id }: any) => {
    const { slug } = seo.siteMetadataWithSlug;

    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/pages/landing-page-custom.tsx`),
      context: {
        id,
        slug,
      },
    });
  });

  result?.data?.allCmsCollection?.nodes?.forEach(({ infoPage }: any) => {
    const { slug } = infoPage.siteMetadataWithSlug.seo;

    createPage({
      path: `${slug}`,
      component: path.resolve(`./src/pages/landing-page-collection.tsx`),
      context: {
        slug,
      },
    });
  });

  result?.data?.allCmsHome?.nodes?.forEach(async ({ sections }: any) => {
    let elements: any[] = []

    await sections.filter((section: any) => {
      if (section.data.carroselImages || section.data.banners) {
        return section
      }
    }).map((section: any) => {
    
      if(section.data.banners){
        const items = section.data.banners.filter((item: any) => {
          if(item.collectionId){
            return item
          }
        })

        elements.push(...items)
      }

      if(section.data.carroselImages){

        const items = section.data.carroselImages.filter((item: any) => {
          if(item.collectionId){
            return item
          }
        })

        elements.push(...items)
      }
    })

    elements.map((element) => {
      createPage({
        path: `${element.link}`,
        component: path.resolve(`./src/pages/landing-page-collection-fixed.tsx`),
        context: {
          slug: `${element.link}`,
          collectionId: `${element.collectionId}`
        },
      });
    })
  });  

  createRedirect({
    fromPath: '/sitemap.xml',
    toPath: 'https://adegamarchehlg.myvtex.com/sitemap.xml',
    statusCode: 200,
    proxyHeaders: {
      'x-forwarded-host': 'www.adegamarchehlg.com.br',
      via: "''",
    }
  })

  createRedirect({
    fromPath: '/sitemap/product-0.xml',
    toPath: 'https://adegamarchehlg.myvtex.com/sitemap/product-0.xml',
    statusCode: 200,
    proxyHeaders: {
      'x-forwarded-host': 'www.adegamarchehlg.com.br',
      via: "''",
    }
  })
};

