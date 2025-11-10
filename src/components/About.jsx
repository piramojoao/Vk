import React from 'react'
import { FaAward, FaUsers, FaClock, FaThumbsUp } from 'react-icons/fa'
import './About.css'

const About = () => {
  const stats = [
    { icon: <FaClock />, number: '2025', label: 'Fundada em' },
    { icon: <FaUsers />, number: '100+', label: 'Clientes Satisfeitos' },
    { icon: <FaAward />, number: '100%', label: 'Qualidade Garantida' },
    { icon: <FaThumbsUp />, number: '5★', label: 'Avaliação' }
  ]

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content-full">
          <div className="about-text-full">
            <div className="section-title" style={{ textAlign: 'center' }}>
              <h2>Sobre Nós</h2>
              <p>Excelência em serviços automotivos</p>
            </div>

            <div className="about-description">
              <p>
                A VK Funilaria é especializada em reparos rápidos e serviços de funilaria 
                e pintura automotiva. Nossa equipe altamente qualificada utiliza as 
                melhores técnicas e equipamentos modernos para garantir resultados 
                excepcionais em cada serviço.
              </p>
              <p>
                Trabalhamos com dedicação e comprometimento em cada projeto, desde 
                pequenos reparos até restaurações completas. Nosso objetivo é devolver 
                seu veículo com a qualidade e aparência que você merece, sempre com 
                agilidade e profissionalismo.
              </p>
              <p>
                Atendemos todas as marcas e modelos de carros e motos, sempre com 
                transparência no orçamento e prazo de entrega. Sua satisfação é nossa 
                prioridade!
              </p>
            </div>

            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Profissionais Certificados</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Equipamentos de Última Geração</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Garantia de Qualidade</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Atendimento Personalizado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

