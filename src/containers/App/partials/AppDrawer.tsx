import * as React from 'react'
import classnames from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { logo, socialMedias } from 'api/mock'
import Hamburger from 'components/Hamburger'
import SocialMedias from 'components/SocialMedias'
import classes from './AppDrawer.module.css'

interface Navigation {
  label: string
  href: string
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
        <div className={classes.logoContainer}>
          <Link href={'/'} onClick={toggleMenu}>
            <Image src={logo} alt="company logo" fill />
          </Link>
        </div>

        <Hamburger toggleMenu={toggleMenu} />
      </div>

      <div className={classes.navBar}>
        {menu.map((item: Navigation, idx: number) => (
          <Link className={classes.label} key={idx} href={item.href} onClick={toggleMenu}>
            {item.label}
          </Link>
        ))}
        <div className={classes.socialMedias}>
          {socialMedias.map((item, i) => (
            <SocialMedias key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppDrawer
