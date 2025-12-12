import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

export default function Context() {
  return (
    <section id="contexto" className="py-6xl overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-2xl lg:gap-4xl items-center">
          <div className="max-w-[480px]">
            <SectionHeader number="01" label="Contexto" />

            <motion.h2
              className="heading-2 mb-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              La categoría premium habla de lujo. La audiencia habla de identidad.
            </motion.h2>

            <motion.p
              className="text-lg-responsive text-gray-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              MINI necesitaba transformar admiración en acción. Convertir a los que sueñan con el volante en quienes lo toman.
            </motion.p>
          </div>

          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative group">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="MINI Cooper lifestyle"
                className="w-full h-full object-cover transition-transform duration-700 ease-smooth-out group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-[120px] h-[120px] bg-accent rounded-lg -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
