import { motion } from 'framer-motion'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { Container, Button } from './ui'

const navLinks = [
  { href: '#contexto', label: 'Contexto' },
  { href: '#insight', label: 'Insight' },
  { href: '#idea', label: 'Idea' },
  { href: '#visual', label: 'Visual' },
]

export default function Navbar() {
  const { isScrolled } = useScrollPosition()

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? 'py-sm bg-white/90 backdrop-blur-[20px] border-b border-black/5'
          : 'py-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`font-display text-lg font-semibold tracking-[-0.02em] transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            Portfolio<span className="text-accent">.</span>
          </a>

          <div className="hidden md:flex items-center gap-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-display text-[0.8125rem] font-medium relative transition-colors duration-150 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-black'
                    : 'text-white/70 hover:text-white'
                } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="ghost" href="#" className="py-xs px-md">
              Contacto
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5">
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-black' : 'bg-white'
                }`}
              />
            ))}
          </button>
        </div>
      </Container>
    </motion.nav>
  )
}
