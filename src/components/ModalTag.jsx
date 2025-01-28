import './ModalTag.css'
import iconClose from '../img/close.png'
import { useTag } from '../hooks/useTag'
import { Tag } from './Tag'
import { useState } from 'react'

export function ModalTag ({ modal, closeModal, currentTag, onSelectTag }) {
  const { tags, addTag, deleteTag } = useTag()
  const [color, setColor] = useState('#ffffff')
  const [name, setName] = useState('')

  if (!modal) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    addTag({ name, color })
  }

  const handleColor = (event) => {
    setColor(event.target.value)
  }

  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-card'>
        <img src={iconClose} alt='close' onClick={closeModal} />
        <h3>Your tags</h3>
        <section className='your-tags'>
          {
            tags.length === 0
              ? <p>No tags added</p>
              : tags.map((tag) => {
                const isSelected = currentTag && tag.id === currentTag.id
                return (
                  <Tag
                    key={tag.id}
                    id={tag.id}
                    name={tag.name}
                    color={tag.color}
                    onSelectTag={() => onSelectTag(tag)}
                    isSelected={isSelected}
                    deleteTag={() => { deleteTag(tag.id) }}
                  />
                )
              })
          }
        </section>

        <form onSubmit={handleSubmit}>
          <h3>Create new tag</h3>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' maxLength='20' placeholder='Cinema, series...' onChange={handleName} required />
          <p>Color</p>
          <input type='color' value={color} onChange={handleColor} />
          <button type='submit'>Add</button>
        </form>

      </div>
    </div>
  )
}
