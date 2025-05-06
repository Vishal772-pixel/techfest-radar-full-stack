"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, X } from "lucide-react"

interface EventFiltersProps {
  onFilterChange: (filters: any) => void
  activeFilters: {
    type: string
    duration: string
    price: string
  }
}

export function EventFilters({ onFilterChange, activeFilters }: EventFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleTypeChange = (value: string) => {
    onFilterChange({ ...activeFilters, type: value })
  }

  const handleDurationChange = (value: string) => {
    onFilterChange({ ...activeFilters, duration: value })
  }

  const handlePriceChange = (value: string) => {
    onFilterChange({ ...activeFilters, price: value })
  }

  const resetFilters = () => {
    onFilterChange({
      type: "all",
      duration: "all",
      price: "all",
    })
  }

  const hasActiveFilters =
    activeFilters.type !== "all" || activeFilters.duration !== "all" || activeFilters.price !== "all"

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="outline"
          size="sm"
          className="md:hidden flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Filter className="h-4 w-4" />
          Filters
          {hasActiveFilters && <span className="flex h-2 w-2 rounded-full bg-purple-500"></span>}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="text-muted-foreground">
            <X className="h-4 w-4 mr-2" />
            Reset filters
          </Button>
        )}
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isOpen ? "block" : "hidden md:grid"}`}>
        <div>
          <label className="text-sm font-medium mb-1 block">Event Type</label>
          <Select value={activeFilters.type} onValueChange={handleTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="hackathon">Hackathon</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="meetup">Meetup</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Duration</label>
          <Select value={activeFilters.duration} onValueChange={handleDurationChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any duration</SelectItem>
              <SelectItem value="1-day">1 day</SelectItem>
              <SelectItem value="2-3-days">2-3 days</SelectItem>
              <SelectItem value="week">Week or longer</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">Price</label>
          <Select value={activeFilters.price} onValueChange={handlePriceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any price</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
