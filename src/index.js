import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import DashBoard from './pages/admin/dashboard';
import NaoEncontrada from './pages/naoencontrada';
import Eventos from './pages/eventos';
import CrudCategorias from './pages/admin/crudCategorias';
import CrudEventos from './pages/admin/crudEventos';

import jwt_decode from "jwt-decode";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route
  {...rest}
  render ={
    props => localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role !== 'Admin' ?
    <Component {...props} /> :
    <Redirect to={{pathname :'/login', state:{from : props.location}}} /> 
  }
  />

);

    const routing = (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cadastrar' component={Cadastrar} />
          <RotaPrivadaAdmin path='/eventos' component={Eventos} />
          <RotaPrivadaAdmin path='/admin/dashboard' component={DashBoard} />
          <RotaPrivadaAdmin path='/admin/categorias' component={CrudCategorias} />
          <RotaPrivadaAdmin path='/admin/eventos' component={CrudEventos} />
          <Route component={NaoEncontrada}/>
        </Switch>
      </Router>
    )

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
