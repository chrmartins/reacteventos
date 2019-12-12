import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../src/store'
import { Provider } from 'react-redux'

//views
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import Home from './view/home'
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha'

function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route exact path='/novousuario' component={NovoUsuario}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha}/>
      </BrowserRouter>
    </Provider>

  )
}

export default App
