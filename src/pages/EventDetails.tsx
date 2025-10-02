import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Event } from '@/types';
import { eventService } from '@/services/eventService';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Loader2, ArrowLeft, Ticket } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;
      
      try {
        const data = await eventService.getEventById(id);
        setEvent(data);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load event details',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Image */}
          <div>
            <img
              src={event.images[0] || '/placeholder.svg'}
              alt={event.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Event Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>{event.category}</Badge>
                {event.isFeatured && <Badge variant="secondary">Featured</Badge>}
              </div>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{format(new Date(event.date), 'PPP')}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{event.location.venue}, {event.location.address}</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">About This Event</h2>
              <p className="text-muted-foreground">{event.description}</p>
            </div>

            {/* Ticket Tiers */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Available Tickets</h2>
              <div className="space-y-3">
                {event.ticketTiers.map((tier, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Ticket className="h-4 w-4" />
                            <h3 className="font-semibold">{tier.name}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {tier.totalQuantity - tier.soldQuantity} / {tier.totalQuantity} available
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">₹{tier.price}</p>
                          <Button size="sm" className="mt-2">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;
