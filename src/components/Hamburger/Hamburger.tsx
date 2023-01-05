import * as React from 'react'
import classnames from 'clsx'
import classes from './Hamburger.module.css'

interface HamburgerProps {
  toggleMenu: Function
}

const Hamburger = (props: HamburgerProps) => {
  const { toggleMenu } = props
  return (
    <div className={classes.root}>
      <div className={classes.hamburger} onClick={toggleMenu}>
        <div className={classes.barOne} />
        <div className={classes.barTwo} />
        <div className={classes.barThree} />
      </div>
    </div>
  )
}

export default Hamburger
