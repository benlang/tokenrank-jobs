const seedJobs = [
  {
    title: "Founding AI Product Engineer",
    employer: "Atlas Compute",
    location: "San Francisco, CA",
    tokens: 420000,
    description:
      "Build agent workflows for infrastructure teams. Own product surfaces from prototype through launch.",
    postedAt: Date.now() - 1000 * 60 * 60 * 6,
  },
  {
    title: "Protocol Security Researcher",
    employer: "Keystone Labs",
    location: "Remote",
    tokens: 315000,
    description:
      "Review smart contracts, write exploit reports, and help teams ship safer token systems.",
    postedAt: Date.now() - 1000 * 60 * 60 * 2,
  },
  {
    title: "Developer Relations Lead",
    employer: "Mintbase Cloud",
    location: "New York, NY",
    tokens: 185000,
    description:
      "Create technical content, support launch partners, and turn developer feedback into product direction.",
    postedAt: Date.now() - 1000 * 60 * 60 * 10,
  },
  {
    title: "Frontend Engineer",
    employer: "Northstar Markets",
    location: "Remote, Europe",
    tokens: 94000,
    description:
      "Craft dashboard experiences for trading teams using TypeScript, React, and realtime data.",
    postedAt: Date.now() - 1000 * 60 * 30,
  },
];

const jobsList = document.querySelector("#jobs-list");
const featuredList = document.querySelector("#featured-list");
const jobCount = document.querySelector("#job-count");
const form = document.querySelector("#job-form");
const search = document.querySelector("#search");
const locationFilter = document.querySelector("#location-filter");
const tokenFilter = document.querySelector("#token-filter");

let jobs = [...seedJobs];

function formatTokens(tokens) {
  return new Intl.NumberFormat("en-US").format(tokens);
}

function getRankedJobs() {
  return [...jobs].sort((a, b) => {
    if (b.tokens !== a.tokens) {
      return b.tokens - a.tokens;
    }

    return b.postedAt - a.postedAt;
  });
}

function getVisibleJobs() {
  const query = search.value.trim().toLowerCase();
  const location = locationFilter.value;
  const minimumTokens = Number(tokenFilter.value);

  return getRankedJobs().filter((job) => {
    const searchableText = `${job.title} ${job.employer} ${job.location} ${job.description}`.toLowerCase();
    const matchesQuery = !query || searchableText.includes(query);
    const matchesLocation =
      !location || job.location.toLowerCase().includes(location);
    const matchesTokens = job.tokens >= minimumTokens;

    return matchesQuery && matchesLocation && matchesTokens;
  });
}

function createFeaturedCard(job) {
  const article = document.createElement("article");
  article.className = "featured-card";

  const art = document.createElement("div");
  art.className = "featured-art";
  art.textContent = formatTokens(job.tokens);

  const title = document.createElement("h3");
  title.textContent = job.employer;

  const description = document.createElement("p");
  description.textContent = job.description;

  const links = document.createElement("div");
  links.className = "quick-links";
  links.innerHTML = "<span>🌐 Website →</span><span>💼 Careers →</span>";

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

  const tokens = document.createElement("span");
  tokens.className = "tokens";
  tokens.textContent = `${formatTokens(job.tokens)} tokens`;

  top.append(rank, tokens);

  const content = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = job.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = `${job.employer} · ${job.location}`;

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = job.description;

  content.append(title, meta, description);
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
  const tokens = Number(formData.get("tokens"));

  jobs = [
    ...jobs,
    {
      title: formData.get("title").trim(),
      employer: formData.get("employer").trim(),
      location: formData.get("location").trim(),
      tokens,
      description: formData.get("description").trim(),
      postedAt: Date.now(),
    },
  ];

  renderJobs();
  form.reset();
  form.querySelector("input[name='title']").focus();
});

[search, locationFilter, tokenFilter].forEach((control) => {
  control.addEventListener("input", renderJobs);
});

renderJobs();
