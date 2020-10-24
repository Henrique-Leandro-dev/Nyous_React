import React from 'react';
import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import {Container, Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/Sol.png';
import './index.css';

const Login = () => {
    return(
        <div>
            <Menu />
            <Container className='form-height'>
            <Form className='form-signin'>
                <div className='text-center'>
                    <img src={logo} alt='Nyous' style={{width : '64px'}} />
                </div>
                <br/>
                <small>Informe os dados abaixo</small>
                <hr/>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Infome o seu email" required />
            </Form.Group>

                <Form.Group controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Infome a sua senha" required />
            </Form.Group>

            <Button variant="primary" type="submit">
               Enviar
              </Button>

              <br/><br/>
              <a href='/cadastrar' style={{marginTop : '30px'}}> Não possui uma conta? Cadastre uma!</a>

            </Form>
            </Container>

            <Rodape />
        </div>
    )
}

export default Login;