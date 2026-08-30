/* =========================================================================
   CONTENT LAYER — "quiet engineering" portfolio
   -------------------------------------------------------------------------
   This is the ONLY file to edit. Fill in fields with real data.
   Leave anything you don't have yet empty — the section hides itself.

   NOTE: This is populated as a real portfolio for Shanmuga Priyan M
   (CSE student). Replace anything below that isn't accurate with your
   real details. Empty fields simply hide their section/field.
   ========================================================================= */

const CONTENT = {
  /* ------------------------------ PROFILE ------------------------------ */
  profile: {
    name: "Shanmuga Priyan M",
    title: "CSE Student · Software Engineer",
    introduction:
      "Computer Science & Engineering student focused on building clean, " +
      "dependable software. I care about the architecture beneath the surface " +
      "— systems you can reason about, and interfaces that feel quiet by design.",
    currentFocus: "Computer Science · AI Explorer",
    bio:
      "I'm a Computer Science & Engineering student who enjoys turning ideas " +
      "into working software. My focus is on writing code that's simple, " +
      "maintainable, and built to last — the kind you can come back to months " +
      "later and still understand.",
    education:
      "Pursuing B.E. in Computer Science & Engineering. Coursework spans " +
      "data structures, algorithms, databases, operating systems, and " +
      "web technologies.",
    experience:
      "Student developer — building personal projects and exploring " +
      "full-stack development, algorithms, and cloud fundamentals.",
    interests: "Systems programming, clean architecture, open source, and " +
      "learning how well-designed software is put together.",
    location: "India",
    hire: {
      label: "Student · open to internships",
      status: "Open"
    },
    primaryCta: {
      label: "View work",
      href: "#work"
    }
  },

  /* ----------------------------- PROJECTS ------------------------------ */
  projects: [
    {
      title: "CloudDeploy",
      description:
        "A lightweight deployment pipeline that automates builds and " +
        "deployments for small web projects — config file, one command, done.",
      technologies: ["Node.js", "Docker", "Git", "AWS"],
      category: "Dev Tools",
      image: "",
      imageAlt: "",
      year: "2024",
      status: "Shipped",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Deploying a simple web app often means juggling servers, " +
          "environment variables, and build steps by hand each time.",
        approach:
          "Designed a minimal CLI that reads a small config file, runs the " +
          "build, and pushes to a target environment over SSH or a container " +
          "registry.",
        implementation:
          "Built the CLI in Node.js with a declarative YAML config. Wired in " +
          "Docker for isolated builds and added idempotent rollback on failure.",
        technologies: "Node.js, Docker, Git, AWS (EC2 / registries)",
        challenges:
          "Making rollbacks atomic and predictable when a deploy fails " +
          "partway through, especially across environments.",
        learned:
          "That deployment is as much about failure handling and observability " +
          "as it is about moving files around. Simple flows beat clever ones."
      }
    },
    {
      title: "Pulse Dashboard",
      description:
        "A real-time analytics dashboard with customizable widgets and " +
        "live-updating charts for personal or student project metrics.",
      technologies: ["React", "TypeScript", "PostgreSQL", "WebSockets"],
      category: "Web App",
      image: "",
      imageAlt: "",
      year: "2024",
      status: "In progress",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Most dashboards are either overpriced or overengineered for " +
          "someone who just wants a few live metrics on one screen.",
        approach:
          "Kept the scope tight: a grid of widgets, a realtime data source, " +
          "and clean export. No features added until a need was proven.",
        implementation:
          "React frontend with a thin TypeScript API layer, WebSockets for " +
          "live updates, and PostgreSQL for persistence. Widgets are " +
          "declarative and composable.",
        technologies: "React, TypeScript, PostgreSQL, WebSockets",
        challenges:
          "Keeping charts smooth on weaker hardware while updates stream in " +
          "continuously — respecting the user's machine, not just the data.",
        learned:
          "Real-time UIs are mostly a state-management problem. Rethinking " +
          "how updates flow through the app fixed more than any chart hack."
      }
    },
    {
      title: "CodeCheck AI",
      description:
        "An AI-assisted code review tool that flags bugs, suggests " +
        "improvements, and helps reinforce good habits on small projects.",
      technologies: ["Python", "FastAPI", "OpenAI API", "TypeScript"],
      category: "Tools",
      image: "",
      imageAlt: "",
      year: "2023",
      status: "Experiment",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Reviews on small projects often never happen — no team, no process, " +
          "just code that ships unchecked.",
        approach:
          "Built a bot that reviews a diff and returns focused, actionable " +
          "notes instead of generic feedback.",
        implementation:
          "Python FastAPI backend that takes a git diff, sends it through an " +
          "LLM with careful prompting, and returns categorized findings.",
        technologies: "Python, FastAPI, OpenAI API",
        challenges:
          "Prompting the model to be specific and not to hallucinate high-" +
          "confidence advice. Keeping output grounded in the actual diff.",
        learned:
          "LLM output is only as useful as the constraints you put around it. " +
          "Narrow scope and good context beat clever prompt tricks."
      }
    },
    {
      title: "RelayChat",
      description:
        "A realtime messaging app with rooms, presence indicators, and " +
        "persistent history — built to learn WebSockets and concurrency.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Redis"],
      category: "Web App",
      image: "",
      imageAlt: "",
      year: "2023",
      status: "Shipped",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Wanted to genuinely understand realtime communication — not just " +
          "use a service, but build the plumbing myself.",
        approach:
          "Built a chat app from scratch around WebSockets, focusing on the " +
          "hard parts: presence, ordering, and conflict-free message delivery.",
        implementation:
          "Node.js + Socket.io for transport, Redis for presence and quick " +
          "state, MongoDB for history. Messages are sequenced and idempotent.",
        technologies: "Node.js, Socket.io, MongoDB, Redis",
        challenges:
          "Handling message ordering and reconnects without losing or " +
          "duplicating messages during network flakiness.",
        learned:
          "Concurrency is unforgiving — most bugs came from assuming order " +
          "or atomicity that wasn't guaranteed. Designing for that changed " +
          "the whole architecture."
      }
    },
    {
      title: "TaskFlow CLI",
      description:
        "A terminal-based task manager for staying organized while studying " +
        "and building — tags, priorities, and quick captures without leaving " +
        "the shell.",
      technologies: ["Python", "SQLite", "Click"],
      category: "Tools",
      image: "",
      imageAlt: "",
      year: "2023",
      status: "Shipped",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Existing task apps are heavy and full of distractions. Wanted " +
          "something instant, private, and local.",
        approach:
          "A single-file CLI: type a task, tag it, list it. Data stored " +
          "locally in SQLite. No sync, no cloud, no noise.",
        implementation:
          "Python with Click for the command surface and SQLite for storage. " +
          "Kept to the standard library plus one small dependency.",
        technologies: "Python, SQLite, Click",
        challenges:
          "Making the interface feel fast and forgiving — good defaults, " +
          "short commands, and never losing typed input.",
        learned:
          "The best tool is the one low-friction enough to actually use " +
          "daily. Constraints are a feature, not a limitation."
      }
    },
    {
      title: "Data Structures Lab",
      description:
        "A reference and visualization project for core data structures and " +
        "algorithms — implementations plus clean, runnable explanations.",
      technologies: ["Python", "JavaScript", "Markdown"],
      category: "Learning",
      image: "",
      imageAlt: "",
      year: "2024",
      status: "In progress",
      github: "",
      liveDemo: "",
      details: {
        problem:
          "Textbook implementations are dense and hard to follow. Wanted " +
          "clear, runnable examples that actually teach the idea.",
        approach:
          "Curated implementations of common structures and algorithms, " +
          "each with a short plain-language explanation and a runnable test.",
        implementation:
          "Python and JavaScript implementations with light visualizations " +
          "in the browser where it helps. Each file is self-contained.",
        technologies: "Python, JavaScript, Markdown",
        challenges:
          "Balancing correctness with readability — real code that's also " +
          "clear enough to learn from without cutting corners.",
        learned:
          "Writing something to teach it exposes what you actually " +
          "understand. The gaps in my own knowledge showed up fast."
      }
    }
  ],

  /* ------------------------------ SKILLS ------------------------------- */
  skills: [
    { category: "Languages", technologies: ["C", "C++", "HTML", "CSS"] },
    { category: "Frontend", technologies: ["HTML", "CSS"] },
    { category: "Backend", technologies: ["Node.js", "FastAPI", "Express"] },
    { category: "Databases", technologies: ["SQLite", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Tools", technologies: ["Git", "Linux", "VS Code"] }
  ],

  /* ------------------------------- NOTES -------------------------------- */
  notes: [
    {
      title: "Why I favor simple solutions",
      date: "Jan 2024",
      description:
        "A short note on preferring boring, dependable technology over " +
        "whichever tool is trending this week.",
      content: [
        "The tool that's easiest to reason about is almost always the " +
        "one you should start with.",
        "Complexity compounds. Every dependency, every abstraction, every " +
        "'clever' trick is something you will have to debug at 2am later.",
        "Start simple. Only add machinery when the problem genuinely demands it."
      ],
      tags: ["Engineering", "Philosophy"]
    },
    {
      title: "Notes from building a realtime app",
      date: "Aug 2023",
      description:
        "What building RelayChat taught me about concurrency, ordering, " +
        "and assuming the network is unreliable.",
      content: [
        "Never assume messages arrive in order or exactly once.",
        "Presence is a distributed system problem hiding in a chat feature.",
        "Design for reconnects first; the happy path takes care of itself."
      ],
      tags: ["WebSockets", "Systems"]
    }
  ],

  /* ------------------------------- LINKS -------------------------------- */
  links: {
    email: "shanmugapriyan@example.com", // ← replace with real email
    github: "github.com/shanmugapriyan", // ← replace with real handle
    linkedin: "linkedin.com/in/shanmugapriyan", // ← replace with real profile
    twitter: "",
    website: "",
    extra: []
  },

  /* ------------------------ SITE METADATA ------------------------------ */
  meta: {
    copyrightYear: "2026",
    nav: {
      work: "Work",
      about: "About",
      notes: "Notes",
      contact: "Contact"
    }
  }
};

/* Export for browser. window.CONTENT used by app.js */
if (typeof window !== "undefined") {
  window.CONTENT = CONTENT;
}
