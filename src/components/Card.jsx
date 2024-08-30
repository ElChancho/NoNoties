import './Card.css'

export function Card ({ note, id, onChange, deleteNote }) {
  return (
    <div className='card'>
      <div className='card-options'>
        <button onClick={() => deleteNote(id)}>Delete</button>
      </div>
      <textarea value={note} onChange={onChange} />
    </div>
  )
}
