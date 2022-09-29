import './src/styles/fonts.css'
import './src/styles/global/variables.scss'
import './src/styles/global/tokens.scss'
import './src/styles/global/resets.scss'
import './src/styles/global/typography.scss'
import './src/styles/global/layout.scss'

import UIProvider from 'src/sdk/ui/Provider'
import Layout from 'src/Layout'
import AnalyticsHandler from 'src/sdk/analytics'
import ErrorBoundary from 'src/sdk/error/ErrorBoundary'
import TestProvider from 'src/sdk/tests'
import type { GatsbyBrowser } from 'gatsby'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <ErrorBoundary>
    <AnalyticsHandler />
    <TestProvider>
      <UIProvider>{element}</UIProvider>
    </TestProvider>
  </ErrorBoundary>
)

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}

