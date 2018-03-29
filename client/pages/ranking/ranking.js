// pages/ranking/ranking.js

var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    rankings: [
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      },
      {
        userName: '等你来',
        userAvator: './avatar-temp.jpg',
        tapNum: 0
      }
    ],
    localIndex: 60,
    myScore: 200,
    userName: '未上榜的玩家'
  },
  //获取排行数据
  getRanking() {
    var that = this;

    var options = {
      url: config.service.getRankingUrl,
      login: true,
      method: 'GET',
      header: {
        "Content-Type": "application/json"
      },
      success(res) {

        console.log('ranking res:', res);

        let oldArr = that.data.rankings;

        let formatArr = formatRankingLists(res.data.rankingLists);
        for (let j = 0; j < formatArr.length; j++) {
          oldArr[j] = formatArr[j];
        }


        let nickName = wx.getStorageSync('nickName');
        let avatarUrl = wx.getStorageSync('avatarUrl');
        let openId=wx.getStorageSync('openId')
        let index = -1;

        formatArr.forEach(function (item,i) {
          if (item.openId==openId) {
             index=i;
          }
        })

        that.setData({
          rankings: oldArr,
          nickName,
          avatarUrl,
          localIndex:index,
          myScore:res.data.userStatus.totalscore
        });

      },
      fail(error) {
        wx.showToast({
          title: '抱歉，网络有一点小问题',
          icon: 'none',
          duration: 2000
        })
        console.log('request fail', error);
      }
    }
    qcloud.request(options);
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRanking();
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


// userName: '等你来',
// userAvator: './avatar-temp.jpg',
// tapNum: 0

function formatRankingLists(rankingLists) {
  let newLists = [];
  let length = rankingLists.length > 10 ? 10 : rankingLists.length;
  for (let i = 0; i < length; i++) {
    let tempItem = {};
    tempItem.userName = rankingLists[i].userInfo.nickName;
    tempItem.userAvator = rankingLists[i].userInfo.avatarUrl;
    tempItem.tapNum = rankingLists[i].totalscore;
    tempItem.openId = rankingLists[i].userInfo.openId;
    newLists.push(tempItem)
  }
  return newLists;
}
