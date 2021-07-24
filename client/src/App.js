import React,{Fragment} from 'react';
import './vendor/bootstrap/css/bootstrap.css'
import './vendor/font-awesome/css/fontawesome-all.css'
import './App.css';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Landing></Landing>
    </Fragment>
  );
}

export default App;
