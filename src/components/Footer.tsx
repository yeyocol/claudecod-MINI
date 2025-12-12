import { Container } from './ui'

export default function Footer() {
  return (
    <footer className="py-xl bg-black text-gray-500 border-t border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-sm text-center md:text-left">
          <span className="font-display font-semibold text-white">
            Portfolio<span className="text-accent">.</span>
          </span>
          <span className="text-[0.8125rem]">
            Case Study — MINI Cooper "Pruébate la actitud" — 2024
          </span>
        </div>
      </Container>
    </footer>
  )
}
