import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//views
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import Home from './view/home'

function App () {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/novousuario' component={NovoUsuario}/>
      <Route exact path='/login' component={Login}/>
    </BrowserRouter>

  )
}

export default App
