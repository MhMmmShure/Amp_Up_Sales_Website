import { SITE, SERVICES, icon, media, btn, scheduleBtn, head, pageHero, faq, faqSchema, ctaBand, contactSection, contactForm } from "../lib.mjs";

// ------------------------------------------------------------ Work With Us
const WWU_FAQ = [
  ["How do you work with clients?", "As an outsourced extension of your team: discovery, strategy, foundation, execution, review and ongoing improvement."],
  ["How long are engagements?", "It depends on scope. Many clients work with us on an ongoing basis, because sales and marketing need consistency to pay off."],
  ["Do you replace our internal team?", "No. We support your team, fill leadership or execution gaps, or act as your sales and marketing function if you don't have one yet."],
  ["Do you build websites?", "Yes, with SEO structure, service and industry pages, FAQs and clear conversion paths."],
  ["Do you run outbound?", "Yes: account research, list building, email, LinkedIn, reply review, follow-up and tracking."],
  ["How involved do we need to be?", "We do the heavy lifting, but we need leadership input, subject-matter expertise, feedback and alignment to do our best work."],
  ["Do you work with companies outside Colorado?", "Yes. We work with clients across the U.S., mostly remotely."],
];

const workWithUs = {
  path: "/work-with-us/",
  title: "Work With Us: How Our Outsourced Sales & Marketing Engagements Work | Amp Up Sales",
  description: "How Amp Up Sales engagements work: discovery, strategy, foundation, execution, optimization and growth, with reporting and accountability built in.",
  extraHead: faqSchema(WWU_FAQ),
  body: `
${pageHero({ eyebrow: "Work with us", title: "An outsourced team that plugs into yours", intro: "Engagements are built around your goals, team, systems and urgency. No cookie-cutter packages, just the right mix of leadership and execution.", crumbs: [["Work With Us"]], img: "page-work-with-us.jpg" })}

<section class="section">
  <div class="container split">
    <div class="split__media reveal">${media("work-with-us.jpg", "Amp Up Sales collaborating with a client team")}
      <div class="badge-card"><span class="ico">${icon("layers")}</span><div><strong>Flexible support</strong><small>Supplement your team, fill gaps or be the whole function.</small></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Engagement model</span>
      <h2>Customized to where you are today</h2>
      <p class="lead">Scope depends on your goals, internal team, systems and priorities. Most clients work with us on an ongoing basis.</p>
      <ul class="checklist">
        <li>${icon("check")}<span><strong>Supplement your team:</strong> add senior leadership and execution capacity alongside your people.</span></li>
        <li>${icon("check")}<span><strong>Fill a gap:</strong> cover the leadership or execution role you haven't hired yet.</span></li>
        <li>${icon("check")}<span><strong>Be your team:</strong> act as the full sales and marketing function when you don't have one.</span></li>
      </ul>
      ${scheduleBtn("navy")}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("The process", "Six steps from discovery to growth", "A practical path that turns strategy into consistent action and keeps improving it.", "center")}
    <div class="steps steps--6">
      ${[
        ["Discovery", "We review your business, buyers, sales process, marketing, website, CRM, team and goals."],
        ["Strategy", "We find the biggest opportunities and build a practical growth plan."],
        ["Foundation", "CRM cleanup, campaign setup, reporting views, messaging and website updates."],
        ["Execution", "Outbound, website and SEO/AEO work, content, enablement and follow-up."],
        ["Optimization", "We review results, find where activity stalls and adjust."],
        ["Growth", "We focus on the highest-impact areas for more consistent results."],
      ].map(([t, p], i) => `<div class="step reveal"><div class="step__dot">0${i + 1}</div><small>Step ${i + 1}</small><h3>${t}</h3><p>${p}</p></div>`).join("")}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${head("What you receive", "Strategy, execution and visibility", "", "center")}
    <div class="grid grid--3">
      <div class="feature reveal"><div class="ico">${icon("compass")}</div><h3>A growth plan</h3><p>Built around your priorities, buyers and team.</p></div>
      <div class="feature reveal"><div class="ico">${icon("bolt")}</div><h3>Execution support</h3><p>Sales, marketing, content, websites, outbound and CRM, coordinated into one plan.</p></div>
      <div class="feature reveal"><div class="ico">${icon("chart")}</div><h3>Clear reporting</h3><p>Campaign results, pipeline movement, follow-up, lead quality and next steps.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${head("Fit", "Are we the right partner?", "We do our best work with teams ready to collaborate and execute consistently.", "center")}
    <div class="fit">
      <div class="card reveal"><h3>A good fit if you…</h3><ul class="checklist checklist--muted">
        ${["Sell to B2B buyers", "Have a defined offer and a real market", "Need more consistent pipeline", "Lack execution bandwidth", "Want sales and marketing on one plan", "Need senior support without a full-time hire"].map((t) => `<li>${icon("check")}${t}</li>`).join("")}
      </ul></div>
      <div class="card card--no reveal"><h3>Probably not a fit if you…</h3><ul class="checklist checklist--muted checklist--x">
        ${["Only need a one-time task", "Aren't ready to collaborate", "Don't have a clear product or service yet", "Want marketing with no sales accountability", "Aren't ready for consistent execution", "Want a completely hands-off vendor"].map((t) => `<li>${icon("x")}${t}</li>`).join("")}
      </ul></div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("FAQ", "Working with Amp Up Sales", "", "center")}
    ${faq(WWU_FAQ)}
  </div>
</section>
${ctaBand("Ready to see what an outsourced sales and marketing team could do for you?")}
`,
};

// ------------------------------------------------------------ About
const about = {
  path: "/about/",
  title: "About Amp Up Sales | Outsourced Sales & Marketing Partner",
  description: "Amp Up Sales closes the gap between what B2B leadership knows needs to happen and what the team has time to execute. Clarity, consistency and ownership.",
  body: `
${pageHero({ eyebrow: "About us", title: "Growth comes from clarity, consistency and ownership", intro: "Not more disconnected activity. Amp Up Sales exists to close the gap between what leadership knows needs to happen and what the team has time to carry out.", crumbs: [["About"]], img: "page-about.jpg" })}

<section class="section">
  <div class="container split">
    <div class="split__media reveal">${media("about-team.jpg", "The Amp Up Sales team")}
      <div class="badge-card"><span class="ico">${icon("bolt")}</span><div><strong>Direct. Practical. Execution-focused.</strong></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Who we are</span>
      <h2>Senior-level thinking, brought into the day-to-day work</h2>
      <p class="lead">We're an outsourced sales and marketing partner for B2B companies.</p>
      <p>We bring senior-level sales and marketing thinking into the everyday work that drives revenue: positioning, outreach, content, websites, follow-up, CRM visibility and pipeline support.</p>
      <p>Our approach is direct and practical. We add structure, improve communication and make growth more manageable, without adding complexity.</p>
      ${btn("/services/", "Our Services", "navy")}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("Operating principles", "How we work", "", "center")}
    <div class="grid grid--3">
      <article class="card reveal"><span class="card__num">01</span><div class="ico">${icon("eye")}</div><h3>Clarity First</h3><p>Your message, market and priorities should be clear before activity starts.</p></article>
      <article class="card reveal"><span class="card__num">02</span><div class="ico">${icon("bolt")}</div><h3>Execution Matters</h3><p>Strategy only has value once it becomes consistent action.</p></article>
      <article class="card reveal"><span class="card__num">03</span><div class="ico">${icon("shield")}</div><h3>Accountability Wins</h3><p>Growth improves when activity is visible, owned and measured.</p></article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--rev">
    <div class="split__media reveal">${media("about-work.jpg", "Planning a B2B growth strategy")}</div>
    <div class="reveal">
      <span class="eyebrow">What we do</span>
      <h2>Everything it takes to turn a strong offer into pipeline</h2>
      <ul class="checklist">${SERVICES.map((s) => `<li>${icon("check")}<a href="/services/#${s.slug}">${s.title}</a></li>`).join("")}</ul>
      ${scheduleBtn("navy")}
    </div>
  </div>
</section>
${ctaBand()}
`,
};

// ------------------------------------------------------------ Insights
const POSTS = [
  ["outsourced-vs-full-time", "Sales Leadership", "Outsourced GTM leadership vs. hiring a full-time sales leader", "A full-time sales leader is a big, slow bet. An outsourced leader gives you senior guidance and execution now, while you learn what the role really needs. It makes the most sense when pipeline is inconsistent, the founder is still selling and you're not sure yet what a full-time hire should own."],
  ["erp-qualified-leads", "Lead Generation", "How ERP partners can generate more qualified leads", "Qualified leads come from clear industry positioning, SEO pages built for specific verticals, educational content, targeted outbound and disciplined CRM follow-up, all aimed at buyers who are actually in market."],
  ["buyer-focused-messaging", "Messaging", "Why B2B websites need buyer-focused messaging", "Most B2B sites describe the company. Buyers want to know if you understand their problem. Lead with their situation, the outcome they want and the proof you can deliver it."],
  ["website-not-converting", "Websites", "Why your website isn't converting the right buyers", "Look at five things: messaging that names who you help, service pages that answer real questions, proof points, FAQs for search and AI tools, and one clear call to action per page."],
  ["b2b-outbound-campaign", "Outbound", "How to build a B2B outbound sales campaign", "Start with a tight target list, write short messages around a specific pain point, sequence email and LinkedIn, review every reply and track follow-up until there's a clear yes or no."],
  ["follow-up-breaks-down", "Pipeline", "Why pipeline follow-up breaks down", "Follow-up fails when nobody owns the next step. Fix it with CRM visibility, clear task ownership and a weekly pipeline review that holds people accountable."],
  ["expertise-into-content", "Content", "How B2B companies can turn expertise into content", "Interview your experts, turn their answers into LinkedIn posts, newsletters and articles, and give sales the same material as enablement. One conversation can fuel weeks of content."],
  ["outsourced-sales-team", "Sales Leadership", "What does an outsourced sales team do?", "It gives you sales leadership, execution, pipeline support and process structure without building a full internal team. It's a fit when you need results faster than you can hire."],
];
const IFAQ = [
  ["What does an outsourced sales and marketing team actually do?", "It provides leadership and hands-on execution across positioning, outreach, content, website, follow-up and reporting, working as an extension of your team."],
  ["What is outsourced marketing leadership?", "Strategy, positioning, content, website and campaign direction without hiring full-time marketing leadership."],
  ["How can SaaS companies improve pipeline?", "Clarify the ICP, strengthen outbound, improve demo conversion, educate buyers and follow up consistently."],
  ["What does a GTM consultant do?", "They help define who you sell to, how you position, which channels you use and how sales and marketing work together, and ideally help execute it."],
];

const insights = {
  path: "/insights/",
  title: "Insights: B2B Sales, Marketing & Pipeline Ideas | Amp Up Sales",
  description: "Practical ideas on outsourced sales leadership, outbound, B2B websites, content and pipeline follow-up from Amp Up Sales.",
  extraHead: faqSchema(IFAQ),
  body: `
${pageHero({ eyebrow: "Insights", title: "Practical ideas for better B2B growth", intro: "Short, useful takes on pipeline, messaging, outbound, websites and content, the same thinking we bring to client work.", crumbs: [["Insights"]], img: "page-insights.jpg", cta: false })}
<section class="section">
  <div class="container">
    <div class="grid grid--2">${POSTS.map(([id, tag, title, text], i) => `
      <article class="post reveal" id="${id}" style="scroll-margin-top:110px">
        ${media(`insight-${i + 1}.jpg`, title)}
        <div class="post__body"><span class="post__tag">${tag}</span><h3>${title}</h3><p>${text}</p>
        <a class="link-arrow" href="${SITE.schedule}" target="_blank" rel="noopener">Talk it through with us ${icon("arrow")}</a></div>
      </article>`).join("")}
    </div>
  </div>
</section>
<section class="section section--soft">
  <div class="container">
    ${head("Common searches", "Quick answers", "", "center")}
    ${faq(IFAQ)}
  </div>
</section>
${ctaBand()}
`,
};

// ------------------------------------------------------------ Connect
const connect = {
  path: "/connect/",
  title: "Connect | Schedule a Conversation with Amp Up Sales",
  description: "Schedule a conversation with Amp Up Sales or send a message. Call 614.407.5786 or email info@ampupsales.com.",
  body: `
${pageHero({ eyebrow: "Connect", title: "Let's talk about where growth is getting stuck", intro: "Book a time that works for you, or send a message and we'll reply within one business day.", crumbs: [["Connect"]], img: "page-connect.jpg", cta: false })}
${contactSection()}
<section class="section section--soft">
  <div class="container">
    ${head("What happens next", "A simple first conversation", "", "center")}
    <div class="steps steps--3">
      <div class="step reveal"><div class="step__dot">01</div><h3>We listen</h3><p>Your goals, buyers, team and where things stall.</p></div>
      <div class="step reveal"><div class="step__dot">02</div><h3>We assess</h3><p>Where the biggest opportunities and gaps are.</p></div>
      <div class="step reveal"><div class="step__dot">03</div><h3>We recommend</h3><p>A clear next step, whether or not we work together.</p></div>
    </div>
  </div>
</section>
`,
};

const thanks = {
  path: "/connect/thank-you/",
  title: "Thank You | Amp Up Sales",
  description: "Thanks for reaching out to Amp Up Sales.",
  extraHead: '<meta name="robots" content="noindex">',
  body: `
<section class="section">
  <div class="container center" style="max-width:720px">
    <div class="card" style="padding:60px 40px">
      <div class="ico mx-auto">${icon("check")}</div>
      <span class="eyebrow">Message received</span>
      <h1 style="font-size:2.4rem">Thanks, we'll be in touch soon.</h1>
      <p class="lead">We reply within one business day. Want to skip the wait? Grab a time on our calendar.</p>
      <div class="btn-row" style="justify-content:center">${scheduleBtn()}${btn("/", "Back to Home", "outline")}</div>
    </div>
  </div>
</section>`,
};

// ------------------------------------------------------------ Privacy
const privacy = {
  path: "/privacy-policy/",
  title: "Privacy Policy | Amp Up Sales",
  description: "How Amp Up Sales collects and uses information when you visit ampupsales.com or contact us.",
  body: `
${pageHero({ eyebrow: "Legal", title: "Privacy Policy", intro: "How Amp Up Sales collects and uses information when you visit this site or contact us.", crumbs: [["Privacy Policy"]], img: "page-about.jpg", cta: false })}
<section class="section">
  <div class="container prose">
    <h2>Information we collect</h2>
    <p>When you submit a form, we collect the details you provide, such as your name, email address, company, phone number and message. We may also collect basic analytics, such as pages visited and browser type.</p>
    <h2>How we use it</h2>
    <p>We use this information to respond to your inquiry, provide and improve our services and understand how our website is used. We do not sell your information.</p>
    <h2>Service providers</h2>
    <p>Our website is hosted by Netlify, which also processes form submissions on our behalf.</p>
    <h2>Your choices</h2>
    <p>To access, correct or delete your information, email <a href="mailto:${SITE.email}"><u>${SITE.email}</u></a>.</p>
  </div>
</section>`,
};

const notFound = {
  path: "/404.html",
  out: "404.html",
  title: "Page Not Found | Amp Up Sales",
  description: "The page you're looking for couldn't be found.",
  extraHead: '<meta name="robots" content="noindex">',
  body: `
<section class="section">
  <div class="container center" style="max-width:720px">
    <span class="eyebrow">404</span>
    <h1>This page took a different path.</h1>
    <p class="lead">The page you're looking for has moved or doesn't exist. Try one of these instead.</p>
    <div class="btn-row" style="justify-content:center">${btn("/", "Home", "navy")}${btn("/services/", "Services", "outline")}${btn("/connect/", "Contact", "outline")}</div>
  </div>
</section>`,
};

export default [workWithUs, about, insights, connect, thanks, privacy, notFound];
