const root = document.documentElement;
const topbar = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const themeToggle = document.querySelector('.theme-toggle');
const glow = document.querySelector('.cursor-glow');
const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
const sections = [...document.querySelectorAll('main section[id]')];
const reveals = document.querySelectorAll('.reveal');
const printBtn = document.querySelector('[data-print]');
const year = document.querySelector('#year');

const storedTheme = localStorage.getItem('theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

year.textContent = new Date().getFullYear();

window.addEventListener('scroll', () => {
  topbar.dataset.elevated = window.scrollY > 12 ? 'true' : 'false';
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('open', !isOpen);
});

mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
}));

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

window.addEventListener('pointermove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-38% 0px -54% 0px', threshold: 0 });
sections.forEach(section => navObserver.observe(section));

printBtn?.addEventListener('click', () => window.print());

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = 'Email copied';
      setTimeout(() => button.textContent = 'Copy email', 1600);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('.publication');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    publications.forEach(item => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});

const projectDetails = {
  flood: {
    kicker: 'Flood Intelligence',
    title: 'Flood extent and depth mapping in Bangladesh',
    body: 'This is the strongest portfolio project because it connects SAR preprocessing, deep-learning flood extent, DEM-supported depth estimation, and local-scale GIS translation. It is not just model training; it is an end-to-end flood-information workflow.',
    points: ['Sentinel-1 before/after SAR feature stacks', 'Attention U-Net and DeepLabV3+ workflow comparison', 'FwDET flood-depth estimation support', 'Parcel, building, and owner-level impact interpretation']
  },
  dem: {
    kicker: 'Terrain Reliability',
    title: 'DEM validation for Jamuna floodplain',
    body: 'The project focuses on whether open DEMs are suitable for flood-depth work in low-relief terrain where vertical errors can strongly affect mapped flood impact.',
    points: ['Water- and land-domain DEM assessment', 'Bootstrapped uncertainty and error metrics', 'Decision-oriented ranking for hydrological suitability']
  },
  grace: {
    kicker: 'Hydroclimate',
    title: 'GRACE-based drought-storage dynamics',
    body: 'This work processes GRACE/GRACE-FO and climate datasets to interpret storage-drought behavior with machine-learning classification logic.',
    points: ['Terrestrial-water storage analysis', 'Climate dataset integration', 'Drought-storage response interpretation']
  },
  fish: {
    kicker: 'AI Dataset',
    title: 'BD freshwater fish image dataset',
    body: 'A data-oriented AI project supporting fish species classification and detection for smart aquaculture and environmental data applications.',
    points: ['Image dataset development support', 'Classification/detection research context', 'Published Data in Brief output']
  }
};

const modal = document.querySelector('.project-modal');
const modalClose = document.querySelector('.modal-close');
const modalKicker = document.querySelector('#modal-kicker');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('#modal-body');
const modalPoints = document.querySelector('#modal-points');

function openProject(key) {
  const item = projectDetails[key];
  if (!item) return;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalBody.textContent = item.body;
  modalPoints.innerHTML = item.points.map(point => `<li>${point}</li>`).join('');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  modalClose.focus();
}

function closeProject() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.project-card').forEach(card => {
  card.querySelector('button')?.addEventListener('click', () => openProject(card.dataset.project));
});
modalClose?.addEventListener('click', closeProject);
modal?.addEventListener('click', event => { if (event.target === modal) closeProject(); });
window.addEventListener('keydown', event => { if (event.key === 'Escape') closeProject(); });

const ticker = document.querySelector('.ticker div');
if (ticker) ticker.innerHTML += ticker.innerHTML;
