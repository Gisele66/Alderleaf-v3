(function () {
  var serviceModal = document.getElementById('service-modal');
  if (!serviceModal) return;

  var serviceTitle = document.getElementById('service-modal-title');
  var serviceImage = document.getElementById('service-modal-image');
  var serviceBody = document.getElementById('service-modal-body');
  var lastTrigger = null;

  var serviceDetails = {
    removal: {
      title: 'Tree Removal & Tree Assessments',
      image: 'assets/images/IMG_5866.jpg',
      imageAlt: 'Tree removal work',
      body:
        '<p>From impeding viewscapes to presenting a danger to existing structures, there are many reasons why it may become necessary to completely remove a tree before the end of its lifespan. We have professional experience in a wide-range of tree removal scenarios, with a proven record of safety.</p>' +
        '<p>We specialize in the take-down, removal and cleanup of trees when there is limited space and danger to structures or other landscaping. We are equipped with specialized, heavy rigging which allows us to safely cut up and lower limbs and stem pieces in a controlled manner with consideration and protection for your property below. Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job for your tree removal.</p>' +
        '<h3>Moving Materials &amp; Clean-up</h3>' +
        '<p>Often getting the tree on the ground is not half of the job and it is the clean-up where the work begins. We have the experience and tools to make light work of a big job and pride ourselves in leaving a work-site in a more tidy state than when we arrived.</p>' +
        '<h3>Tree Assessments</h3>' +
        '<p>Professional assessment of trees by Certified Danger-Tree Assessor with decades of local experience.</p>'
    },
    brushing: {
      title: 'Brushing / Land Clearing',
      image: 'assets/images/brushing-land-clearing.jpg',
      imageAlt: 'Land clearing',
      body:
        '<p>From small backyard brush-clearing to large commercial projects, Alderleaf has experience in the design and execution of a wide-range of multifaceted projects involving specialized machinery and skills.</p>' +
        '<h3>Land-Clearing</h3>' +
        '<p>For both small lots or large acreages we are equipped to clear, process and remove trees and brush from your landscape to facilitate building or other land development.</p>' +
        '<h3>Brushing</h3>' +
        '<p>From small backyard brush-clearing to large commercial projects, we bring specialized machinery and skills to every job.</p>' +
        '<p>Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job.</p>'
    },
    pruning: {
      title: 'Tree Pruning and Shrub Trimming',
      image: 'assets/images/Chris-tree-trimming.jpg',
      imageAlt: 'Tree pruning and shrub trimming',
      body:
        '<p>A well-manicured yard is a sign of prestige in our culture. We have experience trimming hedges and shrubs of varying sizes.</p>' +
        '<p>Hedges and shrubs are ornamental features often found on a residential property. Sometimes natural plants can form a hedge, a local example being salmon berry. Hedges and shrubs can be manicured into shapes and given sharp lines, or trimmed for simple size-reduction for many of the same reasons one would prune trees.</p>' +
        '<p>Commonly, hedges and shrubs require annual or semi-annual pruning to keep them healthy and flowering well, and, occasionally, taming an overgrown shrub could require several visits over subsequent seasons. Some specialized knowledge and equipment is necessary for certain varieties of hedges and shrubs.</p>' +
        '<p>Pruning for view enhancement, tree and shrub health or production and also for hazard reduction.</p>' +
        '<p>Chris and his team are highly skilled in working in confined spaces, and have specialized equipment and training to ensure the safety of buildings, infrastructure, surrounding vegetation and personnel. We can provide a complete cleanup of debris, and transportation and disposal of stems off-site, if desired.</p>' +
        '<p>Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job.</p>'
    },
    chips: {
      title: 'Firewood, Wood-Chipping &amp; Mulch',
      image: 'assets/images/tree-work-yard.jpg',
      imageAlt: 'Wood chipping',
      body:
        '<p>Wood-chips are in high demand locally with there usually being a standing wait list of customers wanting wood-chips delivered. We do charge for a wood chip delivery with pricing based upon the quality, the cubic yard delivered and the distance out of the way to travel if required.</p>' +
        '<p>We will often say, the best way to acquire a load of wood-chips yourself is to contract us to do some tree-work. Then not only are the wood-chips yours to keep, we can often offer a discount on the job if we can leave them behind for time saved with not handling additional materials. We can also be contracted to chip your brush piles with by-the-job or by-the-hour pricing available.</p>' +
        '<p>Providing wood-chipping services as well as occasional mulch sales and delivery.</p>' +
        '<p>Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job.</p>'
    },
    'lawn-care': {
      title: 'Lawn Care',
      image: 'assets/images/Lawn-Care.jpg',
      imageAlt: 'Lawn care',
      body:
        '<p>Not just grass cutting, we are quickly becoming Haida Gwaii\'s number one choice for lawn and turf care.</p>' +
        '<h3>Bi-Weekly Lawn Care</h3>' +
        '<p>In response to local demand, Alderleaf Land and Tree Services added one bi-weekly mowing day to their schedule in Port Clements in 2023 and later included one bi-weekly mowing day south of Port including Tlell, Skidegate and Daajing Giids. We will continue to offer a limited mowing schedule going forward with priority given to past customers. Feel free to contact us if you would like to get onto the regular schedule.</p>' +
        '<h3>Yard Clean-ups</h3>' +
        '<p>Spring or Fall we can offer a variety of yard and property clean-ups to match your landscape or budget.</p>' +
        '<h3>Lawn De-Thatching</h3>' +
        '<p>Including spring and fall cleanups.</p>' +
        '<p>Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job.</p>'
    },
    'property-maintenance': {
      title: 'Property Maintenance',
      image: 'assets/images/Property-maintenance2.jpg',
      imageAlt: 'Property maintenance',
      body:
        '<p>A beautifully manicured landscape is a symbol of prestige in our culture.</p>' +
        '<p>Chris and his team are highly skilled in working in confined spaces, and have specialized equipment and training to ensure the safety of buildings, infrastructure, surrounding vegetation and personnel. We can provide a complete cleanup of debris, and transportation and disposal of stems off-site, if desired.</p>' +
        '<p>Fully insured and committed to safety, you can enjoy peace-of-mind when Alderleaf is on the job.</p>'
    }
  };

  function openServiceModal(key, trigger) {
    var detail = serviceDetails[key];
    if (!detail || !serviceModal) return;

    lastTrigger = trigger || null;
    if (serviceTitle) serviceTitle.innerHTML = detail.title;
    if (serviceImage) {
      serviceImage.src = detail.image;
      serviceImage.alt = detail.imageAlt;
    }
    if (serviceBody) serviceBody.innerHTML = detail.body;

    serviceModal.hidden = false;
    document.body.style.overflow = 'hidden';
    var closeBtn = serviceModal.querySelector('.service-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeServiceModal() {
    if (!serviceModal) return;
    serviceModal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('[data-service-modal]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openServiceModal(btn.getAttribute('data-service-modal'), btn);
    });
  });

  serviceModal.querySelectorAll('[data-service-close]').forEach(function (el) {
    el.addEventListener('click', closeServiceModal);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && serviceModal && !serviceModal.hidden) {
      closeServiceModal();
    }
  });

  var serviceParam = new URLSearchParams(window.location.search).get('service');
  if (serviceParam && serviceDetails[serviceParam]) {
    openServiceModal(serviceParam, null);
  }
})();
