const allBless = ['身体健康', '事业有成', '平平安安', '益寿延年', '鸿运当头', '金玉满堂', '鱼跃龙门', '三阳开泰', '五谷丰登', '风顺家兴', '敛福生财', '鹏程万里', '金玉满堂', '大吉大利', '吉祥如意', '开岁百富', '添福增寿', '福寿康宁', '天保九如', '寿如南岳', '紫气东来', '怡然自乐', '蟠桃献颂', '身体健康', '身体健康', '龙马精神', '身体健康', '福运双全', '事业有成', '事业有成', '平平安安', '平平安安', '大吉大利', '大吉大利', '吉祥如意', '吉祥如意', '吉祥如意', '福寿康宁', '福寿康宁', '五谷丰登', '风顺家兴', '五谷丰登', '风顺家兴', '身体健康', '身体健康', '龙马精神', '身体健康', '福运双全', '事业有成', '事业有成', '平平安安', '平平安安', '大吉大利', '大吉大利', '吉祥如意', '吉祥如意', '吉祥如意', '福寿康宁', '福寿康宁', '五谷丰登', '风顺家兴', '五谷丰登', '风顺家兴'];

const length = allBless.length;

//产生新的祝福词
function generateBless(havedBless) {
  let tempArr = allBless;
  let randomIndex = randomLength();
  return tempArr[randomIndex];
}

function randomLength() {
  return Math.floor(Math.random() * length);
}

//非重复加入数组
function uniqueAdd(item, arr) {
  if (!arr.includes(item)) {
    arr.push(item);
  }
  return arr;
}

module.exports = {
  generateBless,
  uniqueAdd
}
