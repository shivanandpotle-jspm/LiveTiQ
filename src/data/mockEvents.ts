export interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  price: string;
  image: string;
  featured?: boolean;
}

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival 2025",
    category: "Music",
    date: "Aug 15, 2025 • 6:00 PM",
    location: "Central Park Arena, New York",
    price: "$89",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "Tech Innovation Summit",
    category: "Tech",
    date: "Sep 20, 2025 • 9:00 AM",
    location: "Convention Center, San Francisco",
    price: "$249",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "3",
    title: "NBA Finals - Game 5",
    category: "Sports",
    date: "Oct 10, 2025 • 7:30 PM",
    location: "Madison Square Garden, NYC",
    price: "$350",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "4",
    title: "Broadway: The Phantom of the Opera",
    category: "Theater",
    date: "Nov 5, 2025 • 8:00 PM",
    location: "Broadway Theater, New York",
    price: "$125",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Contemporary Art Exhibition",
    category: "Arts",
    date: "Dec 1, 2025 • 10:00 AM",
    location: "Metropolitan Museum, New York",
    price: "$45",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Electronic Dance Night",
    category: "Music",
    date: "Nov 15, 2025 • 10:00 PM",
    location: "Club Nexus, Miami",
    price: "$65",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "Champions League Final",
    category: "Sports",
    date: "Dec 20, 2025 • 3:00 PM",
    location: "Emirates Stadium, London",
    price: "$280",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Stand-Up Comedy Special",
    category: "Comedy",
    date: "Oct 25, 2025 • 8:00 PM",
    location: "Comedy Store, Los Angeles",
    price: "$55",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=600&fit=crop",
  },
];
