import * as React from 'react'
import classes from './IntroductionBlock.module.css'

interface Content {
  contentImg: {
    mobile: string
    desktop: string
    alt: string
  }
  title: string
  text: string
}

interface ContentProps {
  content: Content[]
}

const IntroductionBlock = (props: ContentProps) => {
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
                media="(max-width: 1500px)"
                srcSet={item.contentImg.desktop}
              />
              <img
                className={classes.img}
                src={item.contentImg.desktop}
                alt={item.contentImg.alt}
              />
            </picture>
            <div className={classes.textContainer}>
              <h2 className={classes.header}>{item.title}</h2>
              <p className={classes.text}>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default IntroductionBlock
