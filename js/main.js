/* =========================================================
   Chadrack Nsimba Bitombo — Portfolio · main.js
   ========================================================= */

// ========== DATA ==========

const projects = [
  {
    n: "01",
    title: "Odysseia",
    subtitle: "Festival · Identité globale",
    year: "2025",
    role: "Direction artistique, charte graphique, poster, page goodies, vidéo",
    tools: ["Illustrator", "Photoshop", "Figma", "Premiere"],
    img: "assets/project-odysseia.jpg",
    text: "Conception complète de l'identité visuelle d'un festival imaginaire : charte graphique, affiche officielle, page goodies du site web et participation au contenu vidéo.",
  },
  {
    n: "02",
    title: "Association fictive",
    subtitle: "Branding · Web · Print",
    year: "2025",
    role: "Identité visuelle, supports de communication, page web",
    tools: ["Illustrator", "Figma", "InDesign"],
    img: "assets/project-association.jpg",
    text: "Création d'une identité visuelle cohérente pour une association fictive, déclinée en supports de communication imprimés et numériques, jusqu'à une page web vitrine.",
  },
  {
    n: "03",
    title: "Je filme ma formation",
    subtitle: "Vidéo · Trophée d'Or",
    year: "2024",
    role: "Création vidéo, travail d'équipe",
    tools: ["Premiere Pro", "After Effects"],
    img: "assets/project-film.jpg",
    text: "Participation à la création d'une vidéo collective dans le cadre du concours « Je filme ma formation ». Projet récompensé d'un Trophée d'Or.",
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

// ========== RENDER ==========
function renderWork() {
  const root = document.getElementById("workList");
  root.innerHTML = projects
    .map(
      (p, i) => `
    <article class="project reveal ${i % 2 ? "project--alt" : ""}">
      <div class="project__img">
        <img src="${p.img}" alt="${p.title}" loading="lazy" width="1280" height="960" />
        <div class="project__badge">${p.n} / ${p.year}</div>
      </div>
      <div class="project__body">
        <div class="kicker">${p.subtitle}</div>
        <h3 class="display project__title">${p.title}<span class="accent">.</span></h3>
        <p class="project__text">${p.text}</p>
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
        <a href="#contact" class="project__cta">Étude de cas <span>↗</span></a>
      </div>
    </article>
  `,
    )
    .join("");
}

function renderSkills() {
  document.getElementById("skillsList").innerHTML = skills
    .map(
      (s, i) => `
    <li class="reveal"><span class="label">${s}</span><span class="num">0${i + 1}</span></li>
  `,
    )
    .join("");

  document.getElementById("toolsList").innerHTML = tools
    .map((t) => `<span>${t}</span>`)
    .join("");
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
    </li>
  `,
    )
    .join("");
}

// ========== NAV scroll state ==========
function initNav() {
  const nav = document.getElementById("nav");
  const onScroll = () =>
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ========== Theme toggle ==========
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
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
    sync();
  });
}

// ========== Reveal on scroll ==========
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "-50px" },
  );
  els.forEach((el) => io.observe(el));
}

// ========== Boot ==========
document.addEventListener("DOMContentLoaded", () => {
  renderWork();
  renderSkills();
  renderEducation();
  initNav();
  initTheme();
  initReveal();
});
