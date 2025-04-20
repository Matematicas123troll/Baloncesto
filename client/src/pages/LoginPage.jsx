import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos el contexto
import axios from 'axios';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Obtenemos la función de login del contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Usamos el login del contexto en lugar de setear localStorage manualmente
      login(data.user, data.token);

      navigate('/home');
    } catch (err) {
      const error = err.response?.data?.error || 'Error al iniciar sesión';
      setErrorMsg(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Acceder</button>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
