import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

export default function BigIdea() {
  return (
    <section
      id="idea"
      className="py-6xl bg-black text-white text-center relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #FFD23F 0%, transparent 60%)',
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-[1000px] mx-auto">
          <SectionHeader number="05" label="La Gran Idea" />

          <motion.h2
            className="heading-display mb-xl gradient-text"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Pruébate la actitud.
          </motion.h2>

          <motion.p
            className="text-xl-responsive text-white/60 max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            El test drive se convierte en una prueba de identidad. MINI no te pide decidir, te invita a sentir quién eres cuando lo manejas.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
