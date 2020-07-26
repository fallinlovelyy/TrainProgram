// pages/index/UserRegister/AddCreditCard/AddCreditCard.js
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
    email: '',
    creditcard: '',
    money: ''

  },

  changecreditcard: function (e) {
    this.setData({
      creditcard: e.detail.value
    })
  },

  changemoney: function (e) {
    this.setData({
      money: e.detail.value
    })
  },

  UserSubmit: function () {
    let that = this
    wx.request({
      url: 'http://localhost/train/UserRegister.php',
      data: {
        number: that.data.number,
        password: that.data.password,
        name: that.data.name,
        idnumber: that.data.idnumber,
        sex: that.data.sex,
        birth: that.data.birth,
        email: that.data.email,
        creditcard: that.data.creditcard,
        money: that.data.money
      },
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '注册成功，请登录!',
          icon: 'success',
          duration: 1500
        })
        setTimeout(function () {
          wx.hideToast()
          wx.redirectTo({
            url: '/pages/UserLogin/UserLogin',
          })
        }, 1500)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: options.number,
      password: options.password,
      name: options.name,
      idnumber: options.idnumber,
      sex: options.sex,
      birth: options.birth,
      email: options.email
    })
  },

  UserSubmit: function () {
    wx.redirectTo({
      url: '/pages/UserLogin/UserLogin',
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