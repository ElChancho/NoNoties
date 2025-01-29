import { ButtonTool } from './ButtonTool.jsx'
import './ToolBar.css'

export function ToolBar ({ addNote, sortNotesTag, tagMethods }) {
  return (
    <div className='toolbar'>
      <ButtonTool onClick={addNote}>Add Note</ButtonTool>
      <select onChange={(e) => sortNotesTag({ tag: { id: e.target.value } })}>
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
