# koa-log4j2-example
koa 整合 [log4js](https://github.com/log4js-node/log4js-node) 例子
[文档地址](https://log4js-node.github.io/log4js-node/)<br>

想使用 koa 做 web 框架,在找日志模块,找了些,都没有自己满意的
按理说,express 支持的中间件,koa 也会支持的.但是看了些别人将 koa 和 log4js 整合的例子,好复杂(想不通他们是怎么想的),于是就自己写了个 demo 传上来.

## 运行 Demo
安装依赖
```
npm install
```
启动
```
npm start
```
启动后访问localhost:3000,再查看项目中的log文件夹,里面就生成了三个文件,并保存有日志

## 如何将 log4js 加入到 koa 中
使用 koa 的 use 方法调用`src\common\logger`,然后就可以使用log4js输出日志了
记得,调用`log4js.configure(path.resolve(__dirname, '..', 'config', 'log4j.json'));`的代码要在项目启动前加载,不然可能会造成生成的日志没有保存到文件中
简单来说,就是,这段代码,越早执行越好

## 配置文件说明
src\config\log4j.json是配置文件
配置了三个类别
一个是http请求日志,相当于tomcat的access日志,当日志到达30M时,重新生成一个新的文件
一个是保存debug和info级别的日志.每天生成一个新的文件
一个是保存error及以上等级的日志.每天生成一个新的文件
## 使用log4j
```
var log4js = require('log4js');
```
这样,就可以在项目中的其他地方使用log4j输出日志了.
```
var logger = require('log4js').getLogger("index");
logger.info('');
logger.error('');
```



ps: 大概是一年前的这时候,刚换公司,开始写 node,用的是 express,使用的过程中,想把日志模块加入到 express 中
因为之前写 java 都是用的 log4j,对于 log4j 的配置项都熟悉,所以就找了 log4js 这个模块
因为那时候 log4js 刚发布2.X 版本不久吧,2.X版本的配置很少,我就写了个 demo 传了上来,这一年来,那个项目陆陆续续竟然收到了10个 star😂
