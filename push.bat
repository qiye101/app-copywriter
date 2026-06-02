@echo off
REM 自动推送脚本 - 提交并推送到 GitHub

echo 🚀 AI 文案大师 - 自动推送脚本
echo ================================
echo.

REM 添加所有更改
echo 📝 添加所有更改...
git add .

REM 检查是否有更改
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo i 没有未提交的更改
    pause
    exit /b 0
)

REM 获取提交信息
set /p message="请输入提交信息："
if "%message%"=="" set message=自动更新

REM 提交
echo 💾 提交更改...
git commit -m "%message%"

REM 推送
echo 📤 推送到 GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ✅ 推送成功！
    echo 🔗 https://github.com/qiye101/app-copywriter
    echo.
    echo Netlify 会自动部署，约 1-2 分钟后网站更新
) else (
    echo.
    echo ❌ 推送失败
    echo 解决方法：
    echo 1. 使用 GitHub Desktop 推送
    echo 2. 或手动执行：git push
)

echo.
pause
