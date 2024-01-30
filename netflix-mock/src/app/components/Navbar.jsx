"use client"
import React from "react";
import {useState, useEffect} from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import {browserRouter as Router} from 'react-router-dom';

const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    
      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

    return (
        <Router>
            <Container>
          <Navbar.Brand href="/">
          <img
                className="netflix-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                alt="Netflix"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          </Container>
        </Router>
    )
}

export default NavBar;