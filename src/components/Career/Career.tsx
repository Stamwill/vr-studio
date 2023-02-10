import * as React from 'react'
import Image from 'next/image'
import classes from './Career.module.css'

interface Content {
  img: string
  title: string
  label: string
}

const Career = (props: Content) => {
  const { img, title, label } = props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <Image src={img} fill alt="job position image" style={{ objectFit: 'cover' }} />
        </div>

        <div className={classes.textContainer}>
          <h3 className={classes.title}>{title}</h3>
          <span className={classes.label}>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default Career
