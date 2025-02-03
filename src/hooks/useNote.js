import { useEffect, useState } from 'react'

export function useNote () {
  const [notes, setNotes] = useState(() => {
    const savedNotes = window.localStorage.getItem('notes')
    if (savedNotes) return JSON.parse(savedNotes)
    return []
  })

  const [sortedNotes, setSortedNotes] = useState(notes)

  // useEffect(() => {
  //   setSortedNotes([...notes])
  // }, [notes])

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes))
    setSortedNotes([...notes])
    console.log('NOTAS: ', notes)
  }, [notes])

  const addNote = () => {
    const newNotes = [...notes]
    const newNote = { id: Date.now(), content: '', star: false, tag: { name: undefined, color: undefined } }
    newNotes.push(newNote)
    setNotes(newNotes)
  }

  const deleteNote = ({ id }) => {
    const auxNotes = [...notes]
    const deletedNotes = auxNotes.filter((note) => note.id !== id)
    setNotes(deletedNotes)
  }

  const updateNote = ({ id, auxContent = undefined, star = false, auxTag = undefined }) => {
    let auxNotes = [...notes]
    const updatedNoteId = auxNotes.findIndex((auxNote) => auxNote.id === id)

    if (updatedNoteId !== -1) {
      const auxStar = auxNotes[updatedNoteId].star
      let content = auxNotes[updatedNoteId].content
      if (auxContent !== undefined) content = auxContent
      let tag = auxNotes[updatedNoteId].tag
      if (auxTag !== undefined) tag = auxTag
      const newNote = { ...auxNotes[updatedNoteId], content, star, tag }
      auxNotes[updatedNoteId] = newNote

      if (auxStar !== star) {
        auxNotes = sortFav({ note: auxNotes[updatedNoteId], index: updatedNoteId })
      }
      setNotes(auxNotes)
    }
  }

  const updateAllNotesTagDeleted = ({ auxTag }) => {
    const auxNotes = [...notes]
    const updatedNotes = auxNotes.map((note) => {
      if (note.tag.id === auxTag.id) {
        note.tag = {}
      }
      return note
    })
    setNotes(updatedNotes)
  }

  const sortFav = ({ note, index }) => {
    const auxNotes = [...notes]
    auxNotes.splice(index, 1)
    const moveToIndex = auxNotes.findIndex((auxNote) => auxNote.star === false)
    auxNotes.splice(moveToIndex, 0, note)

    // let lastIndex = auxNotes.lastIndexOf((auxNote) => auxNote.star === true)

    // while (index !== lastIndex) {
    //   setTimeout(() => {
    //     console.log("Han pasado 3 segundos");
    //   }, 3000)
    //   // const auxNote = auxNotes[lastIndex]
    //   // moveToIndex = auxNotes.findIndex((auxNote) => auxNote.star === false)
    //   // auxNotes.splice(moveToIndex, 0, auxNote)
    //   // lastIndex = auxNotes.lastIndexOf((auxNote) => auxNote.star === true)
    // }
    return auxNotes
  }

  const sortNotesTag = ({ tag }) => {
    if (isNaN(Number(tag.id))) setSortedNotes(notes)
    else {
      setSortedNotes(notes.filter((note) => note.tag.id === Number(tag.id)))
    }
  }

  return { notes, addNote, deleteNote, updateNote, updateAllNotesTagDeleted, sortedNotes, sortNotesTag }
}
