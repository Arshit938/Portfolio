import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Navbar.css';


export const NavBar = () => {
  const [Activestate, setActivestate] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [Activelink, setActivelink] = useState('home')
  const onUpdateActiveLink = (value) => {
    setActivelink(value);
  }
  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    // window.addEventListener('scroll', onscroll);
    // 
    // return () => window.removeEventListener('scroll');

  }, [])


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu">
            <li className="nav-item">
              <a className={Activelink === 'home' ? "nav-link active" : "nav-link"} id={Activelink === 'home' ? "activated" : "deactivated"} aria-current="page" href="#home" onClick={() => onUpdateActiveLink('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={Activelink === 'skills' ? "nav-link active" : "nav-link"} id={Activelink === 'skills' ? "activated" : "deactivated"} href="#sh" onClick={() => onUpdateActiveLink('skills')}>skills</a>
            </li>
            <li className="nav-item">
              <a className={Activelink === 'projects' ? "nav-link active" : "nav-link"} id={Activelink === 'projects' ? "activated" : "deactivated"} href="#pro" onClick={() => onUpdateActiveLink('projects')}>Projects</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
