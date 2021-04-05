import React from 'react';
import "./style.css";

export default function AddCharacter() {


    return (
        <div id="containerAddPersonagem">
            <form id="formularioCadastro" className="container mt-4">
                <div className="text"><h4>Adicionar Novo Personagem</h4></div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Nome</label>
                        <input  name="nome" className="form-control" placeholder="Nome do Personagem"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Arquétipo</label>
                        <input  name="arquétipo" className="form-control" placeholder="Arquétipo"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Alinhamento</label>
                        <input name="alinhamento" className="form-control" placeholder="Alinhamento"></input>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mt-4">
                        <label>Ocupação</label>
                        <input  name="ocupação" className="form-control" placeholder="Ocupação"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Gênero</label>
                        <input  name="gênero" className="form-control" placeholder="Gênero"></input>
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>Raça</label>
                        <input type="raça"  name="quantidade" className="form-control" placeholder="Raça"></input>
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
