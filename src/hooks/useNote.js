import { useState } from 'react'
import { Card } from '../components/Card'

export function useNote () {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNotes = [...notes]
    const newNote = { id: Date.now() }
    newNotes.push(newNote)
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const auxNotes = [...notes]
    const deletedNotes = auxNotes.filter((note) => note !== id)
    console.log(deletedNotes)
    setNotes(deletedNotes)
  }

  // const updateNote = ({ index, note }) => {
  //   const updatedNotes = [...notes]
  //   updatedNotes[index] = note
  //   setNotes(updatedNotes)
  // }

  return { notes, addNote, deleteNote }
}
