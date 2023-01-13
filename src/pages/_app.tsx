import * as React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { menu } from 'api/mock'
import { GlobalProvider } from 'api/GlobalContext'
import AppNav from 'containers/App/partials/AppNav'
import AppDrawer from 'containers/App/partials/AppDrawer'
import Footer from 'containers/Footer'
import '../styles/globals.css'

interface GlobalProps {
  Component: any
  ctx: []
}

export default function App({ Component, pageProps }: AppProps) {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  return (
    <GlobalProvider>
      <Head>
        <title>VR Studio</title>
      </Head>
      <header>
        <AppNav menu={menu} open={menuIsOpen} toggleMenu={toggleMenu} />
        <AppDrawer menu={menu} open={menuIsOpen} toggleMenu={toggleMenu} />
      </header>

      <Component {...pageProps} />
      <Footer menu={menu} />
    </GlobalProvider>
  )
}

App.getInitialProps = async (props: GlobalProps) => {
  const { Component, ctx } = props

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
  }
}
