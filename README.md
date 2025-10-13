# Nayelly Zurita – Data Science & Engineering Portfolio

A personal portfolio built with Next.js 15 and Tailwind CSS to showcase data engineering, analytics, and machine learning work. The site highlights professional experience, project walkthroughs, and writing, while offering a cohesive design system across all routes.

## Features

- **Home** – Immersive hero video, section overview, and CTAs that route to projects and blog content.
- **About** – Detailed biography, rotating hobbies gallery, and a timeline of roles with skill bars and impact-focused highlights.
- **Projects** – Full-screen hero with background imagery, track navigation (Data Science, Data Engineering, Machine Learning, Analytics), and project cards featuring imagery, internal anchors, and external case-study links. Includes a blog CTA for cross-navigation.
- **Blog** – Modern article grid with category/date/read-time badges and external/internal routing. Ends with a CTA to explore projects.
- **Global Navigation & Footer** – Responsive navbar with active state indicators and social/contact links, plus a consistent footer across all pages.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: React 19 + JavaScript modules
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with a custom color palette
- **Content**: MDX-powered blog posts (App Router) registered via `app/blog/posts.ts`
- **Icons**: [Lucide](https://lucide.dev/) and [react-icons](https://react-icons.github.io/react-icons/)
- **Media**: Optimized images via `next/image` with responsive `sizes`

## Project Structure

```
app/
  layout.js          // Root layout and metadata
  page.js            // Landing page
  about/
  blog/
  projects/
components/
  NavBar.js          // Global navigation
  Footer.js          // Global footer
  home/              // Home screen sections
  about/             // Profile, experience, hobbies
  projects/          // Project hero, CTA, track sections
  blog/              // Blog section + CTA
public/
  media assets (photos, icons, video)
```

## Development Scripts

| Command         | Description                                   |
|-----------------|-----------------------------------------------|
| `npm install`   | Install dependencies                          |
| `npm run dev`   | Start the Next.js dev server (port 3000)        |
| `npm run lint`  | Run ESLint (recommended before committing)     |
| `npm run build` | Create the production build                    |
| `npm run start` | Serve the production build                     |

## Styling & Design Notes

- Tailwind theme tokens (`dark`, `teal`, `purple`, `night`, etc.) live in `tailwind.config.mjs` and are reused across sections to keep colors consistent.
- Typography uses system fallbacks (`Inter`, `JetBrains Mono`) configured in `app/globals.css` to avoid external font fetches during offline builds.
- `next/image` components include `sizes` attributes to improve responsive loading, and `priority` is reserved for above-the-fold assets only.

## Content & Customization

- Update biography, experience highlights, and skill lists in `components/about/`.
- Swap project metadata (titles, descriptions, links, images) in `components/projects/research.js` and `components/projects/blog-cta.js`.
- Blog posts live in `app/blog/{slug}/page.mdx` with metadata in `app/blog/posts.ts`; update both when adding new articles.
- Per-post share widgets render inside each MDX file—update the share title in the MDX front matter when adding new articles.
- Media assets live in `public/`; replace placeholder imagery with your own photos or graphics.

## Deployment

1. Ensure the build passes locally: `npm run build`.
2. Commit and push to your GitHub repository.
3. On [Vercel](https://vercel.com), import the repo and keep the default build command (`npm run build`).
4. Configure any custom domains in the Vercel project settings (optional).
5. Future pushes to the connected branch automatically trigger new deployments.

## Interactions & Limitations

- Blog articles include a share menu that supports native sharing (when available), copy link, and external networks (LinkedIn, X, Reddit, Email).
- No accounts, likes, or public comments are stored—everything renders statically.

Looking to expand the portfolio? Ideas include interactive project filters, a CMS-backed blog, or integrating Lighthouse/analytics reports directly into the projects page.
