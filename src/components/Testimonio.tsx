import { useRef, useState } from 'react'

const SQUARE_POSITIONS = [
  { w: 18, h: 18, top: 20, left: 60 }, { w: 14, h: 14, top: 25, left: 85 },
  { w: 20, h: 20, top: 15, left: 110 }, { w: 12, h: 12, top: 22, left: 140 },
  { w: 16, h: 16, top: 18, left: 165 }, { w: 18, h: 18, top: 10, left: 200 },
  { w: 14, h: 14, top: 30, left: 230 }, { w: 20, h: 20, top: 12, left: 260 },
  { w: 16, h: 16, top: 24, left: 300 }, { w: 12, h: 12, top: 14, left: 340, red: true },
  { w: 18, h: 18, top: 20, left: 375 }, { w: 14, h: 14, top: 28, left: 410 },
  { w: 16, h: 16, top: 48, left: 70, red: true }, { w: 20, h: 20, top: 44, left: 100 },
  { w: 14, h: 14, top: 50, left: 135 }, { w: 18, h: 18, top: 42, left: 170, red: true },
  { w: 12, h: 12, top: 52, left: 210 }, { w: 20, h: 20, top: 40, left: 250 },
  { w: 16, h: 16, top: 48, left: 290, red: true }, { w: 14, h: 14, top: 44, left: 330 },
]

export default function Testimonio() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (playing) {
      video.pause()
      setPlaying(false)
    } else {
      video.muted = false
      video.play()
      setPlaying(true)
    }
  }

  return (
    <>
      <style>{`
        /* --- Rediseño de esta sección (Testimonio) --- */
        .testimonio-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 7px 14px;
          border-radius: 30px;
          margin-bottom: 18px;
        }

        .testimonio-label .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00BFA6;
        }

        .testimonio-title-bar h2 {
          font-size: 2.15rem;
        }

        .testimonio-quote-mark {
          font-family: Georgia, serif;
          font-size: 4rem;
          line-height: 1;
          color: rgba(255,255,255,0.18);
          margin-bottom: -18px;
        }

        .testimonio-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          background: #fff;
          color: #C8102E;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          padding: 14px 26px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        .testimonio-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0,0,0,0.28);
        }

        .testimonio-cta svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        .testimonio-right {
          position: relative;
        }

        .phone-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(0,191,166,0.35) 0%, transparent 70%);
          filter: blur(20px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }

        .phone-mockup {
          position: relative;
          z-index: 1;
          border: 2px solid rgba(255,255,255,0.08);
          transition: transform 0.4s;
        }

        .phone-mockup:hover {
          transform: rotate(0deg) scale(1.015);
        }

        .side-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0,0,0,0.28);
          backdrop-filter: blur(2px);
          transition: background 0.25s, transform 0.25s;
        }

        .side-icon:hover {
          background: rgba(228,0,43,0.55);
          transform: scale(1.08);
        }

        .side-icon svg {
          width: 20px;
          height: 20px;
        }
      `}</style>

      <section className="testimonio-section">
      <div className="testimonio-pattern"></div>
      <div className="testimonio-squares">
        {SQUARE_POSITIONS.map((sq, i) => (
          <div
            className="sq"
            key={i}
            style={{
              width: sq.w,
              height: sq.h,
              top: sq.top,
              left: sq.left,
              background: sq.red ? 'rgba(190,10,25,0.5)' : undefined,
            }}
          ></div>
        ))}
      </div>

      <div className="testimonio-inner">
        <div className="testimonio-left">
          <div className="testimonio-label">
            <span className="dot"></span>
            Historia real
          </div>
          <div className="testimonio-quote-mark">"</div>
          <div className="testimonio-title-bar">
            <div className="testimonio-accent"></div>
            <h2>Una decisión que cambió su vida y la de muchos</h2>
          </div>
          <p className="testimonio-desc">
            Comprometida con mejorar la educación, PARI destacó como estudiante de Psicología de Especiales . Su esfuerzo y visión
            la llevaron a vivir una experiencia académica internacional en una de las universidades más prestigiosas
            del mundo. ¡Su experiencia puede ser el inicio de la tuya!
          </p>
          <button className="testimonio-cta" type="button">
            Conoce más historias como esta
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </button>
        </div>

        <div className="testimonio-right">
          <div className="phone-glow"></div>
          <div className="phone-mockup">
            <div className="phone-notch"></div>
            <div className="phone-screen" onClick={() => playing && togglePlay()}>
              <div className="phone-video-bg">
                <video ref={videoRef} src="/video.mp4" playsInline loop muted />
              </div>

              <div
                className="phone-play"
                style={{ opacity: playing ? 0 : 1 }}
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              ></div>

              <div className="phone-side-icons">
                <div>
                  <div className="side-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div className="side-icon-count">2.4K</div>
                </div>
                <div>
                  <div className="side-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                    </svg>
                  </div>
                  <div className="side-icon-count">328</div>
                </div>
                <div>
                  <div className="side-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                    </svg>
                  </div>
                  <div className="side-icon-count">512</div>
                </div>
                <div>
                  <div className="side-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                  </div>
                  <div className="side-icon-count">89</div>
                </div>
              </div>

              <div className="phone-info">
                <div className="phone-name">JESUS LUJAN CARRION</div>
                <div className="phone-role">Egresada de psicología de Especiales</div>
                <div className="phone-quote">
                  "En la universidad me interesé por mejorar la educación de jóvenes y adultos. Por ello busqué
                  oportunidades de trabajo..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}