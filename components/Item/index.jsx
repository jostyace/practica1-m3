import './Item.css'

export const Item = ({icono, titulo, id, clase}) => {
  return (
    <li className="Item" id={id}>
    <img src={icono} alt="HTML" className={clase}  />
    <p className="">{titulo}
    </p>
</li>
)
}
