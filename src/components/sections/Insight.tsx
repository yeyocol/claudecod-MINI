import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

export default function Insight() {
  return (
    <section id="insight" className="py-6xl bg-cream relative">
      <Container>
        <div className="max-w-[1000px] mx-auto text-center">
          <SectionHeader number="03" label="El Insight" />

          <motion.div
            className="relative py-4xl px-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Quote mark */}
            <span
              className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[16rem] font-bold text-accent opacity-15 leading-[0.8] pointer-events-none select-none"
            >
              "
            </span>

            <p className="heading-2 italic text-gray-700 relative z-10">
              No sé si estoy listo para un carro premium… pero sí quiero sentir cómo se siente manejarlo.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-md mt-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="w-10 h-px bg-gray-300" />
            <span className="font-display text-[0.8125rem] font-medium text-gray-500">
              Audiencia target: Jóvenes profesionales, primer carro premium
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
