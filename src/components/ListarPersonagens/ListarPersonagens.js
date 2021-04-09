import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Swal from 'sweetalert2';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {getAllChars, deleteChar , changeChar} from '../../store/FetchActions';
import "./style.css";
export default function ListarPersonagens(){

const dispatch = useDispatch()


        const personagens = useSelector(store => store.reducerPersonagem)

        useEffect(()=>{
            dispatch(getAllChars())
            } , [dispatch])

            

        
        return (
            <div className="" id="containerLista">
                <div id="tituloListagem">
                    <h4>Lista de personagens</h4>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Arquétipo/Classe</th>
                        <th>Alinhamento</th>
                        <th>Ocupação</th>
                        <th>Gênero</th>
                        <th>Raça</th>                  
                        </tr>                                            
                    </thead>
                    <tbody>
                        {personagens.map(char => (
                            <tr key={char.id}>
                                    <td><Link className="btn btn-info" to={`/visualizarPersonagem/${char.id}`}>Visualizar</Link></td>                                    
                                    <td>{char.id}</td>                                    
                                    <td>{char.nome}</td>
                                    <td>{char.arquetipo}</td>
                                    <td>{char.alinhamento}</td>
                                    <td>{char.ocupacao}</td>
                                    <td>{char.genero}</td>
                                    <td>{char.raca}</td>                          
                                    <td>
                                        
                                        <button className="btn btn-success" onClick={()=>updateChar(char , dispatch)}>Editar</button>
                                        <button className="ml-2 btn btn-danger" onClick={()=> quitChar(char, dispatch)}>Apagar</button>
                                    </td>                                                                                             
                            </tr>
                        ))}                   
                    </tbody>
                </Table>
            </div>
        );
    }


    async function updateChar(char , dispatch)
    {       
        const { value: formValues } = await Swal.fire({
            title: 'Editar Personagem',
            html:
              '<input id="id" readonly value="'+char.id+'" class="swal2-input">' +
              '<input id="nome" value=" '+char.nome+'" class="swal2-input">' +
              '<input id="arquetipo" value=" '+char.arquetipo+'" class="swal2-input">' +
              '<input id="alinhamento" value="'+char.alinhamento+'" class="swal2-input">' +
              '<input id="ocupacao" value="'+char.ocupacao+'" class="swal2-input">' +
              '<input id="genero" value="'+char.genero+'" class="swal2-input">' +
              '<input id="raca" value="'+char.raca+'" class="swal2-input">' +
              '<input id="background" value="'+char.background+'" class="swal2-input">' +
              '<input id="avatar" value="'+char.avatar+'" class="swal2-input">' ,
            focusConfirm: false,
            preConfirm: () => {
                let updatedChar = {
                    id : document.getElementById('id').value,
                    nome : document.getElementById('nome').value,
                    arquetipo : document.getElementById('arquetipo').value,
                    alinhamento : document.getElementById('alinhamento').value,
                    ocupacao : document.getElementById('ocupacao').value,
                    genero : document.getElementById('genero').value,
                    raca : document.getElementById('raca').value,
                    background : document.getElementById('background').value,
                    avatar : document.getElementById('avatar').value

                }

                dispatch(changeChar(updatedChar))

            }
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))                       
          }        
          

          
    }


    



    function quitChar(char , dispatch)
    {
        let currentChar = char.id

        console.log(currentChar)
        dispatch(deleteChar(currentChar))
    }