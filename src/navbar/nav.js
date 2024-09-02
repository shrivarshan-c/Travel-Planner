import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';


import './nav.css';

function Navbar() {
  function handleSignup() {
    window.location.href = '/signup';
  }

  function handleLogin() {
    window.location.href = '/login';
  }

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <a className="navbar-brand" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active mx-2" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#destination">DESTINATION</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#spots">SPOTS</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#features">FEATURES</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#review">REVIEW</a>
            </li>
          </ul>
          <div className="login-signup d-flex align-items-center">
            <button onClick={handleSignup} className="signup-butox">Signup</button>
            <button onClick={handleLogin} className="login-butox">Login</button>

          </div>
        </div>
      </div>
    </nav>
  );
}

function MainSection() {
  return (
    <main className="texts">
      <section className="d-flex flex-column justify-content-center align-items-center text-white fs-1">
        <h1 className="its">IT'S TIME TO</h1>
        <h1 className="adv">ADVENTURE</h1>
        <p className="par">Welcome to our South India guide! Explore stunning landscapes, vibrant cities, and rich culture. Discover <br/> top spots and create lasting memories.</p>
        <button className="discover123">Discover destination</button>
      </section>
    </main>
  );
}

function Nav() {
   const location = useLocation();
  return (
    <div className="background-image" style={{ backgroundImage: 'url(./image\ 4.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }}>
     <Navbar />
      {location.pathname !== '/signup' &&  location.pathname !== '/login' &&  ( // Check if not on signup route
        <>
          <MainSection />  
       
        </>
      )}
    </div>
  );
}

export default Nav;