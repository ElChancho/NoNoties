import { useState } from 'react'

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
    const deletedNotes = auxNotes.filter((note) => note.id !== id)
    setNotes(deletedNotes)
  }

  // const updateNote = ({ index, note }) => {
  //   const updatedNotes = [...notes]
  //   updatedNotes[index] = note
  //   setNotes(updatedNotes)
  // }

  return { notes, addNote, deleteNote }
}
