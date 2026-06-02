<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
    <!-- 导航栏 -->
    <nav class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-2">
          <span class="text-2xl">✨</span>
          <span class="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI文案大师
          </span>
        </router-link>
        <div class="flex gap-4">
          <router-link to="/" class="text-gray-600 hover:text-purple-600 transition">首页</router-link>
          <router-link to="/about" class="text-gray-600 hover:text-purple-600 transition">关于</router-link>
        </div>
      </div>
    </nav>

    <!-- 主内容区 -->
    <router-view />

    <!-- 底部 -->
    <footer class="bg-gray-900 text-gray-400 py-8 mt-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p class="mb-2">© 2026 AI文案大师 · 让写作更高效</p>
        <div class="flex justify-center gap-4 text-sm">
          <router-link to="/about" class="hover:text-white transition">关于我们</router-link>
          <span>·</span>
          <a href="#" class="hover:text-white transition">使用帮助</a>
          <span>·</span>
          <a href="#" class="hover:text-white transition">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>
