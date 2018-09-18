Page({
  data: {
    current: 'homepage',
    current2: 1,
    showLeft1: false,
  },
  //事件处理函数
  handleClick: function(e) {
    console.log(e)
  },
  handleChange ({ detail }) {
    this.setData({
        current: detail.key
    });
  },
  toggleLeft1() {
    this.setData({
        showLeft1: !this.data.showLeft1
    });
  },
  handleChange2 ({ detail }) {
    const type = detail.type;
    if (type === 'next') {
        this.setData({
            current: this.data.current + 1
        });
    } else if (type === 'prev') {
        this.setData({
            current: this.data.current - 1
        });
    }
  },
  onLoad: function () {
    
  }
})
