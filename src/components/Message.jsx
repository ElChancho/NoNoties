import { useEffect } from 'react'
import './Message.css'

export function Message ({ text, isError, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [text, duration])

  return (
    <div className='message' style={{ color: isError ? 'red' : 'green' }}>
      {text}
    </div>
  )
}
