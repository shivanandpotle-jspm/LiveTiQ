import { API_ENDPOINTS } from '@/config/api';
import { Event, EventsResponse } from '@/types';
import { authService } from './authService';

export const eventService = {
  async getAllEvents(params?: {
    category?: string;
    page?: number;
    limit?: number;
    sort?: string;
  }): Promise<Event[]> {
    const queryParams = new URLSearchParams();
    
    if (params?.category) queryParams.append('category', params.category);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.sort) queryParams.append('sort', params.sort);

    const url = `${API_ENDPOINTS.EVENTS}${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const data: EventsResponse = await response.json();
    return data.data.events;
  },

  async getEventById(id: string): Promise<Event> {
    const response = await fetch(API_ENDPOINTS.EVENT_BY_ID(id), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch event');
    }

    const data = await response.json();
    return data.data.event;
  },

  async createEvent(eventData: Partial<Event>): Promise<Event> {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Authentication required');
    }

    const response = await fetch(API_ENDPOINTS.EVENTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create event');
    }

    const data = await response.json();
    return data.data.event;
  },

  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event> {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Authentication required');
    }

    const response = await fetch(API_ENDPOINTS.EVENT_BY_ID(id), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update event');
    }

    const data = await response.json();
    return data.data.event;
  },

  async deleteEvent(id: string): Promise<void> {
    const token = authService.getToken();
    
    if (!token) {
      throw new Error('Authentication required');
    }

    const response = await fetch(API_ENDPOINTS.EVENT_BY_ID(id), {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete event');
    }
  },
};
