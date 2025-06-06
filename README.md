# Ultrahuman Ring Website

A modern, responsive clone of the Ultrahuman Ring website built with React, Framer Motion, and TailwindCSS.

## Features
- Dynamic ring color selection
- Smooth animations and transitions
- Responsive design
- Context-based state management

## Tech Stack
- React
- Vite
- Framer Motion
- TailwindCSS
- Context API

## Setup
```bash
# Install dependencies
npm install
```

## Development
```bash
# Start development server
npm run dev
```

## Production Build
```bash
# Install build dependencies (if not already installed)
npm install --save-dev terser

# Create production build
npm run build
```

The build process will create a `dist` folder with the following optimized assets:
- `index.html` (1.21 kB)
- `assets/index-DWB4s5HB.css` (18.90 kB)
- `assets/vendor-Bf-MSPTJ.js` (11.09 kB)
- `assets/animations-C0Qi0N10.js` (123.64 kB)
- `assets/index-CpgfGdgY.js` (189.55 kB)

```bash
# Preview production build
npm run preview
```

## Environment Setup
1. Copy the environment template:
```bash
copy .env.example .env
```

2. Update the following values in `.env`:
```env
VITE_CDN_URL=your_cdn_url
VITE_API_URL=your_api_url
```

## Project Structure
```
ultrahumanrings/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── BuySection.jsx
│   │   └── ...
│   ├── context/
│   │   └── RingContext.jsx
│   └── ...
├── public/
├── dist/
└── ...
```

## Performance
The production build is optimized with:
- Code splitting (vendor & animations)
- Asset minification
- Gzip compression
- Lazy loading of images

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
