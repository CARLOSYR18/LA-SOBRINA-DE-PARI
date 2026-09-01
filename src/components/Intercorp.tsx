type Programa = {
  id: string
  facultad: string
  titulo: string
  descripcion: string
  duracion: string
  tono: 'ingenieria' | 'salud' | 'finanzas' | 'negocios' | 'gastronomia' | 'humanas'
  icon: JSX.Element
}

const iconProps = { width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

const IconWrench = (
  <svg {...iconProps}><path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" /></svg>
)
const IconHeartPulse = (
  <svg {...iconProps}><path d="M3.5 12h4l2-4 3 8 2-5h6" /><path d="M12 20.5s-7-4.4-9-8.6C1.4 8.3 3 5 6.2 5c1.9 0 3.2 1 3.8 2 .6-1 1.9-2 3.8-2 3.2 0 4.8 3.3 3.2 6.9-2 4.2-9 8.6-9 8.6Z" /></svg>
)
const IconLandmark = (
  <svg {...iconProps}><path d="M3 21h18" /><path d="M5 21V10M10 21V10M14 21V10M19 21V10" /><path d="M2 10l10-6 10 6" /></svg>
)
const IconBriefcase = (
  <svg {...iconProps}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
)
const IconChefHat = (
  <svg {...iconProps}><path d="M6 18.5V13a4.5 4.5 0 0 1 3-4.2 4 4 0 0 1 7.8-1.6A4 4 0 0 1 21 11a4.5 4.5 0 0 1-3 4.2v3.3" /><path d="M6 18.5h12M6 21h12" /></svg>
)
const IconUsers = (
  <svg {...iconProps}><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c.6-3.4 3-5.4 6.5-5.4s5.9 2 6.5 5.4" /><circle cx="17" cy="9" r="2.6" /><path d="M15.8 14.8c2.6.3 4.3 2.1 4.7 4.6" /></svg>
)
const IconClock = (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
)

const PROGRAMAS: Programa[] = [
  {
    id: 'ingenieria-industrial',
    facultad: 'Facultad de Ingeniería',
    titulo: 'Ingeniería Industrial',
    descripcion: 'Optimiza procesos productivos y de calidad para hacer más eficiente la industria peruana.',
    duracion: '6 semestres',
    icon: IconWrench,
    tono: 'ingenieria',
  },
  {
    id: 'enfermeria-tecnica',
    facultad: 'Facultad de Ciencias de la Salud',
    titulo: 'Enfermería Técnica',
    descripcion: 'Fórmate para brindar cuidado y atención de calidad dentro del sistema de salud.',
    duracion: '6 semestres',
    icon: IconHeartPulse,
    tono: 'salud',
  },
  {
    id: 'banca-finanzas',
    facultad: 'Facultad de Economía y Finanzas',
    titulo: 'Administración Bancaria y Finanzas',
    descripcion: 'Desarrolla habilidades en análisis financiero, evaluación crediticia y gestión de productos bancarios.',
    duracion: '6 semestres',
    icon: IconLandmark,
    tono: 'finanzas',
  },
  {
    id: 'administracion-empresas',
    facultad: 'Facultad de Economía y Negocios',
    titulo: 'Administración de Empresas',
    descripcion: 'Desarrolla habilidades directivas, liderazgo y gestión para crear y dirigir organizaciones competitivas.',
    duracion: '6 semestres',
    icon: IconBriefcase,
    tono: 'negocios',
  },
  {
    id: 'gastronomia',
    facultad: 'Facultad de Gastronomía e Innovación',
    titulo: 'Gastronomía y Arte Culinario',
    descripcion: 'Aprende técnicas de cocina y panificación avanzada, combinando precisión, higiene y creatividad.',
    duracion: '6 semestres',
    icon: IconChefHat,
    tono: 'gastronomia',
  },
  {
    id: 'psicologia-organizacional',
    facultad: 'Facultad de Ciencias Humanas',
    titulo: 'Psicología Organizacional',
    descripcion: 'Comprende el comportamiento humano y promueve el bienestar y el desarrollo dentro de las organizaciones.',
    duracion: '6 semestres',
    icon: IconUsers,
    tono: 'humanas',
  },
]

export default function InformacionAcademica() {
  return (
    <section className="ia-section">
      <style>{`
        .ia-section {
          background: #f6f8fc;
          padding: 72px 24px;
          font-family: 'Inter', sans-serif;
        }

        .ia-header {
          max-width: 640px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .ia-header h2 {
          font-family: 'Sora', sans-serif;
          font-weight: 800;
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          color: #12172b;
          margin: 0 0 12px;
          letter-spacing: -0.01em;
        }

        .ia-header p {
          font-size: 1rem;
          line-height: 1.6;
          color: #5b6478;
          margin: 0;
        }

        .ia-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .ia-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 620px) {
          .ia-grid { grid-template-columns: 1fr; }
        }

        .ia-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 1px 2px rgba(18, 23, 43, 0.06);
          border: 1px solid #ebeef5;
          display: flex;
          flex-direction: column;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .ia-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(18, 23, 43, 0.08);
        }

        .ia-card-visual {
          position: relative;
          height: 148px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .ia-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(4px);
          padding: 4px 10px;
          border-radius: 999px;
        }

        /* Color por facultad: el tono codifica el área de estudio en toda la sección */
        .ia-card--ingenieria .ia-card-visual { background: linear-gradient(135deg, #2451e0, #4f7dfa); }
        .ia-card--salud .ia-card-visual { background: linear-gradient(135deg, #0e9f6e, #34d399); }
        .ia-card--finanzas .ia-card-visual { background: linear-gradient(135deg, #b7791f, #f0b429); }
        .ia-card--negocios .ia-card-visual { background: linear-gradient(135deg, #4c3aad, #7c5cff); }
        .ia-card--gastronomia .ia-card-visual { background: linear-gradient(135deg, #d1451f, #ff7a4a); }
        .ia-card--humanas .ia-card-visual { background: linear-gradient(135deg, #c02a72, #f472b6); }

        .ia-card-body {
          padding: 20px 20px 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ia-facultad {
          font-weight: 600;
          font-size: 0.75rem;
          color: #2451e0;
          margin-bottom: 8px;
        }

        .ia-card-body h3 {
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #12172b;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .ia-card-body p {
          font-size: 0.875rem;
          line-height: 1.55;
          color: #5b6478;
          margin: 0;
          flex: 1;
        }

        .ia-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid #ebeef5;
        }

        .ia-duracion {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.72rem;
          color: #5b6478;
        }

        .ia-cta {
          font-weight: 600;
          font-size: 0.8rem;
          color: #2451e0;
          background: #eef2ff;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .ia-cta:hover {
          background: #dde6ff;
        }
      `}</style>

      <div className="ia-header">
        <h2>Información Académica y Programas</h2>
        <p>
          Descubre nuestra amplia oferta académica, diseñada para impulsar tu desarrollo
          profesional en diversos campos del conocimiento.
        </p>
      </div>

      <div className="ia-grid">
        {PROGRAMAS.map((programa) => (
          <article className={`ia-card ia-card--${programa.tono}`} key={programa.id}>
            <div className="ia-card-visual">
              <span className="ia-badge">Destacado</span>
              {programa.icon}
            </div>

            <div className="ia-card-body">
              <span className="ia-facultad">{programa.facultad}</span>
              <h3>{programa.titulo}</h3>
              <p>{programa.descripcion}</p>

              <div className="ia-card-footer">
                <span className="ia-duracion">
                  {IconClock}
                  Duración {programa.duracion}
                </span>
                <button type="button" className="ia-cta">
                  Ver más
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
