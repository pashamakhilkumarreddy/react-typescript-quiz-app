const Koa = require('koa');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const helmet = require('koa-helmet');
const compression = require('koa-compress');
const responseTime = require('koa-response-time');
const rateLimit = require('koa-ratelimit');

const {
  server: {
    PORT,
  },
} = require('./config');

const app = new Koa();
const db = new Map();

app
  .use(logger())
  .use(cors())
  .use(koaBody())
  .use(helmet())
  .use(compression())
  .use(responseTime({
    hrtime: true,
  }))
  .use(rateLimit({
    driver: 'memory',
    db,
    duration: 90000,
    errorMessage: 'Too many requests',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total',
    },
    max: 150,
    disableHeader: false,
  }));

require('./routes')({
  app,
});

app.listen(PORT, () => {
  console.info(`The application is up and running on PORT ${PORT}`);
});
