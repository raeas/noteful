import React from 'react'
import STORE from './dummy-store'
import {Link} from 'react-router-dom'

export default function SideBar () {
  return (
    // <h1>SideBar</h1>
    <div style={{width:'300px'}}>
      {
        STORE.folders.map(folder => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))
      }
    </div>
  )
} 