import { useState } from 'react'
import IconMoreVert from '../img/more_vert.svg'
import './Card.css'

export function Card ({ note, id, onChange, deleteNote }) {
  const [dropDown, setDropDown] = useState(false)

  const dropDownClick = () => {
    setDropDown(!dropDown)
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
      <textarea value={note} onChange={onChange} />
    </div>
  )
}
