const util = require('../../../utils/util.js')

Page({
  data: {
    detailValue: [],
  	url: '',
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow')
  },
  handleclick1: function(e) {
  	util.post('menu/get_list',{}).then(res =>{
  		this.setData({
	    	detailValue: res
	    })
  	})
  },
  handleclick2: function(){
    var self = this;
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        util.upload('Uploadify/upload_image',tempFilePaths[0]).then(res =>{
          self.setData({
            url: res
          })
        })
      }
    })
  }
})