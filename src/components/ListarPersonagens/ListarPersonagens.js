import React, { Component , useEffect } from 'react';
import {useSelector} from 'react-redux';
import {Table} from 'react-bootstrap'
import "./style.css";

export default function ListarPersonagens(){

        const personagens = useSelector(store => store.reducerPersonagem)

            console.log(personagens)

        
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
                        {personagens.map(char => (
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
                                        <button className="ml-2 btn btn-danger">Saída</button>
                                    </td>

                            </tr>
                        ))}
                    

                    </tbody>
                </Table>
            </div>
        );
    }