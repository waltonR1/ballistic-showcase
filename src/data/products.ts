export type ProductCategoryId =
  | 'vest'
  | 'helmet'
  | 'shield'
  | 'plate'
  | 'soft-insert'
  | 'blanket'
  | 'special-protection'

export interface ProductVariant {
  id: string
  nameZh: string
  nameFr?: string
  descriptionZh: string
  image: string
  gallery: string[]
  tags: string[]
  specs?: {
    label: string
    value: string
  }[]
}

export interface ProductItem {
  id: ProductCategoryId
  nameZh: string
  nameFr: string
  eyebrow: string
  descriptionZh: string
  image: string
  variants: ProductVariant[]
  tags: string[]
  specs: {
    label: string
    value: string
  }[]
  detailZh: string
  applications: string[]
}

export const products: ProductItem[] = [
  {
    id: 'vest',
    nameZh: '防弹背心',
    nameFr: 'Gilets pare-balles',
    eyebrow: 'PERSONAL ARMOUR',
    descriptionZh: '面向专业防护场景的个人弹道防护装备系列。',
    image: '/images/products/vest/警用防弹衣1正.jpg',
    variants: [
      {
        id: 'police-vest',
        nameZh: '警用防弹衣',
        nameFr: 'Gilet pare-balles police',
        descriptionZh: '适合执法、安防和机构采购场景的黑色警用款式。',
        image: '/images/products/vest/警用防弹衣1正.jpg',
        gallery: [
          '/images/products/vest/警用防弹衣1正.jpg',
          '/images/products/vest/警用防弹衣1反.jpg',
          '/images/products/vest/警用防弹衣2正.jpg',
          '/images/products/vest/警用防弹衣2反.jpg',
        ],
        tags: ['警用款', '执法安防', '黑色外观'],
      },
      {
        id: 'modular-vest',
        nameZh: '模块化防弹背心',
        nameFr: 'Gilet modulaire',
        descriptionZh: '可搭配插板或附件的模块化背心结构，适合专业防护配置。',
        image: '/images/products/vest/防弹背心2正.jpg',
        gallery: [
          '/images/products/vest/防弹背心1.jpg',
          '/images/products/vest/防弹背心2正.jpg',
          '/images/products/vest/防弹背心2反.jpg',
          '/images/products/vest/防弹背心3正.jpg',
          '/images/products/vest/防弹背心3反.jpg',
        ],
        tags: ['模块化', '可扩展', '专业配置'],
      },
      {
        id: 'tactical-vest',
        nameZh: '战术防弹衣',
        nameFr: 'Gilet tactique',
        descriptionZh: '偏战术配置的防护背心，可用于装备系统配套展示。',
        image: '/images/products/vest/防弹衣1正.jpg',
        gallery: [
          '/images/products/vest/防弹衣1正.jpg',
          '/images/products/vest/防弹衣1反.jpg',
          '/images/products/vest/防弹衣2正.jpg',
          '/images/products/vest/防弹衣2反.jpg',
          '/images/products/vest/防弹衣3.jpg',
          '/images/products/vest/防弹衣4.jpg',
        ],
        tags: ['战术款', '装备配套', '可定制'],
      },
      {
        id: 'discreet-vest',
        nameZh: '西服式防护马甲',
        nameFr: 'Gilet discret',
        descriptionZh: '外观更克制的防护马甲款式，适合低调防护需求沟通。',
        image: '/images/products/vest/西服式马甲正.jpg',
        gallery: [
          '/images/products/vest/西服式马甲正.jpg',
          '/images/products/vest/西服式马甲反.jpg',
        ],
        tags: ['低调防护', '马甲款', '商务场景'],
      },
      {
        id: 'full-protection-suit',
        nameZh: '全防服',
        nameFr: 'Ensemble de protection',
        descriptionZh: '覆盖范围更完整的防护服素材，适合特殊防护方案展示。',
        image: '/images/products/vest/全防服正.jpg',
        gallery: ['/images/products/vest/全防服正.jpg', '/images/products/vest/全防服反.jpg'],
        tags: ['全身防护', '特殊方案', '套装'],
      },
    ],
    tags: ['模块化结构', '个人防护', '可搭配插板'],
    specs: [
      { label: '类型', value: '软质 / 模块化防护' },
      { label: '用途', value: '专业安防 / 高风险场景' },
      { label: '资料', value: '可申请技术文件' },
    ],
    detailZh:
      '防弹背心适用于专业安防、执法支持及高风险环境中的个人防护需求。产品可根据客户需求进行不同结构、尺寸与防护配置的资料对接。',
    applications: ['专业安防', '机构采购', '高风险现场', '防护装备配套'],
  },
  {
    id: 'helmet',
    nameZh: '防弹头盔',
    nameFr: 'Casques balistiques',
    eyebrow: 'HEAD PROTECTION',
    descriptionZh: '用于头部防护的轻量化弹道防护装备系列。',
    image: '/images/products/helmet/FAST右.jpg',
    variants: [
      {
        id: 'fast-helmet',
        nameZh: 'FAST 头盔',
        nameFr: 'Casque FAST',
        descriptionZh: '带导轨和附件扩展特征的轻量化头盔款式。',
        image: '/images/products/helmet/FAST右.jpg',
        gallery: [
          '/images/products/helmet/FAST右.jpg',
          '/images/products/helmet/FAST正1.jpg',
          '/images/products/helmet/FAST正2.jpg',
          '/images/products/helmet/FAST侧.jpg',
        ],
        tags: ['FAST', '附件扩展', '轻量化'],
      },
      {
        id: 'mich-helmet',
        nameZh: 'MICH 头盔',
        nameFr: 'Casque MICH',
        descriptionZh: '经典中切结构，可用于专业任务和装备配套。',
        image: '/images/products/helmet/MICH正1.jpg',
        gallery: [
          '/images/products/helmet/MICH正1.jpg',
          '/images/products/helmet/MICH正2.jpg',
          '/images/products/helmet/MICH右.jpg',
          '/images/products/helmet/MICH侧.jpg',
        ],
        tags: ['MICH', '中切结构', '专业任务'],
      },
      {
        id: 'm88-helmet',
        nameZh: 'M88 头盔',
        nameFr: 'Casque M88',
        descriptionZh: '传统外形头盔款式，适合基础头部防护资料展示。',
        image: '/images/products/helmet/M88正.jpg',
        gallery: ['/images/products/helmet/M88正.jpg', '/images/products/helmet/M88侧.jpg'],
        tags: ['M88', '基础款', '头部防护'],
      },
      {
        id: 'pasgt-helmet',
        nameZh: 'PASGT 头盔',
        nameFr: 'Casque PASGT',
        descriptionZh: '经典 PASGT 外形，可用于不同采购偏好的产品对接。',
        image: '/images/products/helmet/PASGT正.jpg',
        gallery: ['/images/products/helmet/PASGT正.jpg', '/images/products/helmet/PASGT右.jpg'],
        tags: ['PASGT', '经典外形', '多场景'],
      },
    ],
    tags: ['头部防护', '轻量化', '专业装备'],
    specs: [
      { label: '类型', value: '头部弹道防护' },
      { label: '用途', value: '执法 / 安防 / 专业防护' },
      { label: '配置', value: '尺寸与附件可对接' },
    ],
    detailZh:
      '防弹头盔用于专业任务中的头部防护，可根据使用场景对接不同结构、重量、尺寸及附件配置方案。',
    applications: ['安防任务', '执法支持', '专业防护', '装备系统配套'],
  },
  {
    id: 'shield',
    nameZh: '防弹盾牌',
    nameFr: 'Boucliers balistiques',
    eyebrow: 'BALLISTIC SHIELDS',
    descriptionZh: '适用于正面防护与现场处置的硬质防护装备系列。',
    image: '/images/products/shield/防弹盾牌2反.jpg',
    variants: [
      {
        id: 'viewport-shield',
        nameZh: '观察窗防弹盾牌',
        nameFr: 'Bouclier avec fenêtre',
        descriptionZh: '带观察窗的盾牌款式，适合现场处置和正面防护展示。',
        image: '/images/products/shield/防弹盾牌2反.jpg',
        gallery: [
          '/images/products/shield/防弹盾牌2反.jpg',
          '/images/products/shield/防弹盾牌2正.jpg',
        ],
        tags: ['观察窗', '现场处置', '正面防护'],
      },
      {
        id: 'portable-shield',
        nameZh: '便携式防弹盾牌',
        nameFr: 'Bouclier portable',
        descriptionZh: '轮廓更紧凑的手持盾牌款式，适合机动防护需求。',
        image: '/images/products/shield/防弹盾牌1正.jpg',
        gallery: [
          '/images/products/shield/防弹盾牌1正.jpg',
          '/images/products/shield/防弹盾牌1反.jpg',
        ],
        tags: ['便携式', '手持', '机动防护'],
      },
    ],
    tags: ['正面防护', '现场处置', '硬质防护'],
    specs: [
      { label: '类型', value: '硬质正面防护' },
      { label: '用途', value: '现场处置 / 专业安防' },
      { label: '尺寸', value: '可根据需求对接' },
    ],
    detailZh: '防弹盾牌适用于需要正面防护的专业场景，可用于现场处置、安防任务及特殊防护需求。',
    applications: ['现场处置', '安防防护', '机构采购', '特殊任务'],
  },
  {
    id: 'plate',
    nameZh: '防弹插板',
    nameFr: 'Plaques balistiques',
    eyebrow: 'HARD ARMOUR PLATES',
    descriptionZh: '可搭配防弹背心使用的硬质防护组件系列。',
    image: '/images/products/plate/防PE+SiC.jpg',
    variants: [
      {
        id: 'pe-sic-plate',
        nameZh: 'PE + SiC 插板',
        nameFr: 'Plaque PE + SiC',
        descriptionZh: '复合材料插板款式，可用于较高防护配置资料对接。',
        image: '/images/products/plate/防PE+SiC.jpg',
        gallery: ['/images/products/plate/防PE+SiC.jpg'],
        tags: ['PE', 'SiC', '复合材料'],
      },
      {
        id: 'pe-alumina-plate',
        nameZh: 'PE + Al2O3 插板',
        nameFr: 'Plaque PE + Al2O3',
        descriptionZh: '陶瓷复合结构插板款式，适合不同配置方案展示。',
        image: '/images/products/plate/防PE+AIO.jpg',
        gallery: ['/images/products/plate/防PE+AIO.jpg', '/images/products/plate/防PE+AIO(1).jpg'],
        tags: ['PE', '陶瓷复合', '硬质防护'],
      },
      {
        id: 'pe-foam-plate',
        nameZh: 'PE + Foam 插板',
        nameFr: 'Plaque PE + mousse',
        descriptionZh: '带缓冲结构的插板款式，可用于重量和结构方案沟通。',
        image: '/images/products/plate/防PE+FOAM.jpg',
        gallery: ['/images/products/plate/防PE+FOAM.jpg'],
        tags: ['PE', '缓冲结构', '轻量配置'],
      },
      {
        id: 'standard-plate',
        nameZh: '标准硬质插板',
        nameFr: 'Plaque rigide standard',
        descriptionZh: '标准外形硬质插板，可作为个人防护系统升级组件。',
        image: '/images/products/plate/防弹插板正.jpg',
        gallery: [
          '/images/products/plate/防弹插板正.jpg',
          '/images/products/plate/防弹插板反.jpg',
          '/images/products/plate/防弹插板侧.jpg',
          '/images/products/plate/防弹插板.jpg',
        ],
        tags: ['标准款', '硬质插板', '背心配套'],
      },
    ],
    tags: ['硬质防护', '插板', '复合材料'],
    specs: [
      { label: '类型', value: '硬质防护组件' },
      { label: '搭配', value: '防弹背心 / 战术背心' },
      { label: '材料', value: '可按需求配置' },
    ],
    detailZh: '防弹插板可作为个人防护系统中的硬质防护模块，与防弹背心或其他装备配合使用。',
    applications: ['个人防护升级', '防护系统配套', '专业采购', '装备组合'],
  },
  {
    id: 'soft-insert',
    nameZh: '防弹芯片 / 软质防护组件',
    nameFr: 'Inserts balistiques souples',
    eyebrow: 'SOFT ARMOUR INSERTS',
    descriptionZh: '用于防弹背心、防护服及其他装备中的软质防护层系列。',
    image: '/images/products/soft-insert/软质防弹芯片HG2.jpg',
    variants: [
      {
        id: 'soft-insert-hg2',
        nameZh: 'HG2 软质防弹芯片',
        nameFr: 'Insert souple HG2',
        descriptionZh: '软质防护组件款式，可用于背心、防护服或定制装备。',
        image: '/images/products/soft-insert/软质防弹芯片HG2.jpg',
        gallery: ['/images/products/soft-insert/软质防弹芯片HG2.jpg'],
        tags: ['HG2', '软质防护', '内芯组件'],
      },
      {
        id: 'soft-insert-hg1',
        nameZh: 'HG1 软质防弹芯片',
        nameFr: 'Insert souple HG1',
        descriptionZh: '另一款软质防护芯片素材，适合不同配置方案对比展示。',
        image: '/images/products/soft-insert/软质防弹芯片HG1.jpg',
        gallery: [
          '/images/products/soft-insert/软质防弹芯片HG1.jpg',
          '/images/products/soft-insert/软质防弹芯片HG1(1).jpg',
        ],
        tags: ['HG1', '材料层', '可定制'],
      },
      {
        id: 'soft-insert-test',
        nameZh: '测试样片',
        nameFr: 'Échantillon de test',
        descriptionZh: '用于展示测试痕迹和材料样片状态，具体测试文件需另行提供。',
        image: '/images/products/soft-insert/软质防弹芯片测试.png',
        gallery: ['/images/products/soft-insert/软质防弹芯片测试.png'],
        tags: ['测试样片', '材料展示', '文件另供'],
      },
    ],
    tags: ['软质防护', '防护内芯', '材料组件'],
    specs: [
      { label: '类型', value: '软质防护组件' },
      { label: '用途', value: '背心 / 防护服 / 定制装备' },
      { label: '结构', value: '可按产品需求对接' },
    ],
    detailZh:
      '防弹芯片与软质防护组件可用于防弹背心、防护服及其他定制化装备中，适合作为防护系统的核心材料层。',
    applications: ['软质防护装备', '防弹背心内芯', '定制防护', '材料供应'],
  },
  {
    id: 'blanket',
    nameZh: '防弹毯',
    nameFr: 'Couvertures balistiques',
    eyebrow: 'BALLISTIC BLANKETS',
    descriptionZh: '用于临时覆盖、现场处置和特殊防护需求的柔性防护产品系列。',
    image: '/images/products/blanket/防弹毯正.jpg',
    variants: [
      {
        id: 'standard-blanket',
        nameZh: '标准防弹毯',
        nameFr: 'Couverture balistique standard',
        descriptionZh: '适合资料展示和临时防护场景沟通的柔性防护产品。',
        image: '/images/products/blanket/防弹毯正.jpg',
        gallery: [
          '/images/products/blanket/防弹毯正.jpg',
          '/images/products/blanket/防弹毯反.jpg',
          '/images/products/blanket/防弹毯.jpg',
        ],
        tags: ['柔性防护', '临时覆盖', '现场处置'],
      },
    ],
    tags: ['柔性防护', '临时覆盖', '特殊场景'],
    specs: [
      { label: '类型', value: '柔性防护组件' },
      { label: '用途', value: '现场处置 / 临时覆盖 / 特殊防护' },
      { label: '资料', value: '规格与等级按需对接' },
    ],
    detailZh:
      '防弹毯可用于临时覆盖、现场处置或特殊防护场景，具体尺寸、结构和防护等级需通过正式资料确认。',
    applications: ['现场处置', '临时防护', '机构采购', '特殊防护方案'],
  },
  {
    id: 'special-protection',
    nameZh: '特殊防护方案',
    nameFr: 'Solutions de protection spéciales',
    eyebrow: 'SPECIAL PROTECTION',
    descriptionZh: '面向车辆、设施或定制化场景的特殊防护材料与方案展示。',
    image: '/images/products/vehicle-armor/装甲板.jpg',
    variants: [
      {
        id: 'armor-plate',
        nameZh: '装甲板',
        nameFr: 'Plaque de blindage',
        descriptionZh: '可用于车辆、设施或定制防护项目沟通的板材素材。',
        image: '/images/products/vehicle-armor/装甲板.jpg',
        gallery: ['/images/products/vehicle-armor/装甲板.jpg'],
        tags: ['装甲板', '车辆防护', '定制项目'],
      },
      {
        id: 'pe-board',
        nameZh: 'PE 板',
        nameFr: 'Plaque PE',
        descriptionZh: 'PE 材料板材素材，可用于轻量化防护方案对接。',
        image: '/images/products/vehicle-armor/PE板.jpg',
        gallery: ['/images/products/vehicle-armor/PE板.jpg'],
        tags: ['PE 板', '轻量化', '材料方案'],
      },
      {
        id: 'ballistic-grille',
        nameZh: '防弹格栅',
        nameFr: 'Grille balistique',
        descriptionZh: '适合设施、窗口或特殊结构防护需求的格栅类素材。',
        image: '/images/products/grille/防弹格栅.jpg',
        gallery: ['/images/products/grille/防弹格栅.jpg'],
        tags: ['防弹格栅', '设施防护', '特殊结构'],
      },
    ],
    tags: ['车辆防护', '设施防护', '定制方案'],
    specs: [
      { label: '类型', value: '特殊防护材料 / 定制方案' },
      { label: '场景', value: '车辆 / 设施 / 特殊结构' },
      { label: '对接', value: '按项目需求提供资料' },
    ],
    detailZh:
      '特殊防护方案用于补充标准个人防护装备之外的项目型需求，包括车辆、设施、格栅或板材类防护素材。具体方案需根据项目场景、尺寸和技术要求确认。',
    applications: ['车辆防护', '设施防护', '项目型采购', '定制化防护'],
  },
]

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}

export function getProductVariant(seriesId: string, variantId: string) {
  const series = getProductById(seriesId)
  const variant = series?.variants.find((item) => item.id === variantId)

  if (!series || !variant) {
    return null
  }

  return {
    series,
    variant,
  }
}
