/**
 * Created by zhangsong on 2018/6/21.
 */
const Koa = require('koa');
const Log = require('./src/common/logger');
const logger = require('log4js').getLogger('app.js');

// koa 基本对象
const app = new Koa();

// 路由对象
app.use(Log()).use((ctx)=> {
  ctx.response.body = 'Hello World';
});

app.listen(3000);
logger.info('服务启动成功');
