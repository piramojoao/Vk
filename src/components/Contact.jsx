import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você e cuidar do seu veículo</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>Localização</h3>
                <p>Rua Adão Antônio Gonçalves, 689<br />Rio de Una de Baixo - Ibiúna - SP</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h3>WhatsApp</h3>
                <p>(15) 99739-1629 - Vini<br />(15) 99671-7940 - Kaylo</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-text">
                <h3>Horário de Funcionamento</h3>
                <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/vk_reparos_rapidos?igsh=MTlocHF6c2F1aGh0MA==" target="_blank" rel="noopener noreferrer" className="social-link" title="Siga no Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Rua+Ad%C3%A3o+Ant%C3%B4nio+Gon%C3%A7alves+689+Rio+de+Una+de+Baixo+Ibi%C3%BAna+SP&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VK Funilaria - Rua Adão Antônio Gonçalves, 689 - Ibiúna"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

