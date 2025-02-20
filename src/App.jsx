import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Login from './views/Login';
import Profile from './views/Profile';
import Navbar from './components/Navbar';
import Personajes from './views/Personajes';
import Detalle from './views/Detalle';

import ProtetedRoute from './components/ProtetedRoute';

function App() {
  return (
    <>
      <h1>CONTEXT - RUTAS</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <ProtetedRoute permiso="VER_ABOUT">
              <About />
            </ProtetedRoute>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/profile"
          element={
            <ProtetedRoute permiso="VER_PROFILE2">
              <Profile />
            </ProtetedRoute>
          }
        />

        <Route path="/character" element={<Personajes />} />
        <Route path="/character/:id" element={<Detalle />} />
      </Routes>
    </>
  );
}

export default App;
