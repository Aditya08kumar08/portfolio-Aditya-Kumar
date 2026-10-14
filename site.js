const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
const page = document.body.dataset.page;
const themesOf = x => Array.isArray(x.t) ? x.t : [x.t];
const allThemes = () => [...new Set(P.flatMap(themesOf))];

function chrome(){
  const pages = [["home","index.html","Home"],["projects","projects.html","Projects"],["resume","resume.html","Resume"]];
  const h = $("site-header");
  h.className = "site";
  h.innerHTML = '<div class="bar"><a class="brand" href="index.html">Aditya Kumar</a><nav class="menu" aria-label="Main">' +
    pages.map(p => '<a href="' + p[1] + '"' + (p[0] === page ? ' aria-current="page"' : '') + '>' + p[2] + '</a>').join("") + '</nav></div>';
  $("site-footer").innerHTML = '<div class="wrap">Aditya Kumar · Portfolio · IIM Bangalore. Some projects are class or fictional-brand exercises and are labelled as such.</div>';
}

function previewUrl(u){ return /drive\.google\.com/.test(u) ? u.replace(/\/(view|edit).*$/, "/preview") : u; }

function resumeBox(full){
  const box = el("div", full ? "" : "resume");
  const url = LINKS.resume_pdf;
  if (!full) { box.appendChild(el("h2", "", "Resume")); }
  if (url) {
    if (full) { const f = el("iframe", "pdf"); f.src = previewUrl(url); f.title = "Resume PDF"; box.appendChild(f); }
    else box.appendChild(el("p", "", "My latest resume as a PDF."));
    const b = el("a", "btn fill", "Download resume"); b.href = url; b.target = "_blank"; b.rel = "noopener";
    const row = el("div", "btns"); row.appendChild(b);
    if (!full) { const v = el("a", "btn", "View online"); v.href = "resume.html"; row.appendChild(v); }
    box.appendChild(row);
  } else {
    box.appendChild(el("div", "slot" + (full ? " tall" : ""), "Updated resume coming soon. Add the link in data.js (resume_pdf)."));
  }
  return box;
}

function field(dl, label, text){
  const todo = text.indexOf("TODO:") !== -1;
  dl.appendChild(el("dt", "", label));
  dl.appendChild(el("dd", todo ? "todo" : "", text.replace(/TODO:\s*/g, "To add: ")));
}

function card(x){
  const a = el("article");
  if (x.img) { const im = el("img", "thumb"); im.src = x.img; im.alt = x.alt || x.n; im.loading = "lazy"; a.appendChild(im); }
  a.appendChild(el("p", "theme", themesOf(x).join(" · ")));
  a.appendChild(el("h3", "", x.n));
  const dl = el("dl");
  field(dl, "Problem", x.p); field(dl, "What I did", x.d); field(dl, "Result", x.r);
  if (x.tools) field(dl, "Tools", x.tools);
  a.appendChild(dl);
  const box = el("div", "links");
  (LINKS[x.id] || []).forEach(l => {
    if (!l[1]) return;
    const b = el("a", "btn", l[0]); b.href = l[1]; b.target = "_blank"; b.rel = "noopener"; box.appendChild(b);
  });
  if (!box.children.length) box.appendChild(el("span", "btn off", "Link coming soon"));
  a.appendChild(box);
  return a;
}

function topLinks(box){
  [["Email me", LINKS.email], ["LinkedIn", LINKS.linkedin]].forEach(([txt, url]) => {
    if (!url) return;
    const b = el("a", "btn", txt); b.href = url;
    if (url.indexOf("mailto:") !== 0) { b.target = "_blank"; b.rel = "noopener"; }
    box.appendChild(b);
  });
}

function home(){
  $("resume-slot").appendChild(resumeBox(false));
  topLinks($("top-links"));
  const themes = allThemes();
  const g = $("themes");
  const total = el("p", "count", P.length + " projects in total. A project can appear under more than one theme, but it is counted once.");
  g.parentNode.insertBefore(total, g);
  themes.forEach(t => {
    const n = P.filter(x => themesOf(x).indexOf(t) > -1).length;
    const a = el("a", "theme-link"); a.href = "projects.html#" + encodeURIComponent(t);
    a.appendChild(el("strong", "", t)); a.appendChild(el("span", "", n + " project" + (n > 1 ? "s" : "")));
    g.appendChild(a);
  });
  ["freshcut", "humanize", "sme"].forEach(id => $("featured").appendChild(card(P.find(x => x.id === id))));
}

function projects(){
  const themes = ["All", ...allThemes()];
  let active = decodeURIComponent(location.hash.slice(1));
  if (themes.indexOf(active) < 0) active = "All";
  const nav = $("filters");
  function draw(){
    [...nav.children].forEach(k => k.setAttribute("aria-pressed", k.textContent === active));
    const grid = $("grid"); grid.textContent = "";
    const list = P.filter(x => active === "All" || themesOf(x).indexOf(active) > -1);
    list.forEach(x => grid.appendChild(card(x)));
    $("count").textContent = list.length + " project" + (list.length === 1 ? "" : "s") + (active === "All" ? "" : " in " + active);
  }
  themes.forEach(t => {
    const c = el("button", "chip", t); c.type = "button";
    c.onclick = () => { active = t; history.replaceState(null, "", t === "All" ? "projects.html" : "#" + encodeURIComponent(t)); draw(); };
    nav.appendChild(c);
  });
  draw();
}

function resume(){ $("resume-slot").appendChild(resumeBox(true)); }

chrome();
({home, projects, resume})[page]();
