import * as React from 'react'
import classes from './Btn.module.css'

interface BtnProps {
  label: string
  link: string
}

const Btn = (props: BtnProps) => {
  const { label, link } = props
  return (
    <div className={classes.root}>
      <a className={classes.link} href={link}>
        <span className={classes.label}>{label}</span>
      </a>
    </div>
  )
}

export default Btn
