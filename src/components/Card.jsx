import { useState } from 'react'
import IconMoreVert from '../img/more_vert.svg'
import './Card.css'

export function Card ({ content, id, updateNote, deleteNote }) {
  const [dropDown, setDropDown] = useState(false)

  const dropDownClick = () => {
    setDropDown(!dropDown)
  }

  const handleNoteChange = (event) => {
    const newNoteValue = event.target.value
    updateNote({ id, content: newNoteValue })
  }

  return (
    <div className='card'>
      <div className='card-options'>
        <p>star</p>
        <div className='more-vert'>
          <img src={IconMoreVert} alt='dropdown' onClick={dropDownClick} />
          {
            dropDown && (
              <div className='more-vert-options'>
                <button onClick={() => deleteNote(id)}>Delete</button>
              </div>
            )
          }
        </div>

      </div>
      <textarea value={content} onChange={handleNoteChange} />
    </div>
  )
}
