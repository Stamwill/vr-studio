import * as React from 'react'
import classes from './SocialMedias.module.css'

interface Item {
  url: string
  img: string
}

const SocialMedias = (props: Item) => {
  const { url, img } = props
  return (
    <div className={classes.root}>
      <a href={url}>
        <img src={img} alt="item text" />
      </a>
    </div>
  )
}

export default SocialMedias
