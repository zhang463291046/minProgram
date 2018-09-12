const util = require('../../../utils/util.js')

Page({
  data: {
  	tempFilePaths: [],
  	detailValue: []
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow')
  },
  handleclick1: function(e) {
  	var self = this;
  	wx.chooseImage({
	  count: 1, // 默认9
	  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	  success: function (res) {
	    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
	    var tempFilePaths = res.tempFilePaths;
	    self.data.tempFilePaths = tempFilePaths;
	    wx.getImageInfo({
	      src: res.tempFilePaths[0],
	      success: function (res) {
	        console.log(res)
	      }
	    })
	    util.upload('Uploadify/upload_image',tempFilePaths[0]).then(res =>{
	        self.data.detailValue.push(res);
	        self.setData({
	        	detailValue: self.data.detailValue
	        })
      	})
	  }
	})
  },
  handleclick2: function(){
    wx.previewImage({
	  current: '', // 当前显示图片的http链接
	  urls: this.data.detailValue // 需要预览的图片http链接列表
	})
  },
  handleclick3: function(){
    wx.saveImageToPhotosAlbum({
		filePath: this.data.tempFilePaths[0],
	    success(res) {
	    	console.log(res)
	    }
	})
  }
})