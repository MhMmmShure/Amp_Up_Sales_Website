import { INDUSTRIES, SERVICES, icon, media, btn, scheduleBtn, head, pageHero, faq, faqSchema, ctaBand, industryCards, contactForm } from "../lib.mjs";

const svc = (slug) => SERVICES.find((s) => s.slug === slug);

const DETAIL = {
  "manufacturing-distribution": {
    hero: "Grow pipeline in long, relationship-driven sales cycles",
    intro: "Manufacturers and distributors win on relationships, reliability and expertise, but most still rely on referrals and a few key reps. We build a consistent engine around that.",
    challenges: [
      ["Referral-dependent growth", "New business depends on a handful of relationships and repeat buyers."],
      ["Complex, technical offers", "Capabilities are hard to explain to procurement, engineering and operations buyers at once."],
      ["Outdated digital presence", "Websites list products but don't answer the questions buyers research first."],
      ["Stalled quotes and follow-up", "RFQs and quotes go out, then nobody owns the next touch."],
    ],
    help: ["lead-generation-outbound", "website-seo-aeo", "outsourced-sales-leadership", "sales-operations"],
    outcomes: ["Target account lists by segment, region and buying role", "Capability and industry pages buyers can actually find", "Consistent quote and opportunity follow-up", "Clear pipeline reporting for leadership"],
    faq: [
      ["Can you help us reach new OEMs or distributors?", "Yes. We research target accounts by segment and role, build lists and run email and LinkedIn outreach built around your capabilities and their pain points."],
      ["Our sales team is small. Does that matter?", "No. We add leadership and execution capacity around your existing reps, so they spend their time on qualified conversations."],
      ["Do you work with ERP and technology partners that sell into manufacturers?", "Yes. Partners selling ERP and technology into manufacturing and distribution face the same long, education-heavy buying journey, and we build positioning and outbound for them too."],
    ],
  },
  healthcare: {
    hero: "Clear messaging and consistent outreach for healthcare markets",
    intro: "Healthcare buyers are busy, cautious and committee-driven. We help companies selling into healthcare earn attention with clear, credible messaging and disciplined follow-up.",
    challenges: [
      ["Long, committee-based decisions", "Clinical, operational, IT and finance stakeholders all weigh in."],
      ["Trust is the price of entry", "Buyers need proof, clarity and credibility before they take a meeting."],
      ["Hard-to-explain value", "Outcomes, workflows and ROI get lost in jargon."],
      ["Inconsistent pipeline", "Opportunities stall between conference leads and signed agreements."],
    ],
    help: ["outsourced-marketing-leadership", "content-sales-enablement", "lead-generation-outbound", "sales-operations"],
    outcomes: ["Messaging tailored to each stakeholder in the buying group", "Educational content that builds trust before the first call", "Targeted outreach to the right roles and organizations", "Visible follow-up across long buying cycles"],
    faq: [
      ["Who do you help in healthcare?", "B2B companies selling products and services to healthcare organizations, such as practices, clinics, health systems and the vendors that support them."],
      ["Do you handle patient data?", "No. Our work focuses on B2B sales and marketing. We don't need or handle patient health information."],
      ["Can you support a multi-stakeholder sale?", "Yes. We build messaging and enablement content for each role involved so every stakeholder understands the value."],
    ],
  },
  "professional-services": {
    hero: "Trust-first growth for professional services firms",
    intro: "Consulting, advisory, accounting and technology firms sell expertise. We make that expertise visible and turn it into a steady flow of the right conversations.",
    challenges: [
      ["Growth tied to partners' time", "Business development happens when billable work slows down."],
      ["Expertise that's hard to see", "Deep technical knowledge doesn't automatically create buyer confidence."],
      ["Generic positioning", "Firms sound alike, so buyers default to price or whoever they already know."],
      ["Thought leadership that never ships", "Great ideas stay in people's heads instead of in front of buyers."],
    ],
    help: ["outsourced-marketing-leadership", "content-sales-enablement", "website-seo-aeo", "lead-generation-outbound"],
    outcomes: ["Sharper positioning by service line and industry", "Consistent LinkedIn, newsletter and article content", "A website that explains complex expertise clearly", "Targeted business development that doesn't depend on spare time"],
    faq: [
      ["Do you work with technology consultants?", "Yes. We help technology and IT consultants translate technical expertise into language buyers understand, trust and act on."],
      ["Will our content sound like us?", "Yes. We interview your experts and build content from their real thinking, then refine it with your feedback."],
      ["How do you generate opportunities without being salesy?", "Through education and relevance: content that demonstrates expertise, plus targeted outreach that leads with insight, not a pitch."],
    ],
  },
  saas: {
    hero: "A repeatable go-to-market motion for SaaS companies",
    intro: "SaaS growth stalls when positioning is fuzzy, demos don't convert and outbound runs on hope. We tighten the whole motion, from first touch to closed deal.",
    challenges: [
      ["Unclear ideal customer profile", "Marketing and sales chase too many segments at once."],
      ["Weak demo-to-close conversion", "Demos happen, but deals don't move forward."],
      ["Inconsistent outbound", "Pipeline depends on inbound spikes and founder-led selling."],
      ["Go-to-market that doesn't repeat", "What worked once is hard to scale or hand off."],
    ],
    help: ["outsourced-sales-leadership", "lead-generation-outbound", "outsourced-marketing-leadership", "sales-operations"],
    outcomes: ["A sharper ICP and positioning by segment", "Outbound that books qualified demos", "Better demo flow, follow-up and buyer education", "A documented, repeatable go-to-market system"],
    faq: [
      ["How can SaaS companies improve pipeline?", "Clarify the ICP, strengthen outbound, educate buyers before the demo and follow up consistently after it."],
      ["We're still founder-led in sales. Is that a problem?", "Not at all. We help move selling off the founder's plate with process, messaging and outbound that the team can run."],
      ["Do you replace our SDRs?", "We can run outbound for you, or support and coach your existing team, depending on what you need."],
    ],
  },
  education: {
    hero: "Buyer education and outreach for education markets",
    intro: "Selling to schools, colleges and training organizations means long cycles, budget calendars and many stakeholders. We help you stay visible and relevant the whole way through.",
    challenges: [
      ["Budget-cycle timing", "Missing the planning window can push a deal out a full year."],
      ["Many decision-makers", "Administrators, faculty, IT and procurement all need different answers."],
      ["Crowded vendor landscape", "Buyers struggle to tell solutions apart."],
      ["Relationship-driven growth", "Expansion depends on staying top-of-mind between purchases."],
    ],
    help: ["outsourced-marketing-leadership", "lead-generation-outbound", "content-sales-enablement", "website-seo-aeo"],
    outcomes: ["Outreach timed to planning and budget cycles", "Messaging for every stakeholder in the decision", "Content that shows impact and builds confidence", "Nurture programs that keep you top-of-mind"],
    faq: [
      ["Who do you help in education?", "B2B companies selling products, services and technology to K-12 schools, higher education and training organizations."],
      ["How do you handle long buying cycles?", "With consistent nurture content and follow-up timed around planning and budget calendars, so you're in the conversation when decisions get made."],
      ["Can you help us explain outcomes to administrators?", "Yes. We build clear messaging and enablement content focused on the results each stakeholder cares about."],
    ],
  },
};

const index = {
  path: "/industries/",
  title: "Industries We Serve | Amp Up Sales",
  description: "Outsourced sales and marketing for Manufacturing & Distribution, Healthcare, Professional Services, SaaS and Education companies with complex B2B sales.",
  body: `
${pageHero({ eyebrow: "Industries", title: "Built for complex B2B sales", intro: "We focus on industries where buyers need education, trust and consistent follow-up before they commit, and where a strong offer often outpaces the team's time to sell it.", crumbs: [["Industries"]], img: "page-industries.jpg" })}
<section class="section">
  <div class="container">
    ${head("Who we serve", "Five industries, one disciplined approach", "Every industry has its own buyers, cycles and language. The fundamentals stay the same: clear positioning, consistent pipeline and follow-up that happens.", "center")}
    ${industryCards()}
  </div>
</section>
<section class="section section--soft">
  <div class="container split">
    <div class="split__media reveal">${media("industries-approach.jpg", "Strategy session with a B2B client")}</div>
    <div class="reveal">
      <span class="eyebrow">Our approach</span>
      <h2>Industry context, applied to the same proven rhythm</h2>
      <p>We learn your buyers, your market and your sales cycle first. Then we apply the same Align, Build, Execute and Optimize rhythm that keeps every engagement focused and accountable.</p>
      <ul class="checklist">
        <li>${icon("tick")}Messaging written for your buyers' roles and pain points</li>
        <li>${icon("tick")}Outreach timed to how your industry actually buys</li>
        <li>${icon("tick")}Content that proves expertise before the first call</li>
        <li>${icon("tick")}Reporting leadership can act on</li>
      </ul>
      ${btn("/work-with-us/", "See How We Work", "navy")}
    </div>
  </div>
</section>
${ctaBand("Don't see your industry? If you sell to B2B buyers, let's talk.")}
`,
};

const detail = (ind) => {
  const d = DETAIL[ind.slug];
  const others = INDUSTRIES.filter((x) => x.slug !== ind.slug);
  return {
    path: `/industries/${ind.slug}/`,
    title: `${ind.title} Sales & Marketing | Amp Up Sales`,
    description: `${d.intro}`.slice(0, 158),
    extraHead: faqSchema(d.faq),
    body: `
${pageHero({ eyebrow: ind.title, title: d.hero, intro: d.intro, crumbs: [["Industries", "/industries/"], [ind.title]], img: ind.img })}

<section class="section">
  <div class="container">
    ${head("The challenge", `What holds ${ind.title.toLowerCase()} growth back`, "", "center")}
    <div class="grid grid--4">${d.challenges.map(([t, p], i) => `
      <article class="card reveal"><span class="card__num">0${i + 1}</span><div class="ico">${icon(["target", "message", "search", "refresh"][i])}</div><h3>${t}</h3><p>${p}</p></article>`).join("")}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container split">
    <div class="split__media reveal">${media(ind.img.replace(".jpg", "-2.jpg"), ind.title)}
      <div class="badge-card"><span class="ico">${icon(ind.icon)}</span><div><strong>${ind.title}</strong><small>Strategy and execution built around how your buyers buy.</small></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">What changes</span>
      <h2>What working with us looks like</h2>
      <p>We bring the leadership and the hands to execute, so growth stops depending on spare time.</p>
      <ul class="checklist">${d.outcomes.map((o) => `<li>${icon("tick")}${o}</li>`).join("")}</ul>
      ${scheduleBtn("navy")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${head("How we help", "The services that matter most here", "", "center")}
    <div class="grid grid--4">${d.help.map((slug) => { const s = svc(slug); return `
      <article class="card reveal"><div class="ico">${icon(s.icon)}</div><h3>${s.title}</h3><p>${s.short}</p><a class="link-arrow" href="/services/#${s.slug}">Learn more ${icon("arrow")}</a></article>`; }).join("")}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    ${head("FAQ", `${ind.title} questions`, "", "center")}
    ${faq(d.faq)}
  </div>
</section>

<section class="section">
  <div class="container contact">
    <div class="reveal">
      <span class="eyebrow">Other industries</span>
      <h2>We also work with</h2>
      <div class="grid grid--2" style="margin-top:26px">${others.map((o) => `
        <a class="card reveal" href="/industries/${o.slug}/" style="padding:24px"><div class="ico" style="margin-bottom:14px">${icon(o.icon)}</div><h3 style="font-size:1.05rem;margin:0">${o.title}</h3></a>`).join("")}
      </div>
    </div>
    ${contactForm(`Talk to us about ${ind.title.toLowerCase()} growth`)}
  </div>
</section>
${ctaBand()}
`,
  };
};

export default [index, ...INDUSTRIES.map(detail)];
