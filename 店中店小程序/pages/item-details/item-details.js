// pages/item-details/item-details.js
Page({


  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    evaluate:[{
      url:'../../img/item.jpg',
      name:'符号',
      time:'刚刚',
      text:'评论内容评论内容评论内容评论内容评论内容评论评论内容评论容评论内容'
    },
      {
        url: '../../img/item.jpg',
        name: '符号',
        time: '37分钟前',
        text: '评论内容评论内容评论内容评论内容评论内容评论评论内容评论容评论内容'
      }
    ],
    drawer:[{
      title:'规格名'
    },
      {
        title: '规格名'
      },
      {
        title: '规格名'
      },
      {
        title: '规格名'
      },
      {
        title: '规格名'
      },
      {
        title: '规格名'
      },
      {
        title: '规格名'
      }, {
        title: '规格名'
      }
      , {
        title: '规格名'
      }
      , {
        title: '规格名'
      }
      , {
        title: '规格名'
      }
      , {
        title: '规格名'
      }
    ],
    showModalStatus: false
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function () {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示 
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
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