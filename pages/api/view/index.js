const util = require('../../../utils/util.js')

Page({
  data: {
  	detailValue: [],
  	animationData: {},
  	x: 0,
  	y: 0
  },
  onReady: function() {
  	console.log('onReady')
  },
  onShow: function(){
    console.log('onShow');
  },
  handleclick1_1: function(e) {
  	wx.showToast({
		  title: '成功',
		  icon: 'success',
		  duration: 2000
		})
  },
  handleclick1_2: function(){
   wx.hideToast();
  },
  handleclick1_3: function(){
  	wx.showLoading({
		  title: '成功',
		})
  },
  handleclick1_4: function(){
  	wx.hideLoading()
  },
  handleclick1_5: function(){
  	wx.showModal({
		  title: '提示',
		  content: '这是一个模态弹窗',
		  success: function(res) {
		    if (res.confirm) {
		      console.log('用户点击确定')
		    } else if (res.cancel) {
		      console.log('用户点击取消')
		    }
		  }
		})
  },
  handleclick1_6: function(){
  	wx.showActionSheet({
		  itemList: ['A', 'B', 'C'],
		  success: function(res) {
		    console.log(res.tapIndex)
		  },
		  fail: function(res) {
		    console.log(res.errMsg)
		  }
		})
  },
  handleclick2_1: function(){
  	wx.setNavigationBarTitle({
		  title: '当前页面'
		})
  },
  handleclick2_2: function(){
  	wx.showNavigationBarLoading()
  },
  handleclick2_3: function(){
  	wx.hideNavigationBarLoading()
  },
  handleclick2_4: function(){
  	wx.setNavigationBarColor({
		    frontColor: '#ffffff',
		    backgroundColor: '#ff0000',
		    animation: {
		        duration: 400,
		        timingFunc: 'easeIn'
		    }
		})
  },
  handleclick3_1: function(){
    wx.setTabBarBadge({
      index: 0,
      text: '99+'
    })
  },
  handleclick3_2: function(){
    wx.removeTabBarBadge({
      index: 0
    })
  },
  handleclick3_3: function(){
    wx.showTabBarRedDot({
      index: 1
    })
  },
  handleclick3_4: function(){
    wx.hideTabBarRedDot({
      index: 1
    })
  },
  handleclick3_5: function(){
    wx.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#0000FF',
      borderStyle: 'white'
    })
  },
  handleclick3_6: function(){
    wx.setTabBarItem({
        index: 0,
        text: 'text',
        iconPath: 'images/icon_home.png',
        selectedIconPath: 'images/icon_home_active.png'
    })
  },
  handleclick3_7: function(){
    wx.showTabBar({
      animation: true
    })
  },
  handleclick3_8: function(){
    wx.hideTabBar({
      animation: true
    })
  },
  handleclick4_1: function(){
    wx.setBackgroundColor({
      backgroundColor: '#ffff00', // 窗口的背景色为白色
      backgroundColorTop: '#ffff00', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#ffff00', // 底部窗口的背景色为白色
    })
  },
  handleclick4_2: function(){
    wx.setBackgroundTextStyle({
      textStyle: 'dark', // 下拉背景字体、loading 图的样式为dark
    })
  },
  handleclick4_3: function(){
  	wx.setTabBarBadge({
		  index: 0,
		  text: '1'
		})
  },
  handleclick4_4: function(){
  	wx.setTopBarText({
		  text: 'hello, world!'
		})
  },
  handleclick5_1: function(){
  	wx.setTopBarText({
		  text: 'hello, world!'
		})
  },
  handleclick6_1: function(){
  	wx.navigateTo({
		  url: 'test?id=1'
		})
  },
  handleclick6_2: function(){
  	wx.redirectTo({
		  url: 'test?id=1'
		})
  },
  handleclick6_3: function(){
  	wx.switchTab({
		  url: '/index'
		})
  },
  handleclick6_4: function(){
  	wx.navigateBack({
		  delta: 1
		})
  },
  handleclick6_5: function(){
  	wx.reLaunch({
		  url: 'test?id=1'
		})
  },
  handleclick7_1(){
  	var animation = wx.createAnimation({
      duration: 1000,
  	  timingFunction: 'ease',
    })

    this.animation = animation
    
    animation.scale(2,2).rotate(45).step()
    
    this.setData({
      animationData:animation.export()
    })
    
    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)
  },
  handleclick8_1(){
  	wx.pageScrollTo({
		  scrollTop: 0,
		  duration: 300
		})
  },
  handleclick9_1(){
  	const ctx = wx.createCanvasContext('myCanvas')
		ctx.setFillStyle('red')
		ctx.fillRect(10, 10, 150, 75)
		ctx.draw()
  },
  move: function(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  handleclick10_1(){
  	wx.startPullDownRefresh({
  		success: function(res){
  			console.log(res)
  		}
  	})
  },
  onPullDownRefresh: function(e){
    console.log(e)
    wx.stopPullDownRefresh()
  },
  handleclick10_2(){
  	wx.stopPullDownRefresh({
  		success: function(res){
  			console.log(res)
  		}
  	})
  },
  handleclick11_1(){
  	var query = wx.createSelectorQuery()
    query.select('#wxml').boundingClientRect(function(res){
      console.log(res)
    })
    query.selectViewport().scrollOffset(function(res){
      console.log(res)
    })
    query.exec(function(res){
      console.log(res)
    })
  },
  handleclick12_1(){
  	
  },
  handleclick13_1(){
  	this.setData({ number: 1 }) // 直接在当前同步流程中执行

    wx.nextTick(() => {
      this.setData({ number: 3 }) // 在当前同步流程结束后，下一个时间片执行
    })

    this.setData({ number: 2 }) // 直接在当前同步流程中执行
  }
})