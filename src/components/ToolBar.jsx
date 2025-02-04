import { useEffect, useState } from 'react'
import { ButtonTool } from './ButtonTool.jsx'
import './ToolBar.css'

export function ToolBar ({ addNote, sortNotesTag, tagMethods }) {
  const [actualTag, setTag] = useState({ id: undefined })

  useEffect(() => {
    sortNotesTag({ tag: actualTag })
  }, [actualTag])

  return (
    <div className='toolbar'>
      <ButtonTool onClick={() => addNote({ tag: actualTag })}>Add Note</ButtonTool>
      <select onChange={(e) => {
        const selectedTag = tagMethods.tags.find((tag) => tag.id === Number(e.target.value))
        if (!selectedTag) {
          setTag({ id: undefined })
        } else {
          setTag(selectedTag)
        }
      }}
      >
        <option value={undefined}>No sort tag</option>
        {
          tagMethods.tags.map(tag => (
            <option key={tag.id} value={tag.id}>{tag.name}</option>
          ))
        }
      </select>
    </div>
  )
}
