const randomPrompts = [
    "A serene sunset over a calm lake",
    "A futuristic cityscape with flying cars",
    "A mystical forest with glowing mushrooms",
    "A bustling market in a historic town",
    "An underwater world filled with colorful coral reefs",
    "A cozy cabin in the snowy mountains",
    "A surreal dreamscape with floating islands",
    "A steampunk-inspired metropolis",
    "A dragon guarding a treasure hoard in a cave",
    "A time-traveling adventurer exploring ancient ruins",
    "A post-apocalyptic wasteland with ruins",
    "A magical castle in the clouds",
    "A hidden oasis in the desert",
    "A parallel universe with mirrored landscapes",
    "A group of intergalactic explorers",
    "A cyberpunk street scene with neon lights",
    "A majestic waterfall in a deep forest",
    "An alien world with strange flora and fauna",
    "A journey through the center of the Earth",
    "A spaceship exploring a distant galaxy",
    "A medieval knight battling a mythical beast",
    "A vibrant carnival with colorful rides",
    "A time-traveling detective solving mysteries",
    "A lost civilization buried in the jungle",
    "A high-tech laboratory with futuristic gadgets",
    "A superhero team saving the day",
    "A magical library with ancient tomes",
    "An enchanted garden with talking animals",
    "A lunar colony on the Moon",
    "A whimsical circus under the big top",
    "A haunted mansion with ghostly inhabitants",
    "A pirate ship on a treasure hunt",
    "A fantasy realm of wizards and dragons",
    "A safari through the African savanna",
    "A robotic uprising in a dystopian future",
    "A time-traveler's encounter with dinosaurs",
    "An alien invasion of Earth",
    "A fantasy tavern filled with mythical creatures",
    "A lost city under the sea",
    "A deep space exploration mission",
    "A parallel dimension where physics is different",
    "A magical portal to another world",
    "A day in the life of a future astronaut",
    "A hidden temple in the mountains",
    "A wildlife documentary in the Amazon rainforest",
    "A journey through a computer's circuitry",
    "A medieval village under a full moon",
    "A dreamy underwater seascape",
    "A day in the life of a robot in a busy city",
    "A futuristic race through a neon-lit cityscape",
    "A prehistoric landscape with dinosaurs",
    "A time-traveling archaeologist discovering artifacts",
    "A mythical creature zoo in a distant land",
    "A dreamlike landscape of floating islands",
    "A space station orbiting a distant planet",
    "A tropical island paradise with hidden treasure",
    "A superhero's secret lair",
    "A space battle between starships",
    "A mechanical city of gears and cogs",
    "A wizard's tower in a magical forest",
    "A cosmic journey through the Milky Way",
    "A land of candy and sweets",
    "A detective solving a noir mystery",
    "A day in the life of an AI in a futuristic world",
    "A grand steampunk airship adventure",
    "A mythical phoenix rising from the ashes",
    "A secret underground society in a post-apocalyptic world",
    "A time-traveling scientist altering history",
    "A fairy tale kingdom with talking animals",
    "A deep-sea dive to discover ancient shipwrecks",
    "A mystical lighthouse guiding lost souls",
    "A journey to the center of a volcano",
    "A space colony on Mars",
    "A robotic pet shop in the future",
    "A journey through a virtual reality world",
    "A cosmic dance of planets and stars",
    "A mechanical insect invasion",
    "A post-apocalyptic road trip",
    "A magical circus with supernatural acts",
    "A futuristic skateboarding competition",
    "A fantasy kingdom under a blood-red moon",
    "A superhero team-up against a supervillain",
    "A dragon rider in a high-flying adventure",
    "A time-traveling tourist visiting historic events",
    "A haunted forest with eerie creatures",
    "A pirate's life on the open sea",
    "A high-tech heist in a cyberpunk city",
    "A magical journey through a labyrinth",
    "A lunar colony under a meteor shower",
    "A medieval alchemist's laboratory",
    "A parallel world where magic and technology coexist",
    "A wildlife sanctuary for endangered species",
    "A deep-space mission to explore a black hole",
    "A futuristic courtroom drama with AI judges",
    "A mythical city hidden in the clouds",
    "A post-apocalyptic world with mutant wildlife",
    "A cyberpunk hacker's hideout",
    "A space exploration mission to a distant galaxy",
    "A medieval dragon-slaying adventure",
    "A carnival on an alien planet",
    "A time-traveler's encounter with famous historical figures",
    "A lost city buried in the Arctic ice",
    "A high-tech race through a virtual reality landscape",
    "A steampunk submarine adventure",
    "A magical forest inhabited by mystical creatures",
    "A lunar base on the dark side of the Moon",
    "A whimsical underwater tea party",
    "A haunted library with sentient books",
    "A pirate treasure map leading to an island of mystery",
    "A fantasy realm where dreams come to life",
    "A safari through a prehistoric wilderness",
    "A robot uprising in a futuristic cityscape",
    "A time-traveler's visit to the ancient Egyptian pyramids",
    "An alien civilization making first contact with Earth",
    "A fantasy tavern with secret passages and hidden treasures",
    "A lost city beneath the ocean's depths",
    "A deep space voyage to explore the outer reaches of the universe",
    "A parallel dimension where gravity works differently",
    "A magical portal to a world of wonders",
    "A day in the life of a space explorer on a distant planet",
    "A hidden temple in the heart of a dense jungle",
    "A wildlife documentary in the heart of the African savanna",
    "A journey through the inner workings of a computer",
    "A medieval village under a sky filled with shooting stars",
    "A dreamy underwater world filled with bioluminescent creatures",
    "A day in the life of a robot in a bustling futuristic city",
    "A high-speed race through a neon-lit cyberpunk cityscape",
    "A prehistoric landscape teeming with dinosaurs and primitive life",
    "A time-traveling archaeologist discovering ancient artifacts",
    "A zoo filled with mythical and legendary creatures from around the world",
    "A surreal dreamscape of floating islands and shifting landscapes",
    "A space station orbiting a distant exoplanet in a distant galaxy",
    "A tropical island paradise with hidden treasures and exotic wildlife",
    "A superhero's hidden lair beneath the bustling city streets",
    "A cosmic battle between starships in the depths of outer space",
    "A mechanical city where gears, cogs, and steam power everything",
    "A wizard's tower hidden deep within a mystical and enchanted forest",
    "A cosmic journey through the Milky Way, filled with wonders and mysteries",
    "A land made entirely of candy and sweets, a sugar-coated wonderland",
    "A private detective solving a mysterious noir case in a rainy city",
    "A day in the life of an artificial intelligence being in a futuristic world",
    "A grand adventure aboard a steampunk airship, soaring through the skies",
    "A mythical phoenix rising from the ashes, symbolizing rebirth and renewal",
    "A secret underground society struggling for survival in a post-apocalyptic world",
    "A brilliant scientist traveling through time to alter the course of history",
    "A fairy tale kingdom with talking animals and enchanted forests",
    "A deep-sea expedition to discover ancient shipwrecks and hidden treasures",
    "A mystical lighthouse guiding lost souls to safety along treacherous shores",
    "A daring journey to the very heart of a fiery volcano, full of danger and discovery",
    "A thriving colony on Mars, a testament to human innovation and determination",
    "A futuristic pet shop where robotic animals are the latest companions",
    "An immersive journey through a virtual reality world filled with endless possibilities",
    "A cosmic dance of planets and stars, a mesmerizing display of celestial beauty",
    "A relentless invasion of mechanical insects, threatening to consume everything in their path",
    "A group of survivors on a post-apocalyptic road trip in search of a new home",
    "A magical circus with supernatural acts and performers with incredible powers",
    "A high-stakes skateboarding competition in a futuristic, cyberpunk city",
    "A fantasy kingdom shrouded in mystery and wonder beneath a blood-red moon",
    "A team of superheroes uniting to save the world from a formidable supervillain",
    "A skilled rider and their dragon partner embarking on a high-flying adventure",
    "A time-traveling tourist experiencing pivotal moments in history firsthand",
    "A dense and haunting forest filled with eerie creatures and ancient secrets",
    "A pirate ship embarking on a treacherous voyage in search of legendary treasures",
    "A high-tech heist unfolding in the neon-lit, dystopian streets of a cyberpunk city",
    "A magical journey through a labyrinth of puzzles and riddles",
    "A lunar colony facing the challenge of a meteor shower in the dark of space",
    "A medieval alchemist's laboratory, brimming with mysterious experiments and concoctions",
    "A parallel world where magic and technology coexist in a harmonious balance",
    "A wildlife sanctuary dedicated to protecting endangered species from around the globe",
    "A daring deep-space mission to explore the enigmatic depths of a colossal black hole",
    "A futuristic courtroom drama with AI judges delivering verdicts with machine-like precision",
    "A mythical city hidden high above the clouds, accessible only by flying creatures or magic",
    "A post-apocalyptic world teeming with mutated wildlife and survivalist communities",
    "A covert hacker's hideout in a sprawling, neon-lit, cyberpunk metropolis",
    "A pioneering space exploration mission to a distant galaxy, charting unexplored territories",
    "A medieval quest involving dragon-slaying, chivalry, and the pursuit of hidden treasures",
    "A vibrant carnival on an alien planet, featuring exotic creatures and gravity-defying rides",
    "A time-traveler's encounter with famous historical figures, shaping the course of history",
    "A lost city buried beneath the Arctic ice, preserved for centuries in the frozen depths",
    "A thrilling, high-speed race through a virtual reality landscape filled with challenges",
    "A grand adventure aboard a magnificent steampunk submarine, diving into the ocean's mysteries",
    "A mystical forest inhabited by legendary creatures, where every step is an enchanting surprise",
    "A lunar base nestled on the dark side of the Moon, conducting groundbreaking research",
    "A whimsical underwater tea party hosted by anthropomorphic sea creatures and talking fish",
    "A haunted library filled with sentient books that reveal stories of the past and future",
    "A treacherous pirate treasure map leading to a mysterious island filled with unexpected dangers",
    "A fantasy realm where dreams take physical form, and imagination holds boundless power",
    "A thrilling safari through a prehistoric wilderness, encountering dinosaurs and ancient life",
    "A cityscape overtaken by a robotic uprising, as machines and AI claim their independence",
    "A time-traveler's visit to the ancient Egyptian pyramids during their construction",
    "A first contact scenario with an alien civilization, reshaping humanity's understanding of the cosmos",
    "A bustling tavern where adventurers gather, featuring hidden passages and mythical treasures",
    "A lost city lying hidden beneath the ocean's depths, waiting to reveal its submerged secrets",
    "A daring deep-space voyage to explore the outer reaches of the universe, uncovering cosmic wonders",
    "A parallel dimension where the laws of gravity are fluid and ever-changing, defying expectations",
    "A mystical portal to a world of wonders, allowing those who enter to experience the extraordinary",
    "A day in the life of a space explorer, navigating the challenges of an alien planet's terrain",
    "A hidden temple concealed within the heart of a dense and ancient jungle, filled with relics",
    "A captivating wildlife documentary set in the heart of the African savanna, observing nature's beauty",
    "A journey through the intricate inner workings of a computer's digital realm, full of electronic marvels",
    "A medieval village nestled beneath a star-studded sky, where legends come to life",
    "A dreamy underwater realm teeming with bioluminescent creatures and vibrant coral gardens",
    "A day in the life of a robotic inhabitant in a bustling, futuristic city, where technology thrives",
    "A high-speed race through the neon-lit streets of a cyberpunk city, pushing the limits of speed",
    "A prehistoric landscape populated by dinosaurs, primitive plants, and ancient creatures",
    "A time-traveling archaeologist unearthing ancient artifacts, uncovering stories of the past",
    "A fantastical zoo where mythical and legendary creatures from across the world coexist",
    "A surreal dreamscape filled with floating islands, surreal landscapes, and optical illusions",
    "A space station orbiting a distant exoplanet in a galaxy far beyond our own",
    "A tropical island paradise hiding secrets of long-forgotten treasure and exotic wildlife",
    "A hidden superhero lair concealed beneath the bustling city streets, ready to defend the world",
    "A cosmic showdown between starships in the vastness of outer space, a battle of epic proportions",
    "A mechanical city where intricate gears, cogs, and steam-powered technology drive society",
    "A towering wizard's tower nestled deep within a mystical forest, where magic reigns supreme",
    "A cosmic journey through the Milky Way, showcasing the wonders and mysteries of the galaxy",
    "A land entirely crafted from candy and sweets, a sugary wonderland for all to explore",
    "A private detective unraveling a complex noir case in the dimly lit, rain-soaked streets",
    "A day in the life of an artificial intelligence being in a futuristic world of endless possibilities",
    "A thrilling adventure aboard a steampunk airship, soaring through the skies and navigating perils",
    "A mythical phoenix rising from the ashes, symbolizing renewal and rebirth"
]

export default randomPrompts
  