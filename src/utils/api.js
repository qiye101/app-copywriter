import { ZHIPU_CONFIG } from '../config.js'

/**
 * 调用智谱 AI API 生成文案
 * @param {string} prompt - Prompt 内容
 * @returns {Promise<string>} - 生成的文案
 */
export async function generateCopy(prompt) {
  try {
    const response = await fetch(`${ZHIPU_CONFIG.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ZHIPU_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        model: ZHIPU_CONFIG.model,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 1000,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'API 请求失败')
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('API 调用失败:', error)
    throw error
  }
}
