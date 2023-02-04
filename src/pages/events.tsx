import * as React from 'react'
import { eventData } from 'api/mock'
import Event from 'components/Event'
import classes from 'styles/events.module.css'

export default function Events() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <h2 className={classes.header}>Upcoming Events</h2>
        <div className={classes.eventContainer}>
          {eventData.map((item, i) => (
            <Event {...item} key={i} />
          ))}
        </div>
      </div>
    </main>
  )
}
