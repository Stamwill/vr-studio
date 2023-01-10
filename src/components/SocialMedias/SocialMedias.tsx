import * as React from 'react'
import Image from 'next/image'
import classes from './SocialMedias.module.css'

interface Item {
  url: string
  img: string
}

const SocialMedias = (props: Item) => {
  const { url, img } = props
  return (
    <div className={classes.root}>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          <Image src={img} alt={url} fill />
        </a>
      </div>
    </div>
  )
}

export default SocialMedias
