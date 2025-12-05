// ============================================
// CHRONOS - WORLD HISTORY ATLAS
// ============================================

// Configuration
const MIN_YEAR = -3000;
const MAX_YEAR = 2025;
const DEFAULT_YEAR = -753;

// Civilization Definitions
const CIVILIZATIONS = {
    rome: {
        id: 'rome',
        name: 'Roman Empire',
        color: '#DC143C', // Crimson
        textColor: '#FFFFFF'
    },
    egypt: {
        id: 'egypt',
        name: 'Ancient Egypt',
        color: '#FFD700', // Gold
        textColor: '#000000'
    },
    sumer: {
        id: 'sumer',
        name: 'Sumer',
        color: '#87CEEB', // Sky Blue
        textColor: '#000000'
    },
    babylon: {
        id: 'babylon',
        name: 'Babylonian Empire',
        color: '#4B0082', // Indigo
        textColor: '#FFFFFF'
    },
    persia: {
        id: 'persia',
        name: 'Persian Empire',
        color: '#228B22', // Forest Green
        textColor: '#FFFFFF'
    },
    macedon: {
        id: 'macedon',
        name: 'Macedonian Empire',
        color: '#FF8C00', // Dark Orange
        textColor: '#000000'
    },
    carthage: {
        id: 'carthage',
        name: 'Carthaginian Empire',
        color: '#800080', // Purple
        textColor: '#FFFFFF'
    }
};

// Historical conquest entry points - where Roman armies entered each territory
// Used for water-flow animation effect - maps territory name -> entry point data
const CONQUEST_DIRECTIONS = {
    // Italia - Rome at center, expands outward
    'romecore': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    'rome_core': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    'italia': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    'latium': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    'greaterlatium': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    'centralitaly': { entryLat: 41.9, entryLon: 12.5, direction: 'center' },
    
    // Islands - conquered from Italian mainland
    'sicilia': { entryLat: 38.2, entryLon: 15.6, direction: 'ne' },
    'sardinia': { entryLat: 41.0, entryLon: 9.5, direction: 'n' },
    'corsica': { entryLat: 41.5, entryLon: 9.2, direction: 's' },
    
    // Western provinces - conquered from Mediterranean coast
    'gallia': { entryLat: 43.5, entryLon: 5.0, direction: 'se' },
    'hispania': { entryLat: 42.5, entryLon: 3.0, direction: 'ne' },
    'hispaniaciterior': { entryLat: 42.5, entryLon: 3.0, direction: 'ne' },
    'hispaniaulterior': { entryLat: 37.5, entryLon: -6.0, direction: 'e' },
    'britannia': { entryLat: 51.0, entryLon: 1.0, direction: 's' },
    
    // Germania - conquered from Rhine/Gaul
    'germaniainferior': { entryLat: 50.5, entryLon: 6.0, direction: 'sw' },
    'germania_inferior': { entryLat: 50.5, entryLon: 6.0, direction: 'sw' },
    'germaniasuperior': { entryLat: 48.0, entryLon: 8.0, direction: 'sw' },
    'germania_superior': { entryLat: 48.0, entryLon: 8.0, direction: 'sw' },
    
    // Alpine provinces - conquered from Italy
    'raetia': { entryLat: 46.5, entryLon: 10.0, direction: 's' },
    'noricum': { entryLat: 46.5, entryLon: 13.0, direction: 'sw' },
    
    // Balkans - conquered from Italy/Macedonia
    'illyricum': { entryLat: 45.0, entryLon: 14.0, direction: 'w' },
    'pannonia': { entryLat: 46.0, entryLon: 16.0, direction: 'sw' },
    'moesia': { entryLat: 44.0, entryLon: 21.0, direction: 'w' },
    'dacia': { entryLat: 44.5, entryLon: 23.0, direction: 's' },
    'thracia': { entryLat: 41.5, entryLon: 24.0, direction: 'w' },
    'thrace': { entryLat: 41.5, entryLon: 24.0, direction: 'w' },
    'macedonia': { entryLat: 40.0, entryLon: 20.0, direction: 'w' },
    'greece': { entryLat: 38.5, entryLon: 22.0, direction: 'n' },
    'achaea': { entryLat: 38.0, entryLon: 22.0, direction: 'n' },
    
    // Greek islands
    'crete': { entryLat: 35.5, entryLon: 24.0, direction: 'n' },
    'cyprus': { entryLat: 35.0, entryLon: 33.0, direction: 'w' },
    
    // Asia Minor - conquered from Aegean coast
    'asia': { entryLat: 39.0, entryLon: 27.0, direction: 'w' },
    'asiaminor': { entryLat: 39.0, entryLon: 27.0, direction: 'w' },
    'anatolia': { entryLat: 39.0, entryLon: 27.0, direction: 'w' },
    'bithynia': { entryLat: 40.5, entryLon: 29.0, direction: 'w' },
    'pontus': { entryLat: 41.0, entryLon: 36.0, direction: 'w' },
    'cappadocia': { entryLat: 38.5, entryLon: 35.0, direction: 'w' },
    'galatia': { entryLat: 39.5, entryLon: 32.0, direction: 'w' },
    'cilicia': { entryLat: 37.0, entryLon: 35.0, direction: 'w' },
    
    // Eastern provinces - conquered from Syria/Mediterranean
    'syria': { entryLat: 36.0, entryLon: 36.0, direction: 'nw' },
    'judaea': { entryLat: 32.5, entryLon: 35.0, direction: 'n' },
    'palaestina': { entryLat: 32.5, entryLon: 35.0, direction: 'n' },
    'arabia': { entryLat: 30.5, entryLon: 35.5, direction: 'n' },
    'arabiapetraea': { entryLat: 30.5, entryLon: 35.5, direction: 'n' },
    'mesopotamia': { entryLat: 36.0, entryLon: 40.0, direction: 'w' },
    'armenia': { entryLat: 39.5, entryLon: 42.0, direction: 'sw' },
    
    // Egypt - conquered from Mediterranean (Alexandria)
    'aegyptus': { entryLat: 31.5, entryLon: 30.0, direction: 'n' },
    'egypt': { entryLat: 31.5, entryLon: 30.0, direction: 'n' },
    
    // North Africa - conquered from Carthage/east
    'africa': { entryLat: 37.0, entryLon: 10.0, direction: 'ne' },
    'africaproconsularis': { entryLat: 37.0, entryLon: 10.0, direction: 'ne' },
    'numidia': { entryLat: 36.0, entryLon: 7.0, direction: 'e' },
    'mauretania': { entryLat: 35.5, entryLon: 0.0, direction: 'e' },
    'mauretaniacaesariensis': { entryLat: 35.5, entryLon: 0.0, direction: 'e' },
    'mauretaniatingitana': { entryLat: 35.8, entryLon: -5.0, direction: 'e' }
};

// Educational Data - Historical Facts and Context
const EDUCATIONAL_DATA = {
    "-3000": {
        facts: [
            "The unification of Upper and Lower Egypt under King Narmer (Menes).",
            "Development of hieroglyphic writing in Egypt.",
            "Rise of Sumerian city-states in Mesopotamia (Uruk, Ur, Eridu).",
            "Invention of the wheel and cuneiform writing in Sumer."
        ],
        figures: ["Narmer - First Pharaoh of unified Egypt", "Gilgamesh - Legendary King of Uruk"],
        significance: "Dawn of civilization and written history"
    },
    "-2500": {
        facts: [
            "Construction of the Great Pyramid of Giza (c. 2560 BCE).",
            "Old Kingdom Egypt reaches its peak.",
            "Standard of Ur created in Sumer."
        ],
        figures: ["Khufu - Builder of the Great Pyramid", "Imhotep - Architect and Physician"],
        significance: "Age of the Pyramids"
    },
    "-1750": {
        facts: [
            "Hammurabi establishes the Babylonian Empire.",
            "Code of Hammurabi - one of the earliest and most complete written legal codes.",
            "Middle Kingdom Egypt."
        ],
        figures: ["Hammurabi - King of Babylon"],
        significance: "First great legal codes"
    },
    "-509": {
        facts: [
            "The Roman Republic was founded in 509 BCE after overthrowing King Tarquin the Proud.",
            "Early Rome was governed by two consuls who served one-year terms.",
            "The Senate, originally an advisory council, became the most powerful governing body.",
            "Roman citizens were divided into Patricians (aristocrats) and Plebeians (commoners)."
        ],
        figures: ["Lucius Junius Brutus - Founder of the Republic", "Lucius Tarquinius Collatinus - First Consul"],
        significance: "Foundation of Republican government that would last nearly 500 years"
    },
    "-450": {
        facts: [
            "The Twelve Tables (450 BCE) became Rome's first written law code.",
            "These laws were displayed in the Roman Forum for all citizens to see.",
            "The Conflict of the Orders between Patricians and Plebeians shaped Roman politics."
        ],
        figures: ["Decemviri - The Ten Men who codified Roman law"],
        significance: "Establishment of written law and legal equality principles"
    },
    "-350": {
        facts: [
            "The Latin Wars (340-338 BCE) resulted in Roman domination of central Italy.",
            "Rome granted citizenship to some conquered peoples, a unique policy.",
            "The Via Appia, first major Roman road, was begun in 312 BCE."
        ],
        figures: ["Appius Claudius Caecus - Builder of the Appian Way"],
        significance: "Rome's innovative approach to conquest through integration"
    },
    "-218": {
        facts: [
            "The First Punic War (264-241 BCE) was fought entirely over Sicily.",
            "Rome built its first major navy to challenge Carthage's sea power.",
            "This war made Rome a Mediterranean power for the first time."
        ],
        figures: ["Hamilcar Barca - Carthaginian general, father of Hannibal"],
        significance: "Rome's transformation from land power to naval empire"
    },
    "-146": {
        facts: [
            "Carthage was completely destroyed in 146 BCE, ending the Third Punic War.",
            "The same year, Corinth was also destroyed, making Greece a Roman province.",
            "Rome inherited vast territories and immense wealth from these conquests.",
            "The influx of slaves and wealth transformed Roman society."
        ],
        figures: ["Scipio Aemilianus - Conqueror of Carthage", "Cato the Elder - 'Carthago delenda est'"],
        significance: "Rome becomes undisputed master of the Mediterranean"
    },
    "-50": {
        facts: [
            "Julius Caesar conquered Gaul (58-50 BCE), adding vast territories to Rome.",
            "Caesar's Gallic Wars resulted in the death or enslavement of millions.",
            "The conquest of Gaul brought immense wealth and military glory to Caesar.",
            "Britain was invaded twice by Caesar (55-54 BCE) but not conquered."
        ],
        figures: ["Julius Caesar - Conqueror of Gaul", "Vercingetorix - Gallic resistance leader"],
        significance: "Caesar's conquests shift power balance, leading to civil war"
    },
    "-27": {
        facts: [
            "Octavian became 'Augustus' in 27 BCE, marking the birth of the Roman Empire.",
            "Augustus maintained Republican forms while holding supreme power.",
            "The Pax Romana (Roman Peace) began, lasting nearly 200 years.",
            "Augustus expanded and secured borders, reformed administration and military."
        ],
        figures: ["Augustus - First Roman Emperor", "Marcus Agrippa - General and Admiral"],
        significance: "End of Republic, beginning of Imperial system"
    },
    "117": {
        facts: [
            "Under Trajan (98-117 CE), the empire reached its maximum territorial extent.",
            "Trajan conquered Dacia (Romania), adding its gold and silver mines.",
            "He also briefly conquered Mesopotamia, reaching the Persian Gulf.",
            "Trajan was considered one of the 'Five Good Emperors'."
        ],
        figures: ["Trajan - Optimus Princeps (Best of Princes)", "Hadrian - His successor"],
        significance: "Peak of Roman territorial expansion and prosperity"
    },
    "235": {
        facts: [
            "The Crisis of the Third Century (235-284 CE) nearly destroyed the empire.",
            "26 emperors ruled in 50 years, most dying violently.",
            "Barbarian invasions, plague, and economic collapse threatened Rome.",
            "The empire briefly split into three competing states."
        ],
        figures: ["Gallienus - Struggled to hold empire together", "Aurelian - 'Restorer of the World'"],
        significance: "Near collapse of Roman power, loss of many territories"
    },
    "337": {
        facts: [
            "Constantine the Great (306-337 CE) made Christianity the favored religion.",
            "He founded Constantinople (modern Istanbul) as a 'New Rome'.",
            "Constantine reunified the empire after defeating rival emperors.",
            "The Council of Nicaea (325 CE) established Christian doctrine."
        ],
        figures: ["Constantine I - First Christian Emperor", "Helena - His mother, finder of the True Cross"],
        significance: "Christianization of the Roman Empire"
    },
    "476": {
        facts: [
            "Romulus Augustulus was deposed in 476 CE by Odoacer, ending the Western Empire.",
            "The Eastern Empire (Byzantine Empire) continued for another 1000 years.",
            "Germanic kingdoms replaced Roman rule in the West.",
            "Roman law, language, and culture profoundly influenced medieval Europe."
        ],
        figures: ["Romulus Augustulus - Last Western Emperor", "Odoacer - Germanic king"],
        significance: "End of Western Rome, but not Roman civilization or influence"
    }
};

// Quiz Questions for Educational Mode
const QUIZ_QUESTIONS = [
    {
        question: "In what year was the Roman Republic founded?",
        options: ["753 BCE", "509 BCE", "27 BCE", "44 BCE"],
        correct: 1,
        explanation: "The Roman Republic was founded in 509 BCE after overthrowing the last Etruscan king."
    },
    {
        question: "Who was the first Roman Emperor?",
        options: ["Julius Caesar", "Augustus", "Nero", "Trajan"],
        correct: 1,
        explanation: "Augustus (formerly Octavian) became the first Roman Emperor in 27 BCE."
    },
    {
        question: "Which enemy did Rome fight in the Punic Wars?",
        options: ["Greeks", "Carthaginians", "Persians", "Gauls"],
        correct: 1,
        explanation: "Rome fought three Punic Wars (264-146 BCE) against Carthage for control of the Mediterranean."
    },
    {
        question: "Under which emperor did Rome reach its greatest extent?",
        options: ["Augustus", "Hadrian", "Trajan", "Constantine"],
        correct: 2,
        explanation: "Trajan (98-117 CE) expanded the empire to its maximum size, conquering Dacia and Mesopotamia."
    },
    {
        question: "What famous Gallic leader resisted Julius Caesar?",
        options: ["Hannibal", "Spartacus", "Vercingetorix", "Boudica"],
        correct: 2,
        explanation: "Vercingetorix led the Gallic resistance against Caesar but was defeated at Alesia in 52 BCE."
    },
    {
        question: "Which wall marked Rome's northern frontier in Britain?",
        options: ["Antonine Wall", "Hadrian's Wall", "Great Wall", "Aurelian Wall"],
        correct: 1,
        explanation: "Hadrian's Wall (122-128 CE) stretched 73 miles across northern England."
    },
    {
        question: "What year did the Western Roman Empire fall?",
        options: ["410 CE", "455 CE", "476 CE", "527 CE"],
        correct: 2,
        explanation: "476 CE marks the traditional end when Romulus Augustulus was deposed by Odoacer."
    },
    {
        question: "Which emperor made Christianity the favored religion?",
        options: ["Nero", "Constantine", "Diocletian", "Julian"],
        correct: 1,
        explanation: "Constantine the Great legalized and favored Christianity in the early 4th century CE."
    }
];

// Territory shape types: 'circle' or 'polygon'
// Polygon territories use [lat, lon] coordinates to define actual shapes
// Circle territories use [lat, lon, radius] for simpler representation

// Roman Empire Expansion Data with more realistic territory shapes
const historicalData = [
    { 
        year: -509, 
        name: "Early Roman Republic", 
        description: "Rome begins as a city-state in central Italy, having just overthrown its Etruscan kings.", 
        territories: [
            {
                type: 'polygon',
                name: 'Latium',
                id: 'rome_core',
                coords: [
                    [41.9, 12.3],
                    [41.8, 12.6],
                    [41.7, 12.7],
                    [41.6, 12.6],
                    [41.7, 12.4],
                    [41.8, 12.2]
                ]
            }
        ]
    },
    { 
        year: -450, 
        name: "Expanding Republic", 
        description: "Rome consolidates control over Latium and begins conflicts with neighboring tribes.", 
        territories: [
            {
                type: 'polygon',
                name: 'Greater Latium',
                id: 'rome_core',
                coords: [
                    [42.3, 11.8],
                    [42.2, 13.0],
                    [41.5, 13.4],
                    [41.2, 13.0],
                    [41.3, 12.2],
                    [41.8, 11.5],
                    [42.1, 11.6]
                ]
            }
        ]
    },
    { 
        year: -350, 
        name: "Central Italy", 
        description: "Victory in the Latin Wars. Rome dominates central Italy through warfare and alliances.", 
        territories: [
            {
                type: 'polygon',
                name: 'Central Italy',
                id: 'rome_core',
                coords: [
                    [43.0, 11.5],
                    [43.0, 13.5],
                    [42.0, 14.5],
                    [40.5, 15.0],
                    [40.0, 14.0],
                    [40.5, 12.5],
                    [41.5, 11.0],
                    [42.5, 11.0]
                ]
            }
        ]
    },
    { 
        year: -275, 
        name: "Italian Peninsula", 
        description: "Pyrrhic Wars concluded. Rome controls most of the Italian peninsula south of the Po Valley.", 
        territories: [
            {
                type: 'polygon',
                name: 'Italia',
                id: 'rome_core',
                coords: [
                    [44.5, 11.0], // Po Valley
                    [44.5, 13.5],
                    [43.5, 15.5],
                    [41.5, 16.5],
                    [40.0, 17.5], // Heel
                    [39.5, 16.5],
                    [38.0, 16.0], // Calabria
                    [37.5, 15.5],
                    [38.0, 14.5], // Sicily approach
                    [39.0, 13.0],
                    [40.0, 12.0],
                    [41.0, 10.5],
                    [42.5, 10.0],
                    [43.5, 10.0]
                ]
            }
        ]
    },
    { 
        year: -218, 
        name: "First Punic War", 
        description: "After defeating Carthage, Rome gains Sicily, Sardinia, and Corsica - its first provinces outside Italy.", 
        territories: [
            // Italia
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            // Sicily
            { type: 'polygon', name: 'Sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            // Sardinia
            { type: 'polygon', name: 'Sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            // Corsica
            { type: 'polygon', name: 'Corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] }
        ]
    },
    { 
        year: -146, 
        name: "Mediterranean Power", 
        description: "Carthage destroyed, Greece conquered. Rome becomes the dominant power in the Mediterranean.", 
        territories: [
            // Italia
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            // Sicily
            { type: 'polygon', name: 'Sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            // Sardinia & Corsica
            { type: 'polygon', name: 'Sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Macedonia & Greece
            { type: 'polygon', name: 'Macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // North Africa (former Carthage territory)
            { type: 'polygon', name: 'Africa', coords: [[37.5, 10.0], [37.0, 11.0], [36.0, 11.5], [35.0, 10.5], [34.5, 9.0], [35.5, 8.5], [37.0, 9.0]] },
            // Hispania coastal
            { type: 'polygon', name: 'Hispania Citerior', id: 'hispania', coords: [[42.5, 2.5], [41.5, 3.0], [40.0, 0.5], [38.5, -1.0], [39.5, -2.5], [41.0, -2.0], [42.0, 1.0]] }
        ]
    },
    { 
        year: -50, 
        name: "Caesar's Conquests", 
        description: "Julius Caesar conquers Gaul. Rome controls vast territories from Spain to Asia Minor.", 
        territories: [
            // Italia
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            // Sicily, Sardinia, Corsica
            { type: 'polygon', name: 'Sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Gallia (France) - Caesar's major conquest
            { type: 'polygon', name: 'Gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            // Hispania (full Spain and Portugal)
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            // Macedonia & Greece
            { type: 'polygon', name: 'Macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Asia Minor (western coast)
            { type: 'polygon', name: 'Asia', id: 'asia', coords: [[40.5, 26.5], [39.5, 28.5], [38.0, 29.5], [37.0, 28.5], [36.5, 27.0], [37.0, 26.0], [38.5, 26.0], [40.0, 26.0]] },
            // Africa (North Africa)
            { type: 'polygon', name: 'Africa', coords: [[37.5, 10.0], [37.0, 11.0], [36.0, 11.5], [35.0, 10.5], [34.5, 9.0], [35.5, 8.5], [37.0, 9.0]] },
            // Illyricum (Balkans west)
            { type: 'polygon', name: 'Illyricum', coords: [[45.5, 13.5], [44.5, 16.0], [42.5, 19.0], [41.0, 19.5], [42.0, 16.0], [43.5, 14.0], [45.0, 13.0]] }
        ]
    },
    { 
        year: -27, 
        name: "Birth of the Empire", 
        description: "Octavian becomes Augustus, first Roman Emperor. The Republic transitions to Empire.", 
        territories: [
            // Italia
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Gallia (expanded)
            { type: 'polygon', name: 'Gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            // Hispania
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            // Macedonia, Greece, Asia Minor
            { type: 'polygon', name: 'Macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[41.0, 26.5], [40.0, 29.5], [38.5, 32.0], [37.0, 34.0], [36.0, 33.0], [36.5, 30.0], [37.5, 27.5], [39.0, 26.0], [40.5, 26.0]] },
            // Syria & Judea
            { type: 'polygon', name: 'Syria', coords: [[37.0, 36.0], [36.0, 38.5], [34.5, 40.5], [33.0, 39.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            // Aegyptus (Egypt)
            { type: 'polygon', name: 'Aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            // Africa (expanded North Africa)
            { type: 'polygon', name: 'Africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 12.0], [33.0, 11.0], [32.5, 10.0], [34.0, 8.5], [36.0, 8.5], [37.0, 9.0]] },
            // Illyricum
            { type: 'polygon', name: 'Illyricum', coords: [[45.5, 13.5], [44.5, 17.5], [42.5, 19.5], [41.0, 19.5], [42.0, 16.0], [43.5, 14.0], [45.0, 13.0]] }
        ]
    },
    { 
        year: 14, 
        name: "Augustan Empire", 
        description: "Augustus dies after establishing imperial frontiers. The empire is stable and prosperous.", 
        territories: [
            // Core territories (Italia and islands)
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Gallia
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            // Hispania
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            // Balkans (Illyricum, Macedonia)
            { type: 'polygon', name: 'Illyricum', id: 'illyricum', coords: [[45.5, 13.5], [44.5, 17.5], [42.5, 19.5], [41.0, 19.5], [42.0, 16.0], [43.5, 14.0], [45.0, 13.0]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Asia Minor (expanded)
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[41.0, 26.5], [40.0, 29.5], [38.5, 32.5], [37.0, 35.0], [36.0, 33.5], [36.5, 30.5], [37.5, 27.5], [39.0, 26.0], [40.5, 26.0]] },
            // Eastern provinces
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 38.5], [34.5, 41.0], [33.0, 39.5], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            // Africa
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 12.0], [33.0, 11.5], [32.5, 10.0], [34.0, 8.5], [36.0, 8.5], [37.0, 9.0]] },
            // Germania (limited Rhine territories)
            { type: 'polygon', name: 'Germania Inferior', id: 'germania_inferior', coords: [[52.0, 4.5], [51.5, 6.5], [50.5, 7.0], [50.0, 5.5], [51.0, 4.0]] }
        ]
    },
    { 
        year: 69, 
        name: "Flavian Dynasty", 
        description: "Year of Four Emperors ends. Vespasian founds the Flavian dynasty and stabilizes the empire.", 
        territories: [
            // Core
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Western provinces
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[55.0, -3.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -5.5], [54.0, -4.5]] },
            // Germania provinces
            { type: 'polygon', name: 'Germania Inferior', id: 'germania_inferior', coords: [[53.0, 5.0], [52.5, 6.5], [51.5, 6.5], [50.5, 6.0], [50.5, 4.0], [51.0, 3.5], [52.0, 4.0]] },
            // Central provinces
            { type: 'polygon', name: 'Illyricum', id: 'illyricum', coords: [[45.5, 13.5], [44.5, 17.5], [42.5, 19.5], [41.0, 19.5], [42.0, 16.0], [43.5, 14.0], [45.0, 13.0]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Eastern provinces
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[41.0, 26.5], [40.0, 29.5], [38.5, 32.5], [37.0, 35.0], [36.0, 33.5], [36.5, 30.5], [37.5, 27.5], [39.0, 26.0], [40.5, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 38.5], [34.5, 41.0], [33.0, 39.5], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 12.5], [33.0, 12.0], [31.5, 10.5], [33.5, 8.5], [36.0, 8.5], [37.0, 9.0]] }
        ]
    },
    { 
        year: 117, 
        name: "Greatest Extent", 
        description: "Under Trajan, the empire reaches its maximum territorial extent, from Britain to Mesopotamia.", 
        territories: [
            // Core Italia and islands
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Western provinces
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[56.0, -4.0], [55.5, -2.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -6.0], [54.5, -5.5]] },
            // Central Europe - Germania provinces
            { type: 'polygon', name: 'Germania Inferior', id: 'germania_inferior', coords: [[53.0, 5.0], [52.5, 6.5], [51.5, 6.5], [50.5, 6.0], [50.5, 4.0], [51.0, 3.5], [52.0, 4.0]] },
            { type: 'polygon', name: 'Germania Superior', id: 'germania_superior', coords: [[50.5, 7.0], [49.5, 9.5], [48.0, 10.0], [47.5, 8.0], [48.5, 6.5]] },
            { type: 'polygon', name: 'Raetia', id: 'raetia', coords: [[48.0, 10.0], [47.0, 12.0], [46.5, 11.0], [47.0, 9.5]] },
            { type: 'polygon', name: 'Noricum', id: 'noricum', coords: [[48.5, 13.0], [47.5, 15.0], [46.5, 14.0], [47.0, 12.5]] },
            // Balkans and Danube
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 20.0], [45.0, 18.5], [46.0, 15.5], [47.5, 15.0]] },
            { type: 'polygon', name: 'Dacia', id: 'dacia', coords: [[47.5, 23.0], [46.5, 26.5], [45.0, 27.5], [44.0, 26.0], [44.5, 23.0], [46.0, 22.5]] },
            { type: 'polygon', name: 'Moesia', id: 'moesia', coords: [[45.0, 20.0], [44.0, 23.5], [43.0, 27.0], [42.0, 26.5], [42.5, 22.5], [43.5, 20.5]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Illyricum/Dalmatia - connecting Italy to Balkans
            { type: 'polygon', name: 'Illyricum', id: 'illyricum', coords: [[45.5, 14.0], [44.5, 16.0], [43.0, 17.5], [42.0, 19.0], [41.5, 18.5], [42.5, 16.5], [44.0, 14.5]] },
            // Asia Minor (full control)
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            // Eastern provinces at peak
            { type: 'polygon', name: 'Armenia', id: 'armenia', coords: [[40.5, 43.0], [39.5, 45.5], [38.0, 44.5], [38.5, 42.0], [39.5, 41.5]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Mesopotamia', id: 'mesopotamia', coords: [[37.0, 40.0], [36.0, 43.5], [34.0, 45.5], [33.0, 44.5], [32.5, 41.0], [34.0, 39.5]] },
            { type: 'polygon', name: 'Judaea', id: 'judaea', coords: [[33.0, 35.0], [32.0, 35.5], [31.0, 34.5], [31.5, 34.0], [32.5, 34.5]] },
            { type: 'polygon', name: 'Arabia', id: 'arabia', coords: [[32.0, 35.5], [30.5, 36.5], [29.0, 35.0], [29.5, 34.0], [31.0, 34.5]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            // North Africa
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 13.0], [33.0, 13.5], [31.0, 11.5], [30.5, 10.0], [32.0, 8.5], [35.0, 8.5], [37.0, 9.0]] },
            { type: 'polygon', name: 'Mauretania', id: 'mauretania', coords: [[36.0, -5.0], [35.0, 0.0], [33.0, 2.0], [31.5, 0.0], [32.0, -5.0], [34.0, -7.0]] },
            // Mediterranean Islands
            { type: 'polygon', name: 'Crete', id: 'crete', coords: [[35.6, 23.5], [35.2, 25.5], [35.0, 26.0], [35.2, 24.0], [35.4, 23.5]] },
            { type: 'polygon', name: 'Cyprus', id: 'cyprus', coords: [[35.5, 32.5], [35.2, 33.5], [34.7, 34.0], [34.6, 33.0], [35.0, 32.5]] }
        ]
    },
    { 
        year: 180, 
        name: "Pax Romana Ends", 
        description: "Marcus Aurelius dies. The era of peace and prosperity begins to wane with increasing pressures.", 
        territories: [
            // Same as 117 CE - still at maximum extent
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[56.0, -4.0], [55.5, -2.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -6.0], [54.5, -5.5]] },
            // Central Europe - Germania provinces
            { type: 'polygon', name: 'Germania Inferior', id: 'germania_inferior', coords: [[53.0, 5.0], [52.5, 6.5], [51.5, 6.5], [50.5, 6.0], [50.5, 4.0], [51.0, 3.5], [52.0, 4.0]] },
            { type: 'polygon', name: 'Germania Superior', id: 'germania_superior', coords: [[50.5, 7.0], [49.5, 9.5], [48.0, 10.0], [47.5, 8.0], [48.5, 6.5]] },
            { type: 'polygon', name: 'Raetia', id: 'raetia', coords: [[48.0, 10.0], [47.0, 12.0], [46.5, 11.0], [47.0, 9.5]] },
            { type: 'polygon', name: 'Noricum', id: 'noricum', coords: [[48.5, 13.0], [47.5, 15.0], [46.5, 14.0], [47.0, 12.5]] },
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 20.0], [45.0, 18.5], [46.0, 15.5], [47.5, 15.0]] },
            { type: 'polygon', name: 'Dacia', id: 'dacia', coords: [[47.5, 23.0], [46.5, 26.5], [45.0, 27.5], [44.0, 26.0], [44.5, 23.0], [46.0, 22.5]] },
            { type: 'polygon', name: 'Moesia', id: 'moesia', coords: [[45.0, 20.0], [44.0, 23.5], [43.0, 27.0], [42.0, 26.5], [42.5, 22.5], [43.5, 20.5]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Illyricum/Dalmatia - connecting Italy to Balkans
            { type: 'polygon', name: 'Illyricum', id: 'illyricum', coords: [[45.5, 14.0], [44.5, 16.0], [43.0, 17.5], [42.0, 19.0], [41.5, 18.5], [42.5, 16.5], [44.0, 14.5]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Mesopotamia', id: 'mesopotamia', coords: [[37.0, 40.0], [36.0, 43.5], [34.0, 45.5], [33.0, 44.5], [32.5, 41.0], [34.0, 39.5]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 13.0], [33.0, 13.5], [31.0, 11.5], [30.5, 10.0], [32.0, 8.5], [35.0, 8.5], [37.0, 9.0]] },
            // Mediterranean Islands
            { type: 'polygon', name: 'Crete', id: 'crete', coords: [[35.6, 23.5], [35.2, 25.5], [35.0, 26.0], [35.2, 24.0], [35.4, 23.5]] },
            { type: 'polygon', name: 'Cyprus', id: 'cyprus', coords: [[35.5, 32.5], [35.2, 33.5], [34.7, 34.0], [34.6, 33.0], [35.0, 32.5]] }
        ]
    },
    { 
        year: 235, 
        name: "Crisis Begins", 
        description: "The Crisis of the Third Century begins. Political instability and barbarian invasions threaten the empire.", 
        territories: [
            // Core Italia and islands remain
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            // Western provinces (stable but under pressure)
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[56.0, -4.0], [55.5, -2.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -6.0], [54.5, -5.5]] },
            // Danube frontier weakened - Germania lost, Dacia threatened
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 20.0], [45.0, 18.5], [46.0, 15.5], [47.5, 15.0]] },
            { type: 'polygon', name: 'Moesia', id: 'moesia', coords: [[45.0, 20.0], [44.0, 23.5], [43.0, 27.0], [42.0, 26.5], [42.5, 22.5], [43.5, 20.5]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            // Eastern provinces remain
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 13.0], [33.0, 13.5], [31.0, 11.5], [30.5, 10.0], [32.0, 8.5], [35.0, 8.5], [37.0, 9.0]] }
        ]
    },
    { 
        year: 284, 
        name: "Diocletian's Reforms", 
        description: "Diocletian becomes emperor and institutes reforms, dividing the empire into East and West.", 
        territories: [
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[56.0, -4.0], [55.5, -2.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -6.0], [54.5, -5.5]] },
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 20.0], [45.0, 18.5], [46.0, 15.5], [47.5, 15.0]] },
            { type: 'polygon', name: 'Moesia', id: 'moesia', coords: [[45.0, 20.0], [44.0, 23.5], [43.0, 27.0], [42.0, 26.5], [42.5, 22.5], [43.5, 20.5]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 13.0], [33.0, 13.5], [31.0, 11.5], [30.5, 10.0], [32.0, 8.5], [35.0, 8.5], [37.0, 9.0]] }
        ]
    },
    { 
        year: 337, 
        name: "Constantine's Legacy", 
        description: "Constantine the Great dies after making Christianity official and founding Constantinople.", 
        territories: [
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Sardinia', id: 'sardinia', coords: [[41.2, 9.5], [40.8, 9.8], [40.0, 9.5], [39.2, 9.0], [39.0, 8.5], [39.5, 8.2], [40.5, 8.5], [41.0, 9.0]] },
            { type: 'polygon', name: 'Corsica', id: 'corsica', coords: [[43.0, 9.4], [42.5, 9.5], [41.8, 9.2], [41.5, 8.8], [42.0, 8.7], [42.8, 8.8], [43.1, 9.2]] },
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[51.0, 2.5], [50.5, 4.5], [49.5, 6.0], [48.5, 7.5], [46.0, 6.5], [44.5, 5.0], [43.0, 2.0], [43.5, -1.5], [46.0, -4.0], [48.5, -4.5], [49.5, -1.5], [50.5, 1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Britannia', id: 'britannia', coords: [[56.0, -4.0], [55.5, -2.0], [54.5, -0.5], [52.5, 1.5], [51.0, 1.0], [50.0, -5.0], [52.0, -6.0], [54.5, -5.5]] },
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 20.0], [45.0, 18.5], [46.0, 15.5], [47.5, 15.0]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [37.0, 11.5], [35.5, 13.0], [33.0, 13.5], [31.0, 11.5], [30.5, 10.0], [32.0, 8.5], [35.0, 8.5], [37.0, 9.0]] }
        ]
    },
    { 
        year: 395, 
        name: "Empire Divided", 
        description: "The empire permanently splits into Eastern and Western halves after Theodosius I's death.", 
        territories: [
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.5, 11.0], [44.5, 13.5], [43.5, 15.5], [41.5, 16.5], [40.0, 17.5], [39.5, 16.5], [38.0, 16.0], [37.5, 15.5], [38.0, 14.5], [39.0, 13.0], [40.0, 12.0], [41.0, 10.5], [42.5, 10.0], [43.5, 10.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Gallia', id: 'gallia', coords: [[50.0, 2.5], [49.5, 5.0], [48.0, 6.5], [46.0, 5.5], [44.0, 3.0], [43.5, -1.5], [46.0, -3.5], [48.0, -4.0], [49.0, -1.5]] },
            { type: 'polygon', name: 'Hispania', id: 'hispania', coords: [[43.5, -1.5], [42.5, 3.0], [40.5, 3.5], [38.5, 1.0], [37.0, -2.0], [36.0, -5.5], [36.5, -6.5], [37.5, -8.5], [39.5, -9.0], [41.5, -8.5], [43.0, -7.0], [43.5, -5.0]] },
            { type: 'polygon', name: 'Pannonia', id: 'pannonia', coords: [[48.5, 16.0], [47.5, 19.0], [46.0, 19.5], [45.0, 18.0], [46.0, 15.5]] },
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa', id: 'africa', coords: [[37.5, 10.0], [36.5, 11.0], [34.5, 11.5], [33.0, 11.0], [32.0, 10.0], [33.5, 9.0], [35.5, 9.0]] }
        ]
    },
    { 
        year: 410, 
        name: "Sack of Rome", 
        description: "Visigoths sack Rome - a profound psychological blow. Western territories increasingly lost.", 
        territories: [
            // Western Empire collapsing
            { type: 'polygon', name: 'Italia', id: 'rome_core', coords: [[44.0, 11.5], [44.0, 13.0], [43.0, 15.0], [41.5, 16.0], [40.0, 16.5], [39.0, 15.0], [38.5, 13.5], [39.5, 12.0], [41.0, 11.0], [43.0, 11.0]] },
            { type: 'polygon', name: 'Sicilia', id: 'sicilia', coords: [[38.2, 15.5], [37.5, 15.0], [37.0, 14.5], [36.8, 13.5], [37.5, 12.5], [38.2, 12.3], [38.5, 13.5], [38.3, 14.8]] },
            { type: 'polygon', name: 'Gallia South', id: 'gallia_south', coords: [[45.0, 2.5], [44.0, 5.0], [43.0, 4.0], [43.5, 1.0], [44.5, 1.5]] },
            { type: 'polygon', name: 'Hispania Coast', id: 'hispania_coast', coords: [[41.5, 2.0], [40.0, 2.5], [38.5, 0.5], [37.5, -2.0], [38.5, -3.5], [40.0, -2.5]] },
            // Eastern Empire stable
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] },
            { type: 'polygon', name: 'Africa East', id: 'africa_east', coords: [[35.0, 10.5], [34.0, 11.5], [32.5, 11.0], [32.0, 10.0], [33.0, 9.5], [34.5, 9.5]] }
        ]
    },
    { 
        year: 450, 
        name: "Western Collapse", 
        description: "Hunnic invasions and barbarian kingdoms. The Western Empire clings to Italy and parts of Gaul.", 
        territories: [
            // Western Empire nearly gone
            { type: 'polygon', name: 'Italia Central', id: 'italia_central', coords: [[43.0, 11.5], [43.0, 13.0], [42.0, 14.0], [41.0, 15.0], [40.0, 14.5], [40.0, 12.5], [41.0, 11.5], [42.0, 11.0]] },
            { type: 'polygon', name: 'Gallia Remnant', id: 'gallia_remnant', coords: [[44.5, 3.0], [43.5, 5.0], [43.0, 4.0], [43.5, 2.5]] },
            // Eastern Empire strong
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] }
        ]
    },
    { 
        year: 476, 
        name: "Fall of the West", 
        description: "Romulus Augustulus deposed. The Western Roman Empire falls, though the East continues for 1000 years.", 
        territories: [
            // Only Eastern Empire remains (Byzantine Empire)
            { type: 'polygon', name: 'Thracia', id: 'thracia', coords: [[43.0, 23.0], [42.0, 26.5], [41.0, 27.5], [40.5, 25.5], [41.5, 23.5]] },
            { type: 'polygon', name: 'Macedonia', id: 'macedonia', coords: [[41.5, 20.0], [40.5, 23.5], [39.5, 24.5], [38.0, 24.0], [37.0, 22.5], [36.5, 21.0], [37.5, 20.0], [39.0, 19.5], [40.5, 20.0]] },
            { type: 'polygon', name: 'Asia Minor', id: 'asia', coords: [[42.0, 26.5], [41.0, 30.0], [40.0, 33.5], [39.0, 36.5], [37.5, 37.5], [36.5, 35.5], [36.0, 32.0], [36.5, 28.5], [38.0, 26.5], [40.0, 26.0]] },
            { type: 'polygon', name: 'Syria', id: 'syria', coords: [[37.0, 36.0], [36.0, 39.0], [34.5, 41.5], [33.0, 40.0], [32.0, 35.5], [33.5, 34.0], [35.5, 35.0]] },
            { type: 'polygon', name: 'Aegyptus', id: 'aegyptus', coords: [[31.5, 32.0], [31.0, 29.5], [27.0, 30.5], [24.0, 32.5], [26.0, 33.5], [29.0, 31.5]] }
        ]
    }
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
    // Map & Rendering
    map: null,
    territoryLayerGroup: null,  // Single layer group for all territories
    activeTerritories: new Map(), // Map of territoryId -> {layer, data}
    cityMarkers: [],
    wallLayers: [],
    
    // Timeline & Animation
    currentIndex: 0,
    isPlaying: false,
    animationId: null,
    lastUpdateTime: 0,
    animationSpeed: 3,
    updateInterval: 600,
    
    // Territory transition animation
    transitionInProgress: false,
    transitionStartTime: 0,
    transitionDuration: 1500,
    pendingTerritories: null,  // Territories to transition to
    
    // UI State
    isInitialized: false,
    isMobile: false,
    touchStartX: 0,
    touchStartY: 0,
    eduExpanded: false,
    infoLocked: false,
    lockedContent: null,
    
    // Quiz State
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: 0
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
    maxZoom: 7,
    // Responsive zoom based on viewport width
    getResponsiveZoom: () => {
        const width = window.innerWidth;
        if (width < 480) return 3;        // Very small phones
        if (width < 768) return 3.5;      // Phones
        if (width < 1024) return 3.75;    // Tablets
        return 4;                          // Desktop
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const utils = {
    // Format year display
    formatYear: (year) => {
        const absYear = Math.abs(year);
        const era = year < 0 ? 'BCE' : 'CE';
        return { year: absYear, era };
    },
    
    // Fade element opacity with callback
    fadeElement: (element, fadeOut = true, callback) => {
        if (!element) return;
        element.style.opacity = fadeOut ? '0' : '1';
        if (callback && fadeOut) {
            setTimeout(callback, 150);
        }
    },
    
    // Update display elements with transition
    updateDisplayElements: (yearEl, eraEl, nameEl, descEl, year, era, name, desc) => {
        if (!yearEl || !eraEl || !nameEl || !descEl) return;
        
        utils.fadeElement(nameEl, true, () => {
            yearEl.textContent = year;
            eraEl.textContent = era;
            nameEl.textContent = name;
            descEl.textContent = desc;
            utils.fadeElement(nameEl, false);
            utils.fadeElement(descEl, false);
        });
        utils.fadeElement(descEl, true);
    },
    
    // Remove layers safely
    removeLayers: (layers, map) => {
        if (!map) return;
        layers.forEach(layer => {
            try {
                map.removeLayer(layer);
            } catch (e) {
                console.warn('Failed to remove layer:', e);
            }
        });
        return [];
    },
    
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for scrolling/resizing
    throttle: (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// ============================================
// INITIALIZATION
// ============================================
function init() {
    const startTime = performance.now();
    
    try {
        showLoading();
        detectMobile();
        initializeMap();
        initTerritorySystem(); // Initialize territory layer group
        setupEventListeners();
        setupKeyboardShortcuts();
        setupTouchGestures();
        setupEducationalFeatures();
        addReferenceCities();
        updateDisplay();
        STATE.isInitialized = true;
        
        // Use requestAnimationFrame for smooth loading completion
        requestAnimationFrame(() => {
            hideLoading();
            
            // Show mobile hint briefly
            if (STATE.isMobile) {
                showMobileHint();
            }
        });
        
        const loadTime = (performance.now() - startTime).toFixed(0);
        console.log(`✅ IMPERIVM ROMANVM initialized in ${loadTime}ms`);
    } catch (error) {
        console.error('❌ Initialization error:', error);
        console.error('Stack:', error.stack);
        showError('Failed to initialize. Please check your connection and refresh.');
        hideLoading();
    }
}

// Detect mobile device with better accuracy
function detectMobile() {
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const narrowScreen = window.matchMedia('(max-width: 768px)').matches;
    const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    STATE.isMobile = (touchDevice && narrowScreen) || mobileUA;
    STATE.isTouch = touchDevice;
    
    // Add class to body for CSS targeting
    document.body.classList.toggle('is-mobile', STATE.isMobile);
    document.body.classList.toggle('is-touch', STATE.isTouch);
}

function showMobileHint() {
    const hint = document.getElementById('mobileHint');
    if (hint) {
        hint.classList.add('show');
        setTimeout(() => {
            hint.classList.remove('show');
        }, 4000);
    }
}

// Loading screen helpers
function showLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

function showError(message) {
    hideLoading();
    alert(message);
}

function initializeMap() {
    STATE.map = L.map('map', {
        center: MAP_CONFIG.center,
        zoom: MAP_CONFIG.getResponsiveZoom(),
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
    
    // Adjust zoom on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newZoom = MAP_CONFIG.getResponsiveZoom();
            if (STATE.map && Math.abs(STATE.map.getZoom() - newZoom) > 0.3) {
                STATE.map.setZoom(newZoom, { animate: true });
            }
        }, 300);
    });
}

function setupEventListeners() {
    const timeline = document.getElementById('timeline');
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    const speedSlider = document.getElementById('speedSlider');
    
    // Attach event listeners with passive option where appropriate
    if (timeline) timeline.addEventListener('input', handleTimelineChange);
    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (resetBtn) resetBtn.addEventListener('click', reset);
    if (speedSlider) {
        speedSlider.addEventListener('input', handleSpeedChange);
        speedSlider.addEventListener('change', (e) => {
            e.target.setAttribute('aria-valuenow', e.target.value);
        });
    }
    
    // Handle window resize with throttling for performance
    const throttledResize = utils.throttle(() => {
        detectMobile();
        if (STATE.map) STATE.map.invalidateSize();
    }, 250);
    
    window.addEventListener('resize', throttledResize, { passive: true });
}

// ============================================
// TOUCH GESTURES FOR MOBILE
// ============================================
function setupTouchGestures() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    let touchStartValue = 0;
    let touchStartTime = 0;
    
    // Improved touch handling for timeline
    timeline.addEventListener('touchstart', (e) => {
        touchStartValue = parseInt(timeline.value);
        STATE.touchStartX = e.touches[0].clientX;
        touchStartTime = Date.now();
    }, { passive: true });
    
    timeline.addEventListener('touchmove', (e) => {
        const touchDelta = e.touches[0].clientX - STATE.touchStartX;
        const sensitivity = 0.5;
        const newValue = Math.max(0, Math.min(100, touchStartValue + (touchDelta * sensitivity)));
        timeline.value = newValue;
        handleTimelineChange({ target: timeline });
        
        // Add subtle vibration feedback on mobile if available
        if ('vibrate' in navigator && Math.abs(touchDelta) > 20) {
            // Vibrate every 50px of movement
            const vibrationThreshold = Math.floor(Math.abs(touchDelta) / 50);
            if (vibrationThreshold > STATE.lastVibration || 0) {
                navigator.vibrate(10); // Very subtle 10ms vibration
                STATE.lastVibration = vibrationThreshold;
            }
        }
    }, { passive: true });
    
    // Enhanced swipe navigation on map for mobile
    if (STATE.isMobile) {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            let swipeStartX = 0;
            let swipeStartY = 0;
            let swipeStartTime = 0;
            let isSwipe = false;
            
            mapElement.addEventListener('touchstart', (e) => {
                // Only track single-finger touches for navigation
                if (e.touches.length === 1) {
                    swipeStartX = e.touches[0].clientX;
                    swipeStartY = e.touches[0].clientY;
                    swipeStartTime = Date.now();
                    isSwipe = true;
                }
            }, { passive: true });
            
            mapElement.addEventListener('touchmove', (e) => {
                // Detect if this is more likely a map pan than a navigation swipe
                if (isSwipe && e.touches.length === 1) {
                    const deltaY = Math.abs(e.touches[0].clientY - swipeStartY);
                    const deltaX = Math.abs(e.touches[0].clientX - swipeStartX);
                    // If vertical movement exceeds horizontal, cancel swipe navigation
                    if (deltaY > deltaX * 1.5) {
                        isSwipe = false;
                    }
                }
            }, { passive: true });
            
            mapElement.addEventListener('touchend', (e) => {
                if (!isSwipe || e.changedTouches.length !== 1) return;
                
                const swipeEndX = e.changedTouches[0].clientX;
                const swipeTime = Date.now() - swipeStartTime;
                const swipeDistance = swipeEndX - swipeStartX;
                
                // Only trigger if fast swipe (< 300ms) and significant distance (> 70px)
                if (swipeTime < 300 && Math.abs(swipeDistance) > 70) {
                    e.preventDefault(); // Prevent any default action
                    
                    // Haptic feedback for swipe navigation
                    if ('vibrate' in navigator) {
                        navigator.vibrate(20);
                    }
                    
                    if (swipeDistance > 0) {
                        navigateTimeline(-1); // Swipe right = previous
                    } else {
                        navigateTimeline(1); // Swipe left = next
                    }
                }
                
                isSwipe = false;
            }, { passive: false });
        }
    }
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignore if user is typing in an input
        if (e.target.tagName === 'INPUT') return;
        
        switch(e.key.toLowerCase()) {
            case ' ':
            case 'spacebar':
                e.preventDefault();
                togglePlay();
                break;
            case 'r':
                e.preventDefault();
                reset();
                break;
            case 'arrowleft':
                e.preventDefault();
                navigateTimeline(-1);
                break;
            case 'arrowright':
                e.preventDefault();
                navigateTimeline(1);
                break;
            case 'home':
                e.preventDefault();
                jumpToStart();
                break;
            case 'end':
                e.preventDefault();
                jumpToEnd();
                break;
        }
    });
}

function navigateTimeline(direction) {
    if (STATE.isPlaying) togglePlay();
    
    STATE.currentIndex = Math.max(0, Math.min(historicalData.length - 1, STATE.currentIndex + direction));
    updateDisplay();
    drawTerritories();
    updateTimelineSlider();
}

function jumpToStart() {
    if (STATE.isPlaying) togglePlay();
    STATE.currentIndex = 0;
    updateDisplay();
    drawTerritories();
    updateTimelineSlider();
}

function jumpToEnd() {
    if (STATE.isPlaying) togglePlay();
    STATE.currentIndex = historicalData.length - 1;
    updateDisplay();
    drawTerritories();
    updateTimelineSlider();
}

function updateTimelineSlider() {
    const timeline = document.getElementById('timeline');
    if (timeline) {
        const value = (STATE.currentIndex / (historicalData.length - 1)) * 100;
        timeline.value = value;
        timeline.setAttribute('aria-valuenow', Math.round(value));
    }
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
    },
    // MAJOR EASTERN CITIES - Previously missing
    { 
        name: 'Byzantium/Constantinople', 
        lat: 41.01, 
        lon: 28.98, 
        founded: 'Refounded 330 CE', 
        year: -667,
        description: 'Originally founded as Byzantium by Greek colonists around 667 BCE. Refounded by Constantine the Great in 330 CE as Constantinople ("City of Constantine"). Became the capital of the Eastern Roman (Byzantine) Empire and one of the largest and wealthiest cities in the world for over 1000 years.'
    },
    { 
        name: 'Antioch (Antakya)', 
        lat: 36.20, 
        lon: 36.16, 
        founded: '300 BCE', 
        year: -64,
        description: 'Founded by Seleucus I Nicator. Conquered by Rome in 64 BCE. Third largest city in the Roman Empire after Rome and Alexandria. Major center of early Christianity - where followers were first called "Christians". Capital of the Diocese of the East.'
    },
    { 
        name: 'Alexandria', 
        lat: 31.20, 
        lon: 29.92, 
        founded: '331 BCE (Greek)', 
        year: -30,
        description: 'Founded by Alexander the Great. Became Roman after Cleopatra\'s death in 30 BCE. Second largest city of the Empire, famous for its Great Library and Lighthouse (one of the Seven Wonders). Major center of learning, commerce, and early Christian theology.'
    },
    { 
        name: 'Carthage (Roman)', 
        lat: 36.85, 
        lon: 10.32, 
        founded: 'Refounded 44 BCE', 
        year: -44,
        description: 'Originally Punic city destroyed by Rome in 146 BCE. Julius Caesar founded a new Roman colony here in 44 BCE, which became one of the largest cities of the Western Empire. Capital of Africa Proconsularis and a major grain-exporting port.'
    },
    { 
        name: 'Ephesus (Efes)', 
        lat: 37.95, 
        lon: 27.36, 
        founded: 'Ancient Greek', 
        year: -133,
        description: 'One of the largest cities of the ancient world. Temple of Artemis was one of the Seven Wonders. Became Roman in 133 BCE. Capital of Asia province. Important early Christian site - home of St. Paul and allegedly Virgin Mary. Famous for its well-preserved theater and library.'
    },
    { 
        name: 'Athens', 
        lat: 37.98, 
        lon: 23.73, 
        founded: 'Ancient Greek', 
        year: -146,
        description: 'The cradle of Western civilization and democracy. Came under Roman control in 146 BCE but retained significant cultural prestige. Romans admired Greek culture and many studied philosophy here. Home of Plato\'s Academy and Aristotle\'s Lyceum.'
    },
    { 
        name: 'Jerusalem (Aelia Capitolina)', 
        lat: 31.78, 
        lon: 35.23, 
        founded: 'Ancient', 
        year: -63,
        description: 'Captured by Pompey in 63 BCE. Destroyed after Jewish revolt in 70 CE and rebuilt as Aelia Capitolina by Hadrian in 130 CE. Holy city for Jews and Christians. Site of the Second Temple and Jesus\' crucifixion.'
    },
    { 
        name: 'Damascus', 
        lat: 33.51, 
        lon: 36.29, 
        founded: 'Ancient', 
        year: -64,
        description: 'One of the oldest continuously inhabited cities in the world. Incorporated into Roman Syria in 64 BCE. Important trading hub on caravan routes. Site of St. Paul\'s conversion to Christianity on the "Road to Damascus".'
    },
    { 
        name: 'Pergamon (Bergama)', 
        lat: 39.12, 
        lon: 27.18, 
        founded: 'Ancient Greek', 
        year: -133,
        description: 'Capital of the wealthy Kingdom of Pergamon, bequeathed to Rome in 133 BCE. Famous for its library (second only to Alexandria), Asclepion healing center, and dramatic acropolis. Gave its name to "parchment" (pergamena).'
    },
    { 
        name: 'Thessalonica (Thessaloniki)', 
        lat: 40.64, 
        lon: 22.94, 
        founded: '315 BCE (Greek)', 
        year: -148,
        description: 'Named after Alexander\'s half-sister. Became Roman in 148 BCE. Capital of the province of Macedonia and one of the largest cities in the Balkans. Important early Christian center - St. Paul wrote two epistles to the Thessalonians.'
    },
    { 
        name: 'Corinth', 
        lat: 37.91, 
        lon: 22.88, 
        founded: 'Refounded 44 BCE', 
        year: -44,
        description: 'Ancient Greek city destroyed by Rome in 146 BCE for leading resistance. Julius Caesar refounded it as a Roman colony in 44 BCE. Strategically located controlling the Isthmus. Major trading port and early Christian community visited by St. Paul.'
    },
    { 
        name: 'Nicomedia (İzmit)', 
        lat: 40.76, 
        lon: 29.94, 
        founded: '264 BCE (Greek)', 
        year: -74,
        description: 'Capital of Bithynia, bequeathed to Rome in 74 BCE. Diocletian made it the eastern capital during the Tetrarchy (284-305 CE). Constantine lived here before founding Constantinople. Major administrative and military center.'
    },
    { 
        name: 'Nicaea (İznik)', 
        lat: 40.43, 
        lon: 29.72, 
        founded: '316 BCE (Greek)', 
        year: -74,
        description: 'Founded by Antigonus I, renamed by Lysimachus. Part of Roman Bithynia from 74 BCE. Site of the First Council of Nicaea (325 CE) which established the Nicene Creed, defining orthodox Christian doctrine.'
    },
    { 
        name: 'Cyrene', 
        lat: 32.82, 
        lon: 21.86, 
        founded: 'Greek Colony 630 BCE', 
        year: -96,
        description: 'Founded by Greek colonists. Bequeathed to Rome in 96 BCE. Capital of Cyrenaica province (eastern Libya). Birthplace of the philosopher Aristippus and Simon of Cyrene who carried Jesus\' cross.'
    },
    { 
        name: 'Leptis Magna', 
        lat: 32.64, 
        lon: 14.29, 
        founded: 'Phoenician', 
        year: -146,
        description: 'Phoenician trading post that became one of the most beautiful cities of the Roman world. Birthplace of Emperor Septimius Severus who embellished it lavishly. Exceptionally well-preserved ruins including theater, forum, and arch.'
    },
    { 
        name: 'Palmyra (Tadmor)', 
        lat: 34.55, 
        lon: 38.27, 
        founded: 'Ancient', 
        year: 14,
        description: 'Oasis city that became fabulously wealthy from caravan trade. Formally annexed under Tiberius. Briefly broke from Rome under Queen Zenobia (267-272 CE) who conquered Egypt and much of the East before being defeated by Aurelian.'
    },
    { 
        name: 'Petra', 
        lat: 30.33, 
        lon: 35.44, 
        founded: 'Nabataean', 
        year: 106,
        description: 'Capital of the Nabataean Kingdom, annexed as capital of Arabia Petraea by Trajan in 106 CE. Famous "rose-red city half as old as time" carved into sandstone cliffs. Major trading center on incense routes.'
    },
    { 
        name: 'Eboracum (York)', 
        lat: 53.96, 
        lon: -1.08, 
        founded: '71 CE', 
        year: 71,
        description: 'Major legionary fortress and later capital of Britannia Inferior. Emperor Septimius Severus died here in 211 CE. Constantine was proclaimed emperor here in 306 CE. One of the most important cities in Roman Britain.'
    },
    { 
        name: 'Aquileia', 
        lat: 45.77, 
        lon: 13.37, 
        founded: '181 BCE', 
        year: -181,
        description: 'Founded as a Roman colony to guard against Celtic and Illyrian incursions. Became the fourth largest city in Italy and a major trading hub. Gateway between Rome and the Danube. Devastated by Attila the Hun in 452 CE.'
    },
    { 
        name: 'Syracuse (Siracusa)', 
        lat: 37.07, 
        lon: 15.29, 
        founded: 'Greek 734 BCE', 
        year: -212,
        description: 'One of the greatest Greek cities, conquered by Rome in 212 BCE after a famous siege. Home of Archimedes. Became capital of Sicily province. Major grain-exporting port and cultural center connecting Greece and Rome.'
    },
    { 
        name: 'Tingis (Tangier)', 
        lat: 35.78, 
        lon: -5.81, 
        founded: 'Phoenician', 
        year: -38,
        description: 'Ancient Phoenician and Carthaginian city. Became Roman under Augustus. Capital of Mauretania Tingitana province. Strategic location at the western entrance to the Mediterranean (Pillars of Hercules).'
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
    if (!STATE.map) return;
    
    const currentYear = historicalData[STATE.currentIndex].year;
    
    // Clear existing city and fort markers efficiently
    STATE.cityMarkers = utils.removeLayers(STATE.cityMarkers, STATE.map);
    
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
            
            // Add click handler to show and lock city info
            marker.on('click', () => {
                showCityInfo(city, true); // true = lock the info
            });
            
            // Add hover handler to show city info (but don't lock)
            marker.on('mouseover', () => {
                if (!STATE.infoLocked) {
                    showCityInfo(city, false);
                }
            });
            
            marker.on('mouseout', () => {
                if (!STATE.infoLocked) {
                    updateDisplay();
                }
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
                showFortInfo(fort, true); // true = lock the info
            });
            
            marker.on('mouseover', () => {
                if (!STATE.infoLocked) {
                    showFortInfo(fort, false);
                }
            });
            
            marker.on('mouseout', () => {
                if (!STATE.infoLocked) {
                    updateDisplay();
                }
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
function updateDefensiveWalls(currentYear) {
    if (!STATE.map) return;
    
    // Clear existing wall layers efficiently
    STATE.wallLayers = utils.removeLayers(STATE.wallLayers, STATE.map);
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
        rhineLine.on('mouseover', () => {
            if (!STATE.infoLocked) showWallInfo('Rhine Limes', -12, 260, false);
        });
        rhineLine.on('mouseout', () => {
            if (!STATE.infoLocked) updateDisplay();
        });
        rhineLine.on('click', () => showWallInfo('Rhine Limes', -12, 260, true));
        STATE.wallLayers.push(rhineLine);
    }
    
    // Danube Limes (10 to 400 CE)
    if (currentYear >= 10 && currentYear <= 400) {
        const danubeLine = L.polyline(danubeLimes, limesStyle).addTo(STATE.map);
        danubeLine.bindTooltip('Danube Limes', { className: 'wall-label', sticky: true });
        danubeLine.on('mouseover', () => {
            if (!STATE.infoLocked) showWallInfo('Danube Limes', 10, 400, false);
        });
        danubeLine.on('mouseout', () => {
            if (!STATE.infoLocked) updateDisplay();
        });
        danubeLine.on('click', () => showWallInfo('Danube Limes', 10, 400, true));
        STATE.wallLayers.push(danubeLine);
    }
    
    // Upper Germanic Limes (85 to 260 CE)
    if (currentYear >= 85 && currentYear <= 260) {
        const germanicLine = L.polyline(germanicLimes, limesStyle).addTo(STATE.map);
        germanicLine.bindTooltip('Upper Germanic Limes', { className: 'wall-label', sticky: true });
        germanicLine.on('mouseover', () => {
            if (!STATE.infoLocked) showWallInfo('Upper Germanic Limes', 85, 260, false);
        });
        germanicLine.on('mouseout', () => {
            if (!STATE.infoLocked) updateDisplay();
        });
        germanicLine.on('click', () => showWallInfo('Upper Germanic Limes', 85, 260, true));
        STATE.wallLayers.push(germanicLine);
    }
    
    // Hadrian's Wall (122 to 410 CE)
    if (currentYear >= 122 && currentYear <= 410) {
        const hadrianLine = L.polyline(hadriansWall, { ...wallStyle, color: '#654321' }).addTo(STATE.map);
        hadrianLine.bindTooltip('Hadrian\'s Wall (122-128 CE)', { className: 'wall-label', sticky: true });
        hadrianLine.on('mouseover', () => {
            if (!STATE.infoLocked) showWallInfo('Hadrian\'s Wall', 122, 410, false);
        });
        hadrianLine.on('mouseout', () => {
            if (!STATE.infoLocked) updateDisplay();
        });
        hadrianLine.on('click', () => showWallInfo('Hadrian\'s Wall', 122, 410, true));
        STATE.wallLayers.push(hadrianLine);
    }
    
    // Antonine Wall (142 to 162 CE)
    if (currentYear >= 142 && currentYear <= 162) {
        const antonineLine = L.polyline(antonineWall, { ...wallStyle, color: '#704214' }).addTo(STATE.map);
        antonineLine.bindTooltip('Antonine Wall (142-162 CE)', { className: 'wall-label', sticky: true });
        antonineLine.on('mouseover', () => {
            if (!STATE.infoLocked) showWallInfo('Antonine Wall', 142, 162, false);
        });
        antonineLine.on('mouseout', () => {
            if (!STATE.infoLocked) updateDisplay();
        });
        antonineLine.on('click', () => showWallInfo('Antonine Wall', 142, 162, true));
        STATE.wallLayers.push(antonineLine);
    }
}

// ============================================
// TERRITORY VISUALIZATION - NEW IMPLEMENTATION
// ============================================

// Initialize the territory layer group (called once during map setup)
function initTerritorySystem() {
    if (!STATE.map) return;
    STATE.territoryLayerGroup = L.layerGroup().addTo(STATE.map);
    STATE.activeTerritories = new Map();
}

// Get detailed coordinates for a territory if available
function getDetailedCoords(territory) {
    if (!territory.type || territory.type !== 'polygon') return territory.coords;
    
    const name = (territory.name || '').toLowerCase().replace(/\s+/g, '');
    
    // Check if we have detailed shapes loaded (try both global and window)
    const shapes = (typeof TERRITORY_SHAPES !== 'undefined') ? TERRITORY_SHAPES : 
                   (typeof window !== 'undefined' && window.TERRITORY_SHAPES) ? window.TERRITORY_SHAPES : null;
    
    if (shapes) {
        const shapeMap = {
            'italia': 'italia', 'italy': 'italia',
            'sicilia': 'sicilia', 'sicily': 'sicilia',
            'sardinia': 'sardinia', 'corsica': 'corsica',
            'latium': 'latium', 'greaterlatium': 'greaterlatium',
            'centralitaly': 'centralitaly',
            'hispania': 'hispania', 'spain': 'hispania',
            'hispaniaciterior': 'hispania',
            'gallia': 'gallia', 'gaul': 'gallia',
            'britannia': 'britannia', 'britain': 'britannia',
            'mauretania': 'mauretania',
            'germaniasuperior': 'germaniasuperior',
            'germania': 'germaniasuperior',
            'germaniainferior': 'germaniainferior',
            'raetia': 'raetia', 'noricum': 'noricum',
            'macedonia': 'macedoniaGreece', 'greece': 'macedoniaGreece',
            'illyricum': 'illyricum', 'dalmatia': 'illyricum',
            'pannonia': 'pannonia', 'dacia': 'dacia',
            'thracia': 'thracia', 'thrace': 'thracia',
            'moesia': 'moesia',
            'crete': 'crete', 'cyprus': 'cyprus',
            'asiaminor': 'asiaMinor', 'asia': 'asiaMinor',
            'anatolia': 'asiaMinor',
            'syria': 'syria', 'mesopotamia': 'mesopotamia',
            'armenia': 'armenia', 'judaea': 'judaea',
            'arabia': 'arabia',
            'aegyptus': 'aegyptus', 'egypt': 'aegyptus',
            'africa': 'africa', 'africaproconsularis': 'africa',
            'cyrenaica': 'cyrenaica'
        };
        
        const shapeKey = shapeMap[name];
        if (shapeKey && shapes[shapeKey]) {
            return shapes[shapeKey];
        }
    }
    
    return territory.coords;
}

// Create a unified multi-polygon layer for all territories in a period
function createUnifiedTerritoryLayer(territories, isNew = false, color = '#DC143C') {
    // Collect all polygon coordinates as an array of arrays (multi-polygon)
    const allPolygons = [];
    
    territories.forEach(territory => {
        if (territory.type === 'polygon') {
            const coords = getDetailedCoords(territory);
            allPolygons.push(coords);
        }
    });
    
    if (allPolygons.length === 0) return null;
    
    // Create a single multi-polygon layer WITHOUT stroke borders
    // This prevents internal yellow lines between overlapping territories
    const layer = L.polygon(allPolygons, {
        fillColor: color,
        fillOpacity: 0.6,
        stroke: false,   // NO BORDER - this removes internal yellow lines
        weight: 0,       // Ensure no stroke weight
        color: 'transparent', // Backup: make stroke color transparent
        smoothFactor: 1.5,
        className: 'territory-layer',
        fillRule: 'nonzero'
    });
    
    return layer;
}

// Get the entry point for a territory based on historical conquest direction
function getConquestEntryPoint(territory) {
    const name = (territory.name || '').toLowerCase().replace(/[\s_-]/g, '');
    
    // Check various name formats in CONQUEST_DIRECTIONS
    const possibleKeys = [
        name,
        name.replace('province', ''),
        territory.name?.toLowerCase()?.replace(/[\s]/g, '_'),
    ];
    
    for (const key of possibleKeys) {
        if (CONQUEST_DIRECTIONS[key]) {
            return CONQUEST_DIRECTIONS[key];
        }
    }
    
    // Default: expand from center of polygon
    const coords = getDetailedCoords(territory);
    if (coords && coords.length > 0) {
        let sumLat = 0, sumLon = 0;
        coords.forEach(c => { sumLat += c[0]; sumLon += c[1]; });
        return {
            entryLat: sumLat / coords.length,
            entryLon: sumLon / coords.length,
            direction: 'center'
        };
    }
    
    return { entryLat: 41.9, entryLon: 12.5, direction: 'center' }; // Rome as default
}

// Calculate distance from entry point to a polygon coordinate
function distanceFromEntry(entryLat, entryLon, lat, lon, direction) {
    // Base distance calculation
    const dLat = lat - entryLat;
    const dLon = lon - entryLon;
    
    // Adjust distance based on conquest direction
    // This creates a "wave" effect that moves in the historical direction
    switch (direction) {
        case 'n': return -dLat + Math.abs(dLon) * 0.3;
        case 's': return dLat + Math.abs(dLon) * 0.3;
        case 'e': return -dLon + Math.abs(dLat) * 0.3;
        case 'w': return dLon + Math.abs(dLat) * 0.3;
        case 'ne': return (-dLat - dLon) / 1.4;
        case 'nw': return (-dLat + dLon) / 1.4;
        case 'se': return (dLat - dLon) / 1.4;
        case 'sw': return (dLat + dLon) / 1.4;
        case 'center':
        default:
            return Math.sqrt(dLat * dLat + dLon * dLon);
    }
}

// Create a single territory layer with water flow animation support
function createSingleTerritoryLayer(territory, entryPoint) {
    const coords = getDetailedCoords(territory);
    if (!coords || coords.length === 0) return null;
    
    const layer = L.polygon(coords, {
        fillColor: '#DC143C',
        fillOpacity: 0,
        stroke: false,
        weight: 0,
        color: 'transparent',
        smoothFactor: 1.5,
        className: 'territory-layer water-flow',
        fillRule: 'nonzero'
    });
    
    // Store entry point for animation
    layer._entryPoint = entryPoint;
    layer._coords = coords;
    
    return layer;
}

// Calculate the bounding box and furthest point from entry for a territory
function getTerritoryAnimationBounds(coords, entryPoint) {
    let maxDist = 0;
    
    coords.forEach(coord => {
        const dist = distanceFromEntry(
            entryPoint.entryLat, entryPoint.entryLon,
            coord[0], coord[1], entryPoint.direction
        );
        maxDist = Math.max(maxDist, dist);
    });
    
    return maxDist;
}

// Smoothly update a territory layer's opacity
function setTerritoryOpacity(layer, fillOpacity) {
    if (!layer) return;
    layer.setStyle({
        fillOpacity: fillOpacity
    });
}

// Easing function for smooth animation
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Update territories for a new time period - the main function
function updateTerritories(territories, year) {
    if (!STATE.map || !STATE.territoryLayerGroup) return;
    
    // For now, we'll treat all territories as "Rome"
    // In the future, we'll split this by empire ID
    updateEmpireTerritories('rome', territories, year);
}

// Update territories for a specific empire
function updateEmpireTerritories(empireId, territories, year) {
    const empire = CIVILIZATIONS[empireId];
    if (!empire) return;
    
    // Clear existing layer for this empire if it exists
    // Note: In a more advanced version, we would diff and animate
    // For now, we'll use the existing unified layer approach but scoped to the empire
    
    // Create unified layer
    const layer = createUnifiedTerritoryLayer(territories, false, empire.color);
    
    // Remove old layer
    if (STATE.empireLayers[empireId]) {
        STATE.territoryLayerGroup.removeLayer(STATE.empireLayers[empireId]);
    }
    
    // Add new layer
    if (layer) {
        STATE.empireLayers[empireId] = layer;
        STATE.territoryLayerGroup.addLayer(layer);
        
        // Add interaction
        layer.bindTooltip(`${empire.name} (${formatYear(year)})`, {
            className: 'territory-label',
            sticky: true
        });
    }
}

// Find territories that are new in this period (not in previous period)
function findNewTerritories(oldTerritories, newTerritories) {
    const oldNames = new Set(oldTerritories.map(t => (t.name || '').toLowerCase().replace(/[\s_-]/g, '')));
    return newTerritories.filter(t => {
        const name = (t.name || '').toLowerCase().replace(/[\s_-]/g, '');
        return !oldNames.has(name);
    });
}

// Find territories that exist in both periods (continuing)
function findContinuingTerritories(oldTerritories, newTerritories) {
    const oldNames = new Set(oldTerritories.map(t => (t.name || '').toLowerCase().replace(/[\s_-]/g, '')));
    return newTerritories.filter(t => {
        const name = (t.name || '').toLowerCase().replace(/[\s_-]/g, '');
        return oldNames.has(name);
    });
}

// Animate transition between periods with water flow effect for new territories
function animateUnifiedTransition(previousData, newTerritories, currentData, newKey, previousKey) {
    const duration = getTransitionDuration();
    const startTime = performance.now();
    
    const oldTerritories = previousData ? previousData.territories : [];
    const oldLayer = previousData ? previousData.layer : null;
    
    // Separate new territories from continuing ones
    const newlyConquered = findNewTerritories(oldTerritories, newTerritories);
    const continuing = findContinuingTerritories(oldTerritories, newTerritories);
    
    // Create layer for continuing territories (simple fade)
    const continuingLayer = continuing.length > 0 ? createUnifiedTerritoryLayer(continuing, false) : null;
    if (continuingLayer) {
        continuingLayer.addTo(STATE.territoryLayerGroup);
        setTerritoryOpacity(continuingLayer, 0); // Start invisible
    }
    
    // Create individual layers for new territories (water flow animation)
    const newTerritoryLayers = [];
    const newTerritoryData = [];
    
    newlyConquered.forEach(territory => {
        if (territory.type === 'polygon') {
            const entryPoint = getConquestEntryPoint(territory);
            const coords = getDetailedCoords(territory);
            
            // Calculate the max distance for this territory
            const maxDist = getTerritoryAnimationBounds(coords, entryPoint);
            
            const layer = createSingleTerritoryLayer(territory, entryPoint);
            if (layer) {
                layer.addTo(STATE.territoryLayerGroup);
                newTerritoryLayers.push(layer);
                newTerritoryData.push({
                    layer,
                    entryPoint,
                    coords,
                    maxDist
                });
            }
        }
    });
    
    // Also create the final unified layer (starts hidden, shown at end)
    const finalLayer = createUnifiedTerritoryLayer(newTerritories, false);
    
    STATE.transitionInProgress = true;
    
    function animationFrame(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / duration);
        const easedProgress = easeInOutCubic(progress);
        
        // Fade out old layer
        if (oldLayer) {
            setTerritoryOpacity(oldLayer, 0.45 * (1 - easedProgress));
        }
        
        // Fade in continuing territories (simple fade)
        if (continuingLayer) {
            setTerritoryOpacity(continuingLayer, 0.45 * easedProgress);
        }
        
        // Water flow animation for newly conquered territories
        // The fill expands from the entry point like water flowing
        newTerritoryData.forEach(data => {
            const { layer, entryPoint, coords, maxDist } = data;
            
            // Calculate how far the "water" has spread based on progress
            const currentReach = maxDist * easedProgress;
            
            // Calculate a weighted opacity based on how much of the territory
            // is within the current "water reach"
            let coveredPoints = 0;
            coords.forEach(coord => {
                const dist = distanceFromEntry(
                    entryPoint.entryLat, entryPoint.entryLon,
                    coord[0], coord[1], entryPoint.direction
                );
                if (dist <= currentReach) {
                    coveredPoints++;
                }
            });
            
            // Opacity increases as more of the territory is "reached" by water
            const coverageRatio = coveredPoints / coords.length;
            
            // Use a gradual fill that follows the water flow
            // Early in animation: low opacity, growing from entry point
            // Late in animation: full opacity across whole territory
            const fillOpacity = 0.45 * coverageRatio * easedProgress;
            
            setTerritoryOpacity(layer, Math.min(0.5, fillOpacity + 0.1 * easedProgress));
        });
        
        if (progress < 1) {
            requestAnimationFrame(animationFrame);
        } else {
            // Animation complete - clean up and show final unified layer
            STATE.transitionInProgress = false;
            
            // Remove individual animation layers
            newTerritoryLayers.forEach(layer => {
                STATE.territoryLayerGroup.removeLayer(layer);
            });
            
            // Remove continuing layer
            if (continuingLayer) {
                STATE.territoryLayerGroup.removeLayer(continuingLayer);
            }
            
            // Remove old layer
            if (oldLayer) {
                STATE.territoryLayerGroup.removeLayer(oldLayer);
            }
            
            // Show final unified layer
            if (finalLayer) {
                finalLayer.addTo(STATE.territoryLayerGroup);
                setTerritoryOpacity(finalLayer, 0.45);
                finalLayer.setStyle({ fillColor: '#8B0000' });
                addUnifiedTerritoryInteraction(finalLayer, currentData);
                STATE.activeTerritories.set(newKey, { layer: finalLayer, territories: newTerritories });
            }
            
            // Clean up old state
            if (previousKey) {
                STATE.activeTerritories.delete(previousKey);
            }
        }
    }
    
    requestAnimationFrame(animationFrame);
}

// Get transition duration based on speed setting
function getTransitionDuration() {
    const durations = { 1: 2500, 2: 2000, 3: 1500, 4: 1000, 5: 600 };
    return durations[STATE.animationSpeed] || 1500;
}

// Add mouse/touch interaction to unified territory layer
function addUnifiedTerritoryInteraction(layer, periodData) {
    layer.on('mouseover', (e) => {
        if (!STATE.infoLocked) {
            const latlng = e.latlng;
            showTerritoryInfo(periodData, false, latlng.lat, latlng.lng, false);
        }
        // Highlight on hover - slightly increase opacity
        layer.setStyle({ fillOpacity: 0.55 });
    });
    
    layer.on('mouseout', () => {
        if (!STATE.infoLocked) {
            updateDisplay();
        }
        layer.setStyle({ fillOpacity: 0.45 });
    });
    
    layer.on('click', (e) => {
        const latlng = e.latlng;
        showTerritoryInfo(periodData, false, latlng.lat, latlng.lng, true);
    });
}

// Clear all territories (used on reset)
function clearAllTerritories() {
    if (STATE.territoryLayerGroup) {
        STATE.territoryLayerGroup.clearLayers();
    }
    STATE.activeTerritories.clear();
    STATE.transitionInProgress = false;
}

// Main draw function called when period changes
// DEPRECATED - Use updateDisplay() instead
function drawTerritories() {
    // Legacy function removed to prevent errors
}

// ============================================
// EDUCATIONAL FEATURES
// ============================================
function setupEducationalFeatures() {
    // Educational content toggle
    const eduToggle = document.getElementById('eduToggle');
    const eduContent = document.getElementById('eduContent');
    
    if (eduToggle && eduContent) {
        eduToggle.addEventListener('click', () => {
            STATE.eduExpanded = !STATE.eduExpanded;
            eduContent.hidden = !STATE.eduExpanded;
            eduToggle.setAttribute('aria-expanded', STATE.eduExpanded);
            
            if (STATE.eduExpanded) {
                updateEducationalContent();
            }
        });
    }
    
    // Quick facts button
    const quickFactsBtn = document.getElementById('quickFactsBtn');
    if (quickFactsBtn) {
        quickFactsBtn.addEventListener('click', showRandomFact);
    }
    
    // Quiz functionality
    const quizClose = document.getElementById('quizClose');
    const quizNext = document.getElementById('quizNext');
    
    if (quizClose) {
        quizClose.addEventListener('click', closeQuiz);
    }
    
    if (quizNext) {
        quizNext.addEventListener('click', nextQuizQuestion);
    }
    
    // Add quiz trigger (double-tap on mobile, long press on desktop)
    const infoPanel = document.querySelector('.info-panel');
    if (infoPanel && STATE.isMobile) {
        let tapCount = 0;
        let tapTimer;
        
        infoPanel.addEventListener('click', () => {
            tapCount++;
            if (tapCount === 1) {
                tapTimer = setTimeout(() => {
                    tapCount = 0;
                }, 300);
            } else if (tapCount === 2) {
                clearTimeout(tapTimer);
                tapCount = 0;
                startQuiz();
            }
        });
    }
}

function updateEducationalContent() {
    const currentYear = STATE.currentYear;
    
    // Find closest educational data
    let closestYear = -Infinity;
    let eduData = null;
    
    for (const dataYearStr in EDUCATIONAL_DATA) {
        const dataYear = parseInt(dataYearStr);
        if (dataYear <= currentYear && dataYear > closestYear) {
            closestYear = dataYear;
            eduData = EDUCATIONAL_DATA[dataYearStr];
        }
    }
    
    const factsElement = document.getElementById('eduFacts');
    const figuresElement = document.getElementById('figuresText');
    
    if (eduData && factsElement) {
        factsElement.innerHTML = eduData.facts.map(fact => `<li>${fact}</li>`).join('');
        
        if (figuresElement && eduData.figures) {
            figuresElement.textContent = eduData.figures.join(' • ');
        }
    } else if (factsElement) {
        factsElement.innerHTML = '<li>Explore this period by clicking on cities, territories, and fortifications on the map!</li>';
        if (figuresElement) {
            figuresElement.textContent = 'Click cities and forts for more details.';
        }
    }
}

function showRandomFact() {
    const currentYear = STATE.currentYear;
    
    // Find closest educational data
    let closestYear = -Infinity;
    let eduData = null;
    
    for (const dataYearStr in EDUCATIONAL_DATA) {
        const dataYear = parseInt(dataYearStr);
        if (dataYear <= currentYear && dataYear > closestYear) {
            closestYear = dataYear;
            eduData = EDUCATIONAL_DATA[dataYearStr];
        }
    }
    
    if (eduData && eduData.facts && eduData.facts.length > 0) {
        const randomFact = eduData.facts[Math.floor(Math.random() * eduData.facts.length)];
        
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'fact-toast';
        toast.innerHTML = `<strong>💡 Did you know?</strong><br>${randomFact}`;
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
}

function startQuiz() {
    STATE.quizIndex = 0;
    STATE.quizScore = 0;
    const quizPanel = document.getElementById('quizPanel');
    if (quizPanel) {
        quizPanel.hidden = false;
        loadQuizQuestion();
    }
}

function loadQuizQuestion() {
    if (STATE.quizIndex >= QUIZ_QUESTIONS.length) {
        showQuizResults();
        return;
    }
    
    const question = QUIZ_QUESTIONS[STATE.quizIndex];
    const questionElement = document.getElementById('quizQuestion');
    const optionsElement = document.getElementById('quizOptions');
    const nextBtn = document.getElementById('quizNext');
    
    if (questionElement) questionElement.textContent = question.question;
    if (nextBtn) nextBtn.hidden = true;
    
    if (optionsElement) {
        optionsElement.innerHTML = question.options.map((option, index) => 
            `<button class="quiz-option" data-index="${index}">${option}</button>`
        ).join('');
        
        // Add click handlers
        optionsElement.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => checkAnswer(parseInt(btn.dataset.index)));
        });
    }
}

function checkAnswer(selectedIndex) {
    const question = QUIZ_QUESTIONS[STATE.quizIndex];
    const optionsElement = document.getElementById('quizOptions');
    const nextBtn = document.getElementById('quizNext');
    
    if (optionsElement) {
        const buttons = optionsElement.querySelectorAll('.quiz-option');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex) {
                btn.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            STATE.quizScore++;
        }
        
        // Show explanation
        const explanation = document.createElement('p');
        explanation.className = 'quiz-explanation';
        explanation.textContent = question.explanation;
        optionsElement.appendChild(explanation);
    }
    
    if (nextBtn) nextBtn.hidden = false;
}

function nextQuizQuestion() {
    STATE.quizIndex++;
    loadQuizQuestion();
}

function showQuizResults() {
    const questionElement = document.getElementById('quizQuestion');
    const optionsElement = document.getElementById('quizOptions');
    const nextBtn = document.getElementById('quizNext');
    
    const percentage = Math.round((STATE.quizScore / QUIZ_QUESTIONS.length) * 100);
    let message = '';
    
    if (percentage >= 80) {
        message = '🏆 Excellent! You\'re a Roman history expert!';
    } else if (percentage >= 60) {
        message = '👍 Good job! You know your Roman history!';
    } else {
        message = '📚 Keep exploring to learn more about Rome!';
    }
    
    if (questionElement) {
        questionElement.innerHTML = `<strong>${message}</strong><br>Score: ${STATE.quizScore}/${QUIZ_QUESTIONS.length} (${percentage}%)`;
    }
    
    if (optionsElement) {
        optionsElement.innerHTML = '<button class="quiz-option" onclick="startQuiz()">Try Again</button>';
    }
    
    if (nextBtn) nextBtn.hidden = true;
}

function closeQuiz() {
    const quizPanel = document.getElementById('quizPanel');
    if (quizPanel) quizPanel.hidden = true;
}

// ============================================
// UI UPDATES
// ============================================
function updateDisplay(forceUpdate = false) {
    // Don't update if info is locked unless forced
    if (STATE.infoLocked && !forceUpdate) return;
    
    const data = historicalData[STATE.currentIndex];
    if (!data) return;
    
    const year = Math.abs(data.year);
    const era = data.year < 0 ? 'BCE' : 'CE';
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    if (!yearElement || !eraElement || !nameElement || !descElement) return;
    
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
        
        // Update educational content if expanded
        if (STATE.eduExpanded) {
            updateEducationalContent();
        }
    }, 150);
}

// Helper function to lock info panel content
function lockInfoPanel(content) {
    STATE.infoLocked = true;
    STATE.lockedContent = content;
    
    // Add visual indicator that info is locked
    const infoPanel = document.querySelector('.info-panel');
    if (infoPanel) {
        infoPanel.classList.add('info-locked');
        
        // Add unlock hint if not already present
        if (!infoPanel.querySelector('.unlock-hint')) {
            const hint = document.createElement('div');
            hint.className = 'unlock-hint';
            hint.innerHTML = '📌 Click anywhere to unlock and return to timeline';
            hint.addEventListener('click', unlockInfoPanel);
            infoPanel.insertBefore(hint, infoPanel.firstChild);
        }
    }
}

// Helper function to unlock info panel
function unlockInfoPanel() {
    STATE.infoLocked = false;
    STATE.lockedContent = null;
    
    const infoPanel = document.querySelector('.info-panel');
    if (infoPanel) {
        infoPanel.classList.remove('info-locked');
        
        // Remove unlock hint
        const hint = infoPanel.querySelector('.unlock-hint');
        if (hint) hint.remove();
    }
    
    // Restore current period display
    updateDisplay(true);
}

function showCityInfo(city, isClick = false) {
    // If it's a click, lock the info panel
    if (isClick) {
        lockInfoPanel({ type: 'city', data: city });
    }
    
    // Don't update if locked to different content
    if (STATE.infoLocked && STATE.lockedContent?.data !== city) return;
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    const { year, era } = utils.formatYear(city.year);
    utils.updateDisplayElements(
        yearElement, eraElement, nameElement, descElement,
        year, era, city.name, city.description
    );
}

function showFortInfo(fort, isClick = false) {
    // If it's a click, lock the info panel
    if (isClick) {
        lockInfoPanel({ type: 'fort', data: fort });
    }
    
    // Don't update if locked to different content
    if (STATE.infoLocked && STATE.lockedContent?.data !== fort) return;
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    if (!yearElement || !eraElement || !nameElement || !descElement) return;
    
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

function showWallInfo(wallName, startYear, endYear, isClick = false) {
    // If it's a click, lock the info panel
    if (isClick) {
        lockInfoPanel({ type: 'wall', data: { wallName, startYear, endYear } });
    }
    
    // Don't update if locked to different content
    if (STATE.infoLocked && STATE.lockedContent?.data?.wallName !== wallName) return;
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    if (!yearElement || !eraElement || !nameElement || !descElement) return;
    
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

function showTerritoryInfo(periodData, isNewExpansion, lat, lon, isClick = false) {
    const regionName = getRegionName(lat, lon);
    
    // If it's a click, lock the info panel
    if (isClick) {
        lockInfoPanel({ type: 'territory', data: { periodData, isNewExpansion, lat, lon, regionName } });
    }
    
    // Don't update if locked to different content
    if (STATE.infoLocked && STATE.lockedContent?.data?.regionName !== regionName) return;
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    if (!yearElement || !eraElement || !nameElement || !descElement) return;
    
    const year = Math.abs(periodData.year);
    const era = periodData.year < 0 ? 'BCE' : 'CE';
    
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
    if (STATE.isPlaying) return; // Don't allow manual changes during playback
    
    const value = parseInt(e.target.value);
    STATE.currentIndex = Math.floor((value / 100) * (historicalData.length - 1));
    e.target.setAttribute('aria-valuenow', value);
    
    // For manual timeline changes, clear and redraw instantly
    clearAllTerritories();
    updateDisplay();
    drawTerritories();
}

function handleSpeedChange(e) {
    const speed = parseInt(e.target.value);
    STATE.animationSpeed = speed;
    STATE.updateInterval = SPEED_MAP[speed];
    e.target.setAttribute('aria-valuenow', speed);
}

// ============================================
// ANIMATION CONTROL
// ============================================
function togglePlay() {
    STATE.isPlaying = !STATE.isPlaying;
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const playBtn = document.getElementById('playBtn');
    
    if (!playBtn) return;
    
    if (STATE.isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'inline';
        playBtn.classList.add('playing');
        playBtn.setAttribute('aria-pressed', 'true');
        playBtn.setAttribute('aria-label', 'Pause animation');
        animate();
    } else {
        if (playIcon) playIcon.style.display = 'inline';
        if (pauseIcon) pauseIcon.style.display = 'none';
        playBtn.classList.remove('playing');
        playBtn.setAttribute('aria-pressed', 'false');
        playBtn.setAttribute('aria-label', 'Play animation');
        if (STATE.animationId) {
            cancelAnimationFrame(STATE.animationId);
            STATE.animationId = null;
        }
    }
}

function animate(timestamp = 0) {
    if (!STATE.isPlaying) return;
    
    // Wait for territory transition to complete before advancing
    if (STATE.transitionInProgress) {
        STATE.animationId = requestAnimationFrame(animate);
        return;
    }
    
    // Calculate elapsed time for smooth frame-independent animation
    const elapsed = timestamp - STATE.lastUpdateTime;
    
    // Add transition duration to the update interval
    const totalInterval = STATE.updateInterval + STATE.transitionDuration;
    
    if (elapsed >= totalInterval) {
        STATE.currentIndex++;
        
        // Check if we've reached the end
        if (STATE.currentIndex >= historicalData.length) {
            STATE.currentIndex = historicalData.length - 1;
            togglePlay();
            return;
        }
        
        // Update display and territories synchronously
        updateDisplay();
        drawTerritories();
        updateTimelineSlider();
        
        STATE.lastUpdateTime = timestamp;
    }
    
    STATE.animationId = requestAnimationFrame(animate);
}

function reset() {
    if (STATE.isPlaying) {
        togglePlay();
    }
    STATE.currentIndex = 0;
    clearAllTerritories();  // Clear all territories before redrawing
    updateDisplay();
    drawTerritories();
    updateTimelineSlider();
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

// ============================================
// PWA OFFLINE DETECTION
// ============================================
function setupOfflineDetection() {
    function updateOnlineStatus() {
        if (navigator.onLine) {
            document.body.classList.remove('offline');
            console.log('✅ Back online');
        } else {
            document.body.classList.add('offline');
            console.log('📵 Offline mode - using cached data');
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Initial check
    updateOnlineStatus();
}

// ============================================
// PWA INSTALLATION AND UPDATES
// ============================================
function setupPWAFeatures() {
    // Check if running as installed PWA
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
                      || window.navigator.standalone 
                      || document.referrer.includes('android-app://');
    
    if (isStandalone) {
        console.log('✅ Running as installed PWA');
        document.body.classList.add('pwa-standalone');
    }
    
    // Setup offline detection
    setupOfflineDetection();
    
    // Save state to localStorage for offline access
    function saveAppState() {
        try {
            const appState = {
                currentIndex: STATE.currentIndex,
                quizScore: STATE.quizScore,
                quizAnswered: STATE.quizAnswered,
                timestamp: Date.now()
            };
            localStorage.setItem('romanEmpireState', JSON.stringify(appState));
        } catch (error) {
            console.warn('Could not save app state:', error);
        }
    }
    
    // Restore state on load
    function restoreAppState() {
        try {
            const savedState = localStorage.getItem('romanEmpireState');
            if (savedState) {
                const appState = JSON.parse(savedState);
                // Only restore if less than 24 hours old
                if (Date.now() - appState.timestamp < 24 * 60 * 60 * 1000) {
                    STATE.currentIndex = appState.currentIndex || 0;
                    STATE.quizScore = appState.quizScore || 0;
                    STATE.quizAnswered = appState.quizAnswered || 0;
                    console.log('✅ Restored previous session');
                }
            }
        } catch (error) {
            console.warn('Could not restore app state:', error);
        }
    }
    
    // Save state periodically and on visibility change
    setInterval(saveAppState, 30000); // Every 30 seconds
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            saveAppState();
        }
    });
    
    // Restore state on init
    restoreAppState();
}

function initApp() {
    // Setup PWA features first
    setupPWAFeatures();
    
    // Then initialize the main app
    init();
    
    // Make year display draggable (but not the timeline)
    const yearDisplay = document.getElementById('yearDisplay');
    
    if (yearDisplay) makeDraggable(yearDisplay);
}
