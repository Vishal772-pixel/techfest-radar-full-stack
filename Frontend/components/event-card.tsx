import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, IndianRupee } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { EventType } from "@/types/event"

interface EventCardProps {

  
  event: EventType
}

export function EventCard({ event }: EventCardProps) {
  const { id, title, image, college, location, date, type, price, duration } = event

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("en-IN", options)
  }

  return (
    <Link href={`/events/${id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:border-purple-500/50 hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <Badge
              variant={type === "hackathon" ? "default" : type === "workshop" ? "secondary" : "outline"}
              className={`
                ${type === "hackathon" ? "bg-purple-600" : ""}
                ${type === "workshop" ? "bg-blue-600" : ""}
                ${type === "conference" ? "bg-cyan-600" : ""}
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-bold text-lg line-clamp-2 mb-2">{title}</h3>

          <div className="space-y-2 text-sm">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(date)}</span>
            </div>

            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">
                {college}, {location}
              </span>
            </div>

            <div className="flex items-center text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              <span>
                {duration} {duration === 1 ? "day" : "days"}
              </span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span className="font-medium">{price === 0 ? "Free" : `₹${price}`}</span>
          </div>

          <Badge variant="outline" className="gradient-border">
            View Details
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  )
}
