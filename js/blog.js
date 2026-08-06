document.addEventListener("DOMContentLoaded", function () {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const counterSection = document.querySelector("[data-counter-section]");
  const counterValues = Array.from(
    document.querySelectorAll("[data-count-target]"),
  );

  if (!counterSection || !counterValues.length) {
    return;
  }

  let hasAnimated = false;

  function formatValue(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function animateCounter(element) {
    const target = Number(element.dataset.countTarget || "0");
    const suffix = element.dataset.countSuffix || "";
    const duration = 1400;
    const startTime = performance.now();

    function updateValue(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(target * easedProgress);

      element.textContent = formatValue(currentValue) + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(updateValue);
        return;
      }

      element.textContent = formatValue(target) + suffix;
    }

    window.requestAnimationFrame(updateValue);
  }

  function startAnimation() {
    if (hasAnimated) {
      return;
    }

    hasAnimated = true;
    counterValues.forEach(animateCounter);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(counterSection);
    return;
  }

  startAnimation();
});
