import { SERVICES, icon, media, btn, scheduleBtn, head, pageHero, faq, faqSchema, ctaBand, contactForm, SITE } from "../lib.mjs";

// "What we solve" problem pages: SEO landing pages for the problems B2B teams search for.
export const PROBLEMS = [
  {
    slug: "unclear-b2b-messaging", icon: "message", title: "Unclear messaging", img: "page-services.jpg",
    short: "Buyers can't quickly tell who you help, what you solve or why you're different.",
    h1: "Unclear B2B messaging: why buyers pass you by, and how to fix it",
    meta: "Signs your B2B messaging is unclear, what it costs you before a buyer ever calls, and a practical framework to fix positioning across your website and sales conversations.",
    intro: "If buyers can't tell in a few seconds who you help and what you solve, they move on, usually before you ever know they looked.",
    signs: [
      "Prospects ask \"so what exactly do you do?\" on first calls",
      "Your homepage describes your company, not your buyer's problem",
      "Different team members explain the offer differently",
      "You compete on price more often than you'd like",
      "Your website has no industry or use-case pages",
      "Sales decks and the website say different things",
    ],
    why: "Most of the buying decision now happens before a seller is involved. When your message is vague, you don't make the shortlist, and the shortlist is where deals are won.",
    stat: ["4 in 5", "deals are won by the vendor buyers already favored before first contact.", "6sense, 2025", "https://6sense.com/report/buyer-experience/"],
    steps: [
      ["Name the buyer", "Define the industries, roles and company sizes you serve best, and say so plainly."],
      ["Lead with their problem", "Open with the situation the buyer is in and the outcome they want, not your history."],
      ["Prove it", "Add specific proof: results, process, credentials and examples that match the buyer's world."],
      ["Make it consistent", "Use the same core message on the website, in outreach, in decks and on calls."],
      ["Point to one next step", "Give every page one clear call to action so interested buyers know what to do."],
    ],
    services: ["outsourced-marketing-leadership", "website-seo-aeo", "content-sales-enablement"],
    faq: [
      ["What is B2B messaging?", "It's how you describe who you help, the problems you solve, the outcomes you deliver and why buyers should choose you, used consistently across your website, outreach and sales conversations."],
      ["How do I know if my messaging is the problem?", "Look for long explanations on first calls, price-driven competition, low website conversion and inconsistent descriptions from your own team."],
      ["How long does it take to fix positioning?", "A focused positioning and messaging project usually takes a few weeks. Rolling it out across the website and sales materials follows from there."],
    ],
  },
  {
    slug: "inconsistent-sales-outreach", icon: "send", title: "Inconsistent outreach", img: "page-industries.jpg",
    short: "Prospecting happens in bursts, when someone has time, then stops.",
    h1: "Inconsistent sales outreach: how to build pipeline that doesn't stall",
    meta: "Why B2B prospecting happens in bursts, what irrelevant outreach costs you, and how to build a consistent, targeted outbound rhythm that creates real conversations.",
    intro: "Pipeline built in bursts produces revenue in bursts. Consistent, relevant outreach is what turns a good quarter into a predictable one.",
    signs: [
      "Prospecting stops whenever the team gets busy with clients",
      "There's no defined list of target accounts",
      "Outreach messages are generic and rarely get replies",
      "Nobody tracks which campaigns create meetings",
      "LinkedIn and email outreach aren't coordinated",
      "New business depends mostly on referrals",
    ],
    why: "Volume alone doesn't fix this. Buyers tune out messages that aren't relevant to them, so consistency has to come with targeting and a real point of view.",
    stat: ["73%", "of B2B buyers actively avoid suppliers who send irrelevant outreach.", "Gartner, 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience"],
    steps: [
      ["Define target accounts", "Build a focused list by industry, size, region and buying role."],
      ["Write to a specific pain", "Short messages built around one problem the buyer recognizes."],
      ["Sequence the channels", "Coordinate email and LinkedIn touches over a set rhythm."],
      ["Review every reply", "Route interested replies fast and learn from objections."],
      ["Track and adjust", "Measure meetings booked, not just emails sent, and refine monthly."],
    ],
    services: ["lead-generation-outbound", "outsourced-sales-leadership", "sales-operations"],
    faq: [
      ["How often should B2B outreach happen?", "Consistently, every week, rather than in bursts. A steady rhythm of targeted outreach compounds; sporadic campaigns rarely do."],
      ["Is cold email still effective for B2B?", "Yes, when it's relevant. Short, specific messages to well-defined accounts still start conversations; generic blasts get ignored."],
      ["Can you run outbound for us?", "Yes. We handle account research, lists, messaging, email and LinkedIn campaigns, reply review and follow-up tracking."],
    ],
  },
  {
    slug: "sales-follow-up-problems", icon: "refresh", title: "Weak follow-up", img: "page-connect.jpg",
    short: "Good conversations go quiet because nobody owns the next step.",
    h1: "Sales follow-up problems: why good opportunities go quiet",
    meta: "Why B2B sales follow-up breaks down after the first call, the signs in your pipeline, and a simple system to keep every opportunity moving to a clear yes or no.",
    intro: "Most lost deals aren't lost to a competitor. They fade out between the first call and the decision because nobody owned the next step.",
    signs: [
      "Opportunities sit in the CRM with no next step or date",
      "Proposals go out and nobody checks in",
      "Follow-up depends on one person's memory",
      "Deals stay \"in progress\" for months",
      "Leadership can't tell what's likely to close",
      "Marketing leads aren't followed up quickly",
    ],
    why: "B2B decisions take many touchpoints. Buyers keep engaging with the vendor they choose, so a team that follows up with value keeps the deal alive.",
    stat: ["16", "average interactions per buyer with the winning vendor during a purchase.", "6sense, 2025", "https://6sense.com/report/buyer-experience/"],
    steps: [
      ["Give every deal an owner", "One named person is responsible for each opportunity's next step."],
      ["Require a next step and date", "No opportunity leaves a call without a scheduled next action."],
      ["Follow up with value", "Send something useful: a recap, an answer, a case example, not just \"checking in.\""],
      ["Review pipeline weekly", "A short weekly review catches stalled deals before they go cold."],
      ["Close the loop", "Push for a clear yes or no so the pipeline reflects reality."],
    ],
    services: ["outsourced-sales-leadership", "sales-operations", "content-sales-enablement"],
    faq: [
      ["Why do sales opportunities stall?", "Usually because there's no clear owner, no scheduled next step and no regular review. The buyer gets busy, and nobody re-engages them with something useful."],
      ["How should we track follow-up?", "In your CRM, with an owner, next step and date on every open opportunity, reviewed weekly by sales leadership."],
      ["What should a follow-up message include?", "A short recap, the agreed next step and something of value, such as an answer, an example or a resource tied to the buyer's goal."],
    ],
  },
  {
    slug: "sales-and-marketing-ownership", icon: "flag", title: "No clear owner", img: "page-work-with-us.jpg",
    short: "Sales and marketing sit between people, so nothing moves with urgency.",
    h1: "No clear owner for sales and marketing: how to fix the gap",
    meta: "What happens when nobody owns B2B sales and marketing execution, the warning signs, and how to get clear ownership without a full-time hire.",
    intro: "When sales and marketing are \"everyone's job,\" they quietly become nobody's job. Plans get made, then stall in the gaps between people.",
    signs: [
      "The founder or CEO is still the main salesperson",
      "Marketing tasks get done only when someone has spare time",
      "Sales and marketing work from different plans",
      "No one reports on pipeline or campaign results",
      "Agencies and freelancers aren't coordinated",
      "Good plans from leadership meetings never get executed",
    ],
    why: "Without an owner, sales and marketing drift apart and buyers notice the gaps. A single owner keeps the message, the campaigns and the follow-up aligned.",
    stat: ["69%", "of B2B buyers report inconsistencies between a supplier's website and what its sellers tell them.", "Gartner, 2025", "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience"],
    steps: [
      ["Name one owner", "Assign one person or partner to own the growth plan and its execution."],
      ["Build one plan", "Put sales and marketing priorities, campaigns and targets in a single plan."],
      ["Set a weekly rhythm", "Short weekly check-ins on activity, pipeline and blockers."],
      ["Report what matters", "Track meetings, pipeline movement and follow-up, not vanity metrics."],
      ["Fill the gaps", "Use outsourced leadership or execution where you don't have the people yet."],
    ],
    services: ["outsourced-sales-leadership", "outsourced-marketing-leadership", "sales-operations"],
    faq: [
      ["Who should own sales and marketing in a small B2B company?", "One accountable leader, either an internal hire or an outsourced sales or marketing leader, who owns the plan, execution and reporting."],
      ["When should we hire a full-time sales leader?", "When you have a repeatable process and enough pipeline to justify the cost. Until then, outsourced leadership is often the faster, lower-risk option."],
      ["Can an outsourced team really own execution?", "Yes. We act as an extension of your team, owning the plan, doing the work and reporting on results."],
    ],
  },
];

const svc = (slug) => SERVICES.find((s) => s.slug === slug);

const hub = {
  path: "/what-we-solve/",
  title: "What We Solve: Common B2B Sales & Marketing Problems | Amp Up Sales",
  description: "The four most common reasons B2B growth stalls (unclear messaging, inconsistent outreach, weak follow-up and no clear owner), with signs to look for and how to fix each one.",
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "ItemList", name: "What We Solve",
    itemListElement: PROBLEMS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/what-we-solve/${p.slug}/`, name: p.h1 })),
  })}</script>`,
  body: `
${pageHero({ eyebrow: "What we solve", title: "Where B2B growth usually gets stuck", intro: "Four problems hold back most B2B teams with a strong offer. Find yours, check the signs and see how to fix it.", crumbs: [["What We Solve"]], img: "page-insights.jpg" })}
<section class="section">
  <div class="container">
    <div class="grid grid--2">${PROBLEMS.map((p, i) => `
      <a class="card problem-card reveal" href="/what-we-solve/${p.slug}/">
        <span class="card__num">0${i + 1}</span>
        <div class="ico">${icon(p.icon)}</div>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <ul class="mini-signs">${p.signs.slice(0, 3).map((s) => `<li>${s}</li>`).join("")}</ul>
        <span class="link-arrow">See the signs and the fix ${icon("arrow")}</span>
      </a>`).join("")}
    </div>
  </div>
</section>
${ctaBand("Recognize more than one of these? Let's talk about where to start.")}
`,
};

const page = (p, i) => {
  const others = PROBLEMS.filter((x) => x.slug !== p.slug);
  return {
    path: `/what-we-solve/${p.slug}/`,
    title: `${p.h1.split(":")[0]} | Amp Up Sales`,
    description: p.meta,
    extraHead: faqSchema(p.faq) + `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: p.h1, description: p.meta,
      author: { "@type": "Organization", name: "Amp Up Sales" }, publisher: { "@type": "Organization", name: "Amp Up Sales", logo: { "@type": "ImageObject", url: `${SITE.url}/assets/img/logo.png` } },
      mainEntityOfPage: `${SITE.url}/what-we-solve/${p.slug}/`,
    })}</script>`,
    body: `
${pageHero({ eyebrow: `Problem 0${i + 1} · ${p.title}`, title: p.h1, intro: p.intro, crumbs: [["What We Solve", "/what-we-solve/"], [p.title]], img: p.img })}

<section class="section">
  <div class="container split split--top">
    <div class="reveal">
      <span class="eyebrow">Why it matters</span>
      <h2>What this costs you</h2>
      <p class="lead">${p.why}</p>
      <figure class="stat-callout">
        <span class="stat__num">${p.stat[0]}</span>
        <figcaption><p>${p.stat[1]}</p><span class="stat__src">Source: <a href="${p.stat[3]}" target="_blank" rel="noopener">${p.stat[2]}</a></span></figcaption>
      </figure>
    </div>
    <div class="selfcheck reveal" data-selfcheck>
      <h3>Quick self-check</h3>
      <p>Tick the signs you recognize in your business.</p>
      <ul>${p.signs.map((s, k) => `<li><label><input type="checkbox" value="${k}"><span class="box">${icon("tick")}</span><span>${s}</span></label></li>`).join("")}</ul>
      <div class="selfcheck__result" aria-live="polite">
        <strong data-score>0 of ${p.signs.length}</strong>
        <span data-verdict>Tick any that apply to see where you stand.</span>
      </div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("How to fix it", `A practical plan for ${p.title.toLowerCase()}`, "You can start on these yourself this week. They're the same steps we use with clients.", "center")}
    <ol class="fix-steps">${p.steps.map(([t, d], k) => `
      <li class="reveal"><span class="fix-steps__n">0${k + 1}</span><div><h3>${t}</h3><p>${d}</p></div></li>`).join("")}
    </ol>
  </div>
</section>

<section class="section">
  <div class="container">
    ${head("How we help", "Services that solve this", "", "center")}
    <div class="grid grid--3">${p.services.map((slug) => { const s = svc(slug); return `
      <article class="card reveal"><div class="ico">${icon(s.icon)}</div><h3>${s.title}</h3><p>${s.short}</p><a class="link-arrow" href="/services/#${s.slug}">Learn more ${icon("arrow")}</a></article>`; }).join("")}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("FAQ", `Questions about ${p.title.toLowerCase()}`, "", "center")}
    ${faq(p.faq)}
  </div>
</section>

<section class="section">
  <div class="container contact">
    <div class="reveal">
      <span class="eyebrow">Related problems</span>
      <h2>These usually travel together</h2>
      <div class="grid" style="margin-top:26px">${others.map((o) => `
        <a class="related reveal" href="/what-we-solve/${o.slug}/"><span class="ico">${icon(o.icon)}</span><span><strong>${o.title}</strong><small>${o.short}</small></span>${icon("arrow")}</a>`).join("")}
      </div>
    </div>
    ${contactForm(`Want help fixing ${p.title.toLowerCase()}?`)}
  </div>
</section>
${ctaBand()}
`,
  };
};

export default [hub, ...PROBLEMS.map(page)];
