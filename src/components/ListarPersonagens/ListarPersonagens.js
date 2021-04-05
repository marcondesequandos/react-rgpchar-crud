import React, { Component , useEffect } from 'react';
import {Table} from 'react-bootstrap'
import "./style.css";

export default function ListarPersonagens(){

        
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
                        <tr>
                            <td>1</td>
                                <td>Donavan Camel</td>
                                <td>Ronin</td>
                                <td>Neutro</td>
                                <td>Farmacêutico</td>
                                <td>Masculino</td>
                                <td>Humano</td>                              
                                <td>
                                    <button className="btn btn-success">Entrada</button>
                                    <button className="ml-2 btn btn-danger"></button>
                                </td>

                        </tr>
                    

                    </tbody>
                </Table>
            </div>
        );
    }
