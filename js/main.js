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

  var staticReviews = [
    {
      name: 'Jane D.',
      title: 'Great Job Guys',
      rating: 5,
      comment: 'Chris and his team did a fantastic job removing our backyard trees. They showed up on time, worked hard and left our yard cleaner than when they started.'
    },
    {
      name: 'G. LaRose',
      title: 'Exceptional work!',
      rating: 5,
      comment: 'Chris does the kinds of jobs others won\'t attempt. He shows up, is professional and with all the right equipment to get the job done. I\'m always super happy after he works his magic, I highly recommend!'
    }
  ];

  var reviewModal = document.getElementById('review-modal');
  var reviewForm = document.getElementById('review-form');
  var reviewThanks = document.getElementById('review-thanks');
  var reviewRating = document.getElementById('review-rating');
  var reviewName = document.getElementById('review-name');
  var reviewTitle = document.getElementById('review-title');
  var reviewComment = document.getElementById('review-comment');
  var reviewCharCount = document.getElementById('review-char-count');
  var starButtons = document.querySelectorAll('.review-star-btn');
  var featuredTitle = document.getElementById('featured-testimonial-title');
  var featuredStars = document.getElementById('featured-testimonial-stars');
  var featuredBody = document.getElementById('featured-testimonial-body');
  var featuredAuthor = document.getElementById('featured-testimonial-author');
  var reviewsAllGrid = document.getElementById('reviews-all-grid');
  var reviewStorageKey = 'alderleaf-reviews';
  var legacyStorageKey = 'alderleaf-featured-review';
  var reviewMaxLength = 200;
  var lastReviewTrigger = null;

  function starsText(rating) {
    var count = Math.max(1, Math.min(5, Number(rating) || 5));
    var stars = '';
    for (var i = 0; i < count; i += 1) stars += '★';
    return stars;
  }

  function formatQuoteTitle(title) {
    var trimmed = title.trim().replace(/^"|"$/g, '');
    return '"' + trimmed + '"';
  }

  function quoteTitleFromComment(comment) {
    var trimmed = comment.trim();
    var match = trimmed.match(/^[^.!?]+[.!?]?/);
    var title = match ? match[0].trim() : trimmed;
    if (title.length > 60) title = trimmed.slice(0, 57).trim() + '…';
    return formatQuoteTitle(title);
  }

  function displayQuoteTitle(review) {
    if (review.title && review.title.trim()) {
      return formatQuoteTitle(review.title);
    }
    return quoteTitleFromComment(review.comment);
  }

  function getSubmittedReviews() {
    try {
      var saved = localStorage.getItem(reviewStorageKey);
      if (saved) return JSON.parse(saved);

      var legacy = localStorage.getItem(legacyStorageKey);
      if (legacy) {
        var review = JSON.parse(legacy);
        var reviews = [review];
        localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
        localStorage.removeItem(legacyStorageKey);
        return reviews;
      }
    } catch (error) {
      localStorage.removeItem(reviewStorageKey);
      localStorage.removeItem(legacyStorageKey);
    }
    return [];
  }

  function getLatestSubmittedReview() {
    var reviews = getSubmittedReviews();
    return reviews.length ? reviews[reviews.length - 1] : null;
  }

  function getHomepageFeaturedReview() {
    return getLatestSubmittedReview() || staticReviews[1];
  }

  function getAllDisplayReviews() {
    var reviews = staticReviews.slice();
    getSubmittedReviews().forEach(function (review) {
      reviews.push(review);
    });
    return reviews;
  }

  function updateReviewCharCount() {
    if (!reviewComment || !reviewCharCount) return;
    var length = reviewComment.value.length;
    reviewCharCount.textContent = length + ' / ' + reviewMaxLength;
    reviewCharCount.classList.toggle('is-limit', length >= reviewMaxLength);
  }

  function applyFeaturedReview(review) {
    if (!review || !featuredTitle || !featuredStars || !featuredBody || !featuredAuthor) return;
    featuredTitle.textContent = displayQuoteTitle(review);
    featuredStars.textContent = starsText(review.rating);
    featuredStars.setAttribute('aria-label', review.rating + ' out of 5 stars');
    featuredBody.textContent = review.comment;
    featuredAuthor.textContent = review.name;
  }

  function createReviewCard(review) {
    var block = document.createElement('blockquote');
    block.className = 'testimonial-block';

    var title = document.createElement('p');
    title.className = 'quote-title';
    title.textContent = displayQuoteTitle(review);

    var stars = document.createElement('div');
    stars.className = 'testimonial-stars';
    stars.textContent = starsText(review.rating);
    stars.setAttribute('aria-label', review.rating + ' out of 5 stars');

    var body = document.createElement('p');
    body.className = 'testimonial-body';
    body.textContent = review.comment;

    var author = document.createElement('footer');
    author.className = 'testimonial-author';
    author.textContent = review.name;

    block.appendChild(title);
    block.appendChild(stars);
    block.appendChild(body);
    block.appendChild(author);
    return block;
  }

  function createReviewCtaCard() {
    var block = document.createElement('div');
    block.className = 'testimonial-block testimonial-cta';

    var title = document.createElement('p');
    title.className = 'quote-title';
    title.textContent = 'Share Your Experience';

    var body = document.createElement('p');
    body.className = 'testimonial-body';
    body.textContent = 'Had a great experience with Alderleaf? We would love to hear from you.';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn-review-open';
    button.textContent = 'Leave a Review';

    block.appendChild(title);
    block.appendChild(body);
    block.appendChild(button);
    return block;
  }

  function renderAllReviewsGrid() {
    if (!reviewsAllGrid) return;
    reviewsAllGrid.innerHTML = '';
    getAllDisplayReviews().forEach(function (review) {
      reviewsAllGrid.appendChild(createReviewCard(review));
    });
    reviewsAllGrid.appendChild(createReviewCtaCard());
  }

  function saveSubmittedReview(review) {
    var reviews = getSubmittedReviews();
    reviews.push(review);
    localStorage.setItem(reviewStorageKey, JSON.stringify(reviews));
    applyFeaturedReview(review);
    renderAllReviewsGrid();
  }

  function setReviewStars(rating) {
    if (!reviewRating) return;
    reviewRating.value = String(rating);
    starButtons.forEach(function (btn) {
      var star = Number(btn.getAttribute('data-star'));
      btn.classList.toggle('is-active', star <= rating);
      btn.setAttribute('aria-pressed', star <= rating ? 'true' : 'false');
    });
  }

  function openReviewModal(trigger) {
    if (!reviewModal) return;
    lastReviewTrigger = trigger || null;
    reviewModal.hidden = false;
    document.body.style.overflow = 'hidden';
    var firstFocus = reviewModal.querySelector('#review-name');
    if (firstFocus) firstFocus.focus();
  }

  function closeReviewModal() {
    if (!reviewModal) return;
    reviewModal.hidden = true;
    document.body.style.overflow = '';
    if (reviewForm) reviewForm.hidden = false;
    if (reviewThanks) reviewThanks.hidden = true;
    if (reviewForm) reviewForm.reset();
    setReviewStars(0);
    updateReviewCharCount();
    if (lastReviewTrigger) lastReviewTrigger.focus();
  }

  document.addEventListener('click', function (event) {
    var openBtn = event.target.closest('.btn-review-open');
    if (openBtn) {
      event.preventDefault();
      openReviewModal(openBtn);
    }
  });

  if (reviewModal) {
    reviewModal.querySelectorAll('[data-review-close]').forEach(function (el) {
      el.addEventListener('click', closeReviewModal);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !reviewModal.hidden) {
        closeReviewModal();
      }
    });
  }

  starButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setReviewStars(Number(btn.getAttribute('data-star')));
    });
  });

  if (reviewComment) {
    reviewComment.addEventListener('input', updateReviewCharCount);
    updateReviewCharCount();
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!reviewRating || !reviewRating.value) {
        var firstStar = reviewModal && reviewModal.querySelector('.review-star-btn');
        if (firstStar) firstStar.focus();
        return;
      }
      var review = {
        name: reviewName ? reviewName.value.trim() : '',
        title: reviewTitle ? reviewTitle.value.trim() : '',
        rating: Number(reviewRating.value),
        comment: reviewComment ? reviewComment.value.trim() : ''
      };
      saveSubmittedReview(review);
      if (reviewForm) reviewForm.hidden = true;
      if (reviewThanks) reviewThanks.hidden = false;
    });
  }

  applyFeaturedReview(getHomepageFeaturedReview());
  renderAllReviewsGrid();
})();
