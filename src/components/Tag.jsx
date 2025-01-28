import { useEffect, useState, useRef } from 'react'
import './Tag.css'

export function Tag ({ id, name, color, onSelectTag, isSelected, deleteTag }) {
  const [isHovered, setHovered] = useState(false)
  const [menuInfo, setMenuInfo] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    tagId: null
  })

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuInfo({
          isVisible: false,
          position: { x: 0, y: 0 },
          tagId: null
        })
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleIsHovered = () => {
    setHovered(true)
  }

  const handleIsNotHovered = () => {
    setHovered(false)
  }

  const handleContextMenu = (event, id) => {
    event.preventDefault()
    setMenuInfo({
      isVisible: true,
      position: { x: event.pageX, y: event.pageY },
      tagId: id
    })
  }

  const handleDelete = (event) => {
    deleteTag()
    onSelectTag()
  }

  return (
    <>
      <div
        className='tag'
        onMouseEnter={handleIsHovered}
        onMouseLeave={handleIsNotHovered}
        onClick={onSelectTag}
        onContextMenu={(event) => handleContextMenu(event, id)}
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

      </div>
      {menuInfo.isVisible && menuInfo.tagId === id &&
        (
          <div
            ref={menuRef}
            className='context-menu'
            style={{
              top: `${menuInfo.position.y}px`,
              left: `${menuInfo.position.x}px`,
              backgroundColor: 'white',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.15)',
              padding: '8px',
              borderRadius: '4px'
            }}
          >
            <button onClick={(event) => handleDelete(event)} style={{ cursor: 'pointer' }}>
              Delete Tag
            </button>
          </div>
        )}
    </>

  )
}
