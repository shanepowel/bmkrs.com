# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-05-31

### Major React Migration

This release represents a complete architectural transformation from a traditional PHP/jQuery website to a modern React application while maintaining backward compatibility with legacy functionality.

### Added

- **React 17.0.2 Integration**: Migrated entire application to React using CDN-based approach with Babel Standalone for JSX transpilation
- **Shared Component Library** (`components.jsx`):
  - `FadeInSection` - Scroll-triggered fade-in wrapper component
  - `HamburgerButton` - Animated mobile menu toggle using React Motion
  - `getRootElement()` - DOM cleanup utility for React mounting
- **Page-Specific React Components**:
  - `app.jsx` - Homepage component
  - `discover.jsx` - Discover page component
  - `work.jsx` - Work portfolio page component
  - `motion.jsx` - Motion capabilities page component
  - `contact.jsx` - Contact page component
  - `project.jsx` - Generic project detail page component
- **Data-Driven Project Pages**: Implemented `window.PROJECT_DATA` pattern for dynamic project content
- **Centralized Initialization** (`site.js`): Single entry point for all page-specific behaviors and legacy function coordination
- **Page Identification System**: `data-page` attributes on `<body>` tags for conditional behavior execution
- **Documentation**:
  - Comprehensive `README.md` with architecture overview, component documentation, and development guide
  - `CHANGELOG.md` for version tracking
  - `package.json` with project metadata and scripts
  - `.gitignore` for version control hygiene

### Changed

- **index.php**: Modified to serve static `index.html` directly instead of dynamic PHP rendering
- **All HTML Pages**: Updated to load React 17, Babel Standalone, shared components, and page-specific JSX files
- **Component Architecture**: Refactored all pages from `dangerouslySetInnerHTML` to proper JSX for better maintainability and React best practices
- **Script Loading**: Consolidated script loading pattern across all pages for consistency
- **Navigation**: Integrated React-based navigation with legacy jQuery scroll behaviors

### Removed

- **Legacy Files**:
  - `hamburger.js` - Functionality migrated to `components.jsx`
- **Inline Event Handlers**: Removed `onload="topmenu()"` from all `<body>` tags in favor of React lifecycle methods
- **Redundant Script Tags**: Cleaned up duplicate and unnecessary script references

### Technical Details

#### Architecture Highlights

1. **Hybrid Approach**: React components coexist with legacy jQuery behaviors for gradual migration
2. **CDN-Based**: No build process required - uses Babel Standalone for in-browser JSX transpilation
3. **Global Component Sharing**: `window.BmkrsComponents` namespace for sharing React components across entry files
4. **Conditional Initialization**: Page-specific legacy functions called based on `data-page` attribute values

#### Migration Pattern

```
Legacy HTML → dangerouslySetInnerHTML → Proper JSX Components
```

Each page was initially converted using `dangerouslySetInnerHTML` as a bridge, then refactored to pure JSX for better performance and maintainability.

#### Project Page Pattern

```html
<!-- Each project's index.html -->
<script>
  window.PROJECT_DATA = {
    title: "Project Title",
    client: "Client info...",
    background: "Background...",
    problem: "Problem statement...",
    media: [ /* media array */ ]
  };
</script>
<script type="text/babel" src="/project.jsx"></script>
```

#### Component Lifecycle

1. HTML loads with `data-page` attribute
2. React/Babel scripts load from CDN
3. `components.jsx` defines and exposes shared components
4. Page-specific `.jsx` loads and imports shared components
5. React component renders via `ReactDOM.render()`
6. `useEffect` hook calls `window.initSite()` from `site.js`
7. `site.js` conditionally executes page-specific behaviors based on `data-page`

### Fixed

- Undeclared global variable `newLocation` in `site.js`
- Modal initialization now properly scoped to pages with `.modal` elements
- Scroll-to-target behavior now page-aware with appropriate delays
- Fixed positioning for `.ourwork` on project pages
- Navbar scroll-hide logic consolidated and generalized

### Performance Notes

- Current implementation uses Babel Standalone (in-browser transpilation)
- For production, recommend implementing build process to pre-compile JSX
- CDN approach prioritizes developer experience over initial load time
- See README.md "Production Considerations" for optimization recommendations

### Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Requires ES6+ support

### Breaking Changes

- None for end users - UI/UX remains identical
- Developer workflow changed from traditional PHP/JS to React components
- Any external scripts relying on specific DOM structure may need updates

---

## [1.0.0] - 2020

### Initial Release

- Traditional PHP/jQuery website
- Dynamic content includes
- Custom animations with Anime.js and AOS
- Responsive design
- Multi-page architecture with PHP routing

---

**Note**: Version 2.0.0 maintains visual and functional parity with 1.0.0 while completely re-architecting the underlying codebase for modern React development.
