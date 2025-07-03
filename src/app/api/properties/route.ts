import { PropertyType } from '@/types/property'
import { NextResponse } from 'next/server'

export async function GET() {
  const data: PropertyType[] = [
    {
      id: 1,
      title: 'Sunny Villa',
      description:
        'Enjoy luxury in this spacious villa with ocean views and modern design.',
      count: '5 units available',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=60',
      rating: 4.7,
      price: '$1 200,000',
      tags: ['4 beds', '3 bath', '2500 sq.ft'],
      group: 'Villa',
      location: '123 Ocean Drive, Malibu, CA 90265, USA',
    },
    {
      id: 2,
      title: 'Downtown Apartment',
      description:
        'Modern apartment in the city center with access to shops and transit.',
      count: '120+ units available',
      img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&auto=format&fit=crop&q=60',
      rating: 4.3,
      price: '$420,000',
      tags: ['2 beds', '1 bath', '750 sq.ft'],
      group: 'Apartment',
      location: '789 Main Street, New York, NY 10001, USA',
    },
    {
      id: 3,
      title: 'Green Villa',
      description:
        'Eco-friendly villa surrounded by nature with energy-efficient systems.',
      count: '2 units available',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&auto=format&fit=crop&q=60',
      rating: 4.8,
      price: '$ 980 000',
      tags: ['3 beds', '2 bath', '2100 sq.ft'],
      group: 'Villa',
      location: '456 Forest Road, Aspen, CO 81611, USA',
    },
    {
      id: 4,
      title: 'Urban Living',
      description:
        'Compact and stylish apartment perfect for singles or couples.',
      count: '60 units available',
      img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=400&auto=format&fit=crop&q=60',
      rating: 4.0,
      price: '$ 350 000',
      tags: ['1 bed', '1 bath', '600 sq.ft'],
      group: 'Apartment',
      location: '321 King Street, Toronto, ON M5V 1J5, Canada',
    },
    {
      id: 5,
      title: 'Family House',
      description:
        'Discover modern family living with spacious layouts and top-tier amenities designed for comfort and style.',
      count: '650+ units available',
      img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&auto=format&fit=crop&q=60',
      rating: 4.6,
      price: '$ 680 000',
      tags: ['3 beds', '2 bath', '900 sq.ft'],
      group: 'Family House',
      location: '3456 Cedar Lane, Toronto, ON M4B 1B3, Canada',
    },
    {
      id: 6,
      title: 'Mountain Villa',
      description: 'A serene escape in the mountains with breathtaking views.',
      count: '3 units available',
      img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&auto=format&fit=crop&q=60',
      rating: 4.9,
      price: '$ 1 500 000',
      tags: ['5 beds', '4 bath', '3200 sq.ft'],
      group: 'Villa',
      location: '654 Hilltop Road, Denver, CO 80202, USA',
    },
    {
      id: 7,
      title: 'Compact Apartment',
      description:
        'Affordable and functional living in a well-maintained building.',
      count: '300+ units available',
      img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&auto=format&fit=crop&q=60',
      rating: 3.9,
      price: '$ 270 000',
      tags: ['1 bed', '1 bath', '500 sq.ft'],
      group: 'Apartment',
      location: '111 Elm Street, Boston, MA 02110, USA',
    },
    {
      id: 8,
      title: 'Family Home Suburb',
      description:
        'Quiet neighborhood perfect for raising children with great schools nearby.',
      count: '15 units available',
      img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop&q=60',
      rating: 4.4,
      price: '$ 560 000',
      tags: ['3 beds', '2 bath', '1100 sq.ft'],
      group: 'Family House',
      location: '987 Maple Drive, Austin, TX 73301, USA',
    },
    {
      id: 9,
      title: 'Luxury Penthouse',
      description:
        'Top-floor luxury living with private terrace and premium finishes.',
      count: '1 unit available',
      img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&auto=format&fit=crop&q=60',
      rating: 4.9,
      price: '$ 2 300 000',
      tags: ['3 beds', '3 bath', '2800 sq.ft'],
      group: 'Apartment',
      location: '222 Skyline Blvd, Los Angeles, CA 90012, USA',
    },
    {
      id: 10,
      title: 'Classic Family House',
      description:
        'Traditional home with modern upgrades and a large backyard.',
      count: '30 units available',
      img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&auto=format&fit=crop&q=60',
      rating: 4.5,
      price: '$ 600 000',
      tags: ['4 beds', '2 bath', '1500 sq.ft'],
      group: 'Family House',
      location: '222 Oak Avenue, Orlando, FL 32801, USA',
    },
  ]

  return NextResponse.json(data)
}
