import type { ReactNode } from 'react'

interface Motivo {
  id: string
  title: string
  desc: string
  color: string
  icon: ReactNode
}

const ICON_PROPS = { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }

const MOTIVOS: Motivo[] = [
  {
    id: 'educacion',
    title: 'Acreditación internacional',
    desc: 'Modelo educativo respaldado por certificaciones que abren puertas dentro y fuera del país.',
    color: '#E4002B',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L4.5 12.5V16c0 2.21 3.36 4 7.5 4s7.5-1.79 7.5-4v-3.5L12 16.5z" />
      </svg>
    ),
  },
  {
    id: 'horarios',
    title: 'Horarios flexibles',
    desc: 'Presencial, semipresencial o virtual: tú eliges cómo y cuándo estudiar.',
    color: '#00BFA6',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.59V6h-2v7.41l5 5L17.41 17z" />
      </svg>
    ),
  },
  {
    id: 'empleabilidad',
    title: 'Empleabilidad garantizada',
    desc: 'Bolsa de trabajo, convenios y prácticas preprofesionales desde el primer ciclo.',
    color: '#4A90D9',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M20 6h-4V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
  {
    id: 'infraestructura',
    title: 'Infraestructura moderna',
    desc: 'Laboratorios y campus equipados con tecnología de punta en todas las sedes.',
    color: '#7B1FA2',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4 22V4a1 1 0 011-1h9a1 1 0 011 1v4h4a1 1 0 011 1v13h-8v-4h-2v4H4zm2-2h2v-2H6v2zm0-4h2v-2H6v2zm0-4h2V10H6v2zm0-4h2V6H6v2zm4 12h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V10h-2v2zm0-4h2V6h-2v2zm7 12h2v-2h-2v2zm0-4h2v-2h-2v2z" />
      </svg>
    ),
  },
  {
    id: 'becas',
    title: 'Becas y apoyo económico',
    desc: 'Programas de financiamiento y becas para que nada detenga tu formación.',
    color: '#F7941D',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 2C8 2 5 4.5 5 8c0 2.5 1.5 4 2 5v3a2 2 0 002 2h6a2 2 0 002-2v-3c.5-1 2-2.5 2-5 0-3.5-3-6-7-6zm-1 18h2v2h-2v-2z" />
      </svg>
    ),
  },
]

export default function Motivos() {
  return (
    <>
      <style>{`
        /* --- Rediseño (v2) de esta sección (Motivos): tiles de color --- */
        .motivos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 22px;
          margin-top: 50px;
          position: relative;
          z-index: 2;
        }

        .motivo-item {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          padding: 28px 24px 26px;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          color: #fff;
          box-shadow: 0 10px 26px rgba(0,0,0,0.14);
          transition: transform 0.35s, box-shadow 0.35s;
        }

        .motivo-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 38px rgba(0,0,0,0.22);
        }

        .motivo-item::before {
          content: attr(data-index);
          position: absolute;
          top: -18px;
          right: -6px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 6rem;
          line-height: 1;
          color: rgba(255,255,255,0.16);
          pointer-events: none;
        }

        .motivo-icon-wrap {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: auto;
        }

        .motivo-icon-wrap svg {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        .motivo-body {
          position: relative;
          z-index: 2;
          margin-top: 22px;
        }

        .motivo-body h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.28;
          margin-bottom: 8px;
        }

        .motivo-body p {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.55;
        }

        @media (max-width: 640px) {
          .motivos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="motivos-section">
        <div className="motivos-watermark">PARI</div>
        <div className="motivos-inner">
          <div className="motivos-header">
            <div className="motivos-title-row">
              <div className="motivos-title-accent"></div>
              <div className="motivos-title-content">
                <span className="motivos-number">5</span>
                <span className="motivos-title-text">
                  motivos por qué
                  <br />
                  estudiar en la PARI
                </span>
              </div>
            </div>
            <p className="motivos-desc">
              Con un modelo educativo práctico, convenios con empresas líderes y programas de empleabilidad, en la PARI
              te formamos para destacar profesionalmente.
            </p>
          </div>

          <div className="motivos-grid">
            {MOTIVOS.map((motivo, i) => (
              <div
                className="motivo-item"
                key={motivo.id}
                data-index={`0${i + 1}`}
                style={{ background: `linear-gradient(155deg, ${motivo.color} 0%, ${motivo.color}cc 100%)` }}
              >
                <div className="motivo-icon-wrap">{motivo.icon}</div>
                <div className="motivo-body">
                  <h3>{motivo.title}</h3>
                  <p>{motivo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}