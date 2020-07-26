// pages/userinfo/PassengerInfo/AddPassenger/AddPassenger.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Name:'',
    Sex:'',
    IdNumber:''

  },

  changeName:function(e){
    this.setData({
      Name:e.detail.value
    })
  },

  changeSex:function(e){
    this.setData({
      Sex:e.detail.value
    })
  },

  changeIdNumber:function(e){
    this.setData({
      IdNumber:e.detail.value
    })
  },

  AddPassenger:function(){
    console.log(this.data.Name)
    console.log(this.data.Sex)
    console.log(this.data.IdNumber)
    wx.redirectTo({
      url: './PassengerInfo',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '添加乘车人',
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