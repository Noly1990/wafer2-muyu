
const { getUserStatus } = require('../dbs/index.js')


// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
  ctx.body = {
    userStatus: res[0]
  }

  // if (ctx.state.$wxInfo.loginState) {
  //   ctx.state.data = ctx.state.$wxInfo.userinfo
    
  //   let res = await getUserStatus(ctx.state.$wxInfo.userinfo.openId);

  // }
}
