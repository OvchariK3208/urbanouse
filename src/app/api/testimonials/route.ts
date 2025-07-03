import { TestimonialType } from '@/types/testimonial'
import { NextResponse } from 'next/server'

export async function GET() {
  const data: TestimonialType[] = [
    {
      testimonial:
        'Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We couldn’t be happier with our new home.',
      author: 'Sarah & Michael Stone',
      role: 'Homeowners',
    },
    {
      testimonial:
        'Thanks to Urbanouse, I sold my house in under a week! The process was smooth, and I felt supported the whole way.',
      author: 'Linda McAllister',
      role: 'Seller',
    },
    {
      testimonial:
        'Their property consultants are top-notch! We found the perfect apartment in no time.',
      author: 'Derek Lin',
      role: 'First-time Buyer',
    },
    {
      testimonial:
        'We needed to relocate quickly for work, and Urbanouse made it possible. Amazing service!',
      author: 'Jake & Lauren Ramirez',
      role: 'Relocated Clients',
    },
    {
      testimonial:
        'From the virtual tour to the closing day, Urbanouse was professional, reliable, and friendly.',
      author: 'Kimberly Wu',
      role: 'Investor',
    },
    {
      testimonial:
        'I’ve worked with many agencies, but Urbanouse truly understands the market and my needs.',
      author: 'Martin Fox',
      role: 'Landlord',
    },
    {
      testimonial:
        'They helped us find a beautiful family house within our budget. Great experience!',
      author: 'The Patterson Family',
      role: 'Homebuyers',
    },
    {
      testimonial:
        'Every question I had was answered, and I never felt pressured. Urbanouse is the real deal.',
      author: 'Vanessa Price',
      role: 'Single Buyer',
    },
    {
      testimonial: 'Fast, professional, and completely hassle-free. 10/10!',
      author: 'Roger Delgado',
      role: 'Seller',
    },
    {
      testimonial:
        'Urbanouse turned what seemed like a stressful process into something easy and enjoyable.',
      author: 'Tina & Marco Rivera',
      role: 'First-time Homeowners',
    },
  ]

  return NextResponse.json(data)
}
