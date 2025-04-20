// File: client/src/components/Nav.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ onToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onToggle) onToggle(!isMenuOpen);  // Notificar al componente padre cuando el menú cambia
  };

  // Maneja el comportamiento responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: require('../assets/icons/casa.png'), text: 'Home', link: '/home' },
    { icon: require('../assets/icons/usuario.png'), text: 'Perfil', link: '/perfil' },
    { icon: require('../assets/icons/usuarios-de-grupo.png'), text: 'Equipo', link: '/equipo' },
    { icon: require('../assets/icons/rebote.png'), text: 'Entrenamiento', link: '/entrenamiento' },
    { icon: require('../assets/icons/bolsa-para-la-escuela.png'), text: 'Ejercicios', link: '/ejercicios' },
    { icon: require('../assets/icons/jugador-de-baloncesto.png'), text: 'RoadMap', link: '/roadmap' },
    { icon: require('../assets/icons/fecha-del-calendario.png'), text: 'Planificación', link: '/planificacion' },
    { icon: require('../assets/icons/ejercicio.png'), text: 'Rendimiento', link: '/rendimiento' },
    { icon: require('../assets/icons/deporte.png'), text: 'Psicología', link: '/psicologia' },
    { icon: require('../assets/icons/estadisticas.png'), text: 'Estadísticas', link: '/estadisticas' },
    { icon: require('../assets/icons/biblioteca-en-linea.png'), text: 'Cursos', link: '/cursos' },
    { icon: require('../assets/icons/engranaje.png'), text: 'Configuración', link: '/configuracion' },
  ];

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleMenu}>
        <img className="logo" src={require('../assets/logoCuerpo.png')} alt="Logo de la Academia" />
      </button>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.text} className="menu-item">
            <Link to={item.link} className="menu-link">
              <img className="icon" src={item.icon} alt={`Ícono de ${item.text}`} />
              <span className="text">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
