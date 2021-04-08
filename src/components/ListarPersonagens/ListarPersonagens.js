import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {getAllChars, deleteChar} from '../../store/FetchActions'
import "./style.css";
export default function ListarPersonagens(){

const dispatch = useDispatch()


        const personagens = useSelector(store => store.reducerPersonagem)

        useEffect(()=>{
            dispatch(getAllChars())
            } , [dispatch])

            

        
        return (
            <>
            <div className="" id="containerLista">
                <div id="tituloListagem">
                    <h4>Lista de personagens</h4>
                </div>
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
                        </tr>                                            
                    </thead>
                    <tbody>
                        {personagens.map(char => (
                            <tr key={char.id}>
                                    <td>{char.id}</td>                                    
                                    <td>{char.nome}</td>
                                    <td>{char.arquetipo}</td>
                                    <td>{char.alinhamento}</td>
                                    <td>{char.ocupacao}</td>
                                    <td>{char.genero}</td>
                                    <td>{char.raca}</td>                          
                                    <td>
                                        <Link className="btn btn-success" to={`/visualizarPersonagem/${char.id}`}>Visualizar</Link>
                                        <button className="ml-2 btn btn-danger" onClick={()=> quitChar(char, dispatch)}>Saída</button>
                                    </td>                                                                                             
                            </tr>
                        ))}                   
                    </tbody>
                </Table>
            </div>
            </>
        );
    }

    



    function quitChar(char , dispatch)
    {
        let currentChar = char.id

        console.log(currentChar)
        dispatch(deleteChar(currentChar))
    }