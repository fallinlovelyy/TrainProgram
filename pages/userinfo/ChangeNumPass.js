// pages/userinfo/ChangeNumPass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    NumPass: wx.getStorageSync('NumPass'),
    placeholder: '',
    value: '',
    infoArray: {
      Number: '账号',
      Password: '密码',
    },
    tmp: '',
    changeWhat: ''
  },

  valuechange:function(res){
    this.setData({
      tmp:res.detail.value
    })
  },

  submit:function(){
    if(this.data.tmp ==''){
      wx.showToast({
        title: this.data.infoArray[this.data.changeWhat]+'不能为空',
        icon: 'none'
      })
      return
    }
    if (this.data.NumPass[this.data.changeWhat] == this.data.tmp) {
      wx.navigateBack()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.NumPass)
    this.setData({
      placeholder:'请输入'+ this.data.infoArray[options.changeWhat],
      changeWhat:options.changeWhat,
      value:this.data.NumPass[options.changeWhat]
    })
    console.log(this.data.value)
    wx.setNavigationBarTitle({
      title: '修改' + this.data.infoArray[options.changeWhat],
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