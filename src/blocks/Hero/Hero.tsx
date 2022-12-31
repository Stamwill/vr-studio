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
            <img className={classes.img} src={item.heroBackground.mobile} alt="test" />
            <h1 className={classes.header}>{item.title}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
