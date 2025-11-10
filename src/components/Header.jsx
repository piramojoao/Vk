import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaClock } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-item">
              <FaClock />
              <span>Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
            </div>
            <div className="top-bar-item">
              <FaPhone />
              <span>Entre em contato!</span>
            </div>
          </div>
        </div>
      </div>
      
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <img src="/logo.jpg" alt="VK Funilaria - Reparos Rápidos" className="logo-img" />
            </div>

            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#home" className="nav-link" onClick={closeMobileMenu}>
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#servicos" className="nav-link" onClick={closeMobileMenu}>
                  Serviços
                </a>
              </li>
              <li className="nav-item">
                <a href="#sobre" className="nav-link" onClick={closeMobileMenu}>
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a href="#galeria" className="nav-link" onClick={closeMobileMenu}>
                  Galeria
                </a>
              </li>
              <li className="nav-item">
                <a href="#contato" className="nav-link" onClick={closeMobileMenu}>
                  Contato
                </a>
              </li>
            </ul>

            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

