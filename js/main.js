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
    role: "Direction artistique, charte graphique, poster, page goodies, vidéo",
    tools: ["Illustrator", "Photoshop", "Figma", "Premiere"],
    img: "assets/affiche SAE-Bière.png",
    // ---- PAGE DÉTAIL ----
    context: "Projet universitaire de 1re année de BUT MMI. L'objectif était de concevoir l'identité visuelle complète d'un festival imaginaire autour du thème de la bière artisanale, du premier logo jusqu'à l'affiche officielle et aux goodies.",
    challenge: "Créer un univers graphique cohérent, festif et premium, déclinable sur tous les supports de communication : print, web et vidéo.",
    solution: "Direction artistique centrée sur des tonalités chaudes et une typographie expressive. La charte a été déclinée en affiche A0, page goodies du site web et vidéo promotionnelle.",
    // Ajoute ici tes vraies images et/ou vidéos du projet :
    gallery: [
      { type: "image", src: "assets/affiche SAE-Bière.png", caption: "Affiche officielle — SAE-Bière" },
      // { type: "image", src: "assets/saebiere-charte.jpg", caption: "Charte graphique" },
      // { type: "image", src: "assets/saebiere-goodies.jpg", caption: "Page goodies" },
      // { type: "video", src: "assets/saebiere-video.mp4", caption: "Vidéo promotionnelle" },
    ],
  },
  {
    n: "02",
    title: "Association fictive",
    subtitle: "Branding · Web · Print",
    year: "2025",
    role: "Identité visuelle, supports de communication, page web",
    tools: ["Illustrator", "Figma", "InDesign"],
    img: "assets/project-association.jpg",
    context: "Projet de création d'une identité de marque complète pour une association fictive engagée dans le développement durable. De la conception du logo jusqu'à la page web vitrine.",
    challenge: "Construire une image forte, mémorable et accessible qui reflète les valeurs d'une association à budget limité.",
    solution: "Palette épurée, iconographie simple et cohérente déclinée sur flyer, affiche, carte de visite et page web responsive conçue sur Figma.",
    gallery: [
      { type: "image", src: "assets/project-association.jpg", caption: "Identité visuelle — Association fictive" },
      // { type: "image", src: "assets/association-flyer.jpg", caption: "Flyer A5" },
      // { type: "image", src: "assets/association-web.jpg", caption: "Page web vitrine" },
    ],
  },
  {
    n: "03",
    title: "Je filme ma formation",
    subtitle: "Vidéo · Trophée d'Or",
    year: "2024",
    role: "Création vidéo, travail d'équipe",
    tools: ["Premiere Pro", "After Effects"],
    img: "assets/project-film.jpg",
    context: "Participation au concours national « Je filme ma formation » organisé par le réseau des IUT. Projet collectif mené avec 4 autres étudiants de la promotion.",
    challenge: "Raconter notre formation en 3 minutes de façon authentique, créative et impactante, en partant de zéro avec un matériel limité.",
    solution: "Narration visuelle construite autour de témoignages sincères, montage dynamique sous Premiere Pro et motion design sous After Effects. Résultat : Trophée d'Or.",
    gallery: [
      { type: "image", src: "assets/project-film.jpg", caption: "Trophée d'Or — Je filme ma formation" },
      // { type: "video", src: "assets/film-formation.mp4", caption: "Vidéo primée" },
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
  renderProjectPage(currentProject);
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

function renderProjectPage(p) {
  const panel = document.getElementById("projectPage");

  // Gallery
  const galleryHTML = p.gallery.length > 1
    ? `<div class="pp-gallery">
        <div class="pp-gallery__main" id="ppMainMedia">${renderMediaEl(p.gallery[0])}</div>
        <div class="pp-gallery__thumbs" id="ppThumbs">
          ${p.gallery.map((m, i) => `
            <div class="pp-thumb ${i === 0 ? "is-active" : ""}" data-gidx="${i}">
              ${m.type === "video"
                ? `<div class="pp-thumb__video-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>`
                : `<img src="${m.src}" alt="${m.caption || ""}" />`
              }
            </div>`).join("")}
        </div>
      </div>`
    : `<div class="pp-gallery"><div class="pp-gallery__main">${renderMediaEl(p.gallery[0])}</div></div>`;

  panel.innerHTML = `
    <div class="pp-inner">
      <button class="pp-close" id="ppClose" aria-label="Fermer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        Fermer
      </button>

      <div class="pp-hero">
        <div class="pp-hero__meta">
          <span class="kicker">${p.subtitle}</span>
          <span class="kicker pp-num">${p.n} / ${p.year}</span>
        </div>
        <h2 class="display pp-title">${p.title}<span class="accent">.</span></h2>
      </div>

      ${galleryHTML}

      <div class="pp-content">
        <div class="pp-body">
          <div class="pp-section">
            <span class="kicker pp-section__label">Contexte</span>
            <p class="pp-section__text">${p.context}</p>
          </div>
          <div class="pp-section">
            <span class="kicker pp-section__label">Défi</span>
            <p class="pp-section__text">${p.challenge}</p>
          </div>
          <div class="pp-section">
            <span class="kicker pp-section__label">Solution</span>
            <p class="pp-section__text">${p.solution}</p>
          </div>
        </div>
        <aside class="pp-aside">
          <div class="pp-aside__block">
            <span class="kicker">Rôle</span>
            <p>${p.role}</p>
          </div>
          <div class="pp-aside__block">
            <span class="kicker">Année</span>
            <p>${p.year}</p>
          </div>
          <div class="pp-aside__block">
            <span class="kicker">Outils</span>
            <ul class="pp-tools">
              ${p.tools.map(t => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        </aside>
      </div>

      <div class="pp-footer">
        <a href="#contact" class="btn btn--solid" onclick="closeProject()">Me contacter ↗</a>
      </div>
    </div>`;

  // Bind close
  document.getElementById("ppClose").addEventListener("click", closeProject);

  // Bind thumbnails
  if (p.gallery.length > 1) {
    document.querySelectorAll("[data-gidx]").forEach((el) => {
      el.addEventListener("click", () => {
        currentGalleryIdx = parseInt(el.getAttribute("data-gidx"), 10);
        document.getElementById("ppMainMedia").innerHTML = renderMediaEl(p.gallery[currentGalleryIdx]);
        document.querySelectorAll("[data-gidx]").forEach(t => t.classList.toggle("is-active", parseInt(t.getAttribute("data-gidx"), 10) === currentGalleryIdx));
      });
    });
  }
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
  renderWork();
  renderSkills();
  renderEducation();
  initNav();
  initTheme();
  initReveal();
});