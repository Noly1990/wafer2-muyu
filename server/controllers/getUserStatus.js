
const { getUserStatus, initUserCollections, checkUserCollections, getAllStory } = require('../dbs/index.js')


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
    let storyRes = await getAllStory();
    let oneStory=randomStory(storyRes);
    console.log('story', storyRes);
    if (!checkUserC.length) {
      let collections = {
        "open_id": openId,
        "count": 0,
        collection: []
      }
      let jsonStr = JSON.stringify(collections);
      let collectionRes = await initUserCollections(openId, jsonStr);
    }
    ctx.body = {
      userStatus: res[0],
      oneStory
    }
  } else {
    ctx.state.code = -1
  }
}


function randomStory(storyRes){
  return storyRes[Math.floor(Math.random() * 3)];
}