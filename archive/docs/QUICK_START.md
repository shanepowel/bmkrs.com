# Quick Start Guide

## Getting Started in 60 Seconds

### 1. Start the Development Server

```bash
cd /Users/shanepowell/github/bmkrs.com
php -S localhost:8000 -t public_html
```

Open your browser to `http://localhost:8000`

### 2. Making Changes

**Edit a Page:**
1. Open the corresponding `.jsx` file in `public_html/`
2. Make your changes
3. Refresh your browser - changes appear instantly!

**Main Files:**
- `public_html/app.jsx` - Homepage
- `public_html/discover.jsx` - Discover page
- `public_html/work.jsx` - Work portfolio page
- `public_html/motion.jsx` - Motion page
- `public_html/contact.jsx` - Contact page
- `public_html/project.jsx` - Generic project page template

### 3. Adding a New Project

1. Copy an existing project folder in `public_html/work/`
2. Update the `window.PROJECT_DATA` object in the new `index.html`:

```html
<script>
  window.PROJECT_DATA = {
    title: "Your Project Name",
    client: "Client description...",
    background: "Background info...",
    problem: "Problem statement...",
    media: [
      { type: "image", src: "/images/your-image.jpg" },
      { type: "iframe", src: "https://player.vimeo.com/video/123456", width: "640", height: "480" },
      { type: "html", content: "<div>Custom HTML content</div>" }
    ]
  };
</script>
```

3. That's it! The `project.jsx` component will render your content automatically.

### 4. Shared Components

All pages have access to these shared components via `window.BmkrsComponents`:

**FadeInSection** - Fade in content on scroll
```jsx
<FadeInSection>
  <div>Your content</div>
</FadeInSection>
```

**HamburgerButton** - Mobile menu toggle
```jsx
<HamburgerButton />
```

## Architecture at a Glance

```
HTML Page Loads
    ↓
React/Babel/Libraries Load (CDN)
    ↓
components.jsx Loads → Exposes FadeInSection, HamburgerButton, getRootElement
    ↓
Page Component Loads (app.jsx, discover.jsx, etc.)
    ↓
ReactDOM.render() Mounts Component to #root
    ↓
useEffect() Calls window.initSite()
    ↓
site.js Initializes Page-Specific Behaviors (based on data-page attribute)
```

## Common Tasks

### Update Navigation
Edit the nav section in any `.jsx` file:
```jsx
<div className="nav">
  <a className="logowhites-4" href="/">
    <img src="/images/white.png" alt="bmkrs-logo-white" />
  </a>
  <div className="nav__content">
    <ul className="nav__list">
      <li className="nav__list-item active-nav">
        <a href="/" className="hover-target">home</a>
      </li>
      {/* Add more items here */}
    </ul>
  </div>
</div>
```

### Add Page-Specific Behavior
1. Open `public_html/site.js`
2. Find the `initSite` function
3. Add conditional logic based on `data-page`:

```javascript
if (page === "your-page" && typeof window.yourFunction === "function") {
  window.yourFunction();
}
```

### Debug Issues
1. Open browser DevTools (F12)
2. Check Console for errors
3. Common issues:
   - JSX syntax errors - check closing tags
   - Missing comma in arrays/objects
   - Babel transpilation errors - check brackets matching

## File Structure Quick Reference

```
public_html/
├── app.jsx              → Homepage component
├── components.jsx       → Shared: FadeInSection, HamburgerButton, getRootElement
├── site.js              → Initialization & legacy behaviors
├── index.html           → Homepage HTML + React loader
├── index.php            → Serves index.html
│
├── discover/
│   ├── index.html       → data-page="discover"
│   └── discover.jsx     → Discover component
│
├── work/
│   ├── index.html       → data-page="work"
│   ├── work.jsx         → Work component
│   └── */index.html     → data-page="project" + window.PROJECT_DATA
│
├── motion/
│   ├── index.html       → data-page="motion"
│   └── motion.jsx       → Motion component
│
└── contact/
    ├── index.html       → data-page="contact"
    └── contact.jsx      → Contact component
```

## Need More Detail?

- **Full Documentation**: See `README.md`
- **Version History**: See `CHANGELOG.md`
- **Project Metadata**: See `package.json`

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console for JSX errors |
| Changes not showing | Hard refresh (Cmd+Shift+R / Ctrl+Shift+R) |
| Component not found | Verify `window.BmkrsComponents` is loaded before your page component |
| Scroll animations not working | Check `data-page` attribute matches expected value in `site.js` |
| Mobile menu not working | Verify `HamburgerButton` is rendering to `#render` element |

---

**Ready to build? Start editing and watch your changes appear instantly!**
