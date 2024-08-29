import './App.css'
import { Card } from './components/Card.jsx'
import { useState } from 'react'

export function App () {
  const [notes, setNotes] = useState([])

  function addNote () {
    const newNotes = [...notes]
    newNotes.push(Card)
    setNotes(newNotes)
  }

  return (
    <>
      <header>
        <h1>NoNoties</h1>
      </header>

      <main>
        <div className='toolbar'>
          <button onClick={addNote}>Add Note</button>
        </div>

        {
          notes.map((note, index) => {
            return (
              <Card
                key={index}
              >
                {note}
              </Card>
            )
          })
        }

      </main>
    </>

  )
}
