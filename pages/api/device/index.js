
Page({
  data: {
  	detailValue: '',
    password: '',
    arr: [],
    SSID: '',
    BSSID: ''
  },
  onReady: function() {
  	console.log('onReady')
    var self = this;
    wx.onNetworkStatusChange(function(res) {
      console.log(res)
    })
    wx.onGetWifiList(function(res) {
      console.log(res);
      self.setData({
        arr: res.wifiList
      })
    })
    wx.onWifiConnected(function(res) {
      console.log(res);
    })
  },
  onShow: function(){
    console.log('onShow')
  },
  handleclick1: function(e) {
  	var self = this;
  	wx.getSystemInfo({
  		success: function(res) {
		  	console.log(res)
		  	self.setData({
		  		detailValue: res
		  	})
		  } 
  	})
  },
  handleclick2: function(){
  	try {
      var res = wx.getSystemInfoSync()
      console.log(res)
    } catch (e) {
      // Do something when catch error
    }
  },
  handleclick3: function(){
  	var a = wx.canIUse('button.open-type.contact');
    console.log(a)
  },
  handleclick4(){
    wx.getNetworkType({
      success: function(res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res
        console.log(networkType)
      }
    })
  },
  handleclick5(){
    wx.makePhoneCall({
      phoneNumber: '', //仅为示例，并非真实的电话号码
      success: function(res) {
        console.log(res)
      }
    })
  },
  handleclick6(){
    wx.scanCode({
      success: function(res) {
        console.log(res)
      }
    })
  },
  handleclick7(){
    wx.vibrateLong({
      success: function(res) {
        console.log(res)
      }
    })
  },
  handleclick8(){
    wx.startWifi({
      success: function(res) {
        console.log(res)
        wx.getWifiList({
          success: function(res2) {
            console.log(res2)
            wx.onGetWifiList(function(res3) {
              console.log(res3)
              wx.connectWifi({
                SSID: res3.wifiList['0'].SSID,
                BSSID: res3.wifiList['0'].BSSID,
                password: '123456',
                success: function(res4) {
                  console.log(res4)
                  wx.onWifiConnected(function(res5) {
                    console.log(res5)
                  })
                }
              })
            })
          }
        })
      }
    })
  },
  handleclick9(){
    wx.startWifi();
  },
  handleclick10(){
    wx.getWifiList();
  },
  formSubmit(e){
    var self =this;
    console.log(self)
    var password = e.detail.value.password;
    wx.connectWifi({
      SSID: self.data.SSID,
      BSSID: self.data.BSSID,
      password: password,
      success: function(res) {
        console.log(res)
      }
    });
  },
  handlewifi(e){
    this.setData({
      SSID: e.currentTarget.dataset.ssid,
      BSSID: e.currentTarget.dataset.bssid
    })
  }
})