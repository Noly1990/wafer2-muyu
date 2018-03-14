
const { getUserStatus, initUserCollections, checkUserCollections } = require('../dbs/index.js')


// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：


  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo
    let openId = ctx.state.$wxInfo.userinfo.openId;
    let res = await getUserStatus(openId);
    let checkUserC = await checkUserCollections(openId);
    if (!checkUserC.length) {
      let collections = {
        "open_id": openId,
        "count": 0,
        collection: []
      }
      let jsonStr=JSON.stringify(collections);
      let collectionRes=await initUserCollections(openId,jsonStr);
    }
    ctx.body = {
      userStatus: res[0]
    }
  } else {
    ctx.state.code = -1
  }
}
