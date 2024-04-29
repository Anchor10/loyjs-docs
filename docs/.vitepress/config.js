import { defineConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { description, repository, homepage } from '../../package.json';

import MarkdownPreview from 'vite-plugin-markdown-preview'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'zh-CN',
	// 设置algolia搜索支持中文
	algolia: {
		facetFilters: ['lang:zh-CN']
	},
	title: 'Loyjs知识库',
	titleTemplate: 'loyjs知识库',
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
		docsBranch: 'master',
		// 设置搜索框的样式
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						noResultsText: "无法找到相关结果",
						resetButtonTitle: "清除查询条件",
						footer: {
							selectText: "选择",
							navigateText: "切换",
							closeText: '关闭',
						},
					},
				},
			},
		},
		markdown: {
			container: {
				tipLabel: '提示',
				warningLabel: '警告',
				dangerLabel: '危险',
				infoLabel: '信息',
				detailsLabel: '详细信息'
			}
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
		aside: 'true',

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

		socialLinks: [{
			icon: {
				svg: '<svg t="1712563369533" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5180" width="128" height="128"><path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z" p-id="5181"></path></svg>'
			}, link: 'https://home.loyjs.com'
		}, { icon: 'github', link: 'https://gitee.com/anchor10' }],
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
		// carbonAds: {
		// 	code: 'your-carbon-code',
		// 	placement: 'your-carbon-placement'
		// }
	},
	vite: {
		plugins: [MarkdownPreview()],
	},
});
