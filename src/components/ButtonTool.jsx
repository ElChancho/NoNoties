import './ButtonTool.css'

export function ButtonTool ({ children, onClick }) {
  return (
    <button className='button-toolbar' onClick={onClick}>{children}</button>
  )
}
