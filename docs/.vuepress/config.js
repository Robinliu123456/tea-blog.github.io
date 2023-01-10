// 官方参数参考地址：https://vuepress-theme-reco.recoluan.com/views/1.x/blog.html
module.exports = {
  locales: { // 默认语言代码为 en-US
    '/': {
      lang: 'zh-CN' // 这里修改中文
    }
  },
  title: "掘金下午茶文章合集",
  description: "精选文章，下午茶，工作日陪伴，文章数据库", // meta 中的描述文字，用于SEO
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'keywords',
      content: '前端, 技术文章, 移动端, pc端, 数据库, 后端, 酱酱们的下午茶'
    }],
    [
      "link",
      {
        href: "./favicon.ico"
      },
    ],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/tea-blog/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  theme: 'reco',
  themeConfig: { // 博客配置
    logo: '/logo.png',
    // authorAvatar: '/avatar.png',
    noFoundPageByTencent: true, // 关闭 404 腾讯公益
    author: 'nanfangzhe.cn',
    modePicker: false, // 不显示模式调节按钮（true 显示）
    startYear: '2022',
    nav: [{
        text: "✍️总览",
        link: "/all.html",
        // icon: 'reco-blog'
      }, {
        text: '🕙时间分类',
        items: [{
            text: '2022年',
            link: '/categories/2022年/'
          },
          {
            text: '2023年',
            link: '/categories/2023年/'
          }
        ]
      },
      // { text: "关于我", link: "/about.html", icon: 'reco-account'},
      {
        text: "👣找到我",
        link: "https://juejin.cn/user/2819602825362840",
        // icon: 'reco-account'
        // icon: 'reco-juejin'
      },
      {
        text: "💌订阅",
        link: "https://juejin.cn/column/7107151273765371941",
        // icon: 'reco-rss'
      },
    ],
    displayAllHeaders: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2,
    // 博客配置
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: '🕙时间分类', // 默认文案 “分类”
      //   icon: 'iconfont icon-myIcon'
      // },
      // tag: {
      //   location: 3, // 在导航栏菜单中所占的位置，默认3
      //   text: '全部' // 默认文案 “标签”
      // },
      // socialLinks: [ // 信息栏展示社交信息
      //   {
      //     icon: 'reco-github',
      //     link: 'https://github.com/recoluan'
      //   },
      //   {
      //     icon: 'reco-npm',
      //     link: 'https://www.npmjs.com/~reco_luan'
      //   }
      // ]
    }
  }
};