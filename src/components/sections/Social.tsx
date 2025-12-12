import { motion } from 'framer-motion'
import { Container, SectionHeader } from '../ui'

const socialItems = [
  {
    src: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
    platform: 'POV',
    title: '"Primera vez en un MINI"',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    platform: 'Story',
    title: '"Pruébate la actitud"',
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    platform: 'Reel',
    title: '"Test drive challenge"',
  },
  {
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
    platform: 'Friends',
    title: '"Tag a tu copiloto"',
  },
]

export default function Social() {
  return (
    <section id="social" className="py-6xl bg-cream">
      <Container>
        <div className="text-center mb-4xl">
          <SectionHeader number="08" label="Social Media" className="justify-center" />
          <motion.h2
            className="heading-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contenido social-first para TikTok/Instagram
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-md lg:gap-lg max-w-[1200px] mx-auto">
          {socialItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden aspect-[9/16] cursor-pointer shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -12, rotate: -1 }}
              data-cursor-hover
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-lg text-white">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent rounded-sm font-display text-[0.625rem] font-semibold tracking-[0.05em] uppercase text-black mb-2">
                  {item.platform}
                </span>
                <span className="block font-display text-[0.9375rem] font-semibold leading-tight">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
