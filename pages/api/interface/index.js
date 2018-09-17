Page({
	data: {
  	detailValue: [],
  },
  handleclick1_1(){
  	wx.getSetting({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick1_2(){
  	wx.openSetting({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick2_1(){
  	var res = wx.getAccountInfoSync();
  	console.log(res)
  },
  handleclick3_1(){
  	wx.chooseAddress({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick4_1(){
  	wx.authorize({
  		scope:'scope.invoiceTitle',
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick5_1(){
  	wx.addCard({
		    cardList: [{
		        cardId: '',
		        cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
		    }, {
		        cardId: '',
		        cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
		    }],
		    success: function(res) {
		        console.log(res) // 卡券添加结果
		    }
		})
  },
  handleclick5_2(){
  	wx.openCard({
		    cardList: [{
		        cardId: '',
		        code: ''
		    }, {
		        cardId: '',
		        code: ''
		    }],
		    success: function(res) {
		    	console.log(res) // 卡券添加结果
		    }
		})
  },
  handleclick6_1(){
  	wx.chooseInvoice({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick6_2(){
  	wx.chooseInvoiceTitle({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick7_1(){
  	wx.faceVerifyForPay({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick7_2(){
  	wx.requestPayment({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick8_1(){
  	wx.getUserInfo({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick9_1(){
  	wx.getWeRunData({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick10_1(){
  	
  },
  handleclick11_1(){
  	wx.login({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick11_2(){
  	wx.checkSession({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick11_3(){
  	
  },
  handleclick12_1(){
  	
  },
  handleclick13_1(){
  	wx.navigateBackMiniProgram({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
  handleclick13_2(){
  	wx.navigateToMiniProgram({
  		success: function(res) {
		    console.log(res)
		  },
  	})
  },
})