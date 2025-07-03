import Link from 'next/link'
import { ContainerWrapper } from '@/components/shared/container-wrapper'
import { BurgerMenu } from '@/components/shared/burger-menu'
import { Icons } from '@/components/shared/icons'
import { Navigation } from '@/components/shared/navigation'
import { SignUpAndSignIn } from '@/components/shared/signup-and-signin'

export function Header() {
  return (
    <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full bg-amber-500 shadow-lg shadow-black/5 backdrop-blur'>
      <ContainerWrapper>
        <div className='md:5 mx-auto flex h-13 items-center justify-between px-5 md:h-15 lg:h-17'>
          <Link
            href='/'
            className='w-[135px]'
          >
            <Icons.logo className='fill-primary' />
          </Link>

          <Navigation className='hidden md:flex' />

          <SignUpAndSignIn className='hidden md:flex' />

          <BurgerMenu />
        </div>
      </ContainerWrapper>
    </header>
  )
}
