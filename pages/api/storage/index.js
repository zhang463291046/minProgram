const util = require('../../../utils/util.js')

Page({
  data: {
  	detailValue: []
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow')
  },
  handleclick1: function(e) {
  	wx.setStorage({
		  key:"key",
		  data:"setStorage"
		})
  },
  handleclick2: function(){
    try {
			wx.setStorageSync('key', 'setStorageSync')
		} catch (e) {	

		}
  },
  handleclick3: function(){
  	var self = this;
    wx.getStorage({
		  key: 'key',
		  success: function(res) {
		  	self.setData({
		  		detailValue: res.data
		  	})
		  } 
		})
  },
  handleclick4: function(){
  	try {
		  var value = wx.getStorageSync('key')
		  if (value) {
		  	// Do something with return value
		  	this.setData({
		  		detailValue: value
		  	})
		  }
		} catch (e) {
		  // Do something when catch error
		}
  },
  handleclick5: function(){
  	wx.getStorageInfo({
		  success: function(res) {
		    console.log(res.keys)
		    console.log(res.currentSize)
		    console.log(res.limitSize)
		  }
		})
  },
  handleclick6: function(){
  	try {
		  var res = wx.getStorageInfoSync()
		  console.log(res.keys)
		  console.log(res.currentSize)
		  console.log(res.limitSize)
		} catch (e) {
		  // Do something when catch error
		}
  },
  handleclick7: function(){
  	wx.removeStorage({
		  key: 'key',
		  success: function(res) {
		    console.log(res.data)
		  } 
		})
  },
  handleclick8: function(){
  	try {
		  wx.removeStorageSync('key')
		} catch (e) {
		  // Do something when catch error
		}
  },
  handleclick9: function(){
  	wx.clearStorage()
  },
  handleclick10: function(){
  	try {
		  wx.clearStorageSync()
		} catch (e) {
		  // Do something when catch error
		}
  },
})