// pages/login/login.js
Page({
  data: {
    number: '',
    password: ''
  },

  changeNumber: function (e) {
    this.setData({
      number: e.detail.value
    })
  },

  changePassword: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  UserLogin: function () {
    if (this.data.number.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账户或密码为空！',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)
    } else {
      let that = this
      wx.request({
        url: 'http://localhost/train/UserExist.php',
        data:{
          number:that.data.number,
          password:that.data.password,
          exist:1
        },
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success:function(res){
          if(res.data.UserPhoneNumber == that.data.number){
            if(res.data.UserPassword == that.data.password){

            }else{
              wx.showToast({
                title: '当前用户未注册！',
                icon:'none',
                duration:1500
              })
              setTimeout(function(){
                wx.hideToast()
                wx.navigateBack()
              })
            }
            })
          }
        }
      })
      wx.request({
        url: 'http://localhost/train/UserLogin.php',
        data: {
          number: that.data.number,
          password: that.data.password,
          exist:1
        },
        method: 'GET',
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.UserPhoneNumber == that.data.number || res.data.UserPassword == that.data.password) {
            //如果输入结果符合查询结果，将要执行的代码
            wx.showToast({
              title: '欢迎回来!',
              icon: 'success',
              duration: 1500
            })
            setTimeout(function () {
              wx.hideToast()
              wx.switchTab({
                url: '/pages/userinfo/userinfo',
              })
            }, 1500)
          } else {
            wx.showToast({
              title: '账户或密码错误!',
              icon: 'loading',
              duration: 1500
            })
            setTimeout(function () {
              wx.hideToast()
            }, 2000)
          }
        }
      })
    }
  },

  UserRegister: function () {
    wx.navigateTo({
      url: '/pages/UserLogin/FirstStep',
    })
  },

  GetPassword: function () {
    wx.navigateTo({
      url: '/pages/UserLogin/GetPassword',
    })
  },

})