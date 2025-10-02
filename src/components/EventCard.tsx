import { Calendar, MapPin, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  price: string;
  image: string;
  featured?: boolean;
}

const EventCard = ({ title, category, date, location, price, image, featured }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02] duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur hover:bg-background/90"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs">
            {category}
          </Badge>
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
