import * as React from 'react'
import classes from './App.module.css'

const App = () => {
  return (
    <div className={classes.root}>
      <header>
        <title>VR Studio</title>
        <span>logo</span>
        <h2>AppNav</h2>
      </header>

      <main>
        <h1>VR Studio</h1>
      </main>

      <footer>
        <p className={classes.test}>Footer</p>
      </footer>
    </div>
  )
}

export default App
