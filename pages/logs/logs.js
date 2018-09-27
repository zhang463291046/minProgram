Page({
  data: {
    
  },
  onLoad: function () {
    
  },
  bindViewTap: function(e) {
    wx.navigateTo ({
      url: '/pages/logs/tree-select/index'
    })
  },
  onClickLeft() {
  	console.log(1)
	  wx.showToast({ title: '点击返回', icon: 'none' });
	},
	onClickRight() {
		console.log(2)
	  wx.showToast({ title: '点击按钮', icon: 'none' });
	}
})
