


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

const Nav = () => {
  return (
    <header className="love-coding">
      <div className="links">
        <nav className="navbar">
        <a href="#about" className="mr-5 hover:text-white">
            Home
          </a>
          <a href="#Projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#CV" className="mr-5 hover:text-white">
            Curriculum Vitae
          </a>
          <a
          href="#footer"
        >
          Let's Connect!
        </a>
        </nav>
        
      </div>
    </header>
  );
}

export default Nav;

