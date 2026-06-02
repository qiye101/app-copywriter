# Vercel 部署指南

## 方式一：用 Vercel 官网部署（推荐，最简单）

### 步骤：

1. **访问 Vercel**
   - 打开 https://vercel.com/
   - 点击「Sign Up」或「Log In」
   - 用 **GitHub 账号登录**（如果没有，先注册一个 GitHub 账号）

2. **授权 Gitee（可选）**
   - 登录后，进入 Settings → Git Integration
   - 添加 Gitee 集成（如果找不到，就用方式二）

3. **导入项目**
   - 点击「Add New Project」
   - 如果你能看到 Gitee 仓库，选择 `yanhongenGG/ai-copywriter`
   - 如果看不到，用方式二（CLI 部署）

4. **部署**
   - 保持默认配置
   - 点击「Deploy」
   - 等待 1-2 分钟，部署完成！

---

## 方式二：用 Vercel CLI 部署（如果方式一行不通）

### 步骤：

1. **登录 Vercel**
   ```bash
   vercel login
   ```
   - 选择用邮箱或 GitHub 登录
   - 按提示完成验证

2. **部署项目**
   ```bash
   cd "D:\桌面\AI 生成文件\ai-copywriter"
   vercel deploy --prod
   ```

3. **获取部署链接**
   - 部署完成后，会显示类似：
     ```
     https://ai-copywriter-xxx.vercel.app
     ```
   - 这就是你的网站地址！

---

## 方式三：手动部署（备用方案）

如果以上都不行，可以：

1. 访问 https://vercel.com/new
2. 手动上传项目文件
3. 或克隆仓库后部署

---

## 部署后配置

### 1. 更新域名

部署成功后，更新以下文件中的域名：

- `index.html` 中的结构化数据 URL
- `public/sitemap.xml` 中的 URL
- `README.md` 中的演示链接

### 2. 提交到搜索引擎

**百度收录：**
1. 访问 https://ziyuan.baidu.com/
2. 验证网站所有权
3. 提交 sitemap：`https://你的域名.com/sitemap.xml`

**Google 收录：**
1. 访问 https://search.google.com/search-console
2. 添加并验证网站
3. 提交 sitemap

---

## 自动部署

如果用方式一（官网部署），之后每次推送到 Gitee 会自动重新部署：

```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 会在 1-2 分钟内自动更新网站！

---

## 常见问题

**Q: Vercel 连不上 Gitee 怎么办？**
A: 用方式二（CLI 部署），不依赖 Gitee 集成。

**Q: 部署失败怎么办？**
A: 检查以下几点：
- 确保 `package.json` 中有 `build` 脚本
- 确保没有 `.env` 文件包含敏感信息
- 查看 Vercel 部署日志找错误原因

**Q: 部署后访问慢？**
A: Vercel 在国内访问可能稍慢，可以考虑：
- 使用 Cloudflare CDN
- 或部署到国内平台（见下方）

---

## 国内替代平台（如果 Vercel 访问困难）

### 1. 阿里云 Web+
- 访问 https://www.aliyun.com/product/webplus
- 支持一键部署

### 2. 腾讯云 CloudBase
- 访问 https://cloud.tencent.com/product/cloudbase
- 有免费额度

### 3. 华为云 CloudPage
- 访问 https://www.huaweicloud.com/product/cloudpage.html

### 4. Netlify（国际，但国内访问还可以）
- 访问 https://www.netlify.com/
- 部署方式类似 Vercel

---

**建议优先用 Vercel，如果访问困难再考虑国内平台。**
