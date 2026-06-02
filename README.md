# AI 文案大师 🚀

一个基于 AI 的文案生成工具，帮助自媒体创作者快速生成小红书文案、抖音脚本、公众号标题。

**在线演示：** https://your-domain.com

---

## ✨ 功能特性

- 📕 **小红书文案生成** - 输入主题，一键生成带 emoji 的爆款文案
- 🎬 **抖音脚本生成** - 生成包含开头钩子、正文、行动号召的完整脚本
- 📝 **公众号标题生成** - 输入文章内容，生成 10 个爆款标题
- 💰 **完全免费** - 所有基础功能免费使用
- 🎯 **平台定制** - 针对不同平台风格优化

---

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
# 或 npm install
```

### 2. 配置 API Key

编辑 `src/config.js`，填入你的智谱 API Key：

```javascript
export const ZHIPU_CONFIG = {
  apiKey: '你的_API_KEY',
  model: 'glm-4-flash',
  baseURL: 'https://open.bigmodel.cn/api/paas/v4',
}
```

**获取 API Key：** https://open.bigmodel.cn/

### 3. 启动开发服务器

```bash
pnpm dev
# 或 npm run dev
```

浏览器打开：http://localhost:5173

---

## 📦 部署上线

详见 [DEPLOY.md](./DEPLOY.md)

**一键部署到 Vercel：**

1. 将代码推送到 GitHub
2. 在 Vercel 导入仓库
3. 点击 Deploy

---

## 💰 变现方式

### CPS 推广

编辑 `src/config/cps.js`，填入你的推广链接：

```javascript
export const CPS_LINKS = {
  zhipu: {
    name: '智谱清言',
    url: '你的推广链接', // ← 替换
    commission: '10%-30%',
  },
  // ... 其他产品
}
```

**推荐平台：**
- 智谱清言：https://open.bigmodel.cn/
- 文心一言：https://cloud.baidu.com/
- 剪映：https://www.capcut.cn/
- 135 编辑器：https://www.135editor.com/

### 广告联盟

流量稳定后可接入：
- Google AdSense
- 百度联盟
- 其他广告平台

---

## 📁 项目结构

```
ai-copywriter/
├── src/
│   ├── config/
│   │   └── cps.js          # CPS 推广配置
│   ├── utils/
│   │   └── api.js          # API 调用封装
│   ├── views/
│   │   ├── Home.vue        # 首页
│   │   ├── ToolXiaohongshu.vue  # 小红书工具
│   │   ├── ToolDouyin.vue       # 抖音工具
│   │   ├── ToolTitle.vue        # 公众号标题工具
│   │   └── About.vue       # 关于页
│   ├── App.vue
│   ├── main.js
│   └── config.js           # API 配置
├── public/
│   ├── favicon.svg
│   └── sitemap.xml         # SEO sitemap
├── index.html              # SEO 优化后的 HTML
├── package.json
├── vite.config.js
└── README.md
```

---

## 📈 下一步计划

- [ ] 添加用户登录/注册系统
- [ ] 历史记录功能（localStorage → 数据库）
- [ ] 会员付费功能
- [ ] 更多文案模板
- [ ] 移动端 App

---

## 📄 License

MIT

---

**祝你赚钱顺利！** 💰
