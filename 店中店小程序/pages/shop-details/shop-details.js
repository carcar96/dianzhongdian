import menus from '../../utils/menus.js'
Page({
  data: {
    showView: false,
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    text: "Page main",
    tempFilePaths:'',
    background: [
      {
        color: 'green',
        sort: 1
      },
      {
        color: 'red',
        sort: 2
      },
      {
        color: 'yellow',
        sort: 3
      }
    ],
    crat_list:[{

      url:'../../img/item2.jpg',
      title:'石锅鱼',
      pice:'88'
    },
      {

        url: '../../img/item2.jpg',
        title: '石锅鱼',
        pice: '88'
      }
    ],
     indicatorDots: true,
     vertical: false,
      autoplay: false,
    interval: 3000,
    duration: 1200,
    toView: 'blue',
    'menus': menus,
   selectedMenuId: 1,
     total: {
     count: 0,
      money: 0
    },
     evaluate: [{
       url: '../../img/item.jpg',
       name: '符号',
       time: '刚刚',
       text: '评论内容评论内容评论内容评论内容评论内容评论评论内容评论容评论内容'
     },
     {
       url: '../../img/item.jpg',
       name: '符号',
       time: '37分钟前',
       text: '评论内容评论内容评论内容评论内容评论内容评论评论内容评论容评论内容'
     }
     ],
  },
  //切换隐藏
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  }, 
  selectMenu: function (event) {
    let data = event.currentTarget.dataset
    this.setData({
      toView: data.tag,
      selectedMenuId: data.id
    })
    // this.data.toView = 'red'
  },
  addCount: function (event) {
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == data.cid
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == data.id
    })
    dish.count += 1;
    total.count += 1
    total.money += dish.price
    this.setData({
      'menus': menus,
      'total': total
    })
    console.log(this.data.menus)
  },
  minusCount: function (event) {
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == data.cid
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == data.id
    })
    if (dish.count <= 0)
      return
    dish.count -= 1;
    total.count -= 1
    total.money -= dish.price
    this.setData({
      'menus': menus,
      'total': total
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onScroll: function (e) {
    console.log(e)
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})