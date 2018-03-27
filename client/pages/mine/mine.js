// pages/mine/mine.js
var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let avatarUrl = wx.getStorageSync('avatarUrl');
    let nickName = wx.getStorageSync('nickName');
    let totalScore = wx.getStorageSync('totalScore');
    let bonus = wx.getStorageSync('bonus');

    this.setData({
      avatarUrl,
      nickName,
      totalScore,
      bonus,
      myBonusWords: [],
      muBonusItemActive:[]
    })

      var that=this;
    var options = {
      url: config.service.getCollectionsUrl,
      login: true,
      method: 'GET',
      success(res) {

        let collections=JSON.parse(res.data.collections).collection
        console.log('collections',collections);
        let result = convert2aim(collections);
        that.setData({
          myBonusWords: result,
          collectionsNum: collections.length
        })
      },
      fail(error) {
        console.log('mine页面获得数据失败', error);
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

  }
})

function convert2aim(collection){
  let result=[];
  for (var i = 0, len = collection.length; i < len; i += 8) {
    result.push(collection.slice(i, i +8));
  }
  return result;
}