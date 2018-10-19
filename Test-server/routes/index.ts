import * as Router from 'koa-router'
import { Context } from 'koa'

const router = new Router()

router.post('/test', (ctx: Context) => {
    ctx.body = ctx.request.body
})

export default router
