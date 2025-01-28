import { useState, useEffect, useRef } from 'react'
import IconMoreVert from '../img/more_vert.svg'
import './Card.css'
import { useModal } from '../hooks/useModal'
import { ModalTag } from './ModalTag'

export function Card ({ id, content, star, tag, updateNote, deleteNote }) {
  const [dropDown, setDropDown] = useState(false)
  const { modal, openModal, closeModal } = useModal()
  const dropDownRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropDown(false)
    }
  }

  const dropDownClick = () => {
    setDropDown(!dropDown)
  }

  const handleNoteChange = (event) => {
    const newNoteValue = event.target.value
    updateNote({ id, auxContent: newNoteValue, star })
  }

  const handleStarChange = () => {
    const changeStar = !star
    updateNote({ id, content, star: changeStar })
  }

  const handleTagChange = (selectedTag) => {
    if (selectedTag.id !== tag.id) {
      updateNote({ id, auxTag: selectedTag, star })
    } else if (selectedTag.id === tag.id) {
      updateNote({ id, auxTag: {}, star })
    }
  }

  return (
    <div className='card' style={tag.color && { borderColor: tag.color }}>
      {tag.name && <p className='tag-header' style={{ backgroundColor: tag.color }}>{tag.name}</p>}
      <div className='card-options'>

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

        <div className='more-vert' ref={dropDownRef}>
          <img src={IconMoreVert} alt='dropdown' onClick={dropDownClick} />
          {
            dropDown && (
              <div className='more-vert-options'>
                <button onClick={openModal}>Tag</button>
                <ModalTag
                  modal={modal}
                  closeModal={closeModal}
                  currentTag={tag}
                  onSelectTag={handleTagChange}
                />
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
