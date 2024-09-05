import { useEffect, useState } from 'react'

export function useTag () {
  const [tags, setTags] = useState(() => {
    const savedTags = window.localStorage.getItem('tags')
    if (savedTags) return JSON.parse(savedTags)
    return []
  })

  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])

  const addTag = ({ name, color }) => {
    const auxTags = [...tags]
    const newTag = { id: Date.now(), name, color }
    auxTags.push(newTag)
    setTags(auxTags)
  }

  return { tags, addTag }
}
