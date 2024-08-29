import { useNote } from '../hooks/useNote'
import './Card.css'

export function Card ({ note, onChange }) {
  const { deleteNote } = useNote()

  return (
    <div className='card'>
      <div className='card-options'>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
      <textarea value={note} onChange={onChange} />
    </div>
  )
}
