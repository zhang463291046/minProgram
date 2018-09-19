Page({
  data: {
    current: 'homepage',
    current2: 'homepage',
    current3: 1,
    showLeft1: false,
    visible1: false,
    actions1: [
      {
        name: '选项1',
      },
      {
        name: '选项2'
      },
      {
        name: '去分享',
        icon: 'share',
        openType: 'share'
      }
    ],
    visible2: false,
    targetTime: new Date().getTime() + 6430000,
    clearTimer: false,
    value2: '',
    currentGroup: '苹果',
    fruit: [{
        id: 1,
        name: '香蕉',
    }, {
        id: 2,
        name: '苹果'
    }, {
        id: 3,
        name: '西瓜'
    }, {
        id: 4,
        name: '葡萄',
    }],
    currentGroup2: ['苹果'],
    fruit2: [{
        id: 1,
        name: '香蕉',
    }, {
        id: 2,
        name: '苹果'
    }, {
        id: 3,
        name: '西瓜'
    }, {
        id: 4,
        name: '葡萄',
    }],
    switch1: false,
    starIndex1: 1,
    value4: 10
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
  handleChange2 ({ detail }) {
    this.setData({
        current2: detail.key
    });
  },
  toggleLeft1() {
    this.setData({
        showLeft1: !this.data.showLeft1
    });
  },
  handleChange3 ({ detail }) {
    const type = detail.type;
    if (type === 'next') {
        this.setData({
            current3: this.data.current3 + 1
        });
    } else if (type === 'prev') {
        this.setData({
            current3: this.data.current3 - 1
        });
    }
  },
  onShareAppMessage() {
    return {
        title: 'iView Weapp',
        imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
    };
  },
  handleOpen1 () {
    this.setData({
        visible1: true
    });
  },
  handleCancel1 () {
    this.setData({
        visible1: false
    });
  },
  handleClickItem1 ({ detail }) {
    const index = detail.index + 1;
    console.log(index)
  },
  handleText () {
    
  },
  handleOpen2 () {
    this.setData({
        visible2: true
    });
  },
  handleCancel2 () {
    this.setData({
        visible2: false
    });
  },
  handleFruitChange({ detail = {} }) {
    this.setData({
        currentGroup: detail.value
    });
  },
  handleFruitChange2({ detail = {} }) {
    const index = this.data.currentGroup2.indexOf(detail.value);
    index === -1 ? this.data.currentGroup2.push(detail.value) : this.data.currentGroup2.splice(index, 1);
    this.setData({
        currentGroup2: this.data.currentGroup2
    });
  },
  onChange(event){
    const detail = event.detail;
    this.setData({
        'switch1' : detail.value
    }) 
  },
  onChange1(e){
    const index = e.detail.index;
    this.setData({
        'starIndex1' : index
    })
  },
  handleChange4 ({ detail }) {
    this.setData({
        value4: detail.value
    })
  },
})
