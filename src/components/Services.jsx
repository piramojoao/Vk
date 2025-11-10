import React from 'react'
import { FaCar, FaPaintBrush, FaWrench, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FaCar />,
      title: 'Funilaria Completa',
      description: 'Reparos em lataria de carros e motos, substituição de peças e restauração com qualidade garantida.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Pintura Automotiva',
      description: 'Pintura profissional com cabine de pintura, garantindo acabamento impecável e durabilidade.'
    },
    {
      icon: <FaWrench />,
      title: 'Martelinho de Ouro',
      description: 'Técnica especializada para remover amassados sem danificar a pintura original do veículo.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Polimento e Cristalização',
      description: 'Tratamento de pintura para renovar o brilho e proteger contra intempéries e riscos.'
    },
    {
      icon: <FaTools />,
      title: 'Restauração',
      description: 'Restauração completa de veículos antigos e clássicos, resgatando a beleza original.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Orçamento Gratuito',
      description: 'Avaliação detalhada e orçamento sem compromisso. Transparência e honestidade em primeiro lugar.'
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas para cuidar do seu veículo com excelência</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Precisa de um serviço específico?</h3>
          <p>Entre em contato conosco e teremos o prazer em atendê-lo!</p>
          <a href="#contato" className="btn btn-primary">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services

