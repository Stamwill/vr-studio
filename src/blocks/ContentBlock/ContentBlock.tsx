import * as React from 'react'
import Image from 'next/image'
import classes from './ContentBlock.module.css'

interface ContentProps {
  contentImg: string
  header: string
  text: string
}

const ContentBlock = (props: ContentProps) => {
  const { contentImg, header, text } = props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h2 className={classes.header}>{header}</h2>

          <p className={classes.content}>{text}</p>
        </div>

        <div className={classes.imgContainer}>
          <Image src={contentImg} alt={''} fill />
        </div>
      </div>
    </div>
  )
}

export default ContentBlock
