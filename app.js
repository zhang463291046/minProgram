//app.js
App({
  // 初始化小程序
  onLaunch: function(options) {
    console.log('onLaunch', options)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('授权信息', res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('用户信息',res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    // 网络请求
    this.otherFn();
  },
  onShow: function(options) {
    console.log('onShow',options)
    wx.authorize({
      scope: "scope.userLocation"
    });
    wx.authorize({
      scope: "scope.werun"
    });
  },
  onHide: function() {
    console.log('onHide')
  },
  onError: function(err) {
    console.log('onError',err)
  },
  onPageNotFound: function(options) {
    console.log('onPageNotFound',options)
  },
  //自定义方法
  otherFn: function() {
    console.log('otherFn','网络请求')
    var self = this;
    wx.request({
      url: 'http://120.24.55.58:8130/index.php/account/login', //仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        username: 'FE/qX43FuS7714TA11El2g==',
        password: 'oJhM3DPgXNArwp9jI8ue4w=='
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function(res) {
        self.globalData.access_token = res.data.data.access_token
      }
    })
  },
  //自定义对象
  globalData: {
    userInfo: null,
    access_token: ''
  },
})