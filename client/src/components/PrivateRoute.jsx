import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  // Asegúrate de que esto está correctamente instalado

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // Para controlar el estado de la autenticación
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setIsAuth(false); // Si no hay token, no está autenticado
      return;
    }

    try {
      const decoded = jwtDecode(token);
      
      // Verifica si el token ha expirado
      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token'); // Limpia token caducado
        setIsAuth(false);
      } else {
        setIsAuth(true); // Token válido
      }
    } catch (error) {
      console.error('Token inválido:', error);
      localStorage.removeItem('token');
      setIsAuth(false);
    }
  }, [token]);

  if (isAuth === null) {
    // Esto se usa para el primer renderizado mientras se verifica el token
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children; // Si está autenticado, muestra los componentes hijos
};

export default PrivateRoute;
