(() => {
  const intro = document.getElementById('intro');
  const prefersReduced =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finish = () => {
    document.body.classList.add('intro-done');
    if (!intro) return;
    intro.classList.add('intro--hide');

    const removeIntro = () => {
      if (intro && intro.isConnected) intro.remove();
    };

    // Prefer transition end (smooth), but also add a fallback timeout.
    intro.addEventListener('transitionend', removeIntro, { once: true });
    window.setTimeout(removeIntro, 700);
  };

  // If reduced motion is enabled, skip the intro.
  if (prefersReduced) {
    finish();
    return;
  }

  // Let the intro play briefly, then reveal the site.
  window.addEventListener('load', () => {
    window.setTimeout(finish, 1800);
  });
})();
