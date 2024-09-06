import './ModalTag.css'
import { useTag } from '../hooks/useTag'
import { Tag } from './Tag'
import { useState } from 'react'

export function ModalTag ({ modal, closeModal }) {
  const { tags, addTag } = useTag()
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
        <h3>Your tags</h3>
        <section className='your-tags'>
          {
            tags.length === 0
              ? <p>No tags added</p>
              : tags.map((tag) => {
                return (
                  <Tag
                    key={tag.id}
                    id={tag.id}
                    name={tag.name}
                    color={tag.color}
                  />
                )
              })
          }
        </section>

        <form onSubmit={handleSubmit}>
          <h3>Create new tag</h3>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' maxLength='20' placeholder='Cinema, series...' onChange={handleName} required />
          <p>Añadir color</p>
          <input type='color' value={color} onChange={handleColor} />
          <button type='submit'> Add</button>
          {/* <button type='submit' onClick={() => addTag({ name: 'prueba', color: 'red' })}>Add</button> */}
          <button onClick={closeModal}>Cancel</button>
        </form>

      </div>
    </div>
  )
}
