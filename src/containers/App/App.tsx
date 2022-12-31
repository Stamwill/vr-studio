import * as React from 'react'
import { menuPrimary, contentBlock } from 'api/mock'
import ContentBlock from 'blocks/ContentBlock'
import classes from './App.module.css'
import AppNav from './partials/AppNav'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <AppNav menu={menuPrimary} />
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
