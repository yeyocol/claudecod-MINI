import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

export default function Challenge() {
  return (
    <section id="desafio" className="py-6xl bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-[0.08] animate-gradient"
          style={{
            background: 'radial-gradient(circle at 30% 50%, #FFD23F 0%, transparent 40%)',
            backgroundSize: '200% 200%',
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <SectionHeader number="02" label="El Desafío" />

          <motion.h2
            className="heading-1 mb-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Hacer que los jóvenes pasen del{' '}
            <span className="text-accent">scroll</span> al{' '}
            <span className="text-accent">volante</span>.
          </motion.h2>

          <motion.p
            className="text-xl-responsive text-white/60 max-w-[500px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Convertir interés digital en test drives reales.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
