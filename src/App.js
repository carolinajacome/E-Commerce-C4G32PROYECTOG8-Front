import './App.css';
import { Footer } from './components/Footer/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Inicio from './pages/Inicio';
import NavBar from './components/NavBar';
import NotFound404 from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Header /> */}
      <NavBar />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Inicio /> */}
      <NotFound404 />
      <Footer />
    </div>
  );
}

export default App;
