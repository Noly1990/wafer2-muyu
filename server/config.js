const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx35801fc4c64962f4',

    // 微信小程序 App Secret
    appSecret: '1ac78e22d456f08ed90a0ef40f747f2f',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     * 生产LP3CjxeLM3Wz9avE
     * 测试:'bw9Y0eaLAm67wxfJ',
     * Root123456
     */
    mysql: {
        host: '172.16.164.155',
        //host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
         pass: 'LP3CjxeLM3Wz9avE',
        //pass:'bw9Y0eaLAm67wxfJ',
        char: 'utf8mb4'
    },
    // mysql: {
    //   //host: '172.16.164.155',
    //   host: 'localhost',
    //   port: 3306,
    //   user: 'root',
    //   db: 'cAuth',
    //   //pass: 'LP3CjxeLM3Wz9avE',
    //   //pass:'bw9Y0eaLAm67wxfJ',
    //   pass:'wx35801fc4c64962f4',
    //   char: 'utf8mb4'
    // },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },
    
    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
