import React from 'react'
import Link from './Link'

const Nav = ({ dispatch }) => {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/legende">De Legende</Link>
      <Link to="/evenementen">Evenementen</Link>
    </nav>
  )
}

export default Nav