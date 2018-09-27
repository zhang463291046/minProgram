const util = require('../../../utils/util.js')

Page({
  data: {
    detailValue: [],
  	url: '',
  },
  onReady: function() {
  	
  },
  onShow: function(){
    
  },
  handleclick1: function(e) {
  	util.post('menu/get_list',{}).then(res =>{
      console.log(res)
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
        util.upload('Uploadify/upload_image',tempFilePaths[0]).then(res2 =>{
          console.log(res2)
          self.setData({
            url: res2
          })
        })
      }
    })
  }
})