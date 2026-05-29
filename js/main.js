

const projects = [
  {
    n: "01",
    title: "Je filme ma formation",
    subtitle: "Vidéo · Trophée d'Or",
    year: "2026",
    client: "Concours national IUT",
    role: "Création vidéo, travail d'équipe",
    tools: ["Premiere Pro", "After Effects"],
    img: "assets/Je filme ma formation/Logo.png",
    context: "Participation au concours national « Je filme ma formation » organisé par le réseau des IUT. Projet collectif mené avec 4 autres étudiants de la promotion.",
    challenge: "Raconter notre formation en 3 minutes de façon authentique, créative et impactante, en partant de zéro avec un matériel limité.",
    solution: "Narration visuelle construite autour de témoignages sincères, montage dynamique sous Premiere Pro et motion design sous After Effects. Résultat : Trophée d'Or.",
    gallery: [
      { type: "image", src: "assets/Je filme ma formation/Gagnant.png", caption: "Trophée d'Or — Je filme ma formation" },
      
       { type: "image", src: "assets/Je filme ma formation/charte_graphique.jpg", caption: "Charte graphique" },
       { type: "image", src: "assets/Je filme ma formation/Logo MI.jpg", caption: "Logo" },
       { type: "image", src: "assets/Je filme ma formation/AFFICHE.png", caption: "Affiche" },
       { type: "image", src: "assets/Je filme ma formation/Gagnant.png", caption: "Trophée d'or_Je filme ma formation" },

      { type: "youtube", videoId: "Ln3s7tyS4Vc", caption: "Vidéo primée" },
    ],
  },
  {
    n: "02",
    title: "SAE-Bière",
    subtitle: "Festival · Identité globale",
    year: "2025",
    client: "Génie Biologique (Projet Universitaire)",
    role: "Direction artistique, charte graphique, poster, page goodies, vidéo",
    tools: ["Illustrator", "Photoshop", "Figma", "Premiere"],
    img: "assets/Dossier Odysseia/Ody-Hero-0.jpg",
    context: "Projet universitaire de 1re année de BUT MMI. L'objectif était de concevoir l'identité visuelle complète d'un festival imaginaire autour du thème de la bière artisanale, du premier logo jusqu'à l'affiche officielle et aux goodies.",
    challenge: "Créer un univers graphique cohérent, festif et premium, déclinable sur tous les supports de communication : print, web et vidéo.",
    solution: "Direction artistique centrée sur des tonalités chaudes et une typographie expressive. La charte a été déclinée en affiche A0, page goodies du site web et vidéo promotionnelle.",
    gallery: [
      { type: "image", src: "assets/Dossier Odysseia/Odysseia banner.png", caption: "Bannière — SAE-Bière" },
      { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-uniquetiquette-1.jpg", caption: "Étiquette unique" },
      { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-mulitietiquette-2.jpg", caption: "Étiquettes multiples" },
      { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-multiaffiche.jpg", caption: "Affiches Odysseïa" },
      // Pour ajouter un lien vers le site web, utilise type:"link-image" avec href:
      { type: "link-image", src: "assets/Dossier Odysseia/Odysseia-website-3.jpg", href: "https://but1.mmi-iutsf.org/S2/2025/odysseia/index.php?route=accueil", caption: "Site web SAE-Bière" },
       { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-rsn-i.jpg", caption: "Compte instagram Odysseïa" },
      { type: "youtube", videoId: "Ic1YwxXq5x4", caption: "Vidéo promo" },
    ],
  },
  {
    n: "03",
    title: "Association fictive",
    subtitle: "Branding · Web · Print",
    year: "2024",
    client: "Association fictive (Projet Universitaire)",
    role: "Identité visuelle, supports de communication, page web",
    tools: ["Illustrator", "Figma", "InDesign"],
    img: "assets/Dossier IJT/Logo.jpg",
    context: "Projet de création d'une identité de marque complète pour une association fictive engagée dans le développement durable. De la conception du logo jusqu'à la page web vitrine.",
    challenge: "Construire une image forte, mémorable et accessible qui reflète les valeurs d'une association à budget limité.",
    solution: "Palette épurée, iconographie simple et cohérente déclinée sur flyer, affiche, carte de visite et page web responsive conçue sur Figma.",
    gallery: [
      { type: "image", src: "assets/Dossier IJT/charte graphique.jpg", caption: "Identité visuelle — Association fictive" },
      { type: "image", src: "assets/Dossier IJT/sommaire.jpg", caption: "Sommaire " },
      { type: "image", src: "assets/Dossier IJT/Logo.jpg", caption: "Logo " },
      { type: "image", src: "assets/Dossier IJT/Typo.jpg", caption: "Typographie " },
      { type: "image", src: "assets/Dossier IJT/Palette de couleurs.jpg", caption: "Palette de couleurs " },
      { type: "image", src: "assets/Dossier IJT/Variantes du logo.jpg", caption: "Variantes du logo " },
      { type: "image", src: "assets/Dossier IJT/Mode d'utilisation.jpg", caption: "Mode d'utilisation " },
      { type: "link-image", src: "assets/Dossier IJT/capture d'écran.png", href: "https://but1.mmi-iutsf.org/S1/2025_S1/groupe_i/index.html", caption: "Site web vitrine" },
      { type: "video", src: "assets/Dossier IJT/Vidéo de sensibilisation.mp4", caption: "Vidéo de sensibilisation" },
    ],
  },
  
];

const skills = [
  "Design graphique",
  "Communication digitale",
  "Branding",
  "Création de contenu",
  "Réseaux sociaux",
  "Identité visuelle",
];

const tools = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "Canva",
  "Suite Adobe",
  "Premiere Pro",
];

const education = [
  {
    year: "2024 — 2027",
    title: "BUT MMI — Création Numérique",
    org: "IUT Sénart-Fontainebleau (UPEC)",
    desc: "Formation aux métiers du multimédia et de l'internet : design graphique, communication, développement, audiovisuel.",
  },
  {
    year: "2024",
    title: "Formation Photoshop",
    org: "Fast Training",
    desc: "Maîtrise approfondie de la retouche, de la composition et de l'illustration numérique.",
  },
  {
    year: "2021 — 2024",
    title: "Bac STI2D — spécialité SIN",
    org: "Sciences et Technologies de l'Industrie",
    desc: "Bases en systèmes d'information numérique, programmation et démarche de projet.",
  },
];

// ========== RENDER WORK ==========
function renderWork() {
  const root = document.getElementById("workList");
  root.innerHTML = projects
    .map(
      (p, i) => `
    <article class="project reveal ${i % 2 ? "project--alt" : ""}">
      <div class="project__img project__img--link" data-project="${i}" role="button" tabindex="0" aria-label="Voir le projet ${p.title}">
        <img src="${p.img}" alt="${p.title}" loading="lazy" width="1280" height="960" />
        <div class="project__badge">${p.n} / ${p.year}</div>
        <div class="project__overlay">
          <span class="project__overlay-label">Voir le projet <span>↗</span></span>
        </div>
      </div>
      <div class="project__body">
        <div class="kicker">${p.subtitle}</div>
        <h3 class="display project__title">${p.title}<span class="accent">.</span></h3>
        <p class="project__text">${p.role}</p>
        <div class="project__meta">
          <div>
            <div class="kicker">Rôle</div>
            <p>${p.role}</p>
          </div>
          <div>
            <div class="kicker">Outils</div>
            <p>${p.tools.join(" · ")}</p>
          </div>
        </div>
        <button class="project__cta" data-project="${i}">Étude de cas <span>↗</span></button>
      </div>
    </article>
  `,
    )
    .join("");

  document.querySelectorAll("[data-project]").forEach((el) => {
    el.addEventListener("click", () => openProject(parseInt(el.getAttribute("data-project"), 10)));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openProject(parseInt(el.getAttribute("data-project"), 10)); }
    });
  });
}

function renderSkills() {
  document.getElementById("skillsList").innerHTML = skills
    .map((s, i) => `<li class="reveal"><span class="label">${s}</span><span class="num">0${i + 1}</span></li>`)
    .join("");
  document.getElementById("toolsList").innerHTML = tools.map((t) => `<span>${t}</span>`).join("");
}

function renderEducation() {
  document.getElementById("eduList").innerHTML = education
    .map(
      (it) => `
    <li class="edu__item reveal">
      <div class="edu__year">${it.year}</div>
      <div class="edu__body">
        <h3 class="edu__name">${it.title}</h3>
        <p class="edu__org">${it.org}</p>
        <p class="edu__desc">${it.desc}</p>
      </div>
    </li>`,
    )
    .join("");
}

// ========== PROJECT PAGE (overlay) ==========

let currentGalleryIdx = 0;
let currentProject = null;

function openProject(idx) {
  currentProject = projects[idx];
  currentGalleryIdx = 0;
  renderProjectPage(currentProject, idx);
  const panel = document.getElementById("projectPage");
  panel.classList.add("is-open");
  panel.scrollTop = 0;
  document.body.style.overflow = "hidden";
  panel.focus();
}

function closeProject() {
  document.getElementById("projectPage").classList.remove("is-open");
  document.body.style.overflow = "";
}

function renderProjectPage(p, idx) {
  const panel = document.getElementById("projectPage");
  const prevIdx = idx > 0 ? idx - 1 : null;
  const nextIdx = idx < projects.length - 1 ? idx + 1 : null;

  // ---- HERO (1re image de gallery) ----
  const heroMedia = p.gallery[0];
  const heroHTML = heroMedia
    ? `<div class="pp-hero-media">
        ${heroMedia.type === "video"
          ? `<video class="pp-hero-img" controls playsinline preload="metadata"><source src="${heroMedia.src}" /></video>`
          : `<img class="pp-hero-img" src="${heroMedia.src}" alt="${heroMedia.caption || p.title}" />`
        }
      </div>`
    : "";

  // ---- GALERIE (tout sauf le hero, pleine largeur empilé) ----
  const galleryItems = p.gallery.slice(1);
  const galleryHTML = galleryItems.length > 0
    ? `<div class="pp-gallery-stack">
        ${galleryItems.map((m) => {
          if (m.type === "youtube") {
            // Miniature YouTube cliquable avec play overlay
            const thumbUrl = `https://img.youtube.com/vi/${m.videoId}/maxresdefault.jpg`;
            return `<figure class="pp-stack-fig">
              <a class="pp-yt-thumb" href="https://youtu.be/${m.videoId}" target="_blank" rel="noopener">
                <img src="${thumbUrl}" alt="${m.caption || "Vidéo"}" loading="lazy" />
                <div class="pp-yt-play">
                  <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.55)"/>
                    <polygon points="32,24 60,40 32,56" fill="white"/>
                  </svg>
                </div>
              </a>
              ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
            </figure>`;
          }
          if (m.type === "video") {
            return `<figure class="pp-stack-fig">
              <video class="pp-stack-media" controls playsinline preload="metadata">
                <source src="${m.src}" />
              </video>
              ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
            </figure>`;
          }
          if (m.type === "link-image") {
            // Image cliquable → lien vers site web, avec bouton "Voir le site"
            return `<figure class="pp-stack-fig">
              <a href="${m.href}" target="_blank" rel="noopener" class="pp-site-link-wrap">
                <img class="pp-stack-media" src="${m.src}" alt="${m.caption || ""}" loading="lazy" />
                <div class="pp-site-link-overlay">
                  <span class="pp-site-link-btn">Voir le site <span>↗</span></span>
                </div>
              </a>
              ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
            </figure>`;
          }
          // image standard
          return `<figure class="pp-stack-fig">
            <img class="pp-stack-media" src="${m.src}" alt="${m.caption || ""}" loading="lazy" />
            ${m.caption ? `<figcaption>${m.caption}</figcaption>` : ""}
          </figure>`;
        }).join("")}
      </div>`
    : "";

  // ---- NAV précédent / suivant ----
  const navHTML = `
    <div class="pp-nav">
      <div class="pp-nav__prev">
        ${prevIdx !== null
          ? `<button class="pp-nav__btn" data-goto="${prevIdx}">
              <span class="pp-nav__arrow">←</span>
              <span class="pp-nav__label">
                <span class="kicker">Projet précédent</span>
                <span class="pp-nav__name">${projects[prevIdx].title}</span>
              </span>
            </button>`
          : `<span></span>`
        }
      </div>
      <div class="pp-nav__next">
        ${nextIdx !== null
          ? `<button class="pp-nav__btn pp-nav__btn--next" data-goto="${nextIdx}">
              <span class="pp-nav__label">
                <span class="kicker">Projet suivant</span>
                <span class="pp-nav__name">${projects[nextIdx].title}</span>
              </span>
              <span class="pp-nav__arrow">→</span>
            </button>`
          : `<span></span>`
        }
      </div>
    </div>`;

  panel.innerHTML = `
    <div class="pp-inner">

      <!-- Barre retour -->
      <div class="pp-topbar">
        <button class="pp-close" id="ppClose" aria-label="Fermer">
          ← Retour aux projets
        </button>
      </div>

      <!-- Titre + catégorie -->
      <div class="pp-header">
        <h2 class="display pp-title">${p.title}<span class="accent">.</span></h2>
        <p class="pp-subtitle kicker">${p.subtitle}</p>
      </div>

      <!-- Image hero pleine largeur -->
      ${heroHTML}

      <!-- Bloc infos : Client · Rôle · Outils -->
      <div class="pp-meta-bar">
        <div class="pp-meta-item">
          <h3 class="pp-meta-label">Client</h3>
          <p>${p.client || "Projet universitaire BUT MMI"}</p>
        </div>
        <div class="pp-meta-item">
          <h3 class="pp-meta-label">Rôle</h3>
          <p>${p.role}</p>
        </div>
        <div class="pp-meta-item pp-meta-item--tools">
          <h3 class="pp-meta-label">Outils</h3>
          <div class="pp-tools-row">
            ${p.tools.map(t => `<span class="pp-tool-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- Le Défi -->
      <div class="pp-text-section">
        <h2 class="pp-section-title">Le Défi</h2>
        <p class="pp-section__text">${p.challenge}</p>
      </div>

      <!-- La Solution -->
      <div class="pp-text-section">
        <h2 class="pp-section-title">La Solution</h2>
        <p class="pp-section__text">${p.solution}</p>
      </div>

      <!-- Galerie empilée pleine largeur -->
      ${galleryHTML}

      <!-- Nav précédent / suivant -->
      ${navHTML}

    </div>`;

  // Events
  document.getElementById("ppClose").addEventListener("click", closeProject);
  panel.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => openProject(parseInt(btn.getAttribute("data-goto"), 10)));
  });
}

function renderMediaEl(item) {
  if (!item) return "";
  if (item.type === "video") {
    return `<figure class="pp-media-fig">
      <video class="pp-media" controls playsinline preload="metadata">
        <source src="${item.src}" />
      </video>
      ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
    </figure>`;
  }
  return `<figure class="pp-media-fig">
    <img class="pp-media" src="${item.src}" alt="${item.caption || ""}" />
    ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
  </figure>`;
}

function injectProjectPage() {
  const el = document.createElement("div");
  el.id = "projectPage";
  el.className = "project-page";
  el.setAttribute("tabindex", "-1");
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  document.body.appendChild(el);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("projectPage").classList.contains("is-open")) closeProject();
  });
}

// ========== NAV ==========
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ========== Theme ==========
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const moon = btn.querySelector(".icon-moon");
  const sun = btn.querySelector(".icon-sun");
  const stored = localStorage.getItem("theme");
  if (stored === "dark") document.documentElement.classList.add("dark");
  const sync = () => {
    const dark = document.documentElement.classList.contains("dark");
    moon.style.display = dark ? "none" : "";
    sun.style.display = dark ? "" : "none";
  };
  sync();
  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    sync();
  });
}

// ========== Reveal ==========
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => { entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }); },
    { threshold: 0.12, rootMargin: "-50px" },
  );
  els.forEach((el) => io.observe(el));
}

// ========== Mobile Menu (Hamburger) ==========
function initMobileMenu() {
  const btn = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (!btn || !links) return;

  const iconOpen = btn.querySelector(".menu-icon--open");
  const iconClose = btn.querySelector(".menu-icon--close");

  function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !links.classList.contains("is-open");
    links.classList.toggle("is-open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    iconOpen.style.display = isOpen ? "none" : "";
    iconClose.style.display = isOpen ? "" : "none";
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  btn.addEventListener("click", () => toggleMenu());

  // Close menu when a nav link is clicked
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => toggleMenu(false));
  });

  // Close menu on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) toggleMenu(false);
  }, { passive: true });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && links.classList.contains("is-open")) toggleMenu(false);
  });
}

// ========== Boot ==========
document.addEventListener("DOMContentLoaded", () => {
  injectProjectPage();
  renderWork();
  renderSkills();
  renderEducation();
  initNav();
  initTheme();
  initReveal();
  initMobileMenu();
});