var app = getApp()
Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: '../../img/banner1.jpg'
      }, {
        link: '/pages/logs/logs',
        url: '../../img/banner2.jpg'
      }, {
        link: '/pages/test/test',
        url: '../../img/banner3.jpg'
      },
      {
        link: '/pages/test/test',
        url: '../../img/banner4.jpg'
      },
    ],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    list:[{
      title:'法喜寺烘培',
      cost:'起送费￥0 / 配送￥0',
      index:'首',
      discount:'新客立减10元',
      business:'营业中',
      rice:'距您10千米',
      url:'../../img/item.jpg',
      link: '/pages/test/test',
    },
      {
        title: '法喜寺烘培',
        cost: '起送费￥0 / 配送￥0',
        index: '首',
        discount: '新客立减10元',
        business: '营业中',
        rice: '距您10千米',
        url: '../../img/item.jpg',
        link: '/pages/test/test',
      },
      {
        title: '法喜寺烘培',
        cost: '起送费￥0 / 配送￥0',
        index: '首',
        discount: '新客立减10元',
        business: '营业中',
        rice: '距您10千米',
        url: '../../img/item.jpg',
        link: '/pages/test/test',
      },
      {
        title: '法喜寺烘培',
        cost: '起送费￥0 / 配送￥0',
        index: '首',
        discount: '新客立减10元',
        business: '营业中',
        rice: '距您10千米',
        url: '../../img/item.jpg',
        link: '/pages/test/test',
      }
    ],
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }  
})  