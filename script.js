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
const translations = {
  "en": {
    "brand.subtitle": "Geospatial AI · SAR · Risk Mapping",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.contact": "Contact",
    "hero.eyebrow": "Remote Sensing & Geospatial AI Researcher · Hangzhou, China",
    "hero.title": "Turning Earth observation data into environmental insight.",
    "hero.lede": "I combine remote sensing, GIS, Python automation, and AI/ML workflows to transform satellite, terrain, and climate data into practical outputs for research, planning, risk analysis, and decision support.",
    "button.contact": "Contact me",
    "button.print": "Print profile",
    "hero.card.title": "Applied geospatial researcher",
    "hero.card.body": "Focused on flood-risk intelligence, DEM suitability, SAR feature stacks, and stakeholder-facing spatial outputs.",
    "mini.core.label": "Core domain",
    "mini.core.value": "Remote Sensing & GIS",
    "mini.sensor.label": "Main sensors/data",
    "mini.sensor.value": "Sentinel-1 SAR · DEM · Climate",
    "mini.research.label": "Research direction",
    "mini.research.value": "AI-enabled environmental decision support",
    "trust.csc": "<strong>CSC</strong> Scholarship",
    "trust.ielts": "<strong>IELTS</strong> 7.5",
    "trust.tools": "<strong>Tools</strong> Python · GEE · ArcGIS · PyTorch",
    "about.eyebrow": "Profile",
    "about.title": "Remote sensing, AI, and GIS as one connected workflow.",
    "about.p1": "My work sits between remote sensing research and practical decision support. I integrate Sentinel-1 SAR, terrain, climate, and GIS datasets using ArcGIS Pro, Google Earth Engine, SNAP, Python, and PyTorch to produce flood-risk, environmental-risk, and local planning outputs.",
    "about.p2": "My work follows the full analytical chain: data cleaning → feature-stack preparation → model comparison → environmental-risk products → local-scale interpretation → clear maps and reports for research, planning, and decision support.",
    "work.eyebrow": "Experience",
    "work.title": "Research and professional path",
    "work.lede": "Built around environmental risk, flood mapping, and decision-support geospatial analysis.",
    "role.scientific": "Scientific Officer",
    "role.research_member": "Research Member",
    "role.geospatial_officer": "Geospatial Officer",
    "role.intern": "Disaster Mitigation & Spatial Data Intern",
    "role.assistant": "Research Assistant",
    "exp.scientific.body": "Developed local-scale flood-information workflows using Sentinel-1 SAR, DEMs, Python, ArcGIS Pro, Google Earth Engine, and PyTorch. Compared Attention U-Net and DeepLabV3+ flood-segmentation workflows and translated outputs into parcel/building/owner-level impact layers.",
    "exp.member.body": "Support GIS mapping, spatial analysis, coastal-hazard thinking, GNSS-R applications, climate-induced risk analysis, and early-warning research planning.",
    "exp.officer.body": "Worked on land-elevation assessment and low-lying flood-susceptibility projects. Prepared geospatial datasets, spatial layers, terrain analysis, maps, and analytical outputs for environmental-risk reporting.",
    "exp.intern.body": "Supported disaster-preparedness and multi-hazard early-warning workflows through GIS data preparation, risk-analysis assistance, and stakeholder-oriented mapping outputs.",
    "exp.assistant.body": "Managed drought-index datasets, statistical analysis, research documentation, laboratory support, and early environmental modelling work.",
    "edu.ms.title": "M.S. Space Technology Applications",
    "edu.ms.body": "Research focus: AI-enabled flood information, Sentinel-1 SAR flood mapping, DEM validation, multi-sensor hydrological analysis, and parcel-level flood-risk interpretation.",
    "edu.bs.title": "B.Sc. Agricultural Engineering",
    "edu.bs.body": "Final thesis: Prediction of Drought Index Using Advanced Fuzzy-Logic Model.",
    "edu.csc.title": "Chinese Government Scholarship",
    "edu.csc.body": "Graduate study support for research in space technology applications and remote sensing.",
    "skills.eyebrow": "Skill stack",
    "skills.title": "Technical capabilities for geospatial research, automation, and decision support",
    "skill.geo.title": "Geospatial & Remote Sensing",
    "skill.geo.body": "ArcGIS Pro, QGIS, Google Earth Engine, SNAP/Sentinel-1 Toolbox, Sentinel-1 SAR, optical imagery, raster/vector analysis, DEM validation, exposure mapping, geodatabase design.",
    "skill.python.title": "Python Geospatial Automation",
    "skill.python.body": "Raster/vector batch processing, SAR feature-stack preparation, geospatial data cleaning, spatial overlay automation, reproducible notebook workflows, pandas, GeoPandas, Rasterio, Xarray, NumPy.",
    "skill.ml.title": "Machine Learning & AI",
    "skill.ml.body": "PyTorch, CNN concepts, Attention U-Net, DeepLabV3+, semantic segmentation, image classification, fuzzy-logic modelling, feature engineering, model comparison.",
    "skill.risk.title": "Climate & Environmental Risk",
    "skill.risk.body": "Flood/drought indicators, rainfall-event interpretation, terrain/elevation analysis, environmental variable integration, early-warning and risk-map production.",
    "skill.report.title": "Research & Reporting",
    "skill.report.body": "Data-quality checks, sampling design support, accuracy assessment, statistical tables, publication figures, technical reports, manuscripts, conference materials.",
    "skill.ai.title": "AI-Assisted Work Efficiency",
    "skill.ai.body": "AI-assisted coding, debugging, literature screening, technical writing, data-quality checking, workflow planning, and research-output polishing for remote sensing/GIS analysis.",
    "projects.eyebrow": "Selected projects",
    "projects.title": "Selected work across Earth observation, environmental risk, and applied AI",
    "projects.lede": "Projects are organized by analytical problem, method, dataset, and practical output.",
    "project.flood.kicker": "Flood Intelligence",
    "project.flood.title": "Flood extent and depth mapping in Bangladesh",
    "project.flood.body": "Multi-stage workflow combining Sentinel-1 SAR, Attention U-Net, DEM assessment, FwDET depth estimation, and parcel-level GIS impact interpretation.",
    "project.flood.p1": "SAR before/after feature stacks",
    "project.flood.p2": "Deep learning flood segmentation",
    "project.flood.p3": "Depth and exposure translation",
    "project.dem.kicker": "Terrain Reliability",
    "project.dem.title": "DEM validation for Jamuna floodplain",
    "project.dem.body": "Assessed open-access DEMs using water- and land-domain reference data, bootstrapped uncertainty, and decision-oriented ranking for hydrological suitability.",
    "project.dem.p1": "DEM error metrics",
    "project.dem.p2": "Water/land validation",
    "project.dem.p3": "Flood-depth suitability support",
    "project.grace.kicker": "Hydroclimate",
    "project.grace.title": "GRACE-based drought-storage dynamics",
    "project.grace.body": "Processed GRACE/GRACE-FO and climate datasets to analyze terrestrial-water storage behavior using machine-learning classification logic.",
    "project.grace.p1": "Storage-drought response",
    "project.grace.p2": "Climate dataset processing",
    "project.grace.p3": "Hydrological pattern analysis",
    "project.fish.kicker": "AI Dataset",
    "project.fish.title": "BD freshwater fish image dataset",
    "project.fish.body": "Contributed to AI-powered automatic fish species classification/detection work supporting smart aquaculture and environmental data applications.",
    "project.fish.p1": "Image dataset contribution",
    "project.fish.p2": "Classification/detection support",
    "project.fish.p3": "Smart aquaculture context",
    "button.details": "Details",
    "pub.eyebrow": "Publications",
    "pub.title": "Research outputs and manuscripts",
    "filter.all": "All",
    "filter.published": "Published",
    "filter.proceeding": "Proceeding",
    "filter.manuscript": "Manuscript",
    "pub.ongoing": "Ongoing manuscript",
    "pub.manuscript.note": "Manuscript in progress.",
    "impact.eyebrow": "Professional focus",
    "impact.title": "Connecting satellite data, modelling, and decision support.",
    "impact.body": "My work combines remote sensing, geospatial automation, AI/ML, and environmental analysis to create reproducible workflows and clear outputs for research, planning, early warning, and operational decision-making.",
    "contact.eyebrow": "Contact",
    "contact.title": "Open to geospatial AI, remote sensing R&D, environmental analytics, and decision-support roles.",
    "contact.body": "I am interested in roles that connect satellite data, AI/ML, Python automation, and applied environmental or risk analysis.",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.copy": "Copy email",
    "contact.copied": "Email copied",
    "refs.title": "References",
    "project.flood.modal": "This project connects SAR preprocessing, deep-learning flood mapping, DEM-supported depth estimation, and local-scale GIS translation into one applied geospatial workflow.",
    "project.dem.modal": "This project evaluates whether open-access DEMs are suitable for hydrological and flood-depth analysis in low-relief floodplain terrain.",
    "project.grace.modal": "This work processes GRACE/GRACE-FO and climate datasets to interpret terrestrial-water-storage and drought-response behavior using machine-learning classification logic.",
    "project.fish.modal": "A data-oriented AI project supporting fish species classification and detection for smart aquaculture and environmental data applications."
  },
  "zh": {
    "brand.subtitle": "地理空间AI · SAR · 风险制图",
    "nav.work": "经历",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.publications": "成果",
    "nav.contact": "联系",
    "hero.eyebrow": "遥感与地理空间AI研究者 · 中国杭州",
    "hero.title": "将地球观测数据转化为环境洞察。",
    "hero.lede": "我结合遥感、GIS、Python自动化与AI/ML流程，将卫星、地形和气候数据转化为可用于科研、规划、风险分析和决策支持的实际成果。",
    "button.contact": "联系我",
    "button.print": "打印简介",
    "hero.card.title": "应用型地理空间研究者",
    "hero.card.body": "关注洪涝风险信息、DEM适用性、SAR特征栈和面向用户的空间分析成果。",
    "mini.core.label": "核心领域",
    "mini.core.value": "遥感与GIS",
    "mini.sensor.label": "主要数据",
    "mini.sensor.value": "Sentinel-1 SAR · DEM · 气候数据",
    "mini.research.label": "研究方向",
    "mini.research.value": "AI驱动的环境决策支持",
    "trust.csc": "<strong>CSC</strong> 奖学金",
    "trust.ielts": "<strong>IELTS</strong> 7.5",
    "trust.tools": "<strong>工具</strong> Python · GEE · ArcGIS · PyTorch",
    "about.eyebrow": "简介",
    "about.title": "把遥感、AI和GIS连接成完整工作流。",
    "about.p1": "我的工作连接遥感研究与实际决策支持。我使用 ArcGIS Pro、Google Earth Engine、SNAP、Python 和 PyTorch 融合 Sentinel-1 SAR、地形、气候和 GIS 数据，产出洪涝风险、环境风险和地方规划相关的空间成果。",
    "about.p2": "我的工作覆盖完整分析链条：数据清洗 → 特征栈准备 → 模型比较 → 环境风险产品 → 本地尺度解释 → 面向科研、规划和决策支持的地图与报告。",
    "work.eyebrow": "经历",
    "work.title": "科研与职业路径",
    "work.lede": "围绕环境风险、洪涝制图和地理空间决策支持开展工作。",
    "role.scientific": "科研助理/Scientific Officer",
    "role.research_member": "研究成员",
    "role.geospatial_officer": "地理空间专员",
    "role.intern": "灾害减缓与空间数据实习生",
    "role.assistant": "研究助理",
    "exp.scientific.body": "使用 Sentinel-1 SAR、DEM、Python、ArcGIS Pro、Google Earth Engine 和 PyTorch 开发本地尺度洪涝信息工作流；比较 Attention U-Net 与 DeepLabV3+ 洪水分割流程，并将结果转化为地块、建筑和业主层面的影响图层。",
    "exp.member.body": "支持 GIS 制图、空间分析、海岸灾害研究、GNSS-R 应用、气候风险分析和早期预警研究规划。",
    "exp.officer.body": "参与土地高程评估和低洼洪涝易发区识别项目，准备地理空间数据、空间图层、地形分析、地图和环境风险报告成果。",
    "exp.intern.body": "通过 GIS 数据准备、风险分析支持和面向利益相关者的制图成果，支持灾害准备和多灾种早期预警工作流。",
    "exp.assistant.body": "管理干旱指数数据集，进行统计分析、研究文档整理、实验室支持和早期环境建模工作。",
    "edu.ms.title": "空间技术应用硕士",
    "edu.ms.body": "研究方向：AI赋能的洪涝信息、Sentinel-1 SAR 洪水制图、DEM 验证、多源水文分析和地块尺度洪涝风险解释。",
    "edu.bs.title": "农业工程学士",
    "edu.bs.body": "毕业论文：基于高级模糊逻辑模型的干旱指数预测。",
    "edu.csc.title": "中国政府奖学金",
    "edu.csc.body": "支持空间技术应用与遥感方向研究生学习。",
    "skills.eyebrow": "技能体系",
    "skills.title": "面向地理空间研究、自动化和决策支持的技术能力",
    "skill.geo.title": "地理空间与遥感",
    "skill.geo.body": "ArcGIS Pro、QGIS、Google Earth Engine、SNAP/Sentinel-1 Toolbox、Sentinel-1 SAR、光学影像、栅格/矢量分析、DEM验证、暴露度制图、地理数据库设计。",
    "skill.python.title": "Python地理空间自动化",
    "skill.python.body": "栅格/矢量批处理、SAR特征栈准备、地理空间数据清洗、空间叠加自动化、可复现Notebook流程、pandas、GeoPandas、Rasterio、Xarray、NumPy。",
    "skill.ml.title": "机器学习与AI",
    "skill.ml.body": "PyTorch、CNN概念、Attention U-Net、DeepLabV3+、语义分割、图像分类、模糊逻辑建模、特征工程和模型比较。",
    "skill.risk.title": "气候与环境风险",
    "skill.risk.body": "洪涝/干旱指标、降雨事件解释、地形/高程分析、环境变量集成、早期预警和风险图制作。",
    "skill.report.title": "科研与报告",
    "skill.report.body": "数据质量检查、采样设计支持、精度评价、统计表、论文图件、技术报告、稿件和会议材料。",
    "skill.ai.title": "AI辅助工作效率",
    "skill.ai.body": "利用AI工具辅助编码、调试、文献筛选、技术写作、数据质量检查、流程规划和遥感/GIS研究成果优化。",
    "projects.eyebrow": "代表项目",
    "projects.title": "地球观测、环境风险与应用AI方向的项目成果",
    "projects.lede": "项目按分析问题、方法、数据集和实际输出进行组织。",
    "project.flood.kicker": "洪涝信息",
    "project.flood.title": "孟加拉国洪水范围与水深制图",
    "project.flood.body": "结合 Sentinel-1 SAR、Attention U-Net、DEM评估、FwDET水深估算和地块级GIS影响解释的多阶段工作流。",
    "project.flood.p1": "SAR灾前/灾后特征栈",
    "project.flood.p2": "深度学习洪水分割",
    "project.flood.p3": "水深与暴露度转化",
    "project.dem.kicker": "地形可靠性",
    "project.dem.title": "Jamuna洪泛平原DEM验证",
    "project.dem.body": "使用水域和陆域参考数据、Bootstrap不确定性和面向决策的排序方法评估开源DEM的水文适用性。",
    "project.dem.p1": "DEM误差指标",
    "project.dem.p2": "水域/陆域验证",
    "project.dem.p3": "洪水水深适用性支持",
    "project.grace.kicker": "水文气候",
    "project.grace.title": "基于GRACE的干旱-储水动态分析",
    "project.grace.body": "处理 GRACE/GRACE-FO 和气候数据集，利用机器学习分类思路分析陆地水储量行为。",
    "project.grace.p1": "储水-干旱响应",
    "project.grace.p2": "气候数据处理",
    "project.grace.p3": "水文模式分析",
    "project.fish.kicker": "AI数据集",
    "project.fish.title": "孟加拉国淡水鱼图像数据集",
    "project.fish.body": "参与面向智能水产养殖和环境数据应用的鱼类自动分类/检测数据集工作。",
    "project.fish.p1": "图像数据集贡献",
    "project.fish.p2": "分类/检测支持",
    "project.fish.p3": "智能水产养殖场景",
    "button.details": "详情",
    "pub.eyebrow": "论文成果",
    "pub.title": "科研成果与稿件",
    "filter.all": "全部",
    "filter.published": "已发表",
    "filter.proceeding": "会议论文",
    "filter.manuscript": "稿件",
    "pub.ongoing": "进行中稿件",
    "pub.manuscript.note": "稿件准备中。",
    "impact.eyebrow": "职业方向",
    "impact.title": "连接卫星数据、模型和决策支持。",
    "impact.body": "我的工作结合遥感、地理空间自动化、AI/ML和环境分析，构建可复现工作流，并为科研、规划、早期预警和业务决策提供清晰成果。",
    "contact.eyebrow": "联系",
    "contact.title": "关注地理空间AI、遥感研发、环境分析和决策支持岗位。",
    "contact.body": "我希望参与将卫星数据、AI/ML、Python自动化与应用环境/风险分析相结合的工作。",
    "contact.email": "邮箱",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.copy": "复制邮箱",
    "contact.copied": "邮箱已复制",
    "refs.title": "推荐人",
    "project.flood.modal": "该项目将 SAR 预处理、深度学习洪水制图、DEM 支持的水深估算和本地尺度 GIS 转化连接为一个应用型地理空间工作流。",
    "project.dem.modal": "该项目评估开源 DEM 在低起伏洪泛平原地形中用于水文和洪水水深分析的适用性。",
    "project.grace.modal": "该工作处理 GRACE/GRACE-FO 和气候数据，利用机器学习分类逻辑解释陆地水储量与干旱响应行为。",
    "project.fish.modal": "面向智能水产养殖和环境数据应用的图像数据与 AI 分类/检测项目。"
  },
  "fr": {
    "brand.subtitle": "IA géospatiale · SAR · Cartographie du risque",
    "nav.work": "Parcours",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.publications": "Publications",
    "nav.contact": "Contact",
    "hero.eyebrow": "Chercheur en télédétection et IA géospatiale · Hangzhou, Chine",
    "hero.title": "Transformer les données d’observation de la Terre en intelligence environnementale.",
    "hero.lede": "Je combine la télédétection, le SIG, l’automatisation Python et les workflows IA/ML pour transformer les données satellitaires, topographiques et climatiques en résultats utiles pour la recherche, la planification, l’analyse des risques et l’aide à la décision.",
    "button.contact": "Me contacter",
    "button.print": "Imprimer le profil",
    "hero.card.title": "Chercheur géospatial appliqué",
    "hero.card.body": "Travail axé sur l’information sur les risques d’inondation, l’adéquation des MNE, les piles de caractéristiques SAR et les produits spatiaux orientés utilisateurs.",
    "mini.core.label": "Domaine principal",
    "mini.core.value": "Télédétection et SIG",
    "mini.sensor.label": "Données principales",
    "mini.sensor.value": "Sentinel-1 SAR · MNE/DEM · Climat",
    "mini.research.label": "Orientation de recherche",
    "mini.research.value": "Aide à la décision environnementale par IA",
    "trust.csc": "Bourse <strong>CSC</strong>",
    "trust.ielts": "<strong>IELTS</strong> 7.5",
    "trust.tools": "<strong>Outils</strong> Python · GEE · ArcGIS · PyTorch",
    "about.eyebrow": "Profil",
    "about.title": "La télédétection, l’IA et le SIG dans un workflow intégré.",
    "about.p1": "Mon travail relie la recherche en télédétection et l’aide à la décision. J’intègre les données Sentinel-1 SAR, topographiques, climatiques et SIG avec ArcGIS Pro, Google Earth Engine, SNAP, Python et PyTorch afin de produire des cartes et analyses de risques environnementaux, d’inondation et de planification locale.",
    "about.p2": "Mon approche couvre toute la chaîne analytique : nettoyage des données → préparation des piles de caractéristiques → comparaison des modèles → produits de risque environnemental → interprétation locale → cartes et rapports clairs pour la recherche, la planification et l’aide à la décision.",
    "work.eyebrow": "Expérience",
    "work.title": "Parcours de recherche et professionnel",
    "work.lede": "Expérience centrée sur le risque environnemental, la cartographie des inondations et l’aide à la décision géospatiale.",
    "role.scientific": "Scientific Officer",
    "role.research_member": "Membre de recherche",
    "role.geospatial_officer": "Chargé géospatial",
    "role.intern": "Stagiaire en données spatiales et réduction des risques",
    "role.assistant": "Assistant de recherche",
    "exp.scientific.body": "Développement de workflows locaux d’information sur les inondations avec Sentinel-1 SAR, DEM, Python, ArcGIS Pro, Google Earth Engine et PyTorch ; comparaison d’Attention U-Net et de DeepLabV3+ pour la segmentation des inondations, puis traduction des résultats en couches d’impact au niveau des parcelles, bâtiments et propriétaires.",
    "exp.member.body": "Soutien à la cartographie SIG, à l’analyse spatiale, aux risques côtiers, aux applications GNSS-R, à l’analyse des risques climatiques et à la planification de systèmes d’alerte précoce.",
    "exp.officer.body": "Travail sur l’évaluation de l’altitude des terres et l’identification des zones basses exposées aux inondations ; préparation de données géospatiales, couches spatiales, analyses de terrain, cartes et résultats pour les rapports de risque environnemental.",
    "exp.intern.body": "Soutien aux workflows de préparation aux catastrophes et d’alerte multirisque par la préparation de données SIG, l’appui à l’analyse des risques et la production de cartes orientées utilisateurs.",
    "exp.assistant.body": "Gestion de jeux de données d’indices de sécheresse, analyses statistiques, documentation de recherche, soutien au laboratoire et premiers travaux de modélisation environnementale.",
    "edu.ms.title": "Master en applications des technologies spatiales",
    "edu.ms.body": "Axes de recherche : information sur les inondations par IA, cartographie Sentinel-1 SAR, validation des DEM, analyse hydrologique multi-capteurs et interprétation du risque au niveau des parcelles.",
    "edu.bs.title": "Licence en génie agricole",
    "edu.bs.body": "Mémoire de fin d’études : prédiction d’un indice de sécheresse avec un modèle avancé de logique floue.",
    "edu.csc.title": "Bourse du gouvernement chinois",
    "edu.csc.body": "Soutien aux études de master en applications des technologies spatiales et télédétection.",
    "skills.eyebrow": "Compétences",
    "skills.title": "Compétences techniques pour la recherche géospatiale, l’automatisation et l’aide à la décision",
    "skill.geo.title": "Géospatial et télédétection",
    "skill.geo.body": "ArcGIS Pro, QGIS, Google Earth Engine, SNAP/Sentinel-1 Toolbox, Sentinel-1 SAR, imagerie optique, analyse raster/vectorielle, validation DEM, cartographie de l’exposition, conception de géodatabases.",
    "skill.python.title": "Automatisation géospatiale Python",
    "skill.python.body": "Traitement batch raster/vectoriel, préparation des piles de caractéristiques SAR, nettoyage de données géospatiales, automatisation des superpositions spatiales, workflows reproductibles, pandas, GeoPandas, Rasterio, Xarray, NumPy.",
    "skill.ml.title": "Machine Learning et IA",
    "skill.ml.body": "PyTorch, concepts CNN, Attention U-Net, DeepLabV3+, segmentation sémantique, classification d’images, logique floue, ingénierie des variables, comparaison de modèles.",
    "skill.risk.title": "Climat et risque environnemental",
    "skill.risk.body": "Indicateurs d’inondation/sécheresse, interprétation des événements de pluie, analyse topographique/altimétrique, intégration de variables environnementales, alertes précoces et cartes de risque.",
    "skill.report.title": "Recherche et reporting",
    "skill.report.body": "Contrôle qualité des données, appui à la conception d’échantillonnage, évaluation de précision, tableaux statistiques, figures de publication, rapports techniques, manuscrits, supports de conférence.",
    "skill.ai.title": "Efficacité assistée par IA",
    "skill.ai.body": "Codage, débogage, revue bibliographique, rédaction technique, contrôle qualité, planification de workflow et amélioration des livrables de recherche assistés par IA.",
    "projects.eyebrow": "Projets sélectionnés",
    "projects.title": "Travaux en observation de la Terre, risque environnemental et IA appliquée",
    "projects.lede": "Les projets sont présentés selon le problème analytique, la méthode, les données et le résultat pratique.",
    "project.flood.kicker": "Information inondation",
    "project.flood.title": "Cartographie de l’étendue et de la profondeur des inondations au Bangladesh",
    "project.flood.body": "Workflow multi-étapes combinant Sentinel-1 SAR, Attention U-Net, évaluation DEM, estimation de profondeur FwDET et interprétation SIG au niveau des parcelles.",
    "project.flood.p1": "Piles SAR avant/après événement",
    "project.flood.p2": "Segmentation d’inondation par deep learning",
    "project.flood.p3": "Traduction en profondeur et exposition",
    "project.dem.kicker": "Fiabilité du terrain",
    "project.dem.title": "Validation DEM dans la plaine inondable de la Jamuna",
    "project.dem.body": "Évaluation de DEM open-access avec données de référence eau/terre, incertitude bootstrap et classement orienté décision pour l’aptitude hydrologique.",
    "project.dem.p1": "Métriques d’erreur DEM",
    "project.dem.p2": "Validation eau/terre",
    "project.dem.p3": "Appui à l’aptitude pour la profondeur d’inondation",
    "project.grace.kicker": "Hydroclimat",
    "project.grace.title": "Dynamiques sécheresse-stockage basées sur GRACE",
    "project.grace.body": "Traitement de données GRACE/GRACE-FO et climatiques pour analyser le comportement du stockage d’eau terrestre avec une logique de classification ML.",
    "project.grace.p1": "Réponse stockage-sécheresse",
    "project.grace.p2": "Traitement de données climatiques",
    "project.grace.p3": "Analyse des modèles hydrologiques",
    "project.fish.kicker": "Jeu de données IA",
    "project.fish.title": "Jeu de données d’images de poissons d’eau douce du Bangladesh",
    "project.fish.body": "Contribution à un travail de classification/détection automatique d’espèces de poissons pour l’aquaculture intelligente et les applications environnementales.",
    "project.fish.p1": "Contribution au jeu de données image",
    "project.fish.p2": "Appui classification/détection",
    "project.fish.p3": "Contexte aquaculture intelligente",
    "button.details": "Détails",
    "pub.eyebrow": "Publications",
    "pub.title": "Productions de recherche et manuscrits",
    "filter.all": "Tout",
    "filter.published": "Publié",
    "filter.proceeding": "Conférence",
    "filter.manuscript": "Manuscrit",
    "pub.ongoing": "Manuscrit en cours",
    "pub.manuscript.note": "Manuscrit en préparation.",
    "impact.eyebrow": "Orientation professionnelle",
    "impact.title": "Relier données satellitaires, modélisation et aide à la décision.",
    "impact.body": "Mon travail combine télédétection, automatisation géospatiale, IA/ML et analyse environnementale pour créer des workflows reproductibles et des résultats clairs pour la recherche, la planification, l’alerte précoce et la décision opérationnelle.",
    "contact.eyebrow": "Contact",
    "contact.title": "Ouvert aux rôles en IA géospatiale, R&D télédétection, analyse environnementale et aide à la décision.",
    "contact.body": "Je m’intéresse aux rôles qui relient données satellitaires, IA/ML, automatisation Python et analyse environnementale ou des risques.",
    "contact.email": "Email",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.copy": "Copier l’email",
    "contact.copied": "Email copié",
    "refs.title": "Références",
    "project.flood.modal": "Ce projet relie le prétraitement SAR, la cartographie des inondations par deep learning, l’estimation de profondeur appuyée par DEM et la traduction SIG locale dans un workflow géospatial appliqué.",
    "project.dem.modal": "Ce projet évalue si les DEM open-access sont adaptés aux analyses hydrologiques et de profondeur d’inondation dans les plaines très peu reliefées.",
    "project.grace.modal": "Ce travail traite les données GRACE/GRACE-FO et climatiques pour interpréter le stockage d’eau terrestre et la réponse à la sécheresse avec une logique de classification ML.",
    "project.fish.modal": "Projet IA orienté données pour la classification et la détection d’espèces de poissons dans un contexte d’aquaculture intelligente et d’applications environnementales."
  }
};

const languageSelect = document.querySelector('#language-select');
const chineseTimeZones = new Set(['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Harbin', 'Asia/Urumqi', 'Asia/Hong_Kong', 'Asia/Macau']);
const frenchTimeZones = new Set(['Europe/Paris', 'Europe/Monaco', 'America/Martinique', 'America/Guadeloupe', 'America/Cayenne', 'Indian/Reunion', 'Indian/Mayotte', 'Pacific/Noumea', 'Pacific/Tahiti']);
let currentLanguage = 'en';
let projectDetailsReady = false;

function detectVisitorLanguage() {
  const storedLanguage = localStorage.getItem('preferredLanguage');
  if (storedLanguage && translations[storedLanguage]) return storedLanguage;
  const browserLanguages = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']).map(lang => lang.toLowerCase());
  const primaryLanguage = browserLanguages[0] || 'en';
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (browserLanguages.some(lang => lang.startsWith('zh')) || chineseTimeZones.has(timeZone)) return 'zh';
  if (browserLanguages.some(lang => lang.startsWith('fr')) || frenchTimeZones.has(timeZone)) return 'fr';
  return 'en';
}

function translateProjectDetails() {
  projectDetails.flood.kicker = t('project.flood.kicker');
  projectDetails.flood.title = t('project.flood.title');
  projectDetails.flood.body = t('project.flood.modal');
  projectDetails.flood.points = [t('project.flood.p1'), t('project.flood.p2'), t('project.flood.p3')];
  projectDetails.dem.kicker = t('project.dem.kicker');
  projectDetails.dem.title = t('project.dem.title');
  projectDetails.dem.body = t('project.dem.modal');
  projectDetails.dem.points = [t('project.dem.p1'), t('project.dem.p2'), t('project.dem.p3')];
  projectDetails.grace.kicker = t('project.grace.kicker');
  projectDetails.grace.title = t('project.grace.title');
  projectDetails.grace.body = t('project.grace.modal');
  projectDetails.grace.points = [t('project.grace.p1'), t('project.grace.p2'), t('project.grace.p3')];
  projectDetails.fish.kicker = t('project.fish.kicker');
  projectDetails.fish.title = t('project.fish.title');
  projectDetails.fish.body = t('project.fish.modal');
  projectDetails.fish.points = [t('project.fish.p1'), t('project.fish.p2'), t('project.fish.p3')];
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : 'en';
  root.setAttribute('lang', currentLanguage === 'zh' ? 'zh-CN' : currentLanguage);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = t(key);
  });
  if (languageSelect) languageSelect.value = currentLanguage;
  if (projectDetailsReady) translateProjectDetails();
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

year.textContent = new Date().getFullYear();
applyLanguage(detectVisitorLanguage());
languageSelect?.addEventListener('change', () => {
  localStorage.setItem('preferredLanguage', languageSelect.value);
  applyLanguage(languageSelect.value);
});

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
      button.textContent = t('contact.copied');
      setTimeout(() => button.textContent = t('contact.copy'), 1600);
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

projectDetailsReady = true;
translateProjectDetails();

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
