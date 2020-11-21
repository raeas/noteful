import React from 'react'
import {Link} from 'react-router-dom'

export default function Header () {
  return (
    // <h1>SideBar</h1>
    <div>
      <Link to='/'>
        <h1>Noteful</h1>
      </Link>
    </div>
  )
} 