# 部署指南 - 上线到 Vercel

## 第一步：准备 GitHub 仓库

1. 在 GitHub 创建新仓库（例如 `ai-copywriter`）
2. 在项目根目录初始化 git：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. 关联远程仓库并推送：
   ```bash
   git remote add origin https://github.com/你的用户名/ai-copywriter.git
   git branch -M main
   git push -u origin main
   ```

## 第二步：部署到 Vercel

1. 访问 https://vercel.com/
2. 用 GitHub 账号登录
3. 点击「Add New Project」
4. 选择你的 `ai-copywriter` 仓库
5. 保持默认配置，点击「Deploy」
6. 等待部署完成（约 1-2 分钟）

## 第三步：绑定自定义域名（可选）

1. 在 Vercel 项目设置 → Domains
2. 添加你的域名（例如 `aicopywriter.com`）
3. 按提示配置 DNS：
   - 添加 CNAME 记录指向 `cname.vercel-dns.com`
4. 等待 DNS 生效（通常几分钟到几小时）

## 第四步：更新配置

部署成功后：

1. 在 Vercel 项目设置 → Environment Variables
2. 添加环境变量（如果需要）：
   - `VITE_ZHIPU_API_KEY` = 你的 API Key
3. 更新 `src/config/cps.js` 中的推广链接
4. 更新 `index.html` 和 `sitemap.xml` 中的域名

## 第五步：提交到搜索引擎

### 百度收录
1. 访问 https://ziyuan.baidu.com/
2. 注册并验证网站所有权
3. 提交 sitemap：`https://your-domain.com/sitemap.xml`

### Google 收录
1. 访问 https://search.google.com/search-console
2. 添加并验证网站
3. 提交 sitemap

## 自动部署

之后每次推送到 GitHub，Vercel 会自动重新部署：
```bash
git add .
git commit -m "更新内容"
git push
```

大约 1-2 分钟后，你的网站就会自动更新！
