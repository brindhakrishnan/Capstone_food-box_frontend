import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Switch from 'react-router-dom';
// import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header';
import Login from './component/Login';
import RegistrationForm from './component/RegistrationForm';
import Register from './component/Register';
import Cuisine from './component/Cuisine';
import Home from './component/Home';
import Test from './component/Test';
import { Carousel } from 'bootstrap';
import IndianMenu from './component/IndianMenu';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
        <Route path="/" exact component={Cuisine} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/cuisine" exact component={Cuisine} />
        <Route path="/IndianMenu" component={IndianMenu} />
        <Route path="/home:name" component={Cuisine} />
        <Route component={Error} />
        {/* <Home /> */}
        {/* <Test /> */}
        </Switch>
      </>
    </Router>

  );
}

export default App;
