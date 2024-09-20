import InsightRoll from '@/src/components/About/InsightRoll'

const insights = [
  '20+ Projetos concluídos',
  '3+ Anos de Freelancer',
  '99% Satisfação do Cliente',
]

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  )
}
