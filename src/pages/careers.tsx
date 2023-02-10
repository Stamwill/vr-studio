import * as React from 'react'
import { heroData, careerData } from 'api/mock'
import Hero from 'blocks/Hero'
import Career from 'components/Career'
import classes from 'styles/careers.module.css'

export default function Careers() {
  return (
    <main className={classes.main}>
      <Hero content={heroData} />
      <div className={classes.root}>
        <div>
          <p className={classes.label}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor accusantium dignissimos,
            modi natus perspiciatis quidem dolorum maxime nulla quas voluptatum provident dolore
            tempore nobis porro quibusdam suscipit quia est quisquam.
          </p>
          <h1 className={classes.header}>We are currently hiring</h1>
        </div>
        {careerData.map((item, idx) => (
          <Career {...item} key={idx} />
        ))}
      </div>
    </main>
  )
}
