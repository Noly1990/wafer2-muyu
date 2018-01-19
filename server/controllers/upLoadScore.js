
const { getUserScore, updateUserScore } = require('../dbs/index.js');

module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录态校验之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：

  if (ctx.state.$wxInfo.loginState === 1) {
    // loginState 为 1，登录态校验成功
    const json = ctx.request.body;
    let openId = ctx.state.$wxInfo.userinfo.openId;
    let status = json.status;
    let addScore = json.addScore;
    let oldScore = await getUserScore(openId);
    let res = await updateUserScore(openId, oldScore + addScore);

    ctx.body = {
      status: status,
      res: res
    }
  } else {
    ctx.state.code = -1
  }
}
