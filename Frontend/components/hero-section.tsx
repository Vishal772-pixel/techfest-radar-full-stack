"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Zap } from "lucide-react"

const quotes = [
  {
    text: "Innovation happens at the intersection of technology and creativity.",
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
  },
  {
    text: "Hackathons are where ideas transform into reality in just 48 hours.",
    icon: <Code className="h-5 w-5 text-blue-500" />,
  },
  {
    text: "The future belongs to those who build it today.",
    icon: <Cpu className="h-5 w-5 text-purple-500" />,
  },
]

export function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-muted px-3 py-1 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span>Discover the best tech events across India</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Next <span className="gradient-text">Tech Adventure</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover and register for the most exciting hackathons, workshops, and tech events happening across India.
          </p>

          <div className="mt-8 h-16 overflow-hidden">
            <div className="flex items-center justify-center space-x-2 rounded-lg border border-border/40 bg-muted/50 px-4 py-2 transition-all">
              {quotes[currentQuote].icon}
              <p className="text-sm md:text-base font-medium">{quotes[currentQuote].text}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Explore Events
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gradient-border">
              Submit Your Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
