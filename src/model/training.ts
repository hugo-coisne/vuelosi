import type { TrainingContent } from './training-content'

export interface Training {
  id: number
  title: string
  picture: string
  description: string
  hashtag: string[]
  objectives: string[]
  trainee: string[]
  prerequisite: string[]
  duration: string
  price: string
  location: string[]
  sessions: string[]
  grade: number
  feedbacks: number
  plan: TrainingContent[]
  slug: string
}
