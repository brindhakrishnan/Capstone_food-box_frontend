import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Internal Dependencies
import Header from './component/Header';
import Login from './component/Login';
import RegistrationForm from './component/RegistrationForm';
import Cuisine from './component/Cuisine';
import Home from './component/Home';
import Menu from './component/Menu';
import Logout from './component/Logout';
import AuthenticatedRoute from './component/AuthenticatedRoute.jsx'
import Footer from './component/Footer.jsx'
import About from './component/About'
import Help from './component/Help'
import Users from './component/Users'
import UserDetails from './component/UserDetails'
import Cart from './component/Cart'



function App() {

  return (
    <Router>
      <>
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={RegistrationForm} />
        <AuthenticatedRoute path="/home" component={Home} />
        {/* <AuthenticatedRoute path="/home:name" component={Cuisine} /> */}
        <AuthenticatedRoute path="/cuisine" exact component={Cuisine} />
        <AuthenticatedRoute path="/menu" component={Menu} />
        <AuthenticatedRoute path="/logout" component={Logout} />
        <AuthenticatedRoute path="/users/:email" component={UserDetails} />
        <AuthenticatedRoute path="/users" exact component={Users} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <AuthenticatedRoute path="/cart" component={Cart} />
        <Route component={Error} />
        </Switch>
        <Footer/>
      </>
    </Router>

  );
}

export default App;
