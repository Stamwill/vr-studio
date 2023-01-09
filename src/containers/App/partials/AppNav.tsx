import * as React from 'react'
import classnames from 'clsx'
import Image from 'next/image'
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
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}

const AppNav = (props: NavigationProps) => {
  const { menu, open, toggleMenu } = props
  return (
    <section className={classnames(classes.root, { [classes.menuIsOpen]: open })}>
      <div className={classes.logoContainer}>
        <Image src={logo} fill alt="company logo" />
      </div>
      <div className={classes.navBar}>
        {menu.map((item: Navigation, idx: number) => (
          <a className={classes.label} key={idx}>
            {item.label}
          </a>
        ))}
      </div>
      <Hamburger toggleMenu={toggleMenu} />
    </section>
  )
}

export default AppNav
