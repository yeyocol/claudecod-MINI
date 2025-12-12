import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
  className?: string
}

const sizes = {
  default: 'max-w-[1400px]',
  narrow: 'max-w-[1000px]',
  wide: 'max-w-[1600px]',
  full: 'max-w-full px-xl',
}

export default function Container({
  children,
  size = 'default',
  className = ''
}: ContainerProps) {
  return (
    <div className={`w-full mx-auto px-lg ${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}
