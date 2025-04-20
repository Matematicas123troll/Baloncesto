// filepath: /client/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Equipo from './pages/Equipo';
import Entrenamiento from './pages/Entrenamiento';
import Ejercicios from './pages/Ejercicios';
import Planificacion from './pages/Planificacion';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Routes>  {/* Asegúrate que solo Routes es utilizado aquí */}
      {/* Rutas públicas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Rutas protegidas */}
      <Route
        path="/home"
        element={
         // <PrivateRoute>
            <Home />
         // </PrivateRoute>
        }
      />
      <Route
        path="/perfil"
        element={
        //  <PrivateRoute>
            <Perfil />
        //  </PrivateRoute>
        }
      />
      <Route
        path="/equipo"
        element={
        //  <PrivateRoute>
            <Equipo />
        //  </PrivateRoute>
        }
      />
      <Route
        path="/entrenamiento"
        element={
        //  <PrivateRoute>
            <Entrenamiento />
       //   </PrivateRoute>
        }
      />
      <Route
        path="/ejercicios"
        element={
      //    <PrivateRoute>
            <Ejercicios />
      //    </PrivateRoute>
        }
      />
      <Route
        path="/planificacion"
        element={
          <PrivateRoute>
            <Planificacion />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
