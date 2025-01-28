import { useEffect, useState } from 'react'

export function useTag () {
  const [tags, setTags] = useState(() => {
    const savedTags = window.localStorage.getItem('tags')
    if (savedTags) return JSON.parse(savedTags)
    return []
  })

  useEffect(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
    console.log('tags: ', tags)
  }, [tags])

  const addTag = ({ name, color }) => {
    const auxTags = [...tags]
    const tagExist = auxTags.find((tag) => tag.name === name && tag.color === color)
    if (tagExist === undefined) {
      const newTag = { id: Date.now(), name, color }
      auxTags.push(newTag)
      setTags(auxTags)
    }
  }

  const deleteTag = (id) => {
    const auxTags = [...tags].filter((tag) => tag.id !== id)
    setTags(auxTags)
  }

  return { tags, addTag, deleteTag }
}
