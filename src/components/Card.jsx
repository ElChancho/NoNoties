import './Card.css'

export function Card ({ children }) {
  return (
    <div className='card'>
      <div className='card-options'>
        <input type='text' />
      </div>
      <textarea>{children}</textarea>
    </div>
  )
}
