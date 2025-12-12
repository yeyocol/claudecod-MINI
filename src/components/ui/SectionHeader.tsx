import { motion } from 'framer-motion'

interface SectionHeaderProps {
  number: string
  label: string
  className?: string
}

export default function SectionHeader({ number, label, className = '' }: SectionHeaderProps) {
  return (
    <div className={className}>
      <motion.span
        className="section-number block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {number}
      </motion.span>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {label}
      </motion.span>
    </div>
  )
}
