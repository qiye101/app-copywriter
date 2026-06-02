<template>
  <div>
    <!-- Hero 区域 -->
    <section class="py-20 px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        AI 一键生成<span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">爆款文案</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        输入主题，3 秒生成小红书文案、抖音脚本、公众号标题<br/>自媒体人的效率神器，完全免费
      </p>
      <a href="#tools" class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:scale-105 transition">
        立即体验 →
      </a>
    </section>

    <!-- 工具卡片 -->
    <section id="tools" class="max-w-6xl mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">选择你的工具</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <!-- 小红书文案 -->
        <router-link to="/tool/xiaohongshu" class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 hover:border-purple-300">
          <div class="text-5xl mb-4">📕</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">小红书文案生成</h3>
          <p class="text-gray-500">输入主题，一键生成带 emoji 的爆款小红书文案</p>
          <div class="mt-4 text-purple-600 font-medium group-hover:translate-x-1 transition">
            立即使用 →
          </div>
        </router-link>

        <!-- 抖音脚本 -->
        <router-link to="/tool/douyin" class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 hover:border-pink-300">
          <div class="text-5xl mb-4">🎬</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition">抖音脚本生成</h3>
          <p class="text-gray-500">生成口播脚本，含开头钩子、正文、行动号召</p>
          <div class="mt-4 text-pink-600 font-medium group-hover:translate-x-1 transition">
            立即使用 →
          </div>
        </router-link>

        <!-- 公众号标题 -->
        <router-link to="/tool/title" class="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 hover:border-green-300">
          <div class="text-5xl mb-4">📝</div>
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">公众号标题生成</h3>
          <p class="text-gray-500">输入文章内容，生成 10 个爆款标题供你选择</p>
          <div class="mt-4 text-green-600 font-medium group-hover:translate-x-1 transition">
            立即使用 →
          </div>
        </router-link>
      </div>
    </section>

    <!-- 推荐工具区域（CPS） -->
    <section class="max-w-6xl mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">推荐工具</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="key in cpsKeys"
          :key="key"
          :href="cpsLinks[key].url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-5 border border-yellow-200 hover:shadow-md hover:border-yellow-300 transition block"
        >
          <div class="flex items-start gap-3">
            <span class="text-3xl">{{ cpsLinks[key].icon }}</span>
            <div class="flex-1">
              <h3 class="font-bold text-gray-900">{{ cpsLinks[key].name }}</h3>
              <p class="text-sm text-gray-600 mt-1">{{ cpsLinks[key].description }}</p>
              <p class="text-xs text-orange-600 mt-2 font-medium">佣金：{{ cpsLinks[key].commission }}</p>
            </div>
            <span class="text-gray-400 text-lg">→</span>
          </div>
        </a>
      </div>
      <p class="text-center text-gray-400 text-sm mt-4">
        💡 通过以上链接注册，我们可能获得佣金，你无需额外付费
      </p>
    </section>

    <!-- 特色介绍 -->
    <section class="max-w-6xl mx-auto px-4 pb-16">
      <h2 class="text-2xl font-bold text-center text-gray-900 mb-8">为什么选择我们</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center p-6">
          <div class="text-4xl mb-3">⚡</div>
          <h3 class="font-bold text-lg mb-2">3 秒出文案</h3>
          <p class="text-gray-500">基于大模型，输入主题即刻生成高质量文案</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-3">💰</div>
          <h3 class="font-bold text-lg mb-2">完全免费</h3>
          <p class="text-gray-500">所有基础功能免费使用，无次数限制</p>
        </div>
        <div class="text-center p-6">
          <div class="text-4xl mb-3">🎯</div>
          <h3 class="font-bold text-lg mb-2">平台定制</h3>
          <p class="text-gray-500">针对不同平台风格优化，文案更贴合平台调性</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { CPS_LINKS } from '../config/cps.js'

const cpsLinks = CPS_LINKS
const cpsKeys = Object.keys(CPS_LINKS)
</script>
