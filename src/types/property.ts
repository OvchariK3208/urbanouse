export type PropertyType = {
  id: number
  title: string
  description: string
  count?: string
  img: string
  rating?: number
  price: string
  tags: string[]
  group?: 'Family House' | 'Villa' | 'Apartment'
  location?: string
}
