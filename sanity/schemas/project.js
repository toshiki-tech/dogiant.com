// Sanity Schema: Project
export default {
  name: 'project',
  title: '项目 / Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '项目名称',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: '一句话描述',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'link',
      title: '项目链接',
      type: 'url',
    },
    {
      name: 'featured',
      title: '是否推荐展示',
      type: 'boolean',
      description: '开启后显示在重点项目区域',
      initialValue: false,
    },
    {
      name: 'status',
      title: '状态',
      type: 'string',
      options: {
        list: [
          { title: '进行中', value: 'active' },
          { title: '已完成', value: 'completed' },
          { title: '实验', value: 'experiment' },
          { title: '暂停', value: 'paused' },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
    },
    {
      name: 'tags',
      title: '技术标签',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      featured: 'featured',
    },
    prepare({ title, subtitle, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle,
      }
    },
  },
}
