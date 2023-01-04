import * as React from 'react'
import classes from './Footer.module.css'

interface Navigation {
  label: string
  url: string
}

interface NavigationProps {
  menu: Navigation[]
}

const Footer = (props: NavigationProps) => {
  const { menu } = props
  return (
    <section className={classes.root}>
      <div className={classes.navBar}>
        {menu.map((item: Navigation, i: number) => (
          <a className={classes.label} href={item.url} key={i}>
            {item.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Footer
