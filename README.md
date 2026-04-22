# Nomad House

An editorial, image-driven site for Nomad House — coffee &amp; desserts.

## Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (horizontal drag)

## Run
```bash
npm install
npm run dev
```

## Structure
```
src/
  App.jsx
  main.jsx
  index.css
  hooks/
    useInView.js       # IntersectionObserver-based reveal
  components/
    Nav.jsx
    Hero.jsx           # fullscreen cinematic
    Featured.jsx       # horizontal drag / scroll
    MenuPreview.jsx    # clean grid
    Community.jsx      # regulars, voices, gatherings
    Signature.jsx      # large image + description
    Lifestyle.jsx      # interior / textures / people
    Footer.jsx         # location, hours, instagram
    Reveal.jsx         # fade-up wrapper
```
