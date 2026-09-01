import { useState } from 'react'
import type { CarreraIcon } from '../types'

const CARRERAS: CarreraIcon[] = [
  { id: 'ingenieria', label: 'Ingeniería', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' },
  { id: 'gestion', label: 'Gestión y Negocios', path: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' },
  { id: 'derecho', label: 'Derecho y Ciencias Sociales', path: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
  { id: 'humanidades', label: 'Humanidades', path: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' },
  { id: 'comunicaciones', label: 'Comunicaciones', path: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z' },
  { id: 'salud', label: 'Ciencias de la Salud', path: 'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z' },
  { id: 'arquitectura', label: 'Arquitectura y Diseño', path: 'M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z' },
  { id: 'empresariales', label: 'Ciencias Empresariales', path: 'M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11z' },
  { id: 'psicologia', label: 'Psicología', path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
]

export default function CarrerasBar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <>
      <div className="carreras-bar-label">
        <p>Conoce nuestras carreras en:</p>
      </div>

      <div className="carreras-bar">
        <div className="carreras-icons">
          {CARRERAS.map((carrera) => (
            <div
              className="carrera-icon-item"
              key={carrera.id}
              onMouseEnter={() => setHoveredId(carrera.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`carrera-icon-circle${hoveredId === carrera.id ? ' hovered' : ''}`}>
                <svg viewBox="0 0 24 24">
                  <path d={carrera.path} />
                </svg>
              </div>
              <span>{carrera.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
