import { SITE, icon, media, btn, scheduleBtn, head, serviceCards, industryCards, contactSection, ctaBand } from "../lib.mjs";

const rotate = ["Outsourced Sales Leadership", "Targeted Outbound", "Buyer-Focused Websites", "Clear Revenue Visibility"];

export default {
  path: "/",
  title: "Outsourced Sales & Marketing Team for B2B Growth | Amp Up Sales",
  description: "Amp Up Sales is an outsourced sales and marketing team for B2B companies: sales leadership, outbound, websites, SEO/AEO, content and sales operations, built and executed for you.",
  extraHead: `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org", "@type": "ProfessionalService", name: "Amp Up Sales", url: SITE.url,
    email: SITE.email, telephone: "+1-614-407-5786", areaServed: "US", sameAs: [SITE.linkedin, SITE.youtube],
    description: "Outsourced sales and marketing team for B2B growth.",
  })}</script>`,
  body: `
<section class="hero">
  <div class="hero__media">${media("hero.jpg", "B2B sales and marketing team reviewing performance charts", "", true)}</div>
  <div class="container">
    <div class="hero__content">
      <span class="eyebrow">Your outsourced sales &amp; marketing team</span>
      <h1>Execute your B2B growth with <span class="rotator" data-rotate>${rotate.map((r, i) => `<span${i === 0 ? ' class="is-active"' : ' aria-hidden="true"'}>${r}</span>`).join("")}</span></h1>
      <p>We help B2B companies build more disciplined sales and marketing: clear positioning, consistent pipeline and follow-up that actually happens. Strategy and execution, under one roof.</p>
      <div class="btn-row">${scheduleBtn()}${btn("/services/", "View Services", "ghost")}</div>
    </div>
  </div>
</section>

<section class="priorities">
  <div class="container">
    <div class="priorities__grid reveal">
      <div class="priority"><span class="priority__num">01</span><h3>Clarify positioning</h3><p>Know who you serve, what you solve and why buyers should care.</p></div>
      <div class="priority"><span class="priority__num">02</span><h3>Build pipeline</h3><p>Targeted outreach that creates real conversations with the right accounts.</p></div>
      <div class="priority"><span class="priority__num">03</span><h3>Improve follow-up</h3><p>No more opportunities stalling between the first call and the close.</p></div>
      <div class="priority"><span class="priority__num">04</span><h3>Track execution</h3><p>Visible, owned and measured activity leadership can act on.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split">
    <div class="split__media reveal">
      ${media("about.jpg", "Amp Up Sales working session with a client leadership team")}
      <div class="badge-card"><span class="ico">${icon("bolt")}</span><div><strong>Strategy + execution</strong><small>We build, write, launch and track the work, not just advise.</small></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">We are Amp Up Sales</span>
      <h2>An extension of your leadership team</h2>
      <p class="lead">Most B2B leaders know what needs to happen. The problem is finding the time and people to do it consistently.</p>
      <p>We close that gap. Amp Up Sales brings senior-level sales and marketing thinking into the day-to-day work: planning, messaging, campaigns, pipeline support and revenue activity, so growth stops depending on whoever has a free afternoon.</p>
      <div class="tabs">
        <div class="tabs__list" role="tablist">
          <button class="tabs__btn" role="tab" aria-selected="true" aria-controls="t1" id="tb1">Clarity First</button>
          <button class="tabs__btn" role="tab" aria-selected="false" aria-controls="t2" id="tb2">Execution Matters</button>
          <button class="tabs__btn" role="tab" aria-selected="false" aria-controls="t3" id="tb3">Accountability Wins</button>
        </div>
        <div class="tabs__panel" id="t1" role="tabpanel" aria-labelledby="tb1"><p>Your message, market and priorities need to be clear before activity starts. We fix the foundation first so every campaign and conversation pulls in the same direction.</p></div>
        <div class="tabs__panel" id="t2" role="tabpanel" aria-labelledby="tb2" hidden><p>Strategy only has value once it turns into consistent action. We do the work: outreach, content, website updates and CRM follow-through.</p></div>
        <div class="tabs__panel" id="t3" role="tabpanel" aria-labelledby="tb3" hidden><p>Growth improves when activity is visible, owned and measured. You'll always know what's working, what isn't and what happens next.</p></div>
      </div>
      ${btn("/about/", "About Us", "navy")}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${head("What we solve", "Where B2B growth usually gets stuck", "If any of these sound familiar, you're not alone. They're the most common reasons a strong offer doesn't turn into a consistent pipeline.", "center")}
    <div class="grid grid--4">
      <div class="feature reveal"><div class="ico">${icon("message")}</div><h3>Unclear messaging</h3><p>Buyers can't quickly tell who you help, what you solve or why you're different.</p></div>
      <div class="feature reveal"><div class="ico">${icon("send")}</div><h3>Inconsistent outreach</h3><p>Prospecting happens in bursts, when someone has time, then stops.</p></div>
      <div class="feature reveal"><div class="ico">${icon("refresh")}</div><h3>Weak follow-up</h3><p>Good conversations go quiet because nobody owns the next step.</p></div>
      <div class="feature reveal"><div class="ico">${icon("flag")}</div><h3>No clear owner</h3><p>Sales and marketing sit between people, so nothing moves with urgency.</p></div>
    </div>
  </div>
</section>


<section class="section">
  <div class="container">
    <div class="section-head section-head--split reveal">
      <div><span class="eyebrow">The B2B buying reality</span><h2>Buyers decide before they ever talk to you</h2><p class="lead">Most of the buying journey now happens without a seller in the room. That's why messaging, content and relevant outreach matter as much as the sales call.</p></div>
    </div>
    <div class="stats">
      <div class="stat reveal"><span class="stat__num">67%</span><p>of B2B buyers prefer a rep-free buying experience.</p><span class="stat__src">Source: <a href="https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience" target="_blank" rel="noopener">Gartner, 2026</a></span></div>
      <div class="stat reveal"><span class="stat__num">61%</span><p>of the way through their journey before buyers first contact a seller.</p><span class="stat__src">Source: <a href="https://6sense.com/report/buyer-experience/" target="_blank" rel="noopener">6sense, 2025</a></span></div>
      <div class="stat reveal"><span class="stat__num">4 in 5</span><p>deals go to the vendor buyers already favored before first contact.</p><span class="stat__src">Source: <a href="https://6sense.com/report/buyer-experience/" target="_blank" rel="noopener">6sense, 2025</a></span></div>
      <div class="stat reveal"><span class="stat__num">73%</span><p>of B2B buyers actively avoid suppliers who send irrelevant outreach.</p><span class="stat__src">Source: <a href="https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience" target="_blank" rel="noopener">Gartner, 2025</a></span></div>
    </div>
  </div>
</section>
<section class="section section--soft">
  <div class="container">
    <div class="section-head section-head--split reveal">
      <div><span class="eyebrow">Our services</span><h2>Solutions built for B2B growth</h2></div>
      ${btn("/services/", "All Services", "outline")}
    </div>
    ${serviceCards()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--split reveal">
      <div><span class="eyebrow">How we work</span><h2>A clear pathway from plan to pipeline</h2><p class="lead">Every engagement runs on the same simple rhythm, so you always know what's happening and why.</p></div>
      ${scheduleBtn("navy")}
    </div>
    <div class="steps">
      <div class="step reveal"><div class="step__dot">01</div><small>Step 1</small><h3>Align</h3><p>Agree on priorities, goals and the gaps holding growth back.</p></div>
      <div class="step reveal"><div class="step__dot">02</div><small>Step 2</small><h3>Build</h3><p>Put the structure, messaging and systems in place.</p></div>
      <div class="step reveal"><div class="step__dot">03</div><small>Step 3</small><h3>Execute</h3><p>Launch the priority work: campaigns, content, site and follow-up.</p></div>
      <div class="step reveal"><div class="step__dot">04</div><small>Step 4</small><h3>Optimize</h3><p>Review results, fix what stalls and plan the next push.</p></div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container split split--rev">
    <div class="split__media reveal">
      ${media("why.jpg", "Sales leader reviewing pipeline results")}
      <div class="badge-card"><span class="ico">${icon("chart")}</span><div><strong>One coordinated plan</strong><small>Messaging, outreach, content, website and follow-up, aligned.</small></div></div>
    </div>
    <div class="reveal">
      <span class="eyebrow">Is this a fit?</span>
      <h2>Built for B2B teams with a strong offer and no time to execute</h2>
      <p>We work best with companies that already have something worth selling and need the leadership and hands to sell it consistently.</p>
      <ul class="checklist">
        <li>${icon("tick")}You sell to B2B buyers with a defined offer and a real market</li>
        <li>${icon("tick")}You need a more consistent, predictable pipeline</li>
        <li>${icon("tick")}Your team lacks bandwidth to execute what leadership plans</li>
        <li>${icon("tick")}You want sales and marketing working from one plan</li>
        <li>${icon("tick")}You need senior-level support without a full-time hire</li>
      </ul>
      ${btn("/work-with-us/", "How We Work Together", "navy")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head section-head--split reveal">
      <div><span class="eyebrow">Industries</span><h2>Built for complex B2B sales</h2><p class="lead">We focus on industries where buyers need education, trust and consistent follow-up before they commit.</p></div>
      ${btn("/industries/", "All Industries", "outline")}
    </div>
    ${industryCards()}
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${head("What you get", "Visibility you can act on", "Every engagement includes reporting built around the activity that actually moves revenue.")}
    <div class="deliver reveal">
      <div><h3>A practical growth plan</h3><p>Built around your priorities, buyers and team, not a generic playbook.</p></div>
      <div><h3>Execution across the funnel</h3><p>Sales, marketing, content, website, outbound and CRM support in one place.</p></div>
      <div><h3>Executive-level reporting</h3><p>Pipeline movement, follow-up activity, lead quality and clear next steps.</p></div>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head section-head--split reveal">
      <div><span class="eyebrow">Read our insights</span><h2>Ideas for better B2B growth</h2></div>
      ${btn("/insights/", "All Insights", "outline")}
    </div>
    <div class="grid grid--3">
      <a class="post reveal" href="/insights/#outsourced-vs-full-time">${media("insight-1.jpg", "Leadership team meeting")}<div class="post__body"><span class="post__tag">Sales Leadership</span><h3>Outsourced GTM leadership vs. hiring a full-time sales leader</h3><p>When an outsourced leader makes more sense, and when it's time to hire.</p><span class="link-arrow">Read more ${icon("arrow")}</span></div></a>
      <a class="post reveal" href="/insights/#website-not-converting">${media("insight-4.jpg", "Reviewing B2B performance charts")}<div class="post__body"><span class="post__tag">Websites</span><h3>Why your website isn't converting the right buyers</h3><p>Messaging, service pages, proof points, FAQs and calls to action.</p><span class="link-arrow">Read more ${icon("arrow")}</span></div></a>
      <a class="post reveal" href="/insights/#follow-up-breaks-down">${media("insight-6.jpg", "Sales team reviewing pipeline")}<div class="post__body"><span class="post__tag">Pipeline</span><h3>Why pipeline follow-up breaks down</h3><p>CRM visibility, task ownership and sales process accountability.</p><span class="link-arrow">Read more ${icon("arrow")}</span></div></a>
    </div>
  </div>
</section>

${contactSection()}
${ctaBand()}
`,
};
