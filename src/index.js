import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , browserHistory , IndexRoute} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import AnimalForm from './components/AnimalForm'
import ShowPets from './components/ShowPets'
import AddClients from './components/AddClients'
import ShowClients from './components/ShowClients'


render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/animalform" component={AnimalForm}/>
      <Route path="/showPets" component={ShowPets}/>
      <Route path="/clientform" component={AddClients}/>
      <Route path="/showClients" component={ShowClients}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
