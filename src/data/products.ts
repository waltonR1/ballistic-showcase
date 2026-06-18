export type ProductCategoryId = 'vest' | 'helmet' | 'shield' | 'plate' | 'soft-insert'

export interface ProductItem {
  id: ProductCategoryId
  nameZh: string
  nameFr: string
  eyebrow: string
  descriptionZh: string
  image: string
  gallery: string[]
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
    descriptionZh: '面向专业防护场景的个人弹道防护装备。',
    image: '/images/products/vest/警用防弹衣1正.jpg',
    gallery: [
      '/images/products/vest/警用防弹衣1正.jpg',
      '/images/products/vest/防弹背心2正.jpg',
      '/images/products/vest/防弹衣1正.jpg',
      '/images/products/vest/防弹衣2正.jpg',
      '/images/products/vest/防弹衣3.jpg',
      '/images/products/vest/防弹衣4.jpg',
      '/images/products/vest/防弹背心1.jpg',
      '/images/products/vest/防弹背心2反.jpg',
      '/images/products/vest/防弹背心3正.jpg',
      '/images/products/vest/防弹背心3反.jpg',
      '/images/products/vest/警用防弹衣1反.jpg',
      '/images/products/vest/警用防弹衣2正.jpg',
      '/images/products/vest/警用防弹衣2反.jpg',
      '/images/products/vest/西服式马甲正.jpg',
      '/images/products/vest/西服式马甲反.jpg',
      '/images/products/vest/全防服正.jpg',
      '/images/products/vest/全防服反.jpg',
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
    descriptionZh: '用于头部防护的轻量化弹道防护装备。',
    image: '/images/products/helmet/FAST右.jpg',
    gallery: [
      '/images/products/helmet/FAST右.jpg',
      '/images/products/helmet/FAST正1.jpg',
      '/images/products/helmet/FAST正2.jpg',
      '/images/products/helmet/FAST侧.jpg',
      '/images/products/helmet/MICH右.jpg',
      '/images/products/helmet/MICH正1.jpg',
      '/images/products/helmet/MICH正2.jpg',
      '/images/products/helmet/MICH侧.jpg',
      '/images/products/helmet/M88正.jpg',
      '/images/products/helmet/M88侧.jpg',
      '/images/products/helmet/PASGT正.jpg',
      '/images/products/helmet/PASGT右.jpg',
      '/images/products/helmet/白头盔正.jpg',
      '/images/products/helmet/白头盔侧.jpg',
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
    descriptionZh: '适用于正面防护与现场处置的防护装备。',
    image: '/images/products/shield/防弹盾牌2反.jpg',
    gallery: [
      '/images/products/shield/防弹盾牌2反.jpg',
      '/images/products/shield/防弹盾牌2正.jpg',
      '/images/products/shield/防弹盾牌1正.jpg',
      '/images/products/shield/防弹盾牌1反.jpg',
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
    descriptionZh: '可搭配防弹背心使用的硬质防护组件。',
    image: '/images/products/plate/防PE+SiC.jpg',
    gallery: [
      '/images/products/plate/防PE+SiC.jpg',
      '/images/products/plate/防PE+AIO.jpg',
      '/images/products/plate/防PE+AIO(1).jpg',
      '/images/products/plate/防PE+FOAM.jpg',
      '/images/products/plate/防弹插板正.jpg',
      '/images/products/plate/防弹插板反.jpg',
      '/images/products/plate/防弹插板侧.jpg',
      '/images/products/plate/防弹插板.jpg',
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
    descriptionZh: '用于防弹背心、防护服及其他装备中的软质防护层。',
    image: '/images/products/soft-insert/软质防弹芯片HG2.jpg',
    gallery: [
      '/images/products/soft-insert/软质防弹芯片HG2.jpg',
      '/images/products/soft-insert/软质防弹芯片HG1.jpg',
      '/images/products/soft-insert/软质防弹芯片HG1(1).jpg',
      '/images/products/soft-insert/软质防弹芯片测试.png',
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
]

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}
