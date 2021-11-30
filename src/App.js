import './App.css';
import NavBar from './components/NavBar';
import { Footer } from './components/Footer/Footer';

/* import Login from './components/Login';
import Register from './components/Register';
import Inicio from './pages/Inicio';
import NotFound404 from './components/PageNotFound';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import Caballero from './pages/Caballero'; */

import ProductDetail from './pages/ProductDetail';

import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRoutes from './routers/AuthRoutes';
import GuessRoutes from './routers/GuessRoutes';
import {FooterTest} from './components/FooterTest';
import ShoppingCart from './pages/ShoppingCart';

function App() {

  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <NavBar />

      {auth ? <AuthRoutes /> : <GuessRoutes />}

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Inicio /> */}
      {/*  <Contacto /> */}
      {/* <Blog /> */}
      {/* <NotFound404 /> */}
      {/* <Caballero /> */}
      {/* <ProductDetail /> */}
      <ShoppingCart />
      <Footer />
      {/* <FooterTest /> */}

    </div>
  );
}

export default App;
