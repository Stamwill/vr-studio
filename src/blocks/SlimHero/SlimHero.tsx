import Image from 'next/image'
import * as React from 'react'
import classes from './SlimHero.module.css'

interface Content {
  heroBackground: {
    img: string
    alt: string
  }
  title: string
}

interface ContentProps {
  content: Content[]
}

const SlimHero = (props: ContentProps) => {
  const { content } = props
  return (
    <section className={classes.root}>
      {content.map((item, idx) => (
        <div className={classes.container} key={idx}>
          <div className={classes.imgContainer}>
            <Image
              src={item.heroBackground.img}
              alt={item.heroBackground.alt}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h1 className={classes.title}>{item.title}</h1>
        </div>
      ))}
    </section>
  )
}

export default SlimHero
