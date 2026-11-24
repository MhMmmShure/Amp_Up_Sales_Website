/* Amp Up Sales — site interactions (no dependencies) */
(function () {
  "use strict";

  // Image slots: show the branded fallback if a photo hasn't been added yet
  document.querySelectorAll(".media img").forEach(function (img) {
    var mark = function () { img.closest(".media").classList.add("img-missing"); };
    if (img.complete && img.naturalWidth === 0) mark();
    img.addEventListener("error", mark);
  });

  // Sticky header shadow + back-to-top
  var header = document.querySelector(".header");
  var toTop = document.querySelector(".to-top");
  var onScroll = function () {
    var y = window.scrollY;
    if (header) header.classList.toggle("is-scrolled", y > 10);
    if (toTop) toTop.classList.toggle("is-visible", y > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });

  // Mobile drawer
  var drawer = document.querySelector(".drawer");
  var openBtn = document.querySelector(".menu-toggle");
  if (drawer && openBtn) {
    var setOpen = function (open) {
      drawer.classList.toggle("is-open", open);
      openBtn.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) drawer.querySelector(".drawer__close").focus();
    };
    openBtn.addEventListener("click", function () { setOpen(true); });
    drawer.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
  }

  // Tabs
  document.querySelectorAll(".tabs").forEach(function (tabs) {
    var btns = tabs.querySelectorAll(".tabs__btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        btns.forEach(function (b) {
          var sel = b === btn;
          b.setAttribute("aria-selected", String(sel));
          document.getElementById(b.getAttribute("aria-controls")).hidden = !sel;
        });
      });
    });
  });

  // Hero headline rotator: phrases are stacked in one grid cell (fixed height) and cross-fade
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-rotate]").forEach(function (el) {
    var items = el.querySelectorAll(":scope > span");
    var i = 0;
    if (reduce || items.length < 2) return;
    setInterval(function () {
      var cur = items[i];
      i = (i + 1) % items.length;
      var next = items[i];
      cur.classList.remove("is-active");
      cur.classList.add("is-leaving");
      cur.setAttribute("aria-hidden", "true");
      next.classList.remove("is-leaving");
      next.classList.add("is-active");
      next.removeAttribute("aria-hidden");
      setTimeout(function () { cur.classList.remove("is-leaving"); }, 750);
    }, 3200);
  });

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }

  // Problem self-check
  document.querySelectorAll("[data-selfcheck]").forEach(function (box) {
    var inputs = box.querySelectorAll("input[type=checkbox]");
    var score = box.querySelector("[data-score]");
    var verdict = box.querySelector("[data-verdict]");
    var update = function () {
      var n = 0;
      inputs.forEach(function (i) { if (i.checked) n++; });
      score.textContent = n + " of " + inputs.length;
      if (n === 0) verdict.textContent = "Tick any that apply to see where you stand.";
      else if (n <= 2) verdict.textContent = "Early warning signs. Worth tightening before they cost you deals.";
      else if (n <= 4) verdict.innerHTML = "This is likely slowing your growth. <a href=\"/connect/\">Let's talk it through.</a>";
      else verdict.innerHTML = "This is a priority fix. <a href=\"/connect/\">Book a conversation</a> and we'll map a plan.";
    };
    inputs.forEach(function (i) { i.addEventListener("change", update); });
  });

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
