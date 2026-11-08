// Edit the text in this file to change what the tabs say.
// level: beginner, mid or pro.  pop: popularity from 1 to 5 (my general impression, not exact statistics).
const SKILLS = [
  { group: "Languages", id: "csharp", name: "C#", level: "pro", pop: 4, popText: "Widely used for business software, web APIs and games.",
    use: "A general-purpose language from Microsoft for web APIs, desktop apps, games (Unity) and cloud services.",
    proj: "The backend language for my Timeless Travels capstone API and for the login and sign-up API in my Pet Booking System." },
  { group: "Languages", id: "javascript", name: "JavaScript", level: "pro", pop: 5, popText: "Hugely popular. It runs in every browser, and on servers and phones too.",
    use: "Makes web pages interactive and powers front ends, servers (Node.js) and mobile apps.",
    proj: "Drives the React front end of my Pet Booking System, my React Native gym app and the tabs on this site." },
  { group: "Languages", id: "sql", name: "SQL Query", level: "mid", pop: 5, popText: "One of the most widely used languages, because nearly every business app has a database.",
    use: "Creates, reads, updates and deletes data in relational databases such as SQL Server, and joins, filters and reports on it.",
    proj: "Designed the SQL Server database for Timeless Travels, later migrated to Azure SQL, and the Users table in my Pet Booking System." },
  { group: "Languages", id: "html", name: "HTML", level: "pro", pop: 5, popText: "Universal. Every web page is built on it.",
    use: "Gives web pages their structure and content: headings, text, links, images and forms.",
    proj: "The structure of every page on this site and of my front-end projects." },
  { group: "Languages", id: "css", name: "CSS", level: "pro", pop: 5, popText: "Universal. Every website uses it for its look and layout.",
    use: "Controls how pages look: colours, fonts, spacing, layout and animation.",
    proj: "Created the glass design on this site and on my Pet Booking System login and sign-up pages." },
  { group: "Frameworks and libraries", id: "aspnet", name: "ASP.NET", level: "pro", pop: 4, popText: "Popular, especially in enterprise and corporate environments.",
    use: "Microsoft’s framework for building web apps and APIs in C#, with built-in support for routing, security and databases.",
    proj: "Built the REST APIs for Timeless Travels and the JWT login and sign-up API for my Pet Booking System." },
  { group: "Frameworks and libraries", id: "react", name: "React", level: "beginner", pop: 5, popText: "One of the most widely used front-end libraries.",
    use: "A JavaScript library for building user interfaces out of reusable components.",
    proj: "The front end of my Pet Booking System: login, sign-up and session handling." },
  { group: "Frameworks and libraries", id: "reactnative", name: "React Native", level: "beginner", pop: 4, popText: "A leading choice for building cross-platform mobile apps.",
    use: "Builds real iOS and Android apps from one JavaScript and React codebase.",
    proj: "My gym equipment guide app, built with Expo. It was my first React Native project.",
    link: { href: "projects.html#apps", text: "See the app" } },
  { group: "Frameworks and libraries", id: "angular", name: "Angular 19", level: "mid", pop: 4, popText: "Popular for large, long-lived web apps, especially in companies.",
    use: "Google’s TypeScript-based framework for large, well-structured web apps.",
    proj: "The front end of my Timeless Travels capstone project." },
  { group: "Frameworks and libraries", id: "ionic", name: "Ionic", level: "mid", pop: 3, popText: "Established, with a smaller community than the biggest mobile options.",
    use: "Builds mobile apps with web skills (HTML, CSS, JavaScript) that run on iOS, Android and the web.",
    proj: "Used to practise building hybrid mobile apps." },
  { group: "Concepts and practices", id: "oop", name: "OOP", level: "pro", pop: 5, popText: "Foundational. It’s taught and used across most mainstream languages.",
    use: "Organises code into objects that combine data and behaviour, using classes, inheritance, encapsulation and polymorphism.",
    proj: "How I structure my C# backends into models, services and controllers." },
  { group: "Concepts and practices", id: "mvc", name: "MVC", level: "pro", pop: 4, popText: "A very common pattern in web frameworks, especially in enterprise projects.",
    use: "Splits an app into Model, View and Controller, so data, display and logic stay separate and easier to maintain.",
    proj: "My Pet Booking System API follows this split, with an AuthController, models and services." },
  { group: "Concepts and practices", id: "uxui", name: "UX/UI Design", level: "mid", pop: 4, popText: "In steady, high demand, because good design decides whether people enjoy a product.",
    use: "Designing how a product works (UX) and how it looks (UI), through wireframes, prototypes and visual design.",
    proj: "I design the screens and flows for my own apps and have extra design work to show.",
    link: { href: "projects.html#uiux", text: "See my design work" } },
  { group: "Concepts and practices", id: "techdoc", name: "Technical Documentation", level: "pro", pop: 4, popText: "Always needed. Clear documentation keeps teams and stakeholders on the same page.",
    use: "Writing and diagramming how systems work: activity diagrams, narratives, use case diagrams, class diagrams, ERDs and network designs.",
    proj: "Wrote the API documentation, architecture diagrams and database schemas for Timeless Travels.",
    link: { href: "projects.html#docs", text: "See my documentation samples" } },
];

const LEARNING = [
  { id: "python", name: "Python", level: "beginner", pop: 5, popText: "Consistently one of the most popular languages in the world.",
    use: "A readable, general-purpose language used for scripting, automation, data analysis and machine learning.",
    proj: "I’m learning it as my stepping stone into ML and LLM development." },
];

const INTERESTS = [
  { id: "ml", name: "ML and LLM development", projLabel: "What I’ve done so far",
    use: "Building and using machine-learning models and large language models, from training and evaluating them to putting them behind real apps.",
    proj: "Integrated machine-learning APIs and a Rasa chatbot into my Timeless Travels capstone, and earned the Oracle Cloud Infrastructure Data Science Professional certificate in 2025." },
  { id: "hacking", name: "Ethical hacking", projLabel: "What I’ve done so far",
    use: "Testing systems for weaknesses, with permission, so they can be fixed before real attackers find them.",
    proj: "I apply secure-coding basics in my own apps, such as hashed passwords and token-based sign-in, and ethical hacking is the next area I want to study." },
];

const LEVELS = { beginner: [1, "Beginner"], mid: [2, "Mid"], pro: [3, "Pro"] };

// Timeless Travels documents (draw.io diagrams and Google Docs).
// "type" attaches a document to a preview card: activity, technical-narrative, logical-narrative, ucd,
// technical-ucd, class, technical-erd, erd or network. A card with one document opens it directly,
// a card with several opens a list. Leave type empty to list a document only under "source documents".
const TT_LINKS = [
  { title: "Context and primitive diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1wklh94KLVivcFyDkufkIGRmYKzeBycaF#%7B%22pageId%22%3A%22f3m_rREs8f01atVZqc95%22%7D" },
  { title: "State diagram", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G17WRjkhJ1OROXykYZwXLXJywQ8OusIsLR#%7B%22pageId%22%3A%22Z7rCNNgsyGtX7ceDhqOI%22%7D" },
  { title: "Sequence diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1Gz4Pjaq-FbACG9sk8JqhDfHsLgxhrXZr#%7B%22pageId%22%3A%22QSfJ1nT000GuAj_qhCZ-%22%7D" },
  { title: "Dependency diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1TigGHrFVBcAXxKmsd6qmwgCUI0nwMdD-#%7B%22pageId%22%3A%226zbe8wdXnL3roOKddIRC%22%7D" },
  { title: "Functional decomposition diagram", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1p4sNWexLQIAjQExZ_MuQ3jil0xfg7GtG#%7B%22pageId%22%3A%22zNgwdIGa0AY75IjQ6EyQ%22%7D" },
  { title: "CRUD primitive diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1D2JypCY-4eyHaMjzEa5B2dYlpcUIGZba#%7B%22pageId%22%3A%222WZ-tBchlb3lfzMg8ptp%22%7D" },
  { title: "CRUD sequence diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1y6PqxZHooY2jPslX_97cSxiBKXwgKYLX#%7B%22pageId%22%3A%22TQ1nkdM8kiwyUzHNCdDv%22%7D" },
  { title: "Technical narratives", group: "Narratives", type: "technical-narrative", url: "https://docs.google.com/document/d/1JzwM5b21qTPc7S5YiU15xu5F5PoRxrYn8c5KElNxUoo/edit?tab=t.0" },
  { title: "Booking subsystem: primitive diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1U8uWPiqJTgsMQLUzIwH7h6T_72ISP-xv#%7B%22pageId%22%3A%22jMW6Sr0voOD2ATbgzma9%22%7D" },
  { title: "Booking subsystem: sequence diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1_wHROzZJOy1mOVKIyIuedcJFaakR29ME#%7B%22pageId%22%3A%22VjQtxs6gq6a7e9_Qg-4Z%22%7D" },
  { title: "Booking subsystem documentation", group: "Narratives", type: "logical-narrative", url: "https://docs.google.com/document/d/1eP6YceGQ3cWg3kdc4dHSKCeEKKswQK5t/edit" },
  { title: "Customer subsystem: CRUD narratives", group: "Narratives", type: "logical-narrative", url: "https://docs.google.com/document/d/1yJmBO61j0vMamaWdhin0smXH3XnLoSOO/edit" },
  { title: "Employee subsystem: primitive diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G13eXEv_-j8sc5ok9n6eE1RGUHF9kT7IQs#%7B%22pageId%22%3A%22IVZrldYsp30tvIAd3zkg%22%7D" },
  { title: "Employee subsystem: sequence diagrams", group: "System diagrams", type: "", url: "https://app.diagrams.net/#G1j_Tkp-eOrD37mVWl9vwCHeJ9RP8bvSAj#%7B%22pageId%22%3A%22js-Nj055QfkMvIBA_fm2%22%7D" },
  { title: "Employee subsystem: technical narratives", group: "Narratives", type: "technical-narrative", url: "https://docs.google.com/document/d/1Ro9Ajw6XeND-fpQeaKuLRapCUDDt2zddkcSblAR-w3k/edit?tab=t.0" },
  { title: "Technical narratives (part 2)", group: "Narratives", type: "technical-narrative", url: "https://docs.google.com/document/d/1oReT2UHQPVgguJiP29zm-R_kdeSOVO2W/edit" },
];

// Previews for the Technical documentation tab. Image names must match the files in assets/images exactly (lower case).
const DOCS = [
  { key: "activity", t: "Activity diagram", file: "activity diagram.png", d: "Shows the flow of actions and decisions in a process, step by step." },
  { key: "technical-narrative", t: "Technical narrative", file: "technical narrative.jpg", d: "Explains how a system is built: its components, technologies and how they work together." },
  { key: "logical-narrative", t: "Logical narrative", file: "logical narrative.jpg", d: "Describes what a system does and its business rules, in plain language and without technology details." },
  { key: "ucd", t: "Use case diagram (UCD)", file: "ucd.png", d: "Shows who uses the system and what each user can do." },
  { key: "technical-ucd", t: "Technical UCD", file: "technical ucd.png", d: "A use case diagram with added technical detail, such as system components and interfaces." },
  { key: "class", t: "Class diagram", file: "class diagram.png", d: "Shows the classes in a system, with their attributes, methods and relationships." },
  { key: "technical-erd", t: "Technical ERD", file: "technical erd.png", d: "The detailed database design: tables, data types, keys and constraints." },
  { key: "erd", t: "ERD", file: "erd.jpg", d: "Shows the main data entities in a system and how they relate to each other." },
  { key: "network", t: "Network design and architecture", file: "network design and architecture.png", d: "Shows servers, networks and how the parts of a system connect and communicate." },
];

// ---------- Glass tabs with a detail panel ----------
const meter = (on, max) => Array.from({ length: max }, (_, i) => `<i class="${i < on ? "on" : ""}"></i>`).join("");

function initTabs(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const list = root.querySelector(".tab-list");
  const panel = root.querySelector(".detail");
  let html = "", last = "";
  items.forEach((s) => {
    if (s.group && s.group !== last) {
      if (last) html += "</div>";
      html += `<div class="tab-group" role="presentation"><span class="group-label" aria-hidden="true">${s.group}</span>`;
      last = s.group;
    }
    html += `<button type="button" role="tab" class="tab" id="${rootId}-${s.id}" data-id="${s.id}" aria-selected="false" aria-controls="${panel.id}" tabindex="-1">${s.name}</button>`;
  });
  list.innerHTML = html + (last ? "</div>" : "");
  const tabs = [...list.querySelectorAll(".tab")];

  function show(id) {
    const s = items.find((x) => x.id === id);
    tabs.forEach((t) => {
      const on = t.dataset.id === id;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `${rootId}-${id}`);
    const stats = s.level ? `<div class="stats">
        <div><span class="label">Popularity</span><div class="meter" aria-hidden="true">${meter(s.pop, 5)}</div><p>${s.popText}</p></div>
        <div><span class="label">My level</span><div class="meter" aria-hidden="true">${meter(LEVELS[s.level][0], 3)}</div><p><strong>${LEVELS[s.level][1]}</strong></p></div>
      </div>` : "";
    panel.innerHTML = `<h3>${s.name}</h3>
      <p>${s.use}</p>${stats}
      <div class="proj"><span class="label">${s.projLabel || "In my projects"}</span><p>${s.proj}</p></div>
      ${s.link ? `<p class="detail-link"><a href="${s.link.href}">${s.link.text} →</a></p>` : ""}`;
  }

  tabs.forEach((t, i) => {
    ["mouseenter", "click", "focus"].forEach((ev) => t.addEventListener(ev, () => show(t.dataset.id)));
    t.addEventListener("keydown", (e) => {
      const move = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (move === undefined) return;
      e.preventDefault();
      tabs[(move + tabs.length) % tabs.length].focus();
    });
  });
  show(items[0].id);
}

// ---------- Page tabs on the Projects page ----------
function initPageTabs() {
  const tabs = [...document.querySelectorAll("[data-page-tab]")];
  if (!tabs.length) return;
  const panels = [...document.querySelectorAll("[data-panel]")];
  function select(name, updateHash) {
    tabs.forEach((t) => {
      const on = t.dataset.pageTab === name;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach((p) => (p.hidden = p.dataset.panel !== name));
    if (updateHash) { try { history.replaceState(null, "", "#" + name); } catch (e) { /* some browsers block this on local files */ } }
  }
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t.dataset.pageTab, true));
    t.addEventListener("keydown", (e) => {
      const move = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (move === undefined) return;
      e.preventDefault();
      const next = tabs[(move + tabs.length) % tabs.length];
      next.focus();
      select(next.dataset.pageTab, true);
    });
  });
  const wanted = location.hash.slice(1);
  select(tabs.some((t) => t.dataset.pageTab === wanted) ? wanted : tabs[0].dataset.pageTab, false);
  window.addEventListener("hashchange", () => {
    const h = location.hash.slice(1);
    if (tabs.some((t) => t.dataset.pageTab === h)) select(h, false);
  });
}

const kindOf = (l) => (l.url.includes("docs.google.com") ? "Google Doc" : "draw.io diagram");
const linkRows = (list) => list.map((l) => `<li><a href="${l.url}" target="_blank" rel="noopener"><span>${kindOf(l)}</span><span>${l.title}</span></a></li>`).join("");

// ---------- Document previews ----------
function openDialog(doc) {
  let dlg = document.getElementById("doc-dialog");
  if (!dlg) {
    dlg = document.createElement("dialog");
    dlg.id = "doc-dialog";
    dlg.className = "doc-dialog";
    document.body.append(dlg);
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }
  dlg.innerHTML = `<h3>${doc.t}</h3><ul class="links">${linkRows(TT_LINKS.filter((l) => l.type === doc.key))}</ul>
    <button type="button" class="btn ghost" autofocus>Close</button>`;
  dlg.querySelector("button").addEventListener("click", () => dlg.close());
  dlg.showModal();
}

function initDocs() {
  const grid = document.getElementById("doc-grid");
  if (!grid) return;
  grid.innerHTML = DOCS.map((doc, i) => {
    const img = encodeURI("assets/images/" + doc.file);
    const links = TT_LINKS.filter((l) => l.type === doc.key);
    const inner = `<div class="doc-preview"><img src="${img}" alt="Preview of ${doc.t}" loading="lazy"
        onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'missing',textContent:'Add assets/images/${doc.file}'}))"></div>
      <h3>${doc.t}</h3><p>${doc.d}</p>
      ${links.length ? `<span class="doc-open">${links.length > 1 ? links.length + " documents" : "Open document"} ↗</span>` : ""}`;
    if (links.length === 1) return `<a class="doc" href="${links[0].url}" target="_blank" rel="noopener">${inner}</a>`;
    if (links.length > 1) return `<button type="button" class="doc" data-i="${i}">${inner}</button>`;
    return `<a class="doc" href="${img}" target="_blank" rel="noopener">${inner}</a>`; // no document linked yet: opens the image
  }).join("");
  grid.querySelectorAll("button.doc").forEach((b) => b.addEventListener("click", () => openDialog(DOCS[b.dataset.i])));
  const lib = document.getElementById("doc-library");
  if (lib) {
    lib.innerHTML = [...new Set(TT_LINKS.map((l) => l.group))].map((g) =>
      `<h3 class="lib-group">${g}</h3><ul class="links">${linkRows(TT_LINKS.filter((l) => l.group === g))}</ul>`).join("");
  }
}

// ---------- Glow that follows the mouse ----------
function initGlow() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || !matchMedia("(hover: hover)").matches) return;
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  glow.setAttribute("aria-hidden", "true");
  document.body.prepend(glow);
  let x = innerWidth / 2, y = innerHeight / 3, queued = false;
  glow.style.transform = `translate(${x}px, ${y}px)`;
  addEventListener("pointermove", (e) => {
    x = e.clientX; y = e.clientY;
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { glow.style.transform = `translate(${x}px, ${y}px)`; queued = false; });
  });
}

initTabs("skills-tabs", SKILLS);
initTabs("learning-tabs", LEARNING);
initTabs("interests-tabs", INTERESTS);
initPageTabs();
initDocs();
initGlow();