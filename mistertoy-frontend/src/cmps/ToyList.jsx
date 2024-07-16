import { ToyPreview } from "./ToyPreview.jsx"
import PropTypes from 'prop-types'

export function ToyList({ toys, onRemoveToy, onEditToy, addToToyt }) {
    console.log('Rendering List')
    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />

                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        <button onClick={() => onEditToy(toy)}>Edit</button>
                    </div>

                    <button className="buy" onClick={() => addToCart(toy)}>
                        Add to Cart
                    </button>
                </li>)}
        </ul>
    )
}

ToyList.propTypes = {
    toys: PropTypes.arrayOf(PropTypes.object).isRequired,
    onRemoveToy: PropTypes.func,
}

// ToyList.propTypes = {
//     toys(props, propName, cmpName) {
//         if(!Array.isArray(props[propName])) {
//             throw new Error('Bad prop type for toys')
//         }
//     }
// }