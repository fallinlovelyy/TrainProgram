// pages/userinfo/UserIdInfo/UserIdInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userIdInfo: {
      Number: '110',
      Name: '张三',
      Sex: '男',
      IdNumber: '440981',
      Birth: '19980930',
      Email: '1759186261'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('userIdInfo', this.data.userIdInfo)
    wx.setNavigationBarTitle({
      title: '用户个人信息'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userIdInfo:wx.getStorageSync('userIdInfo')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})