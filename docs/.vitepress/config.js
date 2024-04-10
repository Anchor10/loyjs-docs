import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { description, repository, homepage } from '../../package.json';

import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	// lang: 'zh-CN',
	title: 'Loyjs知识库',
	description: description,
	head: [
		['link', { rel: 'icon', href: '/images/loy-logo.jpg' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
		['meta', { name: 'author', content: 'loyjs' }],
		['meta', { name: 'keywords', content: 'loyjs,loyjs知识库,loyjs文档,loyjs教程,loyjs博客,loyjs博客教程' }],
		['meta', { name: 'description', content: description }],
	],
	sitemap: {
		hostname: homepage
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: {
			src: '/images/loy-logo.jpg',
			width: 24,
			height: 24,
		},
		siteTitle: 'Loyjs',
		search: {
			provider: 'local'
		},
		nav: [
			{
				text: '前端知识库', items: [
					{
						text: 'HTML',
						link: '/前端知识库/0-HTML/0-HTML基础',
					},
					{
						text: 'CSS',
						link: '/前端知识库/1-CSS/0-CSS基础',
					},
					{
						text: 'Javascript',
						link: '/前端知识库/2-Javascript/0-Javascript基础',
					},
					{
						text: 'Vue',
						link: '/前端知识库/3-Vue/0-Vue基础',
					},
					{
						text: 'Vite',
						link: '/前端知识库/4-Vite/0-Vite基础',
					},
				]
			},
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
		],

		sidebar: generateSidebar([
			{
				scanStartPath: '备忘录',
				resolvePath: '/备忘录/',
				documentRootPath: '/docs',
				collapsed: false,
				useTitleFromFileHeading: true,
				useTitleFromFrontmatter: true,
				hyphenToSpace: true, //将文件名中包含的-符号转换为空格并显示为标题
				excludeFolders: [], // 排除的文件夹
				excludeFiles: [], // 排除的文件
			},
			{
				scanStartPath: '百宝箱',
				resolvePath: '/百宝箱/',
				documentRootPath: '/docs',
				collapsed: false,
				useTitleFromFileHeading: true,
				useTitleFromFrontmatter: true,
				hyphenToSpace: true, //将文件名中包含的-符号转换为空格并显示为标题
				excludeFolders: [], // 排除的文件夹
				excludeFiles: [], // 排除的文件
			},
			{
				scanStartPath: '前端知识库',
				resolvePath: '/前端知识库/',
				documentRootPath: '/docs',
				collapsed: false,
				useTitleFromFileHeading: true,
				useTitleFromFrontmatter: true,
				hyphenToSpace: true, //将文件名中包含的-符号转换为空格并显示为标题
				excludeFolders: [], // 排除的文件夹
				excludeFiles: [], // 排除的文件
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

		// 添加自定义样式文件
		css: {
			custom: '/theme/custom.css'
		},

		socialLinks: [{ icon: 'discord', link: 'https://home.loyjs.com' }, { icon: 'github', link: 'https://gitee.com/anchor10' }],
		footer: {
			message: '去做你害怕的事，去见你害怕的人，这就是成长。 ----末那大叔',
			copyright: 'Copyright © 2023-present By 觅兔先生'
		},
		darkModeSwitchLabel: '外观',
		returnToTopLabel: '返回顶部',
		lastUpdatedText: '上次更新',

		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		lastUpdated: true,
	},
	vite: {
		plugins: [MarkdownPreview()],
	},
});
