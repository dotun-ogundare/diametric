import React, { useState } from 'react';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent" id="gtco-main-nav">
      <div className="container">
        <a className="navbar-brand" href="/" style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '0'}}>
          <img src="/logo.png" alt="Diametrics Logo" style={{height: '55px', width: 'auto'}} />
          <div style={{display: 'flex', flexDirection: 'column', lineHeight: '0.85', gap: '6px'}}>
            <span style={{fontSize: '1.8rem', fontWeight: '900'}}>Diametrics</span>
            <span style={{fontSize: '1rem', fontWeight: '700', fontFamily: 'Arial, sans-serif', color: '#000000'}}>Engineering Ltd</span>
          </div>
        </a>
        <button 
          className={`navbar-toggler ${isNavOpen ? 'change' : ''}`} 
          data-target="#my-nav" 
          onClick={toggleNav} 
          data-toggle="collapse"
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
        <div id="my-nav" className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;