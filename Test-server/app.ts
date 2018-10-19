import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as bodyParser from 'koa-bodyparser'
import * as http from 'http'
import router from './routes'

const app = new Koa()

app.use(logger())

app.use(bodyParser())

app.use(router.routes())

http.createServer(app.callback()).listen(3344, () => {
    console.log('server start on port: 3344')
})
