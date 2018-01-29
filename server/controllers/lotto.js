
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录态校验之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：

  if (ctx.state.$wxInfo.loginState === 1) {
    // loginState 为 1，登录态校验成功
    const json = ctx.request.body;
    const isAuto = json.isAuto;
    const lottoBase = parseInt(json.lottoBase, 10);
    let multiple = isAuto ? 1 : 3;
    multiple = multiple * lottoBase * 10 / 1000;
    if (multiple>0.75) {
      multiple=0.75;
    }
    let random = Math.random();
    if (random < multiple) {
      ctx.body = '中奖啦'+multiple
    } else {
      ctx.body = '没中奖'+multiple
    }
  }
}
