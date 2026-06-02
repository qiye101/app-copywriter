# Netlify 部署指南

## 快速部署（3 步搞定）

### 第 1 步：登录 Netlify

在终端执行：

```bash
netlify login
```

浏览器会打开授权页面，用 GitHub 账号登录并授权。

### 第 2 步：部署网站

在终端执行：

```bash
cd "D:\桌面\AI 生成文件\ai-copywriter"
netlify deploy --prod --dir=dist
```

### 第 3 步：获取网站链接

部署完成后，会显示类似：

```
✔ Deploy successful!
Website: https://your-site-name.netlify.app
```

这就是你的网站地址！

---

## 首次部署需要配置

第一次部署时，Netlify 会问：

1. **Create & configure a new site?** → 选 `Yes`
2. **Choose your team** → 选你的团队（或个人）
3. **Site name?** → 输入网站名（例如 `ai-copywriter`）
4. **Build command** → 输入 `pnpm build` 或 `npm run build`
5. **Publish directory** → 输入 `dist`

之后每次部署只需要：

```bash
pnpm build
netlify deploy --prod --dir=dist
```

---

## 自动化部署（可选）

如果想实现推送代码自动部署：

1. 访问 https://app.netlify.com/
2. 进入你的项目
3. Site settings → Build & deploy → Continuous Deployment
4. 选择 Gitee 并授权
5. 配置：
   - Branch: `main`
   - Build command: `pnpm build`
   - Publish directory: `dist`

之后每次 `git push`，Netlify 会自动部署！

---

## 国内访问优化

Netlify 在国内访问速度还可以，如果想更快：

1. 在 Netlify 后台开启 CDN
2. 或绑定自己的域名 + 接入 Cloudflare CDN

---

## 部署后要做的事

1. **测试网站**：打开部署链接，测试所有功能
2. **更新配置**：把 `src/config/cps.js` 中的推广链接换成真实的
3. **提交收录**：
   - 百度：https://ziyuan.baidu.com/
   - Google：https://search.google.com/search-console

---

**祝你部署顺利！** 🚀
