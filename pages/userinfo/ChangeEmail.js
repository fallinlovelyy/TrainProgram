// pages/userinfo/ChangeEmail/ChangeEmail.js
Page({

  data: {
    placeholder:'',
    value:'',
    Email:wx.getStorageSync('Email'),
    tmp:''
  },
  
  valuechange:function(res){
    this.setData({
      tmp:res.detail.value
    })
  },

  submit:function(){
    if(this.data.tmp ==''){
      wx.showToast({
        title: '邮箱不能为空',
        icon: 'none'
      })
      return
    }
    if (this.data.Email == this.data.tmp) {
      wx.navigateBack()
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      placeholder:'请输入邮箱',
      value:this.data.Email
    })
    wx.setNavigationBarTitle({
      title: '修改邮箱',
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