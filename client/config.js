/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = '59431301.qcloud.la';

var host = 'xjvsbdcx.qcloud.la';

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
    }
};

module.exports = config;