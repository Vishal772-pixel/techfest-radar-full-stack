"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "./components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, IndianRupee, MapPin, Users, Award, CheckCircle } from "lucide-react"
import { eventsData } from "@/Frontend/data/events"

export default function EventPage({ params }: { params: { id: string } }) {
  const event = eventsData.find((e) => e.id === params.id)

  if (!event) {
    notFound()
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        message: "",
      })
    }, 1500)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-IN", options)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative h-[300px] md:h-[400px]">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container">
            <Badge
              variant={event.type === "hackathon" ? "default" : event.type === "workshop" ? "secondary" : "outline"}
              className={`
                mb-4
                ${event.type === "hackathon" ? "bg-purple-600" : ""}
                ${event.type === "workshop" ? "bg-blue-600" : ""}
                ${event.type === "conference" ? "bg-cyan-600" : ""}
              `}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{event.title}</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">{event.description.substring(0, 120)}...</p>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="prizes">Prizes</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-6 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About the Event</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
                    <div className="space-y-4">
                      {event.schedule?.map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 border border-border/40 rounded-lg bg-muted/20">
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">{item.time}</div>
                          </div>
                          <div>
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="eligibility" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
                  <ul className="space-y-2">
                    {event.eligibility?.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="prizes" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">Prizes & Rewards</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {event.prizes?.map((prize, index) => (
                      <Card key={index} className="bg-muted/20 border-border/40">
                        <CardHeader className="pb-2">
                          <CardTitle className="flex items-center">
                            <Award className="h-5 w-5 mr-2 text-yellow-500" />
                            {prize.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-muted-foreground">{prize.description}</CardDescription>
                          {prize.value && (
                            <p className="mt-2 font-medium flex items-center">
                              <IndianRupee className="h-4 w-4 mr-1" />
                              {prize.value}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <Card className="bg-muted/20 border-border/40 sticky top-20">
                <CardHeader>
                  <CardTitle>Event Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Date</h3>
                      <p className="text-sm text-muted-foreground">{formatDate(event.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Duration</h3>
                      <p className="text-sm text-muted-foreground">
                        {event.duration} {event.duration === 1 ? "day" : "days"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm text-muted-foreground">{event.college}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Team Size</h3>
                      <p className="text-sm text-muted-foreground">{event.teamSize || "Individual"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <IndianRupee className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Registration Fee</h3>
                      <p className="text-sm text-muted-foreground">{event.price === 0 ? "Free" : `₹${event.price}`}</p>
                    </div>
                  </div>

                  <Button className="w-full mt-4">Register Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <Card className="bg-muted/20 border-border/40">
              <CardHeader>
                <CardTitle>Register for {event.title}</CardTitle>
                <CardDescription>Fill out the form below to register for this event.</CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-500 p-4 rounded-md text-center">
                    <h3 className="font-bold text-lg mb-2">Registration Successful!</h3>
                    <p>
                      Thank you for registering for {event.title}. We've sent the confirmation details to your email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="college" className="text-sm font-medium">
                          College/University
                        </label>
                        <Input
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="Your college or university"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="year" className="text-sm font-medium">
                        Year of Study
                      </label>
                      <Input
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="e.g., 2nd Year, 3rd Year"
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Why do you want to participate? (Optional)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us why you're interested in this event"
                        className="min-h-[100px] bg-background/50"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Registration"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
