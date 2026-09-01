import { useState, type FormEvent } from 'react'

type TipoCarrera = 'distancia' | 'pregrado' | 'trabaja'

interface FormState {
  nombres: string
  apellidos: string
  dni: string
  celular: string
  correo: string
  carrera: string
  departamento: string
  tipoCarrera: TipoCarrera
  autorizoDatos: boolean
  autorizoComercial: boolean
}

const INITIAL_STATE: FormState = {
  nombres: '',
  apellidos: '',
  dni: '',
  celular: '',
  correo: '',
  carrera: '',
  departamento: '',
  tipoCarrera: 'distancia',
  autorizoDatos: false,
  autorizoComercial: false,
}

const CARRERAS = [
  'Ingeniería de Sistemas',
  'Administración',
  'Derecho',
  'Enfermería',
  'Contabilidad',
  'Psicología',
]

const DEPARTAMENTOS = [
  'Lima',
  'Arequipa',
  'La Libertad',
  'Piura',
  'Cusco',
  'Junín',
  'Otro',
]

const MODALIDADES = [
  { id: 'presencial', label: 'PRESENCIAL', badgeColor: '#7C3AED', img: '/admision/presencial.jpg' },
  { id: 'semipresencial', label: 'SEMI-PRESENCIAL', badgeColor: '#2563EB', img: '/admision/semipresencial.jpg' },
  { id: 'virtual', label: '100% VIRTUAL', badgeColor: '#7C3AED', img: '/admision/virtual.jpg' },
]

export default function AdmisionForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set())
  const [sent, setSent] = useState(false)

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const required: (keyof FormState)[] = [
      'nombres',
      'apellidos',
      'dni',
      'celular',
      'correo',
      'carrera',
      'departamento',
    ]
    const missing = required.filter((field) => !String(form[field]).trim())

    const nextInvalid = new Set<string>(missing)
    if (!form.autorizoDatos) nextInvalid.add('autorizoDatos')

    if (nextInvalid.size > 0) {
      setInvalidFields(nextInvalid)
      setTimeout(() => setInvalidFields(new Set()), 2000)
      return
    }

    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm(INITIAL_STATE)
    }, 3000)
  }

  const handleWhatsapp = () => {
    window.open('https://wa.me/51999999999', '_blank')
  }

  return (
    <section className="jlc-admision-section">
      <div className="jlc-admision-inner">
        <h2 className="jlc-admision-title">
          TÚ DECIDES
          <br />
          CÓMO ESTUDIAR
        </h2>

        <div className="jlc-admision-grid">
          {/* Fotos de modalidades */}
          <div className="jlc-admision-left">
            <div className="jlc-modalidad-photos">
              {MODALIDADES.map((mod) => (
                <div className="jlc-modalidad-photo" key={mod.id}>
                  <span className="jlc-modalidad-badge" style={{ background: mod.badgeColor }}>
                    {mod.label}
                  </span>
                  <img src={mod.img} alt={mod.label} />
                </div>
              ))}
            </div>

            <button className="jlc-btn-whatsapp" type="button" onClick={handleWhatsapp}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="#fff"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26C2.166 6.443 6.6 2.01 12.05 2.01c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"
                />
              </svg>
              Contáctanos
            </button>
          </div>

          {/* Formulario */}
          <form className="jlc-form-card" onSubmit={handleSubmit} noValidate>
            <h3 className="jlc-form-title">DEJA TUS DATOS Y</h3>
            <p className="jlc-form-subtitle">TE CONTACTAREMOS EN BREVES MINUTOS</p>

            <div className="jlc-form-radios">
              <label>
                <input
                  type="radio"
                  name="tipoCarrera"
                  checked={form.tipoCarrera === 'distancia'}
                  onChange={() => handleChange('tipoCarrera', 'distancia')}
                />
                Carreras a distancia
              </label>
              <label>
                <input
                  type="radio"
                  name="tipoCarrera"
                  checked={form.tipoCarrera === 'pregrado'}
                  onChange={() => handleChange('tipoCarrera', 'pregrado')}
                />
                Pregrado
              </label>
              <label>
                <input
                  type="radio"
                  name="tipoCarrera"
                  checked={form.tipoCarrera === 'trabaja'}
                  onChange={() => handleChange('tipoCarrera', 'trabaja')}
                />
                Carreras gente que trabaja
              </label>
            </div>

            <div className="jlc-form-row">
              <input
                type="text"
                placeholder="Nombres"
                className={invalidFields.has('nombres') ? 'invalid' : ''}
                value={form.nombres}
                onChange={(e) => handleChange('nombres', e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellidos"
                className={invalidFields.has('apellidos') ? 'invalid' : ''}
                value={form.apellidos}
                onChange={(e) => handleChange('apellidos', e.target.value)}
              />
            </div>

            <div className="jlc-form-row">
              <input
                type="text"
                placeholder="DNI"
                className={invalidFields.has('dni') ? 'invalid' : ''}
                value={form.dni}
                onChange={(e) => handleChange('dni', e.target.value)}
              />
              <input
                type="tel"
                placeholder="Celular"
                className={invalidFields.has('celular') ? 'invalid' : ''}
                value={form.celular}
                onChange={(e) => handleChange('celular', e.target.value)}
              />
            </div>

            <input
              type="email"
              placeholder="Correo electrónico"
              className={`jlc-full ${invalidFields.has('correo') ? 'invalid' : ''}`}
              value={form.correo}
              onChange={(e) => handleChange('correo', e.target.value)}
            />

            <div className="jlc-form-row">
              <select
                className={invalidFields.has('carrera') ? 'invalid' : ''}
                value={form.carrera}
                onChange={(e) => handleChange('carrera', e.target.value)}
              >
                <option value="">Elige una carrera</option>
                {CARRERAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                className={invalidFields.has('departamento') ? 'invalid' : ''}
                value={form.departamento}
                onChange={(e) => handleChange('departamento', e.target.value)}
              >
                <option value="">Departamento de resid.</option>
                {DEPARTAMENTOS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <label className="jlc-checkbox">
              <input
                type="checkbox"
                className={invalidFields.has('autorizoDatos') ? 'invalid' : ''}
                checked={form.autorizoDatos}
                onChange={(e) => handleChange('autorizoDatos', e.target.checked)}
              />
              <span>
                Autorizo el tratamiento de mis datos personales para finalidades informativas y comerciales...
              </span>
            </label>

            <label className="jlc-checkbox">
              <input
                type="checkbox"
                checked={form.autorizoComercial}
                onChange={(e) => handleChange('autorizoComercial', e.target.checked)}
              />
              <span>
                Opcionalmente, autorizo el tratamiento de mis datos personales para las Finalidades Comerciales Adicionales...
              </span>
            </label>

            <button type="submit" className="jlc-btn-enviar">
              {sent ? '✓ Enviado' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>

      <button className="jlc-btn-examen" type="button">
        <svg viewBox="0 0 24 24" width="16" height="16">
          <path
            fill="#fff"
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          />
        </svg>
        Examen de Admisión
      </button>
    </section>
  )
}