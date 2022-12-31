import * as React from 'react'
import { menuPrimary, contentBlock, heroData } from 'api/mock'
import ContentBlock from 'blocks/ContentBlock'
import classes from './App.module.css'
import AppNav from './partials/AppNav'
import Hero from 'blocks/Hero'

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
      </main>

      <footer>
        <p className={classes.test}>Footer</p>
      </footer>
    </div>
  )
}

export default App
