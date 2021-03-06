
const { getRankingLists, getUserStatus } = require('../dbs/index.js')


// 登录授权接口
module.exports = async (ctx, next) => {
  // 通过 Koa 中间件进行登录之后
  // 登录信息会被存储到 ctx.state.$wxInfo
  // 具体查看：
  if (ctx.state.$wxInfo.loginState) {
    ctx.state.data = ctx.state.$wxInfo.userinfo

    let openId = ctx.state.$wxInfo.userinfo.openId;

    let res = await getRankingLists();
    let userStatus=await getUserStatus(openId);

    let newRes=[];
    for (let i=0;i<res.length;i++) {
        let newItem={};
        newItem.totalscore=res[i].totalscore;

        newItem.userInfo=JSON.parse(res[i].user_info);

        delete newItem.userInfo.watermark

        if (newItem.userInfo.avatarUrl) {
          newRes.push(newItem)
        }

    }


    ctx.body = {
      statusCode:1,
      rankingLists: newRes,
      userStatus: userStatus[0]
    }


  }
}


function formatResData(){

}