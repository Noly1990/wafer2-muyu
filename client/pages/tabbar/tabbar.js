// pages/tabbatT/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    active: {
      type: Number,  //0,1,2,3
      value: '激活的项目'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoIndex() {
      if (this.properties.active != 0) {
        wx.redirectTo({
          url: '../index/index',
        })
      }

    },
    gotoRanking() {
      if (this.properties.active != 1) {
        wx.redirectTo({
          url: '../ranking/ranking',
        })
      }
    },
    gotoBless() {
      if (this.properties.active != 2) {
        wx.redirectTo({
          url: '../bless/bless',
        })
      }
    },
    gotoMine() {
      if (this.properties.active != 3) {
        wx.redirectTo({
          url: '../mine/mine',
        })
      }
    }
  }
})
