# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

### What is MAKKN Landing?

MAKKN Landing is the official corporate website for **MAKKN Technologies, Inc.**, an AI solutions company founded in 2025 and based in Cairo, Egypt. The website serves as the primary digital presence for showcasing MAKKN's AI-powered products and services to potential clients and partners.

### Business Context

**Company**: MAKKN Technologies, Inc.  
**Founded**: 2025  
**Location**: Cairo, Egypt  
**Industry**: Artificial Intelligence Solutions & Services  
**Target Audience**: Businesses seeking AI-powered automation, data intelligence, and custom AI solutions

### Purpose & Business Goals

The website aims to:
- **Showcase AI Solutions**: Present MAKKN's portfolio of AI products including Customer Support Intelligence, AI Talent Assistant, Data Intelligence, Document Intelligence, Recommendation Engine, Growth Intelligence, and Data Structuring Engine
- **Generate Leads**: Capture potential client inquiries through contact forms and demo booking functionality
- **Engage Visitors**: Provide an interactive AI-powered chatbot that answers questions about MAKKN's offerings 24/7
- **Build Credibility**: Demonstrate technical expertise through modern web design and integrated AI capabilities
- **Support Recruitment**: Enable job applications through a dedicated careers form with resume upload
- **Drive Conversions**: Guide visitors toward booking product demos and initiating business conversations

### Key Features & Capabilities

1. **AI-Powered Chatbot**
   - Integrated Google Gemini 2.5 Flash AI model
   - Provides instant, intelligent responses to MAKKN-related questions
   - Maintains conversation history across sessions (localStorage persistence)
   - Restricted to answer only MAKKN-specific queries to maintain focus

2. **Product Showcases**
   - Dedicated pages for each AI solution with detailed features, benefits, and use cases
   - Interactive agent carousel highlighting key products
   - Visual demonstrations and value propositions
   - Product-specific routes:
     - Customer Support Intelligence (`/customer-support-agent`)
     - Document Intelligence (`/data-structuring-engine`)
     - Data Intelligence (`/data-intelligence`)
     - Recommendation Engine (`/recommendation-engine`)
     - Growth Intelligence (`/marketing-sales-agent`)

3. **Lead Generation System**
   - Contact form for general inquiries
   - Book demo functionality for product demonstrations
   - Career application form with resume upload support
   - Automated email notifications to both company and submitters
   - Server-side validation and secure form processing

4. **Admin Dashboard** (NEW)
   - Internal job management system at `/admin`
   - Job posting CRUD operations (create, read, update, delete)
   - Application tracking and review workflow
   - Real-time statistics dashboard showing active jobs and pending applications
   - Sidebar navigation with badge indicators for new applications
   - Job status toggles (active/inactive)

5. **Careers Management System**
   - Dynamic job listings fetched from `data/jobs.ts`
   - Structured job data with TypeScript interfaces (Job, JobType, JobStatus)
   - Application submission with resume upload
   - Application status tracking (new, reviewing, shortlisted, rejected)
   - Empty state handling for when no positions are available
   - Job cards with department, location, and type badges

6. **Industries Section** (NEW)
   - Industry-specific landing pages showcasing how MAKKN's AI solutions apply to different sectors
   - Hub page at `/industries` with 2x2 grid of industry cards
   - 4 dedicated industry pages:
     - AI for Real Estate (`/industries/ai-for-real-estate`)
     - AI for Retail & E-Commerce (`/industries/ai-for-retail-ecommerce`)
     - AI for Healthcare (`/industries/ai-for-healthcare`)
     - AI for Manufacturing (`/industries/ai-for-manufacturing`)
   - Each industry page features:
     - Key challenges specific to the industry
     - Relevant MAKKN solutions mapped to industry needs
     - Measurable benefits and statistics
     - CTA sections linking to `/contact` page
   - Structured data in `data/industries.tsx` with TypeScript interfaces
   - Reusable `IndustryPageTemplate` component for consistent page structure
   - Integrated into main navigation dropdown and footer
   - Light theme design matching homepage aesthetic (bg-gray-50, ParticlesBackground)

7. **Modern UI/UX Design**
   - Fully responsive design optimized for desktop, tablet, and mobile
   - Smooth animations powered by Framer Motion
   - Glass morphism visual effects (backdrop-blur with transparency)
   - Consistent purple brand identity (#6320ce)
   - Accessibility-focused component library (shadcn/ui + MUI Material)
   - Custom hooks for mobile detection and toast notifications

8. **Interactive Elements**
   - Animated scroll effects that enhance user engagement
   - Dynamic service cards and product displays
   - Smooth page transitions and micro-interactions
   - Loading states and error boundaries for enhanced UX

### Technology Stack & Architecture

**Frontend Framework**: Next.js 14.2.16 with App Router for modern, performance-optimized React development  
**Styling**: Tailwind CSS + shadcn/ui + MUI Material UI + Emotion (CSS-in-JS) + Framer Motion animations  
**UI Components**: 
- shadcn/ui (50 primitives based on Radix UI)
- MUI Material UI for advanced components
- Custom component variants via class-variance-authority
**Icons**: Lucide React icon library  
**AI Integration**: Google Generative AI v0.24.1 (Gemini 2.5 Flash) for chatbot functionality  
**Email Service**: Nodemailer via SMTP (Zoho) for form submissions  
**Deployment**: Vercel (primary) + Docker support for Google Cloud Run (alternate)  
**Build Tools**: pnpm for dependency management, TypeScript 5 for type safety  
**Utilities**: clsx + tailwind-merge for className management, autoprefixer for CSS

Originally scaffolded via v0.dev, the repository auto-syncs with v0.dev deployments and maintains continuous deployment through Vercel.

## Development Commands

```bash
# Development server (default: http://localhost:3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint check
pnpm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14.2.16 (App Router, standalone output)
- **Styling**: Tailwind CSS v3.4 + shadcn/ui + MUI Material + Emotion + Framer Motion
- **AI Integration**: Google Generative AI v0.24.1 (Gemini 2.5 Flash)
- **Email**: Nodemailer via SMTP (Zoho)
- **Deployment**: Vercel + Docker support (Google Cloud Build)
- **Type System**: TypeScript 5 with path aliases (@/*)
- **UI Libraries**: Radix UI primitives, Lucide React icons

### Directory Structure

```
app/
├── actions/                    # Server actions
│   ├── contact.ts             # Contact form submission
│   ├── careers.ts             # Career application submission
│   └── book-demo.ts           # Demo booking submission
├── api/                       # API routes
│   ├── test-email/            # Email testing endpoint
│   ├── test-career-email/     # Career email testing
│   └── check-email-config/    # Email config verification
├── admin/                     # Admin dashboard (NEW)
│   └── page.tsx              # Job & application management
├── careers/                   # Careers page
│   └── page.tsx
├── contact/                   # Contact page
│   ├── page.tsx
│   └── error.tsx             # Contact-specific error boundary
├── customer-support-agent/    # Product pages
├── data-intelligence/
├── data-structuring-engine/   # Product page
│   └── loading.tsx           # Loading state
├── marketing-sales-agent/     # Product page
├── recommendation-engine/     # Product page
├── industries/                # Industries section (NEW)
│   ├── page.tsx              # Industries hub page
│   ├── ai-for-real-estate/
│   │   └── page.tsx          # Real Estate industry page
│   ├── ai-for-retail-ecommerce/
│   │   └── page.tsx          # Retail & E-Commerce industry page
│   ├── ai-for-healthcare/
│   │   └── page.tsx          # Healthcare industry page
│   └── ai-for-manufacturing/
│       └── page.tsx          # Manufacturing industry page
├── privacy/                   # Legal pages
│   └── page.tsx
├── terms/
│   └── page.tsx
├── test-email/                # Email testing UI
│   └── page.tsx
├── error.tsx                  # Global error boundary
├── loading.tsx                # Global loading state
├── layout.tsx                 # Root layout with ContextProvider
└── page.tsx                   # Homepage

components/
├── admin/                     # Admin dashboard components
│   ├── AddJobModal.tsx       # Job CRUD modal
│   ├── ApplicationsPanel.tsx # Application management
│   ├── JobTable.tsx          # Job listings table
│   └── StatsBar.tsx          # Statistics dashboard
├── careers/                   # Careers components
│   ├── jobCard.tsx           # Individual job listing
│   └── emptyPositions.tsx    # Empty state
├── industries/                # Industries components (NEW)
│   └── IndustryPageTemplate.tsx  # Shared template for industry pages
├── ui/                        # shadcn/ui primitives (50 components)
│   ├── button.tsx
│   ├── dialog.tsx
│   ├── [48 other components]
├── Chatbot.tsx               # Main chatbot UI
├── BookDemoDialog.tsx        # Demo booking modal
├── agent-carousel.tsx        # Agent showcase carousel
├── main-navigation.tsx       # Primary navigation with Industries dropdown
├── IndustriesDropdown.tsx    # Industries dropdown component (NEW)
├── main-footer.tsx           # Footer with Industries section
├── animate-on-scroll.tsx     # Scroll animations
├── theme-provider.tsx        # Theme management
└── [15+ other feature components]

config/
└── gemini.ts                  # Gemini AI client + system prompt

contexts/
└── ChatbotContext.tsx         # Chatbot state, localStorage, Gemini integration

data/
├── agents.tsx                 # Agent product data
├── services.tsx               # Services data
├── values.tsx                 # Company values
├── company.tsx                # Company information
├── industries.tsx             # Industry data and interfaces (NEW)
├── jobs.ts                    # Job listings
└── applications.ts            # Career applications

hooks/                         # Custom React hooks (NEW)
├── use-mobile.tsx            # Mobile device detection
└── use-toast.ts              # Toast notification system

lib/
├── email.ts                   # Email sending (sendEmail, HTML generators)
└── utils.ts                   # cn() helper

styles/                        # Global styles (NEW)
└── globals.css               # Global CSS

public/                        # Static assets
├── images/
├── logos/
└── [GIFs, icons, etc.]
```

### Key Patterns

**1. Server Actions for Forms**
- Contact form: `app/actions/contact.ts` → uses `sendEmail()` from `lib/email.ts`
- Careers form: `app/actions/careers.ts`
- Book demo: `app/actions/book-demo.ts`
- All actions validate inputs server-side, send email to `info@makkn.com`, and send confirmation email to user

**2. Chatbot Implementation**
- UI: `components/Chatbot.tsx` (fixed bottom-right, expandable)
- State: `contexts/ChatbotContext.tsx` (manages conversation history, localStorage persistence)
- API: `config/gemini.ts` (Gemini 2.5 Flash with conversation history)
- System prompt restricts chatbot to only answer MAKKN-related questions
- Conversation history stored in localStorage as `chatList` and `__chat_{id}` keys

**3. Styling Approach**
- Primary brand color: `#6320ce` (purple, used inline in many components)
- Tailwind config extends with shadcn/ui design tokens
- Custom animations via Framer Motion for scroll effects (see `components/animate-on-scroll.tsx`)
- Glass morphism effects: `backdrop-blur-xl` + `bg-white/30` patterns

**4. Data Management**
- Static data lives in `data/` directory as TypeScript files exporting arrays
- Job listings: `data/jobs.ts` with TypeScript interfaces (Job, JobType, JobStatus)
- Applications: `data/applications.ts` with TypeScript interfaces (Application, ApplicationStatus)
- No database; forms trigger server actions that send emails
- Chatbot state persists to browser localStorage
- Admin system manages jobs and applications through in-memory state (no persistence)

**5. Admin Dashboard Architecture** (NEW)
- Route: `/admin` with sidebar layout
- Components:
  - `StatsBar.tsx`: Real-time metrics for jobs and applications
  - `JobTable.tsx`: CRUD operations for job postings
  - `AddJobModal.tsx`: Form for creating/editing jobs
  - `ApplicationsPanel.tsx`: Application review workflow with status management
- State: Client-side state management with React hooks
- Data flow: Reads from `data/jobs.ts` and `data/applications.ts`

**6. Careers System Architecture** (NEW)
- Dynamic job listings with filtering by status
- Job cards display: title, department, location, type, posted date
- Empty state component when no positions available
- Resume upload via careers form (handled by server action)
- Integration with admin panel for job management

## Environment Variables

Required variables (defined in `.env.local`):

```bash
# SMTP Configuration (Zoho)
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_USER=info@makkn.com
SMTP_PASS=[password]
SMTP_FROM=info@makkn.com
SMTP_SECURE=false

# Gemini API (client-side accessible)
NEXT_PUBLIC_GEMINI_API_KEY=[api-key]
```

**Note**: `.env.local` is committed to this repo (normally not recommended). When modifying email/AI functionality, verify environment variables are set correctly.

## Build Configuration

### Next.js Configuration (`next.config.mjs`)

- **TypeScript**: Errors ignored during build (`ignoreBuildErrors: true`)
- **ESLint**: Ignored during build (`ignoreDuringBuilds: true`)
- **Images**: Unoptimized (`unoptimized: true`)
- **Output**: Standalone for Docker deployment
- **Module resolution**: Uses `@/*` path alias (maps to project root)

These permissive settings suggest rapid iteration over strict validation. Consider tightening when stabilizing for production.

### Tailwind Configuration (`tailwind.config.ts`)

- **Design System**: HSL-based color system with CSS variables
- **Dark Mode**: Class-based dark mode support
- **Extended Theme**: Custom colors, border radius, keyframe animations
- **Sidebar**: Custom sidebar component configuration
- **Animations**: Accordion animations via tailwindcss-animate
- **Content Paths**: Configured for app/, components/, pages/ directories

### TypeScript Configuration (`tsconfig.json`)

- **Target**: ES5
- **Module**: ESNext
- **JSX**: Preserve (handled by Next.js)
- **Strict Mode**: Enabled
- **Path Mapping**: `@/*` maps to `./*`
- **Incremental Compilation**: Enabled with `tsconfig.tsbuildinfo`
- **Plugins**: Next.js TypeScript plugin included

### Package Manager Configuration

- **Manager**: pnpm (uses `.npmrc` for registry config)
- **Lock File**: `pnpm-lock.yaml` tracked in git
- **Node Version**: Targets Node 20 (see Dockerfile)

## Deployment

### Vercel (Primary)

- **Branch**: Auto-deploys from `main` branch
- **Integration**: Connected to v0.dev for automatic sync
- **Configuration**: `vercel.json` in root directory
- **Environment**: Environment variables managed via Vercel dashboard
- **CDN**: Automatic global CDN for static assets

### Docker (Alternate - Google Cloud Run)

**Dockerfile**:
- Multi-stage build using `node:20-alpine`
- Stage 1: Dependencies installation with pnpm
- Stage 2: Build with Next.js standalone output
- Stage 3: Production runtime with minimal dependencies
- Exposes port 3000
- Uses `.dockerignore` to exclude unnecessary files

**Cloud Build** (`cloudbuild.yaml`):
- Automated builds on Google Cloud Build
- Integrates with Google Cloud Run for deployment
- Uses `.gcloudignore` for build optimization

**Docker Compose** (`docker-compose.yml`):
- Local development container setup
- Port mapping and environment variable injection
- Volume mounting for hot-reload during development

### Deployment Checklist

Before deploying to production:
1. ✅ Secure environment variables (remove `.env.local` from git)
2. ✅ Enable TypeScript strict checking (`ignoreBuildErrors: false`)
3. ✅ Enable ESLint validation (`ignoreDuringBuilds: false`)
4. ✅ Implement admin authentication
5. ✅ Set up database for persistent storage
6. ✅ Configure file storage for resume uploads
7. ✅ Review and update privacy policy and terms of service
8. ✅ Enable image optimization (`unoptimized: false`)
9. ✅ Set up monitoring and error tracking (Sentry, LogRocket)
10. ✅ Configure rate limiting for API routes

## Email System

The `lib/email.ts` module provides:
- `sendEmail()`: Core function using nodemailer
- `generateContactEmailHTML()`: Styled HTML for contact form submissions
- `generateCareerEmailHTML()`: Styled HTML for job applications

All emails are sent via SMTP (Zoho) and include:
1. Email to `info@makkn.com` with form data
2. Confirmation email to submitter

Error handling includes specific messages for connection failures, auth errors, and timeouts.

### Email Testing Infrastructure

Development email testing endpoints:
- `/test-email` - UI for testing email delivery
- `/api/test-email` - API endpoint for contact email testing
- `/api/test-career-email` - API endpoint for career email testing
- `/api/check-email-config` - Verification endpoint for SMTP configuration

These endpoints are useful for debugging email delivery issues during development.

## MAKKN Company Information

### Mission & Vision
- **Mission**: Deliver innovative AI solutions that transform how businesses operate and serve their customers
- **Vision**: Become the leading AI solutions provider in the Middle East and North Africa region

### Core Values
MAKKN operates on principles of innovation, integrity, customer focus, and excellence in AI solution delivery.

### Products & Solutions

**1. Customer Support Intelligence**
- AI-powered chatbot for automated customer service
- 24/7 availability with natural language understanding
- Multi-channel support (website, social media, messaging platforms)
- Integration with existing CRM systems
- Dedicated route: `/customer-support-agent`

**2. Document Intelligence**
- Automated document processing and extraction
- OCR and intelligent data capture
- Document classification and routing
- Compliance and audit trail management
- Dedicated route: `/data-structuring-engine`

**3. Data Intelligence**
- Advanced analytics and business intelligence platform
- Predictive modeling and trend analysis
- Custom dashboards and reporting
- Data visualization and insights generation
- Dedicated route: `/data-intelligence`

**4. Recommendation Engine**
- Personalized product and content recommendations
- Behavioral analysis and pattern recognition
- A/B testing and optimization capabilities
- Integration with e-commerce and content platforms
- Dedicated route: `/recommendation-engine`

**5. Growth Intelligence**
- AI-powered sales and marketing automation
- Lead qualification and nurturing
- Personalized outreach campaigns
- CRM integration capabilities
- Dedicated route: `/marketing-sales-agent`

**6. AI Talent Assistant**
- Automated recruitment and candidate screening
- Resume parsing and intelligent matching
- Interview scheduling and candidate communication
- Skills assessment and recommendation engine
- (No dedicated page currently)

**7. Data Structuring Engine**
- Automated data extraction and structuring from unstructured sources
- Schema generation and data normalization
- API integrations for structured data delivery
- Used in Healthcare and Manufacturing industries
- (Functionality covered by Document Intelligence page)

### Services Offered

**Custom AI Agent Development**
- Tailored AI solutions for specific business needs
- End-to-end development from concept to deployment
- Integration with existing business systems

**Application Development**
- Full-stack web and mobile application development
- Cloud-native architecture design
- API development and integration services

**Cloud Solutions & Infrastructure**
- Cloud migration and optimization
- Infrastructure as Code (IaC)
- DevOps and CI/CD pipeline implementation
- Performance monitoring and optimization

## Chatbot System Prompt

The Gemini chatbot (configured in `config/gemini.ts`) is restricted to answering questions about MAKKN only. It has a comprehensive knowledge base covering all company information, products, services, mission, vision, values, FAQs, troubleshooting, integrations, and pricing.

When greeted, it responds warmly. For non-MAKKN questions, it replies: "I can only provide information about MAKKN Technologies, Inc. and its solutions."

**Technical Details:**
- Model: Google Gemini 2.5 Flash (via `@google/generative-ai`)
- Context: Maintains conversation history for contextual responses
- Storage: Conversation history stored in localStorage (`chatList`, `__chat_{id}`)
- API Key: `NEXT_PUBLIC_GEMINI_API_KEY` (client-side accessible)
- State Management: Managed by `ChatbotContext.tsx` with React Context API

## Troubleshooting Guide

### Common Development Issues

**Email Not Sending:**
1. Check SMTP credentials in `.env.local`
2. Verify Zoho SMTP settings (host: `smtp.zoho.com`, port: `587`)
3. Test via `/test-email` route
4. Check API logs for error messages
5. Ensure `SMTP_SECURE=false` for port 587

**Chatbot Not Responding:**
1. Verify `NEXT_PUBLIC_GEMINI_API_KEY` is set in `.env.local`
2. Check browser console for API errors
3. Clear localStorage if conversation history is corrupted
4. Verify Gemini API quota hasn't been exceeded
5. Check `config/gemini.ts` for system prompt configuration

**Admin Dashboard Issues:**
1. Check that `data/jobs.ts` and `data/applications.ts` exist
2. Verify TypeScript interfaces match component expectations
3. Remember: admin changes are NOT persisted (in-memory only)
4. Clear browser state if data appears stale

**Build Failures:**
1. Run `pnpm install` to ensure all dependencies are installed
2. Delete `.next` folder and rebuild
3. Check for TypeScript errors (even though ignored in config)
4. Verify all imports use correct paths (`@/*` alias)
5. Ensure Node version is 20+

**Styling Issues:**
1. Verify Tailwind is processing files (check `tailwind.config.ts` content paths)
2. Run `pnpm dev` to ensure PostCSS is running
3. Check for conflicting CSS in `styles/globals.css`
4. Verify shadcn/ui components are properly imported from `@/components/ui`

**Hot Reload Not Working:**
1. Restart development server (`pnpm dev`)
2. Check file watchers limit (macOS: `ulimit -n 10240`)
3. Verify files are inside watched directories
4. Try clearing `.next` folder

### Performance Optimization Tips

1. **Images**: Enable image optimization in `next.config.mjs` for production
2. **Code Splitting**: Next.js handles this automatically via App Router
3. **Bundle Analysis**: Run `pnpm build` and check output for large bundles
4. **Lazy Loading**: Use dynamic imports for heavy components
5. **Caching**: Leverage Vercel CDN for static assets
6. **API Routes**: Keep server actions lightweight, move heavy processing to separate services

### Development Workflow Best Practices

1. **Branch Strategy**: Create feature branches, merge to `main` for deployment
2. **Testing**: Test email functionality via `/test-email` before production
3. **Environment Variables**: Never commit real credentials (`.env.local` currently tracked)
4. **Type Safety**: Gradually improve TypeScript types (especially in contexts)
5. **Component Organization**: Keep feature components in `/components`, primitives in `/components/ui`
6. **Data Updates**: When updating products/services, modify files in `/data` directory
7. **Admin Work**: Remember admin changes are temporary until database integration

## Performance & Scalability

- **Build Output**: Standalone Next.js output optimized for containerized deployment
- **Static Assets**: Hosted on Vercel CDN for fast global delivery
- **API Routes**: Server-side API routes for secure data processing
- **Client-Side Caching**: LocalStorage for chatbot conversation persistence
- **Email Delivery**: SMTP-based email system with error handling and retry logic

## Security Considerations

- **Form Validation**: Server-side validation for all user inputs
- **API Key Management**: Environment variables for sensitive credentials
- **SMTP Authentication**: Secure email delivery through Zoho SMTP
- **Client-Side AI**: Gemini API key exposed client-side (required for browser-based chatbot)
- **No Database**: Stateless architecture reduces attack surface
- **Admin Access**: Admin dashboard at `/admin` has no authentication (internal use only - implement auth before production)
- **File Uploads**: Resume uploads handled via server actions with validation

## Component Architecture

### Feature Components (20+ components in `/components`)

**Navigation & Layout:**
- `main-navigation.tsx` - Primary navigation with solutions dropdown
- `main-footer.tsx` - Footer with company info and links
- `MobileMenu.tsx` - Responsive mobile navigation
- `SolutionsDropdown.tsx` - Dropdown menu for product navigation

**Product Showcase:**
- `agent-carousel.tsx` - Carousel showcasing AI agents
- `agent-card.tsx` - Individual agent product card
- `solution-card.tsx` - Service solution display card
- `ServiceCard.tsx` - Alternative service card variant

**Interactive Features:**
- `Chatbot.tsx` - Main chatbot interface (uses ChatbotContext)
- `BookDemoDialog.tsx` - Demo booking modal
- `animate-on-scroll.tsx` - Scroll-triggered animations

**UI Elements:**
- `HeroSection.tsx` - Homepage hero with CTA
- `CompanyBlock.tsx` - Company information block
- `ValueCard.tsx` - Company value display
- `Logo.tsx` - MAKKN logo component
- `CircularLogo.tsx` - Circular logo variant
- `LoadingScreen.tsx` - Full-page loading indicator
- `particles-background.tsx` - Animated background particles

**Admin Components (4 components in `/components/admin`):**
- `StatsBar.tsx` - Dashboard statistics display
- `JobTable.tsx` - Job listings management table
- `AddJobModal.tsx` - Job creation/editing modal
- `ApplicationsPanel.tsx` - Application review interface

**Careers Components (2 components in `/components/careers`):**
- `jobCard.tsx` - Job listing card with details
- `emptyPositions.tsx` - Empty state for no jobs

### UI Primitives (50 components in `/components/ui`)

shadcn/ui components based on Radix UI primitives:
- Form elements: Button, Input, Label, Textarea, Select, Checkbox, RadioGroup
- Layout: Card, Separator, Sheet, Sidebar, ScrollArea
- Feedback: Alert, AlertDialog, Dialog, Toast, Sonner
- Navigation: Dropdown Menu, Navigation Menu, Tabs, Breadcrumb
- Data Display: Table, Avatar, Badge, Tooltip, Popover
- Advanced: Carousel, Collapsible, Command, Context Menu, Drawer
- And 30+ more components

### Context Providers

**ChatbotContext** (`contexts/ChatbotContext.tsx`):
- Manages chatbot conversation state
- Persists chat history to localStorage
- Interfaces with Gemini API
- Provides hooks: `useChatbot()` for accessing state

**ThemeProvider** (`components/theme-provider.tsx`):
- Manages dark/light mode switching
- Uses `next-themes` library
- Provides theme context to all components

### Custom Hooks (2 hooks in `/hooks`)

**use-mobile.tsx**:
```typescript
// Detects mobile viewport (< 768px)
const isMobile = useMobile()
```

**use-toast.ts**:
```typescript
// Toast notification system
const { toast } = useToast()
toast({ title: "Success", description: "Message sent!" })
```

## User Experience Highlights

- **Responsive Design**: Seamless experience across all device sizes with mobile detection hook
- **Fast Load Times**: Optimized Next.js build with automatic code splitting
- **Smooth Animations**: Framer Motion for polished interactions and scroll effects
- **Accessibility**: shadcn/ui components built on Radix UI with ARIA support
- **Instant Feedback**: Real-time form validation, toast notifications, and submission status
- **Persistent Chatbot**: Conversation history maintained across sessions via localStorage
- **Error Handling**: Global and route-specific error boundaries for graceful failures
- **Loading States**: Skeleton screens and loading indicators for async operations
- **Glass Morphism**: Modern backdrop blur effects with semi-transparent backgrounds
- **Interactive Elements**: Hover states, transitions, and micro-interactions throughout

## Important Notes

1. **v0.dev Sync**: This repo auto-syncs with v0.dev. Changes made directly in the repo may be overwritten if not coordinated with v0.dev deployments.

2. **Type Safety**: TypeScript strict mode is enabled, but build errors are ignored. Many components use `any` types (especially in contexts). Improve type safety incrementally.

3. **Styling Consistency**: Brand purple (`#6320ce`) is hardcoded in many components rather than using Tailwind config. Consider centralizing in `tailwind.config.ts` as a custom color.

4. **Environment Security**: `.env.local` is tracked in git and contains credentials. In a production setting, remove from git and use secure environment variable injection.

5. **Chatbot Context**: The `ChatbotContext.tsx` uses `any` types extensively. When modifying, consider defining proper TypeScript interfaces for conversation state.

6. **Server Actions**: All form submissions use Next.js server actions (`"use server"`). These run on the server and should never expose sensitive logic client-side.

7. **Component Library**: The `components/ui/` directory contains 50 shadcn/ui components. These are primitives; feature components are in `components/` root.

8. **Admin Dashboard**: The `/admin` route provides job and application management but has NO authentication. This is suitable only for internal/development use. Implement proper authentication (NextAuth, Clerk, or similar) before exposing to production.

9. **Custom Hooks**: Two utility hooks in `/hooks/`:
   - `use-mobile.tsx`: Detects mobile viewport for responsive behavior
   - `use-toast.ts`: Toast notification system for user feedback

10. **Legal Pages**: Privacy policy (`/privacy`) and terms of service (`/terms`) routes exist but may need content review for legal compliance.

11. **Data Persistence**: Job listings and applications are stored in static TypeScript files (`data/jobs.ts`, `data/applications.ts`). Admin changes are not persisted. Consider database integration for production use.

## Page Routes Reference

Complete list of application routes:

**Public Pages:**
- `/` - Homepage with hero section and product showcase
- `/customer-support-agent` - Customer Support Intelligence product page
- `/data-intelligence` - Data Intelligence product page
- `/data-structuring-engine` - Document Intelligence product page
- `/marketing-sales-agent` - Growth Intelligence product page
- `/recommendation-engine` - Recommendation Engine product page
- `/industries` - Industries hub page with 4 industry cards (NEW)
- `/industries/ai-for-real-estate` - AI for Real Estate industry page (NEW)
- `/industries/ai-for-retail-ecommerce` - AI for Retail & E-Commerce industry page (NEW)
- `/industries/ai-for-healthcare` - AI for Healthcare industry page (NEW)
- `/industries/ai-for-manufacturing` - AI for Manufacturing industry page (NEW)
- `/careers` - Job listings and application form
- `/contact` - Contact form for inquiries
- `/privacy` - Privacy policy
- `/terms` - Terms of service

**Internal/Development Pages:**
- `/admin` - Admin dashboard for job and application management (no auth)
- `/test-email` - Email delivery testing interface

**Error Handlers:**
- `/error.tsx` - Global error boundary
- `/contact/error.tsx` - Contact page error boundary

**Loading States:**
- `/loading.tsx` - Global loading indicator
- `/data-structuring-engine/loading.tsx` - Product page loading state

## TypeScript Interfaces Reference

### Jobs System (`data/jobs.ts`)

```typescript
type JobType = "Full-time" | "Part-time" | "Contract"
type JobStatus = "active" | "inactive"

interface Job {
  id: string
  title: string
  department: string
  type: JobType
  location: string
  description: string
  status: JobStatus
  postedAt: Date
}
```

### Applications System (`data/applications.ts`)

```typescript
type ApplicationStatus = "new" | "reviewing" | "shortlisted" | "rejected"

interface Application {
  id: string
  jobId: string
  jobTitle: string
  firstName: string
  lastName: string
  email: string
  coverLetter: string
  resumeFileName: string
  status: ApplicationStatus
  submittedAt: Date
}
```

### Industries System (`data/industries.tsx`)

```typescript
interface IndustrySolution {
  title: string
  description: string
  icon: string // Lucide icon name
}

interface IndustryChallenge {
  title: string
  description: string
}

interface IndustryBenefit {
  stat: string
  label: string
}

interface Industry {
  id: string
  slug: string
  title: string
  subtitle: string
  heroDescription: string
  icon: string // Lucide icon name (Building2, ShoppingCart, HeartPulse, Factory)
  challenges: IndustryChallenge[] // 3 challenges per industry
  solutions: IndustrySolution[] // 4 solutions mapped to MAKKN products
  benefits: IndustryBenefit[] // 4 benefit stats with labels
}
```

**Industry Mapping:**
- **Real Estate** (Building2): Data Intelligence, Document Intelligence, Customer Support Intelligence, Recommendation Engine
- **Retail & E-Commerce** (ShoppingCart): Recommendation Engine, Growth Intelligence, Customer Support Intelligence, Data Intelligence
- **Healthcare** (HeartPulse): Document Intelligence, Data Structuring Engine, AI Talent Assistant, Data Intelligence
- **Manufacturing** (Factory): Data Intelligence, Data Structuring Engine, Growth Intelligence, Customer Support Intelligence

## Future Enhancements (Potential)

**Critical for Production:**
- ✅ Admin authentication system (NextAuth, Clerk, or Auth0)
- ✅ Database integration for persistent job/application storage (PostgreSQL, MongoDB)
- ✅ File storage service for resume uploads (AWS S3, Cloudinary)
- ✅ Rate limiting for API routes and form submissions
- ✅ GDPR compliance review for data collection

**Feature Enhancements:**
- Advanced analytics and conversion tracking
- Multi-language support for international markets
- Enhanced chatbot capabilities with extended knowledge base
- Integration with CRM systems for automated lead management (Salesforce, HubSpot)
- Performance monitoring and optimization tools
- Application status email notifications for candidates
- Interview scheduling system
- Applicant Tracking System (ATS) integration
