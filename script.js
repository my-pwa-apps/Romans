// Roman Empire Expansion Data
const historicalData = [
    { year: -509, name: "Early Roman Republic", description: "Rome begins as a city-state in central Italy, having just overthrown its Etruscan kings.", territories: [[41.9, 12.5, 0.5]] },
    { year: -450, name: "Expanding Republic", description: "Rome consolidates control over Latium and begins conflicts with neighboring tribes.", territories: [[41.9, 12.5, 1.2]] },
    { year: -350, name: "Central Italy", description: "Victory in the Latin Wars. Rome dominates central Italy through warfare and alliances.", territories: [[41.9, 12.5, 2.0], [40.8, 14.3, 1.0]] },
    { year: -275, name: "Italian Peninsula", description: "Pyrrhic Wars concluded. Rome controls most of the Italian peninsula south of the Po Valley.", territories: [[42.5, 12.5, 3.5], [40.8, 14.3, 1.8], [38.1, 15.6, 1.2]] },
    { year: -218, name: "First Punic War", description: "After defeating Carthage, Rome gains Sicily, Sardinia, and Corsica - its first provinces outside Italy.", territories: [[42.5, 12.5, 3.8], [40.8, 14.3, 2.0], [38.1, 15.6, 1.5], [37.5, 14.0, 1.2], [40.0, 9.0, 0.8], [42.0, 9.0, 0.6]] },
    { year: -146, name: "Mediterranean Power", description: "Carthage destroyed, Greece conquered. Rome becomes the dominant power in the Mediterranean.", territories: [[42.5, 12.5, 4.0], [40.8, 14.3, 2.2], [38.1, 15.6, 1.6], [37.5, 14.0, 1.3], [40.0, 9.0, 1.0], [39.0, 22.0, 2.0], [36.8, 10.0, 1.0], [37.0, -5.0, 1.5]] },
    { year: -50, name: "Caesar's Conquests", description: "Julius Caesar conquers Gaul. Rome controls vast territories from Spain to Asia Minor.", territories: [[42.5, 12.5, 4.2], [40.8, 14.3, 2.3], [46.0, 2.0, 4.5], [40.4, -3.7, 4.0], [39.0, 22.0, 2.5], [38.0, 23.5, 2.0], [37.0, 35.0, 2.0], [36.8, 10.0, 1.2], [33.0, 35.0, 1.5], [51.5, 4.0, 1.5]] },
    { year: -27, name: "Birth of the Empire", description: "Octavian becomes Augustus, first Roman Emperor. The Republic transitions to Empire.", territories: [[42.5, 12.5, 4.3], [40.8, 14.3, 2.4], [46.0, 2.0, 4.8], [40.4, -3.7, 4.5], [39.0, 22.0, 3.0], [38.0, 23.5, 2.3], [37.0, 35.0, 2.2], [36.8, 10.0, 1.3], [30.0, 31.0, 2.5], [33.0, 35.0, 1.8], [51.5, 4.0, 1.8]] },
    { year: 14, name: "Augustan Empire", description: "Augustus dies after establishing imperial frontiers. The empire is stable and prosperous.", territories: [[42.5, 12.5, 4.4], [40.8, 14.3, 2.5], [46.0, 2.0, 5.0], [40.4, -3.7, 4.8], [39.0, 22.0, 3.2], [38.0, 23.5, 2.5], [37.0, 35.0, 2.4], [36.8, 10.0, 1.4], [30.0, 31.0, 3.0], [33.0, 35.0, 2.0], [51.5, 4.0, 2.0], [48.0, 16.0, 2.5]] },
    { year: 69, name: "Flavian Dynasty", description: "Year of Four Emperors ends. Vespasian founds the Flavian dynasty and stabilizes the empire.", territories: [[42.5, 12.5, 4.5], [40.8, 14.3, 2.6], [46.0, 2.0, 5.2], [40.4, -3.7, 5.0], [39.0, 22.0, 3.4], [38.0, 23.5, 2.7], [37.0, 35.0, 2.6], [36.8, 10.0, 1.5], [30.0, 31.0, 3.2], [33.0, 35.0, 2.2], [51.5, 4.0, 2.2], [48.0, 16.0, 3.0], [51.0, -2.5, 1.8]] },
    { year: 117, name: "Greatest Extent", description: "Under Trajan, the empire reaches its maximum territorial extent, from Britain to Mesopotamia.", territories: [[42.5, 12.5, 4.6], [40.8, 14.3, 2.7], [46.0, 2.0, 5.5], [40.4, -3.7, 5.2], [39.0, 22.0, 3.8], [38.0, 23.5, 3.0], [37.0, 35.0, 3.0], [36.8, 10.0, 1.6], [30.0, 31.0, 3.5], [33.0, 35.0, 2.5], [33.0, 44.0, 2.5], [51.5, 4.0, 2.5], [48.0, 16.0, 3.5], [51.0, -2.5, 2.0], [54.0, -2.0, 1.5], [45.0, 25.0, 3.0], [35.0, 33.0, 3.0]] },
    { year: 180, name: "Pax Romana Ends", description: "Marcus Aurelius dies. The era of peace and prosperity begins to wane with increasing pressures.", territories: [[42.5, 12.5, 4.6], [40.8, 14.3, 2.7], [46.0, 2.0, 5.5], [40.4, -3.7, 5.2], [39.0, 22.0, 3.8], [38.0, 23.5, 3.0], [37.0, 35.0, 3.0], [36.8, 10.0, 1.6], [30.0, 31.0, 3.5], [33.0, 35.0, 2.5], [33.0, 44.0, 2.5], [51.5, 4.0, 2.5], [48.0, 16.0, 3.5], [51.0, -2.5, 2.0], [54.0, -2.0, 1.5], [45.0, 25.0, 3.0], [35.0, 33.0, 3.0]] },
    { year: 235, name: "Crisis Begins", description: "The Crisis of the Third Century begins. Political instability and barbarian invasions threaten the empire.", territories: [[42.5, 12.5, 4.5], [40.8, 14.3, 2.6], [46.0, 2.0, 5.3], [40.4, -3.7, 5.0], [39.0, 22.0, 3.7], [38.0, 23.5, 2.9], [37.0, 35.0, 2.8], [36.8, 10.0, 1.5], [30.0, 31.0, 3.4], [33.0, 35.0, 2.3], [51.5, 4.0, 2.4], [48.0, 16.0, 3.3], [51.0, -2.5, 1.9], [54.0, -2.0, 1.4], [45.0, 25.0, 2.8]] },
    { year: 284, name: "Diocletian's Reforms", description: "Diocletian becomes emperor and institutes reforms, dividing the empire into East and West.", territories: [[42.5, 12.5, 4.4], [40.8, 14.3, 2.5], [46.0, 2.0, 5.2], [40.4, -3.7, 4.9], [39.0, 22.0, 3.6], [38.0, 23.5, 2.8], [37.0, 35.0, 2.7], [36.8, 10.0, 1.5], [30.0, 31.0, 3.3], [33.0, 35.0, 2.2], [51.5, 4.0, 2.3], [48.0, 16.0, 3.2], [51.0, -2.5, 1.8], [54.0, -2.0, 1.3], [45.0, 25.0, 2.7]] },
    { year: 337, name: "Constantine's Legacy", description: "Constantine the Great dies after making Christianity official and founding Constantinople.", territories: [[42.5, 12.5, 4.4], [40.8, 14.3, 2.5], [46.0, 2.0, 5.1], [40.4, -3.7, 4.8], [39.0, 22.0, 3.5], [38.0, 23.5, 2.8], [37.0, 35.0, 2.7], [36.8, 10.0, 1.5], [30.0, 31.0, 3.2], [33.0, 35.0, 2.2], [51.5, 4.0, 2.2], [48.0, 16.0, 3.1], [51.0, -2.5, 1.7], [54.0, -2.0, 1.2], [45.0, 25.0, 2.7], [41.0, 29.0, 1.5]] },
    { year: 395, name: "Empire Divided", description: "The empire permanently splits into Eastern and Western halves after Theodosius I's death.", territories: [[42.5, 12.5, 4.2], [40.8, 14.3, 2.4], [46.0, 2.0, 4.8], [40.4, -3.7, 4.5], [39.0, 22.0, 3.3], [38.0, 23.5, 2.7], [37.0, 35.0, 2.6], [36.8, 10.0, 1.4], [30.0, 31.0, 3.0], [51.5, 4.0, 2.0], [48.0, 16.0, 2.8], [51.0, -2.5, 1.5], [45.0, 25.0, 2.5], [41.0, 29.0, 1.5]] },
    { year: 410, name: "Sack of Rome", description: "Visigoths sack Rome - a profound psychological blow. Western territories increasingly lost.", territories: [[42.5, 12.5, 3.8], [40.8, 14.3, 2.2], [46.0, 2.0, 4.2], [40.4, -3.7, 3.8], [39.0, 22.0, 2.8], [38.0, 23.5, 2.4], [37.0, 35.0, 2.3], [36.8, 10.0, 1.2], [30.0, 31.0, 2.7], [48.0, 16.0, 2.3], [51.0, -2.5, 1.2], [45.0, 25.0, 2.2], [41.0, 29.0, 1.4]] },
    { year: 450, name: "Western Collapse", description: "Hunnic invasions and barbarian kingdoms. The Western Empire clings to Italy and parts of Gaul.", territories: [[42.5, 12.5, 3.2], [40.8, 14.3, 1.8], [46.0, 2.0, 2.8], [40.4, -3.7, 2.5], [39.0, 22.0, 2.2], [37.0, 35.0, 1.8], [30.0, 31.0, 2.3], [48.0, 16.0, 1.8], [45.0, 25.0, 1.8], [41.0, 29.0, 1.3]] },
    { year: 476, name: "Fall of the West", description: "Romulus Augustulus deposed. The Western Roman Empire falls, though the East continues for 1000 years.", territories: [[42.5, 12.5, 2.5], [40.8, 14.3, 1.5], [39.0, 22.0, 1.8], [37.0, 35.0, 1.5], [30.0, 31.0, 2.0], [45.0, 25.0, 1.5], [41.0, 29.0, 1.2]] }
];

// Function to identify region based on coordinates
function getRegionName(lat, lon) {
    // Italy
    if (lat >= 37 && lat <= 47 && lon >= 6 && lon <= 19) {
        return "Italia (Italy)";
    }
    // Hispania (Spain/Portugal)
    if (lat >= 36 && lat <= 44 && lon >= -10 && lon <= 4) {
        return "Hispania (Iberian Peninsula)";
    }
    // Gallia (France)
    if (lat >= 43 && lat <= 51 && lon >= -2 && lon <= 9) {
        return "Gallia (Gaul - Modern France)";
    }
    // Britannia (Britain)
    if (lat >= 50 && lat <= 59 && lon >= -6 && lon <= 2) {
        return "Britannia (Roman Britain)";
    }
    // Germania
    if (lat >= 47 && lat <= 55 && lon >= 5 && lon <= 15) {
        return "Germania (Germanic Territories)";
    }
    // Pannonia/Illyricum (Balkans)
    if (lat >= 42 && lat <= 48 && lon >= 13 && lon <= 22) {
        return "Illyricum/Pannonia (Western Balkans)";
    }
    // Macedonia/Greece
    if (lat >= 37 && lat <= 42 && lon >= 19 && lon <= 27) {
        return "Macedonia/Graecia (Greece & Macedonia)";
    }
    // Asia Minor (Turkey)
    if (lat >= 36 && lat <= 42 && lon >= 26 && lon <= 45) {
        return "Asia Minor (Anatolia)";
    }
    // Syria/Judea
    if (lat >= 31 && lat <= 38 && lon >= 33 && lon <= 43) {
        return "Syria/Judaea (Levant)";
    }
    // Aegyptus (Egypt)
    if (lat >= 22 && lat <= 32 && lon >= 25 && lon <= 35) {
        return "Aegyptus (Egypt)";
    }
    // Africa (Tunisia/Libya)
    if (lat >= 30 && lat <= 38 && lon >= 8 && lon <= 25) {
        return "Africa Proconsularis (North Africa)";
    }
    // Dacia (Romania)
    if (lat >= 44 && lat <= 48 && lon >= 21 && lon <= 30) {
        return "Dacia (Romania)";
    }
    // Mesopotamia
    if (lat >= 30 && lat <= 38 && lon >= 40 && lon <= 50) {
        return "Mesopotamia (Iraq)";
    }
    
    return "Roman Territory";
}

// ============================================
// STATE MANAGEMENT
// ============================================
const STATE = {
    map: null,
    territoryLayers: [],
    cityMarkers: [],
    currentIndex: 0,
    isPlaying: false,
    animationId: null,
    lastUpdateTime: 0,
    animationSpeed: 3,
    updateInterval: 600
};

// Speed configuration mapping
const SPEED_MAP = {
    1: 1000,
    2: 750,
    3: 600,
    4: 400,
    5: 200
};

// Map configuration
const MAP_CONFIG = {
    center: [45, 15],
    zoom: 4,
    minZoom: 3,
    maxZoom: 7
};

// ============================================
// INITIALIZATION
// ============================================
function init() {
    initializeMap();
    setupEventListeners();
    addReferenceCities();
    updateDisplay();
    drawTerritories();
}

function initializeMap() {
    STATE.map = L.map('map', {
        center: MAP_CONFIG.center,
        zoom: MAP_CONFIG.zoom,
        minZoom: MAP_CONFIG.minZoom,
        maxZoom: MAP_CONFIG.maxZoom,
        zoomControl: true,
        zoomAnimation: true,
        fadeAnimation: true
    });
    
    // Add satellite/terrain tile layer (ESRI World Imagery)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 19
    }).addTo(STATE.map);
}

function setupEventListeners() {
    document.getElementById('timeline').addEventListener('input', handleTimelineChange);
    document.getElementById('playBtn').addEventListener('click', togglePlay);
    document.getElementById('resetBtn').addEventListener('click', reset);
    document.getElementById('speedSlider').addEventListener('input', handleSpeedChange);
}

// ============================================
// CITY MARKERS - Roman Founded/Developed Cities
// ============================================
const CITIES = [
    // Core Roman Cities
    { 
        name: 'Roma', 
        lat: 41.9, 
        lon: 12.5, 
        founded: 'Capital', 
        year: -753,
        description: 'The eternal city and heart of the Roman Empire. Founded according to legend by Romulus in 753 BCE, Roma grew from a small settlement to become the capital of the most powerful empire in the ancient world. Home to the Senate, Forum, Colosseum, and countless monuments.'
    },
    
    // Major Roman Colonies & Foundations
    { 
        name: 'Tarraco (Tarragona)', 
        lat: 41.12, 
        lon: 1.26, 
        founded: '218 BCE', 
        year: -218,
        description: 'One of the oldest Roman settlements in Hispania, founded during the Second Punic War. Served as the capital of Hispania Tarraconensis. Famous for its impressive Roman walls, amphitheater, and circus.'
    },
    { 
        name: 'Mediolanum (Milano)', 
        lat: 45.46, 
        lon: 9.19, 
        founded: 'Romanized 222 BCE', 
        year: -222,
        description: 'Originally a Celtic settlement, Romanized after conquest in 222 BCE. Became one of the most important cities in the Western Empire, serving as an imperial capital in the 4th century CE. Strategic location at the crossroads of trade routes.'
    },
    { 
        name: 'Narbo Martius (Narbonne)', 
        lat: 43.18, 
        lon: 3.00, 
        founded: '118 BCE', 
        year: -118,
        description: 'The first Roman colony in Gaul, founded in 118 BCE. Served as the capital of Gallia Narbonensis. A vital Mediterranean port and center of trade connecting Italy, Spain, and Gaul via the Via Domitia.'
    },
    { 
        name: 'Arelate (Arles)', 
        lat: 43.68, 
        lon: 4.63, 
        founded: '46 BCE', 
        year: -46,
        description: 'Founded by Julius Caesar as a Roman colony for veterans of the Sixth Legion. Became a major port on the Rhône River and prospered as a center of trade. Notable for its well-preserved Roman amphitheater and theater.'
    },
    { 
        name: 'Lugdunum (Lyon)', 
        lat: 45.76, 
        lon: 4.84, 
        founded: '43 BCE', 
        year: -43,
        description: 'Founded by Lucius Munatius Plancus, became the capital of Gallia Lugdunensis and Tres Galliae. A major center of trade, administration, and the imperial cult. Birthplace of Emperor Claudius. Featured a famous amphitheater and aqueducts.'
    },
    { 
        name: 'Emerita Augusta (Mérida)', 
        lat: 38.92, 
        lon: -6.34, 
        founded: '25 BCE', 
        year: -25,
        description: 'Founded by Emperor Augustus as a colony for retired legionaries (emeriti). Capital of Lusitania province. Contains some of the best-preserved Roman ruins in Spain including a magnificent theater, amphitheater, and aqueduct.'
    },
    { 
        name: 'Caesarea Maritima', 
        lat: 32.5, 
        lon: 34.89, 
        founded: '22 BCE', 
        year: -22,
        description: 'Built by Herod the Great and named in honor of Caesar Augustus. Featured an artificial harbor and was the capital of Judaea province. Important center of early Christianity, where Paul was imprisoned. Showcase of Roman engineering with advanced harbor technology.'
    },
    { 
        name: 'Augusta Treverorum (Trier)', 
        lat: 49.75, 
        lon: 6.64, 
        founded: '16 BCE', 
        year: -16,
        description: 'Founded by Augustus near the Treveri tribe. Became one of the largest cities north of the Alps and an imperial residence in the 3rd-4th centuries. Known as "Roma Secunda" (Second Rome). Famous for the Porta Nigra gate and imperial baths.'
    },
    { 
        name: 'Vindobona (Wien)', 
        lat: 48.21, 
        lon: 16.37, 
        founded: '15 CE', 
        year: 15,
        description: 'Military camp and settlement on the Danube frontier. Served as quarters for Legio X Gemina. Strategic position guarding against Germanic tribes. Marcus Aurelius died here in 180 CE while campaigning. Important Danube trade center.'
    },
    { 
        name: 'Londinium', 
        lat: 51.51, 
        lon: -0.13, 
        founded: '47 CE', 
        year: 47,
        description: 'Founded shortly after the Roman conquest of Britain. Quickly became the provincial capital and largest city in Britannia. Major trading port on the Thames. Destroyed during Boudica\'s revolt in 60 CE but rebuilt to become a thriving commercial center.'
    },
    { 
        name: 'Colonia Agrippina (Köln)', 
        lat: 50.94, 
        lon: 6.96, 
        founded: '50 CE', 
        year: 50,
        description: 'Elevated to colonia status in 50 CE by Emperor Claudius, named after his wife Agrippina the Younger who was born here. Capital of Germania Inferior. Major Rhine trading center and military headquarters. Later became an important medieval city.'
    },
    { 
        name: 'Trajectum (Utrecht)', 
        lat: 52.09, 
        lon: 5.12, 
        founded: '47 CE', 
        year: 47,
        description: 'Roman fort (castellum) built at a strategic Rhine crossing point. Name means "crossing place" (ford). Part of the northern frontier defenses (Limes Germanicus). Military garrison and small civilian settlement developed around the fort.'
    },
    { 
        name: 'Mosa Trajectum (Maastricht)', 
        lat: 50.85, 
        lon: 5.69, 
        founded: '50 CE', 
        year: 50,
        description: 'Roman settlement at the crossing of the Meuse (Mosa) river. Name means "crossing on the Meuse". Strategic location on the road between Bavay and Cologne. Important river crossing and trading post in Germania Inferior.'
    },
    { 
        name: 'Aquincum (Budapest)', 
        lat: 47.53, 
        lon: 19.04, 
        founded: '89 CE', 
        year: 89,
        description: 'Military camp established under Domitian, later became capital of Pannonia Inferior. Major Danube fortress housing Legio II Adiutrix. Developed into a large civilian city with amphitheater, baths, and forum. Important center of trade and military operations.'
    },
    { 
        name: 'Colonia Ulpia Traiana', 
        lat: 51.66, 
        lon: 6.44, 
        founded: '98 CE', 
        year: 98,
        description: 'Founded by Emperor Trajan near the earlier legionary fortress Castra Vetera. Became the second Roman city in Germania Inferior with full colonial rights. Important center of trade, religion, and provincial administration. Model Roman city planning.'
    },
    { 
        name: 'Timgad', 
        lat: 35.48, 
        lon: 6.47, 
        founded: '100 CE', 
        year: 100,
        description: 'Founded by Emperor Trajan as Colonia Marciana Traiana Thamugadi. Military colony for veterans of the Third Legion Augusta. Perfectly preserved example of Roman grid city planning. Flourished for 400 years before being sacked by Berbers in the 5th century.'
    },
    { 
        name: 'Ravenna', 
        lat: 44.42, 
        lon: 12.20, 
        founded: 'Major Port', 
        year: -100,
        description: 'Ancient port city that became increasingly important in the late Empire. Augustus established it as a major naval base (Classis Praetoria Ravennatis). Became the Western Roman Empire\'s capital in 402 CE due to its defensive marshlands. Last Western imperial capital.'
    },
    { 
        name: 'Nemausus (Nîmes)', 
        lat: 43.84, 
        lon: 4.36, 
        founded: '28 BCE', 
        year: -28,
        description: 'Founded as a Roman colony for veterans who fought in Egypt. Named after the local spring deity Nemausus. Famous for exceptionally well-preserved Roman monuments including the Maison Carrée temple, amphitheater, and the Pont du Gard aqueduct nearby.'
    },
    { 
        name: 'Lugdunum Batavorum (Leiden)', 
        lat: 52.16, 
        lon: 4.49, 
        founded: 'c. 50 CE', 
        year: 50,
        description: 'Roman castellum and settlement in the Rhine delta. Part of the Limes Germanicus frontier system. Strategic location at the junction of the Rhine branches. Home to the Batavian auxiliaries who were renowned cavalry fighters in the Roman army.'
    },
    { 
        name: 'Pola (Pula)', 
        lat: 44.87, 
        lon: 13.85, 
        founded: '45 BCE', 
        year: -45,
        description: 'Ancient Illyrian settlement that became a Roman colony (Colonia Pietas Iulia Pola) under Julius Caesar. Important Adriatic naval base and commercial harbor. Famous for its remarkably preserved amphitheater (Arena), one of the six largest surviving Roman arenas.'
    },
    { 
        name: 'Corduba (Córdoba)', 
        lat: 37.88, 
        lon: -4.78, 
        founded: '152 BCE', 
        year: -152,
        description: 'Founded by Marcus Claudius Marcellus. Became capital of Hispania Ulterior and later Baetica province. Birthplace of Seneca the Younger and Lucan. Major cultural and intellectual center, later flourished spectacularly under Islamic rule.'
    },
    { 
        name: 'Massilia (Marseille)', 
        lat: 43.30, 
        lon: 5.37, 
        founded: 'Greek Colony', 
        year: -600,
        description: 'Originally founded by Greek colonists from Phocaea around 600 BCE. Maintained independence as a Greek city-state and Roman ally until supporting Pompey against Caesar in 49 BCE. Major Mediterranean trading port and gateway between Gaul and the Mediterranean.'
    },
    { 
        name: 'Noviomagus (Nijmegen)', 
        lat: 51.84, 
        lon: 5.86, 
        founded: '19 BCE', 
        year: -19,
        description: 'One of the oldest cities in the Netherlands, began as a Roman military camp. Became an important legionary fortress (Castra) and settlement. Capital of the Batavian civitas. Site of the Batavian revolt led by Julius Civilis in 69-70 CE.'
    },
    { 
        name: 'Forum Iulii (Fréjus)', 
        lat: 43.43, 
        lon: 6.74, 
        founded: '49 BCE', 
        year: -49,
        description: 'Founded by Julius Caesar as Forum Iulii. Augustus made it a naval base to house ships captured at the Battle of Actium. Important port and colony for veterans. Contains remains of aqueduct, amphitheater, and theater. Birthplace of Agricola.'
    },
    { 
        name: 'Salona (Solin)', 
        lat: 43.55, 
        lon: 16.48, 
        founded: '119 BCE', 
        year: -119,
        description: 'Capital of the Roman province of Dalmatia. Major port and administrative center on the Adriatic. Birthplace of Emperor Diocletian, who built his famous palace at nearby Split. One of the largest cities in the late Empire with extensive ruins.'
    },
    { 
        name: 'Carthago Nova (Cartagena)', 
        lat: 37.61, 
        lon: -0.99, 
        founded: '209 BCE', 
        year: -209,
        description: 'Founded by Carthaginians as Qart Hadasht (New City). Captured by Scipio Africanus in 209 BCE during Second Punic War and refounded as Carthago Nova. Major mining center (silver and lead) and naval base. One of the most important ports in Hispania.'
    },
    { 
        name: 'Sirmium (Sremska Mitrovica)', 
        lat: 44.98, 
        lon: 19.61, 
        founded: '1st century CE', 
        year: 29,
        description: 'One of the four capitals of the Roman Empire under the Tetrarchy. Major city in Pannonia Inferior on the Sava river. Strategic military and administrative center. Birthplace of several Roman emperors including Decius, Aurelian, Probus, and Maximian.'
    },
    { 
        name: 'Aurelianum (Orléans)', 
        lat: 47.90, 
        lon: 1.91, 
        founded: '52 BCE', 
        year: -52,
        description: 'Originally Cenabum, a Gallic settlement destroyed by Caesar during the Gallic Wars. Rebuilt as Aurelianum in the 3rd century. Strategic crossing point on the Loire River. Important center of trade between northern and southern Gaul.'
    },
    { 
        name: 'Deva Victrix (Chester)', 
        lat: 53.19, 
        lon: -2.89, 
        founded: '79 CE', 
        year: 79,
        description: 'Major Roman fortress in northwest England, established under Governor Agricola. Headquarters of Legio XX Valeria Victrix. Largest legionary fortress in Britain. Strategic base for campaigns into Wales and northern England. Well-preserved Roman walls still visible.'
    }
];
    
const FORTS = [
    // Rhine Limes Forts (early imperial period)
    { name: 'Castra Vetera', lat: 51.65, lon: 6.44, type: 'Legionary Fortress', wall: 'Rhine Limes', year: 12 },
    { name: 'Mogontiacum (Mainz)', lat: 50.00, lon: 8.27, type: 'Legionary Fortress', wall: 'Rhine Limes', year: -13 },
    { name: 'Argentoratum (Strasbourg)', lat: 48.58, lon: 7.75, type: 'Legionary Fortress', wall: 'Rhine Limes', year: 16 },
    
    // Danube Limes Forts
    { name: 'Carnuntum', lat: 48.11, lon: 16.86, type: 'Legionary Fortress', wall: 'Danube Limes', year: 6 },
    { name: 'Brigetio', lat: 47.73, lon: 18.18, type: 'Fort', wall: 'Danube Limes', year: 89 },
    { name: 'Singidunum (Belgrade)', lat: 44.82, lon: 20.46, type: 'Fort', wall: 'Danube Limes', year: 15 },
    { name: 'Viminacium', lat: 44.73, lon: 21.20, type: 'Legionary Fortress', wall: 'Danube Limes', year: 14 },
    
    // Upper Germanic-Rhaetian Limes
    { name: 'Saalburg', lat: 50.27, lon: 8.57, type: 'Fort', wall: 'Germanic Limes', year: 90 },
    { name: 'Zugmantel', lat: 50.32, lon: 8.09, type: 'Fort', wall: 'Germanic Limes', year: 90 },
    { name: 'Castra Regina (Regensburg)', lat: 49.02, lon: 12.10, type: 'Legionary Fortress', wall: 'Rhaetian Limes', year: 79 },
    
    // Hadrian's Wall Forts (122-128 CE)
    { name: 'Segedunum (Wallsend)', lat: 54.993, lon: -1.534, type: 'Fort', wall: 'Hadrian\'s Wall', year: 122 },
    { name: 'Vindolanda', lat: 54.993, lon: -2.359, type: 'Fort', wall: 'Hadrian\'s Wall', year: 85 },
    { name: 'Housesteads (Vercovicium)', lat: 55.014, lon: -2.331, type: 'Fort', wall: 'Hadrian\'s Wall', year: 124 },
    { name: 'Birdoswald (Banna)', lat: 54.990, lon: -2.599, type: 'Fort', wall: 'Hadrian\'s Wall', year: 125 },
    { name: 'Chesters (Cilurnum)', lat: 55.025, lon: -2.138, type: 'Cavalry Fort', wall: 'Hadrian\'s Wall', year: 123 },
    
    // Antonine Wall Forts (142-162 CE)
    { name: 'Rough Castle', lat: 56.014, lon: -3.834, type: 'Fort', wall: 'Antonine Wall', year: 142 },
    { name: 'Bar Hill', lat: 55.977, lon: -4.047, type: 'Fort', wall: 'Antonine Wall', year: 142 },
    
    // Other British Legionary Fortresses
    { name: 'Deva Victrix (Chester)', lat: 53.19, lon: -2.89, type: 'Legionary Fortress', wall: 'Britannia', year: 79 },
    { name: 'Eboracum (York)', lat: 53.96, lon: -1.08, type: 'Legionary Fortress', wall: 'Britannia', year: 71 }
];

const WALLS = [
    { name: 'Rhine Limes', year: -12, endYear: 260 },
    { name: 'Danube Limes', year: 10, endYear: 400 },
    { name: 'Germanic Limes', year: 85, endYear: 260 },
    { name: 'Hadrian\'s Wall', year: 122, endYear: 410 },
    { name: 'Antonine Wall', year: 142, endYear: 162 }
];

function addReferenceCities() {
    // Initialize with empty - will be populated by updateTimeBasedMarkers
    updateTimeBasedMarkers();
}

// ============================================
// UPDATE TIME-BASED MARKERS
// ============================================
function updateTimeBasedMarkers() {
    const currentYear = historicalData[STATE.currentIndex].year;
    
    // Clear existing city and fort markers
    STATE.cityMarkers.forEach(marker => {
        STATE.map.removeLayer(marker);
    });
    STATE.cityMarkers = [];
    
    // Add cities that have been founded by current year
    const cityIcon = L.divIcon({
        className: 'city-marker',
        html: '<div class="city-dot"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });
    
    CITIES.forEach(city => {
        if (city.year <= currentYear) {
            const marker = L.marker([city.lat, city.lon], { 
                icon: cityIcon,
                zIndexOffset: 1000
            }).addTo(STATE.map);
            
            const tooltipContent = city.founded 
                ? `${city.name}<br><span class="city-founded">${city.founded}</span>`
                : city.name;
            
            const tooltip = marker.bindTooltip(tooltipContent, {
                permanent: false,
                direction: 'top',
                className: 'city-label',
                offset: [0, -10]
            });
            
            // Add click handler to show city info
            marker.on('click', () => {
                showCityInfo(city);
            });
            
            // Add hover handler to show city info - both on marker and tooltip
            marker.on('mouseover', () => {
                showCityInfo(city);
            });
            
            marker.on('tooltipopen', () => {
                showCityInfo(city);
            });
            
            STATE.cityMarkers.push(marker);
        }
    });
    
    // Add forts that have been built by current year
    const fortIcon = L.divIcon({
        className: 'fort-marker',
        html: '<div class="fort-icon">⚔</div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
    
    FORTS.forEach(fort => {
        if (fort.year <= currentYear) {
            const marker = L.marker([fort.lat, fort.lon], { 
                icon: fortIcon,
                zIndexOffset: 999
            }).addTo(STATE.map);
            
            const tooltipContent = `${fort.name}<br><span class="city-founded">${fort.type} - ${fort.wall}</span>`;
            
            marker.bindTooltip(tooltipContent, {
                permanent: false,
                direction: 'top',
                className: 'fort-label',
                offset: [0, -12]
            });
            
            // Add hover and click handlers for fort info
            marker.on('click', () => {
                showFortInfo(fort);
            });
            
            marker.on('mouseover', () => {
                showFortInfo(fort);
            });
            
            marker.on('tooltipopen', () => {
                showFortInfo(fort);
            });
            
            STATE.cityMarkers.push(marker);
        }
    });
    
    // Update defensive walls visibility
    updateDefensiveWalls(currentYear);
}

// ============================================
// DEFENSIVE WALLS AND LIMES
// ============================================
let wallLayers = [];

function updateDefensiveWalls(currentYear) {
    // Clear existing wall layers
    wallLayers.forEach(layer => {
        STATE.map.removeLayer(layer);
    });
    wallLayers = [];
    // Hadrian's Wall (122 CE - 128 CE)
    const hadriansWall = [
        [54.967, -1.600], // Wallsend
        [54.993, -1.534],
        [55.022, -1.913],
        [54.993, -2.359], // Vindolanda
        [55.014, -2.331], // Housesteads
        [54.990, -2.599], // Birdoswald
        [54.893, -3.055]  // Bowness-on-Solway
    ];
    
    // Antonine Wall (142 CE - 162 CE)
    const antonineWall = [
        [55.990, -3.750], // Bo'ness
        [56.014, -3.834], // Rough Castle
        [55.977, -4.047], // Bar Hill
        [55.932, -4.389]  // Old Kilpatrick
    ];
    
    // Rhine Limes (rough approximation)
    const rhineLimes = [
        [51.88, 4.47],   // Rhine mouth
        [51.65, 6.44],   // Castra Vetera
        [50.94, 6.96],   // Cologne
        [50.73, 7.10],   // Bonn
        [50.36, 7.59],   // Koblenz
        [50.00, 8.27],   // Mainz
        [49.99, 8.40],
        [49.48, 8.47],   // Heidelberg area
        [48.58, 7.75],   // Strasbourg
        [47.56, 7.59]    // Basel area
    ];
    
    // Upper Germanic Limes (partial)
    const germanicLimes = [
        [50.27, 7.58],   // Starting point near Rhine
        [50.27, 8.57],   // Saalburg
        [50.32, 8.09],   // Zugmantel
        [49.80, 9.20],
        [49.02, 10.50]
    ];
    
    // Danube Limes (partial - major section)
    const danubeLimes = [
        [48.50, 15.05],  // Austria section
        [48.11, 16.86],  // Carnuntum
        [48.21, 16.37],  // Vienna
        [47.73, 18.18],  // Brigetio
        [47.53, 19.04],  // Budapest
        [46.25, 20.15],
        [45.75, 21.23],
        [44.82, 20.46],  // Belgrade
        [44.73, 21.20]   // Viminacium
    ];
    
    // Style for walls
    const wallStyle = {
        color: '#8B4513',
        weight: 3,
        opacity: 0.8,
        dashArray: '5, 5'
    };
    
    const limesStyle = {
        color: '#CD853F',
        weight: 2,
        opacity: 0.7,
        dashArray: '3, 6'
    };
    
    // Add walls based on construction and abandonment dates
    
    // Rhine Limes (-12 to 260 CE)
    if (currentYear >= -12 && currentYear <= 260) {
        const rhineLine = L.polyline(rhineLimes, limesStyle).addTo(STATE.map);
        rhineLine.bindTooltip('Rhine Limes', { className: 'wall-label', sticky: true });
        rhineLine.on('mouseover', () => showWallInfo('Rhine Limes', -12, 260));
        rhineLine.on('click', () => showWallInfo('Rhine Limes', -12, 260));
        wallLayers.push(rhineLine);
    }
    
    // Danube Limes (10 to 400 CE)
    if (currentYear >= 10 && currentYear <= 400) {
        const danubeLine = L.polyline(danubeLimes, limesStyle).addTo(STATE.map);
        danubeLine.bindTooltip('Danube Limes', { className: 'wall-label', sticky: true });
        danubeLine.on('mouseover', () => showWallInfo('Danube Limes', 10, 400));
        danubeLine.on('click', () => showWallInfo('Danube Limes', 10, 400));
        wallLayers.push(danubeLine);
    }
    
    // Upper Germanic Limes (85 to 260 CE)
    if (currentYear >= 85 && currentYear <= 260) {
        const germanicLine = L.polyline(germanicLimes, limesStyle).addTo(STATE.map);
        germanicLine.bindTooltip('Upper Germanic Limes', { className: 'wall-label', sticky: true });
        germanicLine.on('mouseover', () => showWallInfo('Upper Germanic Limes', 85, 260));
        germanicLine.on('click', () => showWallInfo('Upper Germanic Limes', 85, 260));
        wallLayers.push(germanicLine);
    }
    
    // Hadrian's Wall (122 to 410 CE)
    if (currentYear >= 122 && currentYear <= 410) {
        const hadrianLine = L.polyline(hadriansWall, { ...wallStyle, color: '#654321' }).addTo(STATE.map);
        hadrianLine.bindTooltip('Hadrian\'s Wall (122-128 CE)', { className: 'wall-label', sticky: true });
        hadrianLine.on('mouseover', () => showWallInfo('Hadrian\'s Wall', 122, 410));
        hadrianLine.on('click', () => showWallInfo('Hadrian\'s Wall', 122, 410));
        wallLayers.push(hadrianLine);
    }
    
    // Antonine Wall (142 to 162 CE)
    if (currentYear >= 142 && currentYear <= 162) {
        const antonineLine = L.polyline(antonineWall, { ...wallStyle, color: '#704214' }).addTo(STATE.map);
        antonineLine.bindTooltip('Antonine Wall (142-162 CE)', { className: 'wall-label', sticky: true });
        antonineLine.on('mouseover', () => showWallInfo('Antonine Wall', 142, 162));
        antonineLine.on('click', () => showWallInfo('Antonine Wall', 142, 162));
        wallLayers.push(antonineLine);
    }
}

// ============================================
// TERRITORY VISUALIZATION
// ============================================
function clearTerritories() {
    STATE.territoryLayers.forEach(layer => {
        STATE.map.removeLayer(layer);
    });
    STATE.territoryLayers = [];
}

function drawTerritories() {
    clearTerritories();
    
    // Update time-based markers (cities, forts, walls)
    updateTimeBasedMarkers();
    
    const data = historicalData[STATE.currentIndex];
    
    // Only draw current period's territories (not accumulated)
    // This allows the map to show contraction as well as expansion
    
    // Draw all current territories with base layer
    data.territories.forEach(territory => {
        const circle = L.circle([territory[0], territory[1]], {
            radius: territory[2] * 100000,
            fillColor: '#8B0000',
            fillOpacity: 0.3,
            color: '#8B0000',
            weight: 0,
            className: 'territory-established'
        }).addTo(STATE.map);
        
        // Add hover event for territory info
        circle.on('mouseover', () => {
            showTerritoryInfo(data, false, territory[0], territory[1]);
        });
        
        circle.on('mouseout', () => {
            // Restore current period info
            updateDisplay();
        });
        
        STATE.territoryLayers.push(circle);
    });
    
    // Highlight recently added territories (not in previous period)
    if (STATE.currentIndex > 0) {
        const previousData = historicalData[STATE.currentIndex - 1];
        const previousTerritorySet = new Set(
            previousData.territories.map(t => `${t[0]},${t[1]},${t[2]}`)
        );
        
        data.territories.forEach((territory, index) => {
            const key = `${territory[0]},${territory[1]},${territory[2]}`;
            
            // If this territory wasn't in the previous period, it's new expansion
            if (!previousTerritorySet.has(key)) {
                const circle = L.circle([territory[0], territory[1]], {
                    radius: territory[2] * 100000,
                    fillColor: '#DC143C',
                    fillOpacity: 0.4,
                    color: '#FFD700',
                    weight: 2,
                    opacity: 0.8,
                    className: 'territory-expansion'
                }).addTo(STATE.map);
                
                // Add hover event for new expansion territories
                circle.on('mouseover', () => {
                    showTerritoryInfo(data, true, territory[0], territory[1]);
                });
                
                circle.on('mouseout', () => {
                    // Restore current period info
                    updateDisplay();
                });
                
                STATE.territoryLayers.push(circle);
                
                // Add outer glow for newest territories
                if (STATE.isPlaying) {
                    const glowCircle = L.circle([territory[0], territory[1]], {
                        radius: territory[2] * 100000 * 1.2,
                        fillColor: 'transparent',
                        fillOpacity: 0,
                        color: '#FFD700',
                        weight: 3,
                        opacity: 0.6,
                        className: 'territory-glow'
                    }).addTo(STATE.map);
                    
                    STATE.territoryLayers.push(glowCircle);
                }
            }
        });
    }
}

// ============================================
// UI UPDATES
// ============================================
function updateDisplay() {
    const data = historicalData[STATE.currentIndex];
    const year = Math.abs(data.year);
    const era = data.year < 0 ? 'BCE' : 'CE';
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    // Add fade transition
    nameElement.style.opacity = '0';
    descElement.style.opacity = '0';
    
    setTimeout(() => {
        yearElement.textContent = year;
        eraElement.textContent = era;
        nameElement.textContent = data.name;
        descElement.textContent = data.description;
        nameElement.style.opacity = '1';
        descElement.style.opacity = '1';
    }, 150);
}

function showCityInfo(city) {
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    const year = Math.abs(city.year);
    const era = city.year < 0 ? 'BCE' : 'CE';
    
    // Update with fade transition
    nameElement.style.opacity = '0';
    descElement.style.opacity = '0';
    
    setTimeout(() => {
        yearElement.textContent = year;
        eraElement.textContent = era;
        nameElement.textContent = city.name;
        descElement.textContent = city.description;
        nameElement.style.opacity = '1';
        descElement.style.opacity = '1';
    }, 150);
}

function showFortInfo(fort) {
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    const year = Math.abs(fort.year);
    const era = fort.year < 0 ? 'BCE' : 'CE';
    
    // Create description based on fort type and location
    let description = `${fort.type} established in ${year} ${era}. `;
    
    if (fort.wall === 'Hadrian\'s Wall') {
        description += `Part of Hadrian's Wall, the 73-mile fortification built across northern England (122-128 CE) to defend the northern frontier of Roman Britannia. Garrisoned by auxiliary troops, these forts housed infantry and cavalry units that patrolled the border and controlled movement between Roman territory and Caledonia.`;
    } else if (fort.wall === 'Antonine Wall') {
        description += `Part of the Antonine Wall, a 39-mile turf fortification built further north in Scotland (142 CE) during Emperor Antoninus Pius's reign. Occupied for only about 20 years before Rome withdrew back to Hadrian's Wall. Represented the northernmost frontier of the Roman Empire.`;
    } else if (fort.wall === 'Rhine Limes') {
        description += `Part of the Rhine Limes (Limes Germanicus), the defensive frontier along the Rhine River. These legionary fortresses and forts formed the western boundary of the empire, protecting against Germanic tribes. Major bases for military operations and trade centers connecting the frontier with the Roman interior.`;
    } else if (fort.wall === 'Danube Limes') {
        description += `Part of the Danube Limes, the extensive frontier defense system along the Danube River. Stretching from the Black Forest to the Black Sea, these fortifications protected the empire's northern border. Strategic positions for controlling river crossings and defending against incursions from Dacians, Sarmatians, and later Germanic tribes.`;
    } else if (fort.wall === 'Germanic Limes' || fort.wall === 'Rhaetian Limes') {
        description += `Part of the Upper Germanic-Rhaetian Limes, a 550-km frontier line with walls, palisades, watchtowers and forts between the Rhine and Danube. This artificial border shortened the frontier and controlled the Agri Decumates region. Marked the limit of Roman expansion into Germania before fortifications were abandoned in the mid-3rd century.`;
    } else if (fort.wall === 'Britannia') {
        description += `Major legionary fortress in Roman Britannia. These permanent bases housed a full legion (approximately 5,000 soldiers) and served as centers of military power, administration, and Romanization. Strategic locations for controlling the province and launching campaigns into unconquered territories.`;
    }
    
    // Update with fade transition
    nameElement.style.opacity = '0';
    descElement.style.opacity = '0';
    
    setTimeout(() => {
        yearElement.textContent = year;
        eraElement.textContent = era;
        nameElement.textContent = fort.name;
        descElement.textContent = description;
        nameElement.style.opacity = '1';
        descElement.style.opacity = '1';
    }, 150);
}

function showWallInfo(wallName, startYear, endYear) {
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    const year = Math.abs(startYear);
    const era = startYear < 0 ? 'BCE' : 'CE';
    
    let description = '';
    
    if (wallName === 'Hadrian\'s Wall') {
        description = `Built 122-128 CE under Emperor Hadrian. A 73-mile (117 km) stone fortification stretching across northern England from the River Tyne to the Solway Firth. Included milecastles every Roman mile, turrets between them, and major forts at strategic points. Marked the northern limit of the Roman Empire in Britannia and controlled the movement of people and goods. Manned by approximately 10,000 auxiliary troops. Remained in use until around 410 CE when Roman control of Britain ended.`;
    } else if (wallName === 'Antonine Wall') {
        description = `Built 142 CE under Emperor Antoninus Pius. A 39-mile (63 km) turf fortification across central Scotland between the Firth of Forth and the Firth of Clyde. Built as Rome's attempt to push the frontier further north. Featured a deep ditch, turf rampart, military road, and 17 forts. Occupied for only about 20 years (142-162 CE) before being abandoned due to fierce Caledonian resistance. Rome withdrew back to the more defensible Hadrian's Wall. Represented the northernmost permanent frontier of the Roman Empire.`;
    } else if (wallName === 'Rhine Limes') {
        description = `Established 12 BCE onwards along the Rhine River. The Rhine Limes (Limes Germanicus) formed the western frontier of the Roman Empire in Germania. Not a continuous wall but a series of legionary fortresses, auxiliary forts, watchtowers, and patrol roads along the river. Protected against Germanic tribes including the Cherusci, Chatti, and later the Alemanni. Served as both military defense and customs boundary. Major legionary bases at Vetera, Mogontiacum, and Argentoratum anchored the defense. Remained active until the mid-3rd century when Germanic invasions overwhelmed the frontier.`;
    } else if (wallName === 'Danube Limes') {
        description = `Established 10 CE onwards along the Danube River. Stretched approximately 1,000 km from the Black Forest to the Black Sea, making it the longest section of the Roman frontier. Protected the empire's northern border against Dacians, Sarmatians, Marcomanni, Quadi, and later the Goths and Huns. Featured legionary fortresses, auxiliary forts, watchtowers, and a military road (via militaris). Major strongholds at Carnuntum, Aquincum, Singidunum, and Viminacium. Critical for defending the wealthy Balkans and protecting routes to the East. Remained active until the 5th century.`;
    } else if (wallName === 'Upper Germanic Limes') {
        description = `Built 85-260 CE between the Rhine and Danube rivers. A 550-km frontier line (Upper Germanic-Rhaetian Limes) that included palisades, earthworks, stone walls, over 900 watchtowers, and 120 forts. Connected the Rhine frontier to the Danube, shortening the border and enclosing the Agri Decumates region. Featured a 6-meter wide ditch in front of a wooden palisade, later replaced with stone walls in some sections. The Saalburg fort is one of the best-reconstructed examples. Abandoned in the 250s-260s during the Crisis of the Third Century when Alemanni invasions forced Rome to withdraw to the Rhine-Danube line. Now a UNESCO World Heritage site.`;
    }
    
    // Update with fade transition
    nameElement.style.opacity = '0';
    descElement.style.opacity = '0';
    
    setTimeout(() => {
        yearElement.textContent = year;
        eraElement.textContent = era;
        nameElement.textContent = wallName;
        descElement.textContent = description;
        nameElement.style.opacity = '1';
        descElement.style.opacity = '1';
    }, 150);
}

function showTerritoryInfo(periodData, isNewExpansion, lat, lon) {
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    const year = Math.abs(periodData.year);
    const era = periodData.year < 0 ? 'BCE' : 'CE';
    const regionName = getRegionName(lat, lon);
    
    let description = '';
    
    if (isNewExpansion) {
        description = `🏛️ New territorial expansion in ${regionName}. `;
        description += `This region was newly conquered and incorporated into the Roman Empire during ${periodData.name} (${year} ${era}). `;
        description += `These expanding territories (shown in brighter red with gold borders) represent Rome's military campaigns and growing dominance. `;
        description += `Each conquest brought new resources, trade routes, and strategic advantages, while also requiring garrisons and administration to maintain control.`;
    } else {
        description = `🏛️ Established territory: ${regionName}. `;
        description += `This region was under Roman control during ${periodData.name} (${year} ${era}). `;
        description += `These territories (shown in dark red) represent the consolidated core of the empire—areas that had been Romanized through decades or centuries of governance, infrastructure development, and cultural integration. `;
        description += `Roman law, Latin language, roads, aqueducts, and urban centers characterized these stable provinces.`;
    }
    
    // Update with fade transition
    nameElement.style.opacity = '0';
    descElement.style.opacity = '0';
    
    setTimeout(() => {
        yearElement.textContent = year;
        eraElement.textContent = era;
        nameElement.textContent = isNewExpansion ? `${regionName} - New Expansion` : `${regionName}`;
        descElement.textContent = description;
        nameElement.style.opacity = '1';
        descElement.style.opacity = '1';
    }, 150);
}

// ============================================
// EVENT HANDLERS
// ============================================
function handleTimelineChange(e) {
    const value = parseInt(e.target.value);
    STATE.currentIndex = Math.floor((value / 100) * (historicalData.length - 1));
    updateDisplay();
    drawTerritories();
}

function handleSpeedChange(e) {
    STATE.animationSpeed = parseInt(e.target.value);
    STATE.updateInterval = SPEED_MAP[STATE.animationSpeed];
}

// ============================================
// ANIMATION CONTROL
// ============================================
function togglePlay() {
    STATE.isPlaying = !STATE.isPlaying;
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const playBtn = document.getElementById('playBtn');
    
    if (STATE.isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        playBtn.classList.add('playing');
        animate();
    } else {
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        playBtn.classList.remove('playing');
        if (STATE.animationId) {
            cancelAnimationFrame(STATE.animationId);
            STATE.animationId = null;
        }
    }
}

function animate(timestamp = 0) {
    if (!STATE.isPlaying) return;
    
    if (timestamp - STATE.lastUpdateTime >= STATE.updateInterval) {
        STATE.currentIndex++;
        
        if (STATE.currentIndex >= historicalData.length) {
            STATE.currentIndex = historicalData.length - 1;
            togglePlay();
            return;
        }
        
        updateDisplay();
        drawTerritories();
        
        // Update timeline slider
        const timelineValue = (STATE.currentIndex / (historicalData.length - 1)) * 100;
        document.getElementById('timeline').value = timelineValue;
        
        STATE.lastUpdateTime = timestamp;
    }
    
    STATE.animationId = requestAnimationFrame(animate);
}

function reset() {
    if (STATE.isPlaying) {
        togglePlay();
    }
    STATE.currentIndex = 0;
    updateDisplay();
    drawTerritories();
    document.getElementById('timeline').value = 0;
}

// ============================================
// DRAG AND DROP FUNCTIONALITY
// ============================================
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isDragging = false;
    let dragHandle;
    
    // For timeline, only make the labels area draggable
    if (element.id === 'floatingTimeline') {
        dragHandle = element.querySelector('.timeline-labels');
        if (dragHandle) {
            dragHandle.style.cursor = 'move';
            dragHandle.style.userSelect = 'none';
        }
    } else {
        // For other elements like year display, the whole element is draggable
        dragHandle = element;
        dragHandle.style.cursor = 'move';
    }
    
    if (!dragHandle) return;
    
    dragHandle.addEventListener('mousedown', dragMouseDown);
    dragHandle.addEventListener('touchstart', dragTouchStart, { passive: false });

    function dragMouseDown(e) {
        // Don't interfere with range inputs
        if (e.target.type === 'range' || 
            e.target.tagName === 'INPUT' ||
            e.target.closest('input[type="range"]')) {
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.addEventListener('mouseup', closeDragElement);
        document.addEventListener('mousemove', elementDrag);
    }

    function dragTouchStart(e) {
        if (e.target.type === 'range' || 
            e.target.tagName === 'INPUT' ||
            e.target.closest('input[type="range"]')) {
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        const touch = e.touches[0];
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        
        document.addEventListener('touchend', closeDragElement);
        document.addEventListener('touchmove', elementTouchDrag, { passive: false });
    }

    function elementDrag(e) {
        e.preventDefault();
        
        if (!isDragging) {
            isDragging = true;
            element.classList.add('dragging');
        }
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        updateElementPosition();
    }

    function elementTouchDrag(e) {
        e.preventDefault();
        
        if (!isDragging) {
            isDragging = true;
            element.classList.add('dragging');
        }
        
        const touch = e.touches[0];
        pos1 = pos3 - touch.clientX;
        pos2 = pos4 - touch.clientY;
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        updateElementPosition();
    }

    function updateElementPosition() {
        // Get current position including any transforms
        const rect = element.getBoundingClientRect();
        const currentTop = rect.top;
        const currentLeft = rect.left;
        
        // Calculate new position
        const newTop = currentTop - pos2;
        const newLeft = currentLeft - pos1;
        
        // Apply new position and remove centering transform
        element.style.top = `${newTop}px`;
        element.style.left = `${newLeft}px`;
        element.style.right = 'auto';
        element.style.bottom = 'auto';
        element.style.transform = 'none';
    }

    function closeDragElement() {
        document.removeEventListener('mouseup', closeDragElement);
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('touchend', closeDragElement);
        document.removeEventListener('touchmove', elementTouchDrag);
        
        element.classList.remove('dragging');
        isDragging = false;
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initApp() {
    init();
    
    // Make year display draggable (but not the timeline)
    const yearDisplay = document.getElementById('yearDisplay');
    
    if (yearDisplay) makeDraggable(yearDisplay);
}
