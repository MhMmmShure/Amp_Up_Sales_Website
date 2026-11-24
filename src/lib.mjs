// Shared data, icons, components and page layout for the Amp Up Sales site.
// Edit site-wide details (contact info, menus, services, industries) here.

export const SITE = {
  name: "Amp Up Sales",
  url: "https://www.ampupsales.com",
  email: "info@ampupsales.com",
  phone: "614.407.5786",
  phoneHref: "tel:+16144075786",
  schedule: "https://calendar.app.google/6wzukYV72NFhkyc18",
  linkedin: "https://www.linkedin.com/company/amp-up-sales",
  youtube: "https://www.youtube.com/@AmpUpSales",
};

// ---------------------------------------------------------------- icons
const P = {
  bolt: '<path d="M13 2 4.5 13.5H12L11 22l8.5-11.5H12z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
  youtube: '<path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.8 4 12 4 12 4s-6.8 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.7.4 8.5.4 8.5.4s6.8 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6z"/><path d="m9.8 15.5 5.7-3.5-5.7-3.5z"/>',
  menu: '<path d="M3 6h18M3 12h18M9 18h12"/>',
  close: '<path d="M18 6 6 18M6 6l12 12"/>',
  check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
  x: '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  tick: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  xmark: '<path d="M17 7 7 17M7 7l10 10"/>',
  up: '<path d="m18 15-6-6-6 6"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  funnel: '<path d="M3 4h18l-7 8.5V19l-4 2v-8.5z"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3z"/>',
  send: '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  factory: '<path d="M2 20V9l6 4V9l6 4V4h4l2 16z"/><path d="M2 20h20"/>',
  health: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/><path d="M7 12h3l1.5-3 2 5 1.5-2h2"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>',
  cloud: '<path d="M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>',
  trend: '<path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
};
export const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || P.bolt}</svg>`;

// ---------------------------------------------------------------- data
export const SERVICES = [
  {
    slug: "outsourced-sales-leadership", icon: "users", title: "Outsourced Sales Leadership",
    short: "Senior sales leadership that owns pipeline, process and follow-up, without the cost of a full-time hire.",
    items: ["Pipeline management and sales process", "Follow-up accountability", "Forecasting support", "CRM visibility", "Revenue execution guidance"],
    body: "We step in as your outsourced sales leader: tightening the sales process, running pipeline reviews, keeping follow-up on track and giving leadership a clear view of what will close and when.",
    for: "Founder-led companies, service firms and growing B2B teams that need sales leadership before they're ready to hire it.",
  },
  {
    slug: "outsourced-marketing-leadership", icon: "compass", title: "Outsourced Marketing Leadership",
    short: "Positioning, messaging and campaign direction that make complex offers easy to understand and buy.",
    items: ["Positioning and messaging", "Website structure and content strategy", "Campaign direction", "Buyer education"],
    body: "We lead the marketing strategy and then help carry it out, so your message is sharp, your campaigns point at the right buyers and your content does real sales work.",
    for: "Companies with complex services, long sales cycles or technical offers that buyers need to understand before they talk to sales.",
  },
  {
    slug: "lead-generation-outbound", icon: "send", title: "Lead Generation & Outbound Sales",
    short: "Targeted outbound that starts relevant conversations with the accounts you actually want.",
    items: ["Target account research", "Contact list building", "Email campaign messaging", "LinkedIn outreach", "Reply review and follow-up"],
    body: "We research accounts, build lists, write the messaging, launch email and LinkedIn campaigns, review replies and keep follow-up moving, all built around industry pain points, buyer roles and timing.",
    for: "Teams with a proven offer that need a steady flow of qualified conversations, not just more activity.",
  },
  {
    slug: "website-seo-aeo", icon: "globe", title: "Website Development, SEO & AEO",
    short: "Buyer-focused websites built to rank in search and get recommended by AI tools.",
    items: ["Page structure, service and industry pages", "SEO-focused copy and FAQs", "Internal linking and clear CTAs", "AEO: content AI tools can cite"],
    body: "We build and restructure websites around the questions buyers ask before choosing a partner, so search engines and AI assistants can understand, summarize and recommend you.",
    for: "Companies whose website doesn't clearly say who they help, what they solve, why they're credible and what to do next.",
  },
  {
    slug: "content-sales-enablement", icon: "pen", title: "Content Marketing & Sales Enablement",
    short: "Content that builds trust before the first call and helps your team move deals forward.",
    items: ["LinkedIn content and newsletters", "Blog strategy and campaign copy", "Executive messaging", "Sales enablement and nurture content"],
    body: "We turn your team's expertise into content buyers actually use: thought leadership, newsletters, campaign copy and the sales assets reps need to explain value clearly.",
    for: "Experts and leadership teams with deep knowledge but no time to turn it into consistent content.",
  },
  {
    slug: "sales-operations", icon: "gear", title: "Sales Operations & Revenue Visibility",
    short: "Clean CRM, clear reporting and real visibility into what's working.",
    items: ["CRM cleanup and task structure", "Pipeline views and campaign tracking", "Reporting summaries", "Monthly growth updates"],
    body: "We connect sales, marketing, systems and reporting so leadership can see pipeline movement, follow-up activity and campaign results in one place, and act on it.",
    for: "Teams that can't tell what's in the pipeline, who owns it or what happens next.",
  },
];

export const INDUSTRIES = [
  { slug: "manufacturing-distribution", icon: "factory", title: "Manufacturing & Distribution", img: "industry-manufacturing.jpg",
    short: "Pipeline and positioning for manufacturers and distributors with long, relationship-driven sales cycles." },
  { slug: "healthcare", icon: "health", title: "Healthcare", img: "industry-healthcare.jpg",
    short: "Clear, compliant messaging and consistent outreach for organizations selling into healthcare." },
  { slug: "professional-services", icon: "briefcase", title: "Professional Services", img: "industry-professional-services.jpg",
    short: "Trust-first growth for consulting, advisory, accounting and technology firms." },
  { slug: "saas", icon: "cloud", title: "SaaS", img: "industry-saas.jpg",
    short: "Sharper positioning, better demo conversion and a repeatable go-to-market motion." },
  { slug: "education", icon: "cap", title: "Education", img: "industry-education.jpg",
    short: "Buyer education and outreach for companies selling to schools, colleges and training organizations." },
];

// ---------------------------------------------------------------- components
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Image slots -> photo files in src/assets/img/. Change a mapping to swap a photo.
const IMG = {
  "hero.jpg": "photo-1.jpg", "about.jpg": "photo-2.jpg", "why.jpg": "photo-5.jpg",
  "industry-manufacturing.jpg": "industry-photo-0.jpg", "industry-healthcare.jpg": "industry-photo-2.jpg",
  "industry-professional-services.jpg": "industry-photo-4.jpg", "industry-saas.jpg": "industry-photo-6.jpg", "industry-education.jpg": "industry-photo-8.jpg",
  "industry-manufacturing-2.jpg": "industry-photo-1.jpg", "industry-healthcare-2.jpg": "industry-photo-3.jpg",
  "industry-professional-services-2.jpg": "industry-photo-5.jpg", "industry-saas-2.jpg": "industry-photo-7.jpg", "industry-education-2.jpg": "industry-photo-9.jpg",
  "home-insight-1.jpg": "graphic-0.jpg", "home-insight-2.jpg": "graphic-1.jpg", "home-insight-3.jpg": "graphic-2.jpg",
  "insight-1.jpg": "graphic-3.jpg", "insight-2.jpg": "graphic-4.jpg", "insight-3.jpg": "graphic-5.jpg", "insight-4.jpg": "graphic-6.jpg",
  "insight-5.jpg": "graphic-7.jpg", "insight-6.jpg": "graphic-8.jpg", "insight-7.jpg": "graphic-9.jpg", "insight-8.jpg": "graphic-10.jpg",
  "service-1.jpg": "photo-8.jpg", "service-2.jpg": "photo-2.jpg", "service-3.jpg": "photo-4.jpg",
  "service-4.jpg": "photo-6.jpg", "service-5.jpg": "photo-9.jpg", "service-6.jpg": "photo-5.jpg",
  "page-services.jpg": "photo-1.jpg", "page-industries.jpg": "photo-7.jpg", "page-work-with-us.jpg": "photo-9.jpg",
  "page-about.jpg": "photo-2.jpg", "page-insights.jpg": "photo-6.jpg", "page-connect.jpg": "photo-5.jpg",
  "industries-approach.jpg": "photo-8.jpg", "work-with-us.jpg": "photo-3.jpg", "about-team.jpg": "photo-5.jpg", "about-work.jpg": "photo-8.jpg",
};
export const media = (file, alt = "", cls = "", eager = false) =>
  `<div class="media ${cls}"><img src="/assets/img/${IMG[file] || file}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><div class="media__fallback">${icon("trend")}</div></div>`;

export const btn = (href, label, style = "accent", ext = false) =>
  `<a class="btn btn--${style}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label} ${icon("arrow")}</a>`;

export const scheduleBtn = (style = "accent", label = "Schedule a Conversation") => btn(SITE.schedule, label, style, true);

export const head = (eyebrow, title, intro = "", cls = "") =>
  `<div class="section-head ${cls} reveal"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2>${intro ? `<p class="lead">${intro}</p>` : ""}</div>`;

export const pageHero = ({ eyebrow, title, intro, crumbs = [], img, cta = true }) => `
<section class="page-hero">
  ${media(img, "", "", true)}
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map((c, i) => i === crumbs.length - 1 ? `<span>/</span><span aria-current="page">${c[0]}</span>` : `<span>/</span><a href="${c[1]}">${c[0]}</a>`).join("")}</nav>
    <span class="eyebrow">${eyebrow}</span>
    <h1>${title}</h1>
    <p>${intro}</p>
    ${cta ? `<div class="btn-row">${scheduleBtn()}${btn("/services/", "Explore Services", "ghost")}</div>` : ""}
  </div>
</section>`;

export const faq = (items) => `<div class="faq">${items.map(([q, a], i) => `
  <details${i === 0 ? " open" : ""} class="reveal"><summary>${q}<span class="pm">${icon("plus")}</span></summary><p>${a}</p></details>`).join("")}</div>`;

export const faqSchema = (items) => `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a.replace(/<[^>]+>/g, "") } })),
})}</script>`;

export const ctaBand = (title = "Where is your sales and marketing process getting stuck?", eyebrow = "Let's find out") => `
<section class="cta-band">
  <div class="container">
    <div><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div>
    <div class="btn-row">${scheduleBtn()}${btn("/connect/", "Send a Message", "ghost")}</div>
  </div>
</section>`;

export const industryCards = () => `<div class="grid grid--5">${INDUSTRIES.map((ind) => `
  <a class="ind-card reveal" href="/industries/${ind.slug}/">
    ${media(ind.img, ind.title + " team at work")}
    <div class="ind-card__body"><h3>${ind.title}</h3><p>${ind.short}</p><span class="link-arrow">Learn more ${icon("arrow")}</span></div>
  </a>`).join("")}</div>`;

export const serviceCards = (list = SERVICES) => `<div class="grid grid--3">${list.map((s, i) => `
  <article class="card reveal">
    <span class="card__num">0${i + 1}</span>
    <div class="ico">${icon(s.icon)}</div>
    <h3>${s.title}</h3>
    <p>${s.short}</p>
    <a class="link-arrow" href="/services/#${s.slug}">Learn more ${icon("arrow")}</a>
  </article>`).join("")}</div>`;

export const contactForm = (title = "Send us a message", sub = "Tell us where things are stuck. We'll reply within one business day.") => `
<div class="form-card reveal">
  <h3>${title}</h3>
  <p>${sub}</p>
  <form name="contact" method="POST" action="/connect/thank-you/" data-netlify="true" netlify-honeypot="company-website">
    <input type="hidden" name="form-name" value="contact">
    <p class="hidden"><label>Leave this empty: <input name="company-website"></label></p>
    <div class="form-grid">
      <div class="field"><label for="f-name">Name</label><input id="f-name" name="name" autocomplete="name" placeholder="Your name" required></div>
      <div class="field"><label for="f-email">Work email</label><input id="f-email" type="email" name="email" autocomplete="email" placeholder="you@company.com" required></div>
      <div class="field"><label for="f-company">Company</label><input id="f-company" name="company" autocomplete="organization" placeholder="Company name"></div>
      <div class="field"><label for="f-phone">Phone</label><input id="f-phone" type="tel" name="phone" autocomplete="tel" placeholder="Optional"></div>
      <div class="field full"><label for="f-help">How can we help?</label>
        <select id="f-help" name="interest">
          <option value="">Choose an area</option>
          ${SERVICES.map((s) => `<option>${s.title}</option>`).join("")}
          <option>Not sure yet</option>
        </select></div>
      <div class="field full"><label for="f-msg">Message</label><textarea id="f-msg" name="message" placeholder="What are you trying to grow, and where is it getting stuck?"></textarea></div>
    </div>
    <button class="btn btn--accent" type="submit">Send Message ${icon("arrow")}</button>
    <p class="form-note">We never sell your information. See our <a href="/privacy-policy/"><u>privacy policy</u></a>.</p>
  </form>
</div>`;

export const contactSection = () => `
<section class="section" id="contact">
  <div class="container contact">
    <div class="reveal">
      <span class="eyebrow">Contact us</span>
      <h2>Get in touch with Amp Up Sales</h2>
      <p class="lead">Start with a short conversation about your goals, your buyers and where growth is stalling. No pressure, just a clear picture of what to fix first.</p>
      <ul class="trust">
        <li><span class="ico">${icon("message")}</span>Free first conversation</li>
        <li><span class="ico">${icon("users")}</span>Senior-level guidance</li>
        <li><span class="ico">${icon("bolt")}</span>Strategy and execution</li>
        <li><span class="ico">${icon("shield")}</span>Clear accountability</li>
      </ul>
      <div class="contact-lines">
        <div class="contact-line"><span class="ico">${icon("calendar")}</span><div><small>Book a time</small><a href="${SITE.schedule}" target="_blank" rel="noopener">Schedule a Conversation</a></div></div>
        <div class="contact-line"><span class="ico">${icon("phone")}</span><div><small>Call us</small><a href="${SITE.phoneHref}">${SITE.phone}</a></div></div>
        <div class="contact-line"><span class="ico">${icon("mail")}</span><div><small>Email us</small><a href="mailto:${SITE.email}">${SITE.email}</a></div></div>
      </div>
    </div>
    ${contactForm()}
  </div>
</section>`;

// ---------------------------------------------------------------- layout
const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/", children: SERVICES.map((s) => ({ label: s.title, href: `/services/#${s.slug}`, icon: s.icon })) },
  { label: "Industries", href: "/industries/", children: INDUSTRIES.map((i) => ({ label: i.title, href: `/industries/${i.slug}/`, icon: i.icon })) },
  { label: "Work With Us", href: "/work-with-us/" },
  { label: "What We Solve", href: "/what-we-solve/", drawerOnly: true },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
  { label: "Connect", href: "/connect/" },
];

const logo = (light = false) =>
  `<a class="logo" href="/" aria-label="Amp Up Sales home"><img src="/assets/img/${light ? "logo-light" : "logo"}.png" alt="AmpUp" width="446" height="120"></a>`;

const isActive = (item, path) => (item.href === "/" ? path === "/" : path.startsWith(item.href));

const header = (path) => `
<div class="topbar">
  <div class="container">
    <div class="topbar__info">
      <a href="mailto:${SITE.email}">${icon("mail")}${SITE.email}</a>
      <a class="hide-sm" href="${SITE.phoneHref}">${icon("phone")}${SITE.phone}</a>
    </div>
    <div class="topbar__social">
      <a href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
      <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube")}</a>
    </div>
  </div>
</div>
<header class="header">
  <div class="container">
    ${logo()}
    <nav aria-label="Main"><ul class="nav">${NAV.filter((n) => n.label !== "Connect" && !n.drawerOnly).map((n) => `
      <li><a href="${n.href}"${isActive(n, path) ? ' class="is-active"' : ""}>${n.label}${n.children ? icon("chevron") : ""}</a>${n.children ? `
        <div class="dropdown">${n.children.map((c) => `<a href="${c.href}"><span class="ico">${icon(c.icon)}</span>${c.label}</a>`).join("")}</div>` : ""}</li>`).join("")}
    </ul></nav>
    <div class="header__cta">
      <div class="header__phone"><span class="ico">${icon("phone")}</span><div><small>Have a question?</small><strong><a href="${SITE.phoneHref}">${SITE.phone}</a></strong></div></div>
      <a class="btn btn--navy" href="/connect/">Let's Talk ${icon("arrow")}</a>
      <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">${icon("menu")}</button>
    </div>
  </div>
</header>
<div class="drawer">
  <div class="drawer__backdrop" data-close></div>
  <div class="drawer__panel" role="dialog" aria-label="Menu">
    <div class="drawer__top">${logo()}<button class="drawer__close" data-close aria-label="Close menu">${icon("close")}</button></div>
    <nav>${NAV.map((n) => n.children ? `
      <details><summary>${n.label}${icon("chevron")}</summary><a href="${n.href}">All ${n.label}</a>${n.children.map((c) => `<a href="${c.href}">${c.label}</a>`).join("")}</details>` : `<a href="${n.href}">${n.label}</a>`).join("")}
    </nav>
    ${scheduleBtn()}
    <div class="drawer__contact"><a href="${SITE.phoneHref}">${SITE.phone}</a><a href="mailto:${SITE.email}">${SITE.email}</a></div>
  </div>
</div>`;

const footer = () => `
<footer class="footer">
  <div class="container footer__main">
    <div class="footer__about">
      ${logo(true)}
      <p>Your outsourced sales and marketing team for B2B growth. We turn strategy into consistent execution across pipeline, messaging, websites and follow-up.</p>
      <div class="socials">
        <a href="${SITE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
        <a href="${SITE.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube")}</a>
      </div>
    </div>
    <div><h4>Services</h4><ul>${SERVICES.map((s) => `<li><a href="/services/#${s.slug}">${s.title}</a></li>`).join("")}</ul></div>
    <div><h4>Industries</h4><ul>${INDUSTRIES.map((i) => `<li><a href="/industries/${i.slug}/">${i.title}</a></li>`).join("")}</ul></div>
    <div><h4>Company</h4><ul>
      <li><a href="/what-we-solve/">What We Solve</a></li><li><a href="/work-with-us/">Work With Us</a></li><li><a href="/about/">About</a></li><li><a href="/insights/">Insights</a></li><li><a href="/connect/">Connect</a></li>
    </ul>
    <h4 style="margin-top:30px">Contact</h4>
    <ul class="footer__contact"><li>${icon("phone")}<a href="${SITE.phoneHref}">${SITE.phone}</a></li><li>${icon("mail")}<a href="mailto:${SITE.email}">${SITE.email}</a></li></ul></div>
  </div>
  <div class="footer__bottom"><div class="container">
    <span>&copy; <span data-year>2026</span> Amp Up Sales. All rights reserved.</span>
    <nav><a href="/privacy-policy/">Privacy Policy</a><a href="/connect/">Contact</a></nav>
  </div></div>
</footer>
<button class="to-top" aria-label="Back to top">${icon("up")}</button>`;

export const layout = ({ path, title, description, body, extraHead = "" }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE.url}${path}">
<meta name="theme-color" content="#213C4E">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Amp Up Sales">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${SITE.url}${path}">
<meta property="og:image" content="${SITE.url}/assets/img/og-image.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
${extraHead}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
