export interface EventType {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  college: string
  type: "hackathon" | "workshop" | "conference" | "meetup"
  price: number
  duration: number
  teamSize?: string
  eligibility?: string[]
  prizes?: {
    title: string
    description: string
    value?: string
  }[]
  schedule?: {
    time: string
    title: string
    description: string
  }[]
}
