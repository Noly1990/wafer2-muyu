const { getUserCollections } = require('../dbs/index.js')

// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo
    let openId = ctx.state.$wxInfo.userinfo.openId;
    let userCollections = await getUserCollections(openId);
    ctx.body = {
      status:1,
      collections: userCollections
    }
  } else {
    ctx.state.code = -1
  }
}
