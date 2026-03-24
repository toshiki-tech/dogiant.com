// Sanity Schema: Post
export default {
  name: 'post',
  title: '文章 / Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: '路径标识 (Slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: '发布日期',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: '摘要',
      type: 'text',
      rows: 3,
      description: '显示在文章列表中的一句话摘要',
    },
    {
      name: 'body',
      title: '正文',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: '正文', value: 'normal' },
            { title: '标题 H2', value: 'h2' },
            { title: '标题 H3', value: 'h3' },
            { title: '引用', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: '粗体', value: 'strong' },
              { title: '斜体', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: '链接',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: '图注',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt 文字',
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: '标签',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    // SEO
    {
      name: 'seoTitle',
      title: 'SEO 标题（可选，不填则使用文章标题）',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'seoDescription',
      title: 'SEO 描述（可选，不填则使用摘要）',
      type: 'text',
      rows: 2,
      group: 'seo',
    },
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
    },
    prepare({ title, date }) {
      const d = date ? new Date(date).toLocaleDateString('zh-CN') : '无日期'
      return { title, subtitle: d }
    },
  },
  orderings: [
    {
      title: '发布日期（最新优先）',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
}
