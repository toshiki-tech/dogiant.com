// Demo data — used while Sanity is not yet connected
export const demoPosts = [
  {
    _id: '1',
    title: '代码之外：为什么我开始记录身边的细节',
    slug: { current: 'recording-details' },
    publishedAt: '2026-03-21',
    excerpt: '写代码的人容易陷入一种幻觉——以为系统是可以被掌控的。但生活不是。所以我开始写一些什么都不能解决的文字。',
    tags: ['写作', '生活'],
  },
  {
    _id: '2',
    title: 'YomiMark 背后：让日语片假名阅读重拾“丝滑”',
    slug: { current: 'yomimark-v1-launch' },
    publishedAt: '2026-02-01',
    excerpt: '如何让日语的片假名瞬间变得易读？YomiMark 尝试通过本地运行的形态素解析与外来词智能追踪，给出一个极其轻量级的答案。',
    tags: ['开源', 'Chrome 插件', '日语'],
  },
  {
    _id: '3',
    title: 'YomiPlay 背后：一个小产品的诞生逻辑',
    slug: { current: 'yomiplay-idea' },
    publishedAt: '2026-03-12',
    excerpt: '日语学习工具太多了，但大多数在解释"怎么做"，而不是让你感受"做这件事的过程"。于是我想做一个解决自己痛点的工具。',
    tags: ['产品', 'YomiPlay', '日语'],
  },
]

export const demoProjects = [
  {
    _id: 'p1',
    name: 'YomiMark',
    description: '为网页汉字添加振假名，并智能识别标注外来词的英文原词。100%本地解析，保护隐私且极速响应。',
    link: 'https://www.toshiki.tech/zh/p/yomimark',
    featured: true,
  },
  {
    _id: 'p2',
    name: 'YomiPlay',
    description: '用音频字幕播放器的方式学习日语。沉浸式日语听读，影子跟读训练工具。',
    link: 'https://www.toshiki.tech/zh/p/yomiplay',
    featured: true,
  },
]
