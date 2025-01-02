import { ReactNode } from 'react'

interface DsaLayoutProps {
  children: ReactNode
  title: string
}

export default function DsaLayout({ children, title }: DsaLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        {children}
      </main>
    </div>
  )
}

