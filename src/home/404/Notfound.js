import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './notfound.scss'

export class Notfound extends Component {
    render() {
        return (
            <div className="Lost">
                <h1>Page 404</h1>
                <p>Ne tournons pas autour du pot, tu t'est perdu…
                Mais tu n'auras jamais retrouver aussi vite ton chemin, 
                qu'ici.</p>
                <button><Link to="/">revenir à la maison</Link></button>
            </div>
        )
    }
}

export default Notfound
