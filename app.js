const seedJobs = [
  {
    title: "AI Product Engineer",
    employer: "Vercel",
    location: "Remote",
    category: "Engineering",
    logo: "vercel",
    detailsUrl: "https://vercel.com/careers",
    monthlyTokens: 200000000,
    description:
      "Build AI-native deployment workflows for teams shipping frontend products at scale.",
    postedAt: Date.now() - 1000 * 60 * 60 * 6,
  },
  {
    title: "Product Designer",
    employer: "Figma",
    location: "San Francisco, CA",
    category: "Engineering",
    logo: "figma",
    detailsUrl: "https://www.figma.com/careers/",
    monthlyTokens: 175000000,
    description:
      "Design collaborative creation tools for product teams working across design and code.",
    postedAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    title: "Workspace AI Engineer",
    employer: "Notion",
    location: "Remote",
    category: "Engineering",
    logo: "notion",
    detailsUrl: "https://www.notion.com/careers",
    monthlyTokens: 150000000,
    description:
      "Build AI features that help teams turn docs, projects, and company knowledge into useful workflows.",
    postedAt: Date.now() - 1000 * 60 * 60 * 10,
  },
  {
    title: "Developer Relations Lead",
    employer: "Vercel",
    location: "New York, NY",
    category: "Developer relations",
    logo: "vercel",
    detailsUrl: "https://vercel.com/careers",
    monthlyTokens: 185000,
    description:
      "Create technical content, support launch partners, and turn developer feedback into platform direction.",
    postedAt: Date.now() - 1000 * 60 * 60 * 3,
  },
  {
    title: "Growth Marketing Lead",
    employer: "Notion",
    location: "Remote",
    category: "Marketing",
    logo: "notion",
    detailsUrl: "https://www.notion.com/careers",
    monthlyTokens: 10000000,
    description:
      "Own product launches, lifecycle campaigns, and team adoption programs for Notion's connected workspace.",
    postedAt: Date.now() - 1000 * 60 * 60 * 4,
  },
  {
    title: "Business Operations Manager",
    employer: "Figma",
    location: "San Francisco, CA",
    category: "Biz ops",
    logo: "figma",
    detailsUrl: "https://www.figma.com/careers/",
    monthlyTokens: 120000,
    description:
      "Build operating rhythms, improve planning workflows, and turn marketplace data into weekly decisions.",
    postedAt: Date.now() - 1000 * 60 * 60 * 8,
  },
  {
    title: "Frontend Engineer",
    employer: "Figma",
    location: "Remote, Europe",
    category: "Engineering",
    logo: "figma",
    detailsUrl: "https://www.figma.com/careers/",
    monthlyTokens: 125000000,
    description:
      "Craft fast, polished web experiences for designers and developers working in shared files.",
    postedAt: Date.now() - 1000 * 60 * 30,
  },
  {
    title: "Platform Reliability Engineer",
    employer: "Vercel",
    location: "San Francisco, CA",
    category: "Engineering",
    logo: "vercel",
    detailsUrl: "https://vercel.com/careers",
    monthlyTokens: 100000000,
    description:
      "Keep deployment infrastructure fast and reliable for frontend teams shipping around the world.",
    postedAt: Date.now() - 1000 * 60 * 75,
  },
  {
    title: "Lifecycle Marketing Manager",
    employer: "Figma",
    location: "New York, NY",
    category: "Marketing",
    logo: "figma",
    detailsUrl: "https://www.figma.com/careers/",
    monthlyTokens: 10000000,
    description:
      "Create campaigns that help teams discover, adopt, and expand their use of Figma products.",
    postedAt: Date.now() - 1000 * 60 * 95,
  },
  {
    title: "Revenue Operations Analyst",
    employer: "Notion",
    location: "Remote",
    category: "Biz ops",
    logo: "notion",
    detailsUrl: "https://www.notion.com/careers",
    monthlyTokens: 72000,
    description:
      "Improve sales planning, forecast quality, and operating dashboards for Notion's business teams.",
    postedAt: Date.now() - 1000 * 60 * 120,
  },
  {
    title: "Security Engineer",
    employer: "Vercel",
    location: "Remote",
    category: "Security",
    logo: "vercel",
    detailsUrl: "https://vercel.com/careers",
    monthlyTokens: 68000,
    description:
      "Harden platform systems, review product changes, and help teams ship secure deployment workflows.",
    postedAt: Date.now() - 1000 * 60 * 140,
  },
  {
    title: "Community Programs Lead",
    employer: "Notion",
    location: "Remote, Europe",
    category: "Marketing",
    logo: "notion",
    detailsUrl: "https://www.notion.com/careers",
    monthlyTokens: 10000000,
    description:
      "Grow Notion's creator community through programs, launches, and helpful education for teams.",
    postedAt: Date.now() - 1000 * 60 * 165,
  },
  {
    title: "Customer Support Specialist",
    employer: "Vercel",
    location: "Remote",
    category: "Customer support",
    logo: "vercel",
    detailsUrl: "https://vercel.com/careers",
    monthlyTokens: 5000000,
    description:
      "Help developers resolve deployment issues, explain product behavior, and share feedback with product teams.",
    postedAt: Date.now() - 1000 * 60 * 180,
  },
  {
    title: "Strategic Biz Ops Lead",
    employer: "Figma",
    location: "San Francisco, CA",
    category: "Biz ops",
    logo: "figma",
    detailsUrl: "https://www.figma.com/careers/",
    monthlyTokens: 15000000,
    description:
      "Lead planning projects, partner with product leaders, and turn company goals into operating plans.",
    postedAt: Date.now() - 1000 * 60 * 200,
  },
];

const companyLogos = {
  vercel: `
    <svg viewBox="0 0 256 222" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="m128 0 128 221.7H0L128 0Z" />
    </svg>
  `,
  figma: `
    <svg viewBox="0 0 38 57" aria-hidden="true" focusable="false">
      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" />
      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" />
      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
    </svg>
  `,
  notion: `
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <path fill="#fff" d="M16.5 8.2 73 4.1c6.9-.6 8.7-.2 13 2.9l5.9 4.1c3.7 2.7 5 3.4 5 6.3v61.3c0 3.8-1.4 6.1-6.4 6.4l-65.6 4c-4.2.2-6.2-.4-8.4-3.2l-4.4-5.7c-2.7-3.5-3.8-6.1-3.8-9.2V17.6c0-6.2 2.8-8.9 8.2-9.4Z"/>
      <path fill="currentColor" d="M73 4.1 16.5 8.2c-5.4.5-8.2 3.2-8.2 9.4V71c0 3.1 1.1 5.7 3.8 9.2l4.4 5.7c2.2 2.8 4.2 3.4 8.4 3.2l65.6-4c5-.3 6.4-2.6 6.4-6.4V17.4c0-2.9-1.3-3.6-5-6.3L86 7c-4.3-3.1-6.1-3.5-13-2.9ZM18 15.7l54.3-4c5.3-.4 6.4-.1 9.8 2.3l2.9 2.1c1.4 1 1.9 1.3.4 1.4l-63.8 3.8c-3.2.2-4-.1-5.7-1.5l-2.1-1.7c-.8-.7-.4-2.1 4.2-2.4Zm3.7 12.1c0-2.8.8-4.1 3.5-4.3l66.5-4v58.6c0 2.6-.9 3.9-3.3 4.1l-63.2 3.7c-2.4.1-3.5-.7-3.5-3.5V27.8Zm47.7 3.1c.4 1.7 0 2.1-1.7 2.3l-2.8.5v32.9c-2.5 1.3-4.8 2-6.7 2.2L36.4 35.1v29.7l5.7 1.3s0 3.4-4.6 3.8l-12.7.8c-.4-.9 0-2.7 1.3-3l3.4-.9V27.5l-4.7-.4c-.4-1.7.6-4.2 3.2-4.4l13.6-.9 22.7 34.4V33.9l-4.8-.5c-.4-2.1 1.2-3.7 3.1-3.9l6.8-.6Z"/>
    </svg>
  `,
};

const jobsList = document.querySelector("#jobs-list");
const featuredList = document.querySelector("#featured-list");
const jobCount = document.querySelector("#job-count");
const form = document.querySelector("#job-form");
const submitPanel = document.querySelector("#post");
const submitToggle = document.querySelector("#submit-toggle");
const search = document.querySelector("#search");
const locationFilter = document.querySelector("#location-filter");
const categoryFilter = document.querySelector("#category-filter");
const tokenFilter = document.querySelector("#token-filter");

let jobs = [...seedJobs];

function formatMonthlyTokens(monthlyTokens) {
  return new Intl.NumberFormat("en-US").format(monthlyTokens);
}

function createAnimatedTokenNumber(monthlyTokens) {
  const number = document.createElement("span");
  number.className = "token-number";
  number.dataset.value = monthlyTokens;
  number.textContent = "0";

  return number;
}

function createCompanyLogo(job, className) {
  const logo = document.createElement("span");
  logo.className = `${className} company-logo company-logo-${job.logo}`;
  logo.setAttribute("aria-label", `${job.employer} logo`);
  logo.innerHTML = companyLogos[job.logo] || "";

  return logo;
}

function setSubmitFormOpen(isOpen) {
  submitPanel.hidden = !isOpen;
  submitToggle.setAttribute("aria-expanded", String(isOpen));
  submitToggle.textContent = isOpen ? "Close form" : "Submit a job";

  if (isOpen) {
    submitPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    form.querySelector("input[name='title']").focus({ preventScroll: true });
  }
}

function animateTokenNumbers() {
  const tokenNumbers = document.querySelectorAll(".token-number");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  tokenNumbers.forEach((number) => {
    const target = Number(number.dataset.value);

    if (reduceMotion) {
      number.textContent = formatMonthlyTokens(target);
      return;
    }

    const duration = 1100;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * eased);

      number.textContent = formatMonthlyTokens(currentValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

function getRankedJobs() {
  return [...jobs].sort((a, b) => {
    if (b.monthlyTokens !== a.monthlyTokens) {
      return b.monthlyTokens - a.monthlyTokens;
    }

    return b.postedAt - a.postedAt;
  });
}

function getVisibleJobs() {
  const query = search.value.trim().toLowerCase();
  const location = locationFilter.value;
  const category = categoryFilter.value;
  const minimumMonthlyTokens = Number(tokenFilter.value);

  return getRankedJobs().filter((job) => {
    const searchableText = `${job.title} ${job.employer} ${job.location} ${job.category} ${job.description}`.toLowerCase();
    const matchesQuery = !query || searchableText.includes(query);
    const matchesLocation =
      !location || job.location.toLowerCase().includes(location);
    const matchesCategory =
      !category || job.category.toLowerCase() === category;
    const matchesTokens = job.monthlyTokens >= minimumMonthlyTokens;

    return matchesQuery && matchesLocation && matchesCategory && matchesTokens;
  });
}

function createFeaturedCard(job) {
  const article = document.createElement("article");
  article.className = "featured-card";

  const art = document.createElement("div");
  art.className = "featured-art";
  const logo = createCompanyLogo(job, "featured-logo");

  const tokenStack = document.createElement("div");
  tokenStack.className = "featured-token-stack";

  const tokenLabel = document.createElement("span");
  tokenLabel.className = "featured-token-label";
  tokenLabel.textContent = "monthly tokens";

  tokenStack.append(createAnimatedTokenNumber(job.monthlyTokens), tokenLabel);
  art.append(logo, tokenStack);

  const title = document.createElement("h3");
  title.textContent = job.employer;

  const description = document.createElement("p");
  description.textContent = job.description;

  const links = document.createElement("div");
  links.className = "quick-links";
  links.innerHTML = "<span>Website →</span><span>Careers →</span>";

  article.append(art, title, description, links);

  return article;
}

function createJobCard(job, index) {
  const article = document.createElement("article");
  article.className = "job-card";

  const top = document.createElement("div");
  top.className = "job-card-top";

  const rank = document.createElement("span");
  rank.className = "rank";
  rank.textContent = `#${index + 1}`;

  const logo = createCompanyLogo(job, "job-logo");

  const tokens = document.createElement("span");
  tokens.className = "tokens";
  tokens.append(
    createAnimatedTokenNumber(job.monthlyTokens),
    document.createTextNode(" monthly tokens"),
  );

  top.append(rank, logo, tokens);

  const content = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = job.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${job.employer} · ${job.location}`;

  const category = document.createElement("span");
  category.className = "category";
  category.textContent = job.category;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = job.description;

  const detailsLink = document.createElement("a");
  detailsLink.className = "details-link";
  detailsLink.href = job.detailsUrl;
  detailsLink.target = "_blank";
  detailsLink.rel = "noreferrer";
  detailsLink.textContent = "More details →";

  content.append(title, meta, category, description, detailsLink);
  article.append(top, content);

  return article;
}

function renderJobs() {
  const rankedJobs = getVisibleJobs();
  const featuredJobs = getRankedJobs().slice(0, 3);

  featuredList.replaceChildren(...featuredJobs.map(createFeaturedCard));
  jobsList.replaceChildren(
    ...(rankedJobs.length
      ? rankedJobs.map(createJobCard)
      : [createEmptyState()]),
  );
  jobCount.textContent = `${rankedJobs.length} jobs`;
  animateTokenNumbers();
}

function createEmptyState() {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = "No jobs match these filters.";

  return empty;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const monthlyTokens = Number(formData.get("tokens"));

  jobs = [
    ...jobs,
    {
      title: formData.get("title").trim(),
      employer: formData.get("employer").trim(),
      location: formData.get("location").trim(),
      category: formData.get("category"),
      monthlyTokens,
      detailsUrl: "#",
      description: formData.get("description").trim(),
      postedAt: Date.now(),
    },
  ];

  renderJobs();
  form.reset();
  setSubmitFormOpen(false);
});

submitToggle.addEventListener("click", () => {
  setSubmitFormOpen(submitPanel.hidden);
});

[search, locationFilter, categoryFilter, tokenFilter].forEach((control) => {
  control.addEventListener("input", renderJobs);
});

renderJobs();
