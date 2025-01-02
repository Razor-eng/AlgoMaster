"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Info } from 'lucide-react'

interface TypeModalProps {
  title: string
  description: string
  content: React.ReactNode
}

export function TypeModal({ title, description, content }: TypeModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
          <span className="sr-only">More info about {title}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4 text-black dark:text-white max-h-[80vh] overflow-scroll">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  )
}

