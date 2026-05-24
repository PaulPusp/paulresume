(() => {
  const layoutSrc = 'assets/layout.svg?v=layout1';

  const style = document.createElement('style');
  style.textContent = `
    .project-card.feature::after {
      background-image: linear-gradient(145deg, rgba(7, 17, 31, 0.04), rgba(7, 17, 31, 0.16)), url("${layoutSrc}") !important;
      background-size: cover !important;
      background-position: center 42% !important;
    }
    .project-card.feature::before {
      content: "HD visual highlight · Click Details for full layout" !important;
    }
    .modal-card.has-project-image {
      width: min(1120px, calc(100vw - 32px));
      max-height: calc(100vh - 40px);
      overflow: auto;
    }
    .modal-project-visual img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 18px;
      border: 1px solid var(--line);
      background: rgba(255,255,255,.06);
      box-shadow: 0 18px 45px rgba(0,0,0,.25);
    }
  `;
  document.head.appendChild(style);

  const floodVisual = {
    key: 'flood',
    src: layoutSrc,
    alt: '3D flood depth, elevation, canal, cropland, residential land, and building exposure layout visualization for the Bangladesh flood mapping project',
    caption: 'Full layout visualization. Click the image to open it in a new tab.'
  };

  function removeVisual() {
    const modalCard = document.querySelector('.modal-card');
    modalCard?.classList.remove('has-project-image');
    document.querySelector('.modal-project-visual')?.remove();
  }

  function addVisual() {
    removeVisual();
    const modalCard = document.querySelector('.modal-card');
    const modalPoints = document.querySelector('#modal-points');
    if (!modalCard || !modalPoints) return;

    modalCard.classList.add('has-project-image');
    const visual = document.createElement('div');
    visual.className = 'modal-project-visual';
    visual.innerHTML = `
      <a href="${floodVisual.src}" target="_blank" rel="noreferrer">
        <img src="${floodVisual.src}" alt="${floodVisual.alt}" loading="eager">
      </a>
      <small>${floodVisual.caption}</small>
    `;
    modalPoints.insertAdjacentElement('afterend', visual);
  }

  document.querySelectorAll('.project-card').forEach(card => {
    const button = card.querySelector('button');
    if (!button) return;
    button.addEventListener('click', () => {
      window.setTimeout(() => {
        if (card.dataset.project === floodVisual.key) addVisual();
        else removeVisual();
      }, 0);
    });
  });

  document.querySelector('.modal-close')?.addEventListener('click', removeVisual);
  document.querySelector('.project-modal')?.addEventListener('click', event => {
    if (event.target.classList?.contains('project-modal')) removeVisual();
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') removeVisual();
  });
})();
