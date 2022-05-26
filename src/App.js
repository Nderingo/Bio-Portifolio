import React from "react";


import Nav from "./components/Nav";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from "react"
import './App.css'



// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  // Set view to about on page load
  useEffect(() => {
    setView('about');
  }, []);

  // Hash URL will load via direct link
  const [ view, setView ] = useState(() => {
    return document.location.hash.slice(1);
  })

  return (
    <>
      <Nav view={view} setView={setView} />
      { view === "about" && <Bio /> }
      { view === "work" && <Projects /> }
      { view === "contact" && <Contact /> }
      <Footer />
    </>
  );
}

export default App;