# BMKRS.com - React Application

A modern digital design agency website built with React 17, featuring a hybrid architecture that combines React components with legacy JavaScript behaviors.

## Architecture Overview

This is a **CDN-based React application** using Babel Standalone for in-browser JSX transpilation. The application maintains compatibility with existing jQuery-based functionality while providing a modern React component architecture.

### Key Technologies

- **React 17.0.2** - Core UI library
- **ReactDOM 17.0.2** - DOM rendering
- **Babel Standalone 6.26.0** - In-browser JSX transpilation
- **React Motion 0.5.2** - Animation library
- **jQuery 3.4.1** - Legacy DOM manipulation and AJAX
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Anime.js** - JavaScript animation engine
- **PHP** - Server-side includes and routing

All external libraries are loaded via CDN (no build step required).

## Project Structure

```
public_html/
├── index.html              # Main entry point (homepage)
├── index.php               # PHP wrapper serving index.html
│
├── components.jsx          # Shared React components and utilities
│   ├── FadeInSection       # Scroll fade-in wrapper component
│   ├── HamburgerButton     # Mobile menu toggle with React Motion
│   └── getRootElement()    # DOM cleanup utility for React mounting
│
├── app.jsx                 # Homepage React component
├── site.js                 # Centralized initialization & legacy behavior coordination
│
├── discover/
│   ├── index.html          # Discover page HTML
│   └── discover.jsx        # Discover page React component
│
├── work/
│   ├── index.html          # Work page HTML
│   ├── work.jsx            # Work page React component
│   │
│   ├── fdb/
│   ├── project1/
│   ├── project2/
│   ├── project3/
│   ├── project4/
│   └── flipster-project/
│       ├── index.html      # Project detail page HTML (includes window.PROJECT_DATA)
│       └── project.jsx     # Generic project component (shared by all projects)
│
├── motion/
│   ├── index.html          # Motion page HTML
│   └── motion.jsx          # Motion page React component
│
├── contact/
│   ├── index.html          # Contact page HTML
│   └── contact.jsx         # Contact page React component
│
├── scripts/
│   ├── variable.js         # Legacy content population functions
│   └── ...                 # Other utility scripts
│
├── styles/                 # CSS stylesheets
└── images/                 # Image assets
```

## Component Architecture

### Shared Components (`components.jsx`)

**Global Namespace:** `window.BmkrsComponents`

#### `FadeInSection`
A wrapper component that triggers fade-in animations when elements scroll into view.

```jsx
<FadeInSection>
  <div>Your content here</div>
</FadeInSection>
```

#### `HamburgerButton`
Animated mobile menu toggle using React Motion for smooth transitions.

#### `getRootElement()`
Utility function that:
- Finds or creates the `#root` div
- Removes all non-script, non-root elements from `<body>`
- Returns the root element for React mounting
- Prevents duplicate content when React renders

### Page-Specific Components

Each main page has its own React component file:
- `app.jsx` - Homepage
- `discover.jsx` - Discover page
- `work.jsx` - Work portfolio page
- `motion.jsx` - Motion capabilities page
- `contact.jsx` - Contact page

All components follow the same pattern:
1. Import shared components from `window.BmkrsComponents`
2. Use `useEffect` to initialize `site.js` behaviors
3. Render page-specific JSX
4. Mount to DOM using `ReactDOM.render(<Component />, getRootElement())`

### Project Pages Pattern

Project detail pages use a **generic component + data injection pattern**:

**`project.jsx`** - Generic `ProjectPage` component accepting props:
- `title` - Project title
- `client` - Client description
- `background` - Project background
- `problem` - Problem statement
- `media` - Array of media items (images, iframes, HTML)

**Each project's `index.html`** includes:
```html
<script>
  window.PROJECT_DATA = {
    title: "Project Title",
    client: "Client description...",
    background: "Background info...",
    problem: "Problem statement...",
    media: [
      { type: "image", src: "/images/example.jpg" },
      { type: "iframe", src: "https://player.vimeo.com/video/123", width: "640", height: "480" },
      { type: "html", content: "<div>Custom HTML</div>" }
    ]
  };
</script>
<script type="text/babel" src="/project.jsx"></script>
```

The `ProjectPage` component then renders using `window.PROJECT_DATA`.

## Initialization Flow

### 1. HTML Page Loads
Each HTML file includes:
```html
<body data-page="home">  <!-- Page identifier -->
  <div id="root"></div>  <!-- React mount point -->
  
  <!-- React & Babel CDN scripts -->
  <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
  
  <!-- Shared components, page component, initialization -->
  <script type="text/babel" src="/components.jsx"></script>
  <script type="text/babel" src="/app.jsx"></script>
  <script src="/site.js"></script>
</body>
```

### 2. Components Load
- `components.jsx` defines shared components and exposes them via `window.BmkrsComponents`
- Page-specific `.jsx` file imports from `window.BmkrsComponents` and defines page component

### 3. React Renders
- Page component calls `getRootElement()` to get clean mount point
- `ReactDOM.render()` mounts the component tree
- Component's `useEffect` hook calls `window.initSite()`

### 4. Site Initialization (`site.js`)
The `window.initSite()` function:
1. Initializes AOS (Animate On Scroll)
2. Reads `data-page` attribute from `<body>`
3. Conditionally calls page-specific legacy functions:
   - `window.topmenu()` - Navigation initialization (all pages)
   - `window.headings()` - Homepage heading animations
   - `window.worktext()` - Homepage work text animations
   - `window.discover()` - Discover page specific behaviors
   - `window.contact()` - Contact page specific behaviors
   - `window.inmotion()` - Motion page specific behaviors
4. Sets up jQuery-based behaviors:
   - AJAX includes for header/footer
   - Scroll-based navigation hiding/showing
   - Modal handlers (discover page)
   - Smooth scroll to content sections
   - Fixed positioning (project pages)

## Page Identification System

Each page uses `data-page` attribute on `<body>` for conditional behavior:

| Page | `data-page` Value | Specific Behaviors |
|------|-------------------|-------------------|
| Homepage | `home` | `headings()`, `worktext()`, scroll to `.dis-container` (1s delay) |
| Discover | `discover` | `discover()`, modal init, scroll to `.dis-container` (1s delay) |
| Work | `work` | Scroll to `.ourwork` (1s delay) |
| Motion | `motion` | `inmotion()` |
| Contact | `contact` | `contact()`, scroll to `.cont-container` (1s delay) |
| Project Detail | `project` | Scroll to `.container` (3s delay), fixed `.ourwork` positioning |

## Legacy JavaScript Integration

### `scripts/variable.js`
Contains legacy content population functions:
- `topmenu()` - Navigation text animations
- `headings()` - Homepage heading text effects
- `worktext()` - Homepage work section animations
- `discover()` - Discover page specific logic
- `contact()` - Contact page form behaviors
- `inmotion()` - Motion page animations

These functions are called conditionally by `site.js` based on the current page.

### jQuery Behaviors
- **AJAX Includes**: Header/footer loaded via jQuery `.load()`
- **Navigation**: Scroll-based show/hide with class toggling
- **Animations**: Custom scroll effects and transitions
- **Modals**: Click handlers for modal overlays (discover page)

## Development

### Running Locally

**PHP Built-in Server:**
```bash
npm start
# or
php -S localhost:8000 -t public_html
```

Visit `http://localhost:8000` in your browser.

**Alternative (Python):**
```bash
cd public_html
python3 -m http.server 8000
```

**Alternative (Node.js - http-server):**
```bash
npx http-server public_html -p 8000
```

### File Editing

Since this uses Babel Standalone for in-browser transpilation:
1. Edit `.jsx` files directly
2. Refresh browser to see changes
3. No build step required

**Note:** For production, consider implementing a build process to pre-compile JSX for better performance.

## Key Design Decisions

### Why CDN + Babel Standalone?
- **Zero Build Setup**: No webpack, npm install, or complex tooling
- **Quick Iteration**: Edit JSX and refresh - changes are instant
- **Legacy Compatibility**: Works alongside existing PHP/jQuery infrastructure
- **Gradual Migration**: React components coexist with legacy code

### Why `window.BmkrsComponents`?
- Shares components across multiple entry point files without a module bundler
- Simple, explicit dependency management
- Compatible with `<script type="text/babel">` approach

### Why `getRootElement()`?
- Prevents duplicate content when React renders
- Cleans up legacy HTML markup while preserving necessary scripts
- Allows React to be the single source of truth for displayed content

### Why `data-page` Attributes?
- Single `site.js` file handles all pages with conditional logic
- Reduces code duplication
- Easier to maintain page-specific behaviors

## Browser Support

The application supports modern browsers with ES6+ and React 17 compatibility:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Note:** Babel Standalone transpiles JSX but does not polyfill all ES6 features. For older browser support, add polyfills or implement a build process.

## Production Considerations

### Recommended Improvements for Production

1. **Pre-compile JSX**
   - Remove Babel Standalone
   - Use webpack/Rollup to compile JSX to JS
   - Significantly improves initial load time

2. **Bundle Dependencies**
   - Move from CDN to local npm packages
   - Bundle React, ReactDOM, React Motion
   - Tree-shake unused code

3. **Optimize Assets**
   - Minify CSS and JavaScript
   - Compress images (WebP format)
   - Implement lazy loading for images

4. **Implement Code Splitting**
   - Split per route/page
   - Load page-specific code on demand

5. **Add Build Scripts**
   ```json
   "scripts": {
     "dev": "webpack serve --mode development",
     "build": "webpack --mode production",
     "deploy": "npm run build && rsync -av dist/ server:/path/"
   }
   ```

6. **Environment Configuration**
   - Separate dev/staging/production configs
   - Environment-specific API endpoints

7. **Testing**
   - Add Jest for unit tests
   - Add Cypress for E2E tests
   - Implement CI/CD pipeline

## Maintenance Notes

- **Adding New Pages**: Copy an existing page folder structure, update `data-page` attribute, create new JSX component
- **Updating Shared Components**: Edit `components.jsx` - changes apply to all pages automatically
- **Adding Project Pages**: Copy a project folder, update `window.PROJECT_DATA` in `index.html`
- **Legacy Functions**: Modify `scripts/variable.js` and `site.js` for page-specific behaviors

## License

UNLICENSED - Proprietary software for BMKRS © 2020-2026

---

**Built with React by BMKRS Digital Design Agency**
