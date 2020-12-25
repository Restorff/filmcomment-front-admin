# 影评系统后台管理界面
 本项目基于vue-admin-template进行二次开发。

> 这是一个 极简的 vue admin 管理后台 它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

[线上地址](http://panjiachen.github.io/vue-admin-template)

[国内访问](https://panjiachen.gitee.io/vue-admin-template)


# 修改接口
项目依赖的后端接口源代码：[https://gitee.com/laisituofu/filmcomment-interface](http://gitee.com/laisituofu/filmcomment-interface)
将上面项目部署好之后，修改config文件夹下的dev.dev.js中的BASE_API为本地的接口

# 启动项目

```bash

# 安装依赖
npm install

# 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 运行下面命令，服务将在 localhost:9528 热加载运行
npm run dev

```

