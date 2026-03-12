import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/riddle3.css'

function Riddle3() {
  const navigate = useNavigate();
  const pos = 30
  const [coyotePos, setCoyotePos] = useState(pos); // Start further right
  const [eye, setEye] = useState(false);
  
  const roadRunnerPos = 85; // Roadrunner at the very end
  const winPos = -15; 
  const startPos = pos;
  const stepSize = 5;

  const resetGame = useCallback(() => {
    setCoyotePos(startPos);
    setEye(true);
    setTimeout(() => setEye(false), 500);
  }, [startPos]);

  const moveCoyote = useCallback((dir) => {
    if (eye) return;

    setCoyotePos((prev) => {
      const next = prev + (dir * stepSize);
      
      // Hit Roadrunner?
      if (next >= roadRunnerPos - 5) {
        resetGame();
        return startPos;
      }

      // Move off-screen to the left? (Win)
      if (next <= winPos) {
        setTimeout(() => navigate('/riddle4'), 500);
        return winPos;
      }

      return next;
    });
  }, [eye, navigate, resetGame]);

  // Handle Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') moveCoyote(-1);
      if (e.key === 'ArrowRight') moveCoyote(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveCoyote]);

  return (
    <div className="riddle-container">
      <header className="header">
        <h1>Riddle #3</h1>
      </header>

      <p className="controls-hint">Help him!</p>

      <div className="road-track">
        <span 
          className="character coyote" 
          style={{ left: `${coyotePos}%` }}
        >
          🐺
        </span>
        <span 
          className="character roadrunner" 
          style={{ left: `${roadRunnerPos}%` }}
        >
          🐦
        </span>
      </div>

      {eye && (
        <div className="side-eye-riddle3">
          *bombastic side eye*
        </div>
      )}

      {/* Touch zones for mobile (Transparent) */}
      <div className="mobile-controls">
        <div className="touch-zone" onClick={() => moveCoyote(-1)} />
        <div className="touch-zone" onClick={() => moveCoyote(1)} />
      </div>

      <p style={{ marginTop: 'auto', fontSize: '0.8rem', opacity: 0.6 }}>
        Use Arrow Keys or Tap Left/Right
      </p>
    </div>
  )
}

export default Riddle3;
