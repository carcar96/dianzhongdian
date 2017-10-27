// pages/item-details/item-details.js
Page({


  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    order: [{
      num:'181817171878',
      time:'2017-07-01 14:00',
      url:'../../img/item3.jpg',
      title:'文艺复古系列豹纹眼眶',
      text:'琥珀色',
      distance:'56cm',
      price:'99.00',
      del:'138.00',
      num_b:'1'
    },
      {
        num: '181817171878',
        time: '2017-07-01 14:00',
        url: '../../img/item3.jpg',
        title: '文艺复古系列豹纹眼眶',
        text: '琥珀色',
        distance: '56cm',
        price: '99.00',
        del: '138.00',
        num_b: '1'
      }],
    consu: [{
      num: '181817171878',
      time: '2017-07-01 14:00',
      url: '../../img/item3.jpg',
      title: '文艺复古系列豹纹眼眶',
      text: '琥珀色',
      distance: '56cm',
      price: '99.00',
      del: '138.00',
      num_b: '1'
    },
    {
      num: '181817171878',
      time: '2017-07-01 14:00',
      url: '../../img/item3.jpg',
      title: '文艺复古系列豹纹眼眶',
      text: '琥珀色',
      distance: '56cm',
      price: '99.00',
      del: '138.00',
      num_b: '1'
    }],
    receipt: [{
      num: '181817171878',
      time: '2017-07-01 14:00',
      url: '../../img/item3.jpg',
      title: '文艺复古系列豹纹眼眶',
      text: '琥珀色',
      distance: '56cm',
      price: '99.00',
      del: '138.00',
      num_b: '1',
      mode:'圆通速递',
      numbers:'8881888'
    },
    ],
    deliver: [{
      num: '181817171878',
      time: '2017-07-01 14:00',
      url: '../../img/item3.jpg',
      title: '文艺复古系列豹纹眼眶',
      text: '琥珀色',
      distance: '56cm',
      price: '99.00',
      del: '138.00',
      num_b: '1',
      mode: '圆通速递',
      numbers: '8881888'
    },
    ],
    all: [{
      num: '181817171878',
      time: '2017-07-01 14:00',
      url: '../../img/item3.jpg',
      title: '文艺复古系列豹纹眼眶',
      text: '琥珀色',
      distance: '56cm',
      price: '99.00',
      del: '138.00',
      num_b: '1',
      mode: '圆通速递',
      numbers: '8881888'
    },
    ],
    notice:[{
      title:'您的订单已经进顺丰科技园收货点',
      time:'2017-06-23 12：00'
    },
      {
        title: '您的订单已经进顺丰科技园收货点',
        time: '2017-06-23 12：00'
      }]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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