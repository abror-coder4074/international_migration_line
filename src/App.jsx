import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import License from "./components/License";
import Team from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 
import Destinations from "./components/Destinations";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; 

  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <License />
        <Team />
        <Destinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
