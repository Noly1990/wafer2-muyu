//index.js
//获取应用实例
var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');


const app = getApp()
var timeOut, interval, autoInterval;
Page({
  data: {
    autoImgUrl: './begin.png',
    userInfo: {},
    hasUserInfo: false,
    isPlay: false,
    //抽奖基数
    baseNum: 1,
    //木鱼敲击数
    tapNum: 0,
    //音乐列表展开与否
    isMusic: false,
    //fo发光
    isLight: false,
    //自动敲
    isAutoQiao: false,
    //木鱼动画
    isMuyuActive: false,
    isFoActive: false,
    top: 0,
    musicSelect: 0,
    //http://mp3.qqmusic.cc/yq/204173169.mp3
    //http://111.231.143.94/music/panama.mp3
    musics: [
      //｛musicName: 'Panama',
      //   musicSrc: 'http://111.231.143.94/music/panama.mp3',
      //   musivAuthor: 'Matteo',
      //   musicIndex: 0
      // },
      {
        musicName: '大悲咒',
        musicSrc: 'http://122.228.254.11/mp3.9ku.com/m4a/547320.m4a',
        musivAuthor: '佛教音乐',
        musicIndex: 2
      },
      {
        musicName: '六字大明咒',
        musicSrc: 'http://122.228.254.11/mp3.9ku.com/hot/2010/05-27/301973.mp3',
        musivAuthor: '佛教音乐',
        musicIndex: 1
      }, {
        musicName: '消灾吉祥神咒',
        musicSrc: 'http://122.228.254.11/mp3.9ku.com/hot/2010/05-27/301978.mp3',
        musivAuthor: '佛教音乐',
        musicIndex: 3
      }
    ]
  },

  //事件处理函数qiao
  qiao: function () {
    this.audioCtx1.play();
    console.log('qiao')

    this.setData({
      tapNum: this.data.tapNum + 1,
      isLight: true,
      isMuyuActive: true
    });

    this.checkLotto()

    var that = this;
    setTimeout(function () {
      that.setData({
        isLight: false,
        isMuyuActive: false
      });

    }, 300);

    if (this.data.isPlay == false) {
      clearInterval(interval);
      interval = setInterval(function () {
        that.setData({
          top: that.data.top - 1
        });
      }, 50)

      this.audioCtx.play();

      clearTimeout(timeOut)

      timeOut = setTimeout(function () {
        that.audioCtx.pause();
        that.audioCtx.seek(5);
        clearInterval(interval);
        that.upLoadScore();
        that.setData({
          top: 0,
          tapNum: 0,
          baseNum: 1
        });
      }, 800);
    }
  },
  //切换音乐列表部分
  showMusicList: function () {
    this.setData({
      isMusic: !this.data.isMusic
    });
  },
  //切换音乐部分
  changeMusic: function (event) {
    console.log(event);
    this.setData({
      isMusic: !this.data.isMusic
    });
    let index = event.currentTarget.dataset.index;
    this.setData({
      musicSelect: index
    });
    this.audioCtx.src = this.data.musics[index].musicSrc;
    this.audioCtx.seek(5);
    console.log('音乐已切换为:' + this.data.musics[index].musicName)
  },

  autoQiao() {
    if (!this.data.isAutoQiao) {
      this.setData({
        isAutoQiao: true,
        autoImgUrl: './stop.png'
      });
      autoInterval = setInterval(function () {
        this.qiao();
      }.bind(this), 700);
    } else {
      this.setData({
        isAutoQiao: false,
        autoImgUrl: './begin.png'
      });
      clearInterval(autoInterval);
    }
  },


  onReady: function (e) {
    this.audioCtx = wx.createInnerAudioContext();
    this.audioCtx.src = this.data.musics[this.data.musicSelect].musicSrc;
    this.audioCtx.obeyMuteSwitch = false;
    this.audioCtx.seek(5);
    // 使用 wx.createInnerAudioContext 获取 audio 上下文 context
    this.audioCtx1 = wx.createInnerAudioContext();
    this.audioCtx1.src = 'musics/muyu1.mp3';
  },


  onLoad: function () {
      var that=this;
    let avatarUrl = wx.getStorageSync('avatarUrl');
    this.setData({
      avatarUrl
    });
    //请求score和totalscore 
    var options = {
      url: config.service.getUserStatusUrl,
      login: true,
      method: 'GET',
      success(res) {
        console.log('初始用户数据请求成功', res);
        wx.setStorageSync('totalScore', res.data.userStatus.totalscore);
        wx.setStorageSync('bonus', res.data.userStatus.bonus);
        that.setData({
          bonus:res.data.userStatus.bonus
        })
      },
      fail(error) {
        console.log('初始用户数据请求失败', error);
      }
    }
    qcloud.request(options);
  },
  /**
 * 生命周期函数--监听页面卸载
 */
  onUnload: function () {
    console.log('unload')
    clearInterval(autoInterval);
    this.setData({
      isAutoQiao:false
    });
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  
  upLoadScore() {
    let score = this.data.tapNum;
    var options = {
      url: config.service.upLoadScoreUrl,
      login: true,
      method: 'POST',
      header: {
        "Content-Type": "application/json"
      },
      dataType: 'json',
      data: {
        status: 'upScore',
        addScore: score
      },
      success(res) {
        console.log('res:', res);
      },
      fail(error) {
        console.log('request fail', error);
      }
    }
    qcloud.request(options);
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '心缘木鱼',
      path: '',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  checkLotto() {
    if (this.data.tapNum / 19 > this.data.baseNum) {
      let isAuto = this.data.isAutoQiao;
      let baseNum = this.data.baseNum;
      var that=this;
      var options = {
        url: config.service.lottoUrl,
        login: true,
        method: 'POST',
        header: {
          "Content-Type": "application/json"
        },
        dataType: 'json',
        data: {
          isAuto: isAuto,
          lottoBase: baseNum
        },
        success(res) {
          console.log('res:', res);
          if (res.data.status==1) {
            that.coinAdd();
            that.setData({
              bonus:res.data.bonus
            })
          }

        },
        fail(error) {
          console.log('request fail', error);
        }
      }
      qcloud.request(options);

      let newBaseNum = baseNum + 1;
      this.setData({
        baseNum: newBaseNum
      })
    }
  },

  coinAdd(){
    console.log('coin add')
    this.setData({
      isFoActive:true,
      coinAdded:true
    })
    setTimeout(function(){
      this.setData({
        isFoActive: false,
        coinAdded:false
      })
    }.bind(this),1500);
  }

})



