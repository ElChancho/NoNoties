import { useState } from 'react'
import './Tag.css'

export function Tag ({ id, name, color, onClick, isSelected }) {
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
      onClick={onClick}
      style={{
        backgroundColor: isSelected
          ? 'rgba(0, 0, 0, 0.1)' // Fondo más oscuro si está seleccionado
          : isHovered
            ? 'rgb(237, 237, 237)' // Fondo al pasar el mouse
            : '',
        border: isSelected ? `2px solid ${color}` : 'none' // Borde para destacar el tag seleccionado
      }}
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
