(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIconOpen = document.getElementById('menu-icon-open');
  var menuIconClose = document.getElementById('menu-icon-close');

  function setMenuOpen(open) {
    if (!mobileMenu || !menuToggle) return;
    mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    if (menuIconOpen) menuIconOpen.classList.toggle('is-hidden', open);
    if (menuIconClose) menuIconClose.classList.toggle('is-hidden', !open);
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setMenuOpen(mobileMenu.hidden);
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuOpen(false);
      });
    });
  }
})();
