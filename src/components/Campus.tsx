import { useRef, useState } from 'react'
import type { CampusItem } from '../types'

const CAMPUSES: CampusItem[] = [
  { id: 'lima-centro', name: 'Lima Centro', address: 'Jr. Hernán Velarde 289, Lima', colorMain: '#7a8a9a', colorWindow: '#a8d8ea' },
  { id: 'lima-norte', name: 'Lima Norte', address: 'Av. Alfredo Mendiola 6377, Los Olivos', colorMain: '#5a8aaa', colorWindow: '#a8d8ea' },
  { id: 'lima-sur', name: 'Lima Sur', address: 'Carretera Panamericana Sur Km16, Villa El Salvador', colorMain: '#5080a0', colorWindow: '#88c8e8' },
  { id: 'lima-este', name: 'Lima Este - Ate', address: 'Carretera Central Km 11.6, Ate', colorMain: '#6090b0', colorWindow: '#90c8e0' },
  { id: 'arequipa', name: 'Arequipa', address: 'Av. Tacna y Arica 160, Arequipa', colorMain: '#708898', colorWindow: '#a0d0e8' },
  { id: 'chiclayo', name: 'Chiclayo', address: 'Av. José Leonardo Ortiz, Chiclayo', colorMain: '#5a88a8', colorWindow: '#88c0e0' },
  { id: 'trujillo', name: 'Trujillo', address: 'Av. Mansiche, Trujillo', colorMain: '#5888a0', colorWindow: '#90c0d8' },
  { id: 'piura', name: 'Piura', address: 'Av. Vice Cdra 1, Piura', colorMain: '#5898b8', colorWindow: '#88c8e8' },
  { id: 'iquitos', name: 'Iquitos', address: 'Av. José A. Quiñones, Iquitos', colorMain: '#6090a8', colorWindow: '#90c8e0' },
  { id: 'huancayo', name: 'Huancayo', address: 'Av. Circunvalación 449, Huancayo', colorMain: '#5878a0', colorWindow: '#88b8d8' },
]

const CARD_WIDTH = 404

export default function Campus() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollBy = (dir: number) => {
    carouselRef.current?.scrollBy({ left: dir * CARD_WIDTH, behavior: 'smooth' })
  }

  const scrollToCard = (index: number) => {
    carouselRef.current?.scrollTo({ left: index * CARD_WIDTH, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!carouselRef.current) return
    const idx = Math.round(carouselRef.current.scrollLeft / CARD_WIDTH)
    setActiveIndex(idx)
  }

  return (
    <>
      <style>{`
        /* --- Rediseño de esta sección (Campus) --- */
        .campus-top {
          margin-bottom: 44px;
        }

        .btn-ubica {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .campus-card {
          border-radius: 18px;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          transition: transform 0.35s, box-shadow 0.35s;
        }

        .campus-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 34px rgba(0,0,0,0.18);
        }

        .campus-card-img {
          background: #eef3f7;
        }

        .campus-card-img img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .campus-card:hover .campus-card-img img {
          transform: scale(1.06);
        }

        .campus-pin-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.94);
          padding: 6px 10px 6px 6px;
          border-radius: 30px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.15);
        }

        .campus-pin-badge .pin-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #E4002B;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 0.6rem;
          letter-spacing: 0.5px;
        }

        .campus-pin-badge span {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          color: #1a1a1a;
        }

        .campus-card-overlay {
          padding: 70px 22px 22px;
          background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 55%, transparent 100%);
        }

        .campus-card-overlay .overlay-accent {
          width: 30px;
          height: 3px;
          background: #E4002B;
          border-radius: 2px;
          margin-bottom: 8px;
        }

        .campus-card-overlay h3 {
          font-size: 1.3rem;
        }

        .campus-card-overlay p {
          display: flex;
          align-items: flex-start;
          gap: 5px;
        }

        .campus-card-overlay p svg {
          width: 13px;
          height: 13px;
          fill: rgba(255,255,255,0.7);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .campus-card-overlay a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.5);
          padding-bottom: 2px;
          transition: color 0.25s, border-color 0.25s, gap 0.25s;
        }

        .campus-card-overlay a:hover {
          border-color: #E4002B;
          gap: 8px;
        }

        .campus-card-overlay a svg {
          width: 12px;
          height: 12px;
          fill: currentColor;
        }

        .carousel-arrow {
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }

        .carousel-arrow svg {
          width: 22px;
          height: 22px;
        }

        .carousel-arrow.left { left: -6px; }
        .carousel-arrow.right { right: -6px; }

        .campus-dot {
          width: 9px;
          border-radius: 5px;
        }

        .campus-dot.active {
          width: 26px;
        }
      `}</style>

      <section className="campus-section">
      <div className="campus-top">
        <div>
          <div className="campus-title-group">
            <div className="campus-title-accent"></div>
            <h2>Estudia desde donde estés</h2>
          </div>
          <p className="campus-subtitle">15 campus a nivel nacional o modalidad 100% virtual.</p>
        </div>
        <button className="btn-ubica">Ubica cada campus</button>
      </div>

      <div className="campus-carousel-wrapper">
        <button className="carousel-arrow left" onClick={() => scrollBy(-1)} aria-label="Anterior">
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="campus-carousel" ref={carouselRef} onScroll={handleScroll}>
          {CAMPUSES.map((campus) => (
            <div className="campus-card" key={campus.id}>
              <div className="campus-card-img">
                <img
                  src={`https://picsum.photos/seed/${campus.id}/700/600`}
                  alt={`Campus ${campus.name}`}
                  loading="lazy"
                />

                <div className="campus-pin-badge">
                  <span className="pin-logo">PARI</span>
                  <span>Campus</span>
                </div>

                <div className="campus-card-overlay">
                  <div className="overlay-accent"></div>
                  <h3>{campus.name}</h3>
                  <p>
                    <svg viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                    </svg>
                    {campus.address}
                  </p>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Ver ubicación
                    <svg viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow right" onClick={() => scrollBy(1)} aria-label="Siguiente">
          <svg viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>

      <div className="campus-dots">
        {CAMPUSES.map((campus, i) => (
          <button
            key={campus.id}
            className={`campus-dot${i === activeIndex ? ' active' : ''}`}
            onClick={() => scrollToCard(i)}
            aria-label={`Ir a ${campus.name}`}
          ></button>
        ))}
      </div>
    </section>
    </>
  )
}