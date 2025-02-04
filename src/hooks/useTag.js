import { useEffect, useState } from 'react'

export function useTag () {
  const [infoMessage, setInfoMessage] = useState({ message: '', isError: false })
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
    const tagExist = auxTags.find((tag) => tag.name === name && tag.color === color)
    if (tagExist === undefined) {
      const newTag = { id: Date.now(), name, color }
      auxTags.push(newTag)
      setTags(auxTags)
      setInfoMessage({ message: 'Succesfully added!', isError: false })
    } else {
      setInfoMessage({ message: 'It already exists!', isError: true })
    }
  }

  const deleteTag = (id) => {
    const auxTags = [...tags].filter((tag) => tag.id !== id)
    setTags(auxTags)
    setInfoMessage({ message: 'Tag deleted!', isError: false })
  }

  return { tags, addTag, deleteTag, infoMessage }
}
