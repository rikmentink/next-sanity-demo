# Custom Next.js Website with Headless CMS

A sophisticated, design-driven website built with Next.js and Sanity.io, offering a seamless blend of custom UI/UX and flexible content management.

## Project Overview

This project implements a meticulously designed website with a headless CMS architecture:

- Custom UI components with editable content through Sanity.io
- Dynamic page management with flexible content structures
- SEO optimization with customizable meta tags and structured data
- Real-time preview capabilities for content editors
- Responsive design implementation across all breakpoints

## Development Setup

### Next.js Frontend Setup

1. Navigate to the root directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and configure:
   - Sanity project credentials
   - Preview mode settings
   - Any custom environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Access the site at [http://localhost:3000](http://localhost:3000)

### Sanity Studio Setup

1. Navigate to the `sanity` directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Sanity Studio:
   ```bash
   npm run dev
   ```
4. Access the CMS interface at [http://localhost:3333](http://localhost:3333)

Note: Run the Next.js frontend and Sanity Studio in separate terminal windows for optimal development workflow.
