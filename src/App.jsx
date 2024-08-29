import './App.css'
import { Header } from './components/Header.jsx'
import { ButtonTool } from './components/ButtonTool.jsx'
import { Card } from './components/Card.jsx'
import { useNote } from './hooks/useNote.js'

export function App () {
  const { notes, addNote } = useNote()
  // update note above
  return (
    <>
      <Header />
      <main>
        <div className='toolbar'>
          <ButtonTool onClick={addNote}>Add Note</ButtonTool>
          {/* <button className='button-toolbar' onClick={addNote}>Add Note</button> */}
        </div>

        {
          notes.map((note) => {
            return (
              <Card
                key={note.id}
                value={note}
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
