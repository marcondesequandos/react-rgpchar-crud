import React, { Component , useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap'
import {getChar, deleteChar} from '../../store/FetchActions'
import "./style.css";
export default function VisualizarPersonagem(){

const dispatch = useDispatch()


        const personagens = useSelector(store => store.reducerPersonagem)

        useEffect(()=>{
            dispatch(getChar())
            } , [dispatch])

            

        
        return (
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
                        {personagens.find(char => (
                            <tr>
                                    <td>{char.id}</td>                                    
                                    <td>{char.nome}</td>
                                    <td>{char.arquetipo}</td>
                                    <td>{char.alinhamento}</td>
                                    <td>{char.ocupacao}</td>
                                    <td>{char.genero}</td>
                                    <td>{char.raca}</td>                              
                                    <td>
                                        <button className="btn btn-success">Entrada</button>
                                        <button className="ml-2 btn btn-danger" onClick={()=> quitChar(char, dispatch)}>Saída</button>
                                    </td>

                            </tr>
                        ))}
                    

                    </tbody>
                </Table>
            </div>
        );
    }



    function quitChar(char , dispatch)
    {
        let currentChar = char.id

        console.log(currentChar)
        dispatch(deleteChar(currentChar))
    }