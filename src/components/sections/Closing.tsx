import { motion } from 'framer-motion'
import { Container, Button } from '../ui'

export default function Closing() {
  return (
    <section
      id="cierre"
      className="py-6xl bg-black text-white text-center min-h-[90vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&q=80"
          alt="MINI Cooper"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-15 blur-[60px]"
          style={{
            background: 'radial-gradient(ellipse at center, #FFD23F 0%, transparent 60%)',
          }}
        />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.h2
            className="heading-display mb-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            MINI no solo se maneja.
            <br />
            <span className="text-accent">Se siente.</span>
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button href="#" variant="primary">
              Volver al portafolio
            </Button>
            <Button href="#hero" variant="outline-light">
              Ver de nuevo
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
