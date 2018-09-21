//index.js
//获取应用实例
const app = getApp()
//共用方法
const util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    motto: '启动日志',
    logs: []
  },
  onLoad: function (options) {
    console.log('Page onLoad', options)
    console.log('Page onLoad', this, getCurrentPages())
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function() {
    // Do something when page ready.
    console.log('Page onReady')
  },
  onShow: function(options) {
    // Do something when page show.
    console.log('Page onShow',options)
  },
  onHide: function() {
    // Do something when page hide.
    console.log('Page onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('Page onUnload')
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
    console.log('Page onPullDownRefresh')
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
    console.log('Page onReachBottom')
  },
  onShareAppMessage: function (options) {
    // return custom share data when user share.
    console.log('Page onShareAppMessage',options)
    return {
      title: '自定义转发标题',
      path: '/pages/ui/index',
      imageUrl: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
    }
  },
  onPageScroll: function(options) {
    // Do something when page scroll
    console.log('Page onPageScroll',options)
  },
  onTabItemTap(options) {
    console.log('Page onTabObjectTap', options)
  },
  //Event handler事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    wx.switchTab ({
      url: '/pages/ui/index'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
