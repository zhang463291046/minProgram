const util = require('../../../utils/util.js')

Page({
  data: {
  	detailValue: ''
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow')
    console.log(this)
    wx.getSetting({
	    success(res) {
	    	console.log(res)
	        if (!res.authSetting['scope.record']) {
	            wx.authorize({
	                scope: 'scope.record',
	                success() {
	                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
	                    wx.startRecord()
	                }
	            })
	        }
	    }
	})
  },
  onShareAppMessage: function(Object) {
  	console.log(Object)
  	return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  handleclick: function(e) {
  	console.log(this)
  	util.post('menu/get_list',{}).then(res =>{
  		console.log(res)
  		console.log(this)
  		this.data.detailValue = res;
  		this.setData({
	    	detailValue: res
	    })
  	})
  },
})