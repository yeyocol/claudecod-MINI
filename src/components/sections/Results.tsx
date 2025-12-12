import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

const resultsItems = [
  {
    title: 'Mayor intención de test drive',
    description: 'Conversión de interés a acción tangible',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Mayor engagement',
    description: 'Conexión emocional con la audiencia joven',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Percepción premium auténtica',
    description: 'Reposicionamiento de marca accesible',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Results() {
  return (
    <section id="resultados" className="py-6xl bg-gray-50">
      <Container>
        <div className="text-center mb-4xl">
          <SectionHeader number="10" label="Resultados Esperados" className="justify-center" />
          <motion.h2
            className="heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Impacto Proyectado
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl max-w-[1000px] mx-auto">
          {resultsItems.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-2xl bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="relative w-[88px] h-[88px] mx-auto mb-lg">
                {/* Dashed outer ring */}
                <div className="absolute inset-[-8px] border border-dashed border-gray-200 rounded-full" />
                {/* Main icon container */}
                <div className="w-full h-full border-[3px] border-accent rounded-full flex items-center justify-center">
                  <div className="w-9 h-9 text-accent">{item.icon}</div>
                </div>
              </div>
              <h3 className="font-display text-[1.0625rem] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
