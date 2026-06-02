// CPS 推广链接配置
// 注册各平台推广计划后，把真实链接填到这里

export const CPS_LINKS = {
  // 智谱清言推广
  zhipu: {
    name: '智谱清言',
    description: '国产大模型，写作效率神器',
    url: 'https://open.bigmodel.cn/', // 替换成你的推广链接
    commission: '10%-30%',
    icon: '🤖',
  },
  // 文心一言推广
  wenxin: {
    name: '文心一言',
    description: '百度出品，多场景 AI 助手',
    url: 'https://cloud.baidu.com/', // 替换成你的推广链接
    commission: '15%-25%',
    icon: '🧠',
  },
  // 通义千问推广
  tongyi: {
    name: '通义千问',
    description: '阿里云大模型，全能型选手',
    url: 'https://help.aliyun.com/zh/dashscope/', // 替换成你的推广链接
    commission: '10%-20%',
    icon: '💡',
  },
  // 剪映推广（抖音脚本工具配套）
  jianying: {
    name: '剪映',
    description: '抖音官方剪辑工具，新手友好',
    url: 'https://www.capcut.cn/', // 替换成你的推广链接
    commission: 'CPS',
    icon: '🎬',
  },
  // 135 编辑器（公众号排版）
  editor135: {
    name: '135 编辑器',
    description: '公众号排版神器',
    url: 'https://www.135editor.com/', // 替换成你的推广链接
    commission: '20%-30%',
    icon: '📝',
  },
}

// 各工具页推荐的工具列表
export const TOOL_RECOMMENDATIONS = {
  xiaohongshu: ['zhipu', 'wenxin', 'tongyi'],
  douyin: ['jianying', 'zhipu'],
  title: ['editor135', 'wenxin'],
}
