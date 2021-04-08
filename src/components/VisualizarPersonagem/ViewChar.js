import React, { useState , useEffect , useContext, createContext } from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'

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
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Arquétipo</th>
                        <th>Alinhamento</th>
                        <th>Ocupação</th>
                        <th>Gênero</th>
                        <th>Raça</th>                                                       
                        <th>Avatar</th>                                                       
                        </tr>
                    </thead>
                    <tbody>                       
                            <tr key={char.id}>
                                    <td>{char.id}</td>                                    
                                    <td>{char.nome}</td>
                                    <td>{char.arquetipo}</td>
                                    <td>{char.alinhamento}</td>
                                    <td>{char.ocupacao}</td>
                                    <td>{char.genero}</td>
                                    <td>{char.raca}</td>                            
                                    <td><img src={char.avatar} width="130"></img></td>                            
                            </tr>                                           
                    </tbody>
                </Table>                
            </div>          
        </div>
    )
}
                                                                                                    
