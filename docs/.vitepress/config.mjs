import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'zh-CN',
	title: '觅兔知识库',
	description: '觅兔知识库站点',
	head: [
		['link', { rel: 'icon', href: '/public/images/loy-logo.jpg' }]
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: '/public/images/loy-logo.jpg',
		siteTitle: 'Loyjs',
		search: {
			provider: 'local'
		},
		nav: [
			{ text: '百宝箱', link: '/百宝箱/' },
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
						link: '/前端知识库/vue/vue示例',
					},
					{
						text: 'Css',
						link: '/前端知识库/css/css示例',
					}
				]
			},
		],

		sidebar: generateSidebar([
			{
				documentRootPath: '/docs',
				scanStartPath: '备忘录',
				resolvePath: '/备忘录/',
				useTitleFromFileHeading: true,
				hyphenToSpace: true, //将文件名中包含的-符号转换为空格并显示为标题
				excludeFolders: [], // 排除的文件夹
				excludeFiles: [], // 排除的文件
			},
			{
				documentRootPath: '/docs',
				scanStartPath: '百宝箱',
				resolvePath: '/百宝箱/',
				useTitleFromFileHeading: true,
				hyphenToSpace: true,
				excludeFolders: []
			},
			{
				documentRootPath: '/docs',
				scanStartPath: '前端知识库',
				resolvePath: '/前端知识库/',
				useTitleFromFileHeading: true,
				hyphenToSpace: true,
				excludeFolders: []
			}
		]),

		// sidebar: [
		// 	{
		// 		text: '备忘录',
		// 		items: [
		// 			{ text: '生日表', link: '/备忘录/生日表' },
		// 		],
		// 	},
		// 	{
		// 		text: '前端知识库',
		// 		collapsed: true,
		// 		items: [
		// 			{ text: 'javascript', link: '/前端知识库/javascript/JavaScript示例.md' },
		// 			{ text: 'vue', link: '/前端知识库/vue/vue示例' },
		// 			{ text: 'css', link: '/前端知识库/css/css示例' },
		// 		],
		// 	},
		// 	{
		// 		text: '百宝箱',
		// 		items: [
		// 			{ text: '朋友圈表情包', link: '/百宝箱/朋友圈表情包' },
		// 		],
		// 	},
		// ],

		socialLinks: [{ icon: 'discord', link: 'https://home.loyjs.com' }, { icon: 'github', link: 'https://gitee.com/anchor10' }],
		footer: {
			message: '去做你害怕的事，去见你害怕的人，这就是成长。 ----末那大叔',
			copyright: 'Copyright © 2023-present By 觅兔先生'
		}
	},
});
