import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Footer from "@/components/Footer";
import { mockEvents } from "@/data/mockEvents";

const Index = () => {
  const featuredEvents = mockEvents.filter(event => event.featured);
  const upcomingEvents = mockEvents;

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-muted-foreground">Explore what's happening near you</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
