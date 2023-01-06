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
      <picture className={classes.imgContainer}>
        <source className={classes.img} media="(max-width: 1000px)" srcSet={contentImg.mobile} />
        <source className={classes.img} media="(max-width: 1200px)" srcSet={contentImg.desktop} />
        <img className={classes.img} src={contentImg.desktop} alt="placeholder" />
      </picture>
    </div>
  )
}

export default GridItem
