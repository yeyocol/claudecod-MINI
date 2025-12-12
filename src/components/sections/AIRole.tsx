import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

const aiRoleItems = [
  {
    title: 'Prototipar Estética',
    description: 'Exploración visual rápida de territorios creativos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Explorar Emociones',
    description: 'Validación de insights y conexión emocional',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Visualizar Campaña',
    description: 'Pre-producción visual antes del shoot',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </svg>
    ),
  },
]

export default function AIRole() {
  return (
    <section id="ai" className="py-6xl">
      <Container>
        <div className="text-center mb-4xl">
          <SectionHeader number="09" label="Rol de la IA" className="justify-center" />
          <motion.h2
            className="heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Inteligencia Artificial en el Proceso Creativo
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg max-w-[1100px] mx-auto">
          {aiRoleItems.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-2xl bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="w-[72px] h-[72px] mx-auto mb-lg bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center shadow-accent">
                <div className="w-8 h-8 text-black">{item.icon}</div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-[0.9375rem]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-3xl p-xl bg-gray-50 rounded-xl max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg-responsive text-gray-600">
            La IA permitió prototipar estética, explorar emociones y visualizar la campaña antes de producción.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
