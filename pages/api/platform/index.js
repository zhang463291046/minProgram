Page({
	handleclick1_1(){
		wx.getExtConfig({
			success: function (res) {
			  console.log(res)
			}
	  })
	},
	handleclick1_2(){
		let extConfig = wx.getExtConfigSync()
		console.log(extConfig)
	}
})