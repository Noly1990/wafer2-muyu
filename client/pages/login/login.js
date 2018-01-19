


var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config')


// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('login')
    var that = this;
    qcloud.login({
      success(result) {
        if (result) {
          console.log('首次登陆有信息', result)
          saveUserInfo(result)
          wx.redirectTo({
            url: '../index/index',
          })
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              console.log('非首次登陆的result', result)
              saveUserInfo(result.data.data)
              wx.redirectTo({
                url: '../index/index',
              })
            },
            fail(error) {
              console.log('request fail', error)
            }
          })
        }
      },
      fail(error) {
        console.log('登录失败', error)
      }
    })
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



function saveUserInfo(userInfo) {
  wx.setStorageSync('avatarUrl', userInfo.avatarUrl)
  wx.setStorageSync('city', userInfo.city)
  wx.setStorageSync('nickName', userInfo.nickName)
  wx.setStorageSync('province', userInfo.province)
  wx.setStorageSync('openId', userInfo.openId)
}
