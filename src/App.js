import React from "react";


import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";




// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Nav/>
      <About />
      <Projects/>
      <Footer/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App;