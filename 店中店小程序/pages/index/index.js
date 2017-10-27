Page({
  data: {
    markers: [],
    controls:[],
    polyline:[],
    latitude: 23.099994,
    longitude: 113.324520,
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
    wx.reLaunch({
      url: '/pages/shop-details/shop-details',
    })
  },
  controltap(e) {
    console.log(e.controlId)
    var that = this;
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) { 
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  onLoad:function(){
    var that = this;
        that.setData({
          markers: [{
            iconPath: "/img/md-icon.png",
            id: 0,
            latitude: 23.129914,
            longitude: 113.325580,
            width: 50,
            height: 50,
            title: '自己的位置'
          }, {
            iconPath: "/img/md-icon.png",
            id: 1,
            latitude: 23.099914,
            longitude: 113.325580,
            width: 50,
            height: 50,
            title: '111'
          }, {
            iconPath: "/img/md-icon.png",
            id: 2,
            latitude: 23.110000,
            longitude: 113.322220,
            width: 50,
            height: 50,
            title: '222'
          }, {
            iconPath: "/img/md-icon.png",
            id: 3,
            latitude: 23.119000,
            longitude: 113.324120,
            width: 50,
            height: 50,
            title: '222'
          }],
          controls: [{
            id: 1,
            iconPath: '/img/dw.png',
            position: {
              top: 450,
              width: 30,
              height: 30,
              left:10,
            },
            clickable: true
          }],

        });
    }
  
})