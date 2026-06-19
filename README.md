# Ballistic Showcase

面向法国及欧洲专业客户的弹道防护装备展示与资料对接网站。项目用于展示防弹背心、头盔、盾牌、插板及相关防护组件，同时说明制造支持、技术资料申请和商务沟通流程。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vue Router
- GSAP
- Lenis

## 页面结构

- `/`：首页，包含 hero、核心防护品类、制造支持、材料与防护技术、法国销售管理和联系咨询区块。
- `/products`：产品目录入口。
- `/products/:seriesId`：产品系列页，进入具体防护品类。
- `/products/:seriesId/:variantId`：具体产品详情页，展示多张产品图、基础信息和资料说明。
- `/scenarios`：防护方案与应用场景。
- `/resources`：技术资料与文件申请说明。
- `/manufacturing`：制造能力页，包含制造支持说明和完整工厂图片展示。
- `/contact`：联系咨询页，当前表单为页面展示占位。

## 资源目录

- `public/images/products`：产品图片，按英文目录归类，图片文件名可保留中文。
- `public/images/factory`：工厂、设备与生产现场图片。
- `public/favicon.ico`：站点 favicon 与 header logo 来源。

## 开发命令

安装依赖：

```sh
npm install
```

启动开发服务器：

```sh
npm run dev
```

类型检查并构建生产版本：

```sh
npm run build
```

预览构建结果：

```sh
npm run preview
```

代码检查：

```sh
npm run lint
```

格式化源码：

```sh
npm run format
```

## 环境变量

可选配置：

```sh
VITE_CDN_BASE_URL=https://example.com
```

设置后，`src/utils/asset.ts` 会为本地资源路径追加 CDN 前缀；未设置时默认使用站点本地 `public` 资源。

## 内容维护

- 产品数据集中维护在 `src/data/products.ts`。
- 页面路由维护在 `src/router/index.ts`。
- 首页主要区块位于 `src/components/home`。
- 独立页面位于 `src/views`。
