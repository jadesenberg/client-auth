import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Header from './components/header';
import RequireAuth from './components/auth/require_auth'; //higher order component
import RequireUnauth from './components/auth/require_unauth'; //higher order component
import Feature from './components/feature';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token) { //check if has token..
  store.dispatch({type: AUTH_USER}); //CALL DISPATCH AND LOGIN USER
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/signup" component={RequireUnauth(Signup)} />
          <Route path="/signin" component={RequireUnauth(Signin)} />
          <Route path ="/feature" component={RequireAuth(Feature)} />
          <Route path="/signout" component={Signout} /> 
          <Route exact path="/" render={() => <div>Welcome this is the landing page!</div>} /> 
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
