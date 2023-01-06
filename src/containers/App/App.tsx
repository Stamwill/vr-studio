import * as React from 'react'
import { menuPrimary, contentBlock, heroData } from 'api/mock'
import AppNav from './partials/AppNav'
import AppDrawer from './partials/AppDrawer'
import Hero from 'blocks/Hero'
import ContentBlock from 'blocks/ContentBlock'
import Grid from 'containers/Grid'
import Footer from 'containers/Footer'
import classes from './App.module.css'

const App = () => {
  const [menuIsOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
    console.log(menuIsOpen)
  }

  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <AppNav menu={menuPrimary} open={menuIsOpen} toggleMenu={toggleMenu} />
        <AppDrawer menu={menuPrimary} toggleMenu={toggleMenu} open={menuIsOpen} />
        <Hero content={heroData} />
      </header>

      <main className={classes.main}>
        <ContentBlock content={contentBlock} />
        <Grid />
      </main>

      <Footer menu={menuPrimary} />
    </div>
  )
}

export default App
