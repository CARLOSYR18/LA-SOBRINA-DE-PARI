import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Modalidades de estudio', hasArrow: true },
  { label: 'Carreras', hasArrow: true },
  { label: 'Admisión', hasArrow: true },
  { label: 'Vida PARI', hasArrow: true },
  { label: 'Campus', hasArrow: true },
  { label: 'Postgrado', hasArrow: false },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-utp">
          <div className="logo-utp-box">PARI</div>
          <div className="logo-utp-text">
            Universidad
            <br />
            Jesús Luján
            <br />
            Carrión
          </div>
        </div>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.label}
              {item.hasArrow && <span className="arrow">▼</span>}
            </div>
          ))}
        </div>
      </nav>

      <div className="header-accesos">
        Accesos
        <br />
        universitarios
        <span className="arrow">▼</span>
      </div>
    </header>
  )
}