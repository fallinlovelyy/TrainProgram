// pages/userinfo/deleteNumber/deleteNumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Number: '110'
  },

  deleteNumber: function () {
    wx.showModal({
      title: '注销',
      content: '是否确定注销当前帐号？',
      CancelText: "取消",
      confirmText: "确定",
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/UserLogin/UserLogin',
          })
        } else if (res.cancel) {
          wx.switchTab({
            url: './userinfo',
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '注销账号'
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