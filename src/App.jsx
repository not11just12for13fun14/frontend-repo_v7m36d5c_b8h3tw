import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import BackgroundFX from './components/BackgroundFX';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
    </div>
  );
}

export default App;
