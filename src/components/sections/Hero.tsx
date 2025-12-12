import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '../ui'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-[1]">
        <motion.img
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=80"
          alt="MINI Cooper en ciudad"
          className="w-full h-full object-cover opacity-70"
          style={{ scale }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="grain-overlay" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-[3] text-center text-white max-w-[1000px] px-lg"
        style={{ y, opacity }}
      >
        <motion.span
          className="inline-flex items-center gap-2 px-md py-xs bg-accent/15 border border-accent/30 backdrop-blur-[10px] text-accent font-display text-xs font-medium tracking-[0.08em] uppercase rounded-full mb-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-slow" />
          Creative & AI Strategist
        </motion.span>

        <motion.h1
          className="heading-display mb-lg"
          style={{ textShadow: '0 4px 40px rgba(0, 0, 0, 0.3)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">MINI Cooper</span>
          <span className="block text-accent">Pruébate la actitud</span>
        </motion.h1>

        <motion.p
          className="text-xl-responsive text-white/70 max-w-[600px] mx-auto mb-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Caso basado en insight para impulsar test drives en compradores de su primer carro premium.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button href="#contexto" variant="primary">
            Ver el caso completo
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="#idea" variant="outline-light">
            La Gran Idea
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-xl left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-sm text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="w-px h-[60px] bg-gradient-to-b from-accent to-transparent animate-float" />
        <span className="font-display text-[0.6875rem] font-medium tracking-[0.15em] uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
