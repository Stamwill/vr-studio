import * as React from 'react'
import { heroData } from 'api/mock'
import Hero from 'blocks/Hero'
import classes from 'styles/Home.module.css'

export default function About() {
  return (
    <main className={classes.aboutMain}>
      <div className={classes.root}>
        <Hero content={heroData} />
      </div>
    </main>
  )
}
