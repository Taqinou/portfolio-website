# AGENTS.md

## Project Overview
This is a modern portfolio website built with Next.js 16, React 19, and TypeScript. The project showcases a personal portfolio with interactive components, smooth animations, and a contact form integration.

## Initial Setup (v3 - Nov 16, 2025)

### Core Technologies
- **Framework**: Next.js 16.0.3 with App Router
- **React**: Version 19.2.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animations**: Framer Motion v12.23.24
- **UI Components**: Radix UI (Dialog)
- **Email Service**: Resend v6.4.2

### Project Structure
The application follows a modern Next.js structure with the App Router:

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Home page composition
├── components/
│   ├── ContactModal.tsx        # Modal contact form with state management
│   ├── ContactSection.tsx      # Contact section trigger
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Hero with profile and intro
│   ├── Navbar.tsx              # Navigation bar
│   ├── ProjectCard.tsx         # Individual project card
│   ├── ProjectModal.tsx        # Project details modal
│   └── ProjectsSection.tsx     # Projects grid section
├── data/
│   └── projects.ts             # Project data configuration
├── styles/
│   └── globals.css             # Global styles and Tailwind imports
└── types/
    └── project.ts              # TypeScript project type definitions
```

### Key Features Implemented

#### 1. Hero Section
- Profile image display with circular border and gradient effects
- Personal introduction with highlighted text
- CV download link
- Responsive grid layout for desktop and mobile

#### 2. Contact System
- **Modal-based contact form** using Radix UI Dialog
- Form validation with required fields (name, email, message)
- **Integration with Resend API** for email delivery
- Success/error state handling with loading indicators
- Smooth animations using Framer Motion
- API route at `/api/contact` handling POST requests
- Email sent to: enzo.gazzoli@icloud.com

#### 3. Projects Showcase
- Project data structure with:
  - Slug, title, type
  - Technology stack array
  - Description
  - Image and GitHub link
- Initial project: Portfolio Website itself (meta-showcase)
- Modal view for detailed project information

#### 4. Design System
- **Dark theme** with gradient backgrounds
- Glass morphism effects (backdrop blur, semi-transparent layers)
- Border styles using white opacity variations
- Blue accent color (#3b82f6 / blue-400)
- Cyan accent for gradients
- Consistent rounded corners (lg, 2xl, 3xl)
- Hover states with scale and shadow transitions

#### 5. Configuration Files
- **ESLint**: Configured with Next.js recommended rules
- **TypeScript**: Strict mode enabled with path aliases
- **PostCSS**: Tailwind CSS processing
- **Next.js Config**: TypeScript configuration file

### Assets
- Favicon and profile picture (`pic.png`)
- Project SVG icons (portfolio, runner3d, space-shooter)
- CV PDF document
- Various Next.js and Vercel default icons

### Environment Variables Required
```
RESEND_API_KEY=your_resend_api_key_here
```

### Development Commands
```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Architecture Decisions

### Component Architecture
- **Client-side interactivity** marked with 'use client' directive where needed
- Server components by default for optimal performance
- Modal patterns using Radix UI for accessibility
- Framer Motion for declarative animations

### Styling Approach
- Tailwind CSS v4 with modern configuration
- Utility-first approach with inline classes
- Custom gradient backgrounds and glass effects
- Responsive design with mobile-first breakpoints

### API Design
- RESTful API route for contact form
- Server-side email sending for security
- Proper error handling and status codes
- JSON request/response format

## Future Considerations
- Add more projects to the portfolio
- Implement project filtering by technology
- Add analytics tracking
- Consider adding a blog section
- Internationalization (i18n) support
- Dark/light mode toggle (currently dark-only)
- Form spam protection (rate limiting, CAPTCHA)

---

**Last Updated**: November 16, 2025  
**Commit**: d47a2d6 (v3)  
**Author**: Taqinou (enzo.gazzoli@icloud.com)
