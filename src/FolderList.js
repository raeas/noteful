import React from 'react'
import {Link} from 'react-router-dom'
import STORE from './dummy-store'

export default function FolderList (props) {
  console.log(props)
  let notes
  if (props.match.path === '/') {
    notes = STORE.notes
  } else {
    const {folderId} = props.match.params
    notes = STORE.notes.filter(note => note.folderId === folderId)
  }
  console.log({notes})
  return (
    // <h1>SideBar</h1>
    <div>
      {
        notes.map(note => (
          <li key={note.id} style={{listStyle:'none'}}>
            <p><Link to={`/note/${note.id}`}>{note.name}</Link></p>
            <p>{note.modified}</p>
            <hr />
          </li>
        ))
      }
    </div>
  )
} 