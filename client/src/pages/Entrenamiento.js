import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/Nav.css';
import '../styles/Home.css';

const Entrenamiento = () => {
  useEffect(() => {
    // Agrega la clase al body cuando el componente se monta
    document.body.classList.add('home-body');

    // Limpia la clase cuando el componente se desmonta
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Nav />
      <main style={{ marginLeft: '80px', padding: '16px', flex: 1 }}>
        <h1>Entrenamiento</h1>
        <div className="content-principal">
          <div className="content-noticias">
            <h2>Sesiones de Entrenamiento</h2>
            <p>Espacio para mostrar información sobre las sesiones de entrenamiento.</p>
          </div>
          <div className="content-perfil">
            <h2>Plan de Entrenamiento</h2>
            <p>Espacio para mostrar el plan de entrenamiento.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Entrenamiento;