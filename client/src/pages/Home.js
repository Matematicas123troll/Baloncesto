// File: client/src/pages/Home.js

import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import NoticiasCarrusel from "../components/NoticiasCarrusel";
import PlayerProfile from '../components/PlayerProfile'; // ⬅️ Importamos el componente

// Estilos
import '../styles/Nav.css';
import '../styles/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(() => {
    document.body.classList.add('home-body');
    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  // 🧍 Datos de ejemplo del jugador (puedes cargarlos desde API más adelante)
  const playerExample = {
    name: "Juan Pérez",
    photo: "https://via.placeholder.com/200",
    position: "Base",
    age: 18,
    height: "1.85m",
    weight: "78kg",
    hand: "Diestro",
    location: "Bogotá, Colombia",
    email: "juanperez@email.com",
    level: "Intermedio",
    coach: "Coach Ricardo Mendoza",
    bio: "Apasionado por el baloncesto desde los 10 años. Fuerte en defensa y visión de juego. Sueña con jugar en la NCAA y representar a su país.",
    stats: {
      points: 14.5,
      assists: 6.2,
      rebounds: 5.8,
      steals: 2.1,
      blocks: 1.3
    },
    videos: [
      { title: "Partido vs. Academia Norte", url: "https://youtube.com" },
      { title: "Entrenamiento físico", url: "https://youtube.com" }
    ]
  };

  return (
    <div style={{ display: 'flex' }}>
      <Nav onToggle={handleMenuToggle} />
      <main style={{ marginLeft: isMenuOpen ? '250px' : '80px', padding: '16px', flex: 1 }}>
        <h1>Falcons Edge Basketball Academy</h1>

        <div className="content-principal">
          {/* Sección de noticias */}
          <div className="content-noticias">
            <h2>Welcome to the Academy!</h2>
            <NoticiasCarrusel />
          </div>

          {/* Sección de perfil */}
          <div className="content-perfil">
            <PlayerProfile player={playerExample} /> {/* ⬅️ Aquí insertamos el componente */}
          </div>
        </div>

        <div className="content-acceso-rapido">
          <h2>Contact us for more information!</h2>
          <p>Espacio para acceso rápido.</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
