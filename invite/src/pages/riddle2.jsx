import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/riddle2.css'

function Riddle2() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [eye, setEye] = useState(false);

  const handleChoice = (choice) => {
    if (choice === 2) {
      navigate('/riddle3');
    } else {
      setEye(true);
      setShowDropdown(false);
      // Hide eye message after 2 seconds
      setTimeout(() => setEye(false), 2000);
    }
  };

  return (
    <div className="riddle-container">
      <header className="header">
        <h1>
          Riddle 
          <span 
            className="clickable-number" 
            onClick={() => setShowDropdown(!showDropdown)}
          >
            #1
          </span>
        </h1>
        
        {showDropdown && (
          <div className="dropdown">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num} 
                className="dropdown-item" 
                onClick={() => handleChoice(num)}
              >
                #{num}
              </div>
            ))}
          </div>
        )}
      </header>

      <div className="box-container">
        <p className="riddle-text">
          Riddle #1 again? <br /> 
          That can't be right...
        </p>
        
        {eye && (
          <span className="side-eye-riddle2">*bombastic side eye*</span>
        )}
      </div>
    </div>
  )
}

export default Riddle2;
