import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import { Redirect, Route } from 'react-router-dom';
import Technology from './Technology';
import Html from './Html';
import Ui from './Ui';

const App = () => {
  return(
    <>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/tech" component={Technology}/>
    <Route exact path="/uiux" component={Ui}/>
    <Route exact path="/html" component={Html}/>
    {/* <Redirect component={Home}/> */}
    </>
  );
}

export default App;