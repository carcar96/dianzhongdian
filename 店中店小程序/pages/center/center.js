var app = getApp()
Page({
  data: {
    nickName: '大头家族',
    userInfoAvatar: '../../img/tx.jpg',
    sex: '',
    province: '',
  },
  onLoad: function () {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo') || {};
    that.setData({
      nickName: userInfo.nickName,
      userInfoAvatar: userInfo.avatarUrl,
      province: userInfo.province,
      city: userInfo.city
    })
  }
})