// 创建服务器反向代理，因为底层是用node.js运行,所有使用module.export来导出
module.exports = {
  // 开发服务器设置
  devServer: {
    // 是否每次运行都自动打开一个页面,最好不设置，因为后面运行都要重新打开
    open: true,
    // npm run serve 启动之后的端口号
    port: 3000,
    // 如果你启动了eslint,不要让eslint在中遮罩，它的错误会展示在console.log
    overlay: false,
    // vue项目的代理请求
    proxy: {
      //规则 当前面有/api的时候就利用服务器反向代理解决开发中的跨域问题
      "/api": {
        // 把相对地址的域名 映射到 目标地址中
        // localhost:3000 =>https://api.iynn.cn/film/api/v1
        target: "https://api.iynn.cn/film/api/v1",
        //跨域是因为浏览器的同源限制，但是服务器请求服务器不存在跨域
        // 代理服务器就是我先将我的请求代理到node服务器上，服务器再请求另外一个服务器就不存在跨域问题
        // 设置为true  就是伪装为别的服务器身份发送请求，false 以自己的身份发送请求
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
