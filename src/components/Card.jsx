import { useState } from 'react'
import IconMoreVert from '../img/more_vert.svg'
import './Card.css'

export function Card ({ id, content, star, updateNote, deleteNote }) {
  const [dropDown, setDropDown] = useState(false)

  const dropDownClick = () => {
    setDropDown(!dropDown)
  }

  const handleNoteChange = (event) => {
    const newNoteValue = event.target.value
    updateNote({ id, content: newNoteValue, star })
  }

  const handleStarChange = () => {
    const changeStar = !star
    updateNote({ id, content, star: changeStar })
    // sortFav({ id })
  }

  return (
    <div className='card'>
      <div className='card-options'>
        <p>a</p>

        <span
          className='material-symbols-outlined'
          onClick={handleStarChange}
          style={{
            fontVariationSettings: `'FILL' ${star ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
            color: star ? 'rgb(219, 219, 31)' : 'inherit',
            cursor: 'pointer',
            transition: '0.3s ease'
          }}
        >
          star
        </span>

        <div className='more-vert'>
          <img src={IconMoreVert} alt='dropdown' onClick={dropDownClick} />
          {
            dropDown && (
              <div className='more-vert-options'>
                <button onClick={() => deleteNote({ id })}>Delete</button>
              </div>
            )
          }
        </div>

      </div>
      <textarea value={content} onChange={handleNoteChange} />
    </div>
  )
}
