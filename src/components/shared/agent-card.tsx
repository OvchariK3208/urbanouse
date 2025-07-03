import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AgentType } from '@/types/agent'
import { Star, BriefcaseBusiness, KeyRound, MapPin } from 'lucide-react'
// import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const AgentCard: React.FC<AgentType> = ({
  // id,
  img,
  rating,
  location,
  name,
  position,
  propertiesSold,
  propertyTypes,
}) => {
  console.log(propertyTypes)
  return (
    <Card>
      <CardHeader className='relative aspect-[1/1] w-full'>
        <Image
          src={img}
          fill
          alt={`${name}, ${position}`}
          className='rounded-xl object-cover'
        />
        {/*<Badge className="absolute top-2 left-2 flex gap-2">
					{propertyTypes?.map(type => (
						<span key={type}>{type}</span>
					))}
				</Badge>*/}
      </CardHeader>
      <CardContent>
        <CardTitle className='flex items-center justify-between'>
          {name}{' '}
          <span className='flex flex-row items-center gap-1 text-base'>
            <Star className='size-6 text-yellow-500' /> {rating}
          </span>
        </CardTitle>
        <CardDescription className='flex flex-row items-center gap-1'>
          <BriefcaseBusiness className='size-5' />
          {position}
        </CardDescription>
        <CardDescription className='flex flex-row items-center gap-1'>
          <MapPin className='size-5' /> {location}
        </CardDescription>
        <CardDescription className='flex flex-row items-center gap-1'>
          <KeyRound className='size-5' /> {propertiesSold}
        </CardDescription>
        <Button
          asChild
          variant='outline'
          className='w-full md:w-auto'
        >
          <Link
            className='text-base/[140%] font-medium tracking-tight'
            href='/signup'
          >
            Contacts
            <span className='sr-only'>Contacts</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
