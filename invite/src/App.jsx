import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Intro from './pages/intro.jsx'
import Riddle1 from './pages/riddle1.jsx'
import Riddle2 from './pages/riddle2.jsx'
import Riddle3 from './pages/riddle3.jsx'
import Riddle4 from './pages/riddle4.jsx'
import Final from './pages/final.jsx'


function App() {

  return (
    <>
      <div>

	  <Routes>
	  	<Route path="/" element={<Intro />} />
      <Route path="/riddle1" element={<Riddle1 />} />
      <Route path="/riddle2" element={<Riddle2 />} />
      <Route path="/riddle3" element={<Riddle3 />} />
      <Route path="/riddle4" element={<Riddle4 />} />
      <Route path="/final" element={<Final />} />
	  </Routes>

	</div>
    </>
  )
}

export default App
