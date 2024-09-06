import { useState } from 'react'
import './Tag.css'

export function Tag ({ id, name, color }) {
  const [isHovered, setHovered] = useState(false)

  const handleIsHovered = () => {
    setHovered(true)
  }

  const handleIsNotHovered = () => {
    setHovered(false)
  }

  return (
    <div
      className='tag'
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsNotHovered}
      style={isHovered ? { backgroundColor: 'rgb(237, 237, 237)' } : { backgroundColor: '' }}
    >
      <span
        className='material-symbols-outlined'
        style={{
          fontVariationSettings: `'FILL' ${isHovered ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
          color: `${color}`,
          cursor: 'pointer',
          transition: '0.3s ease'
        }}
      > bookmark
      </span>
      <p
        key={id}
        style={{ transform: 'translateY(-10%)' }}
      >
        {name}
      </p>
    </div>

  )
}
