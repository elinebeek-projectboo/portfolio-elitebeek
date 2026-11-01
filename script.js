/**
 * =========================================================================
 * PROJECT BOO — ELINE BEEK PORTFOLIO
 * Interactive tactile folder system, peeking project papers & stationery logic
 * =========================================================================
 * 
 * GUIDE FOR CUSTOMIZING:
 * - Projects data: See 'projects-data.js' to add/edit projects, notes, and tags.
 * - Artwork SVGs: Check 'getArtworkSVG()' below to adjust SVG colors or swap in image URLs.
 * - Crumple physics: Check 'crumpleCloseBtn' listener (line ~340) for animation timing.
 * - Postcard contact: Check bottom section for email copy and back-to-top scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements: Main Views
  const homeScreenView = document.getElementById('homeScreenView');
  const angledFolderLayers = document.querySelectorAll('.angled-folder-layer');
  const openFolderStage = document.getElementById('openFolderStage');
  const openStageTitle = document.getElementById('openStageTitle');
  const scatteredPapersArena = document.getElementById('scatteredPapersArena');
  const bottomFolderPocket = document.getElementById('bottomFolderPocket');
  const bottomPocketTab = document.getElementById('bottomPocketTab');
  const bottomPocketTabLabel = document.getElementById('bottomPocketTabLabel');
  const folderArtistNote = document.getElementById('folderArtistNote');
  const crumpleCloseBtn = document.getElementById('crumpleCloseBtn');
  
  // DOM Elements: Project Dossier Modal
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  
  // DOM Elements: Header Illustration & Postcard Contact
  const illustrationSlot = document.getElementById('illustrationSlot');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyToast = document.getElementById('copyToast');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Interactive State
  let activeFolder = null;
  let isCrumpling = false;

  // =========================================================================
  // ARTWORK SVGS
  // =========================================================================
  function getArtworkSVG(imageId, title) {
    // Real photo: if 'image' in projects-data.js is a file path (.jpg/.png/...), show that picture
    if (/\.(jpe?g|png|webp|gif)$/i.test(imageId || '')) {
      return `<img src="${imageId}" alt="${title}" class="project-photo">`;
    }
    switch (imageId) {
      case 'editorial_magazine':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#f4ede0"/>
            <rect x="35" y="35" width="160" height="230" fill="#ee8714" rx="4" transform="rotate(-3 115 150)"/>
            <rect x="55" y="40" width="150" height="220" fill="#e03014" rx="3" style="mix-blend-mode: multiply;"/>
            <text x="75" y="90" font-family="'Fraunces', serif" font-weight="900" font-size="32" fill="#ffffff">VIVID</text>
            <text x="75" y="118" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="14" fill="#e3d289" letter-spacing="3">MATTER</text>
            <line x1="75" y1="135" x2="185" y2="135" stroke="#ffffff" stroke-width="2"/>
            <circle cx="295" cy="150" r="70" fill="#941914"/>
            <circle cx="280" cy="135" r="50" fill="#e3d289" style="mix-blend-mode: multiply;"/>
            <line x1="230" y1="50" x2="360" y2="250" stroke="#190c0a" stroke-width="2" stroke-dasharray="4 4"/>
          </svg>
        `;

      case 'botanical_packaging':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#e3d289"/>
            <rect x="135" y="45" width="130" height="225" rx="26" fill="#190c0a"/>
            <rect x="175" y="20" width="50" height="35" rx="4" fill="#941914"/>
            <rect x="150" y="90" width="100" height="145" rx="6" fill="#faf8f5"/>
            <circle cx="200" cy="135" r="24" fill="#ee8714"/>
            <path d="M200 115 Q185 135 200 155 Q215 135 200 115 Z" fill="#591210"/>
            <text x="200" y="180" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="800" text-anchor="middle" fill="#190c0a" letter-spacing="2">SOLSTICE</text>
            <text x="200" y="195" font-family="'Caveat', cursive" font-size="13" text-anchor="middle" fill="#e03014">Wild Thyme</text>
            <circle cx="65" cy="80" r="28" fill="#ee8714" opacity="0.4"/>
            <circle cx="335" cy="220" r="38" fill="#941914" opacity="0.3"/>
          </svg>
        `;

      case 'type_experiment':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#190c0a"/>
            <g transform="skewX(-14) translate(30, 20)">
              <text x="40" y="95" font-family="'Fraunces', serif" font-weight="900" font-size="70" fill="#e03014">FORM</text>
              <text x="45" y="165" font-family="'Fraunces', serif" font-weight="900" font-size="70" fill="#ee8714">SHIFT</text>
              <text x="50" y="235" font-family="'Fraunces', serif" font-weight="900" font-size="70" fill="#e3d289">ECHO</text>
            </g>
            <line x1="20" y1="95" x2="380" y2="95" stroke="#591210" stroke-width="4"/>
            <line x1="20" y1="165" x2="380" y2="165" stroke="#941914" stroke-width="3" stroke-dasharray="8 6"/>
          </svg>
        `;

      case 'midnight_creatures':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#591210"/>
            <circle cx="290" cy="80" r="48" fill="#ee8714"/>
            <circle cx="275" cy="70" r="42" fill="#591210"/>
            <ellipse cx="180" cy="190" rx="90" ry="80" fill="#ee8714"/>
            <circle cx="145" cy="170" r="17" fill="#190c0a"/>
            <circle cx="145" cy="170" r="5" fill="#e3d289"/>
            <circle cx="205" cy="170" r="17" fill="#190c0a"/>
            <circle cx="205" cy="170" r="5" fill="#e3d289"/>
            <path d="M120 120 Q100 70 140 95 Z" fill="#e03014"/>
            <path d="M240 120 Q260 70 220 95 Z" fill="#e03014"/>
            <text x="50" y="70" font-size="20" fill="#e3d289">✦</text>
            <text x="330" y="180" font-size="18" fill="#e3d289">✦</text>
          </svg>
        `;

      case 'flora_ink':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#faf8f5"/>
            <circle cx="200" cy="150" r="90" fill="#ee8714" opacity="0.35"/>
            <path d="M180 270 Q200 180 170 80 Q195 120 220 70 Q215 150 230 270" fill="#190c0a"/>
            <path d="M170 140 Q110 110 100 70 Q130 95 170 125" fill="#190c0a"/>
            <path d="M210 160 Q270 130 290 80 Q250 110 205 145" fill="#190c0a"/>
            <circle cx="100" cy="65" r="8" fill="#941914"/>
            <circle cx="220" cy="65" r="9" fill="#e03014"/>
          </svg>
        `;

      case 'sketchbook_spreads':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#e3d289"/>
            <rect x="40" y="35" width="155" height="230" fill="#faf8f5" rx="3" stroke="#591210" stroke-width="1.5"/>
            <rect x="205" y="35" width="155" height="230" fill="#faf8f5" rx="3" stroke="#591210" stroke-width="1.5"/>
            <circle cx="110" cy="90" r="26" fill="none" stroke="#941914" stroke-width="3"/>
            <path d="M110 120 L110 190 M90 140 L130 140" stroke="#190c0a" stroke-width="3"/>
            <rect x="225" y="55" width="28" height="28" fill="#941914" rx="3"/>
            <rect x="260" y="55" width="28" height="28" fill="#ee8714" rx="3"/>
            <text x="225" y="125" font-family="'Caveat', cursive" font-size="17" fill="#591210">sunday sketches...</text>
          </svg>
        `;

      case 'noise_rhythm_poster':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#e03014"/>
            <rect x="40" y="30" width="320" height="240" fill="#190c0a"/>
            <g stroke="#ee8714" stroke-width="4" stroke-linecap="round">
              <line x1="90" y1="110" x2="90" y2="190"/>
              <line x1="130" y1="80" x2="130" y2="220"/>
              <line x1="170" y1="60" x2="170" y2="240"/>
              <line x1="210" y1="90" x2="210" y2="210"/>
              <line x1="250" y1="60" x2="250" y2="240"/>
              <line x1="290" y1="100" x2="290" y2="200"/>
            </g>
            <text x="200" y="80" font-family="'Fraunces', serif" font-weight="900" font-size="32" fill="#e3d289" text-anchor="middle">NOISE &amp; RHYTHM</text>
          </svg>
        `;

      case 'type_architecture_poster':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#f4ede0"/>
            <rect x="60" y="40" width="130" height="220" fill="#941914"/>
            <rect x="210" y="40" width="130" height="100" fill="#591210"/>
            <rect x="210" y="160" width="130" height="100" fill="#ee8714"/>
            <line x1="40" y1="260" x2="360" y2="40" stroke="#190c0a" stroke-width="3"/>
            <text x="80" y="100" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="28" fill="#ffffff">TYPE</text>
            <text x="80" y="130" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="28" fill="#e3d289">AS</text>
            <text x="80" y="160" font-family="'Space Grotesk', sans-serif" font-weight="800" font-size="28" fill="#ffffff">ARCH</text>
          </svg>
        `;

      case 'riso_series_poster':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#190c0a"/>
            <g transform="translate(45, 30)">
              <rect x="0" y="0" width="145" height="110" fill="#e3d289" rx="4"/>
              <circle cx="72" cy="55" r="30" fill="#e03014"/>
              <rect x="165" y="0" width="145" height="110" fill="#ee8714" rx="4"/>
              <rect x="195" y="25" width="85" height="60" fill="#941914" rx="2"/>
              <rect x="0" y="130" width="145" height="110" fill="#941914" rx="4"/>
              <polygon points="72,145 125,225 20,225" fill="#ee8714"/>
              <rect x="165" y="130" width="145" height="110" fill="#591210" rx="4"/>
              <circle cx="237" cy="185" r="30" fill="#e3d289"/>
            </g>
          </svg>
        `;

      case 'manifesto_card':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#190c0a"/>
            <rect x="25" y="25" width="350" height="250" fill="#591210" rx="8" stroke="#ee8714" stroke-width="2"/>
            <text x="200" y="75" font-family="'Fraunces', serif" font-weight="900" font-size="26" fill="#e03014" text-anchor="middle">PROJECT BOO</text>
            <foreignObject x="45" y="115" width="310" height="140">
              <p xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Fraunces', serif; font-size: 15px; color: #ffffff; line-height: 1.4; text-align: center; margin: 0;">
                “Colorful, direct, and not afraid to grab attention with designs from my world view made for this world.”
              </p>
            </foreignObject>
          </svg>
        `;

      case 'resume_card':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#faf8f5"/>
            <rect x="35" y="25" width="330" height="250" fill="#ffffff" rx="4" stroke="#e3d289" stroke-width="2"/>
            <rect x="55" y="45" width="65" height="65" fill="#ee8714" rx="4"/>
            <text x="87" y="88" font-family="'Fraunces', serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle">EB</text>
            <text x="135" y="65" font-family="'Fraunces', serif" font-weight="800" font-size="18" fill="#190c0a">Eline Beek</text>
            <text x="135" y="85" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="600" fill="#941914">Visual Designer</text>
            <line x1="55" y1="125" x2="345" y2="125" stroke="#190c0a" stroke-width="1.5" stroke-dasharray="3 3"/>
            <rect x="55" y="145" width="220" height="8" fill="#190c0a" opacity="0.1" rx="2"/>
            <rect x="55" y="165" width="180" height="8" fill="#190c0a" opacity="0.1" rx="2"/>
          </svg>
        `;

      case 'contact_card':
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#e3d289"/>
            <rect x="40" y="35" width="320" height="230" fill="#faf8f5" rx="6" stroke="#941914" stroke-width="2"/>
            <line x1="200" y1="45" x2="200" y2="255" stroke="#941914" stroke-width="1" stroke-dasharray="4 4"/>
            <text x="60" y="90" font-family="'Caveat', cursive" font-size="24" fill="#591210">Say Hello!</text>
            <text x="60" y="125" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#190c0a">hello@elinebeek.design</text>
            <text x="60" y="150" font-family="'Space Grotesk', sans-serif" font-size="11" fill="#4a3c3a">@projectboo.studio</text>
          </svg>
        `;

      default:
        return `
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#faf8f5"/>
            <text x="200" y="155" font-family="'Fraunces', serif" font-size="20" fill="#190c0a" text-anchor="middle">${title}</text>
          </svg>
        `;
    }
  }

  // =========================================================================
  // WHICH PROJECTS ARE SHOWN + THE PAPERS THAT STICK OUT OF THE FOLDERS
  // Projects with show: false in projects-data.js are skipped. Max 3 per folder.
  // =========================================================================
  function visibleProjects(folder) {
    return (folder.projects || []).filter(p => p.show !== false).slice(0, 3);
  }

  function buildPeekPapers() {
    angledFolderLayers.forEach(layer => {
      const folder = PORTFOLIO_DATA.folders.find(f => f.id === layer.dataset.folderId);
      const wrap = layer.querySelector('.folder-peek-papers');
      if (!folder || !wrap || folder.id === 'about') return;
      wrap.innerHTML = visibleProjects(folder).map((p, i) => `
        <div class="peek-paper p${i + 1}">
          ${p.cover ? `<img class="peek-img" src="${p.cover}" alt="${p.title}" onerror="this.style.display='none'">` : ''}
          <span class="peek-paperclip ${p.paperclip || 'brass'}"></span>
          <span class="peek-label"><span class="peek-badge">#${i + 1}</span><span class="peek-name">${p.title}</span></span>
        </div>`).join('');
    });
  }
  buildPeekPapers();

  // =========================================================================
  // 1. FOLDER HOVER & CLICK LOGIC (WHAT MAKES THE FOLDERS INTERACTIVE)
  // =========================================================================
  
  // NOTE: This makes the project papers pop out smoothly when you hover your mouse
  // over a folder, and slide back inside when your mouse leaves!
  angledFolderLayers.forEach(layer => {
    // When mouse enters folder: pop papers up
    layer.addEventListener('mouseenter', () => {
      layer.classList.add('is-hovered');
    });

    // When mouse leaves folder: slide papers back in
    layer.addEventListener('mouseleave', () => {
      layer.classList.remove('is-hovered');
    });

    // NOTE: This makes clicking on any folder open it up full screen!
    const folderId = layer.dataset.folderId;
    const folderData = PORTFOLIO_DATA.folders.find(f => f.id === folderId);

    if (folderData) {
      layer.addEventListener('click', (e) => {
        openFolderScreen(folderData);
      });

      // Also allows pressing Enter or Space on keyboard to open
      layer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFolderScreen(folderData);
        }
      });
    }
  });

  // NOTE: If you put your illustration in the header and click it, 
  // this smoothly scrolls down to your contact postcard!
  if (illustrationSlot) {
    illustrationSlot.addEventListener('click', () => {
      const contactSec = document.getElementById('contactSection');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // =========================================================================
  // VIEW 2: OPEN FOLDER SCREEN (Smooth Physical Opening)
  // =========================================================================
  function openFolderScreen(folder) {
    if (isCrumpling) return;
    activeFolder = folder;

    // Set top bar title
    openStageTitle.textContent = folder.title;

    // Set bottom folder pocket
    bottomFolderPocket.style.backgroundColor = folder.color;
    bottomFolderPocket.style.color = folder.textColor;
    bottomPocketTab.style.backgroundColor = folder.tabColor;
    bottomPocketTab.style.color = folder.textColor;
    bottomPocketTabLabel.textContent = folder.tabLabel;

    // Display personal handwritten artist note on graphic design / school projects
    folderArtistNote.textContent = folder.folderNote;
    if (folder.id === 'visual') {
      folderArtistNote.style.color = 'var(--c-espresso)';
      bottomFolderPocket.style.color = 'var(--c-espresso)';
    } else {
      folderArtistNote.style.color = 'var(--c-sand)';
      bottomFolderPocket.style.color = 'var(--c-sand)';
    }

    // Populate scattered project cards
    scatteredPapersArena.innerHTML = '';

    // =======================================================================
    // SPECIAL HANDLING FOR FOLDER 4 (About Me):
    // Only 1 expansive thing pops up that fills the screen more!
    // Folders 1, 2, and 3 remain completely unchanged with 3 scattered cards!
    // =======================================================================
    if (folder.id === 'about') {
      const profile = folder.profile || {};
      const aboutCard = document.createElement('article');
      aboutCard.className = 'about-me-expanded-sheet';
      aboutCard.setAttribute('tabindex', '0');
      aboutCard.setAttribute('role', 'region');
      aboutCard.setAttribute('aria-label', 'About Eline Beek Profile');

      aboutCard.innerHTML = `
        <div class="about-sheet-portrait-col">
          <div class="about-portrait-frame">
            <span class="about-paperclip brass" aria-hidden="true"></span>
            <div class="about-washi-tape" aria-hidden="true"></div>
            <img src="${profile.illustration || 'eline_art.png'}" alt="Illustration of Eline Beek" class="about-portrait-img">
            <div class="about-portrait-caption">
              <span class="caption-name">Eline Beek</span>
              <span class="caption-loc">Utrecht / Amsterdam ✦ NL</span>
            </div>
          </div>
        </div>

        <div class="about-sheet-content-col">
          <div class="about-sheet-meta-row">
            <span class="about-folder-badge">#4 ABOUT ME</span>
            <span class="about-stamp-badge">${profile.stamp || 'STUDIO BOO'}</span>
            <span class="about-status-badge">AVAILABLE FOR WORK</span>
          </div>

          <h2 class="about-sheet-headline">${profile.headline || 'Loud, colorful, and made to be remembered.'}</h2>

          <p class="about-sheet-bio">
            ${profile.bio || 'I’m Eline Beek — a graphic designer and visual artist working from Utrecht and Amsterdam. I make tactile designs with unapologetic color palettes, experimental print systems, and playful typography made to be touched, folded, and kept.'}
          </p>

          <div class="about-sheet-focus-block">
            <span class="about-block-label">STUDIO EXPERTISE:</span>
            <div class="about-focus-tags">
              <span class="focus-pill">✦ Editorial Design &amp; Zines</span>
              <span class="focus-pill">✦ Tactile Branding &amp; Identities</span>
              <span class="focus-pill">✦ Screenprinting &amp; Risograph</span>
              <span class="focus-pill">✦ Analog Scan &amp; Type Play</span>
            </div>
          </div>

          <div class="about-sheet-actions">
            <button class="about-to-postcard-btn" id="aboutToPostcardBtn" type="button">
              Send me a message ✉
            </button>
            <span class="about-direct-email">${profile.email || 'hello@elinebeek.design'}</span>
          </div>
        </div>
      `;

      scatteredPapersArena.appendChild(aboutCard);

      // Button scrolls smoothly to the contact postcard section
      const toPostcardBtn = aboutCard.querySelector('#aboutToPostcardBtn');
      if (toPostcardBtn) {
        toPostcardBtn.addEventListener('click', () => {
          crumpleCloseBtn.click();
          setTimeout(() => {
            const contactSec = document.getElementById('contactSection');
            if (contactSec) {
              contactSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 750);
        });
      }
    } else {
      // For Folders 1, 2, and 3: KEEP EXACTLY 3 SCATTERED CARDS!
      visibleProjects(folder).forEach((proj) => {
        const card = document.createElement('article');
        card.className = 'wireframe-paper-card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View details of ${proj.title}`);

        const artSVG = getArtworkSVG(proj.image, proj.title);

        card.innerHTML = `
          <span class="paper-number-badge">${proj.number}</span>
          <div class="paper-inner-artwork">
            ${artSVG}
          </div>
          <h3 class="paper-inner-title">${proj.title}</h3>
          <p class="paper-inner-desc">${proj.description}</p>
          <div class="paper-click-hint">
            <span>Inspect Project</span>
            <span>↗</span>
          </div>
        `;

        card.addEventListener('click', () => {
          openProjectModal(proj, folder);
        });

        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openProjectModal(proj, folder);
          }
        });

        scatteredPapersArena.appendChild(card);
      });
    }

    // Lock body scroll while modal open
    document.body.classList.add('modal-open');
    homeScreenView.classList.add('is-hidden');
    openFolderStage.classList.remove('is-crumpling');
    openFolderStage.classList.add('is-active');
    openFolderStage.setAttribute('aria-hidden', 'false');
  }

  // =========================================================================
  // THE PAPER CRUMPLE EXIT ANIMATION
  // =========================================================================
  crumpleCloseBtn.addEventListener('click', () => {
    if (isCrumpling) return;
    isCrumpling = true;

    openFolderStage.classList.add('is-crumpling');

    setTimeout(() => {
      openFolderStage.classList.remove('is-active');
      openFolderStage.classList.remove('is-crumpling');
      openFolderStage.setAttribute('aria-hidden', 'true');
      homeScreenView.classList.remove('is-hidden');
      document.body.classList.remove('modal-open');
      isCrumpling = false;
      activeFolder = null;
    }, 720);
  });

  // =========================================================================
  // PROJECT CAROUSEL
  // Slide 1 = the cover artwork. After that come the photos listed in the
  // project's 'slides' (projects-data.js). Photos that don't exist are skipped.
  // =========================================================================
  let carouselToken = 0;
  let carouselGo = null;

  function buildProjectCarousel(container, proj) {
    const token = ++carouselToken;
    carouselGo = null;
    container._index = 0;

    const slides = [{ html: getArtworkSVG(proj.image, proj.title), caption: '' }];
    render();

    (proj.slides || []).forEach(sl => {
      const probe = new Image();
      probe.onload = () => {
        if (token !== carouselToken) return;   // popup was closed or changed
        slides.push({ html: `<img src="${sl.src}" alt="${sl.caption || proj.title}">`, caption: sl.caption || '' });
        render();
      };
      probe.src = sl.src;
    });

    function render() {
      const current = container._index || 0;
      const multi = slides.length > 1;
      container.innerHTML = `
        <div class="carousel">
          <div class="carousel-track">
            ${slides.map(sl => `<div class="carousel-slide">${sl.html}</div>`).join('')}
          </div>
          ${multi ? `
            <button class="carousel-btn prev" type="button" aria-label="Previous">‹</button>
            <button class="carousel-btn next" type="button" aria-label="Next">›</button>
            <div class="carousel-footer">
              <span class="carousel-caption"></span>
              <div class="carousel-dots">
                ${slides.map((_, i) => `<button type="button" class="carousel-dot" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}
              </div>
            </div>` : ''}
        </div>`;

      if (!multi) return;
      const track = container.querySelector('.carousel-track');
      const caption = container.querySelector('.carousel-caption');
      const dots = container.querySelectorAll('.carousel-dot');

      function go(i, instant) {
        i = (i + slides.length) % slides.length;
        container._index = i;
        if (instant) track.style.transition = 'none';
        track.style.transform = `translateX(-${i * 100}%)`;
        if (instant) { track.offsetHeight; track.style.transition = ''; }
        caption.textContent = slides[i].caption;
        dots.forEach((d, n) => d.classList.toggle('active', n === i));
      }
      carouselGo = go;

      container.querySelector('.prev').addEventListener('click', () => go(container._index - 1));
      container.querySelector('.next').addEventListener('click', () => go(container._index + 1));
      dots.forEach(d => d.addEventListener('click', () => go(Number(d.dataset.i))));
      go(current, true);
    }
  }

  // Arrow keys flip through the carousel while a project popup is open
  window.addEventListener('keydown', (e) => {
    if (!projectModal.classList.contains('is-active') || !carouselGo) return;
    const i = document.getElementById('modalArtworkContainer')._index || 0;
    if (e.key === 'ArrowRight') carouselGo(i + 1);
    if (e.key === 'ArrowLeft') carouselGo(i - 1);
  });

  // =========================================================================
  // PROJECT DOSSIER MODAL
  // =========================================================================
  function openProjectModal(proj, folder) {
    document.getElementById('modalFolderBadge').textContent = folder.tabLabel;
    document.getElementById('modalFolderBadge').style.backgroundColor = folder.tabColor;
    document.getElementById('modalFolderBadge').style.color = folder.textColor;
    document.getElementById('modalYear').textContent = proj.year;

    const stampEl = document.getElementById('modalStampBadge');
    stampEl.textContent = proj.stamp;
    stampEl.style.color = proj.colorTag;
    stampEl.style.borderColor = proj.colorTag;

    document.getElementById('modalProjectTitle').textContent = proj.title;
    document.getElementById('modalProjectCategory').textContent = proj.category;
    document.getElementById('modalProjectDesc').textContent = proj.description;

    const artContainer = document.getElementById('modalArtworkContainer');
    buildProjectCarousel(artContainer, proj);

    const specsList = document.getElementById('modalProjectSpecs');
    specsList.innerHTML = '';
    if (proj.details) {
      proj.details.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        specsList.appendChild(li);
      });
    }

    const tagsWrap = document.getElementById('modalProjectTags');
    tagsWrap.innerHTML = '';
    if (proj.tags) {
      proj.tags.forEach(t => {
        const span = document.createElement('span');
        span.className = 'modal-tag';
        span.textContent = `#${t}`;
        tagsWrap.appendChild(span);
      });
    }

    projectModal.classList.add('is-active');
    projectModal.setAttribute('aria-hidden', 'false');
  }

  function closeProjectModal() {
    carouselToken++;
    projectModal.classList.remove('is-active');
    projectModal.setAttribute('aria-hidden', 'true');
  }

  modalCloseBtn.addEventListener('click', closeProjectModal);
  modalBackdrop.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('is-active')) {
        closeProjectModal();
      } else if (openFolderStage.classList.contains('is-active') && !isCrumpling) {
        crumpleCloseBtn.click();
      }
    }
  });

  // =========================================================================
  // POSTCARD CONTACT BUTTONS
  // =========================================================================
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'hello@elinebeek.design';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email);
      }
      copyToast.textContent = `Copied ${email} to clipboard!`;
      copyToast.classList.add('show');
      setTimeout(() => {
        copyToast.classList.remove('show');
      }, 2400);
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
