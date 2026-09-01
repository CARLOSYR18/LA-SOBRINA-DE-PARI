export interface CarreraIcon {
  id: string
  label: string
  path: string
}

export interface CampusItem {
  id: string
  name: string
  address: string
  colorMain: string
  colorWindow: string
}

export interface MotivoCard {
  id: string
  title: string
  bgColor: string
}

export interface AlumnoCard {
  id: string
  name: string
  quote: string
  imageUrl: string
}

export type Modalidad = 'presencial' | 'semipresencial' | 'virtual'

export interface FormState {
  nombre: string
  apellido: string
  celular: string
  dni: string
  correo: string
  aceptaPrivacidad: boolean
  modalidad: Modalidad
}
