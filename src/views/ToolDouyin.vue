<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <div class="text-5xl mb-3">🎬</div>
      <h1 class="text-3xl font-bold text-gray-900">抖音脚本生成</h1>
      <p class="text-gray-500 mt-2">输入主题，生成包含开头钩子、正文、行动号召的完整口播脚本</p>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">视频主题</label>
        <input
          v-model="form.topic"
          type="text"
          placeholder="例如：3 个提高效率的 App、新手做自媒体..."
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">视频时长</label>
        <select v-model="form.duration" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition">
          <option value="30 秒">30 秒以内</option>
          <option value="60 秒">60 秒以内</option>
          <option value="90 秒">90 秒以内</option>
        </select>
      </div>
      <button
        @click="generate"
        :disabled="loading || !form.topic"
        class="w-full bg-gradient-to-r from-pink-600 to-red-600 text-white py-3 rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <span v-if="loading">生成中...</span>
        <span v-else>🎬 生成口播脚本</span>
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="bg-red-50 rounded-2xl p-6 mb-6 border border-red-200">
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-500 text-sm mt-2">请检查 API Key 是否正确</p>
    </div>

    <div v-if="result" class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">生成结果</h3>
        <button @click="copyResult" class="text-sm text-pink-600 hover:text-pink-800 transition">
          {{ copied ? '✅ 已复制' : '📋 一键复制' }}
        </button>
      </div>
      <div class="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-800 leading-relaxed">
        {{ result }}
      </div>
      <button @click="generate" :disabled="loading" class="mt-4 w-full border-2 border-pink-600 text-pink-600 py-2 rounded-xl font-medium hover:bg-pink-50 transition">
        🔄 重新生成
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
const recommendedTools = TOOL_RECOMMENDATIONS.douyin

const form = ref({ topic: '', duration: '60 秒' })
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
    const prompt = `你是一个抖音短视频脚本策划师。请根据用户输入的主题，生成一个口播脚本。

格式要求：
【开头钩子】（3 秒内抓住注意力）
【正文内容】（核心信息，分 2-3 段）
【行动号召】（引导点赞、关注、评论）

要求：口语化、有节奏感、适合${form.value.duration}视频

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
