import './App.css'
import { Header } from './components/Header.jsx'
import { ToolBar } from './components/ToolBar.jsx'
import { Card } from './components/Card.jsx'
import { useNote } from './hooks/useNote.js'

export function App () {
  const { notes, addNote, deleteNote, updateNote } = useNote()

  return (
    <>
      <Header />
      <main>
        <ToolBar addNote={addNote} />
        <div className='section-card'>
          {
            notes.map((note) => {
              return (
                <Card
                  key={note.id}
                  id={note.id}
                  content={note.content}
                  deleteNote={deleteNote}
                  updateNote={updateNote}
                />
              )
            })
          }
        </div>

      </main>
    </>

  )
}
