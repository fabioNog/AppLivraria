
import React  from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from '../App'
import Filmes from '../components/Livros'
import Autores from '../components/Autores'
import Editoras from '../components/Editoras'

function AppRouter() {
  return (
  <BrowserRouter>
     <div>
       <Switch>
         <Route exact path="/" component={App} />
         <Route path="/livros" component={Filmes} />
         <Route exact path="/autores" component={Autores} />
         <Route exact path="/editoras" component={Editoras} />        
       </Switch>
     </div>
   </BrowserRouter>
  );
}

export default AppRouter;