import React, { useEffect, useRef } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min"; // Importa el efecto de nubes
import * as THREE from "three"; // Vanta.js requiere Three.js
import logoNoFondo from '../assets/logoNoFondo.png'; // Importa la imagen del logo
import '../styles/LandingPage.css'; // Importa los estilos CSS
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

// Componente de la página de inicio    

function LandingPage() {
    const vantaRef = useRef(null); // Referencia para el contenedor del efecto

    useEffect(() => {
        const vantaEffect = CLOUDS({
            el: vantaRef.current, // Aplica el efecto al contenedor
            THREE, // Necesario para Vanta.js
            color: 0x87ceeb, // Color del fondo
            backgroundColor: 0x000000, // Color de fondo detrás del efecto
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy(); // Limpia el efecto al desmontar
        };
    }, []);

    return (
        <div ref={vantaRef} style={{ height: "100vh", width: "100%" }}>
            <div className="landing-page" style={{ position: "relative", zIndex: 1 }}>
                <img src={logoNoFondo} alt="Logo" style={{ width: '200px', borderRadius: '10px' }} />
                <nav className="navBar">
                    <button className="menuButton">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                    <ul className="menuBarBurger">
                        <li><a href="#" id="loginBtn">Acceso</a></li>
                        <li><a href="#" id="registroBtn">Registro</a></li>
                    </ul>
                </nav>
                <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h1>Falcons Edge Basketball Academy</h1>
                </Link>
            </div>
            <div className="overlay" style={{ position: "relative", zIndex: 2 }}>
                <div className="container-defensa">
                    <img src={require('../assets/logoDefensa.png')} alt="Logo Defensa" className="logo-container" />
                    <h2>Falcons Defensa</h2>
                </div>
                <div className="container-ataque">
                    <img src={require('../assets/logoAtaque.png')} alt="Logo Ataque" className="logo-container" />
                    <h2>Falcons Ataque</h2>
                </div>
                <div className="container-tiro">
                    <img src={require('../assets/logoTiro.png')} alt="Logo Tiro" className="logo-container" />
                    <h2>Falcons <br />Tiro</h2>
                </div>
            </div>
            <div>        {/* Enlace para registrarse */}
                <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
            </div>
            <div>        {/* Enlace para iniciar sesión */}
                <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link></p>      
            </div> 
        </div>
    );
}

export default LandingPage;