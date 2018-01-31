// pages/bless/bless.js

var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');


Page({
  /**
   * 页面的初始数据
   */
  data: {
    isSpin: false,
    isDrop: false,
    btnDisable:false,
    blessCheck:false,
    userBonus:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.createInnerAudioContext();
    var that=this;
    var options = {
      url: config.service.getUserBonusUrl,
      login: true,
      method: 'GET',
      success(res) {
        that.setData({
          userBonus:res.data.bonus
        });
        console.log('用户Bonus请求成功', res)
      },
      fail(error) {
        console.log('用户Bonus数据请求失败', error);
      }
    }
    qcloud.request(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      console.log('用户发起了分享')
  },

  dropCoin() {

    this.setData({
      isSpin: true,
      btnDisable:true,
      blessCheck: true
    })
    this.audioCtx.src = 'musics/blink.mp3';
    this.audioCtx.play()
    setTimeout(function () {
      this.setData({
        isDrop: true
      })
      setTimeout(function () {
        this.setData({
          isDrop: false,
          isSpin: false,
          btnDisable: false
        })
        this.audioCtx.src = 'musics/coin.mp3';
        this.audioCtx.play()
      }.bind(this), 1000)
    }.bind(this), 2000)

  },
  bless(){
    var that = this;
    var options = {
      url: config.service.blessUrl,
      login: true,
      method: 'GET',
      success(res) {
        that.setData({
          blessCheck: false,
          userBonus: that.data.userBonus - 10
        })
        console.log('bless请求成功', res)
      },
      fail(error) {
        wx.showToast({
          title: '抱歉，网络有一点小问题',
          icon: 'none',
          duration: 3000
        })
        that.setData({
          blessCheck:true
        })
        console.log('bless请求失败', error);
      }
    }
    qcloud.request(options);
  },
  beginBless(){
    console.log('bless')
    if (this.data.userBonus-10>=0) {
      this.dropCoin();
      this.bless();
    }else {
      wx.showToast({
        title: '抱歉，请前往首页祈得福缘，手动更易获得',
        icon: 'none',
        duration: 1500
      })
      console.log('抱歉，福缘不够请前往木鱼获取')
    }
  }

})