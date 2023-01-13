import * as React from 'react'
import { contentBlock, heroData } from 'api/mock'
import Hero from 'blocks/Hero'
import Introduction from 'blocks/IntroductionBlock'
import Grid from 'containers/Grid'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <Hero content={heroData} />
      </header>

      <main className={classes.main}>
        <Introduction content={contentBlock} />
        <Grid />
      </main>
    </div>
  )
}

export default App
