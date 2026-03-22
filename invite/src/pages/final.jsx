import React from 'react';
import '../styles/final.css';

function Final() {
  return (
    <div className="final-container">
      <header className="header">
        <h1>Congrats!!!</h1>
        <h2>You've been Invited!</h2>
      </header>

      <div className="invitation-card">
        <p className="welcome-text">
          Hope you enjoyed the game!<br />
          I'd be very happy to see you at my party.<br />
	  Confirmation of attendance would be appreciated.
        </p>
        
        <div className="info-section">
          <p><strong>📅 When:</strong> Saturday / 21-03 / 9-10 p.m.</p>
	  <p><strong>📍 Where:</strong> What are you looking for creep?</p>
        </div>

        <a 
	  href="https://youtu.be/dQw4w9WgXcQ?si=noyXb04ronV8drTD"
          target="_blank" 
          rel="noopener noreferrer"
          className="maps-link"
        >
          📍 Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default Final;
