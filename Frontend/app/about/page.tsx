import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="gradient-text">TechfestRadar</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Connecting tech enthusiasts with the best events across India
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                TechfestRadar was created with a simple mission: to make it easier for tech enthusiasts, students, and
                professionals to discover and participate in the best tech events across India.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that hackathons, workshops, and tech conferences are crucial for learning, networking, and
                innovation. Our platform serves as a comprehensive radar for all things tech in India.
              </p>
              <p className="text-muted-foreground">
                Whether you're looking to participate in your first hackathon, enhance your skills through workshops, or
                network at industry conferences, TechfestRadar is your go-to resource.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/team.png?height=400&width=600" alt="Tech event" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-muted/20 p-6 rounded-lg border border-border/40">
                <h3 className="text-xl font-bold mb-4">Comprehensive Listings</h3>
                <p className="text-muted-foreground">
                  We curate and list the most exciting hackathons, workshops, conferences, and meetups happening across
                  India.
                </p>
              </div>
              <div className="bg-muted/20 p-6 rounded-lg border border-border/40">
                <h3 className="text-xl font-bold mb-4">Detailed Information</h3>
                <p className="text-muted-foreground">
                  Get all the details you need: dates, venues, eligibility criteria, prizes, and registration
                  information.
                </p>
              </div>
              <div className="bg-muted/20 p-6 rounded-lg border border-border/40">
                <h3 className="text-xl font-bold mb-4">Event Submission</h3>
                <p className="text-muted-foreground">
                  Organizing a tech event? Submit your event details to reach thousands of tech enthusiasts across
                  India.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Stay updated with the latest tech events, get exclusive access to resources, and connect with fellow tech
              enthusiasts.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
