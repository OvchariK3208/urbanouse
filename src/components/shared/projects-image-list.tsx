'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { ContainerWrapper } from '@/components/shared/container-wrapper'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextSection } from '@/components/shared/text-section'
import { Typography } from '@/components/shared/typography'
import { ProjectType } from '@/types/projects'

export function ProjectsImageList() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [projects, setProjects] = useState<ProjectType[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then(setProjects)
  }, [])
  return (
    <section className='py-10 lg:py-20'>
      <ContainerWrapper>
        <div className='flex flex-col items-center gap-10 px-5 lg:gap-15'>
          <TextSection
            badge='About Urbanouse'
            title='Your Dream Home, Our Expertise.'
            text='At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties. Our approach blends personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless, rewarding, and tailored to your unique needs.'
          />
          <div className='flex w-full flex-col items-center gap-5 lg:flex-row'>
            <div className='flex w-full flex-col items-center gap-5 lg:flex-row'>
              {projects.map(({ id, title, description, count, img }) => (
                <div
                  className={cn(
                    'relative h-50 w-full max-w-[390px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ease-in-out sm:h-60 sm:max-w-2/3 md:h-70 lg:h-80',
                    id === activeIndex ? 'lg:w-2/5' : 'lg:w-1/5'
                  )}
                  key={id}
                  onClick={() => setActiveIndex(id)}
                >
                  <Image
                    src={img}
                    fill
                    alt={title}
                    className='object-cover transition-transform duration-300 ease-in-out'
                  />
                  {id === activeIndex && (
                    <div className='animate-in fade-in zoom-in-75 absolute inset-0 flex translate-y-0 items-end rounded-xl bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent opacity-100 transition-opacity duration-300 ease-in-out'>
                      <Link
                        href='#'
                        className='flex flex-col gap-0.5 p-3 text-white'
                      >
                        <Typography
                          as='h4'
                          className='text-xl/[120%] font-bold tracking-tight'
                        >
                          {title}
                        </Typography>
                        <Typography
                          as='p'
                          className='text-base/[150%] tracking-tight'
                        >
                          {description}
                        </Typography>
                        <Typography
                          as='p'
                          className='text-base/[150%] font-medium tracking-tight'
                        >
                          {count}
                        </Typography>
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className='flex w-full max-w-[390px] flex-col items-center gap-2 text-center lg:w-auto'>
              <Button
                asChild
                variant='outline'
                className='w-full md:w-auto lg:size-9'
              >
                <Link
                  className='text-base/[140%] font-medium tracking-tight'
                  href='/signup'
                >
                  <span className='block lg:hidden'>More Projects</span>
                  <ArrowUpRight />
                  <span className='sr-only'>More projects</span>
                </Link>
              </Button>
              <span className='hidden lg:block'>More Projects</span>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  )
}
