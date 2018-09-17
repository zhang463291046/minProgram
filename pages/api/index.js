
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
  handleclick3_1: function(){
    wx.setTabBarBadge({
      index: 0,
      text: '99+'
    })
  },
  handleclick3_2: function(){
    wx.removeTabBarBadge({
      index: 0
    })
  },
  handleclick3_3: function(){
    wx.showTabBarRedDot({
      index: 1
    })
  },
  handleclick3_4: function(){
    wx.hideTabBarRedDot({
      index: 1
    })
  },
  handleclick3_5: function(){
    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#0000FF',
      borderStyle: 'white'
    })
  },
  handleclick3_6: function(){
    wx.setTabBarItem({
        index: 0,
        text: 'text',
        iconPath: 'images/icon_home.png',
        selectedIconPath: 'images/icon_home_active.png'
    })
  },
  handleclick3_7: function(){
    wx.showTabBar({
      animation: true
    })
  },
  handleclick3_8: function(){
    wx.hideTabBar({
      animation: true
    })
  },
  handleclick4_1: function(){
    wx.setBackgroundColor({
      backgroundColor: '#ffff00', // 窗口的背景色为白色
      backgroundColorTop: '#ffff00', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#ffff00', // 底部窗口的背景色为白色
    })
  },
  handleclick4_2: function(){
    wx.setBackgroundTextStyle({
      textStyle: 'dark', // 下拉背景字体、loading 图的样式为dark
    })
  },
})
