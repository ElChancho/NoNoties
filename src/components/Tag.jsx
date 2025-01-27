import { useEffect, useState } from 'react'
import './Tag.css'

export function Tag ({ id, name, color, onClick, isSelected, deleteTag }) {
  const [isHovered, setHovered] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false)

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleIsHovered = () => {
    setHovered(true)
  }

  const handleIsNotHovered = () => {
    setHovered(false)
  }

  const handleContextMenu = (event) => {
    event.preventDefault()
    setShowMenu(true)
  }

  const handleDelete = () => {
    setShowMenu(false)
    deleteTag()
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <div
      className='tag'
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsNotHovered}
      onClick={onClick}
      onContextMenu={handleContextMenu}
      style={{
        backgroundColor: isSelected
          ? 'rgba(0, 0, 0, 0.1)'
          : isHovered
            ? 'rgb(237, 237, 237)'
            : '',
        border: isSelected ? `2px solid ${color}` : '1px solid rgba(0, 0, 0, 0.6)'
      }}
    >
      <span
        className='material-symbols-outlined'
        style={{
          fontVariationSettings: `'FILL' ${isHovered || isSelected ? 1 : 0}, 'wght' 300, 'GRAD' 0, 'opsz' 24`,
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

      {showMenu &&
        (
          <div
            className='context-menu'
            style={{
              top: '40px',
              backgroundColor: 'white',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
              padding: '8px',
              borderRadius: '4px',
              zIndex: 1000
            }}
            onMouseLeave={handleCloseMenu}
          >
            <button onClick={handleDelete} style={{ cursor: 'pointer' }}>
              Delete Tag
            </button>
          </div>
        )}

    </div>

  )
}
