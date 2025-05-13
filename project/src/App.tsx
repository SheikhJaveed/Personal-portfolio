import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
          <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;