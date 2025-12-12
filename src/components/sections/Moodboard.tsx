import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

const moodboardItems = [
  { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', label: 'Urban Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80', label: 'Street Style' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', label: 'Youth Culture' },
  { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80', label: 'City Vibes' },
  { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', label: 'Premium Details' },
  { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80', label: 'Driving Experience' },
]

export default function Moodboard() {
  return (
    <section id="visual" className="py-6xl bg-gray-50">
      <Container size="wide">
        <div className="text-center mb-4xl">
          <SectionHeader number="06" label="Territorio Visual" className="justify-center" />
          <motion.h2
            className="heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Moodboard de Campaña
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-md auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[280px]">
          {moodboardItems.map((item, index) => {
            // Different span classes for each item
            const spanClasses = [
              'lg:col-span-5',
              'lg:col-span-4',
              'lg:col-span-3',
              'lg:col-span-3',
              'lg:col-span-5',
              'lg:col-span-4',
            ]

            return (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${spanClasses[index]} ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-5' : ''
                } ${index === 5 ? 'sm:col-span-2 lg:col-span-4' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                data-cursor-hover
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-md left-md text-white font-display text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          className="text-center mt-xl text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Estética urbana premium, real, joven y social-first.
        </motion.p>
      </Container>
    </section>
  )
}
