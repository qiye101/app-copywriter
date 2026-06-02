# 推送到 GitHub 并部署到 Vercel

## 方式一：用 GitHub Desktop（最简单）

### 步骤：

1. **下载 GitHub Desktop**
   - 访问：https://desktop.github.com/
   - 下载安装

2. **登录并添加项目**
   - 打开 GitHub Desktop
   - 登录你的 GitHub 账号
   - File → Add Local Repository
   - 选择 `D:\桌面\AI 生成文件\ai-copywriter`
   - 点击「Publish repository」

3. **完成！**
   - 代码会自动推送到 GitHub

---

## 方式二：手动推送（用 Git Bash）

### 步骤：

1. **打开 Git Bash**
   - 右键桌面 → Git Bash Here
   - 或在开始菜单搜 "Git Bash"

2. **进入项目目录**
   ```bash
   cd "D:/桌面/AI 生成文件/ai-copywriter"
   ```

3. **推送代码**
   ```bash
   git remote set-url origin https://github.com/qiye101/ai-copywriter.git
   git push -u origin main
   ```

4. **输入 GitHub 账号密码**
   - Username: 你的 GitHub 用户名
   - Password: 你的 GitHub Personal Access Token（不是登录密码）

**获取 Token：**
1. 访问 https://github.com/settings/tokens
2. 点击「Generate new token (classic)」
3. Note: 随便填
4. 勾选 `repo` 权限
5. 点击「Generate token」
6. 复制 token（只显示一次！）

---

## 方式三：直接在 GitHub 上传（备选）

如果以上都不行：

1. 访问 https://github.com/qiye101/ai-copywriter
2. 点击「uploading an existing file」
3. 把项目文件拖进去
4. 点击「Commit changes」

---

## 部署到 Vercel

代码推送到 GitHub 后：

1. **访问 Vercel**
   - https://vercel.com/new

2. **导入项目**
   - 用 GitHub 账号登录
   - 找到 `ai-copywriter` 仓库
   - 点击「Import」

3. **配置部署**
   - Framework Preset: `Vite`
   - Build Command: `pnpm build` 或 `npm run build`
   - Output Directory: `dist`
   - 点击「Deploy」

4. **等待完成**
   - 1-2 分钟后部署成功
   - 你会得到类似：`https://ai-copywriter.vercel.app`

---

## 推荐

**用方式一（GitHub Desktop）**，最简单，不用记命令！
