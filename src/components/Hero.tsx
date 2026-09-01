import { useCallback, useEffect, useRef, useState } from 'react'

// Reemplaza estas URLs por tus propias fotos.
// Opción A: pon tus imágenes en /public/hero/ y usa rutas tipo '/hero/foto1.jpg'
// Opción B: deja URLs externas como estas de ejemplo.
const SLIDES = [
  { src: 'https://i.postimg.cc/FKyty01q/image.png', alt: 'Estudiantes UTP en campus' },
  { src: 'https://i.postimg.cc/52tqqJ0Z/image.png', alt: 'Clase presencial UTP' },
  { src: 'https://i.postimg.cc/65n8GmtL/image.png', alt: 'Laboratorio UTP' },
]
const AUTOPLAY_MS = 5000

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const pauseAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  return (
    <section className="hero">
      <div className="hero-carousel" onMouseEnter={pauseAutoplay}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <button className="hero-arrow left" onClick={prev} aria-label="Foto anterior">
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="hero-arrow right" onClick={next} aria-label="Foto siguiente">
        <svg viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </button>

      <div className="hero-dots">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la foto ${i + 1}`}
          ></button>
        ))}
      </div>

      <div className="hero-cta-box">
        <div className="cta-red">
          <h2>
            SER
            <br />
            SIEMPRE
            <br />
            EMPLEABLE
          </h2>
        </div>
        <div className="cta-white">
          <p>
            Es aprender a crear
            <br />
            tu marca personal
            <br />y profesional.
          </p>
        </div>
      </div>
    </section>
  )
}
