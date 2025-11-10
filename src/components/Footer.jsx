import React from 'react'
import { FaHeart, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VK Funilaria</h3>
            <p>
              Especializada em reparos rápidos, funilaria e pintura automotiva. 
              Atendemos carros e motos com qualidade e agilidade desde 2025.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/vk_reparos_rapidos?igsh=MTlocHF6c2F1aGh0MA==" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
                <FaInstagram />
                <span>@vk_reparos_rapidos</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Horário</h3>
            <ul>
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>Ibiúna - SP</li>
              <li>(15) 99739-1629 - Vini</li>
              <li>(15) 99671-7940 - Kaylo</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} VK Funilaria - Reparos Rápidos. Todos os direitos reservados.
          </p>
          <p>
            Feito com <FaHeart className="heart-icon" /> para nossos clientes
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

