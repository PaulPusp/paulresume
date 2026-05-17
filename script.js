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
const languageSelect = document.querySelector('#language-select');

if (languageSelect && !languageSelect.querySelector('option[value="bn"]')) {
  languageSelect.insertAdjacentHTML('beforeend', '<option value="bn">বাংলা</option>');
}

const translations = {
  zh: {
    'brand.subtitle':'地理空间AI · SAR · 风险制图','nav.work':'经历','nav.skills':'技能','nav.projects':'项目','nav.publications':'成果','nav.contact':'联系',
    'hero.eyebrow':'遥感与地理空间AI研究者 · 中国杭州','hero.title':'将地球观测数据转化为环境洞察。','hero.lede':'我结合遥感、GIS、Python自动化与AI/ML流程，将卫星、地形和气候数据转化为可用于科研、规划、风险分析和决策支持的实际成果。',
    'button.contact':'联系我','button.print':'打印简介','button.details':'详情','hero.card.title':'应用型地理空间研究者','hero.card.body':'关注洪涝风险信息、DEM适用性、SAR特征栈和面向用户的空间分析成果。',
    'mini.core.label':'核心领域','mini.core.value':'遥感与GIS','mini.sensor.label':'主要数据','mini.sensor.value':'Sentinel-1 SAR · DEM · 气候数据','mini.research.label':'研究方向','mini.research.value':'AI驱动的环境决策支持',
    'trust.csc':'<strong>CSC</strong> 奖学金','trust.ielts':'<strong>IELTS</strong> 7.5','trust.tools':'<strong>工具</strong> Python · GEE · ArcGIS · PyTorch',
    'about.eyebrow':'简介','about.title':'把遥感、AI和GIS连接成完整工作流。','about.p1':'我的工作连接遥感研究与实际决策支持。我使用 ArcGIS Pro、Google Earth Engine、SNAP、Python 和 PyTorch 融合 Sentinel-1 SAR、地形、气候和 GIS 数据，产出洪涝风险、环境风险和地方规划相关的空间成果。','about.p2':'我的工作覆盖完整分析链条：数据清洗 → 特征栈准备 → 模型比较 → 环境风险产品 → 本地尺度解释 → 面向科研、规划和决策支持的地图与报告。',
    'work.eyebrow':'经历','work.title':'科研与职业路径','work.lede':'围绕环境风险、洪涝制图和地理空间决策支持开展工作。','role.geospatial_officer':'地理空间专员','role.intern':'灾害减缓与空间数据实习生','role.assistant':'研究助理',
    'exp.scientific.body':'使用 Sentinel-1 SAR、DEM、Python、ArcGIS Pro、Google Earth Engine 和 PyTorch 开发本地尺度洪涝信息工作流；比较 Attention U-Net 与 DeepLabV3+ 洪水分割流程，并将结果转化为地块、建筑和业主层面的影响图层。','exp.member.body':'支持 GIS 制图、空间分析、海岸灾害研究、GNSS-R 应用、气候风险分析和早期预警研究规划。','exp.officer.body':'参与土地高程评估和低洼洪涝易发区识别项目，准备地理空间数据、空间图层、地形分析、地图和环境风险报告成果。','exp.intern.body':'通过 GIS 数据准备、风险分析支持和面向利益相关者的制图成果，支持灾害准备和多灾种早期预警工作流。','exp.assistant.body':'管理干旱指数数据集，进行统计分析、研究文档整理、实验室支持和早期环境建模工作。',
    'edu.ms.title':'空间技术应用硕士','edu.ms.body':'研究方向：AI赋能的洪涝信息、Sentinel-1 SAR 洪水制图、DEM 验证、多源水文分析和地块尺度洪涝风险解释。','edu.bs.title':'农业工程学士','edu.bs.body':'毕业论文：基于高级模糊逻辑模型的干旱指数预测。','edu.csc.title':'中国政府奖学金','edu.csc.body':'支持空间技术应用与遥感方向研究生学习。',
    'skills.eyebrow':'技能体系','skills.title':'面向地理空间研究、自动化和决策支持的技术能力','skill.geo.title':'地理空间与遥感','skill.geo.body':'ArcGIS Pro、QGIS、Google Earth Engine、SNAP/Sentinel-1 Toolbox、Sentinel-1 SAR、光学影像、栅格/矢量分析、DEM验证、暴露度制图、地理数据库设计。','skill.python.title':'Python地理空间自动化','skill.python.body':'栅格/矢量批处理、SAR特征栈准备、地理空间数据清洗、空间叠加自动化、可复现Notebook流程、pandas、GeoPandas、Rasterio、Xarray、NumPy。','skill.ml.title':'机器学习与AI','skill.ml.body':'PyTorch、CNN概念、Attention U-Net、DeepLabV3+、语义分割、图像分类、模糊逻辑建模、特征工程和模型比较。','skill.risk.title':'气候与环境风险','skill.risk.body':'洪涝/干旱指标、降雨事件解释、地形/高程分析、环境变量集成、早期预警和风险图制作。','skill.report.title':'科研与报告','skill.report.body':'数据质量检查、采样设计支持、精度评价、统计表、论文图件、技术报告、稿件和会议材料。','skill.ai.title':'AI辅助工作效率','skill.ai.body':'利用AI工具辅助编码、调试、文献筛选、技术写作、数据质量检查、流程规划和遥感/GIS研究成果优化。',
    'projects.eyebrow':'代表项目','projects.title':'地球观测、环境风险与应用AI方向的项目成果','projects.lede':'项目按分析问题、方法、数据集和实际输出进行组织。','project.flood.kicker':'洪涝信息','project.flood.title':'孟加拉国洪水范围与水深制图','project.flood.body':'结合 Sentinel-1 SAR、Attention U-Net、DEM评估、FwDET水深估算和地块级GIS影响解释的多阶段工作流。','project.flood.p1':'SAR灾前/灾后特征栈','project.flood.p2':'深度学习洪水分割','project.flood.p3':'水深与暴露度转化','project.dem.kicker':'地形可靠性','project.dem.title':'Jamuna洪泛平原DEM验证','project.dem.body':'使用水域和陆域参考数据、Bootstrap不确定性和面向决策的排序方法评估开源DEM的水文适用性。','project.dem.p1':'DEM误差指标','project.dem.p2':'水域/陆域验证','project.dem.p3':'洪水水深适用性支持','project.grace.kicker':'水文气候','project.grace.title':'基于GRACE的干旱-储水动态分析','project.grace.body':'处理 GRACE/GRACE-FO 和气候数据集，利用机器学习分类思路分析陆地水储量行为。','project.grace.p1':'储水-干旱响应','project.grace.p2':'气候数据处理','project.grace.p3':'水文模式分析','project.fish.kicker':'AI数据集','project.fish.title':'孟加拉国淡水鱼图像数据集','project.fish.body':'参与面向智能水产养殖和环境数据应用的鱼类自动分类/检测数据集工作。','project.fish.p1':'图像数据集贡献','project.fish.p2':'分类/检测支持','project.fish.p3':'智能水产养殖场景',
    'pub.title':'科研成果与稿件','filter.all':'全部','filter.published':'已发表','filter.proceeding':'会议论文','filter.manuscript':'稿件','pub.ongoing':'进行中稿件','pub.manuscript.note':'稿件准备中。','impact.eyebrow':'职业方向','impact.title':'连接卫星数据、模型和决策支持。','impact.body':'我的工作结合遥感、地理空间自动化、AI/ML和环境分析，构建可复现工作流，并为科研、规划、早期预警和业务决策提供清晰成果。','contact.title':'关注地理空间AI、遥感研发、环境分析和决策支持岗位。','contact.body':'我希望参与将卫星数据、AI/ML、Python自动化与应用环境/风险分析相结合的工作。','contact.email':'邮箱','contact.github':'GitHub','contact.linkedin':'LinkedIn','contact.copy':'复制邮箱','contact.copied':'邮箱已复制','refs.title':'推荐人'
  },
  fr: {
    'brand.subtitle':'IA géospatiale · SAR · Cartographie du risque','nav.work':'Parcours','nav.skills':'Compétences','nav.projects':'Projets','nav.publications':'Publications','nav.contact':'Contact','hero.eyebrow':'Chercheur en télédétection et IA géospatiale · Hangzhou, Chine','hero.title':'Transformer les données d’observation de la Terre en intelligence environnementale.','hero.lede':'Je combine la télédétection, le SIG, l’automatisation Python et les workflows IA/ML pour transformer les données satellitaires, topographiques et climatiques en résultats utiles pour la recherche, la planification, l’analyse des risques et l’aide à la décision.','button.contact':'Me contacter','button.print':'Imprimer le profil','button.details':'Détails','hero.card.title':'Chercheur géospatial appliqué','hero.card.body':'Travail axé sur l’information sur les risques d’inondation, l’adéquation des MNE, les piles de caractéristiques SAR et les produits spatiaux orientés utilisateurs.','mini.core.label':'Domaine principal','mini.core.value':'Télédétection et SIG','mini.sensor.label':'Données principales','mini.sensor.value':'Sentinel-1 SAR · MNE/DEM · Climat','mini.research.label':'Orientation de recherche','mini.research.value':'Aide à la décision environnementale par IA','trust.csc':'Bourse <strong>CSC</strong>','trust.ielts':'<strong>IELTS</strong> 7.5','trust.tools':'<strong>Outils</strong> Python · GEE · ArcGIS · PyTorch','about.eyebrow':'Profil','about.title':'La télédétection, l’IA et le SIG dans un workflow intégré.','about.p1':'Mon travail relie la recherche en télédétection et l’aide à la décision. J’intègre les données Sentinel-1 SAR, topographiques, climatiques et SIG avec ArcGIS Pro, Google Earth Engine, SNAP, Python et PyTorch afin de produire des analyses et cartes de risques environnementaux.','about.p2':'Mon approche couvre toute la chaîne analytique : nettoyage des données → préparation des piles de caractéristiques → comparaison des modèles → produits de risque environnemental → interprétation locale → cartes et rapports clairs.','work.eyebrow':'Expérience','work.title':'Parcours de recherche et professionnel','work.lede':'Expérience centrée sur le risque environnemental, la cartographie des inondations et l’aide à la décision géospatiale.','role.geospatial_officer':'Chargé géospatial','role.intern':'Stagiaire en données spatiales et réduction des risques','role.assistant':'Assistant de recherche','skills.eyebrow':'Compétences','skills.title':'Compétences techniques pour la recherche géospatiale, l’automatisation et l’aide à la décision','projects.eyebrow':'Projets sélectionnés','projects.title':'Travaux en observation de la Terre, risque environnemental et IA appliquée','projects.lede':'Les projets sont présentés selon le problème analytique, la méthode, les données et le résultat pratique.','pub.title':'Productions de recherche et manuscrits','filter.all':'Tout','filter.published':'Publié','filter.proceeding':'Conférence','filter.manuscript':'Manuscrit','pub.ongoing':'Manuscrit en cours','pub.manuscript.note':'Manuscrit en préparation.','impact.eyebrow':'Orientation professionnelle','impact.title':'Relier données satellitaires, modélisation et aide à la décision.','impact.body':'Mon travail combine télédétection, automatisation géospatiale, IA/ML et analyse environnementale pour créer des workflows reproductibles et des résultats clairs.','contact.title':'Ouvert aux rôles en IA géospatiale, R&D télédétection, analyse environnementale et aide à la décision.','contact.body':'Je m’intéresse aux rôles qui relient données satellitaires, IA/ML, automatisation Python et analyse environnementale ou des risques.','contact.email':'Email','contact.github':'GitHub','contact.linkedin':'LinkedIn','contact.copy':'Copier l’email','contact.copied':'Email copié','refs.title':'Références'
  },
  bn: {
    'brand.subtitle':'জিওস্পেশাল AI · SAR · ঝুঁকি মানচিত্র','nav.work':'অভিজ্ঞতা','nav.skills':'দক্ষতা','nav.projects':'প্রকল্প','nav.publications':'প্রকাশনা','nav.contact':'যোগাযোগ',
    'hero.eyebrow':'রিমোট সেন্সিং ও জিওস্পেশাল AI গবেষক · হাংঝৌ, চীন','hero.title':'পৃথিবী পর্যবেক্ষণ ডেটাকে পরিবেশগত অন্তর্দৃষ্টিতে রূপান্তর।','hero.lede':'আমি রিমোট সেন্সিং, GIS, Python automation এবং AI/ML workflow ব্যবহার করে satellite, terrain ও climate data-কে research, planning, risk analysis এবং decision support-এর ব্যবহারযোগ্য output-এ রূপান্তর করি।',
    'button.contact':'যোগাযোগ করুন','button.print':'প্রোফাইল প্রিন্ট','button.details':'বিস্তারিত','hero.card.title':'Applied geospatial researcher','hero.card.body':'Flood-risk intelligence, DEM suitability, SAR feature stack এবং stakeholder-facing spatial output নিয়ে কাজ করি।',
    'mini.core.label':'মূল ক্ষেত্র','mini.core.value':'Remote Sensing & GIS','mini.sensor.label':'প্রধান data','mini.sensor.value':'Sentinel-1 SAR · DEM · Climate','mini.research.label':'গবেষণার দিক','mini.research.value':'AI-enabled environmental decision support',
    'trust.csc':'<strong>CSC</strong> Scholarship','trust.ielts':'<strong>IELTS</strong> 7.5','trust.tools':'<strong>Tools</strong> Python · GEE · ArcGIS · PyTorch',
    'about.eyebrow':'প্রোফাইল','about.title':'Remote sensing, AI এবং GIS-কে একটি connected workflow হিসেবে ব্যবহার করি।','about.p1':'আমার কাজ remote sensing research এবং practical decision support-এর মাঝামাঝি অবস্থানে। ArcGIS Pro, Google Earth Engine, SNAP, Python এবং PyTorch ব্যবহার করে Sentinel-1 SAR, terrain, climate এবং GIS dataset একত্রিত করি।','about.p2':'আমার workflow হলো: data cleaning → feature-stack preparation → model comparison → environmental-risk product → local-scale interpretation → research, planning এবং decision support-এর জন্য পরিষ্কার map ও report।',
    'work.eyebrow':'অভিজ্ঞতা','work.title':'গবেষণা ও পেশাগত পথ','work.lede':'Environmental risk, flood mapping এবং geospatial decision-support analysis কেন্দ্র করে কাজ।','role.geospatial_officer':'Geospatial Officer','role.intern':'Disaster Mitigation & Spatial Data Intern','role.assistant':'Research Assistant',
    'exp.scientific.body':'Sentinel-1 SAR, DEM, Python, ArcGIS Pro, Google Earth Engine এবং PyTorch ব্যবহার করে local-scale flood-information workflow তৈরি করেছি; Attention U-Net ও DeepLabV3+ flood-segmentation workflow তুলনা করেছি এবং output-কে parcel/building/owner-level impact layer-এ রূপান্তর করেছি।','exp.member.body':'GIS mapping, spatial analysis, coastal hazard, GNSS-R application, climate-risk analysis এবং early-warning research planning-এ কাজ করি।','exp.officer.body':'Land-elevation assessment এবং low-lying flood-susceptibility project-এ geospatial dataset, spatial layer, terrain analysis, map এবং analytical output প্রস্তুত করেছি।','exp.intern.body':'GIS data preparation, risk-analysis support এবং stakeholder-oriented mapping output-এর মাধ্যমে disaster preparedness ও multi-hazard early-warning workflow-এ সহায়তা করেছি।','exp.assistant.body':'Drought-index dataset management, statistical analysis, research documentation, laboratory support এবং early environmental modelling কাজ করেছি।',
    'edu.ms.title':'M.S. Space Technology Applications','edu.ms.body':'Research focus: AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis এবং parcel-level flood-risk interpretation.','edu.bs.title':'B.Sc. Agricultural Engineering','edu.bs.body':'Final thesis: Advanced Fuzzy-Logic Model ব্যবহার করে drought index prediction.','edu.csc.title':'Chinese Government Scholarship','edu.csc.body':'Space technology applications এবং remote sensing research-এর জন্য graduate study support.',
    'skills.eyebrow':'দক্ষতা','skills.title':'Geospatial research, automation এবং decision support-এর জন্য technical capability','skill.geo.title':'Geospatial & Remote Sensing','skill.geo.body':'ArcGIS Pro, QGIS, Google Earth Engine, SNAP/Sentinel-1 Toolbox, Sentinel-1 SAR, optical imagery, raster/vector analysis, DEM validation, exposure mapping, geodatabase design.','skill.python.title':'Python Geospatial Automation','skill.python.body':'Raster/vector batch processing, SAR feature-stack preparation, geospatial data cleaning, spatial overlay automation, reproducible notebook workflow, pandas, GeoPandas, Rasterio, Xarray, NumPy.','skill.ml.title':'Machine Learning & AI','skill.ml.body':'PyTorch, CNN concepts, Attention U-Net, DeepLabV3+, semantic segmentation, image classification, fuzzy-logic modelling, feature engineering এবং model comparison.','skill.risk.title':'Climate & Environmental Risk','skill.risk.body':'Flood/drought indicator, rainfall-event interpretation, terrain/elevation analysis, environmental variable integration, early-warning এবং risk-map production.','skill.report.title':'Research & Reporting','skill.report.body':'Data-quality check, sampling design support, accuracy assessment, statistical table, publication figure, technical report, manuscript এবং conference material.','skill.ai.title':'AI-Assisted Work Efficiency','skill.ai.body':'AI-assisted coding, debugging, literature screening, technical writing, data-quality checking, workflow planning এবং remote sensing/GIS output polishing.',
    'projects.eyebrow':'নির্বাচিত প্রকল্প','projects.title':'Earth observation, environmental risk এবং applied AI সম্পর্কিত কাজ','projects.lede':'প্রকল্পগুলো analytical problem, method, dataset এবং practical output অনুযায়ী সাজানো।','project.flood.kicker':'Flood Intelligence','project.flood.title':'বাংলাদেশে flood extent ও depth mapping','project.flood.body':'Sentinel-1 SAR, Attention U-Net, DEM assessment, FwDET depth estimation এবং parcel-level GIS impact interpretation মিলিয়ে একটি multi-stage workflow.','project.flood.p1':'SAR before/after feature stack','project.flood.p2':'Deep learning flood segmentation','project.flood.p3':'Depth ও exposure translation','project.dem.kicker':'Terrain Reliability','project.dem.title':'Jamuna floodplain DEM validation','project.dem.body':'Water- ও land-domain reference data, bootstrapped uncertainty এবং decision-oriented ranking ব্যবহার করে open-access DEM-এর hydrological suitability মূল্যায়ন।','project.dem.p1':'DEM error metrics','project.dem.p2':'Water/land validation','project.dem.p3':'Flood-depth suitability support','project.grace.kicker':'Hydroclimate','project.grace.title':'GRACE-based drought-storage dynamics','project.grace.body':'GRACE/GRACE-FO এবং climate dataset ব্যবহার করে terrestrial-water storage behavior বিশ্লেষণ।','project.grace.p1':'Storage-drought response','project.grace.p2':'Climate dataset processing','project.grace.p3':'Hydrological pattern analysis','project.fish.kicker':'AI Dataset','project.fish.title':'BD freshwater fish image dataset','project.fish.body':'Smart aquaculture এবং environmental data application-এর জন্য AI-powered fish species classification/detection dataset-এ অবদান।','project.fish.p1':'Image dataset contribution','project.fish.p2':'Classification/detection support','project.fish.p3':'Smart aquaculture context',
    'pub.title':'Research output ও manuscript','filter.all':'সব','filter.published':'প্রকাশিত','filter.proceeding':'Conference','filter.manuscript':'Manuscript','pub.ongoing':'চলমান manuscript','pub.manuscript.note':'Manuscript in progress.','impact.eyebrow':'Professional focus','impact.title':'Satellite data, modelling এবং decision support-কে সংযুক্ত করা।','impact.body':'আমার কাজ remote sensing, geospatial automation, AI/ML এবং environmental analysis একত্র করে reproducible workflow ও পরিষ্কার output তৈরি করে।','contact.title':'Geospatial AI, remote sensing R&D, environmental analytics এবং decision-support role-এ আগ্রহী।','contact.body':'Satellite data, AI/ML, Python automation এবং applied environmental/risk analysis-কে যুক্ত করে এমন role-এ আমি আগ্রহী।','contact.email':'ইমেইল','contact.github':'GitHub','contact.linkedin':'LinkedIn','contact.copy':'ইমেইল কপি করুন','contact.copied':'ইমেইল কপি হয়েছে','refs.title':'References'
  }
};

const originalText = new Map();
const originalHTML = new Map();
let currentLanguage = 'en';
const zhZones = new Set(['Asia/Shanghai','Asia/Chongqing','Asia/Harbin','Asia/Urumqi','Asia/Hong_Kong','Asia/Macau']);
const frZones = new Set(['Europe/Paris','Europe/Monaco','America/Martinique','America/Guadeloupe','America/Cayenne','Indian/Reunion','Indian/Mayotte','Pacific/Noumea','Pacific/Tahiti']);
const bnZones = new Set(['Asia/Dhaka']);

document.querySelectorAll('[data-i18n]').forEach(el => originalText.set(el, el.textContent));
document.querySelectorAll('[data-i18n-html]').forEach(el => originalHTML.set(el, el.innerHTML));

function getUrlLanguage(){
  const lang = new URLSearchParams(window.location.search).get('lang');
  return ['en','zh','fr','bn'].includes(lang) ? lang : null;
}
function detectLang(){
  const urlLang = getUrlLanguage();
  if(urlLang){ localStorage.setItem('preferredLanguage', urlLang); return urlLang; }
  const saved = localStorage.getItem('preferredLanguage');
  if(['en','zh','fr','bn'].includes(saved)) return saved;
  const langs = (navigator.languages?.length ? navigator.languages : [navigator.language || 'en']).map(x => x.toLowerCase());
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if(langs.some(x => x.startsWith('bn')) || bnZones.has(zone)) return 'bn';
  if(langs.some(x => x.startsWith('zh')) || zhZones.has(zone)) return 'zh';
  if(langs.some(x => x.startsWith('fr')) || frZones.has(zone)) return 'fr';
  return 'en';
}
function tr(key){ return translations[currentLanguage]?.[key]; }
function applyLanguage(lang){
  currentLanguage = ['en','zh','fr','bn'].includes(lang) ? lang : 'en';
  root.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage === 'bn' ? 'bn-BD' : currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = currentLanguage === 'en' ? originalText.get(el) : tr(el.dataset.i18n);
    el.textContent = v || originalText.get(el) || el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = currentLanguage === 'en' ? originalHTML.get(el) : tr(el.dataset.i18nHtml);
    el.innerHTML = v || originalHTML.get(el) || el.innerHTML;
  });
  if(languageSelect) languageSelect.value = currentLanguage;
}

const storedTheme = localStorage.getItem('theme');
if(storedTheme) root.setAttribute('data-theme', storedTheme);
if(year) year.textContent = new Date().getFullYear();
applyLanguage(detectLang());
languageSelect?.addEventListener('change', () => { localStorage.setItem('preferredLanguage', languageSelect.value); applyLanguage(languageSelect.value); });

window.addEventListener('scroll', () => { if(topbar) topbar.dataset.elevated = window.scrollY > 12 ? 'true' : 'false'; });
menuToggle?.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); mobileNav?.classList.toggle('open', !open); });
mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menuToggle?.setAttribute('aria-expanded','false'); mobileNav.classList.remove('open'); }));
themeToggle?.addEventListener('click', () => { const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; root.setAttribute('data-theme', next); localStorage.setItem('theme', next); });
window.addEventListener('pointermove', e => { if(glow){ glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; } }, {passive:true});

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }); }, {threshold:0.12}) : null;
reveals.forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('visible'));
setTimeout(() => reveals.forEach(el => el.classList.add('visible')), 700);
const navObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => { entries.forEach(entry => { if(!entry.isIntersecting) return; navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }); }, {rootMargin:'-38% 0px -54% 0px', threshold:0}) : null;
sections.forEach(s => navObserver?.observe(s));
printBtn?.addEventListener('click', () => window.print());
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => { const text = button.dataset.copy; try{ await navigator.clipboard.writeText(text); button.textContent = currentLanguage === 'en' ? 'Email copied' : (tr('contact.copied') || 'Email copied'); setTimeout(() => { button.textContent = currentLanguage === 'en' ? 'Copy email' : (tr('contact.copy') || 'Copy email'); }, 1600); } catch { window.location.href = `mailto:${text}`; } }));
const filterButtons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('.publication');
filterButtons.forEach(button => button.addEventListener('click', () => { const filter = button.dataset.filter; filterButtons.forEach(btn => btn.classList.toggle('active', btn === button)); publications.forEach(item => { item.hidden = filter !== 'all' && item.dataset.category !== filter; }); }));

const modal = document.querySelector('.project-modal');
const modalClose = document.querySelector('.modal-close');
const modalKicker = document.querySelector('#modal-kicker');
const modalTitle = document.querySelector('#modal-title');
const modalBody = document.querySelector('#modal-body');
const modalPoints = document.querySelector('#modal-points');
function openProject(key){
  const card = document.querySelector(`.project-card[data-project="${key}"]`);
  if(!card) return;
  modalKicker.textContent = card.querySelector('.project-top span')?.textContent || 'Project';
  modalTitle.textContent = card.querySelector('h3')?.textContent || 'Project';
  modalBody.textContent = card.querySelector('p')?.textContent || '';
  modalPoints.innerHTML = [...card.querySelectorAll('li')].map(li => `<li>${li.textContent}</li>`).join('');
  modal?.classList.add('open'); modal?.setAttribute('aria-hidden','false'); modalClose?.focus();
}
function closeProject(){ modal?.classList.remove('open'); modal?.setAttribute('aria-hidden','true'); }
document.querySelectorAll('.project-card').forEach(card => card.querySelector('button')?.addEventListener('click', () => openProject(card.dataset.project)));
modalClose?.addEventListener('click', closeProject);
modal?.addEventListener('click', e => { if(e.target === modal) closeProject(); });
window.addEventListener('keydown', e => { if(e.key === 'Escape') closeProject(); });
const ticker = document.querySelector('.ticker div');
if(ticker && !ticker.dataset.duplicated){ ticker.innerHTML += ticker.innerHTML; ticker.dataset.duplicated = 'true'; }
window.addEventListener('error', () => reveals.forEach(el => el.classList.add('visible')));
