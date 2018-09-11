
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  handleRoute: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.name
    })
  },
})
