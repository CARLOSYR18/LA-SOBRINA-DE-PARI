import { useState } from 'react'
import type { Modalidad } from '../types'

interface ScheduleBlock {
  active: boolean
  isNight?: boolean
}

interface ScheduleItem {
  title: string
  description: string
  calColor: string
  blocks: ScheduleBlock[]
}

const SCHEDULES: Record<Modalidad, ScheduleItem[]> = {
  presencial: [
    {
      title: 'Presencial Día',
      description: 'Lunes a sábado de 8:00 am a 6:00 pm',
      calColor: '#E4002B',
      blocks: [true, true, true, true, true, false, false].map((active) => ({ active })),
    },
    {
      title: 'Presencial noche',
      description: 'Lunes a viernes de 6:30 pm a 10:30 pm\nSábados de 2:00 pm a 10:30 pm',
      calColor: '#E4002B',
      blocks: [true, true, true, true, true, false, false].map((active) => ({ active, isNight: active })),
    },
  ],
  semipresencial: [
    {
      title: 'Semipresencial Día',
      description: 'Clases virtuales de lunes a viernes\nLaboratorios presenciales los sábados de 8:00 am a 1:00 pm',
      calColor: '#7B1FA2',
      blocks: [
        { active: true }, { active: true }, { active: true }, { active: true }, { active: true },
        { active: true }, { active: false },
      ],
    },
    {
      title: 'Semipresencial Noche',
      description: 'Clases virtuales de lunes a viernes de 7:00 pm a 10:00 pm\nLaboratorios presenciales los sábados de 2:00 pm a 7:00 pm',
      calColor: '#7B1FA2',
      blocks: [
        { active: true, isNight: true }, { active: true, isNight: true }, { active: true, isNight: true },
        { active: true, isNight: true }, { active: true, isNight: true }, { active: true }, { active: false },
      ],
    },
  ],
  virtual: [
    {
      title: 'Virtual Día',
      description: 'Lunes a viernes de 8:00 am a 6:00 pm\nTodas las clases quedan grabadas',
      calColor: '#4A90D9',
      blocks: [true, true, true, true, true, false, false].map((active) => ({ active })),
    },
    {
      title: 'Virtual Noche',
      description: 'Lunes a viernes de 7:00 pm a 10:30 pm\nSábados de 2:00 pm a 6:00 pm\nTodas las clases quedan grabadas',
      calColor: '#4A90D9',
      blocks: [
        { active: true, isNight: true }, { active: true, isNight: true }, { active: true, isNight: true },
        { active: true, isNight: true }, { active: true, isNight: true }, { active: true }, { active: false },
      ],
    },
  ],
}

function MiniCalendar({ color, blocks }: { color: string; blocks: ScheduleBlock[] }) {
  const days = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']
  return (
    <div className="mini-calendar">
      <div className="cal-spiral">
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>
      <div className="cal-top-bar" style={{ background: color }}></div>
      <div className="cal-grid">
        <div className="cal-days">
          {days.map((d, i) => (
            <span key={d} className={i >= 5 ? 'weekend' : ''}>
              {d}
            </span>
          ))}
        </div>
        <div className="cal-blocks">
          {blocks.map((block, i) => {
            if (!block.active) return <div className="cal-block inactive" key={i}></div>
            if (block.isNight) return <div className="cal-block active-moon" key={i}></div>
            return <div className="cal-block" style={{ background: color }} key={i}></div>
          })}
        </div>
      </div>
    </div>
  )
}

const ICONS: Record<Modalidad, JSX.Element> = {
  presencial: (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="8" width="20" height="40" rx="2" fill="#4A90D9" />
      <rect x="16" y="12" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="24" y="12" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="16" y="20" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="24" y="20" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="16" y="28" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="24" y="28" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="16" y="36" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="24" y="36" width="5" height="5" rx="1" fill="#a8d8ea" />
      <rect x="28" y="15" width="16" height="33" rx="2" fill="#6BAFDF" />
      <rect x="31" y="19" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="37" y="19" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="31" y="26" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="37" y="26" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="31" y="33" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="37" y="33" width="4" height="4" rx="1" fill="#a8d8ea" />
      <rect x="5" y="48" width="50" height="4" rx="2" fill="#888" />
      <circle cx="10" cy="52" r="3" fill="#43a047" />
      <circle cx="18" cy="52" r="2" fill="#66bb6a" />
      <circle cx="42" cy="52" r="3" fill="#43a047" />
      <circle cx="48" cy="52" r="2" fill="#66bb6a" />
    </svg>
  ),
  semipresencial: (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="12" width="40" height="28" rx="3" fill="#888" />
      <rect x="13" y="15" width="34" height="22" rx="1" fill="#e0e0e0" />
      <rect x="22" y="40" width="16" height="4" rx="1" fill="#999" />
      <rect x="16" y="44" width="28" height="3" rx="1.5" fill="#aaa" />
      <rect x="24" y="20" width="14" height="3" rx="1" fill="#7B1FA2" />
      <polygon points="31,17 24,21 31,25 38,21" fill="#9C27B0" />
      <line x1="31" y1="25" x2="31" y2="32" stroke="#7B1FA2" strokeWidth="1.5" />
      <rect x="28" y="31" width="6" height="3" rx="1" fill="#7B1FA2" />
    </svg>
  ),
  virtual: (
    <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="44" height="28" rx="3" fill="#666" />
      <rect x="11" y="13" width="38" height="22" rx="1" fill="#e8e8e8" />
      <rect x="15" y="17" width="6" height="14" rx="1" fill="#E4002B" />
      <rect x="23" y="20" width="6" height="11" rx="1" fill="#F7941D" />
      <rect x="31" y="15" width="6" height="16" rx="1" fill="#43a047" />
      <rect x="39" y="22" width="6" height="9" rx="1" fill="#4A90D9" />
      <rect x="20" y="38" width="20" height="4" rx="1" fill="#999" />
      <rect x="14" y="42" width="32" height="3" rx="1.5" fill="#aaa" />
      <circle cx="30" cy="50" r="2" fill="#4A90D9" />
      <path d="M24 48 a8 8 0 0 1 12 0" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
      <path d="M21 46 a12 12 0 0 1 18 0" fill="none" stroke="#4A90D9" strokeWidth="1.5" />
    </svg>
  ),
}

const LABELS: Record<Modalidad, string> = {
  presencial: 'Presencial',
  semipresencial: 'Semipresencial',
  virtual: '100% Virtual',
}

export default function Modalidades() {
  const [openAccordion, setOpenAccordion] = useState<Modalidad | null>('presencial')

  const toggle = (mod: Modalidad) => {
    setOpenAccordion((prev) => (prev === mod ? null : mod))
  }

  return (
    <>
      <style>{`
        /* --- Mejoras visuales de esta sección (Modalidades) --- */
        .modalidades-photo {
          position: relative;
        }
        .modalidades-photo::before {
          content: '';
          position: absolute;
          top: -14px;
          right: -14px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(228,0,43,0.14), rgba(0,191,166,0.14));
          border-radius: 10px;
          z-index: -1;
        }

        .accordion-card {
          border-top: 4px solid transparent;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .accordion-card:hover {
          transform: translateY(-2px);
        }
        .accordion-card.mod-presencial { border-top-color: #E4002B; }
        .accordion-card.mod-semipresencial { border-top-color: #7B1FA2; }
        .accordion-card.mod-virtual { border-top-color: #4A90D9; }

        .accordion-icon {
          background: #f5f5f5;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 9px;
          transition: background 0.3s;
        }
        .accordion-card.active .accordion-icon {
          background: #fdeaea;
        }

        .accordion-arrow {
          transition: transform 0.3s, filter 0.2s;
        }
        .accordion-header:hover .accordion-arrow {
          filter: brightness(1.1);
        }
      `}</style>

      <section className="modalidades-section">
        <div className="modalidades-inner">
        <div className="modalidades-left">
          <div className="modalidades-title-bar">
            <div className="modalidades-accent"></div>
            <h2>
              Estudia a tu ritmo, en la
              <br />
              modalidad que elijas
            </h2>
          </div>
          <p className="modalidades-desc">
            Contamos con modalidades flexibles y horarios pensados para ti. Ya sea que prefieras asistir al campus,
            combinar clases o estudiar 100% virtual, encontrarás una opción que encaje con tu estilo de vida.
          </p>

          <div className="modalidades-photo">
            <div className="mod-deco d1"></div>
            <div className="mod-deco d2"></div>
            <div className="mod-deco d3"></div>
            <div className="mod-deco d4"></div>
            <div className="mod-deco d5"></div>
            <div className="modalidades-photo-img">
              <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
                <rect width="420" height="300" fill="#e8ddd0" />
                <rect x="10" y="20" width="160" height="140" rx="4" fill="#c49464" />
                <rect x="20" y="30" width="30" height="40" rx="2" fill="#8B4513" />
                <rect x="55" y="35" width="25" height="35" rx="2" fill="#A0522D" />
                <rect x="85" y="28" width="28" height="42" rx="2" fill="#6B4226" />
                <rect x="120" y="32" width="35" height="38" rx="2" fill="#8B6914" />
                <rect x="20" y="80" width="35" height="35" rx="2" fill="#CD853F" />
                <rect x="60" y="85" width="30" height="30" rx="2" fill="#A0522D" />
                <rect x="95" y="78" width="32" height="37" rx="2" fill="#8B4513" />
                <circle cx="200" cy="100" r="35" fill="#c49464" />
                <rect x="170" y="60" width="60" height="45" rx="8" fill="#2a2a2a" />
                <circle cx="200" cy="75" r="6" fill="#c49464" />
                <rect x="155" y="130" width="90" height="80" rx="10" fill="#2d5a3d" />
                <rect x="140" y="180" width="90" height="55" rx="4" fill="#ddd" />
                <rect x="145" y="185" width="80" height="40" rx="2" fill="#a8d8ea" />
                <rect x="130" y="235" width="110" height="6" rx="3" fill="#bbb" />
                <circle cx="330" cy="120" r="32" fill="#8B6914" />
                <rect x="310" y="80" width="40" height="50" rx="6" fill="#1a1a1a" />
                <rect x="298" y="150" width="65" height="80" rx="10" fill="#c44569" />
                <rect x="310" y="195" width="35" height="45" rx="3" fill="#2a5a8a" />
                <rect x="0" y="260" width="420" height="40" fill="rgba(0,0,0,0.06)" />
              </svg>
            </div>
          </div>
        </div>

        <div className="modalidades-right">
          {(['presencial', 'semipresencial', 'virtual'] as Modalidad[]).map((mod) => {
            const isActive = openAccordion === mod
            return (
              <div className={`accordion-card mod-${mod}${isActive ? ' active' : ''}`} key={mod}>
                <div className="accordion-header" onClick={() => toggle(mod)}>
                  <div className="accordion-icon">{ICONS[mod]}</div>
                  <h3>{LABELS[mod]}</h3>
                  <div className="accordion-arrow">
                    <svg viewBox="0 0 24 24">
                      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="accordion-content">
                    {SCHEDULES[mod].map((item) => (
                      <div className="schedule-item" key={item.title}>
                        <div className="schedule-info">
                          <h4>{item.title}</h4>
                          <p>
                            {item.description.split('\n').map((line, i) => (
                              <span key={i}>
                                {line}
                                <br />
                              </span>
                            ))}
                          </p>
                        </div>
                        <MiniCalendar color={item.calColor} blocks={item.blocks} />
                      </div>
                    ))}
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