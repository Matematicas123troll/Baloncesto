import React from "react";
import Slider from "react-slick";
import logoCabeza from "../assets/publicidad/logoCabeza.png";
import "../styles/NoticiasCarrusel.css";

const NoticiasCarrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const imagenes = [
    { url: logoCabeza, alt: "Logo de la academia" },
    { url: logoCabeza, alt: "Evento de verano 2024" },
  ];

  return (
    <div className="noticias-container">
      <h2 className="noticias-titulo">Noticias</h2>
      <Slider {...settings}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img
              src={img.url}
              alt={img.alt}
              className="noticias-imagen"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NoticiasCarrusel;
