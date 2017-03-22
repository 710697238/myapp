# 基于WEB的人事管理系统

> 基本实现了登录，用户权限管理，部分页面验证，增加员工，基础的增删查改都完善了。<br>
另外，基本的加密存储密码这些都有的，目前系统实用性不强，但可以用作入门express的参考<br>
尽量往MVC靠拢了，app负责路由转发，jade负责view，js负责M、C，很多命名不规范，两三天快速入门的东西<br>
看心情去一步步补齐功能了~~


## 系统技术栈
后端： node + express + jade

前端: Bootstrap + JQuery（大量ajax交互）

数据库： mysql(使用了线程池，配置文件在pool.js里面)

适用环境： 全平台 支持IE8+

> 相比网上很多类似的Java web ，修改更方便。部署也简单。 

#### 系统介绍
使用该系统，可以方便地进行系统管理，人事档案管理，部门管理，教育培训管理，还能够快捷地查询公司员工的情况

![系统结构](/gitpage/feature1.png "系统结构")

## Demo

部署非常方便

> 在 Windows 上，使用以下命令：
> set DEBUG=myapp:* & npm start

![使用1](/gitpage/demo1.gif "Optional Title")

分级用户权限

![使用2](/gitpage/demo2.gif "Optional Title")

更多请部署...


## Requirements Install and Usage

```
$ git clone git@github.com:cncoder/myapp.git

$ cd myapp

$ npm install 

在 MacOS 或 Linux 上，采用以下命令运行此应用程序：

$ DEBUG=myapp:* npm start

在 Windows 上，使用以下命令：

> set DEBUG=myapp:* & npm start

然后在浏览器中装入 http://localhost/ 以访问此应用程序

```

![文件结构](/gitpage/file1.png "文件结构")
更多内容请到： [Express 中文官网](http://expressjs.com/zh-cn/)


## Issues Report

非常欢迎发issues, 发issues找我聊天都欢迎.

## Feature

* 错误处理

**未完待续**

## License

(The MIT License)

Copyright (c) 2017 Romennts &lt;romennts@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
