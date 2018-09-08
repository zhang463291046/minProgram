
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
  },
  handleRoute: function(url) {
    console.log(url)
    wx.navigateTo({
      url: './button/index'
    })
  },
  handleRoute1: function(url) {
    console.log(url)
    wx.navigateTo({
      url: './button/index'
    })
  },
  handleRoute2: function(url) {
    console.log(url)
    wx.navigateTo({
      url: './checkbox/index'
    })
  },
})
