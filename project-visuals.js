(() => {
  // Direct image path. The previous SVG wrapper produced a blank white box in browsers
  // because SVGs used as CSS backgrounds cannot reliably load nested external image files.
  const layoutSrc = 'assets/flood-scene-preview.webp?v=visible-layout-1';

  const style = document.createElement('style');
  style.textContent = `
    .project-card.feature::after {
      background-image: linear-gradient(145deg, rgba(7, 17, 31, 0.04), rgba(7, 17, 31, 0.16)), url("${layoutSrc}") !important;
      background-size: cover !important;
      background-position: center 42% !important;
      background-repeat: no-repeat !important;
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
    .education-card.phd-card {
      background: linear-gradient(145deg, rgba(80,227,194,.14), rgba(112,168,255,.12));
      border-color: rgba(80,227,194,.34);
    }
    .education-card.phd-card .tag {
      color: var(--accent-3);
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

  // Education update: master's completed and PhD admission confirmed.
  const educationCopy = {
    en: {
      msTag: 'Completed June 2026',
      msTitle: 'M.S. Space Technology Applications',
      msPlace: 'Beihang University, China',
      msBody: 'Completed with research focused on AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis, and parcel-level flood-risk interpretation.',
      phdTag: '2026 — 2030',
      phdTitle: 'Ph.D. Space Technology Applications',
      phdPlace: 'Beihang University · Hangzhou International Campus',
      phdBody: 'Admitted for English-medium doctoral study from September 2026 to July 2030 with a full Chinese Government Scholarship (CSC).'
    },
    zh: {
      msTag: '2026年6月毕业',
      msTitle: '空间技术应用硕士',
      msPlace: '北京航空航天大学，中国',
      msBody: '已完成硕士学位，研究聚焦AI赋能洪涝信息、Sentinel-1 SAR洪水制图、DEM验证、多源水文分析和地块尺度洪涝风险解释。',
      phdTag: '2026 — 2030',
      phdTitle: '空间技术应用博士',
      phdPlace: '北京航空航天大学 · 杭州国际校区',
      phdBody: '已获录取，将于2026年9月至2030年7月以英语攻读博士学位，并获得中国政府全额奖学金（CSC）。'
    },
    fr: {
      msTag: 'Diplôme obtenu en juin 2026',
      msTitle: 'M.S. en applications des technologies spatiales',
      msPlace: 'Université Beihang, Chine',
      msBody: 'Master terminé avec des recherches sur l’information sur les inondations assistée par IA, la cartographie Sentinel-1 SAR, la validation des MNE et l’analyse hydrologique multi-capteurs.',
      phdTag: '2026 — 2030',
      phdTitle: 'Doctorat en applications des technologies spatiales',
      phdPlace: 'Université Beihang · Campus international de Hangzhou',
      phdBody: 'Admis en doctorat en anglais de septembre 2026 à juillet 2030 avec une bourse complète du gouvernement chinois (CSC).'
    },
    bn: {
      msTag: 'জুন ২০২৬-এ সম্পন্ন',
      msTitle: 'M.S. Space Technology Applications',
      msPlace: 'Beihang University, China',
      msBody: 'AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis এবং parcel-level flood-risk interpretation-এর উপর গবেষণাসহ মাস্টার্স সম্পন্ন।',
      phdTag: '২০২৬ — ২০৩০',
      phdTitle: 'Ph.D. Space Technology Applications',
      phdPlace: 'Beihang University · Hangzhou International Campus',
      phdBody: 'সেপ্টেম্বর ২০২৬ থেকে জুলাই ২০৩০ পর্যন্ত English-medium doctoral study-এর জন্য পূর্ণ Chinese Government Scholarship (CSC) সহ ভর্তি।'
    }
  };

  function updateEducationCards() {
    const cards = document.querySelectorAll('.education-grid .education-card');
    if (cards.length < 3) return;

    const lang = document.querySelector('#language-select')?.value || 'en';
    const copy = educationCopy[lang] || educationCopy.en;
    const masters = cards[0];
    const phd = cards[2];

    masters.querySelector('.tag').textContent = copy.msTag;
    masters.querySelector('h3').textContent = copy.msTitle;
    masters.querySelector('p').textContent = copy.msPlace;
    masters.querySelector('small').textContent = copy.msBody;

    phd.classList.add('phd-card');
    phd.querySelector('.tag').textContent = copy.phdTag;
    phd.querySelector('h3').textContent = copy.phdTitle;
    phd.querySelector('p').textContent = copy.phdPlace;
    phd.querySelector('small').textContent = copy.phdBody;
  }

  updateEducationCards();
  document.querySelector('#language-select')?.addEventListener('change', () => {
    window.setTimeout(updateEducationCards, 0);
  });
})();
