import {SearchProvider} from '@snek-at/gatsby-theme-shopify'
import React from 'react'

import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import ScrollToTop from './components/ScrollTop'

import {BasketDrawerProvider} from './services/basket'
import {ContactModalProvider} from './services/contact'
import {SearchModalProvider} from './services/search'

import {LayoutMode} from './types/commonTypes'

export interface LayoutProps {
  location: {
    pathname: string
    search: string
  }
  mode?: LayoutMode
  children: React.ReactElement | React.ReactElement[]
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  location,
  mode = 'website'
}) => {
  return (
    <ScrollToTop pathname={location.pathname}>
      <ContactModalProvider location={location}>
        <BasketDrawerProvider>
          <SearchProvider>
            <SearchModalProvider>
              <Navigation mode={mode} pathname={location.pathname} />
            </SearchModalProvider>
          </SearchProvider>

          <>{children}</>
        </BasketDrawerProvider>

        {mode === 'website' && <Footer />}
      </ContactModalProvider>
    </ScrollToTop>
  )
}
