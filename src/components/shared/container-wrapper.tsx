import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export const ContainerWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl', className)}>{children}</div>
  )
}
