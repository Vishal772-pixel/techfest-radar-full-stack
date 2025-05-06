"use client"

import { useState } from "react"
import { EventCard } from "../components/event-card"
import { EventFilters } from "../components/event-filters"
import { eventsData } from "../data/events.ts"
import type { EventType } from "../types/event"

export function EventsSection() {
  const [filteredEvents, setFilteredEvents] = useState<EventType[]>(eventsData)
  const [activeFilters, setActiveFilters] = useState({
    type: "all",
    duration: "all",
    price: "all",
  })

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters)

    let filtered = eventsData

    // Filter by type
    if (filters.type !== "all") {
      filtered = filtered.filter((event) => event.type === filters.type)
    }

    // Filter by duration
    if (filters.duration !== "all") {
      filtered = filtered.filter((event) => {
        if (filters.duration === "1-day" && event.duration <= 1) return true
        if (filters.duration === "2-3-days" && event.duration > 1 && event.duration <= 3) return true
        if (filters.duration === "week" && event.duration > 3) return true
        return false
      })
    }

    // Filter by price
    if (filters.price !== "all") {
      filtered = filtered.filter((event) => {
        if (filters.price === "free" && event.price === 0) return true
        if (filters.price === "paid" && event.price > 0) return true
        return false
      })
    }

    setFilteredEvents(filtered)
  }

  return (
    <section className="py-16 container px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Upcoming Events</h2>
          <p className="text-muted-foreground mt-2">Discover and register for the latest tech events</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">Showing {filteredEvents.length} events</p>
      </div>

      <EventFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium">No events found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </section>
  )
}
