# AGENTS.md

This document tracks significant changes and improvements made to the portfolio website by AI agents and human developers.

---

## 2025-11-16 - Initial Portfolio Website v3

**Commit:** `d47a2d6` - v3

### Overview
Complete portfolio website implementation using Next.js 16, React 19, and modern web technologies. This is a personal portfolio for Enzo GAZZOLI showcasing projects and providing contact functionality.

### Major Features Added

#### 1. **Core Application Structure**
- Next.js 16.0.3 with App Router architecture
- TypeScript 5 for type safety
- React 19.2.0 with modern component patterns
- Tailwind CSS 4 for utility-first styling

#### 2. **UI Components**
- **HeroSection**: Introduction section with profile image, bio, and CV download link
- **ProjectsSection**: Grid display of portfolio projects with filtering capabilities
- **ContactSection**: Contact form integration
- **Navbar**: Navigation component for site-wide navigation
- **Footer**: Site footer component
- **ProjectCard**: Reusable card component for project display
- **ProjectModal**: Modal dialog for detailed project views using Radix UI
- **ContactModal**: Modal for contact form using Radix UI Dialog

#### 3. **Interactive Features**
- Framer Motion integration for smooth animations and transitions
- Radix UI Dialog components for accessible modals
- Responsive design across mobile, tablet, and desktop
- Modern glassmorphism UI with gradient backgrounds and backdrop blur

#### 4. **Contact API**
- RESTful API endpoint at `/api/contact`
- Resend integration for email delivery
- Form validation and error handling
- Email templates with HTML formatting
- Sends notifications to `enzo.gazzoli@icloud.com`

#### 5. **Project Data Structure**
- TypeScript interfaces for project types
- Centralized project data in `src/data/projects.ts`
- Support for project metadata: title, tech stack, description, images, GitHub links
- Type: "web" categorization for filtering

#### 6. **Assets & Resources**
- CV PDF for download
- Custom favicon and profile picture
- Project SVG illustrations (portfolio, runner3d, space-shooter)
- Icon assets (file, globe, window, Vercel, Next.js logos)

#### 7. **Development Configuration**
- ESLint configuration for code quality
- PostCSS configuration for CSS processing
- TypeScript strict mode configuration
- Next.js optimized build configuration

### Tech Stack
- **Frontend**: Next.js 16, React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, Custom CSS
- **UI Libraries**: Radix UI (Dialog), Framer Motion, clsx
- **Email Service**: Resend
- **Development**: ESLint, PostCSS

### File Structure
```
portfolio-website/
├── public/
│   ├── CV.pdf
│   ├── pic.png
│   └── img/projects/
│       ├── portfolio.svg
│       ├── runner3d.svg
│       └── space-shooter.svg
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ContactModal.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ProjectsSection.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── project.ts
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts (via @tailwindcss/postcss)
└── package.json
```

### Notable Implementation Details

1. **Modern React Patterns**: Uses React 19 features with proper TypeScript typing
2. **Accessibility**: Radix UI components ensure ARIA-compliant modals and dialogs
3. **Performance**: Next.js Image optimization, proper code splitting, and lazy loading
4. **Responsive Design**: Mobile-first approach with responsive breakpoints
5. **Glassmorphism Design**: Modern UI aesthetic with backdrop blur and gradient overlays

---

## Future Enhancements (Potential)

- Add more projects to the portfolio
- Implement blog functionality
- Add dark/light theme toggle
- Integrate analytics
- Add project filtering by technology
- Implement i18n for multi-language support
- Add unit and integration tests

---

*This file is automatically updated by AI agents working on the project.*
