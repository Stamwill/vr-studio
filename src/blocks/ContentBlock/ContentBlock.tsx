import * as React from 'react'
import Image from 'next/image'
import classes from './ContentBlock.module.css'

interface Content {
  contentImg: {
    mobile: string
    desktop: string
  }
  title: string
  text: string
}

interface ContentProps {
  content: Content[]
}

const ContentBlock = (props: ContentProps) => {
  const { content } = props
  return (
    <section className={classes.root}>
      {content.map((item, idx) => (
        <div className={classes.container} key={idx}>
          <div className={classes.imgContainer}>
            <picture className={classes.imgContainer}>
              <source
                className={classes.img}
                media="(max-width: 768px)"
                srcSet={item.contentImg.mobile}
              />
              <source
                className={classes.img}
                media="(max-width: 1200px)"
                srcSet={item.contentImg.desktop}
              />
              <img className={classes.img} src={item.contentImg.desktop} alt="space" />
            </picture>
          </div>

          <div className={classes.textContainer}>
            <h2 className={classes.header}>{item.title}</h2>
            <p className={classes.text}>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ContentBlock
