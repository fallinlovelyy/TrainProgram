// pages/userinfo/CreditCardInfo/AddCreditCard/AddCreditCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Number:'',
    Money:''
  },

  AddCreditCard:function(){
    wx.navigateTo({
      url: './CreditCardInfo',
    })
    console.log(this.data.Number)
    console.log(this.data.Money)
  },

  changeNumber:function(e){
    this.setData({
      Number:e.detail.value
    })
  },

  changeMoney:function(e){
    this.setData({
      Money:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加银行卡',
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