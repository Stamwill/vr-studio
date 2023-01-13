import * as React from 'react'
import { logo, socialMedias } from 'api/mock'
import Link from 'next/link'
import Image from 'next/image'
import classes from './Footer.module.css'
import SocialMedias from 'components/SocialMedias'

interface Navigation {
  label: string
  href: string
}

interface NavigationProps {
  menu: Navigation[]
}

const Footer = (props: NavigationProps) => {
  const { menu } = props
  return (
    <footer className={classes.root}>
      <div className={classes.footerNav}>
        <div className={classes.logoContainer}>
          <Link href={'/'}>
            <Image src={logo} alt="company logo" fill />
          </Link>
        </div>

        <div className={classes.navBar}>
          {menu.map((item: Navigation, i: number) => (
            <a className={classes.label} href={item.href} key={i}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className={classes.footerSubNav}>
        <div className={classes.socialMedias}>
          {socialMedias.map((item, i) => (
            <SocialMedias key={i} {...item} />
          ))}
        </div>

        <div className={classes.copyright}>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
