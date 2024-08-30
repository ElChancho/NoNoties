import { ButtonTool } from './ButtonTool.jsx'
import './ToolBar.css'

export function ToolBar ({ addNote }) {
  return (
    <div className='toolbar'>
      <ButtonTool onClick={addNote}>Add Note</ButtonTool>
    </div>
  )
}
