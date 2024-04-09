import { Item } from "../Item"
import html from '/html.svg'
import css from '/css.svg'
import js from '/js.svg'
import accessibility from '/accessibility.svg'
import './ItemSelector.css'

export const ItemsSelector = () => {
    return (
        <div>
            <ul className="ItemSelector">
                <Item
                    icono={html}
                    titulo="HTML"
                    id="html"
                    clase= "html"
                />
                <Item
                    icono={css}
                    titulo="CSS"
                    id="css"
                    clase="css"
                />
                <Item
                    icono={js}
                    titulo="JavaScript"
                    id="javascript"
                    clase="javascript"
                />
                <Item
                    icono={accessibility}
                    titulo="Accessibility"
                    id="accessibility"
                    clase="accessibility"
                />            </ul>
        </div>)
}
