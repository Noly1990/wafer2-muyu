const { getUserBonus, updateUserBonus } = require('../dbs/index.js')

// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo
    let openId = ctx.state.$wxInfo.userinfo.openId;
    let userBonus = await getUserBonus(openId);

    if (userBonus-10>=0) {
      userBonus=userBonus-10;
      await updateUserBonus(openId,userBonus);
      ctx.body={
        status:1,
        recentBonus:userBonus
      }
    }else {
      ctx.body={
        status:-1,
        errText:'您的福缘不够'
      }
    }

  } else {
    ctx.state.code = -1
  }
}
