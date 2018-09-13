
Page({
  data: {
  	detailValue: ''
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow')
  },
  handleclick1: function(e) {
  	var self = this;
  	wx.getLocation({
  		success: function(res) {
		  	console.log(res)
		  	self.setData({
		  		detailValue: res
		  	})
		  } 
  	})
  },
  handleclick2: function(){
  	var self = this;
    wx.openLocation({
    	latitude: self.data.detailValue.latitude,
    	longitude: self.data.detailValue.longitude,
  		success: function(res) {
		  	console.log(res)
		  } 
  	})
  },
  handleclick3: function(){
  	var self = this;
    wx.chooseLocation({
  		success: function(res) {
		  	console.log(res)
		  	self.setData({
		  		detailValue: res
		  	})
		  } 
  	})
  },
})