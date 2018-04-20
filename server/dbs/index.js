const { mysql } = require('../qcloud.js');


//获取排行榜信息
async function getRankingLists() {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('user_info', 'totalscore').orderBy('totalscore', 'desc').limit(50).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  });
}


//获取用户基本状态'open_id', 'weekscore', 'totalscore', 'bonus'
async function getUserStatus(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('open_id', 'weekscore', 'totalscore', 'bonus').where('open_id', openId).then(res => {
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

//获取用户bonus信息
async function getUserBonus(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('bonus').where('open_id', openId).then(res => {
      resovle(res[0].bonus);
    }, err => {
      reject(err)
    })
  })
}

//更新用户bonus数据
async function updateUserBonus(openId, bonus) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').where('open_id', openId).update('bonus', bonus).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}

//获得用户collections数据
async function getUserCollections(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('userCollections').select('collections').where('open_id', openId).then(res => {
      resovle(res[0].collections);
    }, err => {
      reject(err)
    })
  })
}

//更新用户collections数据

async function updateUserCollections(openId, collections) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('userCollections').where('open_id', openId).update('collections', collections).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}

async function initUserCollections(openId, collections) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('userCollections').insert({ open_id: openId, collections: collections }).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}

async function checkUserCollections(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('userCollections').select('collections').where('open_id', openId).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}

async function checkUserShare(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').select('shareStatus').where('open_id', openId).then(res => {
      resovle(res[0].shareStatus);
    }, err => {
      reject(err)
    })
  })
}

async function setZeroUserShare(openId) {
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('cSessionInfo').where('open_id', openId).update('shareStatus', 0).then(res => {
      resovle(res);
    }, err => {
      reject(err)
    })
  })
}

async function getAllStory(){
  return new Promise(function (resovle, reject) {
    mysql('cAuth').table('story').select('title','part1','part2').then(res => {
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
  getRankingLists,
  getUserBonus,
  updateUserBonus,
  getUserCollections,
  updateUserCollections,
  initUserCollections,
  checkUserCollections,
  checkUserShare,
  setZeroUserShare,
  getAllStory
}
