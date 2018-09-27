Component({
  // 外部样式类
  externalClasses: ['custom-class'],
  // 配置参数
  options: {
    multipleSlots: true
  },
  // 组件间关系定义
  relations: {},
  // 组件间代码复用机制,VUE mixins
  behaviors: [],
  // 组件的对外属性,VUE props
  properties: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    fixed: Boolean,
    zIndex: {
      type: Number,
      value: 1
    }
  },
  // 私有数据，可用于模版渲染
  data: {

  },
  // 组件实例进入页面节点树时执行,此时不能调用 setData,VUE beforeCreate
  created: function () { 
    console.log('component','created');
  },
  // 组件实例进入页面节点树时执行,VUE created
  attached: function () { 
    console.log('component','attached');
  },
  // 组件布局完成后执行,此时可以获取节点信息,VUE mounted
  ready: function() { 
    console.log('component','ready');
  },
  // 组件实例被移动到节点树另一个位置时执行
  moved: function () { 
    console.log('component','moved');
  },
  // 组件实例被从页面节点树移除时执行,VUE destroyed
  detached: function () { 
    console.log('component','detached');
  },
  // created、attached、ready、moved、detached生命周期集合,优先级最高
  lifetimes: {
    
  },
  // show和hide两个生命周期
  pageLifetimes: {
    show: function () {
      console.log('component','show');
    },
    hide: function () {
      console.log('component','hide');
    }
  },
  // 定义段过滤器，用于自定义组件扩展
  definitionFilter: function(){

  },
  methods: {
    onClickLeft() {
      this.triggerEvent('click-left', {}, {})
      // this.$emit('click-left');
    },
    onClickRight() {
      this.triggerEvent('click-right', {}, {})
      // this.$emit('click-right');
    },
  }
})