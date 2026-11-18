import { SERVICES, icon, media, btn, scheduleBtn, head, pageHero, faq, faqSchema, ctaBand } from "../lib.mjs";

const FAQ = [
  ["What does an outsourced sales and marketing team do?", "It gives you sales leadership, marketing strategy and hands-on execution (pipeline support, outreach, content, website work and follow-up) without building a full internal team first."],
  ["What does an outsourced CRO or sales leader do?", "They guide sales, marketing, pipeline strategy, forecasting, revenue operations and the go-to-market plan, and hold the team accountable for execution."],
  ["What's included in outbound sales?", "Identifying target accounts, building contact lists, writing messaging, running email and LinkedIn campaigns, reviewing replies and keeping follow-up consistent."],
  ["What is AEO?", "Answer Engine Optimization: structuring your site around the questions buyers ask so search engines and AI tools can understand, summarize and recommend you."],
  ["How long does SEO take?", "Usually several months, depending on competition, site quality, content depth and how consistently new content is published."],
  ["What makes a B2B website convert?", "It clearly states who you help, what problems you solve, why you're credible, what outcomes to expect and what the next step is."],
  ["What is sales enablement?", "The content, tools, messaging and process that help a sales team explain value and move deals forward."],
  ["What is revenue operations?", "Connecting sales, marketing, systems, data and reporting so leadership has clear pipeline visibility."],
];

export default {
  path: "/services/",
  title: "Services: Outsourced Sales, Marketing, Outbound & Websites | Amp Up Sales",
  description: "Outsourced sales leadership, outsourced marketing leadership, outbound lead generation, websites with SEO and AEO, content and sales enablement, and sales operations for B2B companies.",
  extraHead: faqSchema(FAQ),
  body: `
${pageHero({ eyebrow: "Our services", title: "Sales and marketing support that actually gets executed", intro: "We work as an outsourced extension of your team. We help build, write, launch, track and improve the work, not just advise on it.", crumbs: [["Services"]], img: "page-services.jpg" })}

<nav class="jump" aria-label="Services on this page"><div class="container">${SERVICES.map((s) => `<a href="#${s.slug}">${s.title}</a>`).join("")}</div></nav>

<section class="section" style="padding-top:20px;padding-bottom:40px">
  <div class="container">
    ${SERVICES.map((s, i) => `
    <div class="svc" id="${s.slug}">
      <div class="svc__media reveal">${media(`service-${i + 1}.jpg`, s.title)}</div>
      <div class="reveal">
        <span class="svc__num">0${i + 1} / 06</span>
        <h2 style="font-size:clamp(1.7rem,2.8vw,2.3rem);margin-top:10px">${s.title}</h2>
        <p class="lead">${s.body}</p>
        <ul class="checklist checklist--2">${s.items.map((it) => `<li>${icon("check")}${it}</li>`).join("")}</ul>
        <div class="for"><strong>Best for:</strong> ${s.for}</div>
        ${scheduleBtn("navy", "Talk About This Service")}
      </div>
    </div>`).join("")}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${head("Why companies hire us", "Leadership and execution, without the full-time hire", "", "center")}
    <div class="grid grid--4">
      <div class="feature reveal"><div class="ico">${icon("users")}</div><h3>Executive-level support</h3><p>Senior thinking on positioning, pipeline and go-to-market.</p></div>
      <div class="feature reveal"><div class="ico">${icon("bolt")}</div><h3>Execution, not just strategy</h3><p>We do the work, not just hand you a plan.</p></div>
      <div class="feature reveal"><div class="ico">${icon("layers")}</div><h3>Sales + marketing aligned</h3><p>One plan across messaging, outreach, content and follow-up.</p></div>
      <div class="feature reveal"><div class="ico">${icon("eye")}</div><h3>Accountability + visibility</h3><p>Clear ownership and reporting leadership can trust.</p></div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("FAQ", "Common questions about our services", "", "center")}
    ${faq(FAQ)}
  </div>
</section>

${ctaBand("Not sure which service you need first? Let's figure it out together.")}
`,
};
