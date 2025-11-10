import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Array de banners - você pode adicionar os banners personalizados aqui
  const banners = [
    {
      id: 1,
      image: '/banners/banner1.jpg',
      title: 'VK Funilaria',
      subtitle: 'Reparos Rápidos e Profissionais para seu Veículo'
    },
    {
      id: 2,
      image: '/banners/banner2.jpg',
      title: 'Pintura Automotiva',
      subtitle: 'Acabamento perfeito com equipamentos de última geração'
    },
    {
      id: 3,
      image: '/banners/banner3.jpg',
      title: 'Qualidade Garantida',
      subtitle: 'Atendimento especializado desde 2025'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">{banner.title}</h1>
                <p className="hero-subtitle">{banner.subtitle}</p>
                <div className="hero-buttons">
                  <a href="#servicos" className="btn btn-primary">
                    Nossos Serviços
                  </a>
                  <a href="#contato" className="btn btn-secondary">
                    Faça um Orçamento
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="slider-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="slider-dots">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

