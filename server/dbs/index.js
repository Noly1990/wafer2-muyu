const { mysql } = require('../qcloud.js');


//获取排行榜信息
async function getRankingLists() {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('user_info', 'totalscore').orderBy('totalscore', 'desc').limit(15).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  });
}


//获取用户基本状态'open_id', 'weekscore', 'totalscore'
async function getUserStatus(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('open_id', 'weekscore', 'totalscore').where('open_id', openId).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  }
  );
}

//获取用户的原积分
async function getUserScore(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('totalscore').where('open_id', openId).then(res => {
      resovle(res[0].totalscore);
    }, err => {
      reject(err)
    })
  })
}

//更新用户积分数据
async function updateUserScore(openId, score) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').where('open_id', openId).update('totalscore', score).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}







module.exports = {
  getUserStatus,
  updateUserScore,
  getUserScore,
  getRankingLists
}
