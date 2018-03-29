//index.js
//获取应用实例
var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');


const app = getApp()
var timeOut, interval, autoInterval, textInterval;
Page({
  data: {
    centerText: ['这是第些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字', '这是第些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字',],
    autoImgUrl: './begin.png',
    userInfo: {},
    hasUserInfo: false,
    isPlay: false,
    //抽奖基数
    baseNum: 1,
    //木鱼敲击数
    tapNum: 0,
    lastTapNum: 0,
    //音乐列表展开与否
    isMusic: false,
    //fo发光
    isLight: false,
    //自动敲
    isAutoQiao: false,
    //木鱼动画
    isMuyuActive: false,
    isFoActive: false,
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
    ],
    textArr:[
      {
        textName:'观音心经',
        textContent: ['这是观音心经第些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字', '这是第观音心经些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字',],
        textStatus:'free'
      },
      {
        textName: '消灾吉祥',
        textContent: ['消灾吉祥消灾吉祥', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字', '这是第些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字',],
        textStatus: 'free'
      },
      {
        textName: '往生咒',
        textContent: ['往生咒往生咒', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字', '这是第些字', '这是第一行的一些字', '这是第一一行的一行的一些字', '这是第一行的一些字', '这是第一字', '这是第一行的一一行的一些字', '这是第一一些字',],
        textStatus: 'free'
      }
    ]
  },

  //事件处理函数qiao
  qiao: function () {
    this.data.textDis.begin(this.data.centerText);
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

    }, 150);

    if (this.data.isPlay == false) {
      //主音乐相关
      // this.audioCtx.play();

      clearTimeout(timeOut)
      //间隔事件到了
      timeOut = setTimeout(function () {
        //主音乐相关
        // that.audioCtx.pause();
        // that.audioCtx.seek(5);
        that.data.textDis.stop();
        that.upLoadScore();
        that.setData({
          // tapNum: 0,
          baseNum: 1
        });
      }, 700);
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
      musicSelect: index,
      centerText:this.data.textArr[index].textContent
    });
    //主音乐相关
    // this.audioCtx.src = this.data.musics[index].musicSrc;
    // this.audioCtx.seek(5);
    this.data.textDis.indexindex=1;
    this.data.textDis.y = 100;
    console.log('经文已切换为:' + this.data.textArr[index].textName)
  },

  //自动敲击
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
    //主音乐相关
    // this.audioCtx = wx.createInnerAudioContext();
    // this.audioCtx.src = this.data.musics[this.data.musicSelect].musicSrc;
    // this.audioCtx.obeyMuteSwitch = false;
    // this.audioCtx.seek(5);
    // 使用 wx.createInnerAudioContext 获取 audio 上下文 context
    this.audioCtx1 = wx.createInnerAudioContext();
    this.audioCtx1.src = 'musics/muyu1.mp3';

    //获取canvas上下文
    var context = wx.createCanvasContext('firstCanvas')
    var ctx = new Ctx(context);
    var textDis = new TextDisplay(ctx);
    this.setData(
      {
        textDis
      }
    )

  },

  onLoad: function () {
    var that = this;
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
          bonus: res.data.userStatus.bonus
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
    console.log('主页unload')
    clearInterval(autoInterval);
    clearInterval(textInterval);
    this.setData({
      isAutoQiao: false
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

    let score = this.data.tapNum - this.data.lastTapNum;
    this.setData({
      lastTapNum: this.data.tapNum
    });


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
      var that = this;
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
          if (res.data.status == 1) {
            that.coinAdd();
            that.setData({
              bonus: res.data.bonus
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

  coinAdd() {
    console.log('coin add')
    this.setData({
      isFoActive: true,
      coinAdded: true
    })
    setTimeout(function () {
      this.setData({
        isFoActive: false,
        coinAdded: false
      })
    }.bind(this), 1500);
  }

})


//canvas绘画对象
class Ctx {
  constructor(ctx) {
    this.ctx = ctx;

  }
  fillText(text, color, x, y) {
    this.ctx.textAlign = 'center'
    this.ctx.fillStyle = color;
    this.ctx.setFontSize(18)
    this.ctx.fillText(text, x, y);
    this.ctx.fillStyle = 'black';
  }
  fillTextArr(textArr, color, x, y, height) {
    textArr.forEach(function (item, index) {
      this.fillText(item, color, x, y + index * height);
    }.bind(this))
  }
  strokeText(text, color, x, y) {
    this.ctx.textAlign = 'center'
    this.ctx.strokeStyle = color;
    this.ctx.setFontSize(18)
    this.ctx.strokeText(text, x, y);
    this.ctx.strokeStyle = 'black';
  }
  strokeTextArr(textArr, color, x, y, height) {
    textArr.forEach(function (item, index) {
      this.strokeText(item, color, x, y + index * height);
    }.bind(this))
  }
  draw() {
    this.ctx.draw()
  }
}

function convertTextArr(index, arr) {
  var tempIndex = index;
  let aimArr = [];
}

function totalLength(textArr) {
  let long = textArr.reduce(function (aim, item) {
    return aim += item;
  }, '')
  return long.length;
}


//文字滚动对象
class TextDisplay {
  constructor(ctx) {
    this.ctx = ctx;
    this.status = false;
    this.indexindex = 1;
    this.y = 100;
    this.count = 0;
  }
  begin(textArr) {
    if (!this.status) {
      console.log(' test reset')
      let newArr = textArr.slice(0, this.indexindex);
      this.status = true;
      this.intervalFlag = setInterval(function () {
        this.count++;
        this.y -= 0.35;
        if (this.count / 90 > 1) {
          this.count -= 90;
          if (this.indexindex > textArr.length) {
            this.y = 100;
            this.indexindex = 1;
          }
          newArr = textArr.slice(0, this.indexindex++);

        }

        this.ctx.fillTextArr(textArr, '#504f4c', 150, this.y, 30);
        this.ctx.fillTextArr(newArr, '#ff6f16', 150, this.y, 30);
        this.ctx.draw()

      }.bind(this), 15);

    }
  }
  stop() {
    clearInterval(this.intervalFlag);
    this.status = false;
  }

}