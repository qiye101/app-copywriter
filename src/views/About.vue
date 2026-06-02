<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">关于 AI 文案大师</h1>
        <p class="text-gray-500">让写作更高效，让创作更简单</p>
      </div>

      <!-- 关于我们 -->
      <section class="bg-white rounded-2xl shadow-md p-8 mb-6">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">📖</span>
          <h2 class="text-2xl font-bold text-gray-900">关于我们</h2>
        </div>
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <strong class="text-purple-600">AI 文案大师</strong>是一款基于人工智能的文案生成工具，致力于为自媒体创作者、内容运营者提供高效、免费的文案生成服务。
          </p>
          <p>
            我们相信，AI 技术应该让每个人的创作变得更简单，而不是更复杂。因此，我们打造了这款零门槛的文案工具——无需注册、无需付费，输入主题即可一键生成高质量文案。
          </p>
          <p>
            目前支持生成：
          </p>
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>📕 <strong>小红书爆款文案</strong> - 带 emoji、分段清晰、风格贴合平台</li>
            <li>🎬 <strong>抖音口播脚本</strong> - 含开头钩子、正文内容、行动号召</li>
            <li>📝 <strong>公众号爆款标题</strong> - 一次生成 10 个，供你选择</li>
          </ul>
          <p>
            未来，我们还将持续增加更多实用工具，如朋友圈文案、电商产品描述、视频脚本等，敬请期待！
          </p>
        </div>
      </section>

      <!-- 使用帮助 -->
      <section class="bg-white rounded-2xl shadow-md p-8 mb-6">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">💡</span>
          <h2 class="text-2xl font-bold text-gray-900">使用帮助</h2>
        </div>
        <div class="space-y-6">
          <!-- 小红书文案 -->
          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span class="text-2xl">📕</span>
              小红书文案生成
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>在首页点击「小红书文案生成」</li>
              <li>输入你的产品或主题（如：防晒喷雾、夏日穿搭）</li>
              <li>选择文案风格（种草推荐/产品测评/教程分享/日常记录）</li>
              <li>选择语气（热情活泼/温柔亲切/专业干货）</li>
              <li>点击「一键生成文案」，3 秒即可看到结果</li>
              <li>点击「一键复制」，直接粘贴使用</li>
            </ol>
            <div class="mt-3 bg-purple-50 rounded-lg p-4 text-sm text-purple-700">
              💡 <strong>小技巧：</strong>生成的文案可以微调一下，加入自己的真实体验，会更自然哦！
            </div>
          </div>

          <!-- 抖音脚本 -->
          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span class="text-2xl">🎬</span>
              抖音脚本生成
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>在首页点击「抖音脚本生成」</li>
              <li>输入视频主题（如：3 个提高效率的 App）</li>
              <li>选择视频时长（30 秒/60 秒/90 秒）</li>
              <li>点击「生成口播脚本」</li>
              <li>生成的脚本包含开头钩子、正文内容、行动号召</li>
              <li>复制后直接用于拍摄</li>
            </ol>
          </div>

          <!-- 公众号标题 -->
          <div>
            <h3 class="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <span class="text-2xl">📝</span>
              公众号标题生成
            </h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>在首页点击「公众号标题生成」</li>
              <li>输入文章内容简介或主题</li>
              <li>点击「生成 10 个标题」</li>
              <li>从 10 个爆款标题中选择最合适的</li>
              <li>点击任意标题可单独复制</li>
            </ol>
          </div>

          <!-- 常见问题 -->
          <div class="mt-6">
            <h3 class="font-bold text-lg text-gray-900 mb-3">❓ 常见问题</h3>
            <div class="space-y-4">
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="font-medium text-gray-900 mb-2">Q: 生成的文案可以直接使用吗？</p>
                <p class="text-gray-700">A: 可以！但建议加入自己的真实体验和细节，会让内容更自然、更有说服力。</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="font-medium text-gray-900 mb-2">Q: 需要注册或登录吗？</p>
                <p class="text-gray-700">A: 不需要！所有功能完全免费，无需注册即可使用。</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="font-medium text-gray-900 mb-2">Q: 有使用次数限制吗？</p>
                <p class="text-gray-700">A: 目前没有次数限制，可以无限次使用。</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="font-medium text-gray-900 mb-2">Q: 生成的文案质量如何？</p>
                <p class="text-gray-700">A: 基于先进的大语言模型，文案质量较高，符合各平台风格。但建议人工审核后再发布。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系我们 -->
      <section class="bg-white rounded-2xl shadow-md p-8 mb-6">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-3xl">📬</span>
          <h2 class="text-2xl font-bold text-gray-900">联系我们</h2>
        </div>
        <div class="space-y-6">
          <p class="text-gray-700">
            如有任何问题、建议或合作意向，欢迎通过以下方式联系我们：
          </p>
          
          <!-- 联系方式 -->
          <div class="grid md:grid-cols-2 gap-4">
            <!-- 微信 -->
            <div class="bg-green-50 rounded-xl p-6 border border-green-200">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">💬</span>
                <h3 class="font-bold text-gray-900">微信</h3>
              </div>
              <p class="text-gray-600 text-sm mb-2">添加微信，获取一对一帮助</p>
              <div class="bg-white rounded-lg px-4 py-3 text-center">
                <p class="text-xl font-bold text-green-600 tracking-wider">19976999826</p>
              </div>
              <p class="text-xs text-gray-500 mt-2">点击复制微信号，添加时请备注「AI 文案」</p>
            </div>

            <!-- 邮箱 -->
            <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-3xl">📧</span>
                <h3 class="font-bold text-gray-900">邮箱</h3>
              </div>
              <p class="text-gray-600 text-sm mb-2">发送邮件，我们会尽快回复</p>
              <div class="bg-white rounded-lg px-4 py-3 text-center">
                <p class="text-lg font-bold text-blue-600 break-all">508937808@qq.com</p>
              </div>
              <p class="text-xs text-gray-500 mt-2">一般 24 小时内回复</p>
            </div>
          </div>

          <!-- 其他信息 -->
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="font-bold text-gray-900 mb-3">📍 其他信息</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span>工作时间：周一至周五 9:00-18:00</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span>响应时间：微信即时回复，邮箱 24 小时内</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span>合作咨询：欢迎商务合作、推广合作</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 返回首页 -->
      <div class="text-center mt-8">
        <router-link to="/" class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition">
          ← 返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 关于页面
</script>
