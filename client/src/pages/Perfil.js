import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/Nav.css';
import '../styles/Home.css';

const Perfil = () => {
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
        <h1>Perfil del Usuario</h1>
        <div className="content-principal">
          <div className="content-noticias">
            <h2>Información del Usuario</h2>
            <p>Espacio para mostrar información del perfil.</p>
          </div>
          <div className="content-perfil">
            <h2>Configuración y Preferencias</h2>
            <p>Espacio para configuración del perfil.</p>
          </div>
        </div>
        <div className="content-acceso-rapido">
          <h2>Acceso Rápido</h2>
          <p>Espacio para accesos rápidos relacionados con el perfil.</p>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
