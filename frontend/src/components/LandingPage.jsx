import React from 'react';
import Home from '../pages/Home Pages/Home.jsx';
import About from '../pages/About Pages/About.jsx';


const LandingPage = () => {
  return (
     <div>
      <section id="home" className="h-screen">
        <Home />
      </section>

      <section id="about" className="h-screen">
        <About />
      </section>
    </div>
  );
};

export default LandingPage;