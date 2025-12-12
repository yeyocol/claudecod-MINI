import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

export default function KeyVisual() {
  return (
    <section id="keyvisual" className="py-6xl">
      <Container size="wide">
        <div className="text-center mb-3xl">
          <SectionHeader number="07" label="Key Visual" className="justify-center" />
          <motion.h2
            className="heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Principal de Campaña
          </motion.h2>
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden aspect-[21/9] shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600&q=80"
            alt="Key Visual - MINI Cooper Campaign"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />

          {/* Badge */}
          <span className="absolute bottom-lg right-lg inline-flex items-center gap-2 px-md py-xs bg-black/60 backdrop-blur-[10px] rounded-full text-white font-display text-xs font-medium">
            <svg
              className="w-3.5 h-3.5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Generado con IA
          </span>
        </motion.div>
      </Container>
    </section>
  )
}
