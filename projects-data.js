/**
 * =========================================================================
 * PROJECT BOO — PORTFOLIO DATA GUIDE
 * =========================================================================
 * 
 * NOTE: THIS IS WHERE YOU CHANGE YOUR PROJECTS AND TEXT!
 * 
 * Each folder has:
 * - 'title': The name shown on the folder (e.g. "Graphic Design")
 * - 'tabLabel': The text on the tab tag (e.g. "#1 GRAPHIC")
 * - 'folderNote': The personal handwritten note written on the folder face when opened!
 * - 'color': The folder background hex color (e.g. "#941914")
 * 
 * Each project has:
 * - 'number': The badge text (e.g. "#1 project")
 * - 'title': Name of your project
 * - 'category': Type of work (e.g. "Editorial Design", "Gouache on Cotton")
 * - 'year': Creation year (e.g. "2024")
 * - 'stamp': Vintage postal stamp label (e.g. "FEATURED", "ORIGINAL", "SERIES")
 * - 'description': The story or concept behind the project
 * - 'details': Bullet points about paper stock, print methods, inks, or exhibitions
 * - 'show': true shows the project, false hides it (it stays saved for later!)
 * - 'cover': picture for the little paper that sticks out of the folder
 * - 'tags': Hashtags shown in the project dossier
 */

const PORTFOLIO_DATA = {
  folders: [
    {
      // =======================================================================
      // FOLDER 1: GRAPHIC DESIGN
      // =======================================================================
      id: "graphic",
      tabNumber: "#1",
      tabLabel: "#1 GRAPHIC",
      title: "Graphic Design",
      subtitle: "Branding, Editorial & Visual Systems",
      // NOTE: This note is handwritten on the folder when you open it!
      folderNote: "Graphic design is my way of experimenting, pushing boundaries and creating bold visuals. I love exploring unusual styles and making designs that stand out and demand attention.",
      color: "#941914",
      textColor: "#ffffff",
      tabColor: "#941914",
      accentColor: "#ee8714",
      tabPositionPercent: 32, // matching Grid.png sketch position
      projects: [
        {
          // --- PROJECT 1 ---
          
          id: "gd-1",
          show: true,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/vivid-matter.jpg",   // small picture on the paper that sticks out of the folder
          number: "School Project",
          title: "Overclocked",
          category: "Packaging Design",
          year: "2024",
          stamp: "FEATURED",
          colorTag: "#e03014",
          paperclip: "brass",
          description: "Overclocked is an energy drink brand based on the idea of adding extra seconds to your day. For when 24 hours just aren't enough. The design combines glitch aesthetics with bright pink and yellow colours and playful, hand-drawn illustrations.",
          details: [
            "Mader with Ipad and Procreate",
            "Made in actual size with the right measurments",
            
          ],
          image: "images/peek/vivid-matter.jpg",
          tags: ["Branding", "Package Design", "Illustration"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            
            { src: 'images/projects/gd-1/2.jpg', },
            { src: 'images/projects/gd-1/3.jpg',  }
          ]
        },
        {
          id: "gd-2",
          show: true,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/catcallingfinalposter.jpg",   // small picture on the paper that sticks out of the folder
          number: "School Project",
          title: "Catcalling Poster",
          category: "Poster Design",
          year: "2024",
          stamp: "CLIENT WORK",
          colorTag: "#ee8714",
          paperclip: "silver",
          description: "A poster project addressing the issue of catcalling. After experimenting with multiple poster designs, the final design became “HEY HOER”. The bold, provocative typography is intentionally attention-grabbing, reflecting the unwanted attention that catcalling forces onto others. The poster contains no extra explanation, making the message direct and confrontational.",
          details: [
            "The poster was created using Adobe Photoshop, with a strong focus on experimental typography, bold text and visual impact.",
            
          ],
          image: "images/peek/catcallingfinalposter.jpg",
          tags: ["Typography", "Poster Design", "Awareness"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/gd-2/1.jpg',  },
            { src: 'images/projects/gd-2/2.jpg',   },
            { src: 'images/projects/gd-2/3.jpg',  }
          ]
        },
        {
          id: "gd-3",
          show: false,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/type-distortions.jpg",   // small picture on the paper that sticks out of the folder
          number: "#3 project",
          title: "Typographic Distortions",
          category: "Experimental Type",
          year: "2023",
          stamp: "ARCHIVE",
          colorTag: "#591210",
          paperclip: "green",
          description: "Analog scanner manipulations of classic woodblock typefaces. Exploring the boundaries between legibility and pure abstract graphic expression.",
          details: [
            "Exhibited at the Dutch Graphic Design Biannual 2023",
            "Physical scans performed using motion drag on glass flatbeds",
            "Compiled into an accordion-fold collector specimen booklet"
          ],
          image: "type_experiment",
          tags: ["Typography", "Analog Scan", "Experimental"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/gd-3/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/gd-3/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/gd-3/3.jpg', caption: 'Final result' }
          ]
        }
      ]
    },
    {
      id: "visual",
      tabNumber: "#2",
      tabLabel: "#underconstruction",
      title: "Visual & Art",
      subtitle: "Illustrations, Gouache & Daily Sketches",
      folderNote: "Illustrations is the reason why I started making art in the first place. This folder is still under construction, but I will be adding more projects soon!",
      color: "#ee8714",
      textColor: "#190c0a",
      tabColor: "#ee8714",
      accentColor: "#941914",
      tabPositionPercent: 68, // matching Grid.png sketch position
      projects: [
        {
          id: "dr-1",
          show: false,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/childrens-book.jpg",   // small picture on the paper that sticks out of the folder
          number: "#1 project",
          title: "Midnight Creatures",
          category: "Gouache on Cotton",
          year: "2024",
          stamp: "ORIGINAL",
          colorTag: "#591210",
          paperclip: "brass",
          description: "An ongoing series of surreal character studies painted in opaque gouache and colored pencil on heavy Arches watercolor paper.",
          details: [
            "300gsm hot-pressed Arches cotton sheet",
            "Pigment-rich Holbein artists' gouache and Caran d'Ache Luminance pencils",
            "Exploration of playful forms, exaggerated silhouettes, and warmth"
          ],
          image: "midnight_creatures",
          tags: ["Illustration", "Gouache", "Character Design"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/dr-1/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/dr-1/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/dr-1/3.jpg', caption: 'Final result' }
          ]
          
        },
        {
          id: "dr-2",
          show: false,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/flora-ink.jpg",   // small picture on the paper that sticks out of the folder
          number: "#2 project",
          title: "Flora In Negative",
          category: "Ink & Monotype",
          year: "2024",
          stamp: "SERIES",
          colorTag: "#e03014",
          paperclip: "silver",
          description: "Organic flora pressed onto gelatin plates and pulled onto Japanese kozo paper, finished with energetic sumi ink linework.",
          details: [
            "Monotype print series with raw organic plant matter",
            "Finished with Japanese bamboo dipping pen and carbon ink",
            "Limited edition of 12 unique variable prints"
          ],
          image: "flora_ink",
          tags: ["Printmaking", "Sumi Ink", "Botanical"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/dr-2/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/dr-2/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/dr-2/3.jpg', caption: 'Final result' }
          ]
        },
        {
          id: "dr-3",
          show: false,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/sunday-diaries.jpg",   // small picture on the paper that sticks out of the folder
          number: "#3 project",
          title: "The Sunday Sketchbooks",
          category: "Visual Diaries",
          year: "2023-2024",
          stamp: "SKETCHES",
          colorTag: "#941914",
          paperclip: "green",
          description: "Unfiltered daily observations, cafe eavesdroppings, architecture studies, and quick shape-building exercises captured across 3 moleskine journals.",
          details: [
            "Over 180 pages of visual commentary and rapid line work",
            "Mixed media: brush pens, wax pastels, markers, and collage clippings",
            "Primary source material for larger studio works"
          ],
          image: "sketchbook_spreads",
          tags: ["Sketchbook", "Mixed Media", "Daily Practice"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/dr-3/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/dr-3/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/dr-3/3.jpg', caption: 'Final result' }
          ]
        }
      ]
    },
    {
      id: "posters",
      tabNumber: "#3",
      tabLabel: "#3 CRITICAL",
      title: "Critical Design",
      subtitle: "Design with a point of view",
      folderNote: "Critical design is about questioning the world around us instead of simply accepting it. I use design to challenge perspectives, expose uncomfortable truths and make people think differently. My goal is to create work that not only catches attention but also starts conversations and makes people question the status quo.",
      color: "#e03014",
      textColor: "#ffffff",
      tabColor: "#e03014",
      accentColor: "#e3d289",
      tabPositionPercent: 50, // center-ish
      projects: [
        {
          id: "po-1",
          show: true,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/intro.jpg",   // small picture on the paper that sticks out of the folder
          number: "Wardtaal Project",
          title: "Waar is Breda?",
          category: "Client Project",
          year: "2024",
          stamp: "EDITION 100",
          colorTag: "#ee8714",
          paperclip: "brass",
          description: "Waar is Breda? aims to connect young people with their city by making hidden places in Breda more visible. The project breaks the idea that there is nothing to do in Breda and shows that there are places and people that match everyone's interests. By placing interactive screens throughout the city, the project encourages young people to explore, discover new hangout spots and feel more connected to Breda.",
          details: [
            "Made in Photoshop and Studio Visual Code",
            "Made in collaboration with Wardtaal, Breda",
            
          ],
          image: "images/peek/intro.jpg",
          tags: ["Poster Design", "CityDesign", "Interactive"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/po-1/1.jpg',  },
            { src: 'images/projects/po-1/2.jpg',  },
            { src: 'images/projects/po-1/3.jpg',  }
          ]
        },
        {
          id: "po-2",
          show: true,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/blokkendoos.jpg",   // small picture on the paper that sticks out of the folder
          number: "#2 project",
          title: "Blokkendoos",
          category: "Disursive Design",
          year: "2023",
          stamp: "AWARDED",
          colorTag: "#591210",
          paperclip: "silver",
          description: "This project explores how society puts people into boxes through stereotypes, labels and beliefs. Using a familiar children's toy, I challenge the idea that toys should always be innocent and neutral. The building blocks use recognisable symbols, such as a cross representing Christianity, to make social categorisation visible and encourage conversations about equality, acceptance and discrimination.",
          details: [
            "The design challenges the idea of protecting children from difficult topics and instead encourages awareness from an early age. It questions what we consider neutral and shows how something as simple as a toy can start meaningful conversations between children and adults",
            
          
          ],
          image: "images/peek/blokkendoos.jpg",
          tags: ["Disursive Design", "Wood", "Awareness"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/po-2/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/po-2/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/po-2/3.jpg', caption: 'Final result' }
          ]
        },
        {
          id: "po-3",
          show: false,   // true = visible on the site, false = hidden (keeps the project saved)
          cover: "images/peek/summer-riso.jpg",   // small picture on the paper that sticks out of the folder
          number: "#3 project",
          title: "Summer Heatwave Riso Series",
          category: "Risograph Quadriptych",
          year: "2023",
          stamp: "RISO PRINT",
          colorTag: "#941914",
          paperclip: "green",
          description: "Four interconnected A3 riso prints celebrating urban summer in bright sunflower yellow, fluorescent pink, and hunter green ink.",
          details: [
            "Riso inks: Fluorescent Pink, Sunflower, Medium Blue, and Black",
            "Printed on Munken Print White 150gsm",
            "Overlapping screen halftone textures for optical color blending"
          ],
          image: "riso_series_poster",
          tags: ["Risograph", "Printmaking", "Limited Edition"],
          // Process photos for the carousel (add as many as you like, in order):
          slides: [
            { src: 'images/projects/po-3/1.jpg', caption: 'Step 1' },
            { src: 'images/projects/po-3/2.jpg', caption: 'Step 2' },
            { src: 'images/projects/po-3/3.jpg', caption: 'Final result' }
          ]
        }
      ]
    },
    {
      id: "about",
      tabNumber: "#4",
      tabLabel: "#4 ABOUT ME",
      title: "About Me",
      subtitle: "Eline Beek • Visual Designer & Artist",
      folderNote: "“A little glimpse behind Project Boo. I create tactile designs made to be touched, folded, and remembered. Open for freelance commissions & print collabs!” ✉",
      color: "#190c0a",
      textColor: "#e3d289",
      tabColor: "#190c0a",
      accentColor: "#ee8714",
      tabPositionPercent: 18,
      // For About Me, 1 single expansive dossier pops up that fills the screen!
      profile: {
        headline: "Loud, colorful, and made to be remembered.",
        bio: "Hey there! I’m Eline Beek — a graphic designer and visual artist working from Utrecht and Amsterdam. I make tactile designs with unapologetic color palettes, experimental print systems, and playful typography made to be touched and kept.",
        illustration: "eline_art.png",
        stamp: "STUDIO BOO",
        badge: "★ UTRECHT / AMS",
        focusAreas: [
          "Editorial Design & Experimental Zines",
          "Tactile Branding & Playful Visual Identities",
          "Handmade Screenprints, Gouache & Riso",
          "Analog Manipulations & Motion Typography"
        ],
        details: [
          "BA in Graphic Design & Visual Communication",
          "Available for selective client commissions & print collabs",
          "Studio based in the Netherlands • Working worldwide"
        ],
        email: "hello@elinebeek.design"
      },
      projects: [
        {
          id: "ab-1",
          number: "PROFILE",
          title: "About Eline Beek",
          category: "Designer • Artist",
          year: "2026",
          stamp: "ABOUT ME",
          colorTag: "#e03014",
          paperclip: "brass",
          description: "“I’m Eline Beek — colorful, direct, and not afraid to grab attention with designs from my world view made for this world.”",
          details: [
            "Tactile typography: creating designs you want to touch, fold, and keep",
            "Bridging classical print craftsmanship with playful contemporary interaction",
            "Available for select commissions, packaging, and brand identities"
          ],
          image: "eline_art.png",
          tags: ["About", "Manifesto", "Bio"]
        }
      ]
    }
  ]
};
