import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import "./style.css";

export default class Home extends Component {
    render() {
        return (
            <div id="jumbotronHome" className="jumbotron mt-4">
                    <h1>RPG - Acervo de Personagens</h1>
                    <p>
                        Acervo de personagens de diversos sistemas e cenários narrativos.
                    </p>
                    <p>
                        <Button variant="primary">Leia Mais</Button>
                    </p>
            </div>
        )
    }
}
