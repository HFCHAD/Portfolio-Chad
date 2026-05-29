/* =========================================================
   Chadrack Nsimba Bitombo — Portfolio · main.js
   ========================================================= */

// ========== DATA ==========

const projects = [
  {
    n: "01",
    title: "SAE-Bière",
    subtitle: "Festival · Identité globale",
    year: "2025",
    client: "Génie Biologique (Projet Universitaire)",
    role: "Direction artistique, charte graphique, poster, page goodies, vidéo",
    tools: ["Illustrator", "Photoshop", "Figma", "Premiere"],
    img: "assets/Dossier Odysseia/Odysseia.png",
    context: "Projet universitaire de 1re année de BUT MMI. L'objectif était de concevoir l'identité visuelle complète d'un festival imaginaire autour du thème de la bière artisanale, du premier logo jusqu'à l'affiche officielle et aux goodies.",
    challenge: "Créer un univers graphique cohérent, festif et premium, déclinable sur tous les supports de communication : print, web et vidéo.",
    solution: "Direction artistique centrée sur des tonalités chaudes et une typographie expressive. La charte a été déclinée en affiche A0, page goodies du site web et vidéo promotionnelle.",
    gallery: [
      { type: "image", src: "assets/Dossier Odysseia/Odysseia.png", caption: "Bannière — SAE-Bière" },
      { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-uniquetiquette-1.jpg", caption: "Étiquette unique" },
      { type: "image", src: "assets/Dossier Odysseia/ODYSSEIA-mulitietiquette-2.jpg", caption: "Étiquettes multiples" },
      // Pour ajouter un lien vers le site web, utilise type:"link-image" avec href:
      // { type: "link-image", src: "assets/saebiere-website.jpg", href: "https://ton-lien.fr", caption: "Site web SAE-Bière" },
      { type: "video", src: "assets/Dossier Odysseia/Coulisse Brassage - Odysseia.mp4", caption: "Vidéo promotionnelle" },
      // Pour une vidéo YouTube : { type: "youtube", videoId: "TON_ID_YT", caption: "Vidéo promo" },
    ],
  },
  {
    n: "02",
    title: "Association fictive",
    subtitle: "Branding · Web · Print",
    year: "2025",
    client: "Association fictive (Projet Universitaire)",
    role: "Identité visuelle, supports de communication, page web",
    tools: ["Illustrator", "Figma", "InDesign"],
    img: "assets/project-association.jpg",
    context: "Projet de création d'une identité de marque complète pour une association fictive engagée dans le développement durable. De la conception du logo jusqu'à la page web vitrine.",
    challenge: "Construire une image forte, mémorable et accessible qui reflète les valeurs d'une association à budget limité.",
    solution: "Palette épurée, iconographie simple et cohérente déclinée sur flyer, affiche, carte de visite et page web responsive conçue sur Figma.",
    gallery: [
      { type: "image", src: "assets/project-association.jpg", caption: "Identité visuelle — Association fictive" },
      // { type: "image", src: "assets/association-flyer.jpg", caption: "Flyer A5" },
      // { type: "link-image", src: "assets/association-web.jpg", href: "https://ton-site-association.fr", caption: "Site web vitrine" },
    ],
  },
  {
    n: "03",
    title: "Je filme ma formation",
    subtitle: "Vidéo · Trophée d'Or",
    year: "2024",
    client: "Concours national IUT",
    role: "Création vidéo, travail d'équipe",
    tools: ["Premiere Pro", "After Effects"],
    img: "assets/project-film.jpg",
    context: "Participation au concours national « Je filme ma formation » organisé par le réseau des IUT. Projet collectif mené avec 4 autres étudiants de la promotion.",
    challenge: "Raconter notre formation en 3 minutes de façon authentique, créative et impactante, en partant de zéro avec un matériel limité.",
    solution: "Narration visuelle construite autour de témoignages sincères, montage dynamique sous Premiere Pro et motion design sous After Effects. Résultat : Trophée d'Or.",
    gallery: [
      { type: "image", src: "assets/project-film.jpg", caption: "Trophée d'Or — Je filme ma formation" },
      // { type: "youtube", videoId: "TON_ID_YOUTUBE", caption: "Vidéo primée" },
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

// ========== LIGHTBOX ==========

let lightboxItems = [];   // liste {type, src/videoId/href, caption}
let lightboxIdx   = 0;

function openLightbox(items, startIdx) {
  lightboxItems = items;
  lightboxIdx   = startIdx;
  renderLightboxSlide();
  document.getElementById("lightbox").classList.add("lb-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("lb-open");
  // pause any playing video
  lb.querySelectorAll("video").forEach(v => v.pause());
  // don't reset main panel scroll lock
  if (!document.getElementById("projectPage").classList.contains("is-open")) {
    document.body.style.overflow = "";
  }
}

function lbNavigate(dir) {
  lightboxIdx = (lightboxIdx + dir + lightboxItems.length) % lightboxItems.length;
  renderLightboxSlide();
}

function renderLightboxSlide() {
  const m   = lightboxItems[lightboxIdx];
  const cnt = document.getElementById("lbContent");
  const cap = document.getElementById("lbCaption");
  const counter = document.getElementById("lbCounter");

  // pause previous video
  cnt.querySelectorAll("video").forEach(v => v.pause());

  if (m.type === "video") {
    cnt.innerHTML = `<video class="lb-video" controls playsinline autoplay>
      <source src="${m.src}" />
    </video>`;
  } else if (m.type === "youtube") {
    cnt.innerHTML = `<iframe class="lb-iframe"
      src="https://www.youtube.com/embed/${m.videoId}?autoplay=1"
      allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  } else {
    cnt.innerHTML = `<img class="lb-img" src="${m.src || ""}" alt="${m.caption || ""}" />`;
  }

  cap.textContent     = m.caption || "";
  counter.textContent = `${lightboxIdx + 1} / ${lightboxItems.length}`;

  // show/hide arrows
  const showArrows = lightboxItems.length > 1;
  document.getElementById("lbPrev").style.display = showArrows ? "" : "none";
  document.getElementById("lbNext").style.display = showArrows ? "" : "none";
}

function injectLightbox() {
  const lb = document.createElement("div");
  lb.id        = "lightbox";
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML = `
    <div class="lb-backdrop" id="lbBackdrop"></div>
    <button class="lb-close" id="lbClose" aria-label="Fermer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    <button class="lb-arrow lb-prev" id="lbPrev" aria-label="Précédent">‹</button>
    <button class="lb-arrow lb-next" id="lbNext" aria-label="Suivant">›</button>
    <div class="lb-stage">
      <div class="lb-content" id="lbContent"></div>
      <div class="lb-footer">
        <span class="lb-caption" id="lbCaption"></span>
        <span class="lb-counter" id="lbCounter"></span>
      </div>
    </div>`;
  document.body.appendChild(lb);

  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbBackdrop").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => lbNavigate(-1));
  document.getElementById("lbNext").addEventListener("click", () => lbNavigate(1));

  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("lb-open")) return;
    if (e.key === "Escape")      closeLightbox();
    if (e.key === "ArrowLeft")   lbNavigate(-1);
    if (e.key === "ArrowRight")  lbNavigate(1);
  });
}

// ========== PROJECT PAGE ==========

function renderProjectPage(p, idx) {
  const panel   = document.getElementById("projectPage");
  const prevIdx = idx > 0 ? idx - 1 : null;
  const nextIdx = idx < projects.length - 1 ? idx + 1 : null;

  // ---- HERO : 1re image, non-cliquable, pleine largeur ----
  const heroMedia = p.gallery[0];
  const heroHTML = heroMedia
    ? `<div class="pp-hero-media">
        ${heroMedia.type === "video"
          ? `<video class="pp-hero-img" controls playsinline preload="metadata">
               <source src="${heroMedia.src}" />
             </video>`
          : `<img class="pp-hero-img" src="${heroMedia.src}" alt="${heroMedia.caption || p.title}" />`
        }
      </div>`
    : "";

  // ---- Items lightbox : galerie hors hero, hors link-image ----
  const galleryItems = p.gallery.slice(1);
  const lbItems = galleryItems.filter(m => ["image", "video", "youtube"].includes(m.type));

  // ---- GALERIE : grille 2 colonnes, images en taille naturelle ----
  let lbIdx = 0;
  const galleryHTML = galleryItems.length > 0
    ? `<div class="pp-gallery-grid">
        ${galleryItems.map((m) => {

          /* ——— YouTube ——— */
          if (m.type === "youtube") {
            const i = lbIdx++;
            const thumb = `https://img.youtube.com/vi/${m.videoId}/mqdefault.jpg`;
            return `<figure class="pp-gitem pp-gitem--yt" data-lb-idx="${i}">
              <div class="pp-gitem__wrap">
                <img class="pp-gitem__img" src="${thumb}" alt="${m.caption || "Vidéo"}" loading="lazy" />
                <div class="pp-gitem__play">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <polygon points="32,24 60,40 32,56" fill="white"/>
                  </svg>
                </div>
              </div>
              ${m.caption ? `<figcaption class="pp-gitem__cap">${m.caption}</figcaption>` : ""}
            </figure>`;
          }

          /* ——— Vidéo locale ——— */
          if (m.type === "video") {
            const i = lbIdx++;
            return `<figure class="pp-gitem pp-gitem--video" data-lb-idx="${i}">
              <div class="pp-gitem__wrap">
                <video class="pp-gitem__img" preload="metadata" playsinline muted>
                  <source src="${m.src}" />
                </video>
                <div class="pp-gitem__play">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
                    <polygon points="32,24 60,40 32,56" fill="white"/>
                  </svg>
                </div>
              </div>
              ${m.caption ? `<figcaption class="pp-gitem__cap">${m.caption}</figcaption>` : ""}
            </figure>`;
          }

          /* ——— Image avec lien (site web) ——— */
          if (m.type === "link-image") {
            return `<figure class="pp-gitem pp-gitem--link">
              <a class="pp-gitem__wrap pp-gitem__link-a" href="${m.href}" target="_blank" rel="noopener noreferrer">
                <img class="pp-gitem__img" src="${m.src}" alt="${m.caption || ""}" loading="lazy" />
                <div class="pp-gitem__link-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Voir le site
                </div>
              </a>
              ${m.href ? `<a class="pp-gitem__url" href="${m.href}" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                ${m.href.replace(/^https?:\/\//, "")}
              </a>` : ""}
              ${m.caption ? `<figcaption class="pp-gitem__cap">${m.caption}</figcaption>` : ""}
            </figure>`;
          }

          /* ——— Image standard → lightbox ——— */
          const i = lbIdx++;
          return `<figure class="pp-gitem" data-lb-idx="${i}">
            <div class="pp-gitem__wrap">
              <img class="pp-gitem__img" src="${m.src}" alt="${m.caption || ""}" loading="lazy" />
              <div class="pp-gitem__zoom">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
            ${m.caption ? `<figcaption class="pp-gitem__cap">${m.caption}</figcaption>` : ""}
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
          : `<span></span>`}
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
          : `<span></span>`}
      </div>
    </div>`;

  // ---- HTML final ----
  panel.innerHTML = `
    <div class="pp-inner">
      <div class="pp-topbar">
        <button class="pp-close" id="ppClose" aria-label="Fermer">← Retour aux projets</button>
      </div>

      <div class="pp-header">
        <h2 class="display pp-title">${p.title}<span class="accent">.</span></h2>
        <p class="pp-subtitle kicker">${p.subtitle}</p>
      </div>

      ${heroHTML}

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

      <div class="pp-text-section">
        <h2 class="pp-section-title">Le Défi</h2>
        <p class="pp-section__text">${p.challenge}</p>
      </div>
      <div class="pp-text-section">
        <h2 class="pp-section-title">La Solution</h2>
        <p class="pp-section__text">${p.solution}</p>
      </div>

      ${galleryHTML}
      ${navHTML}
    </div>`;

  // — Events —
  document.getElementById("ppClose").addEventListener("click", closeProject);

  panel.querySelectorAll("[data-goto]").forEach(btn =>
    btn.addEventListener("click", () => openProject(parseInt(btn.getAttribute("data-goto"), 10)))
  );

  panel.querySelectorAll(".pp-gitem[data-lb-idx]").forEach(fig => {
    fig.addEventListener("click", () => {
      openLightbox(lbItems, parseInt(fig.getAttribute("data-lb-idx"), 10));
    });
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

// ========== Boot ==========
document.addEventListener("DOMContentLoaded", () => {
  injectProjectPage();
  injectLightbox();
  renderWork();
  renderSkills();
  renderEducation();
  initNav();
  initTheme();
  initReveal();
});