import Link from 'next/link'

import { cn } from '@/lib/utils'
import { ModeSwitcher } from '@/components/shared/mode-switcher'
import { Button } from '@/components/ui/button'

interface Props {
  className?: string
}

export const SignUpAndSignIn: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-2.5 md:w-auto md:gap-1 lg:gap-2.5',
        className
      )}
    >
      <Button
        asChild
        variant='outline'
        className=''
      >
        <Link
          className='text-base/[140%] font-medium tracking-tight'
          href='/signup'
        >
          Sign Up
          <span className='sr-only'>Sign Up</span>
        </Link>
      </Button>

      <Button
        asChild
        className=''
      >
        <Link
          className='text-base/[140%] font-medium tracking-tight'
          href='/signin'
        >
          Sign In
        </Link>
      </Button>

      <ModeSwitcher />
    </div>
  )
}
