// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '点云',
    link: '/PointCloud/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '学习笔记',
      //   items: [
      //     { text: '《JavaScript教程》', link: '/note/javascript/' },
      //     { text: '《JavaScript高级程序设计》', link: '/note/js/' },
      //   ],
      // },
    ],
  },
  {
    text: '图像',
    link: '/Photo/',
    // items: [
    //   { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
    //   { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
    // ],
  },
  {
    text: '论文',
    link: '/Paper/',
    // items: [
    //   { text: '友情链接', link: '/friends/' },
    // ],
  },
  {
    text: '收藏夹',
    link: '/follow/',
    // items: [
    //   { text: '友情链接', link: '/friends/' },
    // ],
  },
  // { text: '关于', link: '/about/' },
  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  //   // items: [
  //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  //   // ],
  // },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
