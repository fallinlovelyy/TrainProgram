// pages/index/UserRegister/UserRegister/UserRegister.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    number: '',
    name: '',
    sex: '',
    idnumber: '',
    birth: '',
    email: ''

  },

  changenumber: function (e) {
    this.setData({
      number: e.detail.value
    })
  },

  changepassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  changename: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  changesex: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },

  changeidnumber: function (e) {
    this.setData({
      idnumber: e.detail.value
    })
  },

  changebirth: function (e) {
    this.setData({
      birth: e.detail.value
    })
  },

  changeemail: function (e) {
    this.setData({
      email: e.detail.value
    })
  },



  NextStep: function () {
    wx.navigateTo({
      url: ('./SecondStep?number='+this.data.number
      +'&password='+this.data.password
      +'&name='+this.data.name
      +'&sex='+this.data.sex
      +'&idnumber='+this.data.idnumber
      +'&birth='+this.data.birth
      +'&email='+this.data.email)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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