import CodeCard from '@/components/CodeCard'
import MovingSolarHeader from '@/components/MovingSolarHeader'
import AIFutureImage from '@/components/AIFutureImage'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-mint">Portfolio</h1>
        <MovingSolarHeader title="System Online" />
        <AIFutureImage />
        <CodeCard />
      </div>
    </main>
  )
}


