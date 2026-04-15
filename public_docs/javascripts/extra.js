document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("atlas-loaded");

  const transitionLayer = document.createElement("div");
  transitionLayer.className = "page-transition-layer";
  document.body.appendChild(transitionLayer);

  const revealNodes = document.querySelectorAll(".reveal-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 55, 320)}ms`;
    observer.observe(node);
  });

  const reactiveNodes = document.querySelectorAll(
    ".hero-shell, .orbital-card, .lab-card, .brief-card, .matrix-card, .signal-panel, .timeline-node, .report-hero"
  );

  reactiveNodes.forEach((node) => {
    node.addEventListener("pointermove", (event) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--mx", `${x}%`);
      node.style.setProperty("--my", `${y}%`);
    });
  });

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || link.target === "_blank" || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    link.addEventListener("click", (event) => {
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("page-is-transitioning");
      transitionLayer.classList.add("is-active");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 360);
    });
  });
});
