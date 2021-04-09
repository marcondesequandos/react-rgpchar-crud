import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import "./style.css";

export default class Home extends Component {
    render() {
        return (
            <div id="jumbotronHome" className="jumbotron mt-4">
                    <h1>RPG - Acervo de Personagens</h1>
                    <div style={{width:'50%'}}>
                    <p style={{textAlign: 'justify'}}>
                        <br></br>
                        RPG é um jogo narrativo no qual há um narrador, jogadores, um cenário no qual a história se passa e um sistema de regras a ser adotado.
                        
                        Uma vez definidos o cenário, história e sistemas os jogadores devem criar personagens para participar da história proposta.
                        <br></br>
                        <br></br>
                       
                        O narrador conta a história, descrevendo as cenas para que os jogadores possam interagir e desenrolar a narrativa. 
                        
                        Cabe também ao narrador controlar os NPCs (Personagens não jogáveis), que são fundamentais para a condução da história, assim como controlar a aplicação das regras.
                    </p>                        
                    </div>
                    <p>
                        <Button  variant="primary">Leia Mais</Button>
                    </p>
            </div>
        )
    }
}
