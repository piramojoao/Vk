import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Array de imagens da galeria - você pode adicionar suas próprias imagens
  const galleryImages = [
    { id: 1, src: '/gallery/work1.jpg', alt: 'Trabalho 1', category: 'funilaria' },
    { id: 2, src: '/gallery/work2.jpg', alt: 'Trabalho 2', category: 'pintura' },
    { id: 3, src: '/gallery/work3.jpg', alt: 'Trabalho 3', category: 'restauracao' },
    { id: 4, src: '/gallery/work4.jpg', alt: 'Trabalho 4', category: 'funilaria' },
    { id: 5, src: '/gallery/work5.jpg', alt: 'Trabalho 5', category: 'pintura' },
    { id: 6, src: '/gallery/work6.jpg', alt: 'Trabalho 6', category: 'restauracao' }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Galeria de Trabalhos</h2>
          <p>Veja alguns dos nossos trabalhos realizados com excelência</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-text">Ver Imagem</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery

