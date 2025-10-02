import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Event } from "@/types";
import { format } from "date-fns";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const lowestPrice = Math.min(...event.ticketTiers.map(tier => tier.price));
  const eventDate = format(new Date(event.date), 'MMM dd, yyyy');

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={event.images[0] || '/placeholder.svg'}
          alt={event.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? 'fill-primary text-primary' : 'text-foreground'}`}
          />
        </button>
        {event.isFeatured && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="font-semibold">
              Featured
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{event.category}</Badge>
          <span className="text-lg font-bold text-primary">₹{lowestPrice}</span>
        </div>
        <h3 className="font-semibold text-lg mb-3 line-clamp-1">{event.title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{eventDate}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="line-clamp-1">{event.location.venue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => navigate(`/events/${event._id}`)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
