import * as React from 'react'
import { creationGrid } from 'api/mock'
import GridItem from 'components/GridItem'
import classes from './Grid.module.css'

const Grid = () => {
  return (
    <div className={classes.root}>
      {creationGrid.map((item, i) => (
        <GridItem key={i} {...item} />
      ))}
    </div>
  )
}

export default Grid
