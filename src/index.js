import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';

const PaginaNotFound = () => (
  <div>
  Página 404 <br></br>
  Por favor, volte a página inicial. Ou então procurer por uma página existente.
  </div>
)

  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route component={PaginaNotFound} />
      </Switch>
    </BrowserRouter>,

  document.getElementById('root')
);

