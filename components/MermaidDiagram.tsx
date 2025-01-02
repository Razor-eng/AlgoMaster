'use client'

import { useEffect, useState } from 'react'
import mermaid from 'mermaid'
import { Loader } from 'lucide-react'

interface MermaidDiagramProps {
  chart: string
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (hasMounted) {
      mermaid.initialize({ startOnLoad: true })
      mermaid.contentLoaded()
    }
  }, [hasMounted])

  if (!hasMounted) {
    return <div className='flex-1 flex items-center justify-start'><Loader className='size-5 animate-spin duration-1000 text-muted-foreground' /></div>
  }

  return <div className="mermaid">{chart}</div>
}
