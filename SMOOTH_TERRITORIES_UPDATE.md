# Territory Smooth Borders Update

## Summary
Implemented detailed high-resolution polygon coordinates for smoother, more realistic Roman Empire territory boundaries.

## Changes Made

### New File: `territories.js`
Created a dedicated file containing detailed boundary coordinates for major Roman provinces:

**Core Italy:**
- Italia (Italian Peninsula) - 60+ coordinate points following actual coastline
- Sicilia (Sicily) - 26 coordinate points
- Sardinia - 22 coordinate points  
- Corsica - 18 coordinate points

**Early Rome Regions:**
- Latium - Original Rome area
- Greater Latium - Expanded early republic
- Central Italy - Mid-republic territory

**Western Provinces:**
- Hispania (Spain/Portugal) - 40+ coordinate points tracing Iberian coastline
- Gallia (France) - 35+ coordinate points following actual borders
- Britannia (Britain) - 30+ coordinate points
- Mauretania (Morocco/Algeria)

**Central Europe:**
- Germania Superior
- Raetia (Switzerland/Bavaria)
- Noricum (Austria)

**Balkans:**
- Macedonia & Greece - 40+ coordinate points including Peloponnese
- Illyricum/Dalmatia
- Pannonia (Hungary)
- Dacia (Romania)
- Thracia (Thrace)
- Moesia (Bulgaria/Serbia)

**Eastern Provinces:**
- Asia Minor (Anatolia) - 35+ coordinate points
- Syria - 30+ coordinate points
- Mesopotamia (Iraq)
- Armenia
- Judaea
- Arabia Petraea

**Africa:**
- Aegyptus (Egypt) - 30+ coordinate points including Nile delta
- Africa Proconsularis (Tunisia/Libya)

### Updated: `script.js`
- Added `getDetailedCoords()` function that maps territory names to detailed shapes
- Updated `drawTerritories()` to use detailed coordinates when available
- Increased `smoothFactor` from 1.5 to 2.0 for even smoother rendering
- Added coordinate interpolation fallback for territories without detailed shapes

### Updated: `index.html`
- Added script reference to load `territories.js` before `script.js`

### Updated: `service-worker.js`
- Bumped cache version to `imperivm-v1.0.5`
- Added `territories.js` to cached assets

## Technical Implementation

### Coordinate Resolution
- **Before:** 6-14 coordinate points per territory (angular appearance)
- **After:** 20-60+ coordinate points per territory (smooth coastlines)

### Smart Fallback
If detailed coordinates aren't available for a territory:
1. Uses `interpolateCoords()` function to add intermediate points
2. Smooths existing coordinates for better rendering
3. Falls back to original coordinates if interpolation unavailable

### Territory Mapping
The system maps various territory name variations to detailed shapes:
- "Italia", "Italy" → italia detailed shape
- "Hispania", "Spain", "Hispania Citerior" → hispania detailed shape
- "Macedonia", "Greece" → macedoniaGreece detailed shape
- etc.

## Visual Improvements
- Territory borders now follow actual geographic coastlines
- Smooth curves instead of angular polygon edges
- More realistic representation of Mediterranean coastlines
- Islands (Sicily, Sardinia, Corsica) accurately shaped
- Peninsula shapes (Italy, Greece, Iberia) follow natural geography

## Performance
- Detailed coordinates loaded once on page load
- No impact on animation performance
- Coordinates cached by service worker for offline use
