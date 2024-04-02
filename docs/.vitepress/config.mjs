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
					{ text: '生日表', link: '/备忘录/生日表.md' },
				],
			},
			{
				text: '前端知识库',
				items: [
					{ text: 'javascript', link: '/前端知识库/javascript/JavaScript示例.md' },
					{ text: 'vue', link: '/前端知识库/vue/vue示例.md' },
					{ text: 'css', link: '/前端知识库/css/css示例.md' },
				],
			},
		],

		socialLinks: [{ title: '起始页', link: 'https://home.loyjs.com' }, { icon: 'github', link: 'https://gitee.com/anchor10' }],
		footer: {
			message: '去做你害怕的事，去见你害怕的人，这就是成长。 ----末那大叔',
			copyright: 'Copyright © 2023-present By 觅兔先生'
		}
	},
});
