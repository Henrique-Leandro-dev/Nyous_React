import React from   'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/img/Sol.png';
import jwt_decode from "jwt-decode";
import { useHistory} from 'react-router-dom';

const Menu = () => {
  const history = useHistory();

  const sair = (event) => {
    event.preventDefault();

    localStorage.removeItem('token-nyous');

    history.push('/')
}

const renderMenu = () => {
  const token = localStorage.getItem('token-nyous');


  if(token === null){
      return (
          <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
          </Nav>
      );
  } else if( jwt_decode(token).role === 'Admin'){
      return (
        <Nav>
        <Nav.Link href="/admin/dashboard">Dasboard</Nav.Link>
        <Nav.Link href="/admin/categorias">Categorias</Nav.Link>
        <Nav.Link href="/admin/eventos">Eventos</Nav.Link>
        
        <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
        </NavDropdown>
    </Nav>
      )
  } else {
      return (
          <Nav>
              <Nav.Link href="/eventos">Eventos</Nav.Link>
              <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
              </NavDropdown>
          </Nav>
      )
  }

  
}
 

return(
    <Navbar expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Nyous</Navbar.Brand>

  <div className='text-center'>
      <img src={logo} alt='Nyous' style={{width : '40px'}} />
      </div>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav>

      {renderMenu()}
  </Navbar.Collapse>
</Navbar>   
)
}

export default Menu;