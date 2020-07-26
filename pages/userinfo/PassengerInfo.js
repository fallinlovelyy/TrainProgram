// pages/userinfo/PassengerInfo/PassengerInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PassengerInfo:{
      Name:'张三',
      Sex:'男',
      IdNumber:'440981'
    }

  },

  AddPassenger:function(){
    wx.navigateTo({
      url: './AddPassenger',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('PassengerInfo', this.data.PassengerInfo)
    wx.setNavigationBarTitle({
      title: '乘车人信息'
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
      PassengerInfo:wx.getStorageSync('PassengerInfo')
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