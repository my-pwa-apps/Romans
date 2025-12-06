# CHRONOS - World History Atlas

An interactive web application for exploring 5,000 years of human civilization through an animated map experience.

## Features

- **Interactive Timeline**: Navigate from 3000 BCE to 2025 CE with a smooth slider interface
- **25+ Civilizations**: Explore empires including:
  - Ancient Near East: Sumer, Akkad, Babylon, Assyria, Hittites
  - Egypt: Old, Middle, New Kingdom and Ptolemaic periods
  - Persia: Achaemenid, Parthian, and Sassanid empires
  - Greece & Macedonia: City-states, Alexander's Empire, Successor Kingdoms
  - Rome: Republic through the fall of the Western Empire (detailed territory data)
  - Byzantine Empire: Early, Middle, and Late periods
  - Medieval: Carolingian, Holy Roman Empire, Ottoman Empire
  - Asia: Han, Tang, Ming, Qing dynasties; Mughal Empire
  - Mongol Empire: Greatest land empire in history
  - Colonial Era: Spanish, British, and Russian empires
  
- **Educational Content**: Historical facts, key figures, and context for each era
- **Progressive Web App**: Install on mobile devices for offline access
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support

## Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mapping**: Leaflet.js
- **PWA**: Service Worker for offline capabilities
- **Styling**: Custom CSS with CSS Variables for theming

## Getting Started

1. Clone the repository
2. Open `index.html` in a modern web browser
3. Or serve with a local server: `npx serve .`

## Project Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # Main application logic & world empires data
├── territories.js      # Detailed Roman territory polygons
├── service-worker.js   # PWA service worker
├── manifest.json       # PWA manifest
└── icons/              # App icons for PWA
```

## Controls

- **Play/Pause**: Spacebar or click Play button
- **Navigate Timeline**: Arrow keys, mouse drag, or touch swipe
- **Reset**: R key or Reset button
- **Jump to Year**: Click on timeline markers

## License

Educational project - Historical data compiled from scholarly sources.

## Contributing

Contributions welcome! Especially:
- Additional empire territory data
- Historical accuracy improvements
- Accessibility enhancements
- Performance optimizations
