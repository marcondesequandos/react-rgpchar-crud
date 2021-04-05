import React, { Component } from 'react'
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'
import {Navbar , Nav , NavDropdown} from 'react-bootstrap';
import ListarPersonagens from '../ListarPersonagens/ListarPersonagens';
import AddCharacter from "../AdicionarPersonagem/Index"
import Home from '../Home/Home'


export default class NavBar extends Component {
    render() {
        return (<Router>
                   <Navbar bg="dark" variant="dark" expand="lg">
                        <Link exact="true" to="/"><Navbar.Brand>React-Bootstrap</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavDropdown title="Personagens" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link exact="true"  to="/addCharacter">Entrada de Personagens</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link exact="true"  to="/listarPersonagens">Listar Personagens</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* <NavDropdown title="Relatorios" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Link exact="true"  to="/relatorioDeSaida">Relatorio de Saida</Link></NavDropdown.Item>
                                <NavDropdown.Item ><Link  exact="true" to="/relatorioDeEntrada">Relatorio de Entrada</Link></NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listarPersonagens" component={ListarPersonagens}/>
                    <Route exact path="/addCharacter" component={AddCharacter}/>
                    <Route exact path="/saidaProduto"/>
                    <Route exact path="/relatorioDeSaida"/>
                    <Route exact path="/relatorioDeEntrada"/>
                </Router>
        )
    }
}