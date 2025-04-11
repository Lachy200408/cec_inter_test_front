import { UUID } from 'node:crypto'

export interface CourseType {
  id: UUID
  title: string
  description: string
  degree: string
  image: string
  rating: number
  users: number
  college: string
}
