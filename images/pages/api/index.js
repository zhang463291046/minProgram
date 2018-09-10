
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
  },
  handleRoute: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.name
    })
  },
})
