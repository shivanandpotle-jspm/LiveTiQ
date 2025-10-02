// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: `${API_BASE_URL}/users/signup`,
  LOGIN: `${API_BASE_URL}/users/login`,
  
  // Event endpoints
  EVENTS: `${API_BASE_URL}/events`,
  EVENT_BY_ID: (id: string) => `${API_BASE_URL}/events/${id}`,
  
  // Ticket endpoints
  TICKETS: `${API_BASE_URL}/tickets`,
  TICKET_BY_ID: (id: string) => `${API_BASE_URL}/tickets/${id}`,
};

export default API_BASE_URL;
