import * as React from 'react'
import classnames from 'clsx'
import { logo } from 'api/mock'
import Hamburger from 'components/Hamburger'
import classes from './AppNav.module.css'

interface Navigation {
  label: string
  url: string
}

interface NavigationProps {
  menu: Navigation[]
  open: boolean
  toggleMenu: Function
}

const AppNav = (props: NavigationProps) => {
  const { menu, open, toggleMenu } = props
  return (
    <section className={classnames(classes.root, { [classes.menuIsOpen]: open })}>
      <img className={classes.logo} src={logo} alt="company logo" />
      <div className={classes.navBar}>
        {menu.map((item: Navigation, idx: number) => (
          <a className={classes.label} key={idx}>
            {item.label}
          </a>
        ))}
      </div>
      <Hamburger open={open} toggleMenu={toggleMenu} />
    </section>
  )
}

export default AppNav
