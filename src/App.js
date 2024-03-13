import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Celular from './pages/Celular';
import Notebook from './pages/Notebook';
import Computador from './pages/Computador';
import Tablet from './pages/Tablet';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/celular" element={<Celular />} />
        </Routes>
        <Routes>
          <Route path="/notebook" element={<Notebook />} />
        </Routes>
        <Routes>
          <Route path="/computador" element={<Computador />} />
        </Routes>
        <Routes>
          <Route path="/tablet" element={<Tablet />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
