import { UUID } from 'node:crypto'

export interface TestimonyType {
  id: UUID
  name: string
  testimony: string
  image: string
  occupation: string
  rating: number
}
