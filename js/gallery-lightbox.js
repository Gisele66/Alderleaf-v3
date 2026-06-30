(function () {
  var lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  var lightboxImage = document.getElementById('gallery-lightbox-image');
  var lightboxCaption = document.getElementById('gallery-lightbox-caption');
  var lastTrigger = null;

  function openLightbox(trigger, img) {
    lastTrigger = trigger;
    if (!lightboxImage || !img) return;

    lightboxImage.src = img.getAttribute('src') || '';
    lightboxImage.alt = img.getAttribute('alt') || '';
    if (lightboxCaption) {
      lightboxCaption.textContent = img.getAttribute('alt') || '';
    }

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeBtn = lightbox.querySelector('.gallery-lightbox-close');
    if (closeBtn) closeBtn.focus({ focusVisible: false });
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lightboxImage) {
      lightboxImage.removeAttribute('src');
    }
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.gallery-grid .gallery-card').forEach(function (card) {
    var img = card.querySelector('img');
    if (!img) return;

    card.setAttribute('aria-label', 'View larger: ' + (img.getAttribute('alt') || 'gallery photo'));

    card.addEventListener('click', function () {
      openLightbox(card, img);
    });
  });

  lightbox.querySelectorAll('[data-gallery-close]').forEach(function (el) {
    el.addEventListener('click', closeLightbox);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
