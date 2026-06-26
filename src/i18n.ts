import { ref } from 'vue'
import type { ProductItem, ProductVariant } from '@/data/products'

export type Locale = 'CN' | 'FR'

const currentLocale = ref<Locale>('CN')

const messages = {
  CN: {
    brand: '铠福科技',
    navHome: '首页',
    navProducts: '产品目录',
    navScenarios: '防护方案',
    navResources: '技术资料',
    navManufacturing: '制造能力',
    navContact: '联系咨询',
    languageLabel: '语言切换',
    menuLabel: '打开导航',
    heroTitle: '弹道防护装备',
    heroDescription:
      '聚焦人员防护与现场处置场景，提供覆盖防弹背心、头盔、盾牌、防护插板及软质防护组件的专业弹道防护产品体系。',
    viewProducts: '查看产品',
    contactInquiry: '联系咨询',
    heroStatusCatalog: '按防护品类查看核心产品',
    heroStatusDocs: '获取产品图片、参数与规格资料',
    heroStatusFrance: '支持法国及欧洲客户项目沟通',
    heroVisualLabel: '弹道防护装备展示动画',
    productsTitle: '核心防护品类',
    productsDescription:
      '覆盖穿戴式防护、头部防护与现场防护装备，形成面向专业安防、执法与项目采购场景的弹道防护产品体系。',
    productCount: '个产品',
    productsFooterTitle: '更多防护组件与项目资料',
    productsFooterDescription:
      '产品目录涵盖防护插板、软质防护组件、硬质防护面板及定制化防护方案，可根据项目需求提供图片、参数与规格资料。',
    viewAllProducts: '查看全部产品',
    factoryTitle: '生产支持与质量管理',
    factoryDescription:
      '通过中国供应链合作资源与法国本地商务团队协同，为专业客户提供从产品展示、参数资料、样品沟通到订单协调的完整支持。',
    factoryImageAlt: '生产设备与工厂环境',
    factoryCard1Title: '生产与供货支持',
    factoryCard1Desc: '对接成熟生产资源，支持样品准备、批量供货、基础参数整理及项目交付前沟通。',
    factoryCard2Title: '产品资料整理',
    factoryCard2Desc: '根据客户需求提供产品图片、基础参数、规格说明，并协助推进技术文件申请流程。',
    factoryCard3Title: '法国本地商务支持',
    factoryCard3Desc: '由法国本地团队负责客户沟通、需求确认、项目协调及后续商务跟进，提升跨境合作效率。',
    metricOem: '定制化生产支持',
    metricQc: '质量检查与记录',
    metricDocs: '参数与规格资料',
    metricFr: '法国本地支持',
    techTitle: '材料与防护技术',
    techDescription:
      '围绕弹道防护装备的材料选型、结构组合与产品配置，展示软质防护、硬质防护及复合结构的基础逻辑。具体防护等级、测试标准与认证文件以正式资料为准。',
    techStructureLabel: '四层复合防护结构示意',
    managementTitle: '中国供应链，法国销售与管理团队',
    managementDescription:
      '网站定位不是普通电商，而是面向法国及欧洲专业客户的产品展示、资料对接与销售管理平台。中国供应链负责产品与生产支持，法国团队负责市场沟通、客户跟进与商务协调',
    managementIntroTitle: '法国本地销售管理，让供应链产品更适合欧洲专业客户沟通。',
    managementIntroDesc:
      '对于弹道防护类产品，客户通常需要先确认产品类别、技术资料、应用场景、文件支持与后续商务安排。网站将咨询流程聚焦在专业展示、资料确认与可信对接。',
    contactSalesTeam: '联系销售团队',
    capabilityLabel: '服务能力标签',
    contactTitle: '产品咨询',
    contactDescription:
      '面向法国及欧洲专业客户，提供产品目录、基础参数、图片资料、规格文件与商务沟通支持。请通过正式联系确认防护等级、认证资料、交付范围与报价信息。',
    contactPanelTitle: '为了更快匹配资料，请尽量说明以下信息',
    contactBullet1: '目标产品类别，例如背心、头盔、盾牌、插板或软质防护组件',
    contactBullet2: '应用场景与采购主体，例如安防、机构采购、企业防护或项目配套',
    contactBullet3: '希望获取的资料，例如产品图、基础参数、规格说明、测试文件或报价',
    contactBullet4: '所在国家、数量范围、时间计划与期望沟通语言',
    nameCompany: '姓名 / 公司',
    nameCompanyPlaceholder: '请输入姓名或公司名称',
    email: '邮箱',
    interestedProduct: '感兴趣的产品',
    otherProtection: '其他防护方案',
    requirement: '需求说明',
    requirementPlaceholder: '请说明产品类别、应用场景、数量范围、目标资料类型或其他商务需求',
    importantNotice: '重要提示',
    contactNotice:
      '防护等级、测试报告、认证文件与报价信息需结合具体产品型号和使用场景确认。提交需求后，我们会优先对接产品资料、基础参数与后续商务沟通安排。',
    sendEmail: '通过邮件发送咨询',
    productsPageTitle: '全部产品目录',
    productsPageDescription: '展示当前可用于产品资料对接与销售沟通的主要弹道防护装备类别。',
    breadcrumbHome: '首页',
    breadcrumbProducts: '产品目录',
    seriesChooseTitle: '选择具体产品',
    seriesChooseDescription: '进入具体产品详情后，可以查看该产品对应的多张图片、基础信息和资料申请说明。',
    imageCount: '张图片',
    viewDetail: '查看详情',
    seriesNotFound: '产品目录不存在',
    backProducts: '返回产品目录',
    requestDocs: '申请技术资料',
    backSeries: '返回系列产品',
    images: 'IMAGES',
    technicalOverview: '基础参数',
    professionalInquiryTitle: '面向专业客户的资料对接',
    professionalInquiryDesc:
      '页面仅用于产品展示与初步资料说明。具体防护等级、材料结构、测试文件、认证资料与报价信息，建议通过正式商务沟通确认。',
    requestInfoTitle: '需要该产品的技术资料？',
    requestInfoDesc: '可通过邮件联系销售团队，申请产品参数、图片资料、规格文件或进一步商务沟通。',
    productNotFound: '产品不存在',
    sendInquiryEmail: '发送咨询邮件',
    scenariosTitle: '应用场景',
    scenariosDescription: '按专业客户的使用场景组织产品线索，帮助快速判断应查看哪些防护装备系列。',
    scenariosLabel: '应用场景列表',
    resourcesTitle: '资料中心',
    resourcesDescription: '集中说明产品资料、技术文件和商务沟通的申请方式。正式文件与参数以后续确认为准。',
    resourcesLabel: '资料中心内容',
    factorySiteLabel: '生产现场图片',
    factorySiteTitle: '生产现场与工艺环境',
    factorySiteDescription:
      '补充展示材料处理、裁切、压制与装甲板加工等生产环节，便于专业客户了解供货与样品沟通背后的基础制造环境。',
    footerTitle: '弹道防护装备资料与项目对接平台',
    footerDesc: '面向法国及欧洲专业客户，集中展示防护装备目录、制造支持与资料申请入口。',
    footerProducts: '产品目录',
    footerServices: '服务范围',
    footerManufacturing: '制造与供货支持',
    footerResources: '技术资料申请',
    footerScenarios: '防护方案说明',
    footerDisclaimer: '防护等级以正式文件为准',
    footerContact: '联系方式',
  },
  FR: {
    brand: 'Kaifu Technology',
    navHome: 'Accueil',
    navProducts: 'Catalogue',
    navScenarios: 'Scénarios',
    navResources: 'Documents',
    navManufacturing: 'Fabrication',
    navContact: 'Contact',
    languageLabel: 'Changer de langue',
    menuLabel: 'Ouvrir la navigation',
    heroTitle: 'Équipements de protection balistique',
    heroDescription:
      'Une gamme professionnelle couvrant les gilets pare-balles, casques, boucliers, plaques rigides et inserts souples pour la protection individuelle et les interventions terrain.',
    viewProducts: 'Voir les produits',
    contactInquiry: 'Nous contacter',
    heroStatusCatalog: 'Consulter les familles de protection',
    heroStatusDocs: 'Demander images, paramètres et fiches',
    heroStatusFrance: 'Accompagnement pour les clients France et Europe',
    heroVisualLabel: 'Animation de présentation des équipements balistiques',
    productsTitle: 'Familles principales',
    productsDescription:
      'Des équipements portés, protections de tête et solutions de terrain pour les besoins professionnels de sécurité, d’intervention et d’achat projet.',
    productCount: 'produits',
    productsFooterTitle: 'Autres composants et dossiers projet',
    productsFooterDescription:
      'Le catalogue couvre les plaques balistiques, inserts souples, panneaux rigides et solutions personnalisées. Images, paramètres et spécifications peuvent être fournis selon le projet.',
    viewAllProducts: 'Voir tout le catalogue',
    factoryTitle: 'Support de production et qualité',
    factoryDescription:
      'Coordination entre ressources industrielles chinoises et équipe commerciale en France pour accompagner les clients professionnels depuis la présentation produit jusqu’aux documents, échantillons et commandes.',
    factoryImageAlt: 'Équipements de production et environnement d’atelier',
    factoryCard1Title: 'Production et approvisionnement',
    factoryCard1Desc: 'Accès à des ressources de production établies pour les échantillons, volumes, paramètres de base et échanges avant livraison projet.',
    factoryCard2Title: 'Préparation des dossiers produit',
    factoryCard2Desc: 'Images produit, paramètres de base, fiches de spécifications et accompagnement de la demande de documents techniques.',
    factoryCard3Title: 'Support commercial en France',
    factoryCard3Desc: 'L’équipe locale gère les échanges clients, la qualification des besoins, la coordination projet et le suivi commercial.',
    metricOem: 'Support de production sur mesure',
    metricQc: 'Contrôle qualité et traçabilité',
    metricDocs: 'Paramètres et spécifications',
    metricFr: 'Support local France',
    techTitle: 'Matériaux et technologie de protection',
    techDescription:
      'Une lecture claire des choix de matériaux, combinaisons structurelles et configurations produit pour les protections souples, rigides et composites. Les niveaux de protection, normes de test et certifications sont confirmés par documents officiels.',
    techStructureLabel: 'Schéma de structure composite à quatre couches',
    managementTitle: 'Chaîne d’approvisionnement chinoise, vente et gestion en France',
    managementDescription:
      'Le site n’est pas une boutique en ligne, mais une plateforme B2B de présentation, de documentation et de coordination commerciale pour les clients professionnels en France et en Europe.',
    managementIntroTitle: 'Une gestion commerciale locale pour faciliter les échanges avec les clients européens.',
    managementIntroDesc:
      'Les produits balistiques nécessitent souvent une validation préalable des catégories, documents techniques, usages, supports de fichiers et modalités commerciales. Le parcours est donc centré sur une présentation fiable et une qualification sérieuse.',
    contactSalesTeam: 'Contacter l’équipe commerciale',
    capabilityLabel: 'Étiquettes de capacités',
    contactTitle: 'Demande produit',
    contactDescription:
      'Pour les clients professionnels en France et en Europe : catalogue, paramètres de base, images, fiches de spécifications et support commercial. Les niveaux de protection, certifications, périmètres de livraison et prix doivent être confirmés formellement.',
    contactPanelTitle: 'Pour préparer rapidement les bons documents, merci d’indiquer',
    contactBullet1: 'La catégorie recherchée : gilet, casque, bouclier, plaque ou insert souple',
    contactBullet2: 'Le contexte d’usage et le type d’acheteur : sécurité, institution, entreprise ou projet',
    contactBullet3: 'Les documents souhaités : images, paramètres, spécifications, tests ou devis',
    contactBullet4: 'Le pays, les quantités, le calendrier et la langue de communication souhaitée',
    nameCompany: 'Nom / Société',
    nameCompanyPlaceholder: 'Indiquez votre nom ou société',
    email: 'E-mail',
    interestedProduct: 'Produit recherché',
    otherProtection: 'Autre solution de protection',
    requirement: 'Besoin',
    requirementPlaceholder: 'Décrivez la catégorie, l’usage, les quantités, les documents souhaités ou autres besoins',
    importantNotice: 'Note importante',
    contactNotice:
      'Les niveaux de protection, rapports de test, certifications et prix dépendent du modèle et du scénario d’usage. Après réception, nous priorisons les informations produit, paramètres de base et échanges commerciaux.',
    sendEmail: 'Envoyer une demande par e-mail',
    productsPageTitle: 'Catalogue complet',
    productsPageDescription: 'Présentation des principales catégories d’équipements balistiques disponibles pour documentation et échanges commerciaux.',
    breadcrumbHome: 'Accueil',
    breadcrumbProducts: 'Catalogue',
    seriesChooseTitle: 'Choisir un produit',
    seriesChooseDescription: 'Chaque fiche produit présente plusieurs visuels, les informations de base et les modalités de demande documentaire.',
    imageCount: 'images',
    viewDetail: 'Voir le détail',
    seriesNotFound: 'Catégorie introuvable',
    backProducts: 'Retour au catalogue',
    requestDocs: 'Demander la documentation',
    backSeries: 'Retour à la série',
    images: 'IMAGES',
    technicalOverview: 'Paramètres de base',
    professionalInquiryTitle: 'Documentation pour clients professionnels',
    professionalInquiryDesc:
      'Cette page sert à la présentation initiale. Les niveaux de protection, matériaux, tests, certifications et prix doivent être confirmés par échange commercial formel.',
    requestInfoTitle: 'Besoin de la documentation technique ?',
    requestInfoDesc: 'Contactez l’équipe commerciale par e-mail pour demander les paramètres, images, fiches et échanges complémentaires.',
    productNotFound: 'Produit introuvable',
    sendInquiryEmail: 'Envoyer une demande',
    scenariosTitle: 'Scénarios d’application',
    scenariosDescription: 'Organisation des produits par usages professionnels afin d’identifier rapidement les familles de protection pertinentes.',
    scenariosLabel: 'Liste des scénarios',
    resourcesTitle: 'Centre de ressources',
    resourcesDescription: 'Présentation des modalités de demande de catalogues, documents techniques et échanges commerciaux. Les documents officiels prévalent.',
    resourcesLabel: 'Contenu du centre de ressources',
    factorySiteLabel: 'Photos de production',
    factorySiteTitle: 'Sites de production et environnement process',
    factorySiteDescription:
      'Aperçu des étapes de traitement des matériaux, découpe, pressage et usinage des plaques pour mieux comprendre l’environnement de fabrication.',
    footerTitle: 'Plateforme de documentation et de coordination projet balistique',
    footerDesc: 'Pour les clients professionnels en France et en Europe : catalogue, support de fabrication et demandes documentaires.',
    footerProducts: 'Catalogue',
    footerServices: 'Services',
    footerManufacturing: 'Fabrication et approvisionnement',
    footerResources: 'Demande de documents',
    footerScenarios: 'Solutions de protection',
    footerDisclaimer: 'Les niveaux de protection sont confirmés par documents officiels',
    footerContact: 'Contact',
  },
} as const

export type MessageKey = keyof typeof messages.CN

type ProductTranslation = {
  name: string
  description: string
  tags: string[]
  specs: { label: string; value: string }[]
  detail: string
  applications: string[]
  variants: Record<
    string,
    {
      name: string
      description: string
      tags: string[]
    }
  >
}

const productTranslations: Record<string, ProductTranslation> = {
  vest: {
    name: 'Gilets pare-balles',
    description: 'Série d’équipements de protection individuelle pour les environnements professionnels.',
    tags: ['Structure modulaire', 'Protection individuelle', 'Compatible plaques'],
    specs: [
      { label: 'Type', value: 'Protection souple / modulaire' },
      { label: 'Usage', value: 'Sécurité professionnelle / environnements à risque' },
      { label: 'Documents', value: 'Fiches techniques sur demande' },
    ],
    detail:
      'Les gilets pare-balles répondent aux besoins de sécurité professionnelle, de support aux forces de l’ordre et d’environnements à risque. Les structures, tailles et configurations sont étudiées selon le projet.',
    applications: ['Sécurité professionnelle', 'Achats institutionnels', 'Sites à risque', 'Systèmes d’équipement'],
    variants: {
      'police-soft-vest': {
        name: 'Gilet pare-balles police souple',
        description: 'Gilet noir souple avec marquage POLICE, adapté aux présentations pour forces de l’ordre, sécurité et achats institutionnels.',
        tags: ['Police', 'Gilet souple', 'Aspect noir'],
      },
      'police-tactical-vest': {
        name: 'Gilet tactique police',
        description: 'Gilet tactique noir avec zones d’accessoires et structure modulaire pour configurations de sécurité.',
        tags: ['Tactique police', 'Structure modulaire', 'Sécurité'],
      },
      'concealable-vest': {
        name: 'Gilet pare-balles discret',
        description: 'Gilet souple au design épuré pour port discret, protection basse visibilité ou documentation de base.',
        tags: ['Protection discrète', 'Gilet souple', 'Modèle de base'],
      },
      'tactical-plate-carrier': {
        name: 'Porte-plaques tactique',
        description: 'Porte-plaques tactiques sable, noirs ou camouflage pour association avec plaques et systèmes d’équipement.',
        tags: ['Tactique', 'Compatible plaques', 'Système d’équipement'],
      },
      'formal-vest': {
        name: 'Gilet de protection style costume',
        description: 'Gilet au style plus sobre pour les besoins de protection discrète.',
        tags: ['Protection discrète', 'Style gilet', 'Contexte professionnel'],
      },
      'full-protection-suit': {
        name: 'Ensemble de protection complet',
        description: 'Ensemble offrant une couverture plus étendue pour les solutions de protection spécifiques.',
        tags: ['Protection complète', 'Solution spéciale', 'Ensemble'],
      },
    },
  },
  helmet: {
    name: 'Casques balistiques',
    description: 'Série de protections balistiques légères pour la tête.',
    tags: ['Protection de tête', 'Léger', 'Équipement professionnel'],
    specs: [
      { label: 'Type', value: 'Protection balistique de tête' },
      { label: 'Usage', value: 'Forces de l’ordre / sécurité / protection professionnelle' },
      { label: 'Configuration', value: 'Tailles et accessoires à confirmer' },
    ],
    detail:
      'Les casques balistiques protègent la tête lors de missions professionnelles. Les structures, poids, tailles et accessoires peuvent être adaptés au scénario.',
    applications: ['Missions de sécurité', 'Support forces de l’ordre', 'Protection professionnelle', 'Système d’équipement'],
    variants: {
      'fast-helmet': {
        name: 'Casque FAST',
        description: 'Casque léger avec rails et possibilités d’extension accessoires.',
        tags: ['FAST', 'Extension accessoires', 'Léger'],
      },
      'mich-helmet': {
        name: 'Casque MICH',
        description: 'Structure mid-cut classique pour missions professionnelles et systèmes d’équipement.',
        tags: ['MICH', 'Coupe intermédiaire', 'Mission professionnelle'],
      },
      'm88-helmet': {
        name: 'Casque M88',
        description: 'Forme traditionnelle pour documentation de protection de tête de base.',
        tags: ['M88', 'Modèle de base', 'Protection de tête'],
      },
      'pasgt-helmet': {
        name: 'Casque PASGT',
        description: 'Forme PASGT classique pour différents besoins d’achat.',
        tags: ['PASGT', 'Forme classique', 'Multi-scénarios'],
      },
      'white-helmet-shell': {
        name: 'Coque de casque blanche',
        description: 'Coque blanche pour présenter la structure, la base de casque ou des options de couleur.',
        tags: ['Coque blanche', 'Présentation matériau', 'Couleur personnalisée'],
      },
    },
  },
  shield: {
    name: 'Boucliers balistiques',
    description: 'Série de protections rigides pour protection frontale et interventions terrain.',
    tags: ['Protection frontale', 'Intervention terrain', 'Protection rigide'],
    specs: [
      { label: 'Type', value: 'Protection frontale rigide' },
      { label: 'Usage', value: 'Intervention / sécurité professionnelle' },
      { label: 'Dimensions', value: 'À confirmer selon besoin' },
    ],
    detail:
      'Les boucliers balistiques conviennent aux scénarios professionnels nécessitant une protection frontale, notamment interventions, sécurité et besoins spécifiques.',
    applications: ['Intervention terrain', 'Sécurité', 'Achats institutionnels', 'Missions spéciales'],
    variants: {
      'viewport-shield': {
        name: 'Bouclier balistique avec fenêtre',
        description: 'Bouclier avec fenêtre d’observation pour intervention terrain et protection frontale.',
        tags: ['Fenêtre', 'Intervention', 'Protection frontale'],
      },
      'portable-shield': {
        name: 'Bouclier balistique portable',
        description: 'Bouclier manuel plus compact pour les besoins de protection mobile.',
        tags: ['Portable', 'Manuel', 'Protection mobile'],
      },
    },
  },
  plate: {
    name: 'Plaques balistiques',
    description: 'Série de composants rigides compatibles avec les gilets pare-balles.',
    tags: ['Protection rigide', 'Plaque', 'Composite'],
    specs: [
      { label: 'Type', value: 'Composant de protection rigide' },
      { label: 'Association', value: 'Gilet pare-balles / gilet tactique' },
      { label: 'Matériau', value: 'Configuration selon besoin' },
    ],
    detail:
      'Les plaques balistiques constituent un module rigide du système de protection individuelle et peuvent être utilisées avec un gilet ou autre équipement.',
    applications: ['Renforcement individuel', 'Système de protection', 'Achats professionnels', 'Combinaison d’équipements'],
    variants: {
      'pe-sic-plate': {
        name: 'Plaque PE + SiC',
        description: 'Plaque composite adaptée aux configurations de protection plus élevées.',
        tags: ['PE', 'SiC', 'Composite'],
      },
      'pe-alumina-plate': {
        name: 'Plaque PE + Al2O3',
        description: 'Plaque à structure céramique composite pour différentes configurations.',
        tags: ['PE', 'Céramique composite', 'Protection rigide'],
      },
      'pe-foam-plate': {
        name: 'Plaque PE + mousse',
        description: 'Plaque avec structure amortissante pour échanges sur poids et architecture.',
        tags: ['PE', 'Amortissement', 'Configuration légère'],
      },
      'standard-plate': {
        name: 'Plaque rigide standard',
        description: 'Plaque rigide de forme standard pour renforcer un système de protection individuelle.',
        tags: ['Standard', 'Plaque rigide', 'Compatible gilet'],
      },
    },
  },
  'soft-insert': {
    name: 'Inserts balistiques souples',
    description: 'Série de couches de protection souple pour gilets, combinaisons et autres équipements.',
    tags: ['Protection souple', 'Insert de protection', 'Composant matériau'],
    specs: [
      { label: 'Type', value: 'Composant de protection souple' },
      { label: 'Usage', value: 'Gilet / combinaison / équipement sur mesure' },
      { label: 'Structure', value: 'À adapter selon produit' },
    ],
    detail:
      'Les inserts et composants souples peuvent être intégrés aux gilets, combinaisons et équipements personnalisés comme couche de protection principale.',
    applications: ['Équipements souples', 'Insert de gilet', 'Protection personnalisée', 'Fourniture matériau'],
    variants: {
      'soft-insert-hg2': {
        name: 'Insert balistique souple HG2',
        description: 'Composant souple pour gilets, combinaisons ou équipements personnalisés.',
        tags: ['HG2', 'Protection souple', 'Composant interne'],
      },
      'soft-insert-hg1': {
        name: 'Insert balistique souple HG1',
        description: 'Autre insert souple pour comparer différentes configurations.',
        tags: ['HG1', 'Couche matériau', 'Personnalisable'],
      },
      'soft-insert-test': {
        name: 'Échantillon de test',
        description: 'Échantillon montrant l’état de test et du matériau. Les documents d’essai sont fournis séparément.',
        tags: ['Échantillon test', 'Présentation matériau', 'Documents séparés'],
      },
    },
  },
  blanket: {
    name: 'Couvertures balistiques',
    description: 'Protection souple pour couverture temporaire, intervention terrain et besoins spécifiques.',
    tags: ['Protection souple', 'Couverture temporaire', 'Scénarios spéciaux'],
    specs: [
      { label: 'Type', value: 'Composant de protection souple' },
      { label: 'Usage', value: 'Intervention / couverture temporaire / protection spéciale' },
      { label: 'Documents', value: 'Spécifications et niveaux sur demande' },
    ],
    detail:
      'Les couvertures balistiques peuvent servir en couverture temporaire, intervention ou protection spéciale. Les dimensions, structures et niveaux sont confirmés par documents formels.',
    applications: ['Intervention terrain', 'Protection temporaire', 'Achats institutionnels', 'Solution spéciale'],
    variants: {
      'standard-blanket': {
        name: 'Couverture balistique standard',
        description: 'Produit souple pour présentation documentaire et échanges sur protections temporaires.',
        tags: ['Protection souple', 'Couverture temporaire', 'Intervention'],
      },
    },
  },
  'special-protection': {
    name: 'Solutions de protection spéciales',
    description: 'Matériaux et solutions pour véhicules, infrastructures ou projets personnalisés.',
    tags: ['Protection véhicule', 'Protection infrastructure', 'Solution personnalisée'],
    specs: [
      { label: 'Type', value: 'Matériau spécial / solution personnalisée' },
      { label: 'Scénario', value: 'Véhicule / infrastructure / structure spéciale' },
      { label: 'Échange', value: 'Dossier selon besoin projet' },
    ],
    detail:
      'Les solutions spéciales complètent les équipements individuels standard : véhicules, infrastructures, grilles ou panneaux. La solution dépend du contexte, des dimensions et des exigences techniques.',
    applications: ['Protection véhicule', 'Protection infrastructure', 'Achat projet', 'Protection personnalisée'],
    variants: {
      'armor-plate': {
        name: 'Plaque de blindage',
        description: 'Panneau pour véhicules, infrastructures ou projets de protection personnalisés.',
        tags: ['Plaque blindée', 'Protection véhicule', 'Projet personnalisé'],
      },
      'pe-board': {
        name: 'Plaque PE',
        description: 'Panneau PE pour solutions de protection légères.',
        tags: ['Plaque PE', 'Léger', 'Solution matériau'],
      },
      'ballistic-grille': {
        name: 'Grille balistique',
        description: 'Grille pour infrastructures, fenêtres ou besoins de protection structurelle spécifique.',
        tags: ['Grille balistique', 'Protection infrastructure', 'Structure spéciale'],
      },
    },
  },
}

const staticLists = {
  techLayers: {
    CN: [
      { index: '01', title: '外层面料', desc: '用于装备外部覆盖、耐磨保护与基础结构支撑' },
      { index: '02', title: '软质防护层', desc: '可根据产品需求采用芳纶、UHMWPE 等软质防护材料' },
      { index: '03', title: '硬质防护模块', desc: '适用于防护插板、盾牌及硬质防护面板等产品配置' },
      { index: '04', title: '缓冲与贴合结构', desc: '通过结构设计与工艺配合，提升穿戴稳定性、贴合度与使用舒适性' },
    ],
    FR: [
      { index: '01', title: 'Tissu extérieur', desc: 'Couverture externe, résistance à l’usure et support structurel' },
      { index: '02', title: 'Couche souple', desc: 'Aramide, UHMWPE ou autres matériaux souples selon le produit' },
      { index: '03', title: 'Module rigide', desc: 'Pour plaques, boucliers et panneaux de protection rigides' },
      { index: '04', title: 'Amorti et ajustement', desc: 'Structure et process pour stabilité, maintien et confort d’usage' },
    ],
  },
  techFeatures: {
    CN: [
      { title: '材料选择', desc: '根据防护场景、重量要求与产品结构，匹配相应材料方案' },
      { title: '结构配置', desc: '支持背心、头盔、插板、盾牌及软质组件等多类型产品配置' },
      { title: '文件支持', desc: '可根据项目需求提供产品图片、规格参数、测试信息及相关资料' },
    ],
    FR: [
      { title: 'Choix des matériaux', desc: 'Matériaux adaptés selon le scénario, le poids cible et la structure produit' },
      { title: 'Configuration structurelle', desc: 'Gilets, casques, plaques, boucliers et composants souples' },
      { title: 'Support documentaire', desc: 'Images, spécifications, informations de test et documents selon projet' },
    ],
  },
  managementSteps: {
    CN: [
      { index: '01', code: 'CN', title: '中国供应链', desc: '产品由中国供应链合作方提供生产、样品、图片、基础资料与供货支持' },
      { index: '02', code: 'FR', title: '法国销售管理', desc: '法国团队负责客户沟通、需求确认、资料对接、订单协调与销售管理' },
      { index: '03', code: 'EU', title: '欧洲专业客户', desc: '面向法国及欧洲安防、机构、企业及专业采购场景提供展示与咨询' },
    ],
    FR: [
      { index: '01', code: 'CN', title: 'Chaîne d’approvisionnement chinoise', desc: 'Production, échantillons, images, informations de base et support d’approvisionnement' },
      { index: '02', code: 'FR', title: 'Gestion commerciale France', desc: 'Échanges clients, qualification des besoins, documents, coordination des commandes et vente' },
      { index: '03', code: 'EU', title: 'Clients professionnels européens', desc: 'Présentation et conseil pour la sécurité, les institutions, les entreprises et les achats professionnels' },
    ],
  },
  capabilities: {
    CN: [
      '产品资料整理',
      '客户需求确认',
      '商务沟通支持',
      '订单协调',
      '中法双语展示',
      '技术文件申请',
      '样品资料准备',
      '欧洲客户跟进',
      '采购场景咨询',
      '供货节奏确认',
      '售前资料对接',
      '后续商务跟进',
    ],
    FR: [
      'Préparation documents',
      'Qualification besoin',
      'Support commercial',
      'Coordination commandes',
      'Présentation bilingue',
      'Demande technique',
      'Préparation échantillons',
      'Suivi clients Europe',
      'Conseil achat',
      'Planning supply',
      'Avant-vente',
      'Suivi commercial',
    ],
  },
  scenarios: {
    CN: [
      { title: '执法与安防', desc: '适合查看警用防弹衣、防弹头盔、防弹盾牌及软质防护组件。' },
      { title: '个人防护配置', desc: '围绕防弹背心、插板、头盔和附件组合，整理基础产品资料。' },
      { title: '车辆与设施防护', desc: '适合查看装甲板、PE 板、防弹格栅等特殊防护材料与方案。' },
      { title: '机构采购沟通', desc: '面向参数确认、图片资料、规格文件和后续商务沟通的资料对接流程。' },
    ],
    FR: [
      { title: 'Forces de l’ordre et sécurité', desc: 'Gilets police, casques, boucliers et composants souples.' },
      { title: 'Configuration individuelle', desc: 'Gilets, plaques, casques et accessoires pour préparer un dossier de base.' },
      { title: 'Véhicules et infrastructures', desc: 'Plaques de blindage, panneaux PE, grilles balistiques et solutions spéciales.' },
      { title: 'Achats institutionnels', desc: 'Parcours documentaire pour paramètres, images, spécifications et échanges commerciaux.' },
    ],
  },
  resources: {
    CN: [
      { label: '产品目录', title: '产品图片与基础信息', desc: '可按产品目录整理图片、型号说明、应用场景和基础配置资料。' },
      { label: '技术文件', title: '规格与测试资料申请', desc: '具体防护等级、测试标准、认证文件和规格参数需通过正式沟通确认。' },
      { label: '商务沟通', title: '采购需求与资料对接', desc: '可根据客户使用场景、数量范围和目标产品类型整理后续资料。' },
    ],
    FR: [
      { label: 'Catalogue', title: 'Images et informations de base', desc: 'Images, modèles, usages et configurations de base peuvent être organisés par produit.' },
      { label: 'Documents', title: 'Spécifications et tests', desc: 'Niveaux, normes, certifications et paramètres sont confirmés par échange formel.' },
      { label: 'Commercial', title: 'Besoins d’achat et dossier', desc: 'Les documents peuvent être préparés selon l’usage, les quantités et le produit cible.' },
    ],
  },
  factoryGallery: {
    CN: [
      'UD 布生产线',
      'UD 布托料工位',
      '切割机设备',
      '纤维与材料收卷',
      '液压成型设备',
      '激光切割工序',
      '压制产线',
      '热压罐设备',
      '热封处理工位',
      '纤维生产线',
      '装甲板加工设备',
      '生产设备全景',
    ],
    FR: [
      'Ligne de tissu UD',
      'Poste support tissu UD',
      'Équipement de découpe',
      'Enroulement fibre et matériaux',
      'Presse hydraulique',
      'Découpe laser',
      'Ligne de pressage',
      'Autoclave',
      'Poste de thermoscellage',
      'Ligne fibre',
      'Équipement plaques blindées',
      'Vue atelier',
    ],
  },
}

export function useI18n() {
  function setLocale(locale: Locale) {
    currentLocale.value = locale
    document.documentElement.lang = locale === 'FR' ? 'fr' : 'zh-CN'
  }

  function toggleLocale() {
    setLocale(currentLocale.value === 'CN' ? 'FR' : 'CN')
  }

  function t(key: MessageKey) {
    return messages[currentLocale.value][key]
  }

  return {
    locale: currentLocale,
    setLocale,
    toggleLocale,
    t,
  }
}

export function useStaticLists() {
  return {
    techLayers: () => staticLists.techLayers[currentLocale.value],
    techFeatures: () => staticLists.techFeatures[currentLocale.value],
    managementSteps: () => staticLists.managementSteps[currentLocale.value],
    capabilities: () => staticLists.capabilities[currentLocale.value],
    scenarios: () => staticLists.scenarios[currentLocale.value],
    resources: () => staticLists.resources[currentLocale.value],
    factoryGalleryTitles: () => staticLists.factoryGallery[currentLocale.value],
  }
}

function productTranslation(product: ProductItem) {
  return currentLocale.value === 'FR' ? productTranslations[product.id] : undefined
}

function variantTranslation(product: ProductItem, variant: ProductVariant) {
  return productTranslation(product)?.variants[variant.id]
}

export function productName(product: ProductItem) {
  return productTranslation(product)?.name ?? product.nameZh
}

export function productSecondaryName(product: ProductItem) {
  return currentLocale.value === 'FR' ? product.nameZh : product.nameFr
}

export function productDescription(product: ProductItem) {
  return productTranslation(product)?.description ?? product.descriptionZh
}

export function productTags(product: ProductItem) {
  return productTranslation(product)?.tags ?? product.tags
}

export function productSpecs(product: ProductItem) {
  return productTranslation(product)?.specs ?? product.specs
}

export function productDetail(product: ProductItem) {
  return productTranslation(product)?.detail ?? product.detailZh
}

export function productApplications(product: ProductItem) {
  return productTranslation(product)?.applications ?? product.applications
}

export function variantName(product: ProductItem, variant: ProductVariant) {
  return variantTranslation(product, variant)?.name ?? variant.nameZh
}

export function variantSecondaryName(product: ProductItem, variant: ProductVariant) {
  return currentLocale.value === 'FR' ? variant.nameZh : variant.nameFr || product.nameFr
}

export function variantDescription(product: ProductItem, variant: ProductVariant) {
  return variantTranslation(product, variant)?.description ?? variant.descriptionZh
}

export function variantTags(product: ProductItem, variant: ProductVariant) {
  return variantTranslation(product, variant)?.tags ?? variant.tags
}
