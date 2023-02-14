import * as React from 'react'
import { introductionBlock, landingHero } from 'api/mock'
import Hero from 'blocks/Hero'
import Introduction from 'blocks/IntroductionBlock'
import Grid from 'containers/Grid'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <Hero content={landingHero} />
      </header>

      <div className={classes.main}>
        <Introduction content={introductionBlock} />
        <Grid />
      </div>
    </div>
  )
}

export default App
