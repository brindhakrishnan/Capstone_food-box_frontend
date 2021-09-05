import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Login from './component/Login';
import Register from './component/Register';
import Cuisine from './component/Cuisine';
import Home from './component/Home';
import Test from './component/Test';
import { Carousel } from 'bootstrap';

function App() {
  return (
    <div>
      <Header />
      <Login />
      {/* <Register /> */}
      {/* <Cuisine /> */}
      {/* <Home /> */}
      {/* <Test /> */}

    </div>

  );
}

export default App;
