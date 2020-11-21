import React from 'react'
import {Link} from 'react-router-dom'
import STORE from './dummy-store'

export default function Note (props) {
  const noteId = props.match.params.noteId
  const note = STORE.notes.find(note => note.id === noteId)
  return (
    <div>
      <p>{note.name}</p>
      <p>{note.modified}</p>
      <p>{note.content}</p>
    </div>
  )
} 