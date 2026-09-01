import type { AlumnoCard } from '../types'

const ALUMNOS: AlumnoCard[] = [
  {
    id: 'carlos',
    name: 'Makanaky',
    quote: '"yo me pregunto y me pongo a pensar en k momento la kgue, si yo estaba volando.... volando.... volando... uhhhhhhhh volando en mi puto exito, oh siiiiii la puta famaa."',
    imageUrl: 'https://www.infobae.com/resizer/v2/UBX2PKBK3JHO7LTG4ZVCHGTPSU.jpg?auth=c04adef038a57874ef61d58f9599067102de2747d513fa1e6d90d9a6039ea712&smart=true&width=1200&height=1200&quality=85',
  },
  {
    id: 'gabriel',
    name: 'Chupetin Trujillo',
    quote: '"la que algun dia sea mi enamorada y vea este video k puedo hacer ps mamita chamba es chamba."',
    imageUrl: 'https://universidadsideralcarrion.com/storage/img/Invitados/chupetin_trujillo.png',
  },
  {
    id: 'jared',
    name: 'Cuto Guadalupe',
    quote: '"la fee la fee es lo mas lindo de la vida, tengo hambreeeeeeeeeeeeeeeeeeeeeeeeee ."',
    imageUrl: 'data:image/jpeg;base64,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 ',
  },
]

const CARD_COLORS = ['#E4002B', '#00BFA6', '#4A90D9']

export default function Alumnos() {
  return (
    <>
      <style>{`
        /* --- Rediseño de esta sección (Alumnos) --- */
        .alumnos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .alumno-card {
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.4s, box-shadow 0.4s;
          box-shadow: 0 6px 24px rgba(0,0,0,0.1);
          background: #f5f5f5;
        }

        .alumno-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .alumno-card-img {
          width: 100%;
          height: 420px;
          position: relative;
          overflow: hidden;
        }

        .alumno-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .alumno-card:hover .alumno-card-img img {
          transform: scale(1.05);
        }

        .alumno-card-top-fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 90px;
          background: linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%);
        }

        .alumno-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          z-index: 3;
        }

        .alumno-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 90px 24px 24px;
          background: linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, transparent 100%);
          color: #fff;
        }

        .alumno-card-overlay .quote-mark {
          width: 26px;
          height: 26px;
          margin-bottom: 6px;
          opacity: 0.8;
        }

        .alumno-card-overlay h3 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          margin-bottom: 4px;
        }

        .alumno-card-overlay .alumno-carrera {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255,255,255,0.18);
          margin-bottom: 12px;
        }

        .alumno-card-overlay .alumno-quote {
          font-size: 0.87rem;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          font-style: italic;
        }

        .alumno-PARI-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 0.7rem;
          padding: 6px 12px;
          border-radius: 6px;
          letter-spacing: 1px;
          z-index: 3;
        }

        .alumno-action {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          transition: background 0.3s;
        }

        .alumno-action:hover {
          background: rgba(228, 0, 43, 0.85);
        }

        .alumno-action svg {
          width: 18px;
          height: 18px;
          fill: #fff;
        }

        @media (max-width: 1024px) {
          .alumnos-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .alumnos-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
          .alumno-card-img { height: 380px; }
        }
      `}</style>

      <section className="alumnos-section">
        <div className="alumnos-inner">
          <div className="alumnos-title-row">
            <div className="alumnos-accent"></div>
            <h2>Nuestros alumnos destacados</h2>
          </div>
          <p className="alumnos-desc">
            Conoce a quienes están construyendo su futuro profesional con nosotros. Talento, esfuerzo y la formación
            PARI que marca la diferencia.
          </p>

          <div className="alumnos-grid">
            {ALUMNOS.map((alumno, i) => {
              const color = CARD_COLORS[i % CARD_COLORS.length]
              return (
                <div className="alumno-card" key={alumno.id}>
                  <div className="alumno-accent-bar" style={{ background: color }}></div>
                  <div className="alumno-PARI-badge" style={{ background: color }}>
                    PARI
                  </div>
                  <div className="alumno-action">
                    <svg viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </div>
                  <div className="alumno-card-img">
                    <img src={alumno.imageUrl} alt={alumno.name} loading="lazy" />
                    <div className="alumno-card-top-fade"></div>
                    <div className="alumno-card-overlay">
                      <svg className="quote-mark" viewBox="0 0 24 24" fill={color}>
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4V3h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983V3h9.983z" />
                      </svg>
                      <h3>{alumno.name}</h3>
                      <span className="alumno-carrera">Estudiante DE PARI</span>
                      <p className="alumno-quote">"{alumno.quote}"</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}