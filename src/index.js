import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
  <div style={{ display: 'flex', alignItems: 'center', backgroundColor:'black', justifyContent: 'center', flexDirection: 'column', height: '120vh', marginTop: '-20vh', padding:'0' }}>
    // eslint-disable-next-line no-trailing-spaces
    <h1 style={{textAlign: 'center', color: 'white'}}>Erro 404<br />Ops, parece que a cabeça de Ned Stark não está por aqui,<br /> acho melhor você procurar lá na <a href="/">home</a>.</h1>    
      
      <iframe width="853" height="480" src="https://www.youtube.com/embed/s7L2PVdrb_8?autoplay=1;mute=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);