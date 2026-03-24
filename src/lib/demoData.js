// Demo data — used while Sanity is not yet connected
export const demoPosts = [
  {
    _id: '1',
    title: '在东京的地铁上，我想到了时间的形状',
    slug: { current: 'time-on-tokyo-subway' },
    publishedAt: '2025-11-20',
    excerpt: '地铁里很安静。每个人都低着头，手机屏幕把脸照得发白。我突然想：这一刻，和一百年前的电车有什么不同？',
    tags: ['观察', '东京', '时间'],
  },
  {
    _id: '2',
    title: '代码之外：为什么我开始记录身边的细节',
    slug: { current: 'recording-details' },
    publishedAt: '2025-10-05',
    excerpt: '写代码的人容易陷入一种幻觉——以为系统是可以被掌控的。但生活不是。所以我开始写一些什么都不能解决的文字。',
    tags: ['写作', '生活'],
  },
  {
    _id: '3',
    title: 'YomiPlay 背后：一个小产品的诞生逻辑',
    slug: { current: 'yomiplay-idea' },
    publishedAt: '2025-09-12',
    excerpt: '日语学习工具太多了，但大多数在解释"怎么做"，而不是让你感受"做这件事的过程"。于是我想做一个不一样的。',
    tags: ['产品', 'YomiPlay', '日语'],
  },
]

export const demoProjects = [
  {
    _id: 'p1',
    name: 'YomiPlay',
    description: '用听音乐的方式学日语。沉浸式日语听读训练工具，支持字幕跟读与发音对比。',
    link: 'https://yomiplay.com',
    featured: true,
  },
  {
    _id: 'p2',
    name: 'dogiant.com',
    description: '这个网站本身。极简个人品牌站，承载文字与项目。',
    link: 'https://dogiant.com',
    featured: false,
  },
  {
    _id: 'p3',
    name: '东京观察笔记',
    description: '一份关于东京日常细节的非正式记录。偶尔更新。',
    link: '#',
    featured: false,
  },
]
