import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2'
import {getAllChars, changeChar, deleteChar} from '../../store/FetchActions'
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
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Arquétipo</th>
                        <th>Alinhamento</th>
                        <th>Ocupação</th>
                        <th>Gênero</th>
                        <th>Raça</th>                    
                        <th>Nível</th>                    
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
                                    <td>{char.nivel}</td>                                                                  
                                    <td>
                                        <button className="btn btn-success" onClick={()=>editChar(char , dispatch)} >Entrada</button>
                                        <button className="ml-2 btn btn-danger" onClick={()=> quitChar(char, dispatch)}>Saída</button>
                                    </td>

                            </tr>
                        ))}                   
                    </tbody>
                </Table>
            </div>
        );
    }

    async function editChar(char , dispatch)
    {       
        const { value: formValues } = await Swal.fire({
            title: 'Atualização de Personagem',
            html:
              '<input id="id" readonly value="'+char.id+'" class="swal2-input">' +
              '<input id="nome" value="'+char.nome+'" class="swal2-input">' +
              '<input id="arquetipo" value="'+char.arquetipo+'" class="swal2-input">' +
              '<input id="alinhamento" value="'+char.alinhamento+'" class="swal2-input">' +
              '<input id="ocupacao" value="'+char.ocupacao+'" class="swal2-input">' +
              '<input id="genero" value="'+char.genero+'" class="swal2-input">' +
              '<input id="raca" value="'+char.raca+'" class="swal2-input">'+
              '<input id="nivel" type="number" value="'+char.nivel+'" class="swal2-input">',
          
            focusConfirm: false,
            preConfirm: () => {
                let updatedChar = {
                    id : document.getElementById('id').value,
                    nome : document.getElementById('nome').value,
                    modelo : document.getElementById('arquetipo').value,
                    cor : document.getElementById('alinhamento').value,
                    precoCompra : document.getElementById('ocupacao').value,
                    precoVenda : document.getElementById('genero').value,
                    quantidade : document.getElementById('raca').value,
                    quantidade : document.getElementById('nivel').value

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