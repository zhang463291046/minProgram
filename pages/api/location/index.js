
Page({
  data: {
    detailValue: ''
  },
  onReady: function() {
    console.log('onReady')
    this.mapCtx = wx.createMapContext('myMap')
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
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.10229,
        longitude:113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:23.10229,
        longitude:113.3345211,
      }, {
        latitude:23.00229,
        longitude:113.3345211,
      }]
    })
  }
})