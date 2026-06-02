<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <!-- 工具标题 -->
    <div class="text-center mb-8">
      <div class="text-5xl mb-3">📕</div>
      <h1 class="text-3xl font-bold text-gray-900">小红书文案生成</h1>
      <p class="text-gray-500 mt-2">输入产品或主题，一键生成爆款小红书文案</p>
    </div>

    <!-- 输入区 -->
    <div class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">主题/产品</label>
        <input
          v-model="form.topic"
          type="text"
          placeholder="例如：防晒喷雾、夏日穿搭、减肥食谱..."
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">风格</label>
        <select
          v-model="form.style"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
        >
          <option value="种草">种草推荐</option>
          <option value="测评">产品测评</option>
          <option value="教程">教程分享</option>
          <option value="日常">日常记录</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">语气</label>
        <select
          v-model="form.tone"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
        >
          <option value="热情">热情活泼</option>
          <option value="温柔">温柔亲切</option>
          <option value="专业">专业干货</option>
        </select>
      </div>
      <button
        @click="generate"
        :disabled="loading || !form.topic"
        class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <span v-if="loading">生成中...</span>
        <span v-else>✨ 一键生成文案</span>
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="bg-red-50 rounded-2xl p-6 mb-6 border border-red-200">
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-500 text-sm mt-2">请检查 API Key 是否正确，或联系管理员</p>
    </div>

    <!-- 结果区 -->
    <div v-if="result" class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">生成结果</h3>
        <button
          @click="copyResult"
          class="text-sm text-purple-600 hover:text-purple-800 transition"
        >
          {{ copied ? '✅ 已复制' : '📋 一键复制' }}
        </button>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-800 leading-relaxed">
        {{ result }}
      </div>
      <button
        @click="generate"
        :disabled="loading"
        class="mt-4 w-full border-2 border-purple-600 text-purple-600 py-2 rounded-xl font-medium hover:bg-purple-50 transition"
      >
        🔄 换风格再生成一次
      </button>
    </div>

    <!-- CPS 推荐区 -->
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
      <h3 class="font-bold text-gray-900 mb-4 text-center">🔥 搭配这些工具，效率翻倍</h3>
      <div class="grid gap-3">
        <a
          v-for="key in recommendedTools"
          :key="key"
          :href="cpsLinks[key].url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-lg p-3 flex items-center gap-3 hover:shadow-md transition"
        >
          <span class="text-2xl">{{ cpsLinks[key].icon }}</span>
          <div class="flex-1">
            <p class="font-medium text-gray-900 text-sm">{{ cpsLinks[key].name }}</p>
            <p class="text-xs text-gray-500">{{ cpsLinks[key].description }}</p>
          </div>
          <span class="text-orange-600 text-sm">→</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { generateCopy } from '../utils/api.js'
import { CPS_LINKS, TOOL_RECOMMENDATIONS } from '../config/cps.js'

const cpsLinks = CPS_LINKS
const recommendedTools = TOOL_RECOMMENDATIONS.xiaohongshu

const form = ref({
  topic: '',
  style: '种草',
  tone: '热情',
})

const loading = ref(false)
const result = ref('')
const copied = ref(false)
const error = ref('')

const generate = async () => {
  if (!form.value.topic) return
  loading.value = true
  result.value = ''
  copied.value = false
  error.value = ''

  try {
    const prompt = `你是一个小红书爆款文案写手。请根据用户输入的主题，生成一篇小红书风格文案。

要求：
1. 标题要吸引眼球，用数字、疑问句或感叹句
2. 正文多用 emoji，分段清晰
3. 语气要${form.value.tone}，像朋友分享
4. 风格是${form.value.style}类型
5. 结尾加相关 hashtag
6. 字数 200-500 字

用户输入的主题：${form.value.topic}`

    result.value = await generateCopy(prompt)
  } catch (err) {
    error.value = `生成失败：${err.message}`
  } finally {
    loading.value = false
  }
}

const copyResult = () => {
  if (!result.value) return
  navigator.clipboard.writeText(result.value)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
