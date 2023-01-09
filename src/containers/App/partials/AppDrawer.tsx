import * as React from 'react'
import classnames from 'clsx'
import { logo } from 'api/mock'
import Image from 'next/image'
import Hamburger from 'components/Hamburger'
import classes from './AppDrawer.module.css'

interface Navigation {
  label: string
  url: string
}

interface AppDrawerProps {
  menu: Navigation[]
  open: boolean
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void
}

const AppDrawer = (props: AppDrawerProps) => {
  const { menu, open, toggleMenu } = props

  React.useEffect(() => {
    const toggleScroll = (state: string) => {
      if (typeof window !== undefined) {
        const body = document.body
        body.style.overflow = state
      }
    }

    if (open) {
      toggleScroll('hidden')
    } else {
      toggleScroll('visible')
    }
  })

  return (
    <div className={classnames(classes.root, { [classes.menuIsOpen]: open })}>
      <div className={classes.topContainer}>
        <Image src={logo} alt="company logo" width="100" height="100" />

        {/* <img src={logo} alt="company logo" /> */}
        <Hamburger toggleMenu={toggleMenu} />
      </div>

      <div className={classes.navBar}>
        {menu.map((item: Navigation, idx: number) => (
          <a className={classes.label} key={idx}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default AppDrawer
