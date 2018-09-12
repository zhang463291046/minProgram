const app = getApp()

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const post = (url = '', params = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://120.24.55.58:8130/index.php/'+url, //仅为示例，并非真实的接口地址
      method: 'POST',
      data: params,
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值,
        'Access-Token': app.globalData.access_token
      },
      success: function(res) {
        console.log(res.data)
        var response = res.data;
        if (response.errcode == '0') { 
          resolve(response.data) 
        }
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}

const upload = (url = '', filePath = '', params = {}) => {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: 'http://120.24.55.58:8130/index.php/'+url, //仅为示例，并非真实的接口地址
      method: 'POST',
      filePath: filePath,
      name: 'myfile',
      formData: params,
      success: function(res) {
        console.log(res.data)
        var response = JSON.parse(res.data);
        if (response.errcode == '0') { 
          resolve(response.filename) 
        }
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  post: post,
  upload: upload
}
