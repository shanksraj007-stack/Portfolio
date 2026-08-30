/* =========================================================================
   APP LOGIC — renders the portfolio from the CONTENT data layer.
   All personal data lives in content/data.js. This file only transforms
   that data into markup. No invented content here.
   ========================================================================= */
(function () {
  "use strict";

  var C = (typeof window !== "undefined" && window.CONTENT) || {};

  /* ----------------------------- helpers ---------------------------- */
  function el(id) { return document.getElementById(id); }
  function setText(id, value) { if (value) el(id).textContent = value; }
  function has(v) { return v !== undefined && v !== null && String(v).trim() !== ""; }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  /* rich text paragraphs: value can be a string (one para) or array of strings */
  function renderRich(container, value) {
    if (!has(value)) return;
    var list = Array.isArray(value) ? value : [value];
    var html = "";
    list.forEach(function (p) { html += "<p>" + esc(p) + "</p>"; });
    container.innerHTML = html;
  }

  /* ----------------------------- navbar ----------------------------- */
  function renderNav() {
    var p = C.profile || {};
    var brand = p.name || p.firstName || "";
    if (brand) el("nav-brand").textContent = brand;
    // hide nav links whose targets are empty (sections that won't render)
    if (!(C.projects && C.projects.length)) el("nav-work").style.display = "none";
    if (!has(p.bio)) el("nav-about").style.display = "none";
  }

  /* ------------------------------ hero ------------------------------ */
  function renderHero() {
    var p = C.profile || {};
    var showable = has(p.name) || has(p.title) || has(p.introduction);
    if (!showable) { el("hero").hidden = true; return; }

    el("hero").hidden = false;

    var hire = p.hire || {};
    if (has(hire.label)) {
      el("hero-hire").hidden = false;
      setText("hero-hire-label", hire.label);
      if (!has(hire.status)) el("hero-hire-label").textContent = hire.label; // no separate status text
    }

    setText("hero-name", p.name);
    setText("hero-title", p.title);
    setText("hero-intro", p.introduction);

    if (has(p.currentFocus)) {
      el("hero-focus").hidden = false;
      setText("hero-focus-val", p.currentFocus);
    }

    var cta = p.primaryCta || {};
    if (has(cta.label)) {
      el("hero-cta").hidden = false;
      setText("hero-cta-label", cta.label);
      var href = cta.href || "#work";
      el("hero-cta").setAttribute("href", href);
    }
  }

  /* --------------------------- projects list ------------------------ */
  function renderProjects() {
    var list = C.projects || [];
    if (!list.length) { el("work").hidden = true; return; }

    var head = (C.meta && C.meta.sections_work) || {};
    // work title/desc are editable via dedicated section copy in CONTENT if desired;
    // defaults "Selected Work" + description from profile is not applicable; keep default heading.
    el("work").hidden = false;

    var container = el("project-list");
    var html = "";
    list.forEach(function (proj, i) {
      var tech = (proj.technologies || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      html +=
        '<a class="project-row reveal" href="#project-' + i + '" data-project-index="' + i + '" aria-label="' + esc(proj.title || "Project") + '">' +
          '<span class="proj-index">' + String((proj.year || "")).trim() + (proj.category ? " · " + esc(proj.category) : "") + '</span>' +
          '<div class="proj-body">' +
            '<h3>' + esc(proj.title) + '</h3>' +
            '<p class="proj-desc">' + esc(proj.description) + '</p>' +
            (tech ? '<div class="proj-tech">' + tech + '</div>' : '') +
          '</div>' +
          '<span class="proj-arrow" aria-hidden="true">→</span>' +
        '</a>';
    });
    container.innerHTML = html;
  }

  /* ------------------------------ about ----------------------------- */
  function renderAbout() {
    var p = C.profile || {};
    if (!has(p.bio)) { el("about").hidden = true; return; }
    el("about").hidden = false;

    setText("about-subtitle", p.aboutSubtitle || "");
    setText("about-bio", p.bio);

    if (has(p.education)) {
      el("about-education").hidden = false;
      setText("about-education-val", p.education);
    }
    if (has(p.experience)) {
      el("about-experience").hidden = false;
      setText("about-experience-val", p.experience);
    }
    if (has(p.interests)) {
      el("about-interests").hidden = false;
      setText("about-interests-val", p.interests);
    }
  }

  /* ------------------------------ skills ---------------------------- */
  function renderSkills() {
    var list = C.skills || [];
    if (!list.length) { el("skills").hidden = true; return; }
    el("skills").hidden = false;
    setText("skills-desc", (C.meta && C.meta.skillsDesc) || "");

    var container = el("skills-list");
    var html = "";
    list.forEach(function (cat) {
      var items = (cat.technologies || []).map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
      html +=
        '<div class="skills-cat">' +
          '<span class="cat-label mono">' + esc(cat.category) + '</span>' +
          '<div class="cat-items">' + items + '</div>' +
        '</div>';
    });
    container.innerHTML = html;
  }

  /* ----------------------------- contact ---------------------------- */
  function contactEntries(links) {
    var out = [];
    if (!links) return out;
    if (has(links.email)) out.push({ label: "Email", value: links.email, href: /^mailto:/i.test(links.email) ? links.email : "mailto:" + links.email });
    if (has(links.github)) out.push({ label: "GitHub", value: links.github, href: /^https?:/i.test(links.github) ? links.github : "https://" + links.github });
    if (has(links.linkedin)) out.push({ label: "LinkedIn", value: links.linkedin, href: /^https?:/i.test(links.linkedin) ? links.linkedin : "https://" + links.linkedin });
    if (has(links.twitter)) out.push({ label: "Twitter", value: links.twitter, href: /^https?:/i.test(links.twitter) ? links.twitter : "https://" + links.twitter });
    if (has(links.website)) out.push({ label: "Website", value: links.website, href: /^https?:/i.test(links.website) ? links.website : "https://" + links.website });
    (links.extra || []).forEach(function (e) {
      if (e && has(e.label) && has(e.href)) out.push({ label: e.label, value: e.href.replace(/^https?:\/\//, ""), href: e.href });
    });
    return out;
  }

  function renderContact() {
    var links = C.links || {};
    var entries = contactEntries(links);
    var hasEmail = has(links.email);
    var profileHas = C.profile && (has(C.profile.name) || has(C.profile.introduction));

    var showContact = entries.length > 0 || hasEmail || profileHas;
    if (!showContact) { el("contact").hidden = true; return; }
    el("contact").hidden = false;

    var p = C.profile || {};
    setText("contact-title", (C.meta && C.meta.contactTitle) || "Contact");
    setText("contact-desc", (C.meta && C.meta.contactDesc) || "");

    var container = el("contact-links");
    container.innerHTML = "";
    entries.forEach(function (e) {
      var row = document.createElement("a");
      row.className = "contact-row";
      row.href = e.href;
      row.target = /^mailto:/.test(e.href) ? "" : "_blank";
      row.rel = "noopener";
      row.innerHTML = '<span class="cl">' + esc(e.label) + '</span><span class="cv">' + esc(e.value) + '</span><span class="ca" aria-hidden="true">→</span>';
      container.appendChild(row);
    });
  }

  /* ----------------------------- footer ----------------------------- */
  function renderFooter() {
    var p = C.profile || {};
    var show = has(p.name) || (C.links && has(C.links.github));
    if (!show) { el("footer").hidden = true; return; }

    el("footer").hidden = false;
    setText("footer-name", p.name);

    var year = (C.meta && C.meta.copyrightYear) || String(new Date().getFullYear());
    setText("footer-meta", "© " + year + (p.name ? " " + p.name : ""));

    // footer social links: derive from contact links but keep it minimal
    var links = C.links || {};
    var fw = el("footer-links");
    fw.innerHTML = "";
    if (has(links.email)) appendFooterLink(fw, "email", /^mailto:/i.test(links.email) ? links.email : "mailto:" + links.email);
    if (has(links.github)) appendFooterLink(fw, "github", links.github);
    if (has(links.linkedin)) appendFooterLink(fw, "linkedin", links.linkedin);
    if (has(links.twitter)) appendFooterLink(fw, "x", links.twitter);
  }
  function appendFooterLink(parent, label, href) {
    var a = document.createElement("a");
    a.href = /^https?:/i.test(href) ? href : "https://" + href;
    if (!/^mailto:/.test(a.href)) { a.target = "_blank"; a.rel = "noopener"; }
    a.textContent = label;
    parent.appendChild(a);
  }

  /* ---------------------- project detail view ----------------------- */
  var detailState = null;

  function renderDetail(project, container) {
    if (!project) return;

    el("detail-view").hidden = false;
    el("main").style.display = "none";

    setText("detail-title", project.title || "");
    setText("detail-desc", project.description || "");

    var tech = el("detail-tech");
    tech.innerHTML = "";
    (project.technologies || []).forEach(function (t) {
      var s = document.createElement("span");
      s.textContent = t;
      tech.appendChild(s);
    });

    var media = el("detail-media");
    if (project.image) {
      media.hidden = false;
      var img = el("detail-image");
      img.src = project.image;
      img.alt = project.imageAlt || project.title || "";
      img.loading = "lazy";
    } else {
      media.hidden = true;
    }

    var d = project.details || {};
    var ruleMap = {
      problem: ["rule-problem", "rule-problem-body"],
      approach: ["rule-approach", "rule-approach-body"],
      implementation: ["rule-implementation", "rule-implementation-body"],
      technologies: ["rule-technologies", "rule-technologies-body"],
      challenges: ["rule-challenges", "rule-challenges-body"],
      learned: ["rule-learned", "rule-learned-body"]
    };
    Object.keys(ruleMap).forEach(function (key) {
      var ids = ruleMap[key];
      var val = d[key] || project[key] || "";
      if (has(val)) {
        el(ids[0]).hidden = false;
        renderRich(el(ids[1]), val);
      } else {
        el(ids[0]).hidden = true;
      }
    });

    var actions = el("detail-actions");
    actions.hidden = true;
    if (project.github) {
      actions.hidden = false;
      var g = el("detail-github");
      g.hidden = false;
      g.href = /^https?:/i.test(project.github) ? project.github : "https://" + project.github;
    } else { el("detail-github").hidden = true; }

    if (project.liveDemo) {
      actions.hidden = false;
      var demo = el("detail-demo");
      demo.hidden = false;
      demo.href = /^https?:/i.test(project.liveDemo) ? project.liveDemo : "https://" + project.liveDemo;
    } else { el("detail-demo").hidden = true; }

    window.scrollTo(0, 0);
  }

  function showIndex() {
    el("detail-view").hidden = true;
    el("main").style.display = "";
    detailState = null;
    window.history.replaceState(null, "", location.pathname + location.search);
    window.scrollTo(0, 0);
  }

  function handleHash() {
    var h = location.hash;
    var m = h.match(/^#project-(\d+)$/);
    if (m) {
      var idx = parseInt(m[1], 10);
      var proj = (C.projects || [])[idx];
      if (proj) { detailState = { type: "project", index: idx }; renderDetail(proj); }
    } else {
      showIndex();
    }
  }
  window.addEventListener("hashchange", handleHash);

  /* project-row clicks open detail (prevent default anchor jump) */
  document.addEventListener("click", function (e) {
    var row = e.target.closest && e.target.closest(".project-row");
    if (row) {
      e.preventDefault();
      var idx = row.getAttribute("data-project-index");
      var proj = (C.projects || [])[parseInt(idx, 10)];
      if (proj) {
        detailState = { type: "project", index: parseInt(idx, 10) };
        renderDetail(proj);
        window.history.pushState(null, "", "#project-" + idx);
      }
    }
  });

  /* detail back button */
  el("detail-back").addEventListener("click", function (e) { e.preventDefault(); showIndex(); });

  /* --------------- scroll: navbar translucent + close mobile ------- */
  var nav = el("nav");
  function onScroll() {
    if (window.scrollY > 8) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --------------------------- mobile nav -------------------------- */
  var toggle = el("nav-toggle");
  var links = el("nav-links");
  var open = false;
  function setOpen(v) {
    open = v;
    links.classList.toggle("is-open", v);
    toggle.setAttribute("aria-expanded", v ? "true" : "false");
    toggle.setAttribute("aria-label", v ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () { setOpen(!open); });
  links.addEventListener("click", function (e) {
    if (open && e.target.closest("a")) setOpen(false);
  });

  /* ---------------------- scroll reveal observer ------------------- */
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("is-visible");
        ro.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      ro.observe(el);
    });
  }

  /* ------------------------------ boot ----------------------------- */
  function init() {
    renderNav();
    renderHero();
    renderProjects();
    renderAbout();
    renderSkills();
    renderContact();
    renderFooter();
    handleHash(); // initial route (project detail or index)
    setTimeout(observeReveals, 0); // observe after DOM built
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
