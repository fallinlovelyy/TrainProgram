// pages/userinfo/CreditCardInfo/CreditCardInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CreditCardInfo:{
      Number:'0945',
      Money:'100'
    }

  },

  AddCreditCard:function(){
    wx.navigateTo({
      url: './AddCreditCard',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('CreditCardInfo', this.data.CreditCardInfo)
    wx.setNavigationBarTitle({
      title: '银行卡信息',
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
      CreditCardInfo:wx.getStorageSync('CreditCardInfo')
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