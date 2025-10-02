import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Step In, <span className="text-primary">Stand Out!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              Discover amazing events happening around you. Book tickets instantly with secure payments and get your e-tickets in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto animate-fade-in">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events, artists, venues..."
                className="pl-12 h-14 text-base bg-card border-2 focus:border-primary"
              />
            </div>
            <Button size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-base font-semibold">
              Search
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm animate-fade-in">
            <Button variant="outline" size="sm" className="rounded-full">
              🎵 Music
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              ⚽ Sports
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              💻 Tech
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              🎭 Theater
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              🎨 Arts
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 h-20 w-20 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  );
};

export default Hero;
