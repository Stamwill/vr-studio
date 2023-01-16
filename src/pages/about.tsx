import * as React from 'react'
import { aboutContent } from 'api/mock'
import ContentBlock from 'blocks/ContentBlock'
import classes from 'styles/about.module.css'

export default function About() {
  return (
    <main className={classes.aboutMain}>
      <div className={classes.root}>
        {aboutContent.map((content, i) => (
          <ContentBlock {...content} key={i} />
        ))}
      </div>
    </main>
  )
}
