import * as React from 'react'
import { positionsHero, careerData } from 'api/mock'
import SlimHero from 'blocks/SlimHero'
import Career from 'components/Career'
import classes from 'styles/careers.module.css'

export default function Careers() {
  return (
    <main className={classes.main}>
      <SlimHero content={positionsHero} />
      <div className={classes.container}>
        <div>
          <p className={classes.label}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor accusantium dignissimos,
            modi natus perspiciatis quidem dolorum maxime nulla quas voluptatum provident dolore
            tempore nobis porro quibusdam suscipit quia est quisquam.
          </p>
          <h1 className={classes.header}>We are currently hiring</h1>
        </div>

        <div className={classes.careerContainer}>
          {careerData.map((item, idx) => (
            <Career {...item} key={idx} />
          ))}
        </div>
      </div>
    </main>
  )
}
