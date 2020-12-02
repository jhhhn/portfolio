import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as AboutIcon } from '../assets/icons/about.svg'
import { ReactComponent as FolderIcon } from '../assets/icons/folder.svg'
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg'
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'

const Nav = () => {
  const listLink = [
    {
      name: 'home',
      icon: <HomeIcon />,
      linkTo: '/',
    },
    {
      name: 'about',
      icon: <AboutIcon />,
      linkTo: '/about',
    },
    {
      name: 'portfolio',
      icon: <FolderIcon />,
      linkTo: '/portfolio',
    },

    {
      name: 'contact',
      icon: <MailIcon />,
      linkTo: '/contact',
    },
  ]
  return (
    <nav className='nav'>
      <div className='nav__brand'>
        <h1 className='heading-primary'>JHN</h1>
      </div>
      <div className='nav__list'>
        <ul>
          {listLink.map((i) => (
            <li key={i.name}>
              <NavLink exact to={i.linkTo}>
                {i.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='nav__social'>
        <Link to={'github.com/jhhhn'}>
          <GithubIcon />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
