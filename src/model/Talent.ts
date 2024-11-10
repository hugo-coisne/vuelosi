import type { Role } from './role'

export interface Talent {
  image: string
  firstname: string
  lastname: string
  job: string
  roles: Role[]
  technos: string[]
}
