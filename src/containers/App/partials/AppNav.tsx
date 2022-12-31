import * as React from 'react'
import classes from './AppNav.module.css'

interface Navigation {
  label: string
  url: string
}

interface NavigationProps {
  menu: Navigation[]
}

const AppNav = (props: NavigationProps) => {
  const { menu } = props
  return (
    <section className={classes.root}>
      {menu.map((item: Navigation, idx: number) => (
        <a className={classes.label} href={item.url} key={idx}>
          {item.label}
        </a>
      ))}
    </section>
  )
}

export default AppNav
