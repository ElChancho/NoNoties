import { useEffect, useState } from 'react'

export function useNote () {
  const [notes, setNotes] = useState(() => {
    const savedNotes = window.localStorage.getItem('notes')
    if (savedNotes) return JSON.parse(savedNotes)
    return []
  })

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const newNotes = [...notes]
    const newNote = { id: Date.now(), content: '' }
    newNotes.push(newNote)
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const auxNotes = [...notes]
    const deletedNotes = auxNotes.filter((note) => note.id !== id)
    setNotes(deletedNotes)
  }

  const updateNote = ({ id, content }) => {
    const auxNotes = [...notes]
    const updatedNoteId = auxNotes.findIndex((auxNote) => auxNote.id === id)

    if (updatedNoteId !== -1) {
      const newNote = { ...auxNotes[updatedNoteId], content }
      auxNotes[updatedNoteId] = newNote
      setNotes(auxNotes)
    }
  }

  return { notes, addNote, deleteNote, updateNote }
}
