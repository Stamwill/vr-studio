import * as React from 'react'
import { creationGrid } from 'api/mock'
import GridItem from 'components/GridItem'
import classes from './Grid.module.css'
import Btn from 'components/Btn'

const Grid = () => {
  return (
    <section className={classes.root}>
      <h2 className={classes.header}>Our Creations</h2>
      <div className={classes.grid}>
        {creationGrid.map((item, i) => (
          <GridItem key={i} {...item} />
        ))}
      </div>
      <Btn label="see all" link="#" />
    </section>
  )
}

export default Grid
