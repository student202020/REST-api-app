import './App.css';
import React from "react"
import Meni from "./Meni"
import Korpa from "./Korpa"
import Glavnimeni from "./Glavnimeni"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

 
  return (
    <Router>
      <Glavnimeni />

      <Routes>
          <Route path="/" element={<Meni />} /> 
          <Route path="/.Korpa" element={<Korpa />} /> 
          
      </Routes>
     
    </Router>
  );
}

export default App;
