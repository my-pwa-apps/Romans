// ============================================
// DETAILED ROMAN EMPIRE TERRITORY DATA
// High-resolution polygon coordinates for smooth borders
// ============================================

// Utility function to create smooth curves between points
function interpolateCoords(coords, numPoints = 3) {
    if (coords.length < 3) return coords;
    
    const result = [];
    for (let i = 0; i < coords.length; i++) {
        const p0 = coords[(i - 1 + coords.length) % coords.length];
        const p1 = coords[i];
        const p2 = coords[(i + 1) % coords.length];
        
        result.push(p1);
        
        // Add interpolated points between p1 and p2
        for (let j = 1; j <= numPoints; j++) {
            const t = j / (numPoints + 1);
            // Catmull-Rom style interpolation
            const lat = p1[0] + (p2[0] - p1[0]) * t;
            const lon = p1[1] + (p2[1] - p1[1]) * t;
            result.push([lat, lon]);
        }
    }
    return result;
}

// ============================================
// DETAILED REGIONAL BOUNDARIES
// ============================================

// Italia - Italian Peninsula with detailed coastline (Expanded far north into Alps)
const ITALIA_DETAILED = [
    // Northern border (Alps/Po Valley) - Extended far north and west
    [47.5, 6.0], [47.5, 7.0], [47.5, 8.0], [47.5, 9.0], [47.5, 10.0],
    [47.5, 11.0], [47.5, 12.0], [47.5, 13.0], [47.5, 14.0], [47.0, 14.5],
    // Adriatic coast going south
    [45.5, 13.8], [45.1, 14.0], [44.6, 14.2], [44.1, 14.5], [43.6, 14.8],
    [43.2, 15.2], [42.8, 15.5], [42.4, 15.8], [42.0, 16.0], [41.6, 16.3],
    [41.2, 16.6], [40.8, 17.0], [40.4, 17.3], [40.0, 17.8],
    [39.8, 18.2], [39.5, 18.4], [39.2, 18.2], [39.0, 17.8],
    // Calabria and toe
    [38.7, 17.2], [38.4, 16.8], [38.2, 16.3], [38.0, 16.0], [37.9, 15.7],
    [37.95, 15.4], [38.1, 15.2], [38.3, 15.5], [38.5, 15.8],
    // West coast going north
    [38.7, 15.4], [38.9, 15.0], [39.2, 14.5], [39.5, 14.2], [39.8, 13.8],
    [40.2, 13.5], [40.5, 13.2], [40.8, 12.8], [41.0, 12.5], [41.2, 12.2],
    [41.5, 11.8], [41.8, 11.5], [42.0, 11.2], [42.3, 10.9], [42.5, 10.6],
    [42.8, 10.3], [43.0, 10.1], [43.3, 10.0], [43.6, 10.0], [43.9, 10.1],
    [44.2, 10.0], [44.4, 9.8], [44.6, 9.4], [44.9, 9.0], [45.2, 8.5],
    [45.5, 8.0], [45.8, 7.5], [46.2, 7.0], [46.5, 6.8]
];

// Sicilia - Sicily with detailed coastline
const SICILIA_DETAILED = [
    [38.3, 15.6], [38.2, 15.3], [38.0, 15.0], [37.8, 14.8], [37.6, 14.5],
    [37.4, 14.2], [37.2, 13.9], [37.0, 13.6], [36.9, 13.3], [36.85, 13.0],
    [36.9, 12.7], [37.0, 12.4], [37.2, 12.2], [37.5, 12.1], [37.8, 12.2],
    [38.0, 12.4], [38.2, 12.6], [38.3, 12.9], [38.35, 13.2], [38.4, 13.5],
    [38.45, 13.8], [38.5, 14.1], [38.5, 14.4], [38.45, 14.8], [38.4, 15.1],
    [38.35, 15.4]
];

// Sardinia
const SARDINIA_DETAILED = [
    [41.25, 9.2], [41.15, 9.5], [41.0, 9.7], [40.8, 9.8], [40.5, 9.75],
    [40.2, 9.65], [39.9, 9.5], [39.6, 9.35], [39.3, 9.2], [39.1, 9.0],
    [39.0, 8.75], [39.05, 8.5], [39.15, 8.3], [39.3, 8.2], [39.5, 8.15],
    [39.75, 8.2], [40.0, 8.3], [40.25, 8.45], [40.5, 8.55], [40.75, 8.7],
    [41.0, 8.9], [41.15, 9.0]
];

// Corsica
const CORSICA_DETAILED = [
    [43.0, 9.4], [42.85, 9.5], [42.65, 9.55], [42.45, 9.5], [42.25, 9.4],
    [42.05, 9.25], [41.9, 9.05], [41.8, 8.85], [41.75, 8.65], [41.8, 8.5],
    [41.9, 8.4], [42.05, 8.35], [42.25, 8.4], [42.45, 8.5], [42.65, 8.65],
    [42.85, 8.85], [42.95, 9.1], [43.0, 9.25]
];

// Hispania - Iberian Peninsula with detailed coastline - Extended to overlap with Gallia at Pyrenees
const HISPANIA_DETAILED = [
    // Northern coast (Bay of Biscay) - Extended into Gallia for overlap
    [43.8, -1.5], [43.7, -2.0], [43.6, -2.5], [43.55, -3.2], [43.55, -3.8], [43.5, -4.5],
    [43.45, -5.2], [43.4, -5.8], [43.3, -6.5], [43.2, -7.0], [43.0, -7.5],
    [42.8, -8.0], [42.5, -8.5], [42.2, -8.8], [42.0, -9.0],
    // Portuguese Atlantic coast
    [41.5, -8.8], [41.0, -8.7], [40.5, -8.8], [40.0, -8.9], [39.5, -9.2],
    [39.0, -9.3], [38.5, -9.2], [38.0, -8.9], [37.5, -8.8], [37.2, -8.5],
    [37.0, -8.0], [36.8, -7.5], [36.7, -7.0], [36.6, -6.5],
    // Southern coast (Gibraltar area)
    [36.2, -6.0], [36.1, -5.5], [36.0, -5.0], [36.1, -4.5], [36.3, -4.0],
    [36.5, -3.5], [36.7, -3.0], [36.8, -2.5], [36.9, -2.0], [37.0, -1.5],
    [37.2, -1.0], [37.4, -0.5], [37.6, 0.0], [37.9, 0.3],
    // Mediterranean coast
    [38.3, 0.0], [38.7, -0.3], [39.0, -0.1], [39.4, 0.2], [39.8, 0.5],
    [40.2, 0.7], [40.6, 1.0], [41.0, 1.5], [41.3, 2.0], [41.5, 2.5],
    // Pyrenees - Extended north to overlap with Gallia
    [42.0, 3.0], [42.5, 3.5], [43.0, 3.8], [43.5, 3.5], [44.0, 3.0],
    [44.2, 2.0], [44.2, 1.0], [44.2, 0.0], [44.0, -1.0]
];

// Gallia - Gaul/France with detailed borders - Extended south to overlap with Hispania, east to overlap with Italia
const GALLIA_DETAILED = [
    // Channel coast and Belgium
    [51.5, 2.5], [51.4, 3.0], [51.3, 3.5], [51.2, 4.0], [51.0, 4.5],
    [50.8, 5.0], [50.6, 5.5], [50.4, 6.0], [50.2, 6.5], [50.0, 7.0],
    // Rhine border going south
    [49.5, 7.5], [49.0, 8.0], [48.5, 8.5], [48.0, 9.0], [47.5, 9.5],
    [47.0, 10.0], [46.5, 10.5], [46.0, 10.0],
    // Alps border - Extended into Italy for overlap
    [46.0, 10.0], [45.5, 10.5], [45.0, 11.0], [44.5, 10.5], [44.0, 10.0],
    [43.5, 9.0], [43.5, 8.0], [43.5, 7.0],
    // Mediterranean coast (Gallia Narbonensis)
    [43.7, 6.8], [43.55, 6.0], [43.5, 5.5], [43.45, 5.0], [43.4, 4.5],
    [43.35, 4.0], [43.3, 3.5], [43.2, 3.0],
    // Pyrenees border - Extended south to overlap with Hispania
    [43.0, 3.0], [42.5, 2.5], [42.0, 2.0], [41.5, 1.0], [41.5, 0.0],
    [41.5, -1.0], [42.0, -2.0], [43.0, -2.0],
    // Atlantic coast
    [43.7, -1.6], [44.0, -1.5], [44.3, -1.2], [44.6, -1.0], [45.0, -1.2],
    [45.2, -1.5], [45.5, -2.5], [46.0, -3.5], [46.5, -4.0], [47.0, -4.3],
    [47.4, -3.5], [47.8, -3.0], [48.2, -2.5], [48.5, -2.0], [48.8, -1.0],
    [49.2, 0.0], [49.5, 1.0], [49.8, 2.0], [50.0, 3.0], [50.2, 4.0],
    [50.5, 5.0], [50.8, 5.5], [51.1, 5.0], [51.3, 4.5], [51.5, 4.0],
    [51.5, 3.5], [51.5, 3.0]
];

// Britannia - Roman Britain (Expanded to cover Londinium)
const BRITANNIA_DETAILED = [
    // Scottish lowlands (Hadrian's Wall area)
    [55.5, -4.0], [55.3, -3.5], [55.2, -3.0], [55.1, -2.5], [55.0, -2.0],
    [54.9, -1.5], [54.85, -1.0], [54.9, -0.5],
    // East coast
    [54.5, 0.0], [54.0, 0.3], [53.5, 0.5], [53.0, 0.7], [52.5, 1.2],
    [52.0, 1.5], [51.8, 1.4], [51.6, 1.2], [51.4, 0.8],
    // Southeast coast (expanded to cover London area)
    [51.3, 0.3], [51.2, -0.2], [51.0, -0.5], [50.9, -1.0], [50.85, -1.5],
    // South coast
    [50.75, -2.0], [50.6, -2.5], [50.5, -3.0], [50.4, -3.5], [50.3, -4.0],
    [50.15, -4.5], [50.1, -5.0], [50.2, -5.3],
    // Cornwall and Devon
    [50.4, -5.5], [50.6, -5.2], [50.8, -5.0], [51.0, -4.8], [51.2, -4.5],
    // Welsh coast
    [51.5, -4.2], [51.8, -4.5], [52.0, -4.8], [52.3, -5.0], [52.6, -4.8],
    [52.9, -4.5], [53.2, -4.2], [53.5, -4.0], [53.8, -4.2], [54.0, -4.5],
    [54.3, -4.8], [54.6, -4.5], [54.9, -4.2], [55.2, -4.0], [55.4, -4.2]
];

// Macedonia & Greece - Extended south and east to overlap with neighbors
const MACEDONIA_GREECE_DETAILED = [
    // Northern border connecting to Illyricum, Moesia, and Thrace - Extended east
    [42.5, 19.5], [42.3, 20.0], [42.1, 20.5], [42.0, 21.0], [41.9, 21.5],
    [41.8, 22.0], [41.7, 22.5], [41.5, 23.0], [41.3, 23.5], [41.1, 24.0],
    [40.9, 24.5], [40.7, 25.0], [40.5, 25.5],
    // Aegean coast going south - Extended to overlap with Thrace
    [40.3, 25.3], [40.0, 25.0], [39.7, 24.7], [39.4, 24.4], [39.1, 24.1],
    [38.8, 23.8], [38.5, 23.5], [38.2, 23.2],
    // Eastern coast of Greece
    [37.9, 23.8], [37.6, 24.2], [37.3, 24.4], [37.0, 24.2], [36.7, 23.8],
    // Southern Peloponnese - Extended south toward Crete
    [36.4, 23.3], [36.1, 22.8], [35.9, 22.3], [35.9, 21.8], [36.0, 21.3],
    [36.0, 20.8], [36.1, 20.3], [36.3, 19.8],
    // Western Peloponnese
    [36.6, 20.0], [36.9, 20.4], [37.2, 20.8], [37.5, 21.2], [37.8, 21.0],
    [38.1, 20.7], [38.4, 20.4],
    // Western Greece coast going north
    [38.7, 20.2], [39.0, 20.4], [39.3, 20.2], [39.6, 19.9], [39.9, 19.7],
    [40.2, 19.5], [40.5, 19.6], [40.8, 19.8], [41.1, 20.0], [41.4, 19.8],
    [41.7, 19.5], [42.0, 19.4], [42.3, 19.4]
];

// Asia Minor (Anatolia/Turkey) - Extended to overlap with Thrace, Armenia, and Syria
const ASIA_MINOR_DETAILED = [
    // Black Sea coast - Extended west to overlap with Thrace, east to overlap with Armenia
    [42.2, 26.5], [42.0, 27.0], [41.9, 27.5], [41.8, 28.0], [41.6, 28.5],
    [41.4, 29.0], [41.3, 29.5], [41.2, 30.0],
    [41.3, 30.5], [41.4, 31.0], [41.5, 31.5], [41.4, 32.0], [41.3, 32.5],
    [41.2, 33.0], [41.0, 33.5], [40.8, 34.0], [40.6, 34.5], [40.4, 35.0],
    [40.2, 35.5], [40.0, 36.0], [39.8, 36.5], [39.6, 37.0], [39.5, 37.5],
    // Eastern border - Extended MUCH further east to overlap with Armenia
    [39.5, 38.0], [39.6, 38.5], [39.7, 39.0], [39.8, 39.5], [39.9, 40.0],
    [40.0, 40.5], [40.0, 41.0], [39.9, 41.5], [39.7, 42.0], [39.5, 42.5],
    [39.0, 43.0], [38.5, 43.5], [38.0, 43.5], [37.5, 43.0], [37.0, 42.5],
    // Southeast toward Syria - curving down
    [36.5, 42.0], [36.0, 41.5], [35.5, 41.0], [35.0, 40.5], [35.0, 40.0],
    // Mediterranean coast - Extended to overlap with Syria
    [35.8, 37.0], [35.7, 36.5], [35.7, 36.0], [35.8, 35.5], [35.9, 35.0],
    [36.0, 34.5], [36.0, 34.0], [36.0, 33.5], [36.1, 33.0], [36.2, 32.5],
    [36.3, 32.0], [36.4, 31.5], [36.5, 31.0], [36.6, 30.5], [36.7, 30.0],
    [36.8, 29.5], [36.9, 29.0], [37.0, 28.5], [37.2, 28.0], [37.4, 27.5],
    [37.6, 27.0],
    // Aegean coast - Extended west to overlap with Thrace
    [37.8, 26.5], [38.0, 26.3], [38.3, 26.2], [38.6, 26.3], [38.9, 26.5],
    [39.2, 26.7], [39.5, 26.8], [39.8, 26.6], [40.1, 26.4], [40.4, 26.3],
    [40.7, 26.2], [41.0, 26.3], [41.3, 26.4], [41.6, 26.5], [41.9, 26.5]
];

// Syria and Levant - Extended north to overlap with Asia Minor, south to overlap with Judaea/Arabia/Egypt
const SYRIA_DETAILED = [
    // Northern border - Extended to overlap with Asia Minor
    [38.5, 35.5], [38.2, 36.0], [38.0, 36.5], [37.8, 37.0], [37.5, 37.5],
    [37.2, 38.0], [36.8, 38.5], [36.5, 39.0], [36.2, 39.5], [35.8, 40.0],
    [34.5, 40.5], [34.2, 41.0], [33.8, 41.0], [33.4, 40.5], [33.0, 40.0],
    [32.6, 39.5], [32.3, 39.0], [32.0, 38.5], [31.8, 38.0], [31.6, 37.5],
    // Southern/Western coast - Extended to overlap with Judaea and Egypt
    [30.0, 37.0], [30.0, 36.5], [30.0, 36.0], [30.0, 35.5], [30.0, 35.0],
    [30.5, 34.5], [31.0, 34.0], [31.5, 33.5], [32.0, 33.2],
    [32.5, 33.0], [33.0, 33.2], [33.5, 33.5], [34.0, 34.0], [34.5, 34.5],
    [35.0, 35.0], [35.5, 35.2], [36.0, 35.0], [36.5, 35.2], [37.0, 35.3],
    [37.5, 35.4]
];

// Aegyptus (Egypt) - Extended east to overlap with Arabia/Judaea, west to overlap with Africa
const AEGYPTUS_DETAILED = [
    // Mediterranean coast - Extended west to approach Africa
    [32.0, 20.0], [31.8, 21.0], [31.6, 22.0], [31.5, 23.0], [31.4, 24.0],
    [31.3, 25.0], [31.2, 26.0], [31.1, 27.0], [31.0, 28.0], [31.0, 29.0],
    [31.1, 30.0], [31.2, 30.5], [31.4, 31.0], [31.6, 31.5], [31.8, 32.0],
    // Sinai - Extended to overlap with Judaea/Arabia
    [32.0, 33.0], [31.8, 34.0], [31.6, 35.0], [31.4, 36.0], [31.0, 36.0],
    [30.5, 36.0], [30.0, 36.0], [29.5, 36.0],
    // Red Sea coast - Extended to overlap with Arabia
    [29.0, 35.2], [28.5, 34.8], [28.0, 34.5], [27.5, 34.0], [27.0, 33.5],
    [26.5, 33.2], [26.0, 33.0], [25.5, 32.8], [25.0, 32.5], [24.5, 32.5],
    // Southern Egypt (Nile) - Extended west
    [24.0, 32.5], [24.0, 31.5], [24.5, 30.5], [25.0, 29.5], [25.5, 28.5],
    [26.0, 27.5], [26.5, 26.5], [27.0, 25.5], [27.5, 24.5], [28.0, 24.0],
    [28.5, 23.5], [29.0, 23.2], [29.5, 23.0], [30.0, 23.0], [30.5, 23.0],
    [31.0, 23.0], [31.0, 22.0], [31.0, 21.0], [31.0, 20.0]
];

// Africa Proconsularis (Tunisia/Libya coast) - Extended east to overlap with Egypt
const AFRICA_DETAILED = [
    [37.5, 9.5], [37.3, 10.0], [37.1, 10.5], [36.9, 11.0], [36.7, 11.5],
    [36.5, 12.0], [36.2, 12.5], [35.8, 13.0], [35.4, 14.0], [35.0, 15.0],
    [34.5, 16.0], [34.0, 17.0], [33.5, 18.0], [33.0, 19.0], [32.5, 20.0],
    [32.0, 21.0], [32.0, 22.0], [31.8, 23.0], [31.6, 24.0], [31.4, 25.0],
    [31.0, 25.0], [30.5, 25.0], [30.0, 24.0], [29.5, 23.0],
    // Southern border - Extended east toward Egypt
    [29.0, 22.0], [29.0, 21.0], [29.0, 20.0], [28.5, 18.0],
    [28.5, 16.0], [28.8, 14.0], [29.2, 12.0], [29.8, 10.5], [30.2, 9.5],
    [30.8, 9.0], [31.5, 8.5], [32.2, 8.2], [32.8, 8.0],
    [33.5, 5.0], [34.2, 5.5], [35.0, 6.0], [35.8, 7.0], [36.5, 8.0],
    [37.0, 9.0]
];

// Illyricum/Dalmatia - Extended to overlap with Italia, Pannonia, Moesia, and Macedonia
const ILLYRICUM_DETAILED = [
    // Northern border connecting to Italia - Extended west
    [48.0, 12.0], [47.8, 13.0], [47.6, 14.0], [47.4, 15.0], [47.2, 16.0],
    [46.2, 15.5], [46.0, 16.0], [45.8, 16.5], [45.6, 17.0], [45.4, 17.5],
    [45.2, 18.0], [45.0, 18.5], [44.8, 19.0], [44.6, 19.5], [44.4, 20.0],
    // Eastern border connecting to Moesia - Extended east
    [44.2, 20.5], [43.9, 20.8], [43.6, 20.8], [43.3, 20.5], [43.0, 20.2],
    // Southward along interior connecting to Macedonia
    [42.7, 20.0], [42.4, 19.7], [42.1, 19.5], [41.8, 19.6], [41.5, 19.8],
    [41.2, 20.0], [40.9, 19.8], [40.6, 19.5], [40.3, 19.6], [40.0, 19.8],
    // Albanian coast
    [39.7, 20.0], [39.5, 20.2], [39.5, 19.9], [39.7, 19.6],
    // Adriatic coast going north - Extended west to overlap with Italia
    [40.0, 19.3], [40.3, 19.0], [40.6, 18.6], [40.9, 18.2], [41.2, 17.8],
    [41.5, 17.4], [41.8, 17.0], [42.1, 16.6], [42.4, 16.2], [42.7, 15.8],
    [43.0, 15.4], [43.3, 15.0], [43.6, 14.6], [43.9, 14.2], [44.2, 13.8],
    [44.5, 13.0], [45.0, 12.5], [45.5, 12.0], [46.0, 12.0], [46.5, 12.0],
    [47.0, 12.0], [47.5, 12.0]
];

// Pannonia (Hungary/Austria area) - Extended east to overlap with Dacia
const PANNONIA_DETAILED = [
    // Northern border (Danube) - Extended east to overlap with Dacia
    [49.0, 14.5], [48.8, 15.0], [48.6, 15.5], [48.4, 16.0], [48.2, 16.5],
    [48.0, 17.0], [47.7, 17.5], [47.4, 18.0], [47.1, 18.5], [46.8, 19.0],
    [46.5, 19.5], [46.2, 20.0], [45.9, 20.5], [45.6, 21.0], [45.3, 21.5],
    [45.0, 22.0],
    // Eastern border connecting to Dacia/Moesia - Extended further east
    [44.8, 21.8], [44.5, 21.5], [44.2, 21.2], [44.0, 20.8], [43.8, 20.4],
    [43.8, 20.0],
    // Southern border connecting to Illyricum/Moesia
    [43.0, 19.5], [43.5, 19.0], [44.0, 18.5], [44.5, 18.0], [45.0, 17.5],
    [45.5, 17.0], [46.0, 16.5], [46.5, 16.0], [47.0, 15.5],
    // Western border connecting to Noricum
    [47.0, 14.7], [47.3, 14.5], [47.6, 14.4], [47.9, 14.4], [48.2, 14.4],
    [48.5, 14.4], [48.8, 14.4]
];

// Dacia (Romania) - Extended south to overlap with Moesia and west to overlap with Pannonia
const DACIA_DETAILED = [
    // Northern border (Carpathians)
    [48.2, 21.0], [48.0, 21.5], [47.8, 22.0], [47.5, 22.5], [47.2, 23.0],
    [46.9, 23.5], [46.6, 24.0], [46.3, 24.5], [46.0, 25.0], [45.7, 25.5],
    [45.4, 26.0], [45.1, 26.5], [44.8, 27.0], [44.5, 27.5],
    // Eastern border (Black Sea approach) - extended south to overlap with Moesia
    [44.2, 27.8], [43.9, 27.8], [43.6, 27.5], [43.3, 27.2], [43.0, 26.8],
    // Southern border connecting to Moesia - extended further south for overlap
    [42.0, 26.5], [42.2, 25.5], [42.4, 24.5], [42.6, 23.5], [42.8, 22.5],
    [43.0, 21.5], [43.5, 20.5], [44.0, 19.5], [44.5, 19.0], [45.0, 18.5],
    [45.5, 18.5], [46.0, 19.0],
    // Western border connecting to Pannonia - extended further west for overlap
    [46.0, 19.8], [46.3, 20.0], [46.6, 20.2], [46.9, 20.4], [47.2, 20.6],
    [47.5, 20.8], [47.8, 21.0], [48.0, 21.0]
];

// Thracia (Thrace) - Extended east to overlap with Asia Minor at Bosphorus
const THRACIA_DETAILED = [
    // Northern border along Moesia
    [43.8, 22.5], [43.6, 23.0], [43.4, 23.5], [43.2, 24.0], [43.0, 24.5],
    [42.8, 25.0], [42.6, 25.5], [42.4, 26.0], [42.2, 26.5], [42.0, 27.0],
    [41.8, 27.5], [41.6, 28.0], [41.4, 28.5], [41.2, 29.0],
    // Bosphorus area (Constantinople) - Extended into Asia Minor
    // Bosphorus area (Constantinople) - Extended into Asia Minor
    [41.5, 30.5], [41.0, 30.5], [40.5, 30.0], [40.0, 29.5], [40.0, 29.0],
    [40.0, 28.0], [39.8, 27.5], [39.6, 27.0], [39.6, 26.5], [39.8, 26.0],
    [40.0, 25.6], [40.2, 25.2], [40.3, 24.8], [40.4, 24.4], [40.5, 24.0],
    // Back northwest connecting to Macedonia
    [40.6, 23.6], [40.8, 23.2], [41.0, 22.8], [41.2, 22.5],
    [41.5, 22.3], [41.8, 22.2], [42.1, 22.2], [42.4, 22.2],
    [42.7, 22.3], [43.0, 22.3], [43.3, 22.4], [43.6, 22.4]
];

// Moesia (Bulgaria/Serbia) - Extended north to overlap with Dacia
const MOESIA_DETAILED = [
    // Northern border along Danube - Extended north to overlap with Dacia
    // Northern border along Danube - Extended north to overlap with Dacia
    [47.0, 19.5], [46.8, 20.5], [46.6, 21.5], [46.4, 22.5], [46.2, 23.5],
    [46.0, 24.5], [45.8, 25.5], [45.6, 26.5], [45.4, 27.5], [45.2, 28.5],
    [42.1, 28.8], [41.8, 28.6], [41.5, 28.3], [41.3, 28.0],
    // Southern border toward Thrace/Macedonia
    [41.5, 27.5], [41.7, 27.0], [41.9, 26.5], [42.1, 26.0], [42.3, 25.5],
    [42.5, 25.0], [42.7, 24.5], [42.9, 24.0], [43.1, 23.5], [43.3, 23.0],
    [43.5, 22.5], [43.7, 22.0], [43.9, 21.5], [44.1, 21.0], [44.3, 20.5],
    [44.5, 20.2], [44.8, 20.0], [45.1, 19.8], [45.4, 19.8], [45.7, 19.8],
    [46.0, 19.8]
];

// Latium (Early Rome) - small region around Rome
const LATIUM_DETAILED = [
    [42.1, 12.0], [42.0, 12.3], [41.95, 12.5], [41.9, 12.7], [41.85, 12.8],
    [41.75, 12.85], [41.65, 12.8], [41.55, 12.7], [41.5, 12.5], [41.5, 12.3],
    [41.55, 12.1], [41.65, 12.0], [41.75, 11.95], [41.9, 11.95], [42.0, 12.0]
];

// Greater Latium (Expanded early Rome)
const GREATER_LATIUM_DETAILED = [
    [42.4, 11.6], [42.35, 12.0], [42.3, 12.4], [42.2, 12.8], [42.1, 13.1],
    [41.9, 13.3], [41.7, 13.4], [41.5, 13.35], [41.3, 13.2], [41.15, 13.0],
    [41.1, 12.7], [41.15, 12.4], [41.25, 12.1], [41.4, 11.8], [41.6, 11.6],
    [41.85, 11.5], [42.1, 11.5], [42.3, 11.55]
];

// Central Italy (Mid-Republic)
const CENTRAL_ITALY_DETAILED = [
    [43.2, 11.2], [43.15, 11.6], [43.1, 12.0], [43.0, 12.5], [42.9, 13.0],
    [42.8, 13.4], [42.6, 13.8], [42.4, 14.2], [42.1, 14.5], [41.8, 14.7],
    [41.4, 14.8], [41.0, 14.9], [40.6, 14.8], [40.3, 14.5], [40.0, 14.0],
    [39.9, 13.5], [40.0, 13.0], [40.15, 12.5], [40.35, 12.1], [40.6, 11.7],
    [40.9, 11.4], [41.3, 11.2], [41.7, 11.0], [42.1, 10.95], [42.5, 11.0],
    [42.9, 11.1]
];

// Germania Inferior (Lower Germany / Netherlands / Belgium)
// Massively expanded to fill all gaps in Low Countries region
const GERMANIA_INFERIOR_DETAILED = [
    // Northern coast (North Sea)
    [53.5, 4.5], [53.3, 5.0], [53.1, 5.5], [52.9, 6.0], [52.6, 6.5],
    // Eastern border along Rhine
    [52.3, 7.0], [52.0, 7.2], [51.7, 7.2], [51.4, 7.0], [51.1, 6.8],
    [50.8, 6.5], [50.5, 6.2], [50.2, 6.0], [49.8, 5.8], [49.5, 5.5],
    // Southern border (deep into Belgium/Luxembourg)
    [49.3, 5.0], [49.4, 4.5], [49.5, 4.0], [49.6, 3.5], [49.8, 3.0],
    [50.0, 2.5], [50.3, 2.3],
    // Western coast (Channel/North Sea) going north
    [50.6, 2.0], [50.9, 1.8], [51.2, 2.0], [51.5, 2.5], [51.8, 3.0],
    [52.1, 3.5], [52.4, 4.0], [52.7, 4.3], [53.0, 4.5], [53.3, 4.5]
];

// Germania Superior (Upper Germany) - Extended to fill gaps
const GERMANIA_SUPERIOR_DETAILED = [
    // Northern border
    [50.8, 6.5], [50.6, 7.0], [50.4, 7.5], [50.2, 8.0], [50.0, 8.5],
    [49.7, 9.0], [49.4, 9.5], [49.1, 10.0], [48.8, 10.5], [48.5, 11.0],
    // Eastern/Southern border
    [48.2, 10.8], [47.9, 10.5], [47.6, 10.0], [47.3, 9.5], [47.0, 9.0],
    [46.8, 8.5], [46.8, 8.0], [47.0, 7.5], [47.3, 7.0],
    // Western border connecting to Gallia
    [47.6, 6.8], [48.0, 6.5], [48.4, 6.3], [48.8, 6.3], [49.2, 6.3],
    [49.6, 6.4], [50.0, 6.4], [50.4, 6.5]
];

// Raetia (Switzerland/Bavaria) - Greatly expanded to fill Alpine gap completely
const RAETIA_DETAILED = [
    // Northern border (Bavaria)
    [48.8, 8.5], [48.7, 9.0], [48.6, 9.5], [48.5, 10.0], [48.4, 10.5],
    [48.3, 11.0], [48.2, 11.5], [48.0, 12.0],
    // Eastern border connecting to Noricum
    [47.7, 12.2], [47.4, 12.0], [47.1, 11.8], [46.8, 11.5], [46.5, 11.2],
    // Southern border (Alps - connecting to Italia)
    [46.2, 10.8], [46.0, 10.4], [45.9, 10.0], [45.9, 9.5], [46.0, 9.0],
    [46.1, 8.5], [46.2, 8.0], [46.3, 7.5], [46.4, 7.0], [46.5, 6.8],
    // Western border connecting to Gallia
    [46.8, 6.8], [47.1, 7.0], [47.4, 7.3], [47.7, 7.6], [48.0, 8.0],
    [48.3, 8.2], [48.5, 8.4]
];

// Noricum (Austria) - Expanded to connect Raetia, Pannonia, and Italia
const NORICUM_DETAILED = [
    // Northern border (Danube)
    [49.0, 11.5], [48.9, 12.0], [48.8, 12.5], [48.7, 13.0], [48.5, 13.5],
    [48.3, 14.0], [48.1, 14.5], [47.9, 15.0], [47.7, 15.5],
    // Eastern border connecting to Pannonia
    [47.4, 15.8], [47.1, 15.6], [46.8, 15.3], [46.5, 15.0], [46.2, 14.6],
    // Southern border (Alps - connecting to Italia)
    [46.0, 14.2], [45.9, 13.8], [45.9, 13.4], [46.0, 13.0], [46.1, 12.5],
    [46.2, 12.0], [46.4, 11.5], [46.6, 11.0],
    // Western border connecting to Raetia
    [46.9, 11.2], [47.2, 11.5], [47.5, 11.8], [47.8, 12.0], [48.1, 11.8],
    [48.4, 11.6], [48.7, 11.5]
];

// Mesopotamia (Iraq)
const MESOPOTAMIA_DETAILED = [
    [37.2, 39.8], [37.0, 40.5], [36.7, 41.2], [36.3, 41.8], [35.9, 42.4],
    [35.4, 43.0], [34.9, 43.5], [34.4, 44.0], [33.9, 44.3], [33.4, 44.5],
    [32.9, 44.3], [32.5, 43.8], [32.3, 43.2], [32.4, 42.5], [32.6, 41.8],
    [33.0, 41.2], [33.5, 40.7], [34.0, 40.2], [34.6, 39.8], [35.2, 39.5],
    [35.8, 39.4], [36.4, 39.5], [36.9, 39.7]
];

// Armenia - Extended west to overlap with Asia Minor
const ARMENIA_DETAILED = [
    // Northern border
    [41.2, 41.5], [41.0, 42.0], [40.8, 42.5], [40.5, 43.2], [40.2, 43.8],
    [39.8, 44.3], [39.4, 44.7], [38.9, 45.0],
    // Eastern/Southern border
    [38.4, 44.8], [38.0, 44.4], [37.6, 43.8], [37.4, 43.2], [37.3, 42.6],
    [37.4, 42.0], [37.5, 41.5], [37.6, 41.0], [37.8, 40.5],
    // Western border - Extended west to overlap with Asia Minor
    [38.1, 40.2], [38.4, 40.0], [38.7, 40.0], [39.0, 40.2], [39.3, 40.5],
    [39.6, 40.8], [39.9, 41.0], [40.2, 41.2], [40.5, 41.3], [40.8, 41.4],
    [41.0, 41.5]
];

// Arabia Petraea - Extended to overlap with Syria, Judaea, and Egypt
const ARABIA_DETAILED = [
    // Northern border - Extended to overlap with Syria
    [32.5, 35.3], [32.2, 35.8], [31.8, 36.2], [31.4, 36.5], [31.0, 36.6],
    [30.5, 36.5], [30.0, 36.2], [29.6, 35.8], [29.3, 35.3], [29.0, 34.8],
    // Southern/Western border - Extended to overlap with Egypt
    [28.8, 34.3], [28.9, 33.8], [29.2, 33.4], [29.6, 33.2], [30.0, 33.0],
    [30.5, 33.0], [31.0, 33.2], [31.5, 33.5], [32.0, 34.0], [32.3, 34.5],
    [32.4, 35.0]
];

// Judaea - Extended to overlap with Syria, Arabia, and Egypt
const JUDAEA_DETAILED = [
    // Northern border - Extended to overlap with Syria
    [33.5, 34.8], [33.3, 35.2], [33.0, 35.6], [32.7, 35.9], [32.3, 36.0],
    [31.9, 35.8], [31.5, 35.5], [31.2, 35.2], [30.9, 34.8],
    // Southern border - Extended to overlap with Arabia and Egypt
    [30.7, 34.4], [30.8, 34.0], [31.0, 33.6], [31.3, 33.3], [31.6, 33.0],
    [32.0, 33.0], [32.4, 33.2], [32.8, 33.5], [33.1, 33.9], [33.3, 34.3],
    [33.4, 34.6]
];

// Mauretania (Morocco/Algeria coast)
const MAURETANIA_DETAILED = [
    [36.3, -5.5], [36.1, -4.8], [35.9, -4.0], [35.6, -3.2], [35.3, -2.5],
    [35.0, -1.8], [34.7, -1.0], [34.4, -0.3], [34.1, 0.5], [33.8, 1.2],
    [33.5, 2.0], [33.8, 3.0], [33.6, 4.0], [33.4, 5.0], [33.2, 6.0],
    [33.0, 7.0], [32.8, 8.0], [32.4, 7.0], [32.1, 6.0],
    [32.0, 1.2], [32.1, 0.4], [32.3, -0.4], [32.6, -1.2], [33.0, -2.0],
    [33.4, -2.8], [33.9, -3.5], [34.4, -4.2], [35.0, -4.8], [35.6, -5.3],
    [36.0, -5.5]
];

// Crete
const CRETE_DETAILED = [
    [35.6, 23.5], [35.5, 24.0], [35.4, 24.5], [35.3, 25.0], [35.2, 25.5],
    [35.15, 26.0], [35.2, 26.3], [35.0, 26.3], [34.9, 26.0], [35.0, 25.5],
    [35.0, 25.0], [35.05, 24.5], [35.1, 24.0], [35.2, 23.5], [35.3, 23.2],
    [35.4, 23.5]
];

// Cyprus
const CYPRUS_DETAILED = [
    [35.7, 32.3], [35.6, 32.8], [35.4, 33.2], [35.2, 33.6], [35.0, 34.0],
    [34.8, 34.3], [34.6, 34.5], [34.5, 34.3], [34.55, 34.0], [34.6, 33.6],
    [34.7, 33.2], [34.8, 32.8], [35.0, 32.5], [35.2, 32.3], [35.4, 32.2],
    [35.6, 32.2]
];

// Cyrenaica (Eastern Libya) - Overlaps with Africa and Egypt
const CYRENAICA_DETAILED = [
    // Mediterranean coast
    [32.5, 19.0], [32.8, 20.0], [32.9, 21.0], [32.8, 22.0], [32.5, 23.0],
    [32.0, 24.0], [31.5, 25.0],
    // Eastern border overlapping Egypt
    [31.0, 25.5], [30.0, 25.5], [29.0, 25.5],
    // Southern border
    [28.5, 25.0], [28.5, 24.0], [28.5, 23.0], [28.5, 22.0], [28.5, 21.0],
    [28.5, 20.0],
    // Western border overlapping Africa
    [28.5, 19.0], [29.5, 18.5], [30.5, 18.5], [31.5, 18.5]
];

// ============================================
// EXPORT DETAILED BOUNDARIES
// ============================================
const TERRITORY_SHAPES = {
    // Core Italy
    italia: ITALIA_DETAILED,
    sicilia: SICILIA_DETAILED,
    sardinia: SARDINIA_DETAILED,
    corsica: CORSICA_DETAILED,
    // Early Rome
    latium: LATIUM_DETAILED,
    greaterlatium: GREATER_LATIUM_DETAILED,
    centralitaly: CENTRAL_ITALY_DETAILED,
    // Western provinces
    hispania: HISPANIA_DETAILED,
    gallia: GALLIA_DETAILED,
    britannia: BRITANNIA_DETAILED,
    mauretania: MAURETANIA_DETAILED,
    // Central Europe
    germaniainferior: GERMANIA_INFERIOR_DETAILED,
    germaniasuperior: GERMANIA_SUPERIOR_DETAILED,
    raetia: RAETIA_DETAILED,
    noricum: NORICUM_DETAILED,
    // Balkans
    macedoniaGreece: MACEDONIA_GREECE_DETAILED,
    illyricum: ILLYRICUM_DETAILED,
    pannonia: PANNONIA_DETAILED,
    dacia: DACIA_DETAILED,
    thracia: THRACIA_DETAILED,
    moesia: MOESIA_DETAILED,
    // Islands
    crete: CRETE_DETAILED,
    cyprus: CYPRUS_DETAILED,
    // Eastern provinces
    asiaMinor: ASIA_MINOR_DETAILED,
    syria: SYRIA_DETAILED,
    mesopotamia: MESOPOTAMIA_DETAILED,
    armenia: ARMENIA_DETAILED,
    judaea: JUDAEA_DETAILED,
    arabia: ARABIA_DETAILED,
    // Africa
    aegyptus: AEGYPTUS_DETAILED,
    africa: AFRICA_DETAILED,
    cyrenaica: CYRENAICA_DETAILED
};

// Make available globally
window.TERRITORY_SHAPES = TERRITORY_SHAPES;
window.interpolateCoords = interpolateCoords;
