import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Singin, Singup} from './pages/'
import * as ROUTES from './constants/routes'
export default function App() {
  return (
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path="/user">
          <p>Hello world</p>
        </Route>
      </Router>
  );
}
