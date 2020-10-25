import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Menu from '../../components/menu'
import Rodape from '../../components/rodape'
import {Container, Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/Sol.png';
import './index.css';



const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        fetch('http://localhost:5000/api/account/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('Dados Inválidos');
        })
        .then(data => {
            localStorage.setItem('token-nyous', data.token);

            let usuario = jwt_decode (data.token);

            if(usuario.role === 'Admin')
                history.push('/admin/dashboard');
            else
                history.push('/eventos');
        })
        .catch(err => console.error(err));
    }   

    return(
        <div>
            <Menu />
            <Container className='form-height'>
            <Form className='form-signin' onSubmit={event => logar(event)}>
                <div className='text-center'>
                    <img src={logo} alt='Nyous' style={{width : '64px'}} />
                </div>
                <br/>
                <small>Informe os dados abaixo</small>
                <hr/>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Infome o seu email" required />
            </Form.Group>

                <Form.Group controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" value={senha} onChange={event => setSenha(event.target.value)} placeholder="Infome a sua senha" required />
            </Form.Group>

            <Button variant="primary" type="submit" >
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