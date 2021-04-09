import React, { useState , useEffect , useContext } from 'react'
import { Link } from 'react-router-dom';
import {Card , ListGroup} from 'react-bootstrap'
import axios from 'axios'
import "./style.css";

export default function DataFetching(props) {

    const MyContext = React.createContext(1)
    
    const [char, setChar] = useState({
        id: '',
    })
    const id = useContext(MyContext)
    const currentChar = props.match.params.id

    useEffect(() => {
        axios
        .get('http://localhost:3001/personagens/'+currentChar)
        .then(res => {
            console.log(res)
            setChar(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return (
        <div>            
            <div id="containerLista">
            <div id="tituloListagem">
                    <h4>Visualização de personagem</h4>
                
                    
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>


                <Card style={{width: '20%', backgroundColor: '#343a40', color: '#fff', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                
                        <Card.Body>
                            <Card.Title><h1>{char.nome}</h1></Card.Title>
                            <Card.Text>        
                            </Card.Text>
                        </Card.Body>
                        <img src={char.avatar} width="300"></img>
                        
                </Card>  
                <div style={{width: '80%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Card style={{width: '100%', backgroundColor: '#343a40', color: '#fff' }}>                    
                    
                    <ListGroup variant="flush">                         
                        <ListGroup.Item className="charInfo"><strong>Arquétipo/Classe:</strong> {char.arquetipo}</ListGroup.Item>
                        <ListGroup.Item className="charInfo"><strong>Alinhamento:</strong> {char.alinhamento}</ListGroup.Item>
                        <ListGroup.Item className="charInfo"><strong>Ocupação:</strong> {char.ocupacao}</ListGroup.Item> 
                        <ListGroup.Item className="charInfo"><strong>Gênero:</strong> {char.genero}</ListGroup.Item>
                        <ListGroup.Item className="charInfo"><strong>Raça:</strong> {char.raca}</ListGroup.Item>                        
                        <ListGroup.Item className="charInfo"><strong>Background:</strong> {char.background}</ListGroup.Item>                        
                    </ListGroup>
                </Card>

                </div>
             


            </div>
            <div style={{marginTop: '5px', position: 'relative', left: '0'}}>
                    <Link style={{width: '20%'}} className="btn btn-info" to={`/listarPersonagens`}>Voltar Para Lista de Personagens</Link> 
                </div>  
            </div>  
        
        </div>
    )
}
                                                                                                    
                                                           
