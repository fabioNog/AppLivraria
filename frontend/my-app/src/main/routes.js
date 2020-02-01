
import React from 'react'
//React-Router-Dom
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom'

//Roteamento
import Home from '../components'
import App from '../App'
//Rotas para os Livros

import Livros from '../components/Livros'
import CriarLivros from '../components/Livros/CriarLivros'
import EditarLivros from '../components/Livros/EditarLivros'
import DeletarLivros from '../components/Livros/DeletarLivros'
import ListarLivros from '../components/Livros/ListarLivros'


//Rotas para Autores
import Autores from '../components/Autores/index'
import CriarAutores  from '../components/Autores/CriarAutores'
import EditarAutores from '../components/Autores/EditarAutores'
import DeletarAutores from '../components/Autores/DeletarAutores'
import ListarAutores from '../components/Autores/ListarAutores'

//Rotas para Editoras
import Editoras from '../components/Editoras/index'
import CriarEditoras from '../components/Editoras/CriarEditoras'
import EditarEditoras from '../components/Editoras/EditarEditoras'
import DeletarEditoras from '../components/Editoras/DeletarEditoras'
import ListarEditoras from '../components/Editoras/ListarEditoras'


function AppRouter() {
    return (
    <BrowserRouter>
       <div>
         <Switch>
           <Route exact path="/" component={App} />
           <Route path="/Home" component={Home} />
           
           <Route path="/livros" component={Livros} />
           <Route path="/criarlivros" component={CriarLivros} />
           <Route exact path="/autores" component={Autores} />
           <Route exact path="/editoras" component={Editoras} />        
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
  
  export default AppRouter;