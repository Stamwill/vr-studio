import * as React from 'react'
import Image from 'next/image'
import classes from './Event.module.css'

interface Content {
  title: string
  date: string
  label: string
  img: string
}

const Event = (props: Content) => {
  const { title, date, label, img } = props
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.titleDate}>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.date}>{date}</span>
          </div>
          <p className={classes.label}>{label}</p>
        </div>
        <div className={classes.imgContainer}>
          <Image src={img} alt="event" fill />
        </div>
      </div>
    </div>
  )
}

export default Event
