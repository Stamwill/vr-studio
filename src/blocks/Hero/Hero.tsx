import * as React from 'react'
import classes from './Hero.module.css'

interface Content {
  heroBackground: {
    mobile: string
    desktop: string
  }
  title: string
}

interface ContentProps {
  content: Content[]
}

const Hero = (props: ContentProps) => {
  const { content } = props
  return (
    <section className={classes.root}>
      <div>
        {content.map((item, idx) => (
          <div key={idx}>
            <picture className={classes.imgContainer}>
              <source
                className={classes.img}
                media="(max-width: 1000px)"
                srcSet={item.heroBackground.mobile}
              />
              <source
                className={classes.img}
                media="(max-width: 1200px)"
                srcSet={item.heroBackground.desktop}
              />
              <img className={classes.img} src={item.heroBackground.desktop} alt="placeholder" />
            </picture>

            <h1 className={classes.header}>{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
