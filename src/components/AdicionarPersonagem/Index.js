import React , {useState} from 'react';
import "./style.css";
import {actions} from '../../store/personagens'
import { useDispatch } from 'react-redux';


export default function AddCharacter() {

const dispatch = useDispatch()

    const [form, setForm] = useState({
        nome: '',
        arquetipo: '',
        alinhamento: '',
        ocupacao: '',
        genero: '',
        raca: '',
    })

    function formChange(e)
    {
        setForm({
           ...form , [e.target.name] : e.target.value
        })
    }

    function onSubmit(e)
    {
        e.preventDefault()
        dispatch(actions.add(form))
    }


    return (
        <div id="containerAddPersonagem">
            <form id="formularioCadastro" onSubmit={onSubmit} className="container mt-4">
                <div className="text"><h4>Adicionar Novo Personagem</h4></div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Nome</label>
                        <input onChange={formChange} name="nome" className="form-control" placeholder="Nome do Personagem"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Arquétipo</label>
                        <input onChange={formChange} name="arquetipo" className="form-control" placeholder="Arquétipo"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Alinhamento</label>
                        <input onChange={formChange} name="alinhamento" className="form-control" placeholder="Alinhamento"></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Ocupação</label>
                        <input onChange={formChange} name="ocupacao" className="form-control" placeholder="Ocupação"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Gênero</label>
                        <input onChange={formChange} name="genero" className="form-control" placeholder="Gênero"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Raça</label>
                        <input onChange={formChange} name="raca" className="form-control" placeholder="Raça"></input>
                    </div>

                </div>
                <div className="row mt-4">
                    <div className="col-md-4"><button type="submit" className="btn btn-success col-md-4 mt-4">Adicionar</button></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><button type="reset" className="btn btn-danger col-md-4 mt-4">Cancelar</button></div>
                </div>

            </form>
        </div>
    )
}
