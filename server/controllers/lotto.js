

const { getUserBonus, updateUserBonus } = require('../dbs/index.js')


module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录态校验之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：

  if (ctx.state.$wxInfo.loginState === 1) {
    // loginState 为 1，登录态校验成功
    const openId = ctx.state.$wxInfo.userinfo.openId;
    const json = ctx.request.body;
    const isAuto = json.isAuto;
    const lottoBase = parseInt(json.lottoBase, 10);
    let multiple = lottoBase * 10 / 2000;
    multiple=multiple>=0.2?0.2:multiple;
    multiple=multiple*(isAuto?1:2);
    console.log(multiple);
    let random = Math.random();
    if (random < multiple) {
      let oldBonus = await getUserBonus(openId);
      let newBonus = oldBonus + 10;
      let res = await updateUserBonus(openId, newBonus);
      ctx.body = {
        status: 1,
        bonus: newBonus
      }

    } else {

      ctx.body = {
        status: -1,
        text: '不幸，没中奖'
      }

    }
  }
}
