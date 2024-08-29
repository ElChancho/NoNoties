import './ButtonTool.css'

export function ButtonTool ({ children, onClick }) {
  // const { addNote } = useNote()

  return (
    <button className='button-toolbar' onClick={onClick}>{children}</button>
  )
}
