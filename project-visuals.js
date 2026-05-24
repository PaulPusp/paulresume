(() => {
  const floodVisual = {
    key: 'flood',
    src: 'assets/flood-scene-preview.webp?v=modal-full-1',
    alt: '3D flood depth, elevation, canal, cropland, residential land, and building exposure visualization for the Bangladesh flood mapping project',
    caption: 'Full flood-depth and local exposure visualization. Click the image to open it in a new tab.'
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
