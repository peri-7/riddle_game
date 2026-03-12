import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/intro.css'

function Intro() {
	const navigate = useNavigate();
	const [conf, setConf] = useState(false);
	const [showEye, setShowEye] = useState(false);

	const handleNo = () => {
	setConf(true);
	setShowEye(true);
	setTimeout(() => setShowEye(false), 4000);
	};

	return (
	<>
	<div className="intro-container">
	  <header className="header">
	  	<h1>Welcome Welcome</h1>
	  </header>

	<div className="content-box">
	<p className="question">Do you like riddles</p>
	{ !conf ? (
	<div className="button-group">
	<button className="btn"
	onClick={()=> navigate('/riddle1') }>
	Yes
	</button>

	<button className="btn"
	onClick={handleNo}>
	No
	</button>
	</div>
	) : (
	<div className="button-group">
	<button className="btn" onClick={()=> navigate('/riddle1') }>
	Yes
	</button>
	<button className="btn" onClick={()=> navigate('/final') }>
	I 'm boring, go on
	</button>
	{showEye && <span className="side-eye">*bombastic side eye*</span>}
	</div>
	)}
    </div>
      </div>
    </>
  )
}

export default Intro
