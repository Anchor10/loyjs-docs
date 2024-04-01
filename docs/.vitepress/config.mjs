import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'zh-CN',
	title: '觅兔知识库',
	description: '觅兔知识库站点',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/public/images/loy-logo.jpg',
		siteTitle: 'Loyjs',
		search: {
			provider: 'local'
		},
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '备忘录',
				items: [
					{
						text: '生日表',
						link: '/备忘录/生日表',
					},
				],
			},
			{
				text: '前端知识库', items: [
					{
						text: 'Vue',
						link: '/前端知识库/vue/vue示例.md',
					},
					{
						text: 'Css',
						link: '/前端知识库/css/css示例.md',
					}
				]
			},
		],

		sidebar: [
			{
				text: '备忘录',
				items: [
					{ text: '工作账号', link: '/markdown-examples' },
					{ text: '生活账号', link: '/api-examples' },
				],
			},
		],

		socialLinks: [{ title: '起始页', link: 'https://home.loyjs.com' }, { icon: 'github', link: 'https://gitee.com/anchor10' }],
	},
});
