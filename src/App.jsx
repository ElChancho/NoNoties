import './App.css'
import { Header } from './components/Header.jsx'
import { ToolBar } from './components/ToolBar.jsx'
import { Card } from './components/Card.jsx'
import { useNote } from './hooks/useNote.js'
import { useTag } from './hooks/useTag.js'

export function App () {
  const { addNote, deleteNote, updateNote, updateAllNotesTagDeleted, sortedNotes, sortNotesTag } = useNote()
  const tagMethods = useTag()

  return (
    <>
      <Header />
      <main>
        <ToolBar addNote={addNote} sortNotesTag={sortNotesTag} tagMethods={tagMethods} />
        <div className='section-card'>
          {
            sortedNotes.map((note) => {
              return (
                <Card
                  key={note.id}
                  id={note.id}
                  content={note.content}
                  star={note.star}
                  tag={note.tag}
                  deleteNote={deleteNote}
                  updateNote={updateNote}
                  updateAllNotesTagDeleted={updateAllNotesTagDeleted}
                  tagMethods={tagMethods}
                />
              )
            })
          }
        </div>

      </main>
    </>

  )
}
