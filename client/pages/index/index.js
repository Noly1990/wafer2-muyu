//index.js
//获取应用实例
var qcloud = require('../../vendor/wafer2-client-sdk/index.js')
var config = require('../../config');

const app = getApp()
var timeOut, autoInterval, textInterval;
Page({
  data: {
    centerText: [''],
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
    textArr: [
      {
        textName: '无',
        textContent: [],
        textStatus: 'free'
      },
      {
        textName: '观音心经',
        textContent: ['观自在菩萨', '行深般若波罗蜜多时', '照见五蕴皆空', '度一切苦厄', '舍利子', '色不异空', '空不异色', '色即是空', '空即是色', '受想行识', '亦复如是', '舍利子', '是诸法空相', '不生不灭', '不垢不净', '不增不减', '是故空中无色', '无受想行识', '无眼耳鼻舌身意', '无色声香味触法', '无眼界', '乃至无意识界', '无无明', '亦无无明尽', '乃至无老死', '亦无老死尽', '无苦集灭道', '无智亦无得', '以无所得故', '菩提萨埵', '依般若波罗蜜多故', '心无罣碍', '无罣碍故', '无有恐怖', '远离颠倒梦想', '究竟涅槃', '三世诸佛', '依般若波罗蜜多故', '得阿耨多罗三藐三菩提', '故知般若波罗蜜多', '是大神咒', '是大明咒', '是无上咒', '是无等等咒', '能除一切苦', '真实不虚', '故说般若波罗蜜多咒', '即说咒曰：', '揭谛揭谛', '波罗揭谛', '波罗僧揭谛', '菩提萨婆诃'],
        textStatus: 'free'
      },
      {
        textName: '消灾吉祥',
        textContent: ['曩谟三满哆', '母驮喃阿钵啰底', '贺多舍娑曩喃', '怛侄他唵', '佉佉佉呬', '佉呬吽吽', '入嚩啰入嚩啰', '钵啰入嚩啰', '钵啰入嚩啰', '底瑟姹底瑟姹', '瑟致哩瑟致哩', '娑癹吒娑癹吒', '扇底迦室哩曳', '娑嚩诃',],
        textStatus: 'free'
      },
      {
        textName: '往生咒',
        textContent: ['南无阿弥多婆夜哆他伽多夜', '哆地夜他阿弥唎都婆毗', '阿弥唎哆悉耽婆毗', '阿弥唎哆毗迦兰帝', '阿弥唎哆毗迦兰多', '伽弥腻伽伽那', '枳多迦唎娑婆诃'],
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

      clearTimeout(timeOut)

      //间隔事件到了
      timeOut = setTimeout(function () {
        that.data.textDis.stop();
        that.upLoadScore();
        that.setData({
          // tapNum: 0,
          baseNum: 1
        });
      }, 900);
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
      centerText: this.data.textArr[index].textContent
    });


    this.data.textDis.init();

    if (this.data.isAutoQiao) {
      this.data.textDis.stop();
      this.data.textDis.begin(this.data.centerText);

    }
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
      }.bind(this), 800);

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
        wx.setStorageSync('openId', res.data.userStatus.open_id);

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
    this.data.textDis.stop();
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
    if (this.data.tapNum / 29 > this.data.baseNum) {
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
  // strokeText(text, color, x, y) {
  //   this.ctx.textAlign = 'center'
  //   this.ctx.strokeStyle = color;
  //   this.ctx.setFontSize(18)
  //   this.ctx.strokeText(text, x, y);
  //   this.ctx.strokeStyle = 'black';
  // }
  // strokeTextArr(textArr, color, x, y, height) {
  //   textArr.forEach(function (item, index) {
  //     this.strokeText(item, color, x, y + index * height);
  //   }.bind(this))
  // }
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
    this.divideIndex = 1;
    this.beginIndex = 0;
    this.y = 100;
    this.count = 0;
  }
  begin(textArr) {

    if (!this.status && textArr !== '') {

      this.status = true;

      this.intervalFlag = setInterval(function () {

        this.y -= 0.3;

        if (this.y < -35) {
          console.log('y过线了')
          this.y += 30;
          this.beginIndex+=1;
          if (this.beginIndex > textArr.length-4) {
            this.init();
          }
        }
        if (this.y<70) {
          this.divideIndex=2;
        }
        if (this.y < 40) {
          this.divideIndex = 3;
        }
        if (this.y < 10) {
          this.divideIndex = 4;
        }
        let coverArr = textArr.slice(this.beginIndex, this.beginIndex + this.divideIndex);
        let baseArr = textArr.slice(this.beginIndex, this.beginIndex + 7);
        this.ctx.fillTextArr(baseArr, '#504f4c', 150, this.y, 30);
        this.ctx.fillTextArr(coverArr, '#ff6f16', 150, this.y, 30);

        this.ctx.draw()

      }.bind(this), 16);

    }
  }
  stop() {
    clearInterval(this.intervalFlag);
    this.status = false;
  }
  init(){
    this.beginIndex = 0;
    this.y = 100;
    this.divideIndex = 1;
  }
}


