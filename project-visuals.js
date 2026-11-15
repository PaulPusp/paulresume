(() => {
  const style = document.createElement('style');
  style.textContent = `
    .education-card.phd-card {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 15%, rgba(80,227,194,.24), transparent 36%),
        radial-gradient(circle at 88% 84%, rgba(112,168,255,.24), transparent 42%),
        linear-gradient(145deg, rgba(80,227,194,.16), rgba(112,168,255,.17));
      border-color: rgba(80,227,194,.72);
      box-shadow:
        0 0 0 1px rgba(80,227,194,.20),
        0 0 32px rgba(80,227,194,.24),
        0 22px 70px rgba(31,112,171,.28);
      animation: currentStudyGlow 3.2s ease-in-out infinite;
    }
    .education-card.phd-card::before {
      content: "CURRENT STUDY";
      position: absolute;
      top: 18px;
      right: -35px;
      width: 150px;
      padding: 7px 0;
      transform: rotate(35deg);
      text-align: center;
      color: #07111f;
      background: linear-gradient(135deg, var(--accent), var(--accent-3));
      font-size: 10px;
      font-weight: 950;
      letter-spacing: .12em;
      box-shadow: 0 8px 26px rgba(0,0,0,.22);
    }
    .education-card.phd-card::after {
      content: "";
      position: absolute;
      inset: -60%;
      z-index: -1;
      background: linear-gradient(115deg, transparent 42%, rgba(255,255,255,.15) 50%, transparent 58%);
      transform: translateX(-55%) rotate(8deg);
      animation: currentStudySweep 5.2s ease-in-out infinite;
      pointer-events: none;
    }
    .education-card.phd-card .tag {
      color: var(--accent-3);
      text-shadow: 0 0 18px rgba(255,207,90,.30);
    }
    .education-card.phd-card h3 {
      text-shadow: 0 0 24px rgba(80,227,194,.16);
    }
    [data-theme="light"] .education-card.phd-card {
      background:
        radial-gradient(circle at 18% 15%, rgba(80,227,194,.26), transparent 38%),
        radial-gradient(circle at 88% 84%, rgba(112,168,255,.22), transparent 42%),
        linear-gradient(145deg, rgba(255,255,255,.96), rgba(230,244,255,.94));
      border-color: rgba(0,118,105,.58);
      box-shadow:
        0 0 0 1px rgba(0,118,105,.13),
        0 0 30px rgba(0,118,105,.16),
        0 22px 54px rgba(7,17,31,.14);
    }
    @keyframes currentStudyGlow {
      0%, 100% {
        box-shadow:
          0 0 0 1px rgba(80,227,194,.18),
          0 0 24px rgba(80,227,194,.18),
          0 22px 64px rgba(31,112,171,.24);
      }
      50% {
        box-shadow:
          0 0 0 1px rgba(80,227,194,.38),
          0 0 48px rgba(80,227,194,.34),
          0 26px 82px rgba(31,112,171,.34);
      }
    }
    @keyframes currentStudySweep {
      0%, 58% { transform: translateX(-55%) rotate(8deg); }
      82%, 100% { transform: translateX(55%) rotate(8deg); }
    }
    @media (prefers-reduced-motion: reduce) {
      .education-card.phd-card,
      .education-card.phd-card::after {
        animation: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // GitHub Pages is public: this is a display preference, not access control.
  // Fail closed: show the PhD card only after an allowed IP country is confirmed.
  const phdVisibleCountries = new Set(['BD', 'CN']);
  let showPhd = false;

  async function lookupCountry(url, key) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3500);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        cache: 'no-store'
      });
      if (!response.ok) return null;

      const result = await response.json();
      const country = result && result[key];
      return typeof country === 'string' && /^[A-Z]{2}$/.test(country)
        ? country
        : null;
    } catch {
      // Blocked API, network failure, timeout, or invalid JSON: keep hidden.
      return null;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function reportGeoDiagnosis(geojs, ipwhois, accepted) {
    // Optional, country-code-only diagnostics: ?geo_debug=1
    // No visitor IP address is stored or displayed.
    if (!window.location?.search?.includes('geo_debug=1')) return;
    const panel = document.createElement('aside');
    panel.setAttribute('role', 'status');
    panel.style.cssText = 'position:fixed;bottom:12px;left:12px;z-index:99999;max-width:min(95vw,440px);padding:12px 16px;color:#fff;background:#102437;border:1px solid #50e3c2;border-radius:12px;font:13px/1.6 system-ui,sans-serif;box-shadow:0 8px 28px #0008';
    panel.textContent = 'Geolocation build: strict-v2 | GeoJS: ' + (geojs || 'unavailable') +
      ' | ipwho.is: ' + (ipwhois || 'unavailable') +
      ' | BD/CN access: ' + (accepted ? 'enabled' : 'disabled');
    document.body.appendChild(panel);
  }

  async function getVisitorCountry() {
    // Independent IP-country providers must agree before country-only cards or dates display.
    // This avoids treating an inaccurate single lookup as proof of Bangladesh or China.
    const [geojs, ipwhois] = await Promise.all([
      lookupCountry('https://get.geojs.io/v1/ip/country.json', 'country'),
      lookupCountry('https://ipwho.is/', 'country_code')
    ]);
    const accepted = !!geojs && geojs === ipwhois && phdVisibleCountries.has(geojs);
    reportGeoDiagnosis(geojs, ipwhois, accepted);
    return accepted ? geojs : null;
  }

  // Education is ordered by current relevance: PhD, master's, bachelor's.
  const educationCopy = {
    en: {
      phdTag: '2026 — 2030',
      phdTitle: 'Ph.D. Space Technology Applications',
      phdPlace: 'Beihang University · Hangzhou International Campus',
      phdBody: 'Full Chinese Government Scholarship (CSC).',
      msTag: 'July 2024 — June 2026',
      msTitle: 'M.S. Space Technology Applications',
      msPlace: 'Beihang University, China',
      msBody: 'Full Chinese Government Scholarship (CSC). Research focused on AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis, and parcel-level flood-risk interpretation.'
    },
    zh: {
      phdTag: '2026 — 2030',
      phdTitle: '空间技术应用博士',
      phdPlace: '北京航空航天大学 · 杭州国际校区',
      phdBody: '中国政府全额奖学金（CSC）。',
      msTag: '2024年7月 — 2026年6月',
      msTitle: '空间技术应用硕士',
      msPlace: '北京航空航天大学，中国',
      msBody: '中国政府全额奖学金（CSC）。研究聚焦AI赋能洪涝信息、Sentinel-1 SAR洪水制图、DEM验证、多源水文分析和地块尺度洪涝风险解释。'
    },
    fr: {
      phdTag: '2026 — 2030',
      phdTitle: 'Doctorat en applications des technologies spatiales',
      phdPlace: 'Université Beihang · Campus international de Hangzhou',
      phdBody: 'Bourse complète du gouvernement chinois (CSC).',
      msTag: 'Juillet 2024 — Juin 2026',
      msTitle: 'M.S. en applications des technologies spatiales',
      msPlace: 'Université Beihang, Chine',
      msBody: 'Bourse complète du gouvernement chinois (CSC). Recherche sur l’information sur les inondations assistée par IA, la cartographie Sentinel-1 SAR, la validation des MNE et l’analyse hydrologique multi-capteurs.'
    },
    bn: {
      phdTag: '২০২৬ — ২০৩০',
      phdTitle: 'Ph.D. Space Technology Applications',
      phdPlace: 'Beihang University · Hangzhou International Campus',
      phdBody: 'পূর্ণ Chinese Government Scholarship (CSC)।',
      msTag: 'জুলাই ২০২৪ — জুন ২০২৬',
      msTitle: 'M.S. Space Technology Applications',
      msPlace: 'Beihang University, China',
      msBody: 'পূর্ণ Chinese Government Scholarship (CSC)। AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis এবং parcel-level flood-risk interpretation নিয়ে গবেষণা।'
    }
  };

  function getEducationCards() {
    const grid = document.querySelector('.education-grid');
    if (!grid) return null;

    let masters = grid.querySelector('[data-degree="masters"]');
    let bachelors = grid.querySelector('[data-degree="bachelors"]');
    let phd = grid.querySelector('[data-degree="phd"]');

    if (!masters || !bachelors || !phd) {
      const initialCards = [...grid.querySelectorAll('.education-card')];
      if (initialCards.length < 3) return null;

      masters = initialCards[0];
      bachelors = initialCards[1];
      phd = initialCards[2];

      masters.dataset.degree = 'masters';
      bachelors.dataset.degree = 'bachelors';
      phd.dataset.degree = 'phd';
    }

    return { grid, masters, bachelors, phd };
  }

  function setCardContent(card, tag, title, place, body) {
    card.querySelector('.tag').textContent = tag;
    card.querySelector('h3').textContent = title;
    card.querySelector('p').textContent = place;
    card.querySelector('small').textContent = body;
  }

  function updateEducationCards() {
    const cards = getEducationCards();
    if (!cards) return;

    const lang = document.querySelector('#language-select')?.value || 'en';
    const copy = educationCopy[lang] || educationCopy.en;
    const { grid, masters, bachelors, phd } = cards;

    if (showPhd) {
      setCardContent(phd, copy.phdTag, copy.phdTitle, copy.phdPlace, copy.phdBody);
    }
    setCardContent(masters, copy.msTag, copy.msTitle, copy.msPlace, copy.msBody);

    phd.hidden = !showPhd;
    phd.classList.toggle('phd-card', showPhd);
    masters.classList.remove('phd-card');
    bachelors.classList.remove('phd-card');
    grid.classList.toggle('geo-restricted', !showPhd);

    // Language switching must not bypass the visitor-country restriction.
    if (showPhd) grid.append(phd, masters, bachelors);
    else grid.append(masters, bachelors, phd);
  }

  // Only the date of this role varies; its title and description never change.
  function updateScientificOfficerDate() {
    const date = document.querySelector('[data-experience-date="scientific-officer"]');
    if (!date) return;
    date.textContent = showPhd ? 'May 2025 — Present' : 'May 2025 — June 2026';
  }

  function updateRegionalContent() {
    updateEducationCards();
    updateScientificOfficerDate();
  }

  // Both regional rules share one IP-country lookup, including its failure fallback.
  updateRegionalContent();
  getVisitorCountry().then(country => {
    showPhd = phdVisibleCountries.has(country);
    updateRegionalContent();
  }).catch(() => {
    // Unknown IP country: two degree cards and the June 2026 end date.
    showPhd = false;
    updateRegionalContent();
  });
  document.querySelector('#language-select')?.addEventListener('change', () => {
    window.setTimeout(updateRegionalContent, 0);
  });
})();