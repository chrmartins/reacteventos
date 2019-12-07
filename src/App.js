import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//views
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'


function App () {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Login}/>
      <Route exact path='/novousuario' component={NovoUsuario}/>
    </BrowserRouter>

  )
}

export default App
