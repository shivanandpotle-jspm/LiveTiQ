export interface TicketTier {
  _id?: string;
  name: 'VIP' | 'Standard' | 'Student' | 'General Admission';
  price: number;
  totalQuantity: number;
  soldQuantity: number;
}

export interface Location {
  venue: string;
  address: string;
  coordinates?: [number, number];
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  category: 'Music' | 'Sports' | 'Tech' | 'Theater' | 'Arts' | 'Comedy';
  date: Date | string;
  location: Location;
  images: string[];
  ticketTiers: TicketTier[];
  organizer: {
    _id: string;
    name: string;
    email: string;
  } | string;
  isFeatured: boolean;
  isApproved: boolean;
  seatMapUrl?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'organizer' | 'admin';
}

export interface AuthResponse {
  status: string;
  token: string;
  data: {
    user: User;
  };
}

export interface EventsResponse {
  status: string;
  results: number;
  data: {
    events: Event[];
  };
}
