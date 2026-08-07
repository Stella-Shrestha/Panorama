(function () {
  function initCircularText(el) {
    const raw = el.dataset.text || el.textContent || "";
    const text = String(raw).trim();
    if (!text) return;

    // clear current content
    el.innerHTML = "";

    // treat spaces as dots for the visual style
    const chars = Array.from(text).map((c) => (c === " " ? "•" : c));

    // determine radius (distance from center)
const rect = el.getBoundingClientRect();

const size = Math.min(rect.width, rect.height);    const defaultRadius = Math.round(size / 2) - 14; // padding from edge
    const radius = parseInt(el.dataset.radius, 10) || defaultRadius;

    const step = 360 / chars.length;

    // debug: mark element area so it's visible during troubleshooting
    el.style.outline =
      el.dataset.debug === "true" ? "1px dashed rgba(0,0,0,0.08)" : "";
    console.debug("[circular-text] init", { el, text, radius, step });

    chars.forEach(function (ch, i) {
  const span = document.createElement("span");

span.textContent = ch;

span.className =
  "absolute left-1/2 top-1/2 block whitespace-pre leading-none pointer-events-none";
      // ensure small adjustments for dots
      if (ch === "•") span.style.fontSize = (el.dataset.dotSize || 8) + "px";

      // append first so we can measure
      el.appendChild(span);
      span.style.position = "absolute";
span.style.left = "50%";
span.style.top = "50%";
span.style.transformOrigin = "center center";

      const rot = i * step;

      // place each character around the circle and counter-rotate so it's upright
      // final translate(-50%,-50%) recenters the glyph on the point
span.style.left = "50%";
span.style.top = "50%";

span.style.transform =
`translate(-50%, -50%)
 rotate(${rot}deg)
 translateY(-${radius}px)
 rotate(${-rot}deg)`;
      span.style.transformOrigin = "center center";
      span.style.lineHeight = "1";
    });
  }

  function initAll() {
    document.querySelectorAll(".circular-text-js").forEach(function (el) {
      initCircularText(el);
    });
  }

  // SVG fallback: if spans weren't created or measurement failed, render text along a circular path
  function createSVGFallback(el) {
    try {
      const raw = el.dataset.text || el.textContent || "";
      const text = String(raw).trim();
      if (!text) return;

      // clear
      el.innerHTML = "";

const rect = el.getBoundingClientRect();

const size = Math.min(rect.width, rect.height);      const radius =
        parseInt(el.dataset.radius, 10) || Math.round(size / 2) - 18;
      const diameter = radius * 2 + 40;

      const ns = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(ns, "svg");
      svg.setAttribute("width", diameter);
      svg.setAttribute("height", diameter);
      svg.setAttribute("viewBox", `0 0 ${diameter} ${diameter}`);
      svg.style.display = "block";

      const defs = document.createElementNS(ns, "defs");
      const path = document.createElementNS(ns, "path");
      const cx = diameter / 2;
      const cy = diameter / 2;
      const pathId = "ct-path-" + Math.floor(Math.random() * 1000000);
      const d = `M ${cx} ${cy} m -${radius}, 0 a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 -${radius * 2} 0`;
      path.setAttribute("id", pathId);
      path.setAttribute("d", d);
      defs.appendChild(path);
      svg.appendChild(defs);

      const textEl = document.createElementNS(ns, "text");
      textEl.setAttribute("fill", getComputedStyle(el).color || "#B7392F");
      textEl.setAttribute("font-weight", "800");
      textEl.setAttribute("text-anchor", "middle");
      textEl.setAttribute("dominant-baseline", "middle");

      const textPath = document.createElementNS(ns, "textPath");
      textPath.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        `#${pathId}`,
      );
      textPath.setAttribute("startOffset", "50%");
      // replace spaces with small dots for the look
      const display = Array.from(text)
        .map((c) => (c === " " ? "•" : c))
        .join("");
      textPath.textContent = display + " ";

      textEl.appendChild(textPath);
      svg.appendChild(textEl);

      // center svg inside container
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.appendChild(svg);

      console.warn(
        "[circular-text] SVG fallback rendered for",
        el,
        "radius",
        radius,
      );
    } catch (err) {
      console.error("[circular-text] SVG fallback failed", err);
    }
  }

  // debounce helper
  function debounce(fn, wait) {
    let t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  // run now
window.addEventListener("load", () => {
    initAll();
});

  // short sanity pass: after init, if no spans were inserted, try SVG fallback
  setTimeout(function () {
    document.querySelectorAll(".circular-text-js").forEach(function (el) {
      if (!el.querySelector("span") && !el.querySelector("svg")) {
        createSVGFallback(el);
      }
    });
  }, 60);

  // re-init on resize with debounce
  window.addEventListener("resize", debounce(initAll, 120));
})();
