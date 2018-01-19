
var qcloud = require('./vendor/wafer2-client-sdk/index.js')
var config = require('./config')


//app.js
App({
  onLaunch: function () {

    qcloud.setLoginUrl(config.service.loginUrl)

    // 调用登录接口

  },

  globalData: {
    userInfo: null
  }
})


