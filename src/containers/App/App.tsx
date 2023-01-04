import * as React from 'react'
import { menuPrimary, contentBlock, heroData } from 'api/mock'
import AppNav from './partials/AppNav'
import Hero from 'blocks/Hero'
import ContentBlock from 'blocks/ContentBlock'
import Grid from 'containers/Grid'
import Footer from 'containers/Footer'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <AppNav menu={menuPrimary} />
        <Hero content={heroData} />
      </header>

      <main>
        <ContentBlock content={contentBlock} />
        <Grid />
      </main>

      <Footer menu={menuPrimary} />
    </div>
  )
}

export default App
