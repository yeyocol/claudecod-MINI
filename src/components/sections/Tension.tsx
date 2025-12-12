import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

const tensionItems = [
  {
    type: 'category',
    title: 'Categoría Premium',
    description: 'Estatus · Lujo · Aspiracional',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
      </svg>
    ),
  },
  {
    type: 'audience',
    title: 'Audiencia Joven',
    description: 'Autenticidad · Identidad · Experiencia',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

export default function Tension() {
  return (
    <section id="tension" className="py-6xl overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-2xl lg:gap-4xl items-center">
          {/* Visual */}
          <motion.div
            className="relative order-first"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white rounded-xl p-xl shadow-lg relative z-10">
              <div className="flex flex-col gap-lg">
                {tensionItems.map((item, index) => (
                  <motion.div
                    key={item.type}
                    className="flex items-center gap-md p-md pl-lg bg-gray-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md hover:translate-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-md flex items-center justify-center flex-shrink-0 ${
                        item.type === 'category'
                          ? 'bg-gradient-to-br from-gray-200 to-gray-100'
                          : 'bg-gradient-to-br from-accent to-accent-light'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-[0.9375rem] font-semibold mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[0.8125rem] text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}

                {/* VS divider */}
                <div className="text-center font-display font-bold text-xl text-gray-300 py-xs -my-2">
                  VS
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="max-w-[480px]">
            <SectionHeader number="04" label="La Tensión" />

            <motion.h2
              className="heading-2 mb-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              La categoría promete estatus. La audiencia busca autenticidad.
            </motion.h2>

            <motion.p
              className="text-lg-responsive text-gray-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Temen que un carro premium no sea "para ellos". Sienten que el lujo es distante, ajeno a su identidad.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  )
}
