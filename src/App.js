import './App.css';
import { Footer } from './components/Footer/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Inicio from './pages/Inicio';
import NavBar from './components/NavBar';
import NotFound404 from './components/PageNotFound';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import Caballero from './pages/Caballero';
import { Switch } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import ProductDetail from './pages/ProductDetail';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';

import AuthRoutes from './routers/AuthRoutes';
import GuessRoutes from './routers/GuessRoutes';

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

      <Footer />

    </div>
  );
}

export default App;
