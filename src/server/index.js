import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';

const port = 3000;
const app = koa();

app.use(logger());
app.use(serve('public'));

app.listen(port);
console.log(`Listening on port ${port}`);
