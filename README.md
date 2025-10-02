# LiveTiQ - Event Ticketing Platform

A modern event ticketing platform built with React, TypeScript, and Tailwind CSS, integrated with a Node.js/Express/MongoDB backend.

## Features

- 🎫 Browse and search events
- 🔐 User authentication (login/signup)
- 🎨 Dark theme optimized
- 📱 Fully responsive design
- 🎟️ Multiple ticket tiers per event
- ⭐ Featured events showcase
- 🔍 Category-based filtering
- 💳 Seamless booking flow

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- React Router
- React Query
- Shadcn UI Components
- Lucide React Icons

### Backend (Required)
Your backend should be running at `http://localhost:5000` with the following endpoints:

#### Auth Endpoints
- `POST /api/v1/users/signup` - User registration
- `POST /api/v1/users/login` - User login

#### Event Endpoints
- `GET /api/v1/events` - Get all events (with optional query params)
- `GET /api/v1/events/:id` - Get single event
- `POST /api/v1/events` - Create event (auth required)
- `PATCH /api/v1/events/:id` - Update event (auth required)
- `DELETE /api/v1/events/:id` - Delete event (auth required)

## Getting Started

### Prerequisites
- Node.js 16+
- Your backend server running on port 5000

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd livetiq-frontend
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Make sure your backend is running on `http://localhost:5000`

## Environment Configuration

If your backend is running on a different URL, you can set it via environment variable:

Create a `.env` file in the root (note: This will not work on Lovable, only locally):
```
VITE_API_URL=http://your-backend-url/api/v1
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Shadcn UI components
│   ├── Navbar.tsx    # Navigation bar with auth
│   ├── Hero.tsx      # Hero section
│   ├── EventCard.tsx # Event card component
│   └── Footer.tsx    # Footer component
├── pages/            # Page components
│   ├── Index.tsx     # Home page
│   ├── Auth.tsx      # Login/Signup page
│   ├── EventDetails.tsx # Event details page
│   └── NotFound.tsx  # 404 page
├── services/         # API services
│   ├── authService.ts
│   └── eventService.ts
├── types/            # TypeScript types
│   └── index.ts
├── config/           # Configuration
│   └── api.ts        # API endpoints
├── hooks/            # Custom hooks
└── lib/              # Utility functions
```

## Features Details

### Authentication
- JWT-based authentication
- Token stored in localStorage
- Protected routes support
- Login/Signup forms with validation

### Events
- Display featured and upcoming events
- Event details with ticket tiers
- Category-based filtering
- Search functionality
- Event creation (for organizers)

### Dark Theme
The application is optimized for dark mode with a custom color scheme:
- Primary: Teal/Cyan (#00CED1)
- Secondary: Orange/Yellow
- Background: Dark Navy
- Consistent design tokens throughout

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Backend Integration

This frontend expects your backend to follow the structure from:
`https://github.com/shivanandpotle-jspm/backend`

Make sure your backend:
1. Is running on port 5000 (or configure VITE_API_URL)
2. Has CORS enabled for the frontend origin
3. Returns responses in the expected format
4. Implements JWT authentication

## Important Notes

⚠️ **Backend Code**: Lovable only handles frontend code. Your backend at `https://github.com/shivanandpotle-jspm/backend` needs to be deployed separately (e.g., on Heroku, Railway, or any Node.js hosting service).

⚠️ **API URL Configuration**: Update the API_BASE_URL in `src/config/api.ts` to point to your deployed backend URL.

## How can I edit this code?

**Use Lovable**
Simply visit the Lovable Project and start prompting. Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**
If you want to work locally using your own IDE, you can clone this repo and push changes.

## Deployment

Deploy the frontend via Lovable's built-in deployment or any static hosting service:
- Vercel
- Netlify  
- GitHub Pages
- Cloudflare Pages

Make sure to set the `VITE_API_URL` environment variable to your backend's URL.

## License

This project is licensed under the MIT License.
