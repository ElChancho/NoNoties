import './ModalTag.css'
import { useTag } from '../hooks/useTag'

export function ModalTag ({ modal, closeModal }) {
  const { tags, addTag } = useTag()
  if (!modal) return null

  return (
    <div className='modal-overlay'>
      <div className='modal-card'>
        <h3>Your tags</h3>
        <section className='your-tags'>
          {
            tags.length === 0
              ? <p>No tags added</p>
              : tags.map((tag) => {
                return (
                  <button
                    key={tag.id}
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.name}
                  </button>
                )
              })
          }
        </section>

        <form>
          <p>Añadir nombre</p>
          <p>Añadir color</p>
          <button onClick={() => addTag({ name: 'prueba', color: 'red' })}>Add</button>
          <button onClick={closeModal}>QUITAR</button>
        </form>

      </div>
    </div>
  )
}
