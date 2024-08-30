import './App.css'
import { Header } from './components/Header.jsx'
import { ButtonTool } from './components/ButtonTool.jsx'
import { Card } from './components/Card.jsx'
import { useNote } from './hooks/useNote.js'

export function App () {
  const { notes, addNote, deleteNote } = useNote()
  // update note above
  return (
    <>
      <Header />
      <main>
        <div className='toolbar'>
          <ButtonTool onClick={addNote}>Add Note</ButtonTool>
        </div>

        {
          notes.map((note) => {
            return (
              <Card
                key={note.id}
                id={note.id}
                value={note}
                deleteNote={deleteNote}
                // onChange={updateNote}
              />
            )
          })
        }

        {/* <Card key={100} note='prueba' onChange={(e) => updateNote({ index: 100, note: e.target.value })} /> */}
      </main>
    </>

  )
}
