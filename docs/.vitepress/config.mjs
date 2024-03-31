import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '觅兔文档',
	description: '觅兔文档站点',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: '首页', link: '/' },
			{ text: '示例', link: '/markdown-examples' },
			{
				text: '备忘录',
				items: [
					{
						text: '生日表',
						link: '/markdown-examples',
					},
				],
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

		socialLinks: [{ icon: 'question', link: 'https://home.loyjs.com' }],
	},
});
