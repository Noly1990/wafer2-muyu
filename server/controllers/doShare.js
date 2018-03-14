
const { checkUserShare, getUserBonus, updateUserBonus, setZeroUserShare } = require('../dbs/index.js')


// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：

  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo;
    let openId = ctx.state.$wxInfo.userinfo.openId;
    let shareRes=await checkUserShare(openId);
    if (shareRes) {
      let res1=await setZeroUserShare(openId);
      let oldBonus=await getUserBonus(openId);
      let newBonus=oldBonus+100;
      let res2=await updateUserBonus(openId,newBonus);
      ctx.body={
        status:1,
        recentBonus:newBonus
      }
    }else {
      ctx.body = {
        status:-1,
        errText:'对不起，您已不是首次分享'
      }
    }
  } else {
    ctx.state.code = -1
  }

}
