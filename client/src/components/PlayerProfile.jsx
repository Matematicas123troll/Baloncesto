import React from 'react';
import '../styles/PlayerProfile.css';

const PlayerProfile = ({ player }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={player.photo} alt="Foto del Jugador" className="profile-photo" />
        <div className="profile-info">
          <h2>{player.name}</h2>
          <p>{player.position} | {player.age} años | {player.height} / {player.weight} | {player.hand}</p>
          <p>📍 {player.location}</p>
          <p>📧 {player.email}</p>
          <p><strong>Nivel:</strong> {player.level}</p>
          <p><strong>Entrenador:</strong> {player.coach}</p>
        </div>
      </div>

      <div className="profile-section">
        <h3>📊 Estadísticas</h3>
        <div className="stats-grid">
          <div><strong>{player.stats.points}</strong><br />Puntos</div>
          <div><strong>{player.stats.assists}</strong><br />Asistencias</div>
          <div><strong>{player.stats.rebounds}</strong><br />Rebotes</div>
          <div><strong>{player.stats.steals}</strong><br />Robos</div>
          <div><strong>{player.stats.blocks}</strong><br />Tapones</div>
        </div>
      </div>

      <div className="profile-section">
        <h3>📝 Biografía</h3>
        <p>{player.bio}</p>
      </div>

      <div className="profile-section">
        <h3>🎥 Videos Destacados</h3>
        <ul>
          {player.videos.map((video, idx) => (
            <li key={idx}>
              <a href={video.url} target="_blank" rel="noreferrer">{video.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerProfile;