// ============================================
// CHRONOS - WORLD HISTORY ATLAS
// ============================================

// Configuration
const MIN_YEAR = -3000;
const MAX_YEAR = 2025;
const DEFAULT_YEAR = -753;

// Civilization Definitions
const CIVILIZATIONS = {
    // Ancient Near East
    sumer: {
        id: 'sumer',
        name: 'Sumerian City-States',
        color: '#87CEEB', // Sky Blue
        textColor: '#000000'
    },
    akkad: {
        id: 'akkad',
        name: 'Akkadian Empire',
        color: '#8B4513', // Saddle Brown
        textColor: '#FFFFFF'
    },
    babylon: {
        id: 'babylon',
        name: 'Babylonian Empire',
        color: '#4B0082', // Indigo
        textColor: '#FFFFFF'
    },
    assyria: {
        id: 'assyria',
        name: 'Assyrian Empire',
        color: '#800000', // Maroon
        textColor: '#FFFFFF'
    },
    hittites: {
        id: 'hittites',
        name: 'Hittite Empire',
        color: '#CD853F', // Peru
        textColor: '#000000'
    },
    
    // Egypt
    egypt: {
        id: 'egypt',
        name: 'Ancient Egypt',
        color: '#FFD700', // Gold
        textColor: '#000000'
    },
    
    // Persia & Successors
    persia: {
        id: 'persia',
        name: 'Achaemenid Persian Empire',
        color: '#228B22', // Forest Green
        textColor: '#FFFFFF'
    },
    parthia: {
        id: 'parthia',
        name: 'Parthian Empire',
        color: '#2E8B57', // Sea Green
        textColor: '#FFFFFF'
    },
    sassanid: {
        id: 'sassanid',
        name: 'Sassanid Persian Empire',
        color: '#006400', // Dark Green
        textColor: '#FFFFFF'
    },
    
    // Greek World
    greece: {
        id: 'greece',
        name: 'Greek City-States',
        color: '#4169E1', // Royal Blue
        textColor: '#FFFFFF'
    },
    macedon: {
        id: 'macedon',
        name: 'Macedonian Empire',
        color: '#FF8C00', // Dark Orange
        textColor: '#000000'
    },
    seleucid: {
        id: 'seleucid',
        name: 'Seleucid Empire',
        color: '#9ACD32', // Yellow Green
        textColor: '#000000'
    },
    ptolemaic: {
        id: 'ptolemaic',
        name: 'Ptolemaic Kingdom',
        color: '#DAA520', // Goldenrod
        textColor: '#000000'
    },
    
    // Mediterranean
    carthage: {
        id: 'carthage',
        name: 'Carthaginian Empire',
        color: '#800080', // Purple
        textColor: '#FFFFFF'
    },
    rome: {
        id: 'rome',
        name: 'Roman Empire',
        color: '#DC143C', // Crimson
        textColor: '#FFFFFF'
    },
    byzantine: {
        id: 'byzantine',
        name: 'Byzantine Empire',
        color: '#9400D3', // Dark Violet
        textColor: '#FFFFFF'
    },
    
    // Medieval & Early Modern
    vikings: {
        id: 'vikings',
        name: 'Viking Age Scandinavia',
        color: '#2F4F4F', // Dark Slate Gray
        textColor: '#FFFFFF'
    },
    frankish: {
        id: 'frankish',
        name: 'Frankish/Carolingian Empire',
        color: '#9932CC', // Dark Orchid - more visible
        textColor: '#FFFFFF'
    },
    west_francia: {
        id: 'west_francia',
        name: 'West Francia (France)',
        color: '#0055A4', // French Blue
        textColor: '#FFFFFF'
    },
    east_francia: {
        id: 'east_francia',
        name: 'East Francia (Germany)',
        color: '#FFCC00', // German Gold
        textColor: '#000000'
    },
    lotharingia: {
        id: 'lotharingia',
        name: 'Middle Francia/Lotharingia',
        color: '#FF6B6B', // Coral
        textColor: '#000000'
    },
    hre: {
        id: 'hre',
        name: 'Holy Roman Empire',
        color: '#FFD700', // Gold
        textColor: '#000000'
    },
    ottoman: {
        id: 'ottoman',
        name: 'Ottoman Empire',
        color: '#FF4500', // Orange Red
        textColor: '#FFFFFF'
    },
    mongol: {
        id: 'mongol',
        name: 'Mongol Empire',
        color: '#708090', // Slate Gray
        textColor: '#FFFFFF'
    },
    habsburg: {
        id: 'habsburg',
        name: 'Austrian Habsburg Empire',
        color: '#FFD700', // Gold (Austrian)
        textColor: '#000000'
    },
    
    // Asian Empires
    han: {
        id: 'han',
        name: 'Han Dynasty',
        color: '#FF6347', // Tomato
        textColor: '#FFFFFF'
    },
    tang: {
        id: 'tang',
        name: 'Tang Dynasty',
        color: '#FF4500', // Orange Red
        textColor: '#FFFFFF'
    },
    ming: {
        id: 'ming',
        name: 'Ming Dynasty',
        color: '#B22222', // Fire Brick
        textColor: '#FFFFFF'
    },
    qing: {
        id: 'qing',
        name: 'Qing Dynasty',
        color: '#8B0000', // Dark Red
        textColor: '#FFFFFF'
    },
    mughal: {
        id: 'mughal',
        name: 'Mughal Empire',
        color: '#32CD32', // Lime Green
        textColor: '#000000'
    },
    
    // Pre-Columbian Americas
    maya: {
        id: 'maya',
        name: 'Maya Civilization',
        color: '#228B22', // Forest Green
        textColor: '#FFFFFF'
    },
    aztec: {
        id: 'aztec',
        name: 'Aztec Empire',
        color: '#8B4513', // Saddle Brown
        textColor: '#FFFFFF'
    },
    inca: {
        id: 'inca',
        name: 'Inca Empire',
        color: '#DAA520', // Goldenrod
        textColor: '#000000'
    },
    
    // Islamic Caliphates
    umayyad: {
        id: 'umayyad',
        name: 'Umayyad Caliphate',
        color: '#006633', // Islamic Green
        textColor: '#FFFFFF'
    },
    abbasid: {
        id: 'abbasid',
        name: 'Abbasid Caliphate',
        color: '#000000', // Black (Abbasid color)
        textColor: '#FFFFFF'
    },
    
    // African Empires
    mali: {
        id: 'mali',
        name: 'Mali Empire',
        color: '#FFA500', // Orange
        textColor: '#000000'
    },
    
    // Southeast Asian
    khmer: {
        id: 'khmer',
        name: 'Khmer Empire',
        color: '#800020', // Burgundy
        textColor: '#FFFFFF'
    },
    
    // United Habsburg (before 1556 split)
    habsburg_united: {
        id: 'habsburg_united',
        name: 'Habsburg Empire (United)',
        color: '#FFD700', // Gold
        textColor: '#000000'
    },
    
    // Colonial & Modern
    spanish: {
        id: 'spanish',
        name: 'Spanish Empire',
        color: '#FF0000', // Red
        textColor: '#FFFFFF'
    },
    british: {
        id: 'british',
        name: 'British Empire',
        color: '#C41E3A', // Cardinal
        textColor: '#FFFFFF'
    },
    french: {
        id: 'french',
        name: 'French Empire',
        color: '#0055A4', // French Blue
        textColor: '#FFFFFF'
    },
    russian: {
        id: 'russian',
        name: 'Russian Empire',
        color: '#1E90FF', // Dodger Blue
        textColor: '#FFFFFF'
    },
    
    // World Wars
    german_ww1: {
        id: 'german_ww1',
        name: 'German Empire (WW1)',
        color: '#2F2F2F', // Dark Gray
        textColor: '#FFFFFF'
    },
    nazi_germany: {
        id: 'nazi_germany',
        name: 'Nazi Germany (WW2)',
        color: '#333333', // Darker Gray
        textColor: '#FFFFFF'
    },
    imperial_japan: {
        id: 'imperial_japan',
        name: 'Imperial Japan',
        color: '#BC002D', // Japan Red
        textColor: '#FFFFFF'
    },
    soviet_union: {
        id: 'soviet_union',
        name: 'Soviet Union',
        color: '#CC0000', // Soviet Red
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
// WORLD EMPIRES DATA
// ============================================
// Each empire has time periods with territory polygons
const WORLD_EMPIRES = {
    // Ancient Egypt - 3100 BCE to 30 BCE
    egypt: {
        name: 'Ancient Egypt',
        periods: [
            {
                startYear: -3100,
                endYear: -2181,
                name: 'Old Kingdom Egypt',
                territories: [[
                    [31.5, 29.5], [31.2, 32.5], [30.0, 32.8], [29.5, 32.5],
                    [27.0, 33.5], [24.0, 33.0], [22.0, 31.5], [24.0, 31.0],
                    [27.0, 30.5], [29.5, 30.0], [30.5, 29.0], [31.5, 29.5]
                ]]
            },
            {
                startYear: -2055,
                endYear: -1650,
                name: 'Middle Kingdom Egypt',
                territories: [[
                    [31.5, 29.5], [31.2, 32.5], [30.0, 33.0], [29.0, 33.5],
                    [26.0, 34.0], [22.0, 33.0], [20.0, 31.0], [22.0, 30.0],
                    [26.0, 30.0], [29.5, 29.5], [30.5, 28.5], [31.5, 29.5]
                ]]
            },
            {
                startYear: -1550,
                endYear: -1077,
                name: 'New Kingdom Egypt',
                territories: [[
                    [31.8, 28.0], [31.5, 34.0], [33.0, 35.5], [35.0, 36.0],
                    [33.5, 38.0], [31.0, 35.0], [29.0, 34.5], [26.0, 35.0],
                    [22.0, 34.0], [18.0, 32.0], [20.0, 30.0], [24.0, 29.0],
                    [28.0, 28.0], [30.5, 27.5], [31.8, 28.0]
                ]]
            },
            {
                startYear: -1076,
                endYear: -30,
                name: 'Late Period Egypt',
                territories: [[
                    [31.5, 29.0], [31.2, 32.5], [30.0, 33.0], [28.0, 33.5],
                    [24.0, 33.0], [22.0, 32.0], [24.0, 30.5], [28.0, 29.5],
                    [30.5, 28.5], [31.5, 29.0]
                ]]
            }
        ]
    },
    
    // Sumerian City-States - 3500 BCE to 2004 BCE
    sumer: {
        name: 'Sumerian City-States',
        periods: [
            {
                startYear: -3500,
                endYear: -2334,
                name: 'Sumerian City-States',
                territories: [[
                    [33.5, 44.0], [33.0, 46.5], [31.5, 47.5], [30.5, 47.0],
                    [30.0, 45.5], [31.0, 44.0], [32.5, 43.5], [33.5, 44.0]
                ]]
            }
        ]
    },
    
    // Akkadian Empire - 2334 BCE to 2154 BCE
    akkad: {
        name: 'Akkadian Empire',
        periods: [
            {
                startYear: -2334,
                endYear: -2154,
                name: 'Akkadian Empire of Sargon',
                territories: [[
                    [37.0, 42.0], [36.5, 44.0], [35.0, 46.0], [33.5, 47.5],
                    [31.0, 48.0], [29.5, 47.0], [29.0, 45.0], [30.0, 43.0],
                    [32.0, 41.0], [34.0, 40.0], [36.0, 40.5], [37.0, 42.0]
                ]]
            }
        ]
    },
    
    // Babylonian Empires
    babylon: {
        name: 'Babylonian Empire',
        periods: [
            {
                startYear: -1894,
                endYear: -1595,
                name: 'Old Babylonian Empire (Hammurabi)',
                territories: [[
                    [35.5, 42.0], [35.0, 45.0], [33.5, 46.5], [32.0, 47.5],
                    [30.5, 47.0], [30.0, 45.0], [31.0, 43.0], [33.0, 41.5],
                    [35.5, 42.0]
                ]]
            },
            {
                startYear: -626,
                endYear: -539,
                name: 'Neo-Babylonian Empire',
                territories: [[
                    [37.0, 40.0], [36.0, 44.0], [35.0, 46.5], [33.0, 48.0],
                    [30.5, 48.5], [29.0, 47.0], [28.5, 44.0], [30.0, 41.0],
                    [32.0, 38.5], [34.5, 36.0], [36.0, 36.0], [37.5, 38.0],
                    [37.0, 40.0]
                ]]
            }
        ]
    },
    
    // Assyrian Empire
    assyria: {
        name: 'Assyrian Empire',
        periods: [
            {
                startYear: -911,
                endYear: -609,
                name: 'Neo-Assyrian Empire',
                territories: [[
                    [40.0, 38.0], [39.0, 44.0], [37.0, 46.0], [35.0, 48.0],
                    [33.0, 48.5], [31.0, 48.0], [29.5, 46.0], [29.0, 43.0],
                    [30.0, 40.0], [31.5, 35.0], [33.0, 32.0], [31.0, 30.0],
                    [32.5, 34.0], [35.0, 36.0], [37.5, 36.5], [40.0, 38.0]
                ]]
            }
        ]
    },
    
    // Hittite Empire
    hittites: {
        name: 'Hittite Empire',
        periods: [
            {
                startYear: -1600,
                endYear: -1178,
                name: 'Hittite Empire',
                territories: [[
                    [42.0, 32.0], [41.0, 35.0], [39.5, 37.0], [38.0, 38.5],
                    [36.5, 38.0], [35.5, 36.0], [36.0, 33.0], [37.5, 30.0],
                    [39.0, 29.0], [41.0, 30.0], [42.0, 32.0]
                ]]
            }
        ]
    },
    
    // Achaemenid Persian Empire - 550 BCE to 330 BCE
    persia: {
        name: 'Achaemenid Persian Empire',
        periods: [
            {
                startYear: -550,
                endYear: -330,
                name: 'Achaemenid Persian Empire',
                territories: [[
                    [42.0, 28.0], [41.0, 35.0], [40.0, 44.0], [38.0, 52.0],
                    [35.0, 60.0], [32.0, 66.0], [28.0, 68.0], [25.0, 62.0],
                    [24.0, 55.0], [26.0, 50.0], [28.0, 46.0], [31.5, 48.0],
                    [29.0, 44.0], [27.0, 36.0], [30.0, 32.0], [31.5, 30.0],
                    [36.0, 28.0], [38.0, 26.0], [40.0, 27.0], [42.0, 28.0]
                ]]
            }
        ]
    },
    
    // Greek City-States
    greece: {
        name: 'Greek City-States',
        periods: [
            {
                startYear: -800,
                endYear: -338,
                name: 'Classical Greek City-States',
                territories: [[
                    [41.5, 19.5], [40.5, 23.0], [39.0, 26.0], [37.5, 27.0],
                    [36.0, 28.0], [35.0, 26.0], [36.5, 23.0], [37.0, 21.0],
                    [38.5, 20.0], [40.0, 19.5], [41.5, 19.5]
                ]]
            }
        ]
    },
    
    // Macedonian Empire (Alexander the Great)
    macedon: {
        name: 'Macedonian Empire',
        periods: [
            {
                startYear: -336,
                endYear: -323,
                name: "Alexander's Empire",
                territories: [[
                    [43.0, 20.0], [42.0, 28.0], [40.0, 35.0], [38.0, 44.0],
                    [35.0, 52.0], [32.0, 62.0], [30.0, 70.0], [28.0, 72.0],
                    [25.0, 68.0], [24.0, 60.0], [26.0, 52.0], [28.0, 46.0],
                    [30.0, 44.0], [28.0, 36.0], [30.0, 32.0], [31.5, 30.0],
                    [36.0, 28.0], [38.0, 26.0], [40.0, 22.0], [43.0, 20.0]
                ]]
            },
            {
                startYear: -322,
                endYear: -281,
                name: 'Successor Kingdoms (Diadochi)',
                territories: [[
                    [43.0, 20.0], [42.0, 28.0], [40.0, 35.0], [38.0, 44.0],
                    [35.0, 52.0], [32.0, 62.0], [28.0, 68.0], [25.0, 62.0],
                    [26.0, 52.0], [28.0, 46.0], [30.0, 44.0], [28.0, 36.0],
                    [30.0, 32.0], [31.5, 30.0], [36.0, 28.0], [38.0, 26.0],
                    [40.0, 22.0], [43.0, 20.0]
                ]]
            }
        ]
    },
    
    // Seleucid Empire
    seleucid: {
        name: 'Seleucid Empire',
        periods: [
            {
                startYear: -312,
                endYear: -63,
                name: 'Seleucid Empire',
                territories: [[
                    [40.0, 35.0], [38.0, 44.0], [35.0, 52.0], [32.0, 58.0],
                    [30.0, 55.0], [28.0, 50.0], [30.0, 44.0], [32.0, 38.0],
                    [34.0, 35.0], [36.0, 34.0], [38.0, 34.0], [40.0, 35.0]
                ]]
            }
        ]
    },
    
    // Ptolemaic Egypt
    ptolemaic: {
        name: 'Ptolemaic Kingdom',
        periods: [
            {
                startYear: -305,
                endYear: -30,
                name: 'Ptolemaic Egypt',
                territories: [[
                    [31.8, 28.0], [31.5, 34.0], [32.5, 35.5], [31.0, 35.0],
                    [29.0, 34.5], [26.0, 34.0], [22.0, 33.0], [20.0, 31.0],
                    [22.0, 30.0], [26.0, 29.0], [28.0, 28.0], [30.5, 27.0],
                    [31.8, 28.0]
                ]]
            }
        ]
    },
    
    // Carthaginian Empire
    carthage: {
        name: 'Carthaginian Empire',
        periods: [
            {
                startYear: -650,
                endYear: -146,
                name: 'Carthaginian Empire',
                territories: [[
                    [37.5, 10.0], [37.0, 9.0], [36.5, 8.0], [35.0, 0.0],
                    [36.5, -6.0], [38.0, -5.0], [40.0, -1.0], [39.5, 3.0],
                    [38.5, 8.0], [37.5, 10.0]
                ], [
                    [39.5, 9.0], [38.5, 9.5], [38.0, 8.5], [39.0, 8.0], [39.5, 9.0]
                ], [
                    [38.0, 15.5], [37.0, 15.0], [37.5, 13.5], [38.5, 14.0], [38.0, 15.5]
                ]]
            }
        ]
    },
    
    // Parthian Empire
    parthia: {
        name: 'Parthian Empire',
        periods: [
            {
                startYear: -247,
                endYear: 224,
                name: 'Parthian Empire',
                territories: [[
                    [40.0, 44.0], [38.0, 52.0], [35.0, 60.0], [32.0, 62.0],
                    [28.0, 58.0], [26.0, 52.0], [28.0, 46.0], [30.0, 44.0],
                    [32.0, 42.0], [35.0, 44.0], [38.0, 44.0], [40.0, 44.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // ISLAMIC CALIPHATES
    // ============================================
    
    // Umayyad Caliphate
    umayyad: {
        name: 'Umayyad Caliphate',
        periods: [
            {
                startYear: 661,
                endYear: 750,
                name: 'Umayyad Caliphate',
                territories: [[
                    [43.0, -8.0], [37.0, -10.0], [32.0, -5.0], [25.0, -15.0],
                    [20.0, -10.0], [25.0, 0.0], [32.0, 10.0], [37.0, 10.0],
                    [37.0, 35.0], [40.0, 45.0], [38.0, 55.0], [35.0, 65.0],
                    [30.0, 70.0], [25.0, 68.0], [22.0, 60.0], [25.0, 50.0],
                    [28.0, 45.0], [30.0, 40.0], [25.0, 38.0], [20.0, 45.0],
                    [15.0, 50.0], [12.0, 45.0], [18.0, 38.0], [25.0, 35.0],
                    [30.0, 32.0], [35.0, 35.0], [37.0, 35.0]
                ]]
            }
        ]
    },
    
    // Abbasid Caliphate
    abbasid: {
        name: 'Abbasid Caliphate',
        periods: [
            {
                startYear: 750,
                endYear: 1258,
                name: 'Abbasid Caliphate',
                territories: [[
                    [40.0, 35.0], [38.0, 48.0], [35.0, 60.0], [32.0, 65.0],
                    [28.0, 62.0], [25.0, 55.0], [28.0, 48.0], [30.0, 44.0],
                    [28.0, 38.0], [25.0, 35.0], [30.0, 32.0], [33.0, 35.0],
                    [35.0, 38.0], [38.0, 38.0], [40.0, 35.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // AFRICAN EMPIRES
    // ============================================
    
    // Mali Empire
    mali: {
        name: 'Mali Empire',
        periods: [
            {
                startYear: 1235,
                endYear: 1600,
                name: 'Mali Empire',
                territories: [[
                    [18.0, -16.0], [16.0, -12.0], [14.0, -8.0], [12.0, -5.0],
                    [10.0, -5.0], [10.0, -10.0], [12.0, -14.0], [14.0, -16.0],
                    [18.0, -16.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // SOUTHEAST ASIAN EMPIRES
    // ============================================
    
    // Khmer Empire
    khmer: {
        name: 'Khmer Empire',
        periods: [
            {
                startYear: 802,
                endYear: 1431,
                name: 'Khmer Empire (Angkor)',
                territories: [[
                    [15.5, 102.0], [15.0, 105.0], [13.5, 106.0], [11.0, 105.5],
                    [10.0, 104.0], [10.5, 102.0], [12.0, 100.0], [14.0, 100.5],
                    [15.5, 102.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // BYZANTINE EMPIRE
    // ============================================
    
    // Byzantine Empire
    byzantine: {
        name: 'Byzantine Empire',
        periods: [
            {
                startYear: 395,
                endYear: 565,
                name: 'Early Byzantine Empire',
                territories: [[
                    [45.0, 14.0], [44.0, 22.0], [42.0, 28.0], [40.0, 35.0],
                    [38.0, 38.0], [35.0, 36.0], [33.0, 35.0], [31.5, 32.0],
                    [30.0, 32.0], [31.0, 30.0], [33.0, 25.0], [32.0, 20.0],
                    [35.0, 12.0], [37.0, 10.0], [40.0, 12.0], [43.0, 13.0],
                    [45.0, 14.0]
                ]]
            },
            {
                startYear: 566,
                endYear: 1000,
                name: 'Middle Byzantine Empire',
                territories: [[
                    [43.0, 20.0], [42.0, 28.0], [40.0, 35.0], [38.0, 38.0],
                    [36.0, 36.0], [35.0, 33.0], [37.0, 28.0], [38.0, 24.0],
                    [40.0, 20.0], [43.0, 20.0]
                ]]
            },
            {
                startYear: 1001,
                endYear: 1453,
                name: 'Late Byzantine Empire',
                territories: [[
                    [42.0, 26.0], [41.0, 29.0], [40.0, 30.0], [39.0, 29.0],
                    [40.0, 27.0], [41.0, 26.0], [42.0, 26.0]
                ]]
            }
        ]
    },
    
    // Viking Age
    vikings: {
        name: 'Viking Age Scandinavia',
        periods: [
            {
                startYear: 793,
                endYear: 1066,
                name: 'Viking Age',
                territories: [
                    // Scandinavia (Norway, Sweden, Denmark)
                    [
                        [71.0, 25.0], [70.0, 30.0], [65.0, 25.0], [62.0, 18.0],
                        [60.0, 12.0], [58.0, 8.0], [56.0, 8.0], [54.5, 10.0],
                        [55.5, 12.5], [56.0, 15.0], [58.0, 18.0], [60.0, 20.0],
                        [63.0, 20.0], [66.0, 15.0], [69.0, 18.0], [71.0, 25.0]
                    ],
                    // Danelaw (England)
                    [
                        [54.5, -2.0], [53.5, 0.0], [52.5, 1.0], [52.0, 0.0],
                        [52.5, -1.5], [54.0, -3.0], [54.5, -2.0]
                    ],
                    // Normandy
                    [
                        [49.5, -2.0], [49.5, 0.5], [48.5, 0.5], [48.5, -1.5],
                        [49.5, -2.0]
                    ],
                    // Iceland
                    [
                        [66.5, -23.0], [66.0, -14.0], [64.0, -14.0], [63.5, -20.0],
                        [64.5, -24.0], [66.5, -23.0]
                    ]
                ]
            }
        ]
    },
    
    // Frankish Empire / Carolingian (unified until 843 Treaty of Verdun)
    frankish: {
        name: 'Carolingian Empire',
        periods: [
            {
                startYear: 768,
                endYear: 843,
                name: 'Carolingian Empire (Charlemagne)',
                territories: [[
                    [54.0, 2.0], [53.0, 10.0], [50.0, 15.0], [47.0, 16.0],
                    [45.0, 14.0], [44.0, 12.0], [43.0, 7.0], [42.0, 3.0],
                    [43.0, -1.0], [45.0, -2.0], [48.0, -4.0], [51.0, 0.0],
                    [54.0, 2.0]
                ]]
            }
        ]
    },
    
    // Post-843 Treaty of Verdun - Carolingian Split
    west_francia: {
        name: 'West Francia',
        periods: [
            {
                startYear: 843,
                endYear: 987,
                name: 'West Francia (becomes France)',
                territories: [[
                    [51.0, 0.0], [50.0, 4.0], [48.0, 5.0], [46.0, 5.0],
                    [44.0, 4.0], [43.0, 3.0], [42.5, 0.0], [43.0, -1.5],
                    [45.0, -2.0], [48.0, -4.5], [51.0, 0.0]
                ]]
            }
        ]
    },
    
    east_francia: {
        name: 'East Francia',
        periods: [
            {
                startYear: 843,
                endYear: 962,
                name: 'East Francia (becomes Germany)',
                territories: [[
                    [54.0, 8.0], [53.0, 14.0], [50.0, 15.0], [47.0, 15.0],
                    [46.0, 13.0], [47.0, 10.0], [48.0, 8.0], [50.0, 6.0],
                    [52.0, 6.0], [54.0, 8.0]
                ]]
            }
        ]
    },
    
    lotharingia: {
        name: 'Middle Francia/Lotharingia',
        periods: [
            {
                startYear: 843,
                endYear: 870,
                name: 'Middle Francia (Lotharingia)',
                territories: [[
                    [52.0, 4.0], [51.0, 7.0], [49.0, 8.0], [47.0, 10.0],
                    [46.0, 10.0], [44.0, 12.0], [43.0, 11.0], [43.5, 8.0],
                    [45.0, 5.0], [47.0, 5.0], [50.0, 4.0], [52.0, 4.0]
                ]]
            }
        ]
    },
    
    // Holy Roman Empire
    hre: {
        name: 'Holy Roman Empire',
        periods: [
            {
                startYear: 962,
                endYear: 1250,
                name: 'Holy Roman Empire (High Medieval)',
                territories: [[
                    [54.0, 8.0], [53.0, 14.0], [50.0, 17.0], [47.0, 16.0],
                    [45.0, 14.0], [44.0, 11.0], [45.0, 7.0], [47.0, 6.0],
                    [49.0, 5.0], [52.0, 6.0], [54.0, 8.0]
                ]]
            },
            {
                startYear: 1251,
                endYear: 1648,
                name: 'Holy Roman Empire (Late Medieval)',
                territories: [[
                    [55.0, 8.0], [54.0, 14.0], [51.0, 18.0], [48.0, 17.0],
                    [46.0, 15.0], [45.0, 11.0], [46.0, 7.0], [48.0, 5.0],
                    [51.0, 5.0], [55.0, 8.0]
                ]]
            }
        ]
    },
    
    // Mongol Empire
    mongol: {
        name: 'Mongol Empire',
        periods: [
            {
                startYear: 1206,
                endYear: 1294,
                name: 'Mongol Empire',
                territories: [[
                    [55.0, 40.0], [55.0, 60.0], [50.0, 90.0], [45.0, 120.0],
                    [40.0, 125.0], [35.0, 120.0], [30.0, 110.0], [25.0, 100.0],
                    [28.0, 85.0], [30.0, 70.0], [35.0, 55.0], [40.0, 45.0],
                    [45.0, 38.0], [50.0, 35.0], [55.0, 40.0]
                ]]
            }
        ]
    },
    
    // Ottoman Empire
    ottoman: {
        name: 'Ottoman Empire',
        periods: [
            {
                startYear: 1299,
                endYear: 1453,
                name: 'Early Ottoman Empire',
                territories: [[
                    [42.0, 28.0], [41.0, 32.0], [40.0, 33.0], [39.0, 32.0],
                    [39.5, 29.0], [41.0, 27.0], [42.0, 28.0]
                ]]
            },
            {
                startYear: 1453,
                endYear: 1683,
                name: 'Ottoman Empire (Golden Age)',
                territories: [[
                    [48.0, 16.0], [46.0, 22.0], [44.0, 28.0], [42.0, 35.0],
                    [38.0, 42.0], [35.0, 44.0], [32.0, 44.0], [30.0, 40.0],
                    [28.0, 35.0], [31.0, 32.0], [33.0, 28.0], [32.0, 22.0],
                    [35.0, 12.0], [38.0, 10.0], [40.0, 14.0], [43.0, 15.0],
                    [46.0, 15.0], [48.0, 16.0]
                ]]
            },
            {
                startYear: 1684,
                endYear: 1922,
                name: 'Ottoman Empire (Decline)',
                territories: [[
                    [43.0, 20.0], [42.0, 28.0], [40.0, 35.0], [38.0, 42.0],
                    [35.0, 44.0], [32.0, 44.0], [30.0, 40.0], [28.0, 35.0],
                    [31.0, 32.0], [33.0, 28.0], [35.0, 26.0], [37.0, 22.0],
                    [40.0, 20.0], [43.0, 20.0]
                ]]
            }
        ]
    },
    
    // Habsburg Empire (Austrian branch - after 1556 split from Spanish Habsburgs)
    habsburg: {
        name: 'Austrian Habsburg Empire',
        periods: [
            {
                startYear: 1556,
                endYear: 1804,
                name: 'Austrian Habsburg Monarchy',
                territories: [[
                    [51.0, 12.0], [50.0, 17.0], [48.0, 20.0], [47.0, 22.0],
                    [46.0, 20.0], [45.0, 16.0], [46.0, 13.0], [47.0, 10.0],
                    [48.5, 9.0], [50.0, 10.0], [51.0, 12.0]
                ]]
            },
            {
                startYear: 1804,
                endYear: 1918,
                name: 'Austrian Empire / Austria-Hungary',
                territories: [[
                    [51.5, 12.0], [51.0, 18.0], [49.0, 23.0], [47.0, 26.0],
                    [45.5, 22.0], [44.5, 19.0], [45.0, 15.0], [46.0, 13.0],
                    [47.0, 9.5], [48.5, 9.0], [50.5, 10.0], [51.5, 12.0]
                ]]
            }
        ]
    },
    
    // Han Dynasty China
    han: {
        name: 'Han Dynasty',
        periods: [
            {
                startYear: -206,
                endYear: 220,
                name: 'Han Dynasty',
                territories: [[
                    [42.0, 100.0], [40.0, 115.0], [38.0, 120.0], [35.0, 122.0],
                    [30.0, 122.0], [25.0, 118.0], [22.0, 110.0], [22.0, 105.0],
                    [25.0, 100.0], [30.0, 98.0], [35.0, 95.0], [40.0, 95.0],
                    [42.0, 100.0]
                ]]
            }
        ]
    },
    
    // Tang Dynasty China
    tang: {
        name: 'Tang Dynasty',
        periods: [
            {
                startYear: 618,
                endYear: 907,
                name: 'Tang Dynasty',
                territories: [[
                    [45.0, 80.0], [42.0, 100.0], [40.0, 115.0], [38.0, 122.0],
                    [30.0, 122.0], [22.0, 110.0], [20.0, 100.0], [22.0, 95.0],
                    [28.0, 90.0], [35.0, 75.0], [40.0, 75.0], [45.0, 80.0]
                ]]
            }
        ]
    },
    
    // Ming Dynasty
    ming: {
        name: 'Ming Dynasty',
        periods: [
            {
                startYear: 1368,
                endYear: 1644,
                name: 'Ming Dynasty',
                territories: [[
                    [45.0, 100.0], [42.0, 115.0], [40.0, 122.0], [35.0, 122.0],
                    [28.0, 120.0], [22.0, 112.0], [20.0, 108.0], [22.0, 100.0],
                    [28.0, 98.0], [35.0, 95.0], [40.0, 98.0], [45.0, 100.0]
                ]]
            }
        ]
    },
    
    // Qing Dynasty
    qing: {
        name: 'Qing Dynasty',
        periods: [
            {
                startYear: 1644,
                endYear: 1912,
                name: 'Qing Dynasty',
                territories: [[
                    [53.0, 90.0], [52.0, 120.0], [48.0, 135.0], [42.0, 130.0],
                    [35.0, 122.0], [25.0, 120.0], [20.0, 110.0], [18.0, 108.0],
                    [22.0, 98.0], [28.0, 85.0], [35.0, 75.0], [42.0, 80.0],
                    [48.0, 85.0], [53.0, 90.0]
                ]]
            }
        ]
    },
    
    // Mughal Empire
    mughal: {
        name: 'Mughal Empire',
        periods: [
            {
                startYear: 1526,
                endYear: 1707,
                name: 'Mughal Empire',
                territories: [[
                    [35.0, 70.0], [34.0, 78.0], [30.0, 85.0], [25.0, 88.0],
                    [20.0, 85.0], [15.0, 78.0], [15.0, 72.0], [18.0, 68.0],
                    [22.0, 68.0], [28.0, 65.0], [32.0, 68.0], [35.0, 70.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // PRE-COLUMBIAN AMERICAS
    // ============================================
    
    // Maya Civilization
    maya: {
        name: 'Maya Civilization',
        periods: [
            {
                startYear: -2000,
                endYear: 250,
                name: 'Maya Preclassic Period',
                territories: [[
                    [21.5, -90.5], [21.0, -87.0], [18.0, -88.0], [15.0, -89.5],
                    [14.0, -91.5], [15.5, -92.0], [18.0, -91.0], [21.5, -90.5]
                ]]
            },
            {
                startYear: 250,
                endYear: 900,
                name: 'Maya Classic Period',
                territories: [[
                    [22.0, -90.0], [21.5, -86.5], [19.0, -87.0], [17.0, -88.5],
                    [14.5, -89.0], [13.5, -91.0], [14.5, -92.5], [17.0, -92.0],
                    [19.5, -91.0], [22.0, -90.0]
                ]]
            },
            {
                startYear: 900,
                endYear: 1500,
                name: 'Maya Postclassic Period',
                territories: [[
                    [21.5, -90.0], [21.0, -87.5], [19.5, -87.5], [18.0, -88.5],
                    [17.0, -89.5], [17.5, -91.0], [19.0, -90.5], [21.5, -90.0]
                ]]
            }
        ]
    },
    
    // Aztec Empire
    aztec: {
        name: 'Aztec Empire',
        periods: [
            {
                startYear: 1428,
                endYear: 1521,
                name: 'Aztec Triple Alliance',
                territories: [[
                    [21.5, -99.5], [21.0, -97.0], [19.5, -96.0], [18.0, -96.5],
                    [16.5, -97.5], [15.5, -97.0], [16.0, -99.0], [17.0, -100.5],
                    [18.5, -101.0], [20.0, -100.5], [21.5, -99.5]
                ]]
            }
        ]
    },
    
    // Inca Empire
    inca: {
        name: 'Inca Empire',
        periods: [
            {
                startYear: 1438,
                endYear: 1533,
                name: 'Inca Empire (Tawantinsuyu)',
                territories: [[
                    [-2.0, -80.0], [0.0, -78.0], [-3.0, -75.0], [-8.0, -74.0],
                    [-12.0, -75.0], [-16.0, -69.0], [-22.0, -67.0], [-30.0, -70.0],
                    [-35.0, -71.0], [-33.0, -73.0], [-28.0, -72.0], [-22.0, -70.0],
                    [-15.0, -76.0], [-10.0, -78.0], [-5.0, -81.0], [-2.0, -80.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // HABSBURG EMPIRE (UNIFIED & SPLIT)
    // ============================================
    
    // United Habsburg Empire under Charles V (before 1556 split)
    habsburg_united: {
        name: 'Habsburg Empire (United)',
        periods: [
            {
                startYear: 1519,
                endYear: 1556,
                name: 'Habsburg Empire under Charles V',
                territories: [
                    // Spain & Portugal area
                    [
                        [44.0, -9.0], [43.5, -1.0], [42.5, 3.0], [40.0, 4.0],
                        [38.0, 0.0], [36.0, -6.0], [37.0, -9.0], [40.0, -9.0],
                        [44.0, -9.0]
                    ],
                    // Netherlands & Burgundy
                    [
                        [53.5, 3.0], [53.0, 7.0], [51.0, 6.0], [49.5, 6.5],
                        [48.5, 6.0], [47.5, 5.0], [47.0, 4.0], [49.0, 2.0],
                        [51.0, 2.5], [53.5, 3.0]
                    ],
                    // Austrian territories
                    [
                        [51.0, 12.0], [50.0, 17.0], [48.0, 20.0], [47.0, 22.0],
                        [46.0, 20.0], [45.0, 16.0], [46.0, 13.0], [47.0, 10.0],
                        [48.5, 9.0], [50.0, 10.0], [51.0, 12.0]
                    ],
                    // Southern Italy, Sicily, Sardinia
                    [
                        [42.0, 12.0], [41.0, 16.0], [40.0, 18.5], [38.0, 16.0],
                        [37.5, 13.0], [38.5, 12.5], [40.0, 14.0], [42.0, 12.0]
                    ],
                    // Americas (New Spain)
                    [
                        [25.0, -110.0], [30.0, -100.0], [25.0, -80.0], [10.0, -75.0],
                        [-5.0, -80.0], [-20.0, -70.0], [-15.0, -76.0], [-5.0, -81.0],
                        [10.0, -85.0], [20.0, -95.0], [25.0, -110.0]
                    ]
                ]
            }
        ]
    },
    
    // Spanish Empire (after 1556 split - colonial focus)
    spanish: {
        name: 'Spanish Empire',
        periods: [
            {
                startYear: 1556,
                endYear: 1800,
                name: 'Spanish Colonial Empire',
                territories: [[
                    [44.0, -9.0], [43.5, -1.0], [42.0, 3.0], [40.0, 4.0],
                    [38.0, 0.0], [36.0, -6.0], [37.0, -9.0], [40.0, -9.0],
                    [44.0, -9.0]
                ], [
                    [25.0, -110.0], [30.0, -100.0], [25.0, -80.0], [10.0, -75.0],
                    [-5.0, -80.0], [-35.0, -70.0], [-40.0, -72.0], [-35.0, -60.0],
                    [-20.0, -45.0], [0.0, -50.0], [10.0, -65.0], [20.0, -90.0],
                    [25.0, -110.0]
                ]]
            }
        ]
    },
    
    // British Empire
    british: {
        name: 'British Empire',
        periods: [
            {
                startYear: 1707,
                endYear: 1947,
                name: 'British Empire',
                territories: [[
                    [58.0, -8.0], [58.0, 2.0], [52.0, 2.0], [50.0, -5.0],
                    [52.0, -10.0], [56.0, -10.0], [58.0, -8.0]
                ], [
                    [35.0, 68.0], [35.0, 90.0], [25.0, 92.0], [8.0, 80.0],
                    [8.0, 70.0], [20.0, 68.0], [35.0, 68.0]
                ]]
            }
        ]
    },
    
    // Russian Empire
    russian: {
        name: 'Russian Empire',
        periods: [
            {
                startYear: 1721,
                endYear: 1917,
                name: 'Russian Empire',
                territories: [[
                    [70.0, 30.0], [70.0, 60.0], [65.0, 100.0], [60.0, 140.0],
                    [50.0, 135.0], [45.0, 90.0], [42.0, 60.0], [45.0, 45.0],
                    [50.0, 30.0], [55.0, 22.0], [60.0, 25.0], [70.0, 30.0]
                ]]
            }
        ]
    },
    
    // Sassanid Persian Empire
    sassanid: {
        name: 'Sassanid Empire',
        periods: [
            {
                startYear: 224,
                endYear: 651,
                name: 'Sassanid Persian Empire',
                territories: [[
                    [40.0, 44.0], [38.0, 52.0], [35.0, 60.0], [32.0, 62.0],
                    [28.0, 58.0], [24.0, 55.0], [26.0, 50.0], [28.0, 46.0],
                    [30.0, 44.0], [32.0, 42.0], [35.0, 44.0], [38.0, 44.0],
                    [40.0, 44.0]
                ]]
            }
        ]
    },
    
    // ============================================
    // WORLD WARS - 20TH CENTURY
    // ============================================
    
    // German Empire WW1
    german_ww1: {
        name: 'German Empire (WW1)',
        periods: [
            {
                startYear: 1914,
                endYear: 1918,
                name: 'German Empire - Maximum Extent (1917)',
                territories: [
                    // Germany proper
                    [
                        [55.0, 6.0], [54.5, 14.0], [52.5, 15.0], [51.0, 15.0],
                        [50.0, 12.0], [48.5, 13.5], [47.5, 10.0], [47.5, 7.5],
                        [49.0, 6.0], [50.0, 6.0], [51.5, 6.0], [55.0, 6.0]
                    ],
                    // Occupied Belgium
                    [
                        [51.5, 2.5], [51.5, 6.0], [50.5, 6.0], [49.5, 6.0],
                        [49.5, 4.0], [50.0, 2.5], [51.5, 2.5]
                    ],
                    // Occupied Northern France
                    [
                        [50.5, 1.5], [50.0, 4.5], [49.0, 4.5], [48.5, 3.0],
                        [49.0, 1.5], [50.5, 1.5]
                    ],
                    // Eastern Front gains (Poland, Baltics, Ukraine)
                    [
                        [56.0, 14.0], [57.5, 22.0], [56.0, 28.0], [54.0, 28.0],
                        [52.0, 24.0], [50.0, 24.0], [48.0, 22.0], [50.0, 15.0],
                        [52.5, 15.0], [56.0, 14.0]
                    ]
                ]
            }
        ]
    },
    
    // German Empire (WW1)
    german_ww1: {
        name: 'German Empire',
        periods: [
            {
                startYear: 1871,
                endYear: 1914,
                name: 'German Empire (1871-1914)',
                territories: [[
                    [55.5, 6.0], [55.0, 15.0], [54.0, 18.0], [51.0, 18.0],
                    [50.0, 17.0], [48.5, 15.0], [47.5, 12.0], [47.5, 9.0],
                    [48.5, 7.0], [49.5, 6.0], [51.0, 6.0], [55.5, 6.0]
                ]]
            },
            {
                startYear: 1914,
                endYear: 1917,
                name: 'German Empire - WW1 Maximum Extent (1917)',
                territories: [
                    // Germany proper
                    [
                        [55.5, 6.0], [55.0, 15.0], [54.0, 18.0], [51.0, 18.0],
                        [50.0, 17.0], [48.5, 15.0], [47.5, 12.0], [47.5, 9.0],
                        [48.5, 7.0], [49.5, 6.0], [51.0, 6.0], [55.5, 6.0]
                    ],
                    // Occupied Belgium
                    [
                        [51.5, 2.5], [51.5, 6.0], [50.0, 6.0], [49.5, 4.5],
                        [50.0, 2.5], [51.5, 2.5]
                    ],
                    // Occupied Northern France
                    [
                        [50.0, 2.5], [50.5, 4.5], [49.5, 4.5], [49.0, 4.0],
                        [48.5, 3.5], [49.0, 2.0], [50.0, 2.5]
                    ],
                    // Occupied Poland/Lithuania (Ober Ost)
                    [
                        [56.0, 18.0], [57.0, 25.0], [55.0, 26.0], [52.0, 24.0],
                        [51.0, 18.0], [54.0, 18.0], [56.0, 18.0]
                    ],
                    // Occupied Romania
                    [
                        [46.0, 25.0], [48.0, 25.0], [48.0, 30.0], [46.0, 30.0],
                        [44.0, 28.0], [44.0, 25.0], [46.0, 25.0]
                    ]
                ]
            },
            {
                startYear: 1918,
                endYear: 1918,
                name: 'German Empire - Collapse (1918)',
                territories: [[
                    [55.5, 6.0], [55.0, 15.0], [54.0, 18.0], [51.0, 18.0],
                    [50.0, 17.0], [48.5, 15.0], [47.5, 12.0], [47.5, 9.0],
                    [48.5, 7.0], [49.5, 6.0], [51.0, 6.0], [55.5, 6.0]
                ]]
            }
        ]
    },
    
    // Nazi Germany WW2
    nazi_germany: {
        name: 'Nazi Germany (WW2)',
        periods: [
            {
                startYear: 1939,
                endYear: 1942,
                name: 'Nazi Germany - Maximum Extent (1942)',
                territories: [
                    // Greater Germany + Occupied Western Europe
                    [
                        [55.0, 6.0], [54.0, 18.0], [52.0, 21.0], [50.0, 20.0],
                        [48.0, 17.0], [46.5, 15.0], [44.0, 12.0], [43.5, 7.0],
                        [43.0, 3.0], [44.0, -1.0], [46.0, -2.0], [49.0, -5.0],
                        [50.0, 2.0], [52.0, 4.0], [53.5, 5.0], [55.0, 6.0]
                    ],
                    // Occupied Eastern Europe (Poland, Ukraine, Baltics)
                    [
                        [56.0, 18.0], [59.0, 24.0], [58.0, 30.0], [54.0, 35.0],
                        [50.0, 40.0], [47.0, 40.0], [45.0, 35.0], [46.0, 30.0],
                        [48.0, 22.0], [50.0, 20.0], [54.0, 18.0], [56.0, 18.0]
                    ],
                    // Norway
                    [
                        [62.0, 5.0], [70.0, 20.0], [70.0, 30.0], [65.0, 15.0],
                        [60.0, 10.0], [58.0, 6.0], [62.0, 5.0]
                    ],
                    // North Africa (Libya)
                    [
                        [33.0, 10.0], [33.0, 25.0], [30.0, 25.0], [28.0, 20.0],
                        [30.0, 10.0], [33.0, 10.0]
                    ]
                ]
            },
            {
                startYear: 1943,
                endYear: 1945,
                name: 'Nazi Germany - Retreating (1943-45)',
                territories: [[
                    [55.0, 6.0], [54.0, 15.0], [52.0, 18.0], [50.0, 17.0],
                    [48.0, 15.0], [47.5, 12.0], [47.5, 9.0], [48.5, 7.0],
                    [50.0, 6.0], [52.0, 6.0], [55.0, 6.0]
                ]]
            }
        ]
    },
    
    // Imperial Japan
    imperial_japan: {
        name: 'Imperial Japan',
        periods: [
            {
                startYear: 1895,
                endYear: 1930,
                name: 'Empire of Japan - Early Expansion',
                territories: [
                    // Japan home islands
                    [
                        [45.5, 140.0], [43.0, 145.5], [40.0, 142.0], [35.0, 140.0],
                        [33.0, 132.0], [34.0, 129.5], [36.0, 133.0], [38.0, 136.0],
                        [40.0, 138.0], [45.5, 140.0]
                    ],
                    // Korea
                    [
                        [43.0, 128.0], [42.0, 130.5], [38.0, 128.5], [35.0, 129.0],
                        [35.0, 126.0], [38.0, 125.0], [40.0, 125.0], [43.0, 128.0]
                    ],
                    // Taiwan
                    [
                        [25.5, 120.0], [25.0, 122.0], [22.0, 121.5], [22.0, 120.0],
                        [23.5, 119.5], [25.5, 120.0]
                    ]
                ]
            },
            {
                startYear: 1931,
                endYear: 1942,
                name: 'Empire of Japan - Maximum Extent (1942)',
                territories: [
                    // Japan + Korea + Manchuria
                    [
                        [50.0, 125.0], [50.0, 135.0], [45.0, 145.0], [35.0, 140.0],
                        [33.0, 130.0], [35.0, 126.0], [40.0, 120.0], [45.0, 120.0],
                        [50.0, 125.0]
                    ],
                    // Occupied China (coastal)
                    [
                        [40.0, 117.0], [40.0, 122.0], [35.0, 122.0], [30.0, 122.0],
                        [25.0, 118.0], [22.0, 114.0], [22.0, 110.0], [25.0, 110.0],
                        [30.0, 115.0], [35.0, 117.0], [40.0, 117.0]
                    ],
                    // Southeast Asia (Burma, Thailand, Indochina, Malaya)
                    [
                        [25.0, 95.0], [22.0, 100.0], [20.0, 106.0], [12.0, 109.0],
                        [8.0, 105.0], [1.0, 104.0], [1.0, 100.0], [5.0, 98.0],
                        [12.0, 98.0], [18.0, 95.0], [25.0, 95.0]
                    ],
                    // Philippines
                    [
                        [20.0, 118.0], [18.0, 122.5], [12.0, 125.0], [6.0, 126.0],
                        [6.0, 120.0], [12.0, 118.0], [20.0, 118.0]
                    ],
                    // Indonesia (Dutch East Indies)
                    [
                        [5.0, 95.0], [5.0, 105.0], [0.0, 110.0], [-5.0, 120.0],
                        [-8.0, 130.0], [-8.0, 140.0], [-5.0, 140.0], [0.0, 135.0],
                        [0.0, 120.0], [0.0, 105.0], [5.0, 95.0]
                    ],
                    // Pacific Islands
                    [
                        [20.0, 145.0], [15.0, 155.0], [5.0, 165.0], [0.0, 175.0],
                        [-5.0, 165.0], [0.0, 150.0], [10.0, 140.0], [20.0, 145.0]
                    ]
                ]
            },
            {
                startYear: 1943,
                endYear: 1945,
                name: 'Empire of Japan - Retreating (1943-45)',
                territories: [
                    // Japan + Korea + Manchuria
                    [
                        [50.0, 125.0], [50.0, 135.0], [45.0, 145.0], [35.0, 140.0],
                        [33.0, 130.0], [35.0, 126.0], [40.0, 120.0], [45.0, 120.0],
                        [50.0, 125.0]
                    ],
                    // Reduced China
                    [
                        [40.0, 117.0], [40.0, 122.0], [35.0, 122.0], [30.0, 120.0],
                        [28.0, 118.0], [30.0, 115.0], [35.0, 117.0], [40.0, 117.0]
                    ]
                ]
            }
        ]
    },
    
    // Soviet Union
    soviet_union: {
        name: 'Soviet Union',
        periods: [
            {
                startYear: 1922,
                endYear: 1991,
                name: 'Union of Soviet Socialist Republics',
                territories: [[
                    [70.0, 30.0], [75.0, 70.0], [75.0, 110.0], [70.0, 170.0],
                    [65.0, 180.0], [55.0, 170.0], [45.0, 135.0], [42.0, 80.0],
                    [38.0, 58.0], [40.0, 45.0], [45.0, 35.0], [50.0, 22.0],
                    [55.0, 20.0], [60.0, 28.0], [70.0, 30.0]
                ]]
            }
        ]
    }
};

// ============================================
// HISTORICAL SEA ROUTES
// ============================================
const SEA_ROUTES = {
    // Viking Routes
    viking_iceland: {
        name: 'Vikings to Iceland',
        startYear: 870,
        endYear: 1066,
        color: '#2F4F4F',
        points: [
            [61.0, 5.0],      // Norway
            [62.0, -5.0],     // Faroe Islands
            [65.0, -18.0]     // Iceland
        ],
        icon: '⛵'
    },
    viking_greenland: {
        name: 'Vikings to Greenland',
        startYear: 985,
        endYear: 1066,
        color: '#2F4F4F',
        points: [
            [65.0, -18.0],    // Iceland
            [64.0, -35.0],    // Mid-Atlantic
            [61.0, -45.0]     // Greenland
        ],
        icon: '⛵'
    },
    viking_vinland: {
        name: 'Vikings to Vinland (Americas)',
        startYear: 1000,
        endYear: 1020,
        color: '#2F4F4F',
        points: [
            [61.0, -45.0],    // Greenland
            [55.0, -55.0],    // Labrador Sea
            [51.0, -56.0]     // Newfoundland (L'Anse aux Meadows)
        ],
        icon: '⛵'
    },
    
    // Columbus Voyages
    columbus_1492: {
        name: "Columbus's First Voyage (1492)",
        startYear: 1492,
        endYear: 1493,
        color: '#FF0000',
        points: [
            [37.0, -7.0],     // Palos, Spain
            [28.0, -17.0],    // Canary Islands
            [24.0, -74.0],    // Bahamas (San Salvador)
            [20.0, -75.0]     // Cuba
        ],
        icon: '🚢'
    },
    columbus_return: {
        name: "Columbus's Return (1493)",
        startYear: 1493,
        endYear: 1493,
        color: '#FF4500',
        points: [
            [20.0, -75.0],    // Cuba
            [30.0, -70.0],    // Gulf Stream
            [38.0, -25.0],    // Azores
            [37.0, -7.0]      // Palos, Spain
        ],
        icon: '🚢'
    },
    
    // Vasco da Gama - Route to India
    dagama_india: {
        name: "Vasco da Gama to India (1497-98)",
        startYear: 1497,
        endYear: 1499,
        color: '#00FF00',
        points: [
            [38.7, -9.1],     // Lisbon
            [15.0, -24.0],    // Cape Verde
            [-34.0, 18.5],    // Cape of Good Hope
            [-4.0, 40.0],     // Mombasa
            [15.4, 73.8]      // Goa, India
        ],
        icon: '🚢'
    },
    
    // Magellan's Circumnavigation
    magellan: {
        name: "Magellan's Circumnavigation (1519-22)",
        startYear: 1519,
        endYear: 1522,
        color: '#FF00FF',
        points: [
            [36.5, -6.3],     // Seville
            [-34.9, -56.2],   // Rio de la Plata
            [-52.5, -70.0],   // Strait of Magellan
            [13.4, 144.8],    // Guam
            [10.3, 123.9],    // Philippines
            [-6.1, 106.8],    // Indonesia
            [-34.0, 18.5],    // Cape of Good Hope
            [36.5, -6.3]      // Return to Spain
        ],
        icon: '🚢'
    },
    
    // Phoenician Trade Routes
    phoenician_med: {
        name: 'Phoenician Mediterranean Trade',
        startYear: -1200,
        endYear: -300,
        color: '#800080',
        points: [
            [33.9, 35.5],     // Tyre
            [35.5, 24.0],     // Crete
            [37.0, 15.3],     // Sicily
            [36.8, 10.2],     // Carthage
            [36.7, -4.4],     // Strait of Gibraltar
            [37.0, -7.0]      // Tartessus (Spain)
        ],
        icon: '⛵'
    },
    
    // Zheng He's Voyages
    zheng_he: {
        name: "Zheng He's Voyages (1405-33)",
        startYear: 1405,
        endYear: 1433,
        color: '#FF6347',
        points: [
            [31.2, 121.5],    // Nanjing
            [10.0, 107.0],    // Vietnam
            [1.3, 103.8],     // Singapore/Malacca
            [6.9, 79.9],      // Sri Lanka
            [15.4, 73.8],     // Goa
            [-4.0, 40.0],     // East Africa (Mombasa)
            [-6.1, 39.2]      // Zanzibar
        ],
        icon: '🚢'
    }
};

// State for sea routes
let seaRouteLayers = [];

// ============================================
// STATE MANAGEMENT
// ============================================
const STATE = {
    // Map & Rendering
    map: null,
    territoryLayerGroup: null,  // Single layer group for all territories
    activeTerritories: new Map(), // Map of territoryId -> {layer, data}
    empireLayers: {}, // Map of empire ID -> layer
    cityMarkers: [],
    wallLayers: [],
    
    // Timeline & Animation
    currentIndex: 0,
    currentYear: DEFAULT_YEAR, // Year-based timeline
    isPlaying: false,
    playInterval: null, // For setInterval based animation
    animationId: null,
    lastUpdateTime: 0,
    animationSpeed: 2, // Default to slower speed for better visibility
    updateInterval: 1500, // Slower default
    
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

// Speed configuration mapping (slower speeds for better visibility)
const SPEED_MAP = {
    1: 2000,  // Very slow - great for studying
    2: 1500,  // Slow
    3: 1000,  // Medium (new default)
    4: 600,   // Fast
    5: 300    // Very fast
};

// Map configuration - centered for world view
const MAP_CONFIG = {
    center: [35, 40], // Centered more on Middle East/Mediterranean for ancient history
    zoom: 3,
    minZoom: 2,
    maxZoom: 8,
    // Responsive zoom based on viewport width
    getResponsiveZoom: () => {
        const width = window.innerWidth;
        if (width < 480) return 2;        // Very small phones
        if (width < 768) return 2.5;      // Phones
        if (width < 1024) return 3;       // Tablets
        return 3;                          // Desktop
    }
};

// Region view presets for navigation
const REGION_VIEWS = {
    world: { center: [20, 0], zoom: 2, name: 'World View' },
    mediterranean: { center: [38, 18], zoom: 4, name: 'Mediterranean' },
    europe: { center: [50, 10], zoom: 4, name: 'Europe' },
    middleeast: { center: [30, 45], zoom: 4, name: 'Middle East' },
    asia: { center: [35, 100], zoom: 3, name: 'Asia' },
    americas: { center: [15, -80], zoom: 3, name: 'Americas' },
    africa: { center: [5, 20], zoom: 3, name: 'Africa' }
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
        
        // Initialize slider to current year
        const slider = document.getElementById('year-slider');
        if (slider) slider.value = STATE.currentYear;
        
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
        console.log(`✅ CHRONOS World History Atlas initialized in ${loadTime}ms`);
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
    const slider = document.getElementById('year-slider');
    const playBtn = document.getElementById('playBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    // Slider input
    if (slider) {
        slider.addEventListener('input', (e) => {
            STATE.currentYear = parseInt(e.target.value);
            updateDisplay();
        });
    }
    
    // Play/Pause button
    if (playBtn) {
        playBtn.addEventListener('click', togglePlay);
    }

    // Reset button
    if (resetBtn) {
        resetBtn.addEventListener('click', reset);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            STATE.currentYear = Math.max(MIN_YEAR, STATE.currentYear - 1);
            if (slider) slider.value = STATE.currentYear;
            updateDisplay();
        } else if (e.key === 'ArrowRight') {
            STATE.currentYear = Math.min(MAX_YEAR, STATE.currentYear + 1);
            if (slider) slider.value = STATE.currentYear;
            updateDisplay();
        } else if (e.key === ' ') {
            e.preventDefault(); // Prevent scrolling
            togglePlay();
        }
    });
    
    // Handle window resize with throttling for performance
    const throttledResize = utils.throttle(() => {
        detectMobile();
        if (STATE.map) STATE.map.invalidateSize();
    }, 250);
    
    window.addEventListener('resize', throttledResize, { passive: true });
    
    // Region navigation
    setupRegionNavigation();
}

// ============================================
// REGION NAVIGATION
// ============================================
function setupRegionNavigation() {
    const toggle = document.getElementById('regionToggle');
    const menu = document.getElementById('regionMenu');
    
    if (!toggle || !menu) return;
    
    // Toggle menu
    toggle.addEventListener('click', () => {
        const isHidden = menu.hidden;
        menu.hidden = !isHidden;
        toggle.setAttribute('aria-expanded', isHidden);
    });
    
    // Handle region button clicks
    menu.querySelectorAll('button[data-region]').forEach(btn => {
        btn.addEventListener('click', () => {
            const region = btn.dataset.region;
            if (REGION_VIEWS[region] && STATE.map) {
                const view = REGION_VIEWS[region];
                STATE.map.flyTo(view.center, view.zoom, {
                    duration: 1.5,
                    easeLinearity: 0.25
                });
                console.log(`📍 Navigating to ${view.name}`);
            }
            menu.hidden = true;
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.hidden = true;
        }
    });
}

// Navigate to region (also callable programmatically)
function navigateToRegion(regionId) {
    const view = REGION_VIEWS[regionId];
    if (view && STATE.map) {
        STATE.map.flyTo(view.center, view.zoom, { duration: 1.5 });
        return true;
    }
    return false;
}

// ============================================
// TOUCH GESTURES FOR MOBILE
// ============================================
function setupTouchGestures() {
    // Simplified for new slider
    const slider = document.getElementById('year-slider');
    if (!slider) return;
    
    // Standard touch events are handled by the range input natively
    
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
    
    const slider = document.getElementById('year-slider');
    STATE.currentYear = Math.max(MIN_YEAR, Math.min(MAX_YEAR, STATE.currentYear + direction));
    if (slider) slider.value = STATE.currentYear;
    updateDisplay();
}

function jumpToStart() {
    if (STATE.isPlaying) togglePlay();
    STATE.currentYear = MIN_YEAR;
    const slider = document.getElementById('year-slider');
    if (slider) slider.value = STATE.currentYear;
    updateDisplay();
}

function jumpToEnd() {
    if (STATE.isPlaying) togglePlay();
    STATE.currentYear = MAX_YEAR;
    const slider = document.getElementById('year-slider');
    if (slider) slider.value = STATE.currentYear;
    updateDisplay();
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
    
    const currentYear = STATE.currentYear;
    
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
        const { year: absYear, era } = utils.formatYear(year);
        layer.bindTooltip(`${empire.name} (${absYear} ${era})`, {
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
    
    const year = STATE.currentYear;
    const era = year < 0 ? 'BCE' : 'CE';
    const absYear = Math.abs(year);
    
    const yearElement = document.getElementById('currentYear');
    const eraElement = document.querySelector('.era');
    const nameElement = document.getElementById('periodName');
    const descElement = document.getElementById('periodDescription');
    
    if (yearElement) yearElement.textContent = absYear;
    if (eraElement) eraElement.textContent = era;
    
    // Clear all existing territory layers
    if (STATE.territoryLayerGroup) {
        STATE.territoryLayerGroup.clearLayers();
    }
    STATE.empireLayers = {};
    
    // Find and display ALL active empires for this year
    const activeEmpires = [];
    
    for (const [empireId, empireData] of Object.entries(WORLD_EMPIRES)) {
        for (const period of empireData.periods) {
            if (year >= period.startYear && year <= period.endYear) {
                activeEmpires.push({
                    id: empireId,
                    name: empireData.name,
                    periodName: period.name,
                    territories: period.territories,
                    color: CIVILIZATIONS[empireId]?.color || '#888888'
                });
                break; // Only one period per empire at a time
            }
        }
    }
    
    // Also check Roman historical data (more detailed)
    const isRomanEra = year >= -509 && year <= 476;
    let romanData = null;
    
    if (isRomanEra && typeof historicalData !== 'undefined') {
        for (const entry of historicalData) {
            if (entry.year <= year) {
                romanData = entry;
            } else {
                break;
            }
        }
    }
    
    // Render all active empires on the map
    for (const empire of activeEmpires) {
        // Skip Rome from WORLD_EMPIRES if we have detailed Roman data
        if (empire.id === 'rome' && romanData) continue;
        
        renderEmpireOnMap(empire.id, empire.territories, empire.color, empire.periodName);
    }
    
    // Render detailed Roman data if in Roman era
    if (isRomanEra && romanData) {
        updateTerritories(romanData.territories, year);
        updateTimeBasedMarkers();
    }
    
    // Build display text
    let displayName = "";
    let displayDesc = "";
    
    if (activeEmpires.length > 0 || romanData) {
        const empireNames = activeEmpires
            .filter(e => !(e.id === 'rome' && romanData))
            .map(e => e.periodName);
        
        if (romanData) {
            empireNames.unshift(romanData.name);
        }
        
        if (empireNames.length === 1) {
            displayName = empireNames[0];
        } else if (empireNames.length > 1) {
            displayName = `${empireNames.length} Active Empires`;
        }
        
        // Build description
        if (romanData) {
            displayDesc = romanData.description;
        } else if (activeEmpires.length > 0) {
            displayDesc = activeEmpires.map(e => e.periodName).join(' • ');
        }
    } else {
        // No empires active - show educational context
        const eduYears = Object.keys(EDUCATIONAL_DATA).map(Number).sort((a, b) => a - b);
        let activeEduYear = eduYears[0];
        for (const y of eduYears) {
            if (y <= year) activeEduYear = y;
            else break;
        }
        const eduData = EDUCATIONAL_DATA[activeEduYear?.toString()];
        
        if (eduData) {
            displayName = `World History`;
            displayDesc = eduData.significance || '';
            if (eduData.facts && eduData.facts.length > 0) {
                displayDesc += ". " + eduData.facts[0];
            }
        } else {
            displayName = "World History";
            displayDesc = `Year ${absYear} ${era}`;
        }
    }
    
    if (nameElement) nameElement.textContent = displayName;
    if (descElement) descElement.textContent = displayDesc;
    
    // Update sea routes
    updateSeaRoutes(year);
    
    // Update educational content if expanded
    if (STATE.eduExpanded) {
        updateEducationalContent();
    }
}

// ============================================
// SEA ROUTES RENDERING
// ============================================
function updateSeaRoutes(year) {
    if (!STATE.map) {
        console.warn('⚠️ Sea routes: Map not initialized');
        return;
    }
    
    // Clear existing sea route layers
    seaRouteLayers.forEach(layer => {
        if (STATE.map.hasLayer(layer)) {
            STATE.map.removeLayer(layer);
        }
    });
    seaRouteLayers = [];
    
    let activeRoutes = 0;
    
    // Add active sea routes for the current year
    for (const [routeId, route] of Object.entries(SEA_ROUTES)) {
        if (year >= route.startYear && year <= route.endYear) {
            activeRoutes++;
            
            // Create the route line with animation
            const routeLine = L.polyline(route.points, {
                color: route.color,
                weight: 3,
                opacity: 0.8,
                dashArray: '10, 10',
                className: 'sea-route-animated'
            });
            
            // Add popup with route info
            routeLine.bindPopup(`
                <strong>${route.icon} ${route.name}</strong><br>
                <em>${Math.abs(route.startYear)} ${route.startYear < 0 ? 'BCE' : 'CE'} - 
                    ${Math.abs(route.endYear)} ${route.endYear < 0 ? 'BCE' : 'CE'}</em>
            `);
            
            routeLine.addTo(STATE.map);
            seaRouteLayers.push(routeLine);
            
            // Add ship icon at the end point (or animated along route)
            const endPoint = route.points[route.points.length - 1];
            const shipIcon = L.divIcon({
                className: 'ship-marker',
                html: `<span class="ship-icon">${route.icon}</span>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
            
            const shipMarker = L.marker(endPoint, { icon: shipIcon });
            shipMarker.bindPopup(`<strong>${route.name}</strong>`);
            shipMarker.addTo(STATE.map);
            seaRouteLayers.push(shipMarker);
        }
    }
    
    // Log active routes (helpful for debugging)
    if (activeRoutes > 0) {
        console.log(`🚢 ${activeRoutes} sea route(s) active for year ${year}`);
    }
}

// Render an empire from WORLD_EMPIRES on the map
function renderEmpireOnMap(empireId, territories, color, periodName) {
    if (!STATE.map || !STATE.territoryLayerGroup) return;
    if (!territories || territories.length === 0) return;
    
    // territories is an array of polygon coordinate arrays
    const layer = L.polygon(territories, {
        fillColor: color,
        fillOpacity: 0.5,
        stroke: true,
        weight: 1,
        color: color,
        opacity: 0.8,
        smoothFactor: 1.5,
        className: `empire-layer empire-${empireId}`
    });
    
    // Add tooltip
    layer.bindTooltip(periodName, {
        className: 'territory-label',
        sticky: true
    });
    
    // Store and add to map
    STATE.empireLayers[empireId] = layer;
    STATE.territoryLayerGroup.addLayer(layer);
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
// ANIMATION CONTROL
// ============================================
function togglePlay() {
    const playBtn = document.getElementById('playBtn');
    const slider = document.getElementById('year-slider');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    
    if (STATE.isPlaying) {
        // Pause
        clearInterval(STATE.playInterval);
        STATE.isPlaying = false;
        if (playBtn) {
            playBtn.classList.remove('playing');
            playBtn.setAttribute('aria-pressed', 'false');
            playBtn.setAttribute('aria-label', 'Play animation');
        }
        if (playIcon) playIcon.style.display = 'inline';
        if (pauseIcon) pauseIcon.style.display = 'none';
    } else {
        // Play
        STATE.isPlaying = true;
        if (playBtn) {
            playBtn.classList.add('playing');
            playBtn.setAttribute('aria-pressed', 'true');
            playBtn.setAttribute('aria-label', 'Pause animation');
        }
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'inline';
        
        STATE.playInterval = setInterval(() => {
            if (STATE.currentYear >= MAX_YEAR) {
                togglePlay(); // Stop at end
                return;
            }
            
            STATE.currentYear++;
            if (slider) slider.value = STATE.currentYear;
            updateDisplay();
        }, 100); // 100ms per year
    }
}

function animate(timestamp = 0) {
    // Deprecated - using setInterval in togglePlay instead
}

function reset() {
    if (STATE.isPlaying) {
        togglePlay();
    }
    STATE.currentYear = DEFAULT_YEAR;
    const slider = document.getElementById('year-slider');
    if (slider) slider.value = STATE.currentYear;
    
    updateDisplay();
}

// ============================================
// EVENT HANDLERS
// ============================================
function handleTimelineChange(e) {
    // Deprecated - handled by setupEventListeners
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
                currentYear: STATE.currentYear,
                quizScore: STATE.quizScore,
                quizAnswered: STATE.quizAnswered,
                timestamp: Date.now()
            };
            localStorage.setItem('chronosState', JSON.stringify(appState));
        } catch (error) {
            console.warn('Could not save app state:', error);
        }
    }
    
    // Restore state on load
    function restoreAppState() {
        try {
            const savedState = localStorage.getItem('chronosState');
            if (savedState) {
                const appState = JSON.parse(savedState);
                // Only restore if less than 24 hours old
                if (Date.now() - appState.timestamp < 24 * 60 * 60 * 1000) {
                    STATE.currentYear = appState.currentYear || DEFAULT_YEAR;
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
