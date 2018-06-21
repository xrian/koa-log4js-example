/**
 * Created by xrian on 2018/6/21.
 */
const log4js = require('log4js'); // 日志
const path = require('path');
// 加载日志配置文件
log4js.configure(path.resolve(__dirname, '..', 'config', 'log4j.json'));

module.exports = () => {
  const fn = log4js.connectLogger(log4js.getLogger('http'), { level: 'trace' });
  return (ctx, next) =>
    new Promise((resolve, reject) => {
      fn(ctx.req, ctx.res, err => (err ? reject(err) : resolve(ctx)));
    }).then(next);
};
