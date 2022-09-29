import { join, resolve } from 'path'

import dotenv from 'dotenv'
import type { GatsbyConfig } from 'gatsby'

import config from './store.config'

dotenv.config({ path: 'vtex.env' })

const gatsbyConfig: GatsbyConfig = {
  jsxRuntime: 'automatic',
  siteMetadata: {
    title: 'Adega Marche',
    description: 'Adega Marche',
    titleTemplate: '%s | Adega Marche',
    author: 'Store Framework',
    siteUrl: config.storeUrl,
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage (filter: {componentChunkName: {ne: "component---src-pages-landing-page-collection-fixed-tsx"}}){
              nodes {
                path
              }
            }

            allCmsCollection{
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
            
          }
        `,
          resolveSiteUrl: () => config.storeUrl,
          resolvePages: ({
            allSitePage: { nodes: allPages },
            allCmsCollection: { nodes: allCmsCollection }
          }: any) => {
            let exclude = [
              '/[...slug]/',
              '/[slug]/p/',
              '/500.html',
              '/institutional/about-us/',
              '/institutional/politics/',
              '/500/',
              '/',
              '/landing-page-collection/',
              '/landing-page-collection-fixed/',
              '/landing-page-custom/',
              '/account/',
              '/wishlist/',
              '/login/',
              '/checkout/',
              '/s/'
            ]

            const collectionsPageExclude = allCmsCollection.map((page: any) => {
              return page.infoPage.siteMetadataWithSlug.seo.slug
            })    

            exclude.push(...collectionsPageExclude)
            
            return allPages.map((page: any) => {
              return { ...page }
            }).filter((page: any) => {
              return !exclude.includes(page.path)
            })
          },
          serialize: ({ path }: any) => {
            return {
              url: path,
            }
          },
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: true,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Fast Demo Store',
        short_name: 'GatsbyStore',
        start_url: '/',
        icon: 'src/images/icon.png',
        background_color: '#E31C58',
        theme_color: '#ffffff',
        display: 'standalone',
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.NODE_ENV || 'development',
        env: {
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
                disallow: ['/checkout/*'],
              },
            ],
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-next-seo',
      options: {
        defer: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#E31C58',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: resolve('./src'),
        '@generated': resolve('./@generated'),
      },
    },
    {
      resolve: 'gatsby-plugin-bundle-stats',
      options: {
        compare: true,
        baseline: true,
        html: true,
        json: true,
        outDir: `.`,
        stats: {
          context: join(__dirname, 'src'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle-analyser.html',
      },
    },
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
    },
    {
      resolve: 'gatsby-plugin-netlify',
    },
    {
      resolve: 'gatsby-plugin-postcss',
    },
    {
      resolve: '@vtex/gatsby-source-cms',
      options: {
        workspace: 'master',
        tenant: config.api.storeId,
      },
    },
  ],
}

export default gatsbyConfig
