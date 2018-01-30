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
    userBonus:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.audioCtx = wx.createInnerAudioContext();
    var that=this;
    console.log(config.service.getUserBonusUrl)
    var options = {
      url: config.service.getUserBonusUrl,
      login: true,
      method: 'GET',
      success(res) {
        // that.setData({});
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

  },

  dropCoin() {

    this.setData({
      isSpin: true,
      btnDisable:true
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
  }

})