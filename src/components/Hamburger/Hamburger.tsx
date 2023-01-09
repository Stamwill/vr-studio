import * as React from 'react'
import classes from './Hamburger.module.css'

interface HamburgerProps {
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
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
