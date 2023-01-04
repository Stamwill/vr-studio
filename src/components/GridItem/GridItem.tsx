import * as React from 'react'
import classes from './GridItem.module.css'

interface Item {
  contentImg: {
    mobile: string
    desktop: string
  }
  label: string
  url: string
}

const GridItem = (props: Item) => {
  const { contentImg, label } = props
  return (
    <div className={classes.root}>
      <h3 className={classes.label}>{label}</h3>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={contentImg.mobile} alt="test" />
      </div>
    </div>
  )
}

export default GridItem
