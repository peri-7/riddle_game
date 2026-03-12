import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/riddle4.css'

function Riddle4() {
  const navigate = useNavigate();
  const [lastChosen, setLastChosen] = useState(null);
  const [eye, setEye] = useState(false);

  const handleChoice = (choice) => {
    // If it's the first try OR the choice doesn't match the previous one
    if (lastChosen === null || choice !== lastChosen) {
      setLastChosen(choice);
      setEye(true);
      setTimeout(() => setEye(false), 2000);
    } else {
      // Success! They chose the same door twice in a row
      navigate('/final');
    }
  };

  return (
    <div className="riddle-container">
      <header className="header">
        <h1>Riddle #4</h1>
      </header>

      <div className="box-container">
        <p className="clue-text">
          Five doors, One Choice <br />
          Be wise and sure
        </p>

        <div className="doors-grid">
          {[1, 2, 3, 4, 5].map((num) => (
            <div 
              key={num} 
              className="door-card" 
              onClick={() => handleChoice(num)}
            >
              <span>🚪</span>
              <span className="door-label">Door {num}</span>
            </div>
          ))}
        </div>

        {eye && (
          <span className="side-eye-riddle4">*bombastic side eye*</span>
        )}
      </div>
    </div>
  )
}

export default Riddle4;
