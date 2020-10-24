import React from   'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/Sol.png';

const Menu = () => {
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

    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
      </Nav>
      
  </Navbar.Collapse>
</Navbar>   
)
}

export default Menu;