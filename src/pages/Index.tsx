import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { Event } from "@/types";
import { eventService } from "@/services/eventService";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventService.getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const featuredEvents = events.filter(event => event.isFeatured);
  const upcomingEvents = events.filter(event => event.isApproved);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Featured Events */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground">Don't miss out on these amazing experiences</p>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : featuredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">No featured events available</p>
        )}
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Explore what's happening near you</p>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-12">No upcoming events available</p>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
