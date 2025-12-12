import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'outline-light' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
}

const variants = {
  primary: 'bg-accent border-accent text-black shadow-accent hover:shadow-accent-lg',
  outline: 'bg-transparent border-black text-black hover:bg-black hover:text-white',
  'outline-light': 'bg-transparent border-white/30 text-white hover:bg-white hover:border-white hover:text-black',
  ghost: 'bg-white/10 backdrop-blur-[10px] border-white/20 text-white hover:bg-white/20 hover:border-white/40',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    px-xl py-sm font-display text-sm font-medium
    tracking-[0.01em] rounded-full cursor-pointer
    border-2 relative overflow-hidden
    transition-all duration-300 ease-smooth
  `

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-150" />
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
