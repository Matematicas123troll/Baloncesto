import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/Nav.css';
import '../styles/Home.css';

const Equipo = () => {
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
        <h1>Equipo</h1>
        <div className="content-principal">
          <div className="content-noticias">
            <h2>Información del Equipo</h2>
            <p>Espacio para mostrar información sobre el equipo.</p>
          </div>
          <div className="content-perfil">
            <h2>Miembros del Equipo</h2>
            <p>Espacio para mostrar los miembros del equipo.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Equipo;