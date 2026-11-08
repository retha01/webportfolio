// ---------- Settings you can edit ----------
// File type of your document previews in the assets folder (doc1, doc2, ...).
// Use "png", "jpg" or "pdf".
const DOC_EXT = "png";

// Level: beginner, mid or pro.  pop = popularity from 1 to 5 (my general impression, not exact statistics).
const SKILLS = [
  { id: "sql", name: "SQL Query", level: "mid", pop: 5, popText: "One of the most widely used languages. Almost every business app has a database behind it.",
    use: "Used to create, read, update and delete data in relational databases such as SQL Server, and to join, filter and report on that data.",
    link: { href: "projects.html#apps", text: "Used in my Pet Booking System" } },
  { id: "javascript", name: "JavaScript", level: "pro", pop: 5, popText: "Hugely popular. It runs in every browser and is also used on servers and mobile apps.",
    use: "Makes web pages interactive and powers front ends, servers (Node.js) and mobile apps." },
  { id: "csharp", name: "C#", level: "pro", pop: 4, popText: "Widely used, especially for business software, web APIs and game development.",
    use: "A general-purpose language from Microsoft for web APIs, desktop apps, games (Unity) and cloud services.",
    link: { href: "projects.html#apps", text: "Used in my Pet Booking System" } },
  { id: "oop", name: "OOP", level: "pro", pop: 5, popText: "Foundational. It’s taught and used across most mainstream languages.",
    use: "A way of organising code into objects that combine data and behaviour, using classes, inheritance, encapsulation and polymorphism." },
  { id: "mvc", name: "MVC", level: "pro", pop: 4, popText: "A very common pattern in web frameworks, especially in enterprise projects.",
    use: "A design pattern that splits an app into Model, View and Controller, so data, display and logic stay separate and easier to maintain." },
  { id: "html", name: "HTML", level: "pro", pop: 5, popText: "Universal. Every web page is built on it.",
    use: "Gives web pages their structure and content: headings, text, links, images and forms." },
  { id: "css", name: "CSS", level: "pro", pop: 5, popText: "Universal. Every website uses it for its look and layout.",
    use: "Controls how web pages look: colours, fonts, spacing, layout and animation." },
  { id: "aspnet", name: "ASP.NET", level: "pro", pop: 4, popText: "Popular, especially in enterprise and corporate environments.",
    use: "Microsoft’s framework for building web apps and APIs in C#, with built-in support for routing, security and databases.",
    link: { href: "projects.html#apps", text: "Used in my Pet Booking System" } },
  { id: "react", name: "React", level: "beginner", pop: 5, popText: "One of the most widely used front-end libraries.",
    use: "A JavaScript library for building user interfaces out of reusable components.",
    link: { href: "projects.html#apps", text: "Used in my Pet Booking System" } },
  { id: "reactnative", name: "React Native", level: "beginner", pop: 4, popText: "A leading choice for building cross-platform mobile apps.",
    use: "Builds real iOS and Android apps from one JavaScript and React codebase." },
  { id: "ionic", name: "Ionic", level: "mid", pop: 3, popText: "Established, with a smaller community than the biggest mobile options.",
    use: "Builds mobile apps with web skills (HTML, CSS, JavaScript) that run on iOS, Android and the web." },
  { id: "angular", name: "Angular 19", level: "mid", pop: 4, popText: "Popular for large, long-lived web apps, especially in companies.",
    use: "Google’s TypeScript-based framework for large, well-structured web apps." },
  { id: "uxui", name: "UX/UI Design", level: "mid", pop: 4, popText: "In steady, high demand, because good design decides whether people enjoy using a product.",
    use: "Designing how a product works (UX) and how it looks (UI), through wireframes, prototypes and visual design.",
    link: { href: "projects.html#uiux", text: "See my design work" } },
  { id: "techdoc", name: "Technical Documentation", level: "pro", pop: 4, popText: "Always needed. Clear documentation keeps software teams and stakeholders on the same page.",
    use: "Writing and diagramming how systems work, such as activity diagrams, narratives, use case diagrams, class diagrams, ERDs and network designs.",
    link: { href: "projects.html#docs", text: "See my documentation samples" } },
];

const LEARNING = [
  { id: "python", name: "Python", level: "beginner", pop: 5, popText: "Consistently one of the most popular languages in the world.",
    use: "A readable, general-purpose language used for scripting, automation, data analysis and machine learning." },
];

const LEVELS = { beginner: [1, "Beginner"], mid: [2, "Mid"], pro: [3, "Pro"] };

const DOCS = [
  { t: "Activity diagram", d: "Shows the flow of actions and decisions in a process, step by step." },
  { t: "Technical narrative", d: "Explains how a system is built: its components, technologies and how they work together." },
  { t: "Logical narrative", d: "Describes what a system does and its business rules, in plain language and without technology details." },
  { t: "Use case diagram (UCD)", d: "Shows who uses the system and what each user can do." },
  { t: "Technical UCD", d: "A use case diagram with added technical detail, such as system components and interfaces." },
  { t: "Class diagram", d: "Shows the classes in a system, with their attributes, methods and relationships." },
  { t: "Technical ERD", d: "The detailed database design: tables, data types, keys and constraints." },
  { t: "ERD", d: "Shows the main data entities in a system and how they relate to each other." },
  { t: "Network design and architecture", d: "Shows servers, networks and how the parts of a system connect and communicate." },
];

// ---------- Glass tabs with a detail panel ----------
function meter(on, max) {
  return Array.from({ length: max }, (_, i) => `<i class="${i < on ? "on" : ""}"></i>`).join("");
}

function initTabs(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const list = root.querySelector(".tab-list");
  const panel = root.querySelector(".detail");
  list.innerHTML = items.map((s) =>
    `<button type="button" role="tab" class="tab" id="${rootId}-${s.id}" data-id="${s.id}" aria-selected="false" aria-controls="${panel.id}" tabindex="-1">${s.name}</button>`
  ).join("");
  const tabs = [...list.children];

  function show(id) {
    const s = items.find((x) => x.id === id);
    const [lvl, lvlName] = LEVELS[s.level];
    tabs.forEach((t) => {
      const on = t.dataset.id === id;
      t.setAttribute("aria-selected", on);
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", `${rootId}-${id}`);
    panel.innerHTML = `
      <h3>${s.name}</h3>
      <p>${s.use}</p>
      <div class="stats">
        <div><span class="label">Popularity</span><div class="meter" aria-hidden="true">${meter(s.pop, 5)}</div><p>${s.popText}</p></div>
        <div><span class="label">My level</span><div class="meter" aria-hidden="true">${meter(lvl, 3)}</div><p><strong>${lvlName}</strong></p></div>
      </div>
      ${s.link ? `<p class="detail-link"><a href="${s.link.href}">${s.link.text} →</a></p>` : ""}`;
  }

  tabs.forEach((t, i) => {
    t.addEventListener("mouseenter", () => show(t.dataset.id));
    t.addEventListener("click", () => show(t.dataset.id));
    t.addEventListener("focus", () => show(t.dataset.id));
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
    if (updateHash && history.replaceState) history.replaceState(null, "", "#" + name);
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

// ---------- Document previews ----------
function initDocs() {
  const grid = document.getElementById("doc-grid");
  if (!grid) return;
  grid.innerHTML = DOCS.map((doc, i) => {
    const file = `assets/doc${i + 1}.${DOC_EXT}`;
    const preview = DOC_EXT === "pdf"
      ? `<object data="${file}#toolbar=0&navpanes=0" type="application/pdf" aria-label="Preview of ${doc.t}"></object>`
      : `<img src="${file}" alt="Preview of ${doc.t}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'missing',textContent:'Add ${file}'}))">`;
    return `<a class="doc" href="${file}" target="_blank" rel="noopener">
      <div class="doc-preview">${preview}</div><h3>${doc.t}</h3><p>${doc.d}</p></a>`;
  }).join("");
}

initTabs("skills-tabs", SKILLS);
initTabs("learning-tabs", LEARNING);
initPageTabs();
initDocs();