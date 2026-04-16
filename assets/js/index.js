document.addEventListener("DOMContentLoaded", () => {
  // ─────────────────────────────────────────────────────────
  // CONTACT FORM
  // ─────────────────────────────────────────────────────────
  const submitBtn = document.getElementById("submit");

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const name = document.getElementById("userName")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const subject = document.getElementById("subject")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (name && email && subject && message) {
        window.open(
          `mailto:deepagusain313@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(name)} (${encodeURIComponent(email)}): ${encodeURIComponent(message)}`,
        );
      }
    });
  }

  // ─────────────────────────────────────────────────────────
  // STICKY NAV — add .scrolled class after first scroll
  // ─────────────────────────────────────────────────────────
  const navbar = document.getElementById("navbar");

  const handleScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 20);
    updateActiveNav();
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // ─────────────────────────────────────────────────────────
  // ACTIVE NAV LINK on scroll
  // ─────────────────────────────────────────────────────────
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const updateActiveNav = () => {
    const scrollY = window.scrollY + 80;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);

      if (!link) return;

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  };

  // ─────────────────────────────────────────────────────────
  // MOBILE MENU
  // ─────────────────────────────────────────────────────────
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const closeMobileMenu = () => {
    mobileMenu?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    mobileMenu?.setAttribute("aria-hidden", "true");
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    if (
      mobileMenu?.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      !navToggle?.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // ─────────────────────────────────────────────────────────
  // SCROLL REVEAL — IntersectionObserver for .reveal elements
  // ─────────────────────────────────────────────────────────
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

  // ─────────────────────────────────────────────────────────
  // SKILL BAR ANIMATION — animate width when bars are visible
  // ─────────────────────────────────────────────────────────
  const skillObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const width = el.getAttribute("data-width") || "0";
          el.style.width = `${width}%`;
          skillObs.unobserve(el);
        }
      });
    },
    { threshold: 0.3 },
  );

  document
    .querySelectorAll(".skill-fill")
    .forEach((el) => skillObs.observe(el));
});
