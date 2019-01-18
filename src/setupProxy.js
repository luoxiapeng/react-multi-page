/**
 * 配置开发环境跨域请求
 * @type {*|(function(): HPM)}
 */
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api',
        {
            target: 'http://localhost:4000', // 接口域名
            "changeOrigin":true , // 是否跨域
            pathRewrite:{  //需要rewrite重写
                '^/api':''
            }
        }));
};