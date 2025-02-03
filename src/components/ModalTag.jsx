import './ModalTag.css'
import iconClose from '../img/close.png'
import { Tag } from './Tag'
import { Message } from './Message'
import { useState } from 'react'

export function ModalTag ({ modal, closeModal, currentTag, onSelectTag, updateAllNotesTagDeleted, tagMethods }) {
  const [color, setColor] = useState('#ffffff')
  const [name, setName] = useState('')
  const [showMessage, setShowMessage] = useState(false)

  if (!modal) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    tagMethods.addTag({ name, color })
    setShowMessage(true)
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
            tagMethods.tags.length === 0
              ? <p>No tags added</p>
              : tagMethods.tags.map((tag) => {
                const isSelected = currentTag && tag.id === currentTag.id
                return (
                  <Tag
                    key={tag.id}
                    id={tag.id}
                    name={tag.name}
                    color={tag.color}
                    onSelectTag={() => onSelectTag(tag)}
                    isSelected={isSelected}
                    deleteTag={() => {
                      tagMethods.deleteTag(tag.id)
                      updateAllNotesTagDeleted({ auxTag: tag })
                    }}
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

        {
          showMessage && (
            <Message text={tagMethods.infoMessage.message} isError={tagMethods.infoMessage.isError} onClose={() => setShowMessage(false)} />
          )
        }

      </div>
    </div>
  )
}
