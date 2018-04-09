/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = '59431301.qcloud.la';
//dckeayxo.qcloud.la
//测试环境
// var host = 'dckeayxo.qcloud.la';
//生产环境
 var host = '556351447.lxxiyou.cn';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,
        //把https改成了http
        // 登录地址，用于建立会话
        loginUrl: `https://${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `https://${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `https://${host}/weapp/tunnel`,

        //分数上传的地址
        upLoadScoreUrl: `https://${host}/weapp/upLoadScore`,

        //获取用户初始状态地址
        getUserStatusUrl: `https://${host}/weapp/getUserStatus`,

        //获得排行榜信息
        getRankingUrl: `https://${host}/weapp/getRanking`,

        //抽奖api
        lottoUrl: `https://${host}/weapp/lotto`,

        //获取用户bonus
        getUserBonusUrl: `https://${host}/weapp/getUserBonus`,

        //bless
        blessUrl: `https://${host}/weapp/bless`,

        //获取集福collections
        getCollectionsUrl: `https://${host}/weapp/getCollections`,

        //用户分享加分url
        doShareUrl: `https://${host}/weapp/doShare`
    }
};

module.exports = config;