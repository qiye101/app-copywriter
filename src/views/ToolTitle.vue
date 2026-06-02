<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <div class="text-center mb-8">
      <div class="text-5xl mb-3">📝</div>
      <h1 class="text-3xl font-bold text-gray-900">公众号标题生成</h1>
      <p class="text-gray-500 mt-2">输入文章内容，一键生成 10 个爆款标题</p>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">文章主题/内容简介</label>
        <textarea
          v-model="form.topic"
          rows="4"
          placeholder="例如：本文介绍了 5 个提高工作效率的方法，包括时间管理、任务优先级..."
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition resize-none"
        ></textarea>
      </div>
      <button
        @click="generate"
        :disabled="loading || !form.topic"
        class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        <span v-if="loading">生成中...</span>
        <span v-else>📝 生成 10 个标题</span>
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="error" class="bg-red-50 rounded-2xl p-6 mb-6 border border-red-200">
      <p class="text-red-600">{{ error }}</p>
      <p class="text-red-500 text-sm mt-2">请检查 API Key 是否正确</p>
    </div>

    <div v-if="result.length > 0" class="bg-white rounded-2xl shadow-md p-6 mb-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-lg">生成结果</h3>
        <button @click="copyResult" class="text-sm text-green-600 hover:text-green-800 transition">
          {{ copied ? '✅ 已复制' : '📋 一键复制' }}
        </button>
      </div>
      <div class="space-y-2">
        <div
          v-for="(title, index) in result"
          :key="index"
          class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition cursor-pointer"
          @click="copySingle(title)"
        >
          <span class="text-green-600 font-bold min-w-[28px]">{{ index + 1 }}</span>
          <span class="text-gray-800">{{ title }}</span>
        </div>
      </div>
      <p class="text-gray-400 text-xs mt-3 text-center">点击任意标题可单独复制</p>
      <button @click="generate" :disabled="loading" class="mt-4 w-full border-2 border-green-600 text-green-600 py-2 rounded-xl font-medium hover:bg-green-50 transition">
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
const recommendedTools = TOOL_RECOMMENDATIONS.title

const form = ref({ topic: '' })
const loading = ref(false)
const result = ref([])
const copied = ref(false)
const error = ref('')

const generate = async () => {
  if (!form.value.topic) return
  loading.value = true
  result.value = []
  copied.value = false
  error.value = ''

  try {
    const prompt = `你是一个公众号爆款标题专家。请根据用户输入的文章内容，生成 10 个吸引人的标题。

要求：
1. 标题要有吸引力，使用数字、疑问句、感叹句等技巧
2. 符合公众号风格，能引起读者好奇心
3. 每个标题不超过 30 字
4. 直接输出 10 个标题，用换行分隔，不要序号

用户输入的文章内容：${form.value.topic}`

    const response = await generateCopy(prompt)
    // 将返回的文本按行分割成数组
    result.value = response.split('\n').filter(line => line.trim()).slice(0, 10)
  } catch (err) {
    error.value = `生成失败：${err.message}`
  } finally {
    loading.value = false
  }
}

const copySingle = (text) => {
  navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

const copyResult = () => {
  if (result.value.length === 0) return
  navigator.clipboard.writeText(result.value.map((t, i) => `${i + 1}. ${t}`).join('\n'))
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>
