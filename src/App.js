import React from 'react';
import{BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, Browse, Singin, Singup} from './pages/'
import { IsUserRedirect, ProtectRoute } from './helpers/routes'
import * as ROUTES from './constants/routes'
import {useAuthListener} from './hooks'

export default function App() {
  const {user} = useAuthListener()
  return (
      <Router>
        <Switch>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
            <Singin />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
            <Singup />
            </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact 
          >
            <Home />
          </IsUserRedirect>  
          <ProtectRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse/>
          </ProtectRoute>
        </Switch>
      </Router>
  );
}
