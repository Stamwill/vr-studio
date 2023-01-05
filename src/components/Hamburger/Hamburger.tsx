import * as React from 'react'
import classnames from 'clsx'
import classes from './Hamburger.module.css'

interface HamburgerProps {
  open: boolean
  toggleMenu: Function
}

const Hamburger = (props: HamburgerProps) => {
  const { open, toggleMenu } = props
  return (
    <div className={classnames(classes.root, { [classes.open]: open })}>
      <div className={classes.hamburger} onClick={toggleMenu}>
        <div className={classes.barOne} />
        <div className={classes.barTwo} />
        <div className={classes.barThree} />
      </div>
    </div>
  )
}

export default Hamburger
