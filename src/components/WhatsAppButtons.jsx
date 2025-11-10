import React, { useState } from 'react'
import { FaWhatsapp, FaTimes, FaComments } from 'react-icons/fa'
import './WhatsAppButtons.css'

const WhatsAppButtons = () => {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumbers = [
    {
      id: 1,
      name: 'Vini',
      number: '5515997391629',
      message: 'Olá! Gostaria de solicitar um orçamento na VK Funilaria.'
    },
    {
      id: 2,
      name: 'Kaylo',
      number: '5515996717940',
      message: 'Olá! Preciso de informações sobre os serviços da VK Funilaria.'
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const openWhatsApp = (number, message) => {
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${number}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <div className="whatsapp-widget">
      <div className={`whatsapp-menu ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-menu-header">
          <FaComments />
          <span>Escolha um atendente</span>
        </div>
        {whatsappNumbers.map((contact) => (
          <button
            key={contact.id}
            className="whatsapp-contact"
            onClick={() => openWhatsApp(contact.number, contact.message)}
          >
            <FaWhatsapp className="contact-icon" />
            <div className="contact-info">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-status">Online - Clique para conversar</span>
            </div>
          </button>
        ))}
      </div>

      <button className="whatsapp-button" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </button>
    </div>
  )
}

export default WhatsAppButtons

