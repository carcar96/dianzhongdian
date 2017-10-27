Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    circles: [],
    controls:[]
  },
  hasLoginMapControls: [
    {// //扫描二维码控件按钮
      id: 12,
      position: {
        left: 132.5 * wx.getStorageSync("kScreenW"),
        top: 523 * wx.getStorageSync("kScreenH"),
        width: 110 * wx.getStorageSync("kScreenW"),
        height: 40 * wx.getStorageSync("kScreenW")
      },
      iconPath: '../../img/md-icon.png',
      clickable: true,
    },
    //隐藏说明按钮
    {
      position: {
        width: 1,
        height: 1
      },
      iconPath: '../../img/md-icon.png',
      clickable: false,
    },
    {
      id: 11,
      position: {
        left: 10 * wx.getStorageSync("kScreenW"),
        top: 523 * wx.getStorageSync("kScreenH"),
        width: 40 * wx.getStorageSync("kScreenW"),
        height: 40 * wx.getStorageSync("kScreenW")
      },
      iconPath: '../../img/md-icon.png',
      clickable: true,
    },
    //钱包控件按钮
    {
      id: 13,
      position: {
        left: 330 * wx.getStorageSync("kScreenW"),
        top: 523 * wx.getStorageSync("kScreenH"),
        width: 40 * wx.getStorageSync("kScreenW"),
        height: 40 * wx.getStorageSync("kScreenW")
      },
      iconPath: '../../img/md-icon.png',
      clickable: true,
    },
    //地图中心位置按钮
    {
      id: 14,
      position: {
        left: 177.5 * wx.getStorageSync("kScreenW"),
        top: 261.5 * wx.getStorageSync("kScreenH"),
        width: 20 * wx.getStorageSync("kScreenW"),
        height: 40 * wx.getStorageSync("kScreenW")
      },
      iconPath: '../../img/md-icon.png',
      clickable: false,
    }],
  list: function (e) {
    wx.reLaunch({
      url: 'https://h5.ayibang.com/#!/',
    })
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "1",
            latitude: res.latitude,
            longitude: res.longitude,
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
           
            fillColor: '#FFFFFF',
            radius: 30,
            strokeWidth: 1
          }]
        })
      }
    })
  },
  regionchange(e) {
    console.log("regionchange===" + e.type)
  },
  //点击缩放按钮动态请求数据
  controltap(e) {
    var that = this;
    console.log("scale===" + this.data.scale)
    if (e.controlId === 1) {
      // if (this.data.scale === 13) {
      that.setData({
        scale: --this.data.scale
      })
      // }
    } else {
      //  if (this.data.scale !== 13) {
      that.setData({
        scale: ++this.data.scale
      })
      // }
    }
  },
})