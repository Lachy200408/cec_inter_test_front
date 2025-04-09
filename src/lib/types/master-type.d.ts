import { UUID } from 'node:crypto'

export interface MasterType {
  id: UUID
  name: string
  description: string
  image: string
  workrole: string
}
