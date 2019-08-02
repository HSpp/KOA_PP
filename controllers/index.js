
// const bodyParser = require('koa-bodyparser');
// const Koa = require('koa');
var login=require('./login')

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html');
        await next();
    },
    'POST /login':async (ctx,next)=>{
        var result=await login(ctx)
        ctx.response.body={result:result}

    }
    
};