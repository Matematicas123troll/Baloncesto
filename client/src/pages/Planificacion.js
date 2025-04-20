import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import '../styles/Nav.css';
import '../styles/Home.css';

const Planificacion = () => {
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
        <h1>Planificación</h1>
        <div className="content-principal">
          <div className="content-noticias">
            <h2>Calendario de Actividades</h2>
            <p>Espacio para mostrar el calendario de actividades.</p>
          </div>
          <div className="content-perfil">
            <h2>Planes Personalizados</h2>
            <p>Espacio para mostrar planes personalizados.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Planificacion;