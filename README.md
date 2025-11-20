# 🚀 Portfolio Website

A modern and interactive portfolio built with **Next.js 16** and **React 19**, featuring a responsive interface, smooth animations, and internationalization (FR/EN). Showcasing my projects with a clean, professional design.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://enzo-gazzoli.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Modern UI/UX** with Tailwind CSS v4
- 🌍 **Bilingual** (French/English) with context-based i18n
- 🎭 **Smooth animations** powered by Framer Motion
- 📱 **Fully responsive** design
- ♿ **Accessible components** with Radix UI
- 📧 **Contact form** integrated with Resend API
- 🎯 **SEO optimized** with Next.js metadata
- ⚡ **Fast performance** with Next.js App Router

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utilities:** [clsx](https://github.com/lukeed/clsx)
- **Email Service:** [Resend](https://resend.com/)
- **Linting:** ESLint 9

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- A [Resend](https://resend.com/) API key (for contact form)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Taqinou/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> 📝 **Get your API key:** Sign up at [resend.com](https://resend.com/) and generate an API key from your dashboard.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the project on Vercel
3. Add your `RESEND_API_KEY` in environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Taqinou/portfolio-website)

### Other platforms

You can also deploy on:
- **Netlify:** Configure build command as `npm run build` and publish directory as `.next`
- **Railway/Render:** Use the provided Dockerfile (if created)

## 📁 Project Structure

```
portfolio-website/
├── public/                    # Static assets
│   └── img/
│       └── projects/         # Project images
│
├── src/
│   ├── __tests__/            # Test files
│   │   ├── components/       # Component tests
│   │   ├── hooks/            # Hook tests
│   │   └── README.md         # Testing guide
│   │
│   ├── app/                  # Next.js App Router
│   │   ├── api/              # API routes
│   │   │   └── contact/      # Contact form API
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   │
│   ├── components/           # React components
│   │   ├── features/         # Feature-specific components
│   │   │   ├── LanguageSwitch.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ScrollReveal.tsx
│   │   │
│   │   ├── layout/           # Layout components
│   │   │   ├── BackgroundCanvas.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTopButton.tsx
│   │   │
│   │   ├── modals/           # Modal components
│   │   │   ├── ContactModal.tsx
│   │   │   └── ProjectModal.tsx
│   │   │
│   │   ├── sections/         # Page sections
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   └── ProjectsSection.tsx
│   │   │
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── ContactCard.tsx
│   │       └── SectionHeader.tsx
│   │
│   ├── contexts/             # React contexts
│   │   └── LanguageContext.tsx  # i18n state management
│   │
│   ├── data/                 # Static data
│   │   ├── projects.ts       # Project information
│   │   └── texts.ts          # Translation strings
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useContactForm.ts # Contact form logic
│   │   └── useScrollReveal.ts # Scroll animation logic
│   │
│   ├── styles/               # Global styles
│   │   └── globals.css       # Tailwind CSS + custom styles
│   │
│   └── types/                # TypeScript type definitions
│       ├── contact.ts        # Contact form types
│       ├── language.ts       # Language/i18n types
│       └── project.ts        # Project types
│
├── .env.local                # Environment variables (gitignored)
├── .env.example              # Environment variables template
├── jest.config.ts            # Jest configuration
├── jest.setup.ts             # Jest setup file
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── README.md                 # Project documentation
└── tsconfig.json             # TypeScript configuration
```

### Component Organization

#### **features/** - Feature Components
Components that provide specific functionality:
- `LanguageSwitch`: Language switcher (FR/EN)
- `ProjectCard`: Individual project card display
- `ScrollReveal`: Scroll-triggered animations wrapper

#### **layout/** - Layout Components
Components that structure the page:
- `BackgroundCanvas`: Animated background
- `Footer`: Site footer
- `ScrollToTopButton`: Back to top functionality

#### **modals/** - Modal Dialogs
Full-screen overlay components:
- `ContactModal`: Contact form modal
- `ProjectModal`: Detailed project view

#### **sections/** - Page Sections
Main content sections of the homepage:
- `HeroSection`: Hero/landing section
- `ProjectsSection`: Projects showcase
- `ContactSection`: Contact information

#### **ui/** - Reusable UI Components
Generic, reusable UI elements:
- `Button`: Styled button/link component
- `ContactCard`: Contact method card
- `SectionHeader`: Section title with label

## 🎨 Customization

### Adding a new project

Edit `src/data/projects.ts`:

```typescript
{
  slug: "my-project",
  title: "My Project",
  titleKey: "projectMyProjectTitle",
  type: "web",
  tech: ["React", "TypeScript"],
  descriptionKey: "projectMyProjectDesc",
  image: "/img/projects/my-project.svg",
  github: "https://github.com/username/project",
  status: "completed",
  visit: "https://myproject.com"
}
```

Don't forget to add translations in `src/data/texts.ts`.

### Changing colors/theme

Edit `src/styles/globals.css` and modify Tailwind classes in components.

## 🧪 Testing

This project uses Jest and React Testing Library for testing.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Test Structure

- `src/__tests__/components/` - Component tests
- `src/__tests__/hooks/` - Custom hooks tests
- Coverage goal: 80%+ for critical business logic

## 🏗️ Architecture

### Data Flow

```
Data (data/) → Context (contexts/) → Components (components/)
                  ↓
              Hooks (hooks/) ← Components
                  ↓
              API (app/api/)
```

### State Management

- **Global State**: React Context (`LanguageContext`)
- **Local State**: useState in components
- **Form State**: Custom hooks (`useContactForm`)
- **Animation State**: Framer Motion + custom hooks (`useScrollReveal`)

### Best Practices

1. **Component Location**: Place components in the appropriate category folder
2. **Reusability**: UI components should be generic and configurable
3. **Type Safety**: All data structures have TypeScript types
4. **Testing**: Components and hooks have corresponding test files
5. **Documentation**: Complex logic is documented with comments

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**GAZZOLI Enzo**

- Portfolio: [enzo-gazzoli.vercel.app](https://enzo-gazzoli.vercel.app)
- GitHub: [@Taqinou](https://github.com/Taqinou)
- Fiverr: [Taqin](https://fr.fiverr.com/s/DBkdb3X)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

⭐ **Star this repo** if you find it helpful!
