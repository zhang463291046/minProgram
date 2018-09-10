const util = require('../../../utils/util.js')

Page({
  data: {
  	detailValue: ''
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
 //    wx.request({
	//   url: 'http://120.24.55.58:8131/index.php/user/send_vcode', //仅为示例，并非真实的接口地址
	//   data: {
	//      username: '' ,
	//      type: '1'
	//   },
	//   header: {
	//   	'content-type': 'application/json' // 默认值
	//   },
	//   success: function(res) {
	//     console.log(res.data)
	//   }
	// })
 //    this.setData({
 //    	detailValue: e.detail
 //    })
  },
})