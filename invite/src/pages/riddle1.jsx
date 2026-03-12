import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/riddle1.css'

function Riddle1() {
  const navigate = useNavigate();
  const [showHint, setShowHint] = useState(false);

  const handleClueClick = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000);
  };

  return (
    <div className="riddle-container">
      <header className="header">
        <h1>Riddle #1</h1>
      </header>

      <div className="box-container">
        <div style={{ position: 'relative' }}>
          <button 
            className="clue-btn"
            onClick={handleClueClick}
          >
            Press here
            <svg 
              className="arrow-svg" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4h2v12l5.5-5.5 1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5 11 16V4z"/>
            </svg>
          </button>
          {showHint && (
            <span className="side-eye">*bombastic side eye*</span>
          )}
        </div>

        {/* The ACTUAL button is where the arrow points */}
        <button 
          className="invisible-btn"
          onClick={() => navigate("/riddle2")}
          aria-label="Next level"
        />
      </div>
    </div>
  )
}

export default Riddle1;
