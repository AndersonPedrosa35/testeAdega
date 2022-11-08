module.exports = {
    // Theming
    theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'adegamarche',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: false,
  },

  // Default channel
  session: {
    currency: {
      code: 'BRL',
      symbol: '$',
    },
    locale: 'pt-BR',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'BRA',
    postalCode: null,
    person: null,
  },


  // Production URLs
  storeUrl: 'https://www.adegamarche.com.br',
  secureSubdomain: 'https://secure.adegamarche.com.br',
  checkoutUrl: 'https://secure.adegamarche.com.br/checkout',
  loginUrl: 'https://secure.adegamarche.com.br/api/io/login',
  accountUrl: 'https://secure.adegamarche.com.br/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:8000',
    pages: {
      home: '/?softlaunch=true',
      pdp: '/produto-teste-b8one-1/p/?softlaunch=true',
      collection: '/brand-name/?softlaunch=true',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/produto-teste-b8one-1/p',
      collection: '/brand-name',
      collection_filtered: '/brand-name',
      search: '/s?q=teste',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-57237JB',
  },
}
