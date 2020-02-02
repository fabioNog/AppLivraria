
import React from 'react'
//React-Router-Dom
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Roteamento
import Home from '../components'
import App from '../App'
//Rotas para os Livros

import Livros from '../components/Livros'
import CriarLivros from '../components/Livros/CriarTeste'
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
           <Route path="/editarlivros" component={EditarLivros} />
           <Route path="/deletarlivros" component={DeletarLivros} />
           <Route path="/Listarlivros" component={ListarLivros} />

           <Route path="/autores" component={Autores} />
           <Route path="/criarautores" component={CriarAutores} />
           <Route path="/editarautores" component={EditarAutores} />
           <Route path="/deletarautores" component={DeletarAutores} />
           <Route path="/Listarautores" component={ListarAutores} />

           <Route path="/editoras" component={Editoras} />
           <Route path="/criareditoras" component={CriarEditoras} />
           <Route path="/editareditoras" component={EditarEditoras} />
           <Route path="/deletareditoras" component={DeletarEditoras} />
           <Route path="/Listareditoras" component={ListarEditoras} />        
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
  
  export default AppRouter;