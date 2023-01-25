import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';



function App() {
  return <BrowserRouter>
  <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
{/*En cas d'erreur de déclaration de page */}
<Route path="*" element={<Home />} />
 </Routes>
  </BrowserRouter>
}

export default App;

