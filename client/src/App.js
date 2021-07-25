import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

import './vendor/bootstrap/css/bootstrap.css';
import './vendor/font-awesome/css/fontawesome-all.css';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert'


function App() {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navbar></Navbar>
      <Route exact path="/" component={Landing} />

      <section className="container">
      <Alert></Alert>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        </section>
   
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
