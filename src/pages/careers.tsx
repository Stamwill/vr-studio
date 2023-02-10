import * as React from 'react'
import { careerData } from 'api/mock'
import Career from 'components/Career'
import classes from 'styles/careers.module.css'

export default function Careers() {
  return (
    <main className={classes.main}>
      <div className={classes.root}>
        {careerData.map((item, idx) => (
          <Career {...item} key={idx} />
        ))}
      </div>
    </main>
  )
}
