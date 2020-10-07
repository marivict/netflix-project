import React from 'react';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Singin, Singup} from './pages/'
import { IsUserRedirect } from './helpers/routes'
import * as ROUTES from './constants/routes'
export default function App() {
  return (
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <Singin />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <Singup />
        </Route>
      </Router>
  );
}
