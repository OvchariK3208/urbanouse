import { ProjectType } from '@/types/projects'
import { NextResponse } from 'next/server'

export async function GET() {
  const data: ProjectType[] = [
    {
      id: 1,
      title: 'Seaside Villa',
      description:
        'Experience luxury living with panoramic ocean views and private beach access.',
      count: '120+ units available',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=60',
      group: 'Villa',
    },
    {
      id: 2,
      title: 'Urban Apartment',
      description:
        'Modern apartments located in the heart of the city, close to all amenities.',
      count: '300+ units available',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop&q=60',
      group: 'Apartment',
    },
    {
      id: 3,
      title: 'Suburban Family House',
      description:
        'Spacious homes in quiet neighborhoods ideal for growing families.',
      count: '650+ units available',
      img: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=400&auto=format&fit=crop&q=60',
      group: 'Family House',
    },
    {
      id: 4,
      title: 'See All Projects',
      description:
        'Explore our full catalog of real estate options tailored to your lifestyle and needs.',
      count: 'Browse all listings',
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&auto=format&fit=crop&q=60',
      group: 'Apartment',
    },
  ]

  return NextResponse.json(data)
}
